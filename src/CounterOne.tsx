import React, {useState} from 'react';
import CounterHouse from "./components/House/CounterHouse";

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
    const [dataInput, setDataInput] = useState<DataType>({
        max: 1,
        start: 0
    })

    const [value, setValue] = useState(dataInput.start)
    const [disabled, setDisabled] = useState(dataInput.max)
    const[disableInput, setdisableInput] = useState<boolean>(true)

    const setMaxValue = (maxV: string) => {
        if(Number(maxV) > dataInput.start){
            setdisableInput(true)
            setDataInput({...dataInput, max: Number(maxV)})
        }else {
            setdisableInput(false)
        }
    }
    const setStartValue = (startV: string) => {
        if (Number(startV) < dataInput.max && Number(startV) >= 0) {
            setdisableInput(true)
            setDataInput({...dataInput, start: Number(startV)})
        }else {
            setdisableInput(false)
        }
    }

    const changeMaxStart = () => {

            setDisabled(dataInput.max)
            setValue(dataInput.start)


    }

    const addValue = () => {
        setValue(value + 1)
    }
    const resetValue = () => {
        setValue(dataInput.start)
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