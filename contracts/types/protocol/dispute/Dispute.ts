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
} from "../../common";

export declare namespace DataTypes {
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

export interface DisputeInterface extends utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "ADDRESS_PROVIDER()": FunctionFragment;
    "MAX_UINT()": FunctionFragment;
    "approve(address)": FunctionFragment;
    "createDispute(uint256,uint256,uint256)": FunctionFragment;
    "fetchContract(bytes32)": FunctionFragment;
    "getDisputeById(uint256)": FunctionFragment;
    "getDisputeCount()": FunctionFragment;
    "getDisputeList()": FunctionFragment;
    "getNewDelays(address)": FunctionFragment;
    "hasProtocolRole(bytes32,address)": FunctionFragment;
    "isCallerUser(address,uint256,address)": FunctionFragment;
    "isGigOwner(uint256,uint256,address)": FunctionFragment;
    "isStillBuyer(address)": FunctionFragment;
    "isStillSeller(address)": FunctionFragment;
    "kill()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendEvidence(uint256,uint256,(uint256,bytes32,string,string))": FunctionFragment;
    "setProvider(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESSES_PROVIDER"
      | "ADDRESS_PROVIDER"
      | "MAX_UINT"
      | "approve"
      | "createDispute"
      | "fetchContract"
      | "getDisputeById"
      | "getDisputeCount"
      | "getDisputeList"
      | "getNewDelays"
      | "hasProtocolRole"
      | "isCallerUser"
      | "isGigOwner"
      | "isStillBuyer"
      | "isStillSeller"
      | "kill"
      | "owner"
      | "renounceOwnership"
      | "sendEvidence"
      | "setProvider"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ADDRESS_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createDispute",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchContract",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputeById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputeCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDisputeList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNewDelays",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasProtocolRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isCallerUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isGigOwner",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isStillBuyer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isStillSeller",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendEvidence",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      DataTypes.EvidenceStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ADDRESS_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputeById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputeCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisputeList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewDelays",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasProtocolRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCallerUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGigOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isStillBuyer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStillSeller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendEvidence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Dispute extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DisputeInterface;

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
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      procecutorId: PromiseOrValue<BigNumberish>,
      defendantId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[OutputTypes.DisputeOutputStructOutput]>;

    getDisputeCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDisputeList(
      overrides?: CallOverrides
    ): Promise<[OutputTypes.DisputeOutputStructOutput[]]>;

    getNewDelays(
      protocolConfigurator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { delays: BigNumber[] }>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAddressMatchingId: boolean }>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendEvidence(
      disputeId: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      evidence: DataTypes.EvidenceStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;

  MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    erc20: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createDispute(
    orderId: PromiseOrValue<BigNumberish>,
    procecutorId: PromiseOrValue<BigNumberish>,
    defendantId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fetchContract(
    _name: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDisputeById(
    disputeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<OutputTypes.DisputeOutputStructOutput>;

  getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;

  getDisputeList(
    overrides?: CallOverrides
  ): Promise<OutputTypes.DisputeOutputStructOutput[]>;

  getNewDelays(
    protocolConfigurator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  hasProtocolRole(
    _role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCallerUser(
    caller: PromiseOrValue<string>,
    userId: PromiseOrValue<BigNumberish>,
    UserContract: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isGigOwner(
    userId: PromiseOrValue<BigNumberish>,
    gigId: PromiseOrValue<BigNumberish>,
    UserContract: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStillBuyer(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStillSeller(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kill(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendEvidence(
    disputeId: PromiseOrValue<BigNumberish>,
    roundId: PromiseOrValue<BigNumberish>,
    evidence: DataTypes.EvidenceStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProvider(
    _providerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<string>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      procecutorId: PromiseOrValue<BigNumberish>,
      defendantId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<OutputTypes.DisputeOutputStructOutput>;

    getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;

    getDisputeList(
      overrides?: CallOverrides
    ): Promise<OutputTypes.DisputeOutputStructOutput[]>;

    getNewDelays(
      protocolConfigurator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kill(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendEvidence(
      disputeId: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      evidence: DataTypes.EvidenceStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      procecutorId: PromiseOrValue<BigNumberish>,
      defendantId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDisputeCount(overrides?: CallOverrides): Promise<BigNumber>;

    getDisputeList(overrides?: CallOverrides): Promise<BigNumber>;

    getNewDelays(
      protocolConfigurator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendEvidence(
      disputeId: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      evidence: DataTypes.EvidenceStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ADDRESS_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      erc20: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createDispute(
      orderId: PromiseOrValue<BigNumberish>,
      procecutorId: PromiseOrValue<BigNumberish>,
      defendantId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fetchContract(
      _name: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDisputeById(
      disputeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDisputeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDisputeList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNewDelays(
      protocolConfigurator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasProtocolRole(
      _role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCallerUser(
      caller: PromiseOrValue<string>,
      userId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGigOwner(
      userId: PromiseOrValue<BigNumberish>,
      gigId: PromiseOrValue<BigNumberish>,
      UserContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStillBuyer(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStillSeller(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendEvidence(
      disputeId: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      evidence: DataTypes.EvidenceStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProvider(
      _providerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}