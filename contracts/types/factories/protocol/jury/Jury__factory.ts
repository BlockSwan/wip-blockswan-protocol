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
    ],
    name: "drawJurors",
    outputs: [
      {
        internalType: "address[]",
        name: "jurors",
        type: "address[]",
      },
    ],
    stateMutability: "view",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "freezeTokens",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "juror",
        type: "address",
      },
    ],
    name: "rewardJuror",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "unfreezeTokens",
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
  "0x60806040526000196006553480156200001757600080fd5b5060405162001ea438038062001ea48339810160408190526200003a91620001ab565b806200004f6200004962000155565b62000159565b6040805180820190915260018152603560f81b60208201526001600160a01b0382166200009a5760405162461bcd60e51b8152600401620000919190620001db565b60405180910390fd5b50600580546001600160a01b0319166001600160a01b039290921691909117905560405163483abc4f60e11b815273__$819dd864b9a28b29592cd77136582b47ce$__90639075789e906200011c906000907f426c6f636b7377616e2f536f72746974696f6e53756d5472656573000000000090620400009060040162000231565b60006040518083038186803b1580156200013557600080fd5b505af41580156200014a573d6000803e3d6000fd5b505050505062000247565b3390565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215620001bd578081fd5b81516001600160a01b0381168114620001d4578182fd5b9392505050565b6000602080835283518082850152825b818110156200020957858101830151858201604001528201620001eb565b818111156200021b5783604083870101525b50601f01601f1916929092016040019392505050565b9283526020830191909152604082015260600190565b611c4d80620002576000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638da5cb5b116100b8578063cfd8d6c01161007c578063cfd8d6c014610254578063d048994514610267578063daea85c514610287578063e5b5019a1461029a578063f2fde38b146102af578063fd9c6009146102c257610137565b80638da5cb5b146101f3578063985fadc8146101fb578063ac36c0a81461020e578063b817bcf71461022e578063cb82cc8f1461024157610137565b806325d5971f116100ff57806325d5971f146101aa57806341c0e1b5146101bd57806344b797a2146101c5578063715018a6146101d857806379a558e7146101e057610137565b80630542975c1461013c57806311e0c07b1461015a578063162522541461017a5780631848effa1461018f57806319872f7614610197575b600080fd5b6101446102d5565b6040516101519190611810565b60405180910390f35b61016d6101683660046117d8565b6102e4565b60405161015191906118ae565b61018d61018836600461143a565b61036d565b005b610144610524565b6101446101a53660046114f3565b610533565b61016d6101b83660046114f3565b6105bc565b61018d610789565b61018d6101d33660046117c6565b6107bf565b61018d6108cd565b61016d6101ee3660046113fb565b6108e1565b610144610997565b61016d61020936600461150b565b6109a6565b61022161021c3660046114f3565b6109ed565b6040516101519190611861565b61016d61023c3660046113fb565b610bfe565b61016d61024f3660046114f3565b610cb5565b61018d6102623660046113fb565b610e88565b61027a6102753660046113fb565b610f72565b6040516101519190611a29565b61018d6102953660046113fb565b611003565b6102a26110af565b60405161015191906118b9565b61018d6102bd3660046113fb565b6110b5565b61018d6102d03660046117c6565b6110ef565b6005546001600160a01b031690565b60405163fbd2817f60e01b81526000906001600160a01b0383169063fbd2817f906103159087908790600401611b1d565b60206040518083038186803b15801561032d57600080fd5b505afa158015610341573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036591906114d3565b949350505050565b664449535055544560c81b61038181610533565b6001600160a01b03166103926111aa565b6001600160a01b03161460405180604001604052806002815260200161199b60f11b815250906103de5760405162461bcd60e51b81526004016103d591906118d9565b60405180910390fd5b5060006103e96111ae565b80516020820151604051633e8973e560e01b815292935060009273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__92633e8973e59261042b92600401611b1d565b60206040518083038186803b15801561044357600080fd5b505af4158015610457573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047b91906117ae565b6040516357774cdf60e11b815290915073__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063aeee99be906104cd9084908890600080516020611bf883398151915290600390600090600401611ab3565b60206040518083038186803b1580156104e557600080fd5b505af41580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051d91906114d3565b5050505050565b6005546001600160a01b031681565b600554604051630cc397bb60e11b81526000916001600160a01b0316906319872f76906105649085906004016118b9565b60206040518083038186803b15801561057c57600080fd5b505afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b4919061141e565b90505b919050565b6000806105c76111aa565b9050826105d382610f72565b51604080518082019091526002815261323760f01b602082015291111561060d5760405162461bcd60e51b81526004016103d591906118d9565b50604051633d32046f60e21b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063f4c811bc906106609086908590600080516020611bf883398151915290600190600390600090600401611a82565b60206040518083038186803b15801561067857600080fd5b505af415801561068c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b091906114d3565b5060006106c26211105560ea1b610533565b60405163a9059cbb60e01b81529091506001600160a01b0382169063a9059cbb906106f39085908890600401611848565b602060405180830381600087803b15801561070d57600080fd5b505af1158015610721573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074591906114d3565b60405180604001604052806002815260200161323960f01b8152509061077e5760405162461bcd60e51b81526004016103d591906118d9565b506001949350505050565b6005546001600160a01b031633146107b157634e487b7160e01b600052600160045260246000fd5b6005546001600160a01b0316ff5b664449535055544560c81b6107d381610533565b6001600160a01b03166107e46111aa565b6001600160a01b03161460405180604001604052806002815260200161199b60f11b815250906108275760405162461bcd60e51b81526004016103d591906118d9565b5060405163305893b560e11b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__906360b1276a906108779086908690600080516020611bf883398151915290600390600090600401611a56565b60206040518083038186803b15801561088f57600080fd5b505af41580156108a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c791906114d3565b50505050565b6108d561124f565b6108df600061128e565b565b60006108f564212aaca2a960d91b836109a6565b80156105b457504261090d632aa9a2a960e11b610533565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b81526004016109389190611810565b60006040518083038186803b15801561095057600080fd5b505afa158015610964573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261098c91908101906115ed565b604001511192915050565b6004546001600160a01b031690565b6000806109c06a20a1a62fa6a0a720a3a2a960a91b610533565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b81526004016103159291906118c2565b60608167ffffffffffffffff811115610a1657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a3f578160200160208202803683370190505b5090506000610a4c6111ae565b51905060005b83811015610bf75760405163109680f160e21b815260009073__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063425a03c490610aa6908490600080516020611bf8833981519152908790600401611a40565b60206040518083038186803b158015610abe57600080fd5b505af4158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af6919061141e565b90505b82610b0382610f72565b511015610bab5760405163109680f160e21b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063425a03c490610b5490600090600080516020611bf8833981519152908790600401611a40565b60206040518083038186803b158015610b6c57600080fd5b505af4158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba4919061141e565b9050610af9565b80848381518110610bcc57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03909216602092830291909101909101525080610bef81611ba5565b915050610a52565b5050919050565b6000610c136529a2a62622a960d11b836109a6565b80156105b4575042610c2b632aa9a2a960e11b610533565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b8152600401610c569190611810565b60006040518083038186803b158015610c6e57600080fd5b505afa158015610c82573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610caa91908101906115ed565b608001511192915050565b600080610cc06111aa565b90506000610ccc6111ae565b90506000610cdf6211105560ea1b610533565b8251604080518082019091526002815261323760f01b6020820152919250861015610d1d5760405162461bcd60e51b81526004016103d591906118d9565b5060405163021d5e4b60e11b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063043abc9690610d709088908790600080516020611bf883398151915290600190600390600090600401611a82565b60206040518083038186803b158015610d8857600080fd5b505af4158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc091906114d3565b506040516323b872dd60e01b81526001600160a01b038216906323b872dd90610df190869030908a90600401611824565b602060405180830381600087803b158015610e0b57600080fd5b505af1158015610e1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4391906114d3565b60405180604001604052806002815260200161064760f31b81525090610e7c5760405162461bcd60e51b81526004016103d591906118d9565b50600195945050505050565b6001600160a01b0381161580610ea857506005546001600160a01b031633145b80610f345750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ef157600080fd5b505afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f29919061141e565b6001600160a01b0316145b610f505760405162461bcd60e51b81526004016103d590611952565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b610f7a6112e0565b604051633206318d60e21b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063c818c63490610fb4908590600390600401611848565b604080518083038186803b158015610fcb57600080fd5b505af4158015610fdf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b4919061159f565b6d282927aa27a1a7a62fa0a226a4a760911b611021816102096111aa565b61103d5760405162461bcd60e51b81526004016103d5906119f2565b600061104e6211105560ea1b610533565b60065460405163095ea7b360e01b81529192506001600160a01b0385169163095ea7b39161108191859190600401611848565b602060405180830381600087803b15801561109b57600080fd5b505af11580156108a3573d6000803e3d6000fd5b60065481565b6110bd61124f565b6001600160a01b0381166110e35760405162461bcd60e51b81526004016103d59061190c565b6110ec8161128e565b50565b664449535055544560c81b61110381610533565b6001600160a01b03166111146111aa565b6001600160a01b03161460405180604001604052806002815260200161199b60f11b815250906111575760405162461bcd60e51b81526004016103d591906118d9565b5060405163021d5e4b60e11b815273__$d4e29236ef5669bc8e4309ccc6f37ccd7f$__9063043abc96906108779086908690600080516020611bf883398151915290600190600390600090600401611a82565b3390565b6111b66112fa565b60006111d974282927aa27a1a7a62fa1a7a72324a3aaa920aa27a960591b610533565b6001600160a01b03166382db8b076040518163ffffffff1660e01b815260040160806040518083038186803b15801561121157600080fd5b505afa158015611225573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611249919061153a565b91505090565b6112576111aa565b6001600160a01b0316611268610997565b6001600160a01b0316146108df5760405162461bcd60e51b81526004016103d5906119bd565b600480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604051806040016040528060008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b80516105b781611be2565b600082601f83011261133d578081fd5b8151602061135261134d83611b55565b611b2b565b828152818101908583018385028701840188101561136e578586fd5b855b8581101561138c57815184529284019290840190600101611370565b5090979650505050505050565b600082601f8301126113a9578081fd5b815167ffffffffffffffff8111156113c3576113c3611bcc565b6113d6601f8201601f1916602001611b2b565b8181528460208386010111156113ea578283fd5b610365826020830160208701611b79565b60006020828403121561140c578081fd5b813561141781611be2565b9392505050565b60006020828403121561142f578081fd5b815161141781611be2565b6000602080838503121561144c578182fd5b823567ffffffffffffffff811115611462578283fd5b8301601f81018513611472578283fd5b803561148061134d82611b55565b818152838101908385018584028501860189101561149c578687fd5b8694505b838510156114c75780356114b381611be2565b8352600194909401939185019185016114a0565b50979650505050505050565b6000602082840312156114e4578081fd5b81518015158114611417578182fd5b600060208284031215611504578081fd5b5035919050565b6000806040838503121561151d578081fd5b82359150602083013561152f81611be2565b809150509250929050565b60006080828403121561154b578081fd5b6040516080810181811067ffffffffffffffff8211171561156e5761156e611bcc565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b6000604082840312156115b0578081fd5b6040516040810181811067ffffffffffffffff821117156115d3576115d3611bcc565b604052825181526020928301519281019290925250919050565b6000602082840312156115fe578081fd5b815167ffffffffffffffff80821115611615578283fd5b81840191506101e080838703121561162b578384fd5b61163481611b2b565b9050825182811115611644578485fd5b61165087828601611399565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261169b60e08401611322565b60e082015261010080840151838111156116b3578586fd5b6116bf8882870161132d565b82840152505061012080840151838111156116d8578586fd5b6116e48882870161132d565b82840152505061014080840151838111156116fd578586fd5b6117098882870161132d565b8284015250506101608084015183811115611722578586fd5b61172e8882870161132d565b8284015250506101808084015183811115611747578586fd5b6117538882870161132d565b8284015250506101a0808401518381111561176c578586fd5b6117788882870161132d565b8284015250506101c08084015183811115611791578586fd5b61179d8882870161132d565b918301919091525095945050505050565b6000602082840312156117bf578081fd5b5051919050565b6000806040838503121561151d578182fd5b6000806000606084860312156117ec578081fd5b8335925060208401359150604084013561180581611be2565b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156118a25783516001600160a01b03168352928401929184019160010161187d565b50909695505050505050565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60006020825282518060208401526118f8816040850160208701611b79565b601f01601f19169190910160400192915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b815181526020918201519181019190915260400190565b9283526020830191909152604082015260600190565b9485526001600160a01b0393909316602085015260408401919091526060830152608082015260a00190565b9586526001600160a01b0394909416602086015260408501929092526060840152608083015260a082015260c00190565b600060a08201878352602060a08185015281885180845260c086019150828a019350845b81811015611afc5784516001600160a01b031683529383019391830191600101611ad7565b50506040850197909752505050606081019290925260809091015292915050565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715611b4d57611b4d611bcc565b604052919050565b600067ffffffffffffffff821115611b6f57611b6f611bcc565b5060209081020190565b60005b83811015611b94578181015183820152602001611b7c565b838111156108c75750506000910152565b6000600019821415611bc557634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146110ec57600080fdfe426c6f636b7377616e2f536f72746974696f6e53756d54726565730000000000a2646970667358221220b439caf1f32459caafe677631828d3409631ff5a91c619a5e8e69aeb208b189964736f6c63430008000033";

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
