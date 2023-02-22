/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace DataTypes {
  export type PackageStruct = {
    price: PromiseOrValue<BigNumberish>;
    timeDelivery: PromiseOrValue<BigNumberish>;
  };

  export type PackageStructOutput = [BigNumber, BigNumber] & {
    price: BigNumber;
    timeDelivery: BigNumber;
  };

  export type VoteStruct = {
    account: PromiseOrValue<string>;
    commit: PromiseOrValue<BytesLike>;
    choice: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
    justification: PromiseOrValue<string>;
    voted: PromiseOrValue<boolean>;
  };

  export type VoteStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
  ] & {
    account: string;
    commit: string;
    choice: BigNumber;
    weight: BigNumber;
    justification: string;
    voted: boolean;
  };

  export type EvidenceStruct = {
    userId: PromiseOrValue<BigNumberish>;
    role: PromiseOrValue<BytesLike>;
    metadata: PromiseOrValue<string>;
    log: PromiseOrValue<string>;
  };

  export type EvidenceStructOutput = [BigNumber, string, string, string] & {
    userId: BigNumber;
    role: string;
    metadata: string;
    log: string;
  };
}

export declare namespace OutputTypes {
  export type GigOutputStruct = {
    gigId: PromiseOrValue<BigNumberish>;
    metadata: PromiseOrValue<string>;
    createdAt: PromiseOrValue<BigNumberish>;
    successSell: PromiseOrValue<BigNumberish>;
    failedSell: PromiseOrValue<BigNumberish>;
    reviewIds: PromiseOrValue<BigNumberish>[];
    orderIds: PromiseOrValue<BigNumberish>[];
    packages: [
      DataTypes.PackageStruct,
      DataTypes.PackageStruct,
      DataTypes.PackageStruct
    ];
  };

  export type GigOutputStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    [
      DataTypes.PackageStructOutput,
      DataTypes.PackageStructOutput,
      DataTypes.PackageStructOutput
    ]
  ] & {
    gigId: BigNumber;
    metadata: string;
    createdAt: BigNumber;
    successSell: BigNumber;
    failedSell: BigNumber;
    reviewIds: BigNumber[];
    orderIds: BigNumber[];
    packages: [
      DataTypes.PackageStructOutput,
      DataTypes.PackageStructOutput,
      DataTypes.PackageStructOutput
    ];
  };

  export type RoundOutputStruct = {
    roundId: PromiseOrValue<BigNumberish>;
    tokensAtStakePerJuror: PromiseOrValue<BigNumberish>;
    totalFeesForJurors: PromiseOrValue<BigNumberish>;
    maxVotes: PromiseOrValue<BigNumberish>;
    penalties: PromiseOrValue<BigNumberish>;
    winningChoice: PromiseOrValue<BigNumberish>;
    totalRepartitions: PromiseOrValue<BigNumberish>;
    totalVoted: PromiseOrValue<BigNumberish>;
    totalCommited: PromiseOrValue<BigNumberish>;
    counts: PromiseOrValue<BigNumberish>[];
    evidenceSubmitters: PromiseOrValue<BigNumberish>[];
    votes: DataTypes.VoteStruct[];
    evidences: DataTypes.EvidenceStruct[];
    drawnJurors: PromiseOrValue<string>[];
  };

  export type RoundOutputStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    DataTypes.VoteStructOutput[],
    DataTypes.EvidenceStructOutput[],
    string[]
  ] & {
    roundId: BigNumber;
    tokensAtStakePerJuror: BigNumber;
    totalFeesForJurors: BigNumber;
    maxVotes: BigNumber;
    penalties: BigNumber;
    winningChoice: BigNumber;
    totalRepartitions: BigNumber;
    totalVoted: BigNumber;
    totalCommited: BigNumber;
    counts: BigNumber[];
    evidenceSubmitters: BigNumber[];
    votes: DataTypes.VoteStructOutput[];
    evidences: DataTypes.EvidenceStructOutput[];
    drawnJurors: string[];
  };

  export type DisputeOutputStruct = {
    createdAt: PromiseOrValue<BigNumberish>;
    disputeId: PromiseOrValue<BigNumberish>;
    orderId: PromiseOrValue<BigNumberish>;
    procecutorId: PromiseOrValue<BigNumberish>;
    defendantId: PromiseOrValue<BigNumberish>;
    ruling: PromiseOrValue<BigNumberish>;
    timestamps: PromiseOrValue<BigNumberish>[];
    state: PromiseOrValue<BigNumberish>;
    rounds: OutputTypes.RoundOutputStruct[];
  };

  export type DisputeOutputStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    number,
    OutputTypes.RoundOutputStructOutput[]
  ] & {
    createdAt: BigNumber;
    disputeId: BigNumber;
    orderId: BigNumber;
    procecutorId: BigNumber;
    defendantId: BigNumber;
    ruling: BigNumber;
    timestamps: BigNumber[];
    state: number;
    rounds: OutputTypes.RoundOutputStructOutput[];
  };
}

export interface IDisputeInterface extends utils.Interface {
  functions: {
    "createDispute(uint256,uint256,uint256)": FunctionFragment;
    "getDisputeById(uint256)": FunctionFragment;
    "getDisputeList()": FunctionFragment;
    "getDisputesCount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createDispute"
      | "getDisputeById"
      | "getDisputeList"
      | "getDisputesCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createDispute",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputeById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputeList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputesCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputeById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputeList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputesCount",
    data: BytesLike
  ): Result;

  events: {
    "NewDispute(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDispute"): EventFragment;
}

export interface NewDisputeEventObject {
  orderId: BigNumber;
  disputeId: BigNumber;
}
export type NewDisputeEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewDisputeEventObject
>;

export type NewDisputeEventFilter = TypedEventFilter<NewDisputeEvent>;

export interface IDispute extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDisputeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[OutputTypes.GigOutputStructOutput]>;

    getDisputeList(
      overrides?: CallOverrides
    ): Promise<[OutputTypes.DisputeOutputStructOutput[]]>;

    getDisputesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  createDispute(
    orderId: PromiseOrValue<BigNumberish>,
    sellerId: PromiseOrValue<BigNumberish>,
    buyerId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDisputeById(
    disputeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<OutputTypes.GigOutputStructOutput>;

  getDisputeList(
    overrides?: CallOverrides
  ): Promise<OutputTypes.DisputeOutputStructOutput[]>;

  getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<OutputTypes.GigOutputStructOutput>;

    getDisputeList(
      overrides?: CallOverrides
    ): Promise<OutputTypes.DisputeOutputStructOutput[]>;

    getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "NewDispute(uint256,uint256)"(
      orderId?: PromiseOrValue<BigNumberish> | null,
      disputeId?: PromiseOrValue<BigNumberish> | null
    ): NewDisputeEventFilter;
    NewDispute(
      orderId?: PromiseOrValue<BigNumberish> | null,
      disputeId?: PromiseOrValue<BigNumberish> | null
    ): NewDisputeEventFilter;
  };

  estimateGas: {
    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDisputeList(overrides?: CallOverrides): Promise<BigNumber>;

    getDisputesCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      sellerId: PromiseOrValue<BigNumberish>,
      buyerId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDisputeList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDisputesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}