/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RoundLogic,
  RoundLogicInterface,
} from "../../../../protocol/libraries/logics/RoundLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jurorWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weightOfCorrectVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "disputePrice",
        type: "uint256",
      },
    ],
    name: "calcEarnedFromDisputeFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61322b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100d85760003560e01c806363a072ba11610096578063bba2165211610070578063bba2165214610232578063c0b088f714610252578063d979c08c14610265578063e6053cff14610285576100d8565b806363a072ba146101c55780639cd25fc5146101f2578063ba30c1a714610212576100d8565b8062ffd605146100dd57806301d84af51461010857806304fb8e1a1461013557806308a83d86146101635780632fd658b614610183578063327d2e01146101a5575b600080fd5b6100f06100eb3660046126e0565b610298565b6040516100ff93929190612fc6565b60405180910390f35b81801561011457600080fd5b506101286101233660046128b9565b610382565b6040516100ff9190612f15565b81801561014157600080fd5b50610155610150366004612a0b565b61073b565b6040516100ff92919061305f565b610176610171366004612a0b565b610a91565b6040516100ff9190612f66565b81801561018f57600080fd5b506101a361019e366004612a0b565b610ab4565b005b6101b86101b33660046126e0565b610d25565b6040516100ff9190612e97565b8180156101d157600080fd5b506101e56101e036600461296a565b610e19565b6040516100ff9190612ef7565b610205610200366004612a36565b611139565b6040516100ff9190612f53565b81801561021e57600080fd5b506101e561022d3660046127d1565b6114dc565b81801561023e57600080fd5b506101a361024d366004612832565b6117be565b610176610260366004612a0b565b611b0b565b81801561027157600080fd5b506101e56102803660046126f8565b611bb6565b6101e56102933660046126e0565b611f59565b6000806000838073__$af828e0c356433108d8dfb596a8a6763fb$__63b265233890916040518263ffffffff1660e01b81526004016102d79190612f66565b60206040518083038186803b1580156102ef57600080fd5b505af4158015610303573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032791906127b7565b15604051806040016040528060028152602001610d8d60f21b8152509061036a5760405162461bcd60e51b81526004016103619190612f02565b60405180910390fd5b50505050600782015482546001909301549093909150565b61038a6123d3565b815160405163c52af8e960e01b815284919073__$af828e0c356433108d8dfb596a8a6763fb$__9063c52af8e9906103c89085908590600401612f6f565b60206040518083038186803b1580156103e057600080fd5b505af41580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041891906127b7565b60405180604001604052806002815260200161353160f01b815250906104515760405162461bcd60e51b81526004016103619190612f02565b50604051637f8dc8e760e01b8152859073__$af828e0c356433108d8dfb596a8a6763fb$__90637f8dc8e79061048b908490600401612f66565b60206040518083038186803b1580156104a357600080fd5b505af41580156104b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104db91906127b7565b60405180604001604052806002815260200161353960f01b815250906105145760405162461bcd60e51b81526004016103619190612f02565b508451600090610525908890611f6d565b90506040518060a001604052808273__$c72e2124387635ea261ddf644a00cf602f$__630a6c668c90918a606001516040518363ffffffff1660e01b8152600401610571929190612fdc565b60206040518083038186803b15801561058957600080fd5b505af415801561059d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c191906127b7565b151581526020888101516040808b015190516339b7870160e21b8152929093019273__$c72e2124387635ea261ddf644a00cf602f$__9263e6de1c049261060c928892600401612ffe565b60206040518083038186803b15801561062457600080fd5b505af4158015610638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065c91906127b7565b1515815260200161067a836060015189608001518a60c00151610a91565b8152602001610696836060015189608001518a60e00151610a91565b815260a088015160209091015286516040516357708ca360e11b815291965073__$af828e0c356433108d8dfb596a8a6763fb$__9163aee11946916106e0918b9190600401612f6f565b60206040518083038186803b1580156106f857600080fd5b505af415801561070c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073091906127b7565b505050505092915050565b60008083838173__$af828e0c356433108d8dfb596a8a6763fb$__635347e6b89091836040518363ffffffff1660e01b815260040161077b929190612fb8565b60206040518083038186803b15801561079357600080fd5b505af41580156107a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cb91906127b7565b8061085a575060405163e4dfdc1b60e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__9063e4dfdc1b9061080a9085908590600401612fb8565b60206040518083038186803b15801561082257600080fd5b505af4158015610836573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085a91906127b7565b60405180604001604052806002815260200161333760f01b815250906108935760405162461bcd60e51b81526004016103619190612f02565b5060405163164ca46760e31b8152869073__$af828e0c356433108d8dfb596a8a6763fb$__9063b2652338906108cd908490600401612f66565b60206040518083038186803b1580156108e557600080fd5b505af41580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d91906127b7565b60405180604001604052806002815260200161363160f01b815250906109565760405162461bcd60e51b81526004016103619190612f02565b5060028701546007808a015490890154604051630a68fcd760e31b81529297506109fb9273__$af828e0c356433108d8dfb596a8a6763fb$__90635347e6b8906109a6908e908d90600401612fb8565b60206040518083038186803b1580156109be57600080fd5b505af41580156109d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f691906127b7565b612173565b60405163132f1cc960e31b815290945073__$af828e0c356433108d8dfb596a8a6763fb$__90639978e64890610a35908a90600401612f66565b60206040518083038186803b158015610a4d57600080fd5b505af4158015610a61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8591906127b7565b50505050935093915050565b60008083610a9f86856130f9565b610aa991906130d9565b9150505b9392505050565b604051630a68fcd760e31b81528390829073__$af828e0c356433108d8dfb596a8a6763fb$__90635347e6b890610af19085908590600401612fb8565b60206040518083038186803b158015610b0957600080fd5b505af4158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4191906127b7565b80610bd0575060405163e4dfdc1b60e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__9063e4dfdc1b90610b809085908590600401612fb8565b60206040518083038186803b158015610b9857600080fd5b505af4158015610bac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd091906127b7565b60405180604001604052806002815260200161333760f01b81525090610c095760405162461bcd60e51b81526004016103619190612f02565b50604051637db039b360e11b815273__$af828e0c356433108d8dfb596a8a6763fb$__9063fb60736690610c439088908890600401612fb8565b60206040518083038186803b158015610c5b57600080fd5b505af4158015610c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9391906127b7565b5060405163766b344160e11b815273__$af828e0c356433108d8dfb596a8a6763fb$__9063ecd6688290610ccd9088908790600401612fb8565b60206040518083038186803b158015610ce557600080fd5b505af4158015610cf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1d91906127b7565b505050505050565b805460609060009067ffffffffffffffff811115610d5357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610d8c57816020015b610d79612406565b815260200190600190039081610d715790505b50905060005b8354811015610e1057610dd2848281548110610dbe57634e487b7160e01b600052603260045260246000fd5b90600052602060002090601f020182611139565b828281518110610df257634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610e0890613196565b915050610d92565b5090505b919050565b8051604051630a68fcd760e31b8152600091849173__$af828e0c356433108d8dfb596a8a6763fb$__90635347e6b890610e599085908590600401612fb8565b60206040518083038186803b158015610e7157600080fd5b505af4158015610e85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea991906127b7565b80610f38575060405163e4dfdc1b60e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__9063e4dfdc1b90610ee89085908590600401612fb8565b60206040518083038186803b158015610f0057600080fd5b505af4158015610f14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3891906127b7565b60405180604001604052806002815260200161333760f01b81525090610f715760405162461bcd60e51b81526004016103619190612f02565b5083518590610f80828261218e565b1560405180604001604052806002815260200161033360f41b81525090610fba5760405162461bcd60e51b81526004016103619190612f02565b50856020015164212aaca2a960d91b811480610fde57506529a2a62622a960d11b81145b60405180604001604052806002815260200161333960f01b815250906110175760405162461bcd60e51b81526004016103619190612f02565b506110218861219d565b600114156110a15787601c0160008154811061104d57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060030201600101548760200151141560405180604001604052806002815260200161333960f01b8152509061109f5760405162461bcd60e51b81526004016103619190612f02565b505b6040516396571bfd60e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__906396571bfd906110da908b908b90600401612f9f565b60206040518083038186803b1580156110f257600080fd5b505af4158015611106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112a91906127b7565b50600198975050505050505050565b611141612406565b6040805161028081018252838152845460208201526001850154818301526002850154606082015260048501546080820152600585015460a0820152600385015460c0820152600685015460e0820152600785015461010082015260088501546101208201526009850154610140820152600a85015461016080830191909152825190810192839052909161018083019190600c870190600b9082845b8154815260200190600101908083116111de5750505050508152602001611207856017016121a4565b815260200184600b0154815260200184601b01805480602002602001604051908101604052809291908181526020016000905b828210156113455760008481526020908190206040805160c0810182526006860290920180546001600160a01b03168352600181015493830193909352600283015490820152600382015460608201526004820180549192916080840191906112a29061315b565b80601f01602080910402602001604051908101604052809291908181526020018280546112ce9061315b565b801561131b5780601f106112f05761010080835404028352916020019161131b565b820191906000526020600020905b8154815290600101906020018083116112fe57829003601f168201915b50505091835250506005919091015460ff161515602091820152908252600192909201910161123a565b50505050815260200184601c01805480602002602001604051908101604052809291908181526020016000905b8282101561144a578382906000526020600020906003020160405180606001604052908160008201548152602001600182015481526020016002820180546113b99061315b565b80601f01602080910402602001604051908101604052809291908181526020018280546113e59061315b565b80156114325780601f1061140757610100808354040283529160200191611432565b820191906000526020600020905b81548152906001019060200180831161141557829003601f168201915b50505050508152505081526020019060010190611372565b50505050815260200184601d018054806020026020016040519081016040528092919081815260200182805480156114ab57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161148d575b505050505081526020016114c1856019016121a4565b8152601e85015460ff16151560209091015290505b92915050565b60405163c52af8e960e01b81526000908590859073__$af828e0c356433108d8dfb596a8a6763fb$__9063c52af8e99061151c9085908590600401612f6f565b60206040518083038186803b15801561153457600080fd5b505af4158015611548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156c91906127b7565b60405180604001604052806002815260200161353160f01b815250906115a55760405162461bcd60e51b81526004016103619190612f02565b5086866115b282826121b1565b1560405180604001604052806002815260200161068760f31b815250906115ec5760405162461bcd60e51b81526004016103619190612f02565b5060006115f98a8a6121cc565b9050600073__$c72e2124387635ea261ddf644a00cf602f$__6334d8dbe28b8b858c6040518563ffffffff1660e01b815260040161163a9493929190612e60565b60006040518083038186803b15801561165257600080fd5b505af4158015611666573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261168e9190810190612a57565b601b8c018054600180820183556000928352602092839020845160069093020180546001600160a01b0319166001600160a01b03909316929092178255838301519082015560408301516002820155606083015160038201556080830151805193945084939192611707926004850192909101906124a7565b5060a091909101516005909101805460ff1916911515919091179055604051630368443b60e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__90630368443b9061175c908e908690600401612fb8565b60206040518083038186803b15801561177457600080fd5b505af4158015611788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ac91906127b7565b5060019b9a5050505050505050505050565b60405163c52af8e960e01b81528590859073__$af828e0c356433108d8dfb596a8a6763fb$__9063c52af8e9906117fb9085908590600401612f6f565b60206040518083038186803b15801561181357600080fd5b505af4158015611827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184b91906127b7565b60405180604001604052806002815260200161353160f01b815250906118845760405162461bcd60e51b81526004016103619190612f02565b50868661189182826121b1565b60405180604001604052806002815260200161343960f01b815250906118ca5760405162461bcd60e51b81526004016103619190612f02565b5088886118d7828261224b565b1560405180604001604052806002815260200161035360f41b815250906119115760405162461bcd60e51b81526004016103619190612f02565b50600061191e8c8c6121cc565b6040516361bfa34160e01b815290915073__$af828e0c356433108d8dfb596a8a6763fb$__906361bfa3419061195a908f908590600401612fb8565b60206040518083038186803b15801561197257600080fd5b505af4158015611986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119aa91906127b7565b50604051630f82d3f160e11b815273__$af828e0c356433108d8dfb596a8a6763fb$__90631f05a7e2906119e6908f908e908690600401612fc6565b60006040518083038186803b1580156119fe57600080fd5b505af4158015611a12573d6000803e3d6000fd5b50505050600080611a2c8d8f61226490919063ffffffff16565b91509150806040518060400160405280600281526020016106a760f31b81525090611a6a5760405162461bcd60e51b81526004016103619190612f02565b508173__$c72e2124387635ea261ddf644a00cf602f$__630b97b41790918e8e8e6040518563ffffffff1660e01b8152600401611aaa9493929190613023565b60206040518083038186803b158015611ac257600080fd5b505af4158015611ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611afa91906127b7565b505050505050505050505050505050565b604051637e084e3b60e01b8152600090819073__$af828e0c356433108d8dfb596a8a6763fb$__90637e084e3b90611b4b90889088908890600401612fc6565b60206040518083038186803b158015611b6357600080fd5b505af4158015611b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b9b9190612b16565b9050846004015481611bad91906130f9565b95945050505050565b8154600190810180845560008481529182918591611bd391613118565b81548110611bf157634e487b7160e01b600052603260045260246000fd5b90600052602060002090601f020190508073__$af828e0c356433108d8dfb596a8a6763fb$__63cc8a0498909185606001516040518363ffffffff1660e01b8152600401611c40929190612fb8565b60206040518083038186803b158015611c5857600080fd5b505af4158015611c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9091906127b7565b50608083015160405163011abfa960e61b815273__$af828e0c356433108d8dfb596a8a6763fb$__916346afea4091611ccd918591600401612fb8565b60206040518083038186803b158015611ce557600080fd5b505af4158015611cf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1d91906127b7565b506040808401519051636bf55b2760e11b815273__$af828e0c356433108d8dfb596a8a6763fb$__9163d7eab64e91611d5a918591600401612fb8565b60206040518083038186803b158015611d7257600080fd5b505af4158015611d86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611daa91906127b7565b508251604051636b8af67360e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__91636b8af67391611de4918591600401612fb8565b60206040518083038186803b158015611dfc57600080fd5b505af4158015611e10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e3491906127b7565b5060a083015160405163194ebd5360e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__9163194ebd5391611e71918591600401612f86565b60206040518083038186803b158015611e8957600080fd5b505af4158015611e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec191906127b7565b50602083015160405163a2e0e17960e01b815273__$af828e0c356433108d8dfb596a8a6763fb$__9163a2e0e17991611efe918591600401612fb8565b60206040518083038186803b158015611f1657600080fd5b505af4158015611f2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f4e91906127b7565b506001949350505050565b6000611f648261219d565b60021492915050565b611f7561252b565b601b83015460005b8181101561211a57836001600160a01b031685601b018281548110611fb257634e487b7160e01b600052603260045260246000fd5b60009182526020909120600690910201546001600160a01b031614156121085784601b018181548110611ff557634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160018201548152602001600282015481526020016003820154815260200160048201805461206b9061315b565b80601f01602080910402602001604051908101604052809291908181526020018280546120979061315b565b80156120e45780601f106120b9576101008083540402835291602001916120e4565b820191906000526020600020905b8154815290600101906020018083116120c757829003601f168201915b50505091835250506005919091015460ff16151560209091015292506114d6915050565b8061211281613196565b915050611f7d565b506040518060c00160405280846001600160a01b031681526020016000801b81526020016000815260200161214f86866121cc565b81526040805160208082018352600080835290840191909152910152949350505050565b600081156121845750818311610aad565b5081831115610aad565b6000610aad6017840183612353565b601c015490565b60606000610aad8361235f565b6000806121be8484611f6d565b602001511515949350505050565b6000805b601d84015481101561224457826001600160a01b031684601d01828154811061220957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031614156122325761222f6001836130c1565b91505b8061223c81613196565b9150506121d0565b5092915050565b6000806122588484611f6d565b60a00151949350505050565b60008060005b601b85015481101561231257836001600160a01b031685601b0182815481106122a357634e487b7160e01b600052603260045260246000fd5b60009182526020909120600690910201546001600160a01b031614156123005784601b0181815481106122e657634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016001925092505061234c565b8061230a81613196565b91505061226a565b5083601b0160008154811061233757634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016000915091505b9250929050565b6000610aad83836123bb565b6060816000018054806020026020016040519081016040528092919081815260200182805480156123af57602002820191906000526020600020905b81548152602001906001019080831161239b575b50505050509050919050565b60009081526001919091016020526040902054151590565b6040518060a001604052806000151581526020016000151581526020016000815260200160008152602001600081525090565b60405180610280016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161246e61255f565b81526020016060815260200160008152602001606081526020016060815260200160608152602001606081526020016000151581525090565b8280546124b39061315b565b90600052602060002090601f0160209004810192826124d5576000855561251b565b82601f106124ee57805160ff191683800117855561251b565b8280016001018555821561251b579182015b8281111561251b578251825591602001919060010190612500565b5061252792915061257e565b5090565b6040805160c0810182526000808252602082018190529181018290526060808201839052608082015260a081019190915290565b604051806101600160405280600b906020820280368337509192915050565b5b80821115612527576000815560010161257f565b8035610e14816131dd565b8051610e14816131dd565b600082601f8301126125b9578081fd5b8135602067ffffffffffffffff8211156125d5576125d56131c7565b8082026125e382820161306f565b8381528281019086840183880185018910156125fd578687fd5b8693505b85841015612628578035612614816131dd565b835260019390930192918401918401612601565b50979650505050505050565b80518015158114610e1457600080fd5b600082601f830112612654578081fd5b813561266761266282613099565b61306f565b81815284602083860101111561267b578283fd5b816020850160208301379081016020019190915292915050565b600082601f8301126126a5578081fd5b81516126b361266282613099565b8181528460208386010111156126c7578283fd5b6126d882602083016020870161312f565b949350505050565b6000602082840312156126f1578081fd5b5035919050565b6000806040838503121561270a578081fd5b82359150602083013567ffffffffffffffff80821115612728578283fd5b9084019060c0828703121561273b578283fd5b60405160c081018181108382111715612756576127566131c7565b8060405250823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013582811115612798578485fd5b6127a4888286016125a9565b60a0830152508093505050509250929050565b6000602082840312156127c8578081fd5b610aad82612634565b600080600080608085870312156127e6578182fd5b8435935060208501356127f8816131dd565b925060408501359150606085013567ffffffffffffffff81111561281a578182fd5b61282687828801612644565b91505092959194509250565b600080600080600060a08688031215612849578283fd5b85359450602086013561285b816131dd565b935060408601359250606086013567ffffffffffffffff8082111561287e578283fd5b61288a89838a01612644565b9350608088013591508082111561289f578283fd5b506128ac88828901612644565b9150509295509295909350565b6000808284036101208112156128cd578283fd5b8335925061010080601f19830112156128e4578283fd5b604051915080820182811067ffffffffffffffff82111715612908576129086131c7565b60405261291760208601612593565b825260408501356020830152606085013560408301526080850135606083015260a0850135608083015260c085013560a083015260e085013560c08301528085013560e083015250809150509250929050565b6000806040838503121561297c578182fd5b82359150602083013567ffffffffffffffff8082111561299a578283fd5b90840190606082870312156129ad578283fd5b6040516060810181811083821117156129c8576129c86131c7565b806040525082358152602083013560208201526040830135828111156129ec578485fd5b6129f888828601612644565b6040830152508093505050509250929050565b600080600060608486031215612a1f578081fd5b505081359360208301359350604090920135919050565b60008060408385031215612a48578182fd5b50508035926020909101359150565b600060208284031215612a68578081fd5b815167ffffffffffffffff80821115612a7f578283fd5b9083019060c08286031215612a92578283fd5b60405160c081018181108382111715612aad57612aad6131c7565b604052612ab98361259e565b8152602083015160208201526040830151604082015260608301516060820152608083015182811115612aea578485fd5b612af687828601612695565b608083015250612b0860a08401612634565b60a082015295945050505050565b600060208284031215612b27578081fd5b5051919050565b6000815180845260208085019450808401835b83811015612b665781516001600160a01b031687529582019590820190600101612b41565b509495945050505050565b6000815180845260208085018081965082840281019150828601855b85811015612bb7578284038952612ba5848351612c94565b98850198935090840190600101612b8d565b5091979650505050505050565b6000815180845260208085018081965082840281019150828601855b85811015612bb7578284038952612bf8848351612e05565b98850198935090840190600101612be0565b8060005b600b811015612c2d578151845260209384019390910190600101612c0e565b50505050565b6000815180845260208085019450808401835b83811015612b6657815187529582019590820190600101612c46565b15159052565b60008151808452612c8081602086016020860161312f565b601f01601f19169290920160200192915050565b600081518352602082015160208401526040820151606060408501526126d86060850182612c68565b60006103c0825184526020830151602085015260408301516040850152606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151818601525061012080840151818601525061014080840151818601525061016080840151818601525061018080840151612d4f82870182612c0a565b50506101a0830151816102e0860152612d6a82860182612c33565b9150506101c08301516103008501526101e0830151848203610320860152612d928282612bc4565b915050610200830151848203610340860152612dae8282612b71565b915050610220830151848203610360860152612dca8282612b2e565b915050610240830151848203610380860152612de68282612b2e565b915050610260830151612dfd6103a0860182612c62565b509392505050565b600060018060a01b038251168352602082015160208401526040820151604084015260608201516060840152608082015160c06080850152612e4a60c0850182612c68565b60a0938401511515949093019390935250919050565b600060018060a01b038616825284602083015283604083015260806060830152612e8d6080830184612c68565b9695505050505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015612eea57603f19888603018452612ed8858351612cbd565b94509285019290850190600101612ebc565b5092979650505050505050565b901515815260200190565b600060208252610aad6020830184612c68565b600060a08201905082511515825260208301511515602083015260408301516040830152606083015160608301526080830151608083015292915050565b600060208252610aad6020830184612cbd565b90815260200190565b9182526001600160a01b0316602082015260400190565b6000838252604060208301526126d86040830184612b2e565b6000838252604060208301526126d86040830184612c94565b918252602082015260400190565b9283526020830191909152604082015260600190565b600060408252612fef6040830185612e05565b90508260208301529392505050565b6000606082526130116060830186612e05565b60208301949094525060400152919050565b6000858252846020830152608060408301526130426080830185612c68565b82810360608401526130548185612c68565b979650505050505050565b9182521515602082015260400190565b60405181810167ffffffffffffffff81118282101715613091576130916131c7565b604052919050565b600067ffffffffffffffff8211156130b3576130b36131c7565b50601f01601f191660200190565b600082198211156130d4576130d46131b1565b500190565b6000826130f457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615613113576131136131b1565b500290565b60008282101561312a5761312a6131b1565b500390565b60005b8381101561314a578181015183820152602001613132565b83811115612c2d5750506000910152565b60028104600182168061316f57607f821691505b6020821081141561319057634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156131aa576131aa6131b1565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146131f257600080fd5b5056fea2646970667358221220398c17dfa31e10a693cff0c603fb14817a454249471686f2d510eac7eb128a8e64736f6c63430008000033";

type RoundLogicConstructorParams =
  | [linkLibraryAddresses: RoundLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoundLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class RoundLogic__factory extends ContractFactory {
  constructor(...args: RoundLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        RoundLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: RoundLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$af828e0c356433108d8dfb596a8a6763fb\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/RoundDataLogic.sol:RoundDataLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c72e2124387635ea261ddf644a00cf602f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/VoteLogic.sol:VoteLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoundLogic> {
    return super.deploy(overrides || {}) as Promise<RoundLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoundLogic {
    return super.attach(address) as RoundLogic;
  }
  override connect(signer: Signer): RoundLogic__factory {
    return super.connect(signer) as RoundLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoundLogicInterface {
    return new utils.Interface(_abi) as RoundLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoundLogic {
    return new Contract(address, _abi, signerOrProvider) as RoundLogic;
  }
}

export interface RoundLogicLibraryAddresses {
  ["contracts/protocol/libraries/logics/RoundDataLogic.sol:RoundDataLogic"]: string;
  ["contracts/protocol/libraries/logics/VoteLogic.sol:VoteLogic"]: string;
}
