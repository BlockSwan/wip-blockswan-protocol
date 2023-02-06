/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ProviderContract,
  ProviderContractInterface,
} from "../../../protocol/configuration/ProviderContract";

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
] as const;

const _bytecode =
  "0x608060405260001960025534801561001657600080fd5b50604051610f1b380380610f1b83398101604081905261003591610107565b6100456100406100b3565b6100b7565b6040805180820190915260018152603560f81b60208201526001600160a01b03821661008d5760405162461bcd60e51b81526004016100849190610135565b60405180910390fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055610188565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610118578081fd5b81516001600160a01b038116811461012e578182fd5b9392505050565b6000602080835283518082850152825b8181101561016157858101830151858201604001528201610145565b818111156101725783604083870101525b50601f01601f1916929092016040019392505050565b610d84806101976000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063cfd8d6c011610066578063cfd8d6c01461019b578063daea85c5146101ae578063e5b5019a146101c1578063f2fde38b146101d6576100ea565b80638da5cb5b1461016d578063985fadc814610175578063b817bcf714610188576100ea565b806319872f76116100c857806319872f761461013557806341c0e1b514610148578063715018a61461015257806379a558e71461015a576100ea565b80630542975c146100ef57806311e0c07b1461010d5780631848effa1461012d575b600080fd5b6100f76101e9565b6040516101049190610b76565b60405180910390f35b61012061011b366004610b3e565b6101f8565b6040516101049190610ba3565b6100f7610281565b6100f7610143366004610936565b610290565b610150610319565b005b61015061034f565b6101206101683660046108d7565b610363565b6100f7610419565b61012061018336600461094e565b610428565b6101206101963660046108d7565b61046f565b6101506101a93660046108d7565b610526565b6101506101bc3660046108d7565b610619565b6101c96106ef565b6040516101049190610bae565b6101506101e43660046108d7565b6106f5565b6001546001600160a01b031690565b60405163fbd2817f60e01b81526000906001600160a01b0383169063fbd2817f906102299087908790600401610ceb565b60206040518083038186803b15801561024157600080fd5b505afa158015610255573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102799190610916565b949350505050565b6001546001600160a01b031681565b600154604051630cc397bb60e11b81526000916001600160a01b0316906319872f76906102c1908590600401610bae565b60206040518083038186803b1580156102d957600080fd5b505afa1580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031191906108fa565b90505b919050565b6001546001600160a01b0316331461034157634e487b7160e01b600052600160045260246000fd5b6001546001600160a01b0316ff5b61035761072f565b610361600061076e565b565b600061037764212aaca2a960d91b83610428565b801561031157504261038f632aa9a2a960e11b610290565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b81526004016103ba9190610b76565b60006040518083038186803b1580156103d257600080fd5b505afa1580156103e6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261040e919081019061097d565b604001511192915050565b6000546001600160a01b031690565b6000806104426a20a1a62fa6a0a720a3a2a960a91b610290565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b8152600401610229929190610bb7565b60006104846529a2a62622a960d11b83610428565b801561031157504261049c632aa9a2a960e11b610290565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b81526004016104c79190610b76565b60006040518083038186803b1580156104df57600080fd5b505afa1580156104f3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261051b919081019061097d565b608001511192915050565b6001600160a01b038116158061054657506001546001600160a01b031633145b806105d25750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561058f57600080fd5b505afa1580156105a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c791906108fa565b6001600160a01b0316145b6105f75760405162461bcd60e51b81526004016105ee90610c14565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6d282927aa27a1a7a62fa0a226a4a760911b610637816101836107be565b6106535760405162461bcd60e51b81526004016105ee90610cb4565b60006106646211105560ea1b610290565b60025460405163095ea7b360e01b81529192506001600160a01b0385169163095ea7b39161069791859190600401610b8a565b602060405180830381600087803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e99190610916565b50505050565b60025481565b6106fd61072f565b6001600160a01b0381166107235760405162461bcd60e51b81526004016105ee90610bce565b61072c8161076e565b50565b6107376107be565b6001600160a01b0316610748610419565b6001600160a01b0316146103615760405162461bcd60e51b81526004016105ee90610c7f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b3390565b805161031481610d39565b600082601f8301126107dd578081fd5b8151602067ffffffffffffffff8211156107f9576107f9610d23565b808202610807828201610cf9565b838152828101908684018388018501891015610821578687fd5b8693505b85841015610843578051835260019390930192918401918401610825565b50979650505050505050565b600082601f83011261085f578081fd5b815167ffffffffffffffff81111561087957610879610d23565b602061088d601f8301601f19168201610cf9565b82815285828487010111156108a0578384fd5b835b838110156108bd5785810183015182820184015282016108a2565b838111156108cd57848385840101525b5095945050505050565b6000602082840312156108e8578081fd5b81356108f381610d39565b9392505050565b60006020828403121561090b578081fd5b81516108f381610d39565b600060208284031215610927578081fd5b815180151581146108f3578182fd5b600060208284031215610947578081fd5b5035919050565b60008060408385031215610960578081fd5b82359150602083013561097281610d39565b809150509250929050565b60006020828403121561098e578081fd5b815167ffffffffffffffff808211156109a5578283fd5b81840191506101e08083870312156109bb578384fd5b6109c481610cf9565b90508251828111156109d4578485fd5b6109e08782860161084f565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152610a2b60e084016107c2565b60e08201526101008084015183811115610a43578586fd5b610a4f888287016107cd565b8284015250506101208084015183811115610a68578586fd5b610a74888287016107cd565b8284015250506101408084015183811115610a8d578586fd5b610a99888287016107cd565b8284015250506101608084015183811115610ab2578586fd5b610abe888287016107cd565b8284015250506101808084015183811115610ad7578586fd5b610ae3888287016107cd565b8284015250506101a08084015183811115610afc578586fd5b610b08888287016107cd565b8284015250506101c08084015183811115610b21578586fd5b610b2d888287016107cd565b918301919091525095945050505050565b600080600060608486031215610b52578081fd5b83359250602084013591506040840135610b6b81610d39565b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715610d1b57610d1b610d23565b604052919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461072c57600080fdfea2646970667358221220b0229cfbb63efd18b5b848692dab44dbba1e3154b07a64af5766e3ddc24d9d1d64736f6c63430008000033";

type ProviderContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProviderContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProviderContract__factory extends ContractFactory {
  constructor(...args: ProviderContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProviderContract> {
    return super.deploy(provider, overrides || {}) as Promise<ProviderContract>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): ProviderContract {
    return super.attach(address) as ProviderContract;
  }
  override connect(signer: Signer): ProviderContract__factory {
    return super.connect(signer) as ProviderContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProviderContractInterface {
    return new utils.Interface(_abi) as ProviderContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProviderContract {
    return new Contract(address, _abi, signerOrProvider) as ProviderContract;
  }
}
