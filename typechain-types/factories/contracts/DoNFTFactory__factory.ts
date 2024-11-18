/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DoNFTFactory,
  DoNFTFactoryInterface,
} from "../../contracts/DoNFTFactory";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originalAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "royaltyAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "gameKey",
        type: "string",
      },
    ],
    name: "DeployDoNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wrapNFT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originalAddress",
        type: "address",
      },
    ],
    name: "DeployWrapERC721DualRole",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
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
    inputs: [],
    name: "admin",
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
    name: "beacon",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "originalAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "royaltyAdmin",
        type: "address",
      },
      {
        internalType: "string",
        name: "gameKey",
        type: "string",
      },
    ],
    name: "deployDoNFT",
    outputs: [
      {
        internalType: "contract BeaconProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "originalAddress",
        type: "address",
      },
    ],
    name: "deployWrapNFT",
    outputs: [
      {
        internalType: "contract WrapERC721DualRole",
        name: "wrapNFT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "gameKey",
        type: "string",
      },
    ],
    name: "getDoNFT",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "beacon_",
        type: "address",
      },
      {
        internalType: "address",
        name: "market_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "market",
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
        internalType: "address",
        name: "beacon_",
        type: "address",
      },
      {
        internalType: "address",
        name: "market_",
        type: "address",
      },
    ],
    name: "setBeaconAndMarket",
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
  "0x6080604052348015600f57600080fd5b506131ec8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610120578063918b1ac514610150578063ee4e3f2a14610163578063f2fde38b14610176578063f851a44014610189578063f8c8765e1461019c57600080fd5b80632672c361146100ae57806359659e90146100dd57806365b4ab05146100f0578063715018a61461010357806380f556051461010d575b600080fd5b6100c16100bc366004610a16565b6101af565b6040516001600160a01b03909116815260200160405180910390f35b6001546100c1906001600160a01b031681565b6100c16100fe366004610b0e565b6101f9565b61010b6104bc565b005b6002546100c1906001600160a01b031681565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166100c1565b61010b61015e366004610beb565b6104d0565b6100c1610171366004610c1e565b610558565b61010b610184366004610c97565b61073d565b6003546100c1906001600160a01b031681565b61010b6101aa366004610cb9565b61077b565b6001600160a01b03831660009081526020819052604080822090516101d79085908590610d0d565b908152604051908190036020019020546001600160a01b031690509392505050565b6040516301ffc9a760e01b8152632b424ad760e21b60048201526000906001600160a01b038816906301ffc9a790602401602060405180830381865afa158015610247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026b9190610d1d565b6102bc5760405162461bcd60e51b815260206004820152601c60248201527f6f726967696e616c204e4654206973206e6f742049455243343930370000000060448201526064015b60405180910390fd5b6001600160a01b03871660009081526020819052604080822090516102e49086908690610d0d565b908152604051908190036020019020546001600160a01b03161461033d5760405162461bcd60e51b815260206004820152601060248201526f6465706f6c79656420616c726561647960801b60448201526064016102b3565b6002546040516000917fc91f0c53531bd2faa46e082166ada7324683b812c3af0ff3dd5b128d08740e529161038c918d918d918d916001600160a01b03909116908d908d908d90602401610d85565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925260015491519092506001600160a01b039091169082906103dd90610997565b6103e8929190610de6565b604051809103906000f080158015610404573d6000803e3d6000fd5b509150816000808a6001600160a01b03166001600160a01b03168152602001908152602001600020858560405161043c929190610d0d565b90815260405190819003602001812080546001600160a01b039384166001600160a01b03199091161790556002547ff980fa4f2345d659926c5d7a24c6b1007cde280d6f3db9e5fb63ed5320d89b7e926104a79286928f928f928f92909116908c908c908c90610e12565b60405180910390a15098975050505050505050565b6104c46108cb565b6104ce6000610926565b565b6003546001600160a01b0316331461052a5760405162461bcd60e51b815260206004820152601760248201527f43616c6c6572206973206e6f74207468652061646d696e00000000000000000060448201526064016102b3565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526000906001600160a01b038316906301ffc9a790602401602060405180830381865afa1580156105a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ca9190610d1d565b6106035760405162461bcd60e51b815260206004820152600a6024820152696e6f742045524337323160b01b60448201526064016102b3565b6040516301ffc9a760e01b8152632b424ad760e21b60048201526001600160a01b038316906301ffc9a790602401602060405180830381865afa15801561064e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106729190610d1d565b156106bf5760405162461bcd60e51b815260206004820152601b60248201527f746865204e465420697320494552433439303720616c7265616479000000000060448201526064016102b3565b8383836040516106ce906109a4565b6106da93929190610ea1565b604051809103906000f0801580156106f6573d6000803e3d6000fd5b5090507f0b046c391cc11ba006dcb4665a04d5c5d7f681bae6c1ed67aaa101bd4c3393328185858560405161072e9493929190610edf565b60405180910390a19392505050565b6107456108cb565b6001600160a01b03811661076f57604051631e4fbdf760e01b8152600060048201526024016102b3565b61077881610926565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156107c15750825b905060008267ffffffffffffffff1660011480156107de5750303b155b9050811580156107ec575080155b1561080a5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561083457845460ff60401b1916600160401b1785555b61083d89610926565b600380546001600160a01b03808b166001600160a01b031992831617909255600180548a8416908316179055600280549289169290911691909117905583156108c057845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b336108fd7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b0316146104ce5760405163118cdaa760e01b81523360048201526024016102b3565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6105c580610f3083390190565b611cc2806114f583390190565b80356001600160a01b03811681146109c857600080fd5b919050565b60008083601f8401126109df57600080fd5b50813567ffffffffffffffff8111156109f757600080fd5b602083019150836020828501011115610a0f57600080fd5b9250929050565b600080600060408486031215610a2b57600080fd5b610a34846109b1565b9250602084013567ffffffffffffffff811115610a5057600080fd5b610a5c868287016109cd565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610a9057600080fd5b813567ffffffffffffffff811115610aaa57610aaa610a69565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ad957610ad9610a69565b604052818152838201602001851015610af157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060008060e0898b031215610b2a57600080fd5b883567ffffffffffffffff811115610b4157600080fd5b610b4d8b828c01610a7f565b985050602089013567ffffffffffffffff811115610b6a57600080fd5b610b768b828c01610a7f565b975050610b8560408a016109b1565b9550610b9360608a016109b1565b9450610ba160808a016109b1565b9350610baf60a08a016109b1565b925060c089013567ffffffffffffffff811115610bcb57600080fd5b610bd78b828c016109cd565b999c989b5096995094979396929594505050565b60008060408385031215610bfe57600080fd5b610c07836109b1565b9150610c15602084016109b1565b90509250929050565b600080600060608486031215610c3357600080fd5b833567ffffffffffffffff811115610c4a57600080fd5b610c5686828701610a7f565b935050602084013567ffffffffffffffff811115610c7357600080fd5b610c7f86828701610a7f565b925050610c8e604085016109b1565b90509250925092565b600060208284031215610ca957600080fd5b610cb2826109b1565b9392505050565b60008060008060808587031215610ccf57600080fd5b610cd8856109b1565b9350610ce6602086016109b1565b9250610cf4604086016109b1565b9150610d02606086016109b1565b905092959194509250565b8183823760009101908152919050565b600060208284031215610d2f57600080fd5b81518015158114610cb257600080fd5b6000815180845260005b81811015610d6557602081850181015186830182015201610d49565b506000602082860101526020601f19601f83011685010191505092915050565b60e081526000610d9860e083018a610d3f565b8281036020840152610daa818a610d3f565b6001600160a01b03988916604085015296881660608401525050928516608084015290841660a083015290921660c09092019190915292915050565b6001600160a01b0383168152604060208201819052600090610e0a90830184610d3f565b949350505050565b6001600160a01b038916815260e060208201819052600090610e369083018a610d3f565b8281036040840152610e48818a610d3f565b6001600160a01b0389811660608601528881166080860152871660a085015283810360c08501528481529050838560208301376000602085830101526020601f19601f8601168201019150509998505050505050505050565b606081526000610eb46060830186610d3f565b8281036020840152610ec68186610d3f565b91505060018060a01b0383166040830152949350505050565b6001600160a01b0385168152608060208201819052600090610f0390830186610d3f565b8281036040840152610f158186610d3f565b91505060018060a01b03831660608301529594505050505056fe60a06040526040516105c53803806105c583398101604081905261002291610387565b61002c828261003e565b506001600160a01b0316608052610484565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e7919061044d565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d9919061044d565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610468565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b038111156103bf57600080fd5b8301601f810185136103d057600080fd5b80516001600160401b038111156103e9576103e961034d565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104175761041761034d565b60405281815282820160200187101561042f57600080fd5b610440826020830160208601610363565b8093505050509250929050565b60006020828403121561045f57600080fd5b61030182610331565b6000825161047a818460208701610363565b9190910192915050565b60805161012761049e6000396000601e01526101276000f3fe6080604052600a600c565b005b60186014601a565b60a0565b565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156079573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190609b919060c3565b905090565b3660008037600080366000845af43d6000803e80801560be573d6000f35b3d6000fd5b60006020828403121560d457600080fd5b81516001600160a01b038116811460ea57600080fd5b939250505056fea2646970667358221220f0959ca51a58dfa33f8868f1214c44e6abd5c2555618646d963c304a98aa25ac64736f6c634300081c0033608060405234801561001057600080fd5b50604051611cc2380380611cc283398101604081905261002f9161022b565b82828181600061003f838261033f565b50600161004c828261033f565b50506007546001600160a01b03161592506100a29150505760405162461bcd60e51b815260206004820152600e60248201526d696e6974656420616c726561647960901b60448201526064015b60405180910390fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156100ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011191906103fd565b61014a5760405162461bcd60e51b815260206004820152600a6024820152696e6f742045524337323160b01b6044820152606401610099565b600780546001600160a01b0319166001600160a01b0392909216919091179055506104269050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261019957600080fd5b81516001600160401b038111156101b2576101b2610172565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101e0576101e0610172565b6040528181528382016020018510156101f857600080fd5b60005b82811015610217576020818601810151838301820152016101fb565b506000918101602001919091529392505050565b60008060006060848603121561024057600080fd5b83516001600160401b0381111561025657600080fd5b61026286828701610188565b602086015190945090506001600160401b0381111561028057600080fd5b61028c86828701610188565b604086015190935090506001600160a01b03811681146102ab57600080fd5b809150509250925092565b600181811c908216806102ca57607f821691505b6020821081036102ea57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561033a57806000526020600020601f840160051c810160208510156103175750805b601f840160051c820191505b818110156103375760008155600101610323565b50505b505050565b81516001600160401b0381111561035857610358610172565b61036c8161036684546102b6565b846102f0565b6020601f8211600181146103a057600083156103885750848201515b600019600385901b1c1916600184901b178455610337565b600084815260208120601f198516915b828110156103d057878501518255602094850194600190920191016103b0565b50848210156103ee5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561040f57600080fd5b8151801515811461041f57600080fd5b9392505050565b61188d806104356000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638fc88c48116100b8578063c2f1f14a1161007c578063c2f1f14a146102d0578063c87b56dd146102e3578063cab416b4146102f6578063db006a7514610307578063e030565e1461031a578063e985e9c51461032d57600080fd5b80638fc88c481461025e57806395d89b411461028f578063a22cb46514610297578063a694fc3a146102aa578063b88d4fde146102bd57600080fd5b806323b872dd116100ff57806323b872dd146101f157806342842e0e146102045780636352211e1461021757806370a082311461022a57806373b64ac51461024b57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a4578063150b7a02146101b9575b600080fd5b61014f61014a3660046112e4565b610340565b60405190151581526020015b60405180910390f35b61016c610386565b60405161015b9190611358565b61018c61018736600461136b565b610418565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611399565b610441565b005b6101d86101c73660046113c5565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161015b565b6101b76101ff366004611466565b610450565b6101b7610212366004611466565b6104e0565b61018c61022536600461136b565b610500565b61023d6102383660046114a7565b61050b565b60405190815260200161015b565b61018c61025936600461136b565b610553565b61023d61026c36600461136b565b600090815260066020526040902054600160a01b900467ffffffffffffffff1690565b61016c6105e1565b6101b76102a53660046114d2565b6105f0565b61023d6102b836600461136b565b6105fb565b6101b76102cb36600461157a565b610788565b61018c6102de36600461136b565b6107a0565b61016c6102f136600461136b565b6107eb565b6007546001600160a01b031661018c565b6101b761031536600461136b565b61085d565b6101b7610328366004611629565b610942565b61014f61033b366004611678565b6109e9565b60006001600160e01b0319821663b72080fb60e01b148061037157506001600160e01b03198216632b424ad760e21b145b80610380575061038082610a17565b92915050565b606060008054610395906116a6565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906116a6565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b5050505050905090565b600061042382610a3c565b506000828152600460205260409020546001600160a01b0316610380565b61044c828233610a75565b5050565b6001600160a01b03821661047f57604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061048c838333610a82565b9050836001600160a01b0316816001600160a01b0316146104da576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610476565b50505050565b6104fb83838360405180602001604052806000815250610788565b505050565b600061038082610a3c565b60006001600160a01b038216610537576040516322718ad960e21b815260006004820152602401610476565b506001600160a01b031660009081526003602052604090205490565b6007546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa15801561059d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c191906116e0565b9050306001600160a01b038216036105dc5761038082610500565b919050565b606060018054610395906116a6565b61044c338383610b04565b6007546000906106169033906001600160a01b031684610ba3565b61065b5760405162461bcd60e51b815260206004820152601660248201527537b7363c9030b8383937bb32b21037b91037bbb732b960511b6044820152606401610476565b6007546040516331a9108f60e11b8152600481018490526000916001600160a01b031690636352211e90602401602060405180830381865afa1580156106a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c991906116e0565b600754604051632142170760e11b81529192506001600160a01b0316906342842e0e906106fe908490309088906004016116fd565b600060405180830381600087803b15801561071857600080fd5b505af115801561072c573d6000803e3d6000fd5b5050505061073a8184610d93565b6007546040517f99039fcf0a98f484616c5196ee8b2ecfa971babf0b519848289ea4db381f85f7916107799133916001600160a01b03169087906116fd565b60405180910390a15090919050565b610793848484610450565b6104da3385858585610df8565b60008181526006602052604081205442600160a01b90910467ffffffffffffffff16106107e357506000908152600660205260409020546001600160a01b031690565b506000919050565b60075460405163c87b56dd60e01b8152600481018390526060916001600160a01b03169063c87b56dd90602401600060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103809190810190611721565b6108673382610f23565b6108835760405162461bcd60e51b81526004016104769061178f565b6007546001600160a01b03166342842e0e3061089e84610500565b846040518463ffffffff1660e01b81526004016108bd939291906116fd565b600060405180830381600087803b1580156108d757600080fd5b505af11580156108eb573d6000803e3d6000fd5b505050506108f881610f7a565b6007546040517fd12200efa34901b99367694174c3b0d32c99585fdf37c7c26892136ddd0836d9916109379133916001600160a01b03169085906116fd565b60405180910390a150565b61094c3384610f23565b6109685760405162461bcd60e51b81526004016104769061178f565b60008381526006602090815260409182902080546001600160a01b0386166001600160e01b03199091168117600160a01b67ffffffffffffffff871690810291909117835593519384529092909186917f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe910160405180910390a350505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b03198216632b424ad760e21b1480610380575061038082610fb5565b6000818152600260205260408120546001600160a01b03168061038057604051637e27328960e01b815260048101849052602401610476565b6104fb8383836001611005565b600080610a9085858561110b565b9050846001600160a01b0316816001600160a01b031614610afc57600084815260066020908152604080832080546001600160e01b03191690555182815286917f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe910160405180910390a35b949350505050565b6001600160a01b038216610b3657604051630b61174360e31b81526001600160a01b0383166004820152602401610476565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040516331a9108f60e11b81526004810182905260009081906001600160a01b03851690636352211e90602401602060405180830381865afa158015610bed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1191906116e0565b90506001600160a01b038116610c7e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610476565b806001600160a01b0316856001600160a01b03161480610d12575060405163020604bf60e21b8152600481018490526001600160a01b03808716919086169063081812fc90602401602060405180830381865afa158015610ce3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0791906116e0565b6001600160a01b0316145b80610d8a575060405163e985e9c560e01b81526001600160a01b038281166004830152868116602483015285169063e985e9c590604401602060405180830381865afa158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a91906117e0565b95945050505050565b6001600160a01b038216610dbd57604051633250574960e11b815260006004820152602401610476565b6000610dcb83836000610a82565b90506001600160a01b038116156104fb576040516339e3563760e11b815260006004820152602401610476565b6001600160a01b0383163b15610f1c57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610e3a9088908890879087906004016117fd565b6020604051808303816000875af1925050508015610e75575060408051601f3d908101601f19168201909252610e729181019061183a565b60015b610ede573d808015610ea3576040519150601f19603f3d011682016040523d82523d6000602084013e610ea8565b606091505b508051600003610ed657604051633250574960e11b81526001600160a01b0385166004820152602401610476565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610f1a57604051633250574960e11b81526001600160a01b0385166004820152602401610476565b505b5050505050565b600080610f2f83610500565b9050806001600160a01b0316846001600160a01b03161480610f6a5750836001600160a01b0316610f5f84610418565b6001600160a01b0316145b80610afc5750610afc81856109e9565b6000610f896000836000610a82565b90506001600160a01b03811661044c57604051637e27328960e01b815260048101839052602401610476565b60006001600160e01b031982166380ac58cd60e01b1480610fe657506001600160e01b03198216635b5e139f60e01b145b8061038057506301ffc9a760e01b6001600160e01b0319831614610380565b808061101957506001600160a01b03821615155b156110db57600061102984610a3c565b90506001600160a01b038316158015906110555750826001600160a01b0316816001600160a01b031614155b8015611068575061106681846109e9565b155b156110915760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610476565b81156110d95783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6000828152600260205260408120546001600160a01b039081169083161561113857611138818486611204565b6001600160a01b0381161561117657611155600085600080611005565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b038516156111a5576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61120f838383611268565b6104fb576001600160a01b03831661123d57604051637e27328960e01b815260048101829052602401610476565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610476565b60006001600160a01b03831615801590610afc5750826001600160a01b0316846001600160a01b031614806112a257506112a284846109e9565b80610afc5750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b0319811681146112e157600080fd5b50565b6000602082840312156112f657600080fd5b8135611301816112cb565b9392505050565b60005b8381101561132357818101518382015260200161130b565b50506000910152565b60008151808452611344816020860160208601611308565b601f01601f19169290920160200192915050565b602081526000611301602083018461132c565b60006020828403121561137d57600080fd5b5035919050565b6001600160a01b03811681146112e157600080fd5b600080604083850312156113ac57600080fd5b82356113b781611384565b946020939093013593505050565b6000806000806000608086880312156113dd57600080fd5b85356113e881611384565b945060208601356113f881611384565b935060408601359250606086013567ffffffffffffffff81111561141b57600080fd5b8601601f8101881361142c57600080fd5b803567ffffffffffffffff81111561144357600080fd5b88602082840101111561145557600080fd5b959894975092955050506020019190565b60008060006060848603121561147b57600080fd5b833561148681611384565b9250602084013561149681611384565b929592945050506040919091013590565b6000602082840312156114b957600080fd5b813561130181611384565b80151581146112e157600080fd5b600080604083850312156114e557600080fd5b82356114f081611384565b91506020830135611500816114c4565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561154a5761154a61150b565b604052919050565b600067ffffffffffffffff82111561156c5761156c61150b565b50601f01601f191660200190565b6000806000806080858703121561159057600080fd5b843561159b81611384565b935060208501356115ab81611384565b925060408501359150606085013567ffffffffffffffff8111156115ce57600080fd5b8501601f810187136115df57600080fd5b80356115f26115ed82611552565b611521565b81815288602083850101111561160757600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060006060848603121561163e57600080fd5b83359250602084013561165081611384565b9150604084013567ffffffffffffffff8116811461166d57600080fd5b809150509250925092565b6000806040838503121561168b57600080fd5b823561169681611384565b9150602083013561150081611384565b600181811c908216806116ba57607f821691505b6020821081036116da57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156116f257600080fd5b815161130181611384565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006020828403121561173357600080fd5b815167ffffffffffffffff81111561174a57600080fd5b8201601f8101841361175b57600080fd5b80516117696115ed82611552565b81815285602083850101111561177e57600080fd5b610d8a826020830160208601611308565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000602082840312156117f257600080fd5b8151611301816114c4565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906118309083018461132c565b9695505050505050565b60006020828403121561184c57600080fd5b8151611301816112cb56fea26469706673582212205dfa8ecc4022865549d1f59492dd6159650184a03e7a887a4bd0fcede09a91ed64736f6c634300081c0033a2646970667358221220805df8982fca6db787b0f43f9fbc5d5dbf5ae877bf058331226fd4f2f4e609c864736f6c634300081c0033";

type DoNFTFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoNFTFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoNFTFactory__factory extends ContractFactory {
  constructor(...args: DoNFTFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DoNFTFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DoNFTFactory__factory {
    return super.connect(runner) as DoNFTFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoNFTFactoryInterface {
    return new Interface(_abi) as DoNFTFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DoNFTFactory {
    return new Contract(address, _abi, runner) as unknown as DoNFTFactory;
  }
}
