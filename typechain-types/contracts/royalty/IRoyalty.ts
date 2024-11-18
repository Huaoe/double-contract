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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IRoyaltyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimRoyaltyAdmin"
      | "getBeneficiary"
      | "getRoyaltyFee"
      | "setBeneficiary"
      | "setRoyaltyFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimRoyaltyAdmin"
      | "ClaimRoyaltyBalance"
      | "SetBeneficiary"
      | "SetRoyaltyFee"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimRoyaltyAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyaltyFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiary",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltyFee",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRoyaltyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyaltyFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltyFee",
    data: BytesLike
  ): Result;
}

export namespace ClaimRoyaltyAdminEvent {
  export type InputTuple = [operator: AddressLike];
  export type OutputTuple = [operator: string];
  export interface OutputObject {
    operator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimRoyaltyBalanceEvent {
  export type InputTuple = [operator: AddressLike, balance: BigNumberish];
  export type OutputTuple = [operator: string, balance: bigint];
  export interface OutputObject {
    operator: string;
    balance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetBeneficiaryEvent {
  export type InputTuple = [operator: AddressLike, beneficiary: AddressLike];
  export type OutputTuple = [operator: string, beneficiary: string];
  export interface OutputObject {
    operator: string;
    beneficiary: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetRoyaltyFeeEvent {
  export type InputTuple = [operator: AddressLike, fee: BigNumberish];
  export type OutputTuple = [operator: string, fee: bigint];
  export interface OutputObject {
    operator: string;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IRoyalty extends BaseContract {
  connect(runner?: ContractRunner | null): IRoyalty;
  waitForDeployment(): Promise<this>;

  interface: IRoyaltyInterface;

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

  claimRoyaltyAdmin: TypedContractMethod<[], [void], "nonpayable">;

  getBeneficiary: TypedContractMethod<[], [string], "view">;

  getRoyaltyFee: TypedContractMethod<[], [bigint], "view">;

  setBeneficiary: TypedContractMethod<
    [beneficiary_: AddressLike],
    [void],
    "nonpayable"
  >;

  setRoyaltyFee: TypedContractMethod<
    [fee_: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimRoyaltyAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getBeneficiary"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoyaltyFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setBeneficiary"
  ): TypedContractMethod<[beneficiary_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRoyaltyFee"
  ): TypedContractMethod<[fee_: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ClaimRoyaltyAdmin"
  ): TypedContractEvent<
    ClaimRoyaltyAdminEvent.InputTuple,
    ClaimRoyaltyAdminEvent.OutputTuple,
    ClaimRoyaltyAdminEvent.OutputObject
  >;
  getEvent(
    key: "ClaimRoyaltyBalance"
  ): TypedContractEvent<
    ClaimRoyaltyBalanceEvent.InputTuple,
    ClaimRoyaltyBalanceEvent.OutputTuple,
    ClaimRoyaltyBalanceEvent.OutputObject
  >;
  getEvent(
    key: "SetBeneficiary"
  ): TypedContractEvent<
    SetBeneficiaryEvent.InputTuple,
    SetBeneficiaryEvent.OutputTuple,
    SetBeneficiaryEvent.OutputObject
  >;
  getEvent(
    key: "SetRoyaltyFee"
  ): TypedContractEvent<
    SetRoyaltyFeeEvent.InputTuple,
    SetRoyaltyFeeEvent.OutputTuple,
    SetRoyaltyFeeEvent.OutputObject
  >;

  filters: {
    "ClaimRoyaltyAdmin(address)": TypedContractEvent<
      ClaimRoyaltyAdminEvent.InputTuple,
      ClaimRoyaltyAdminEvent.OutputTuple,
      ClaimRoyaltyAdminEvent.OutputObject
    >;
    ClaimRoyaltyAdmin: TypedContractEvent<
      ClaimRoyaltyAdminEvent.InputTuple,
      ClaimRoyaltyAdminEvent.OutputTuple,
      ClaimRoyaltyAdminEvent.OutputObject
    >;

    "ClaimRoyaltyBalance(address,uint256)": TypedContractEvent<
      ClaimRoyaltyBalanceEvent.InputTuple,
      ClaimRoyaltyBalanceEvent.OutputTuple,
      ClaimRoyaltyBalanceEvent.OutputObject
    >;
    ClaimRoyaltyBalance: TypedContractEvent<
      ClaimRoyaltyBalanceEvent.InputTuple,
      ClaimRoyaltyBalanceEvent.OutputTuple,
      ClaimRoyaltyBalanceEvent.OutputObject
    >;

    "SetBeneficiary(address,address)": TypedContractEvent<
      SetBeneficiaryEvent.InputTuple,
      SetBeneficiaryEvent.OutputTuple,
      SetBeneficiaryEvent.OutputObject
    >;
    SetBeneficiary: TypedContractEvent<
      SetBeneficiaryEvent.InputTuple,
      SetBeneficiaryEvent.OutputTuple,
      SetBeneficiaryEvent.OutputObject
    >;

    "SetRoyaltyFee(address,uint256)": TypedContractEvent<
      SetRoyaltyFeeEvent.InputTuple,
      SetRoyaltyFeeEvent.OutputTuple,
      SetRoyaltyFeeEvent.OutputObject
    >;
    SetRoyaltyFee: TypedContractEvent<
      SetRoyaltyFeeEvent.InputTuple,
      SetRoyaltyFeeEvent.OutputTuple,
      SetRoyaltyFeeEvent.OutputObject
    >;
  };
}