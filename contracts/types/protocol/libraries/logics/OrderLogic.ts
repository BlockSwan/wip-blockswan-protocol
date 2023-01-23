/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace DataTypes {
  export type OrderPriceParamsStruct = {
    trialFlat: PromiseOrValue<BigNumberish>;
    trialPercent: PromiseOrValue<BigNumberish>;
    proceedFlat: PromiseOrValue<BigNumberish>;
    proceedPercent: PromiseOrValue<BigNumberish>;
  };

  export type OrderPriceParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    trialFlat: BigNumber;
    trialPercent: BigNumber;
    proceedFlat: BigNumber;
    proceedPercent: BigNumber;
  };
}

export interface OrderLogicInterface extends utils.Interface {
  functions: {
    "calcOrderPrice((uint256,uint256,uint256,uint256),uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "calcOrderPrice"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcOrderPrice",
    values: [DataTypes.OrderPriceParamsStruct, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "calcOrderPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OrderLogic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderLogicInterface;

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
    calcOrderPrice(
      params: DataTypes.OrderPriceParamsStruct,
      orderPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;
  };

  calcOrderPrice(
    params: DataTypes.OrderPriceParamsStruct,
    orderPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  callStatic: {
    calcOrderPrice(
      params: DataTypes.OrderPriceParamsStruct,
      orderPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    calcOrderPrice(
      params: DataTypes.OrderPriceParamsStruct,
      orderPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcOrderPrice(
      params: DataTypes.OrderPriceParamsStruct,
      orderPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}