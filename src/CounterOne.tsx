import React, {useEffect, useState} from 'react';
import CounterHouse from "./components/House/CounterHouse";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addVal,
    changeDataInput,
    changeDisabled,
    changeDisabledInput,
    changeValue
} from "./state/counter-reducer";

type DataType = {
    max: number
    start: number
}

export type ValueType = {

    value?: number
    one?: number
    two?: number
    addValue?: () => void
    resetValue?: () => void
    disabled?: number
    dataInput?: DataType
    setMaxValue: (maxV: string ) => void
    setStartValue: (startV: string) => void
    changeMaxStart?: () => void
    disableInput: boolean


}
const one = 1
const two = 2
function CounterOne() {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const disabled = useSelector<AppRootStateType, number>(state => state.counter.disabled)
    const disableInput = useSelector<AppRootStateType, boolean>(state => state.counter.disableInput)
    const dataInput = useSelector<AppRootStateType, {max: number, start: number}>(state => state.counter.dataInput)

    const dispatch = useDispatch()
    useEffect(() => {
        getFromLocalMax()
    }, [])
    const getFromLocalMax = () => {
        let counterMax = localStorage.getItem("counterMax")
        let counterStart = localStorage.getItem("counterStart")
        if(counterMax && counterStart){
            let newMax = JSON.parse(counterMax)
            let newStart = JSON.parse(counterStart)
            dispatch(changeDisabled(newMax))
            dispatch(changeValue(newStart))
            dispatch(changeDataInput(newStart, newMax))
        }
    }

    const setMaxValue = (maxV: string) => {
        if(Number(maxV) > dataInput.start){
            dispatch(changeDisabledInput(true))
            dispatch(changeDataInput(dataInput.start, Number(maxV)))
        }else {
            dispatch(changeDisabledInput(false))
        }
    }
    const setStartValue = (startV: string) => {
        if (Number(startV) < dataInput.max && Number(startV) >= 0) {
            dispatch(changeDisabledInput(true))
            dispatch(changeDataInput(Number(startV), dataInput.max))
        }else {
            dispatch(changeDisabledInput(false))
        }
    }

    const changeMaxStart = () => {
        dispatch(changeDisabled(dataInput.max))
        dispatch(changeValue(dataInput.start))
        setToLocalStorageHandlerStart()
        setToLocalStorageHandlerMax()
    }

    const addValue = () => {
        dispatch(addVal())
    }
    const resetValue = () => {
        dispatch(changeValue(dataInput.start))
    }

    const setToLocalStorageHandlerStart = () => {
        localStorage.setItem("counterStart", JSON.stringify(dataInput.start))
    }
    const setToLocalStorageHandlerMax = () => {
        localStorage.setItem("counterMax", JSON.stringify(dataInput.max))
    }

    return (
        <>
            <CounterHouse
                two={two}
                dataInput={dataInput}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                changeMaxStart={changeMaxStart}
                disableInput={disableInput}
            />
            <CounterHouse
                one={one}
                value={value}
                disabled={disabled}
                addValue={addValue}
                resetValue={resetValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                disableInput={disableInput}
            />
        </>
    );
}

export default CounterOne;