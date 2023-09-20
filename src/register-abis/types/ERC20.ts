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
} from "ethers"
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi"
import type { Listener, Provider } from "@ethersproject/providers"
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common"

export interface ERC20Interface extends utils.Interface {
    functions: {
        "name()": FunctionFragment
        "approve(address,uint256)": FunctionFragment
        "totalSupply()": FunctionFragment
        "transferFrom(address,address,uint256)": FunctionFragment
        "decimals()": FunctionFragment
        "balanceOf(address)": FunctionFragment
        "symbol()": FunctionFragment
        "transfer(address,uint256)": FunctionFragment
        "allowance(address,address)": FunctionFragment
    }

    getFunction(
        nameOrSignatureOrTopic:
            | "name"
            | "approve"
            | "totalSupply"
            | "transferFrom"
            | "decimals"
            | "balanceOf"
            | "symbol"
            | "transfer"
            | "allowance"
    ): FunctionFragment

    encodeFunctionData(functionFragment: "name", values?: undefined): string
    encodeFunctionData(
        functionFragment: "approve",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string
    encodeFunctionData(
        functionFragment: "transferFrom",
        values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string
    encodeFunctionData(
        functionFragment: "transfer",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string

    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result

    events: {
        "Approval(address,address,uint256)": EventFragment
        "Transfer(address,address,uint256)": EventFragment
    }

    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
}

export interface ApprovalEventObject {
    owner: string
    spender: string
    value: BigNumber
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>

export interface TransferEventObject {
    from: string
    to: string
    value: BigNumber
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>

export type TransferEventFilter = TypedEventFilter<TransferEvent>

export interface ERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this
    attach(addressOrName: string): this
    deployed(): Promise<this>

    interface: ERC20Interface

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>

    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
    listeners(eventName?: string): Array<Listener>
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
    removeAllListeners(eventName?: string): this
    off: OnEvent<this>
    on: OnEvent<this>
    once: OnEvent<this>
    removeListener: OnEvent<this>

    functions: {
        name(overrides?: CallOverrides): Promise<[string]>

        approve(
            _spender: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

        transferFrom(
            _from: PromiseOrValue<string>,
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        decimals(overrides?: CallOverrides): Promise<[number]>

        balanceOf(
            _owner: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<[BigNumber] & { balance: BigNumber }>

        symbol(overrides?: CallOverrides): Promise<[string]>

        transfer(
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        allowance(
            _owner: PromiseOrValue<string>,
            _spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>
    }

    name(overrides?: CallOverrides): Promise<string>

    approve(
        _spender: PromiseOrValue<string>,
        _value: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transferFrom(
        _from: PromiseOrValue<string>,
        _to: PromiseOrValue<string>,
        _value: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    decimals(overrides?: CallOverrides): Promise<number>

    balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<string>

    transfer(
        _to: PromiseOrValue<string>,
        _value: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    allowance(
        _owner: PromiseOrValue<string>,
        _spender: PromiseOrValue<string>,
        overrides?: CallOverrides
    ): Promise<BigNumber>

    callStatic: {
        name(overrides?: CallOverrides): Promise<string>

        approve(
            _spender: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>

        transferFrom(
            _from: PromiseOrValue<string>,
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>

        decimals(overrides?: CallOverrides): Promise<number>

        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

        symbol(overrides?: CallOverrides): Promise<string>

        transfer(
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>

        allowance(
            _owner: PromiseOrValue<string>,
            _spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<BigNumber>
    }

    filters: {
        "Approval(address,address,uint256)"(
            owner?: PromiseOrValue<string> | null,
            spender?: PromiseOrValue<string> | null,
            value?: null
        ): ApprovalEventFilter
        Approval(
            owner?: PromiseOrValue<string> | null,
            spender?: PromiseOrValue<string> | null,
            value?: null
        ): ApprovalEventFilter

        "Transfer(address,address,uint256)"(
            from?: PromiseOrValue<string> | null,
            to?: PromiseOrValue<string> | null,
            value?: null
        ): TransferEventFilter
        Transfer(
            from?: PromiseOrValue<string> | null,
            to?: PromiseOrValue<string> | null,
            value?: null
        ): TransferEventFilter
    }

    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>

        approve(
            _spender: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>

        transferFrom(
            _from: PromiseOrValue<string>,
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        decimals(overrides?: CallOverrides): Promise<BigNumber>

        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>

        symbol(overrides?: CallOverrides): Promise<BigNumber>

        transfer(
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        allowance(
            _owner: PromiseOrValue<string>,
            _spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<BigNumber>
    }

    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>

        approve(
            _spender: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

        transferFrom(
            _from: PromiseOrValue<string>,
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

        balanceOf(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>

        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

        transfer(
            _to: PromiseOrValue<string>,
            _value: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        allowance(
            _owner: PromiseOrValue<string>,
            _spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>
    }
}
