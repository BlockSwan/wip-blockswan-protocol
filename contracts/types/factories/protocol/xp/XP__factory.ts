/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { XP, XPInterface } from "../../../protocol/xp/XP";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "xpKey",
        type: "bytes32",
      },
    ],
    name: "getXpAmount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "xpKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes32",
        name: "xpKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "xpToReceive",
        type: "uint256",
      },
    ],
    name: "setXpAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040526000196008553480156200001757600080fd5b5060405162001e3b38038062001e3b8339810160408190526200003a916200023a565b604080518082018252600a815269457870657269656e636560b01b602080830191825283518085019094526002845261058560f41b908401528151849391600091620000899160049162000194565b5081516200009f90600590602085019062000194565b506003805460ff191660ff9290921691909117905550620000cb9050620000c56200013e565b62000142565b6040805180820190915260018152603560f81b60208201526001600160a01b038216620001165760405162461bcd60e51b81526004016200010d91906200026a565b60405180910390fd5b50600780546001600160a01b0319166001600160a01b039290921691909117905550620002fd565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001a290620002c0565b90600052602060002090601f016020900481019282620001c6576000855562000211565b82601f10620001e157805160ff191683800117855562000211565b8280016001018555821562000211579182015b8281111562000211578251825591602001919060010190620001f4565b506200021f92915062000223565b5090565b5b808211156200021f576000815560010162000224565b6000602082840312156200024c578081fd5b81516001600160a01b038116811462000263578182fd5b9392505050565b6000602080835283518082850152825b8181101562000298578581018301518582016040015282016200027a565b81811115620002aa5783604083870101525b50601f01601f1916929092016040019392505050565b600281046001821680620002d557607f821691505b60208210811415620002f757634e487b7160e01b600052602260045260246000fd5b50919050565b611b2e806200030d6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806372b0e3ed11610104578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e14610398578063e5b5019a146103ab578063f2fde38b146103b3578063fcf6831e146103c6576101cf565b8063a9059cbb1461034c578063b817bcf71461035f578063cfd8d6c014610372578063daea85c514610385576101cf565b806395d89b41116100de57806395d89b411461030b578063985fadc8146103135780639dc29fac14610326578063a457c2d714610339576101cf565b806372b0e3ed146102dd57806379a558e7146102f05780638da5cb5b14610303576101cf565b806323b872dd11610171578063395093511161014b57806339509351146102a757806341c0e1b5146102ba57806370a08231146102c2578063715018a6146102d5576101cf565b806323b872dd1461026a578063293c6a3a1461027d578063313ce56714610292576101cf565b806311e0c07b116101ad57806311e0c07b1461022757806318160ddd1461023a5780631848effa1461024f57806319872f7614610257576101cf565b80630542975c146101d457806306fdde03146101f2578063095ea7b314610207575b600080fd5b6101dc6103e7565b6040516101e991906115ba565b60405180910390f35b6101fa6103f6565b6040516101e99190611622565b61021a610215366004611319565b610488565b6040516101e991906115e7565b61021a610235366004611582565b6104ac565b610242610535565b6040516101e99190611602565b6101dc61053b565b6101dc610265366004611364565b61054a565b61021a6102783660046112d9565b6105d3565b61029061028b36600461137c565b610601565b005b61029a61069a565b6040516101e99190611a0a565b61021a6102b5366004611319565b6106a3565b6102906106cf565b6102426102d0366004611269565b610705565b610290610720565b6102906102eb3660046113a0565b610734565b61021a6102fe366004611269565b610780565b6101dc610836565b6101fa610845565b61021a61032136600461137c565b610854565b610290610334366004611319565b61089b565b61021a610347366004611319565b6108a9565b61021a61035a366004611319565b6108f1565b61021a61036d366004611269565b610909565b610290610380366004611269565b6109c0565b610290610393366004611269565b610aaa565b6102426103a63660046112a1565b610b7a565b610242610ba5565b6102906103c1366004611269565b610bab565b6103d96103d4366004611364565b610be5565b6040516101e99291906115f2565b6007546001600160a01b031690565b60606004805461040590611a92565b80601f016020809104026020016040519081016040528092919081815260200182805461043190611a92565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b5050505050905090565b600080610493610c01565b90506104a0818585610c05565b60019150505b92915050565b60405163fbd2817f60e01b81526000906001600160a01b0383169063fbd2817f906104dd90879087906004016119fc565b60206040518083038186803b1580156104f557600080fd5b505afa158015610509573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052d9190611344565b949350505050565b60025490565b6007546001600160a01b031681565b600754604051630cc397bb60e11b81526000916001600160a01b0316906319872f769061057b908590600401611602565b60206040518083038186803b15801561059357600080fd5b505afa1580156105a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cb9190611285565b90505b919050565b6000806105de610c01565b90506105eb858285610cb9565b6105f6858585610cfd565b506001949350505050565b672c282fa3a4ab22a960c11b61061981610321610c01565b61063e5760405162461bcd60e51b815260040161063590611949565b60405180910390fd5b60008061064a85610be5565b9150915081604051806040016040528060028152602001610c4d60f21b815250906106885760405162461bcd60e51b81526004016106359190611622565b506106938482610dfe565b5050505050565b60035460ff1690565b6000806106ae610c01565b90506104a08185856106c08589610b7a565b6106ca9190611a42565b610c05565b6007546001600160a01b031633146106f757634e487b7160e01b600052600160045260246000fd5b6007546001600160a01b0316ff5b6001600160a01b031660009081526020819052604090205490565b610728610e08565b6107326000610e47565b565b6d282927aa27a1a7a62fa0a226a4a760911b61075281610321610c01565b61076e5760405162461bcd60e51b815260040161063590611949565b61077a60098484610e99565b50505050565b600061079464212aaca2a960d91b83610854565b80156105cb5750426107ac632aa9a2a960e11b61054a565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b81526004016107d791906115ba565b60006040518083038186803b1580156107ef57600080fd5b505afa158015610803573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261082b91908101906113c1565b604001511192915050565b6006546001600160a01b031690565b60606005805461040590611a92565b60008061086e6a20a1a62fa6a0a720a3a2a960a91b61054a565b6001600160a01b03166391d1485485856040518363ffffffff1660e01b81526004016104dd92919061160b565b6108a58282610ea6565b5050565b6000806108b4610c01565b905060006108c28286610b7a565b9050838110156108e45760405162461bcd60e51b815260040161063590611980565b6105f68286868403610c05565b6000806108fc610c01565b90506104a0818585610cfd565b600061091e6529a2a62622a960d11b83610854565b80156105cb575042610936632aa9a2a960e11b61054a565b6001600160a01b03166369c212f6846040518263ffffffff1660e01b815260040161096191906115ba565b60006040518083038186803b15801561097957600080fd5b505afa15801561098d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109b591908101906113c1565b608001511192915050565b6001600160a01b03811615806109e057506007546001600160a01b031633145b80610a6c5750336001600160a01b0316306001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2957600080fd5b505afa158015610a3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a619190611285565b6001600160a01b0316145b610a885760405162461bcd60e51b8152600401610635906117df565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6d282927aa27a1a7a62fa0a226a4a760911b610ac881610321610c01565b610ae45760405162461bcd60e51b815260040161063590611949565b6000610af56211105560ea1b61054a565b60085460405163095ea7b360e01b81529192506001600160a01b0385169163095ea7b391610b28918591906004016115ce565b602060405180830381600087803b158015610b4257600080fd5b505af1158015610b56573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a9190611344565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60085481565b610bb3610e08565b6001600160a01b038116610bd95760405162461bcd60e51b8152600401610635906116da565b610be281610e47565b50565b6000808080610bf5600986610eb0565b90945092505050915091565b3390565b6001600160a01b038316610c2b5760405162461bcd60e51b815260040161063590611905565b6001600160a01b038216610c515760405162461bcd60e51b815260040161063590611720565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610cac908590611602565b60405180910390a3505050565b6000610cc58484610b7a565b9050600019811461077a5781811015610cf05760405162461bcd60e51b815260040161063590611762565b61077a8484848403610c05565b6001600160a01b038316610d235760405162461bcd60e51b8152600401610635906118c0565b6001600160a01b038216610d495760405162461bcd60e51b815260040161063590611655565b610d54838383610ece565b6001600160a01b03831660009081526020819052604090205481811015610d8d5760405162461bcd60e51b815260040161063590611799565b6001600160a01b0380851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610deb908690611602565b60405180910390a361077a848484610f0d565b6108a58282610f19565b610e10610c01565b6001600160a01b0316610e21610836565b6001600160a01b0316146107325760405162461bcd60e51b81526004016106359061184a565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600061052d848484610fc3565b6108a58282610fe0565b6000808080610ebf86866110b7565b909450925050505b9250929050565b672c282fa3a4ab22a960c11b610ee681610321610c01565b610f025760405162461bcd60e51b815260040161063590611949565b61077a848484610f14565b610f148383835b505050565b6001600160a01b038216610f3f5760405162461bcd60e51b8152600401610635906119c5565b610f4b60008383610ece565b8060026000828254610f5d9190611a42565b90915550506001600160a01b038216600081815260208190526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610faf908590611602565b60405180910390a36108a560008383610f0d565b6000828152600284016020526040812082905561052d84846110f1565b6001600160a01b0382166110065760405162461bcd60e51b81526004016106359061187f565b61101282600083610ece565b6001600160a01b0382166000908152602081905260409020548181101561104b5760405162461bcd60e51b815260040161063590611698565b6001600160a01b0383166000818152602081905260408082208585039055600280548690039055519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906110a3908690611602565b60405180910390a3610f1483600084610f0d565b60008181526002830160205260408120548190806110e6576110d98585611104565b925060009150610ec79050565b600192509050610ec7565b60006110fd8383611110565b9392505050565b60006110fd838361115a565b600061111c8383611162565b611152575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104a6565b5060006104a6565b60006110fd83835b60009081526001919091016020526040902054151590565b80516105ce81611ae3565b600082601f830112611195578081fd5b8151602067ffffffffffffffff8211156111b1576111b1611acd565b8082026111bf828201611a18565b8381528281019086840183880185018910156111d9578687fd5b8693505b858410156111fb5780518352600193909301929184019184016111dd565b50979650505050505050565b600082601f830112611217578081fd5b815167ffffffffffffffff81111561123157611231611acd565b611244601f8201601f1916602001611a18565b818152846020838601011115611258578283fd5b61052d826020830160208701611a66565b60006020828403121561127a578081fd5b81356110fd81611ae3565b600060208284031215611296578081fd5b81516110fd81611ae3565b600080604083850312156112b3578081fd5b82356112be81611ae3565b915060208301356112ce81611ae3565b809150509250929050565b6000806000606084860312156112ed578081fd5b83356112f881611ae3565b9250602084013561130881611ae3565b929592945050506040919091013590565b6000806040838503121561132b578182fd5b823561133681611ae3565b946020939093013593505050565b600060208284031215611355578081fd5b815180151581146110fd578182fd5b600060208284031215611375578081fd5b5035919050565b6000806040838503121561138e578182fd5b8235915060208301356112ce81611ae3565b600080604083850312156113b2578182fd5b50508035926020909101359150565b6000602082840312156113d2578081fd5b815167ffffffffffffffff808211156113e9578283fd5b81840191506101e08083870312156113ff578384fd5b61140881611a18565b9050825182811115611418578485fd5b61142487828601611207565b8252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261146f60e0840161117a565b60e08201526101008084015183811115611487578586fd5b61149388828701611185565b82840152505061012080840151838111156114ac578586fd5b6114b888828701611185565b82840152505061014080840151838111156114d1578586fd5b6114dd88828701611185565b82840152505061016080840151838111156114f6578586fd5b61150288828701611185565b828401525050610180808401518381111561151b578586fd5b61152788828701611185565b8284015250506101a08084015183811115611540578586fd5b61154c88828701611185565b8284015250506101c08084015183811115611565578586fd5b61157188828701611185565b918301919091525095945050505050565b600080600060608486031215611596578081fd5b833592506020840135915060408401356115af81611ae3565b809150509250925092565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b9115158252602082015260400190565b90815260200190565b9182526001600160a01b0316602082015260400190565b6000602082528251806020840152611641816040850160208701611a66565b601f01601f19169190910160400192915050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526045908201527f43616e206f6e6c792062652063616c6c6564206966206164647265737365735060408201527f726f766964657220697320656d7074792c206d73672e73656e646572206f722060608201526437bbb732b960d91b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601c908201527f5265717569726573206d73672e73656e6465722068617320726f6c6500000000604082015260600190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b918252602082015260400190565b60ff91909116815260200190565b60405181810167ffffffffffffffff81118282101715611a3a57611a3a611acd565b604052919050565b60008219821115611a6157634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611a81578181015183820152602001611a69565b8381111561077a5750506000910152565b600281046001821680611aa657607f821691505b60208210811415611ac757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610be257600080fdfea26469706673582212201cfe1dd4990566eb15709c1a5c5066b0f45969184da10b9363fe3bb27dab0ca064736f6c63430008000033";

type XPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XP__factory extends ContractFactory {
  constructor(...args: XPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XP> {
    return super.deploy(provider, overrides || {}) as Promise<XP>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): XP {
    return super.attach(address) as XP;
  }
  override connect(signer: Signer): XP__factory {
    return super.connect(signer) as XP__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XPInterface {
    return new utils.Interface(_abi) as XPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): XP {
    return new Contract(address, _abi, signerOrProvider) as XP;
  }
}
