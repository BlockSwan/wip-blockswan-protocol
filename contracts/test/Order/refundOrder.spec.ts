import { OutputTypes as OrderOutputs } from '../../types/protocol/order/Order'
import { OutputTypes as GigOutputs } from '../../types/protocol/gig/Gig'

import { waitForTx } from '../../utilities/tx'
import { expect } from 'chai'
import {
    DEFAULT_BALANCE,
    GIG_TEST0,
    GIG_TEST1,
    ORDER_CREATION_PARAMS,
    ORDER_TEST0,
    USER_TEST0,
    USER_TEST1,
} from '../../helpers/constants'
import {
    getBalances,
    setupBuyer,
    setupSeller,
    setupUser,
} from '../../helpers/test_helpers'
import {
    Balance,
    GigInput,
    OrderState,
    SignerWithAddress,
    TestEnv,
    UserInput,
} from '../../helpers/types'
import makeSuite from '../fixtures/makeSuite'
import { time } from '@nomicfoundation/hardhat-network-helpers'
import { calcOrderPrice } from '../../utilities/helpers'

describe('Order: refund', () => {
    let testEnv = {} as TestEnv
    let { User, XP, ProtocolConfigurator, mUSDC, dat, ACLManager, Gig, Order } =
        testEnv
    let buyer: SignerWithAddress
    let seller: SignerWithAddress
    let random: SignerWithAddress
    let buyerBalanceBefore: Balance
    let sellerBalanceBefore: Balance
    let orderBalanceBefore: Balance
    let timestamp: number
    let orderData: OrderOutputs.OrderOutputStruct
    let gigData: GigOutputs.GigOutputStructOutput

    beforeEach(async () => {
        testEnv = await makeSuite()
        User = testEnv.User
        Gig = testEnv.Gig
        mUSDC = testEnv.mUSDC
        Order = testEnv.Order
        dat = testEnv.dat
        XP = testEnv.XP
        ACLManager = testEnv.ACLManager
        ProtocolConfigurator = testEnv.ProtocolConfigurator
        buyer = testEnv.users[0]
        buyerBalanceBefore = DEFAULT_BALANCE
        seller = testEnv.users[1]
        sellerBalanceBefore = DEFAULT_BALANCE
        random = testEnv.users[2]
        sellerBalanceBefore = DEFAULT_BALANCE

        async function setup(
            user: SignerWithAddress,
            userArgs: UserInput,
            gigArgs: GigInput,
            userBalance: Balance,
            role: 'buyer' | 'seller'
        ) {
            await setupUser(user, userArgs)
            if (role === 'seller') {
                await setupSeller(user, userBalance)
                await Gig.connect(user.signer).createGig(...gigArgs)
            } else await setupBuyer(user, userBalance)
        }

        await setup(
            seller,
            USER_TEST0,
            GIG_TEST0,
            sellerBalanceBefore,
            'seller'
        )
        await setup(buyer, USER_TEST1, GIG_TEST1, buyerBalanceBefore, 'buyer')
        await setup(random, USER_TEST1, GIG_TEST1, DEFAULT_BALANCE, 'seller')

        timestamp = await time.latest()

        waitForTx(await Order.connect(buyer.signer).createOrder(ORDER_TEST0))
        gigData = await Gig.getGigById(0)
        orderData = await Order.getOrderById(0)
        waitForTx(
            await Order.connect(seller.signer).confirmOrder(
                orderData.orderId,
                orderData.sellerId
            )
        )
        buyerBalanceBefore = await getBalances(buyer)
        orderBalanceBefore = await getBalances(Order)
        sellerBalanceBefore = await getBalances(seller)
    })

    describe('can refund buyer', () => {
        let buyerBalanceAfter: Balance
        let sellerBalanceAfter: Balance
        let orderBalanceAfter: Balance

        beforeEach(async () => {
            waitForTx(
                await Order.connect(seller.signer).refundOrder(
                    orderData.orderId,
                    orderData.sellerId,
                    orderData.buyerId
                )
            )
            buyerBalanceAfter = await getBalances(buyer)
            sellerBalanceAfter = await getBalances(seller)
            orderBalanceAfter = await getBalances(Order)
        })

        it('should have refunded the buyer', async () => {
            expect(buyerBalanceAfter.USDC).to.be.equal(
                buyerBalanceBefore.USDC +
                    calcOrderPrice(
                        Number(orderData.invoice.price),
                        ORDER_CREATION_PARAMS
                    )
            )
        })

        it('should have the correct state', async () => {
            let newData = await Order.getOrderById(0)
            expect(newData.state).to.be.equal(OrderState.DONE)
        })
    })
})
