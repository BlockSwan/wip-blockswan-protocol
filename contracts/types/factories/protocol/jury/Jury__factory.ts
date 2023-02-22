/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Jury, JuryInterface } from "../../../protocol/jury/Jury";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAddressProvider",
        name: "provider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IAddressProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ADDRESS_PROVIDER",
    outputs: [
      {
        internalType: "contract IAddressProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_UINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toStake",
        type: "uint256",
      },
    ],
    name: "depositStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfJurors",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "disputeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
    ],
    name: "drawJurors",
    outputs: [
      {
        internalType: "address[]",
        name: "jurors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "fetchContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasProtocolRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gigId",
        type: "uint256",
      },
      {
        internalType: "contract IUser",
        name: "UserContract",
        type: "address",
      },
    ],
    name: "isGigOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isStillBuyer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isStillSeller",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "readJuror",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakedTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "freezedTokens",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Juror",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAddressProvider",
        name: "_providerAddress",
        type: "address",
      },
    ],
    name: "setProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toWithdraw",
        type: "uint256",
      },
    ],
    name: "withdrawStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000196007553480156200001757600080fd5b5060405162001c3e38038062001c3e8339810160408190526200003a91620001ab565b806200004f6200004962000155565b62000159565b6040805180820190915260018152603560f81b60208201526001600160a01b0382166200009a5760405162461bcd60e51b8152600401620000919190620001db565b60405180910390fd5b50600680546001600160a01b0319166001600160a01b039290921691909117905560405163483abc4f60e11b815273__$819dd864b9a28b29592cd77136582b47ce$__90639075789e906200011c906000907f426c6f636b7377616e2f536f72746974696f6e53756d5472656573000000000090620400009060040162000231565b60006040518083038186803b1580156200013557600080fd5b505af41580156200014a573d6000803e3d6000fd5b505050505062000247565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215620001bd578081fd5b81516001600160a01b0381168114620001d4578182fd5b9392505050565b6000602080835283518082850152825b818110156200020957858101830151858201604001528201620001eb565b818111156200021b5783604083870101525b50601f01601f1916929092016040019392505050565b9283526020830191909152604082015260600190565b6119e780620002576000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063985fadc8116100a2578063cfd8d6c011610071578063cfd8d6c01461020d578063d048994514610220578063daea85c514610240578063e5b5019a14610253578063f2fde38b1461026857610116565b8063985fadc8146101b4578063a5b10f5a146101c7578063b817bcf7146101e7578063cb82cc8f146101fa57610116565b806325d5971f116100e957806325d5971f1461017457806341c0e1b514610187578063715018a61461019157806379a558e7146101995780638da5cb5b146101ac57610116565b80630542975c1461011b57806311e0c07b146101395780631848effa1461015957806319872f7614610161575b600080fd5b61012361027b565b604051610130919061162c565b60405180910390f35b61014c61014736600461159d565b61028a565b60405161013091906116eb565b610123610313565b61012361016f3660046112ca565b610322565b61014c6101823660046112ca565b6103ab565b61018f61059f565b005b61018f6105d5565b61014c6101a736600461126b565b6105e9565b61012361069f565b61014c6101c23660046112e2565b6106ae565b6101da6101d53660046115d5565b6106f5565b604051610130919061169e565b61014c6101f536600461126b565b6109d7565b61014c6102083660046112ca565b610a8e565b61018f61021b36600461126b565b610c61565b61023361022e36600461126b565b610d4b565b6040516101309190611870565b61018f61024e36600461126b565b610dde565b61025b610eb4565b60405161013091906116f6565b61018f61027636600461126b565b610eba565b6006546001600160a01b031690565b60405163fbd2817f60e01b81526000906001600160a01b0383169063fbd2817f906102bb90879087906004016118db565b60206040518083038186803b1580156102d357600080fd5b505afa1580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030b91906112aa565b949350505050565b6006546001600160a01b031681565b600654604051630cc397bb60e11b81526000916001600160a01b0316906319872f76906103539085906004016116f6565b60206040518083038186803b15801561036b57600080fd5b505afa15801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a3919061128e565b90505b919050565b6000806103b6610ef4565b90508260036000836001600160a01b03166001600160a01b0316815260200190815260200160002054101560405180604001604052806002815260200161323760f01b815250906104235760405162461bcd60e51b815260040161041a9190611716565b60405180910390fd5b5060405163bf74405760e01b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063bf744057906104769086908590600080516020611992833981519152906001906003906000906004016118aa565b60206040518083038186803b15801561048e57600080fd5b505af41580156104a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c691906112aa565b5060006104d86211105560ea1b610322565b60405163a9059cbb60e01b81529091506001600160a01b0382169063a9059cbb906105099085908890600401611685565b602060405180830381600087803b15801561052357600080fd5b505af1158015610537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055b91906112aa565b60405180604001604052806002815260200161323960f01b815250906105945760405162461bcd60e51b815260040161041a9190611716565b506001949350505050565b6006546001600160a01b031633146105c757634e487b7160e01b600052600160045260246000fd5b6006546001600160a01b0316ff5b6105dd610ef8565b6105e76000610f37565b565b60006105fd64212aaca2a960d91b836106ae565b80156103a3575042610615632aa9a2a960e11b610322565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b8152600401610640919061162c565b60006040518083038186803b15801561065857600080fd5b505afa15801561066c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261069491908101906113c4565b604001511192915050565b6005546001600160a01b031690565b6000806106c86a20a1a62fa6a0a720a3a2a960a91b610322565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b81526004016102bb9291906116ff565b6060664449535055544560c81b61070b81610322565b6001600160a01b031661071c610ef4565b6001600160a01b03161460405180604001604052806002815260200161199b60f11b8152509061075f5760405162461bcd60e51b815260040161041a9190611716565b50600061076a610f89565b90508567ffffffffffffffff81111561079357634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156107bc578160200160208202803683370190505b50925060005b868110156109cd57604051633bf8c43160e01b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__90633bf8c4319061081890600090600080516020611992833981519152908b908b908890600401611887565b60206040518083038186803b15801561083057600080fd5b505af4158015610844573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610868919061128e565b84828151811061088857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250506108fa60405180604001604052806009815260200168444f494e473a20257360b81b8152508583815181106108ed57634e487b7160e01b600052603260045260246000fd5b602002602001015161102a565b6109bb84828151811061091d57634e487b7160e01b600052603260045260246000fd5b602002602001015173__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__633e8973e5856000015186602001516040518363ffffffff1660e01b81526004016109669291906118db565b60206040518083038186803b15801561097e57600080fd5b505af4158015610992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b69190611585565b611073565b806109c58161193f565b9150506107c2565b5050509392505050565b60006109ec6529a2a62622a960d11b836106ae565b80156103a3575042610a04632aa9a2a960e11b610322565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b8152600401610a2f919061162c565b60006040518083038186803b158015610a4757600080fd5b505afa158015610a5b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a8391908101906113c4565b608001511192915050565b600080610a99610ef4565b90506000610aa5610f89565b90506000610ab86211105560ea1b610322565b8251604080518082019091526002815261323760f01b6020820152919250861015610af65760405162461bcd60e51b815260040161041a9190611716565b50604051636779b25760e01b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__90636779b25790610b499088908790600080516020611992833981519152906001906003906000906004016118aa565b60206040518083038186803b158015610b6157600080fd5b505af4158015610b75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9991906112aa565b506040516323b872dd60e01b81526001600160a01b038216906323b872dd90610bca90869030908a90600401611640565b602060405180830381600087803b158015610be457600080fd5b505af1158015610bf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c91906112aa565b60405180604001604052806002815260200161064760f31b81525090610c555760405162461bcd60e51b815260040161041a9190611716565b50600195945050505050565b6001600160a01b0381161580610c8157506006546001600160a01b031633145b80610d0d5750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610cca57600080fd5b505afa158015610cde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d02919061128e565b6001600160a01b0316145b610d295760405162461bcd60e51b815260040161041a90611799565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b610d5361113a565b604051633c8d881560e21b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063f236205490610d8f9085906003906004908101611664565b604080518083038186803b158015610da657600080fd5b505af4158015610dba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a39190611376565b6d282927aa27a1a7a62fa0a226a4a760911b610dfc816101c2610ef4565b610e185760405162461bcd60e51b815260040161041a90611839565b6000610e296211105560ea1b610322565b60075460405163095ea7b360e01b81529192506001600160a01b0385169163095ea7b391610e5c91859190600401611685565b602060405180830381600087803b158015610e7657600080fd5b505af1158015610e8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eae91906112aa565b50505050565b60075481565b610ec2610ef8565b6001600160a01b038116610ee85760405162461bcd60e51b815260040161041a90611753565b610ef181610f37565b50565b3390565b610f00610ef4565b6001600160a01b0316610f1161069f565b6001600160a01b0316146105e75760405162461bcd60e51b815260040161041a90611804565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610f91611154565b6000610fb474282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b610322565b6001600160a01b03166382db8b076040518163ffffffff1660e01b815260040160806040518083038186803b158015610fec57600080fd5b505afa158015611000573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110249190611311565b91505090565b61106f8282604051602401611040929190611729565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052611119565b5050565b604051639ba4b2c560e01b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__90639ba4b2c5906110c490849086906000805160206119928339815191529060039060049060009082016118aa565b60206040518083038186803b1580156110dc57600080fd5b505af41580156110f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111491906112aa565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b604051806040016040528060008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b80516103a68161197c565b600082601f830112611197578081fd5b8151602067ffffffffffffffff8211156111b3576111b3611966565b8082026111c18282016118e9565b8381528281019086840183880185018910156111db578687fd5b8693505b858410156111fd5780518352600193909301929184019184016111df565b50979650505050505050565b600082601f830112611219578081fd5b815167ffffffffffffffff81111561123357611233611966565b611246601f8201601f19166020016118e9565b81815284602083860101111561125a578283fd5b61030b826020830160208701611913565b60006020828403121561127c578081fd5b81356112878161197c565b9392505050565b60006020828403121561129f578081fd5b81516112878161197c565b6000602082840312156112bb578081fd5b81518015158114611287578182fd5b6000602082840312156112db578081fd5b5035919050565b600080604083850312156112f4578081fd5b8235915060208301356113068161197c565b809150509250929050565b600060808284031215611322578081fd5b6040516080810181811067ffffffffffffffff8211171561134557611345611966565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b600060408284031215611387578081fd5b6040516040810181811067ffffffffffffffff821117156113aa576113aa611966565b604052825181526020928301519281019290925250919050565b6000602082840312156113d5578081fd5b815167ffffffffffffffff808211156113ec578283fd5b81840191506101e0808387031215611402578384fd5b61140b816118e9565b905082518281111561141b578485fd5b61142787828601611209565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261147260e0840161117c565b60e0820152610100808401518381111561148a578586fd5b61149688828701611187565b82840152505061012080840151838111156114af578586fd5b6114bb88828701611187565b82840152505061014080840151838111156114d4578586fd5b6114e088828701611187565b82840152505061016080840151838111156114f9578586fd5b61150588828701611187565b828401525050610180808401518381111561151e578586fd5b61152a88828701611187565b8284015250506101a08084015183811115611543578586fd5b61154f88828701611187565b8284015250506101c08084015183811115611568578586fd5b61157488828701611187565b918301919091525095945050505050565b600060208284031215611596578081fd5b5051919050565b6000806000606084860312156115b1578081fd5b833592506020840135915060408401356115ca8161197c565b809150509250925092565b6000806000606084860312156115e9578081fd5b505081359360208301359350604090920135919050565b60008151808452611618816020860160208601611913565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156116df5783516001600160a01b0316835292840192918401916001016116ba565b50909695505050505050565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6000602082526112876020830184611600565b60006040825261173c6040830185611600565b905060018060a01b03831660208301529392505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b815181526020918201519181019190915260400190565b948552602085019390935260408401919091526060830152608082015260a00190565b9586526001600160a01b0394909416602086015260408501929092526060840152608083015260a082015260c00190565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561190b5761190b611966565b604052919050565b60005b8381101561192e578181015183820152602001611916565b83811115610eae5750506000910152565b600060001982141561195f57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ef157600080fdfe426c6f636b7377616e2f536f72746974696f6e53756d54726565730000000000a2646970667358221220a1037b16725fee73608fc688ef95c37c611ffb92406720464b026ba81409dd3f64736f6c63430008000033";

type JuryConstructorParams =
  | [linkLibraryAddresses: JuryLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Jury__factory extends ContractFactory {
  constructor(...args: JuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Jury__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: JuryLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$819dd864b9a28b29592cd77136582b47ce\\$__", "g"),
      linkLibraryAddresses[
        "contracts/imports/kleros/contracts/SortitionSumTreeFactory.sol:SortitionSumTreeFactory"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$d4e29236ef5669bc8e4309ccc6f37ccd7f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/JuryLogic.sol:JuryLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Jury> {
    return super.deploy(provider, overrides || {}) as Promise<Jury>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): Jury {
    return super.attach(address) as Jury;
  }
  override connect(signer: Signer): Jury__factory {
    return super.connect(signer) as Jury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JuryInterface {
    return new utils.Interface(_abi) as JuryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Jury {
    return new Contract(address, _abi, signerOrProvider) as Jury;
  }
}

export interface JuryLibraryAddresses {
  ["contracts/imports/kleros/contracts/SortitionSumTreeFactory.sol:SortitionSumTreeFactory"]: string;
  ["contracts/protocol/libraries/logics/JuryLogic.sol:JuryLogic"]: string;
}