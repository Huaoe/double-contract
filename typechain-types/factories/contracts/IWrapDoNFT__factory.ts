/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWrapDoNFT,
  IWrapDoNFTInterface,
} from "../../contracts/IWrapDoNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oid",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "durationIds",
        type: "uint256[]",
      },
    ],
    name: "couldRedeem",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "durationIds",
        type: "uint256[]",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IWrapDoNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IWrapDoNFTInterface {
    return new Interface(_abi) as IWrapDoNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IWrapDoNFT {
    return new Contract(address, _abi, runner) as unknown as IWrapDoNFT;
  }
}
