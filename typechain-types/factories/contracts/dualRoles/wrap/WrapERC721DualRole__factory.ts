/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  WrapERC721DualRole,
  WrapERC721DualRoleInterface,
} from "../../../../contracts/dualRoles/wrap/WrapERC721DualRole";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "originalAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
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
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Stake",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "UpdateUser",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
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
        name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "originalAddress",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "originalOwnerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userExpires",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userOf",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611cc2380380611cc283398101604081905261002f9161022b565b82828181600061003f838261033f565b50600161004c828261033f565b50506007546001600160a01b03161592506100a29150505760405162461bcd60e51b815260206004820152600e60248201526d696e6974656420616c726561647960901b60448201526064015b60405180910390fd5b6040516301ffc9a760e01b81526380ac58cd60e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156100ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011191906103fd565b61014a5760405162461bcd60e51b815260206004820152600a6024820152696e6f742045524337323160b01b6044820152606401610099565b600780546001600160a01b0319166001600160a01b0392909216919091179055506104269050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261019957600080fd5b81516001600160401b038111156101b2576101b2610172565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101e0576101e0610172565b6040528181528382016020018510156101f857600080fd5b60005b82811015610217576020818601810151838301820152016101fb565b506000918101602001919091529392505050565b60008060006060848603121561024057600080fd5b83516001600160401b0381111561025657600080fd5b61026286828701610188565b602086015190945090506001600160401b0381111561028057600080fd5b61028c86828701610188565b604086015190935090506001600160a01b03811681146102ab57600080fd5b809150509250925092565b600181811c908216806102ca57607f821691505b6020821081036102ea57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561033a57806000526020600020601f840160051c810160208510156103175750805b601f840160051c820191505b818110156103375760008155600101610323565b50505b505050565b81516001600160401b0381111561035857610358610172565b61036c8161036684546102b6565b846102f0565b6020601f8211600181146103a057600083156103885750848201515b600019600385901b1c1916600184901b178455610337565b600084815260208120601f198516915b828110156103d057878501518255602094850194600190920191016103b0565b50848210156103ee5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561040f57600080fd5b8151801515811461041f57600080fd5b9392505050565b61188d806104356000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638fc88c48116100b8578063c2f1f14a1161007c578063c2f1f14a146102d0578063c87b56dd146102e3578063cab416b4146102f6578063db006a7514610307578063e030565e1461031a578063e985e9c51461032d57600080fd5b80638fc88c481461025e57806395d89b411461028f578063a22cb46514610297578063a694fc3a146102aa578063b88d4fde146102bd57600080fd5b806323b872dd116100ff57806323b872dd146101f157806342842e0e146102045780636352211e1461021757806370a082311461022a57806373b64ac51461024b57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a4578063150b7a02146101b9575b600080fd5b61014f61014a3660046112e4565b610340565b60405190151581526020015b60405180910390f35b61016c610386565b60405161015b9190611358565b61018c61018736600461136b565b610418565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611399565b610441565b005b6101d86101c73660046113c5565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161015b565b6101b76101ff366004611466565b610450565b6101b7610212366004611466565b6104e0565b61018c61022536600461136b565b610500565b61023d6102383660046114a7565b61050b565b60405190815260200161015b565b61018c61025936600461136b565b610553565b61023d61026c36600461136b565b600090815260066020526040902054600160a01b900467ffffffffffffffff1690565b61016c6105e1565b6101b76102a53660046114d2565b6105f0565b61023d6102b836600461136b565b6105fb565b6101b76102cb36600461157a565b610788565b61018c6102de36600461136b565b6107a0565b61016c6102f136600461136b565b6107eb565b6007546001600160a01b031661018c565b6101b761031536600461136b565b61085d565b6101b7610328366004611629565b610942565b61014f61033b366004611678565b6109e9565b60006001600160e01b0319821663b72080fb60e01b148061037157506001600160e01b03198216632b424ad760e21b145b80610380575061038082610a17565b92915050565b606060008054610395906116a6565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906116a6565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b5050505050905090565b600061042382610a3c565b506000828152600460205260409020546001600160a01b0316610380565b61044c828233610a75565b5050565b6001600160a01b03821661047f57604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061048c838333610a82565b9050836001600160a01b0316816001600160a01b0316146104da576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610476565b50505050565b6104fb83838360405180602001604052806000815250610788565b505050565b600061038082610a3c565b60006001600160a01b038216610537576040516322718ad960e21b815260006004820152602401610476565b506001600160a01b031660009081526003602052604090205490565b6007546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa15801561059d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c191906116e0565b9050306001600160a01b038216036105dc5761038082610500565b919050565b606060018054610395906116a6565b61044c338383610b04565b6007546000906106169033906001600160a01b031684610ba3565b61065b5760405162461bcd60e51b815260206004820152601660248201527537b7363c9030b8383937bb32b21037b91037bbb732b960511b6044820152606401610476565b6007546040516331a9108f60e11b8152600481018490526000916001600160a01b031690636352211e90602401602060405180830381865afa1580156106a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c991906116e0565b600754604051632142170760e11b81529192506001600160a01b0316906342842e0e906106fe908490309088906004016116fd565b600060405180830381600087803b15801561071857600080fd5b505af115801561072c573d6000803e3d6000fd5b5050505061073a8184610d93565b6007546040517f99039fcf0a98f484616c5196ee8b2ecfa971babf0b519848289ea4db381f85f7916107799133916001600160a01b03169087906116fd565b60405180910390a15090919050565b610793848484610450565b6104da3385858585610df8565b60008181526006602052604081205442600160a01b90910467ffffffffffffffff16106107e357506000908152600660205260409020546001600160a01b031690565b506000919050565b60075460405163c87b56dd60e01b8152600481018390526060916001600160a01b03169063c87b56dd90602401600060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103809190810190611721565b6108673382610f23565b6108835760405162461bcd60e51b81526004016104769061178f565b6007546001600160a01b03166342842e0e3061089e84610500565b846040518463ffffffff1660e01b81526004016108bd939291906116fd565b600060405180830381600087803b1580156108d757600080fd5b505af11580156108eb573d6000803e3d6000fd5b505050506108f881610f7a565b6007546040517fd12200efa34901b99367694174c3b0d32c99585fdf37c7c26892136ddd0836d9916109379133916001600160a01b03169085906116fd565b60405180910390a150565b61094c3384610f23565b6109685760405162461bcd60e51b81526004016104769061178f565b60008381526006602090815260409182902080546001600160a01b0386166001600160e01b03199091168117600160a01b67ffffffffffffffff871690810291909117835593519384529092909186917f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe910160405180910390a350505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b03198216632b424ad760e21b1480610380575061038082610fb5565b6000818152600260205260408120546001600160a01b03168061038057604051637e27328960e01b815260048101849052602401610476565b6104fb8383836001611005565b600080610a9085858561110b565b9050846001600160a01b0316816001600160a01b031614610afc57600084815260066020908152604080832080546001600160e01b03191690555182815286917f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe910160405180910390a35b949350505050565b6001600160a01b038216610b3657604051630b61174360e31b81526001600160a01b0383166004820152602401610476565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040516331a9108f60e11b81526004810182905260009081906001600160a01b03851690636352211e90602401602060405180830381865afa158015610bed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1191906116e0565b90506001600160a01b038116610c7e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610476565b806001600160a01b0316856001600160a01b03161480610d12575060405163020604bf60e21b8152600481018490526001600160a01b03808716919086169063081812fc90602401602060405180830381865afa158015610ce3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0791906116e0565b6001600160a01b0316145b80610d8a575060405163e985e9c560e01b81526001600160a01b038281166004830152868116602483015285169063e985e9c590604401602060405180830381865afa158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a91906117e0565b95945050505050565b6001600160a01b038216610dbd57604051633250574960e11b815260006004820152602401610476565b6000610dcb83836000610a82565b90506001600160a01b038116156104fb576040516339e3563760e11b815260006004820152602401610476565b6001600160a01b0383163b15610f1c57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610e3a9088908890879087906004016117fd565b6020604051808303816000875af1925050508015610e75575060408051601f3d908101601f19168201909252610e729181019061183a565b60015b610ede573d808015610ea3576040519150601f19603f3d011682016040523d82523d6000602084013e610ea8565b606091505b508051600003610ed657604051633250574960e11b81526001600160a01b0385166004820152602401610476565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610f1a57604051633250574960e11b81526001600160a01b0385166004820152602401610476565b505b5050505050565b600080610f2f83610500565b9050806001600160a01b0316846001600160a01b03161480610f6a5750836001600160a01b0316610f5f84610418565b6001600160a01b0316145b80610afc5750610afc81856109e9565b6000610f896000836000610a82565b90506001600160a01b03811661044c57604051637e27328960e01b815260048101839052602401610476565b60006001600160e01b031982166380ac58cd60e01b1480610fe657506001600160e01b03198216635b5e139f60e01b145b8061038057506301ffc9a760e01b6001600160e01b0319831614610380565b808061101957506001600160a01b03821615155b156110db57600061102984610a3c565b90506001600160a01b038316158015906110555750826001600160a01b0316816001600160a01b031614155b8015611068575061106681846109e9565b155b156110915760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610476565b81156110d95783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6000828152600260205260408120546001600160a01b039081169083161561113857611138818486611204565b6001600160a01b0381161561117657611155600085600080611005565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b038516156111a5576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61120f838383611268565b6104fb576001600160a01b03831661123d57604051637e27328960e01b815260048101829052602401610476565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610476565b60006001600160a01b03831615801590610afc5750826001600160a01b0316846001600160a01b031614806112a257506112a284846109e9565b80610afc5750506000908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b0319811681146112e157600080fd5b50565b6000602082840312156112f657600080fd5b8135611301816112cb565b9392505050565b60005b8381101561132357818101518382015260200161130b565b50506000910152565b60008151808452611344816020860160208601611308565b601f01601f19169290920160200192915050565b602081526000611301602083018461132c565b60006020828403121561137d57600080fd5b5035919050565b6001600160a01b03811681146112e157600080fd5b600080604083850312156113ac57600080fd5b82356113b781611384565b946020939093013593505050565b6000806000806000608086880312156113dd57600080fd5b85356113e881611384565b945060208601356113f881611384565b935060408601359250606086013567ffffffffffffffff81111561141b57600080fd5b8601601f8101881361142c57600080fd5b803567ffffffffffffffff81111561144357600080fd5b88602082840101111561145557600080fd5b959894975092955050506020019190565b60008060006060848603121561147b57600080fd5b833561148681611384565b9250602084013561149681611384565b929592945050506040919091013590565b6000602082840312156114b957600080fd5b813561130181611384565b80151581146112e157600080fd5b600080604083850312156114e557600080fd5b82356114f081611384565b91506020830135611500816114c4565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561154a5761154a61150b565b604052919050565b600067ffffffffffffffff82111561156c5761156c61150b565b50601f01601f191660200190565b6000806000806080858703121561159057600080fd5b843561159b81611384565b935060208501356115ab81611384565b925060408501359150606085013567ffffffffffffffff8111156115ce57600080fd5b8501601f810187136115df57600080fd5b80356115f26115ed82611552565b611521565b81815288602083850101111561160757600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060006060848603121561163e57600080fd5b83359250602084013561165081611384565b9150604084013567ffffffffffffffff8116811461166d57600080fd5b809150509250925092565b6000806040838503121561168b57600080fd5b823561169681611384565b9150602083013561150081611384565b600181811c908216806116ba57607f821691505b6020821081036116da57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156116f257600080fd5b815161130181611384565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006020828403121561173357600080fd5b815167ffffffffffffffff81111561174a57600080fd5b8201601f8101841361175b57600080fd5b80516117696115ed82611552565b81815285602083850101111561177e57600080fd5b610d8a826020830160208601611308565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000602082840312156117f257600080fd5b8151611301816114c4565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906118309083018461132c565b9695505050505050565b60006020828403121561184c57600080fd5b8151611301816112cb56fea26469706673582212205dfa8ecc4022865549d1f59492dd6159650184a03e7a887a4bd0fcede09a91ed64736f6c634300081c0033";

type WrapERC721DualRoleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WrapERC721DualRoleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WrapERC721DualRole__factory extends ContractFactory {
  constructor(...args: WrapERC721DualRoleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    originalAddress_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name_,
      symbol_,
      originalAddress_,
      overrides || {}
    );
  }
  override deploy(
    name_: string,
    symbol_: string,
    originalAddress_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      name_,
      symbol_,
      originalAddress_,
      overrides || {}
    ) as Promise<
      WrapERC721DualRole & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WrapERC721DualRole__factory {
    return super.connect(runner) as WrapERC721DualRole__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WrapERC721DualRoleInterface {
    return new Interface(_abi) as WrapERC721DualRoleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WrapERC721DualRole {
    return new Contract(address, _abi, runner) as unknown as WrapERC721DualRole;
  }
}
