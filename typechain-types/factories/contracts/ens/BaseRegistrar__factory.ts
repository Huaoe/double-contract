/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  BaseRegistrar,
  BaseRegistrarInterface,
} from "../../../contracts/ens/BaseRegistrar";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "nameExpires",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "reclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class BaseRegistrar__factory {
  static readonly abi = _abi;
  static createInterface(): BaseRegistrarInterface {
    return new Interface(_abi) as BaseRegistrarInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseRegistrar {
    return new Contract(address, _abi, runner) as unknown as BaseRegistrar;
  }
}
