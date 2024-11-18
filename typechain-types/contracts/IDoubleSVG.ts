/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface IDoubleSVGInterface extends Interface {
  getFunction(nameOrSignature: "genTokenURI"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "genTokenURI",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "genTokenURI",
    data: BytesLike
  ): Result;
}

export interface IDoubleSVG extends BaseContract {
  connect(runner?: ContractRunner | null): IDoubleSVG;
  waitForDeployment(): Promise<this>;

  interface: IDoubleSVGInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  genTokenURI: TypedContractMethod<
    [
      tokenId: BigNumberish,
      name: string,
      type_value: string,
      start_time: BigNumberish,
      end_time: BigNumberish
    ],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "genTokenURI"
  ): TypedContractMethod<
    [
      tokenId: BigNumberish,
      name: string,
      type_value: string,
      start_time: BigNumberish,
      end_time: BigNumberish
    ],
    [string],
    "view"
  >;

  filters: {};
}
