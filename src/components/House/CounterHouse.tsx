import React from 'react';
import CounterTop from "./CounterTop";
import ButtonBottom from "./ButtonBottom";
import {ValueType} from "../../CounterOne";

function CounterHouse (props: ValueType) {

    return (
        <div className="counter-house">
            <CounterTop
                one={props.one}
                two={props.two}
                value={props.value}
                disabled={props.disabled}
                dataInput={props.dataInput}
                setStartValue={props.setStartValue}
                setMaxValue={props.setMaxValue}
                disableInput={props.disableInput}
            />
            <ButtonBottom

                value={props.value}
                disabled={props.disabled}
                one={props.one}
                two={props.two}
                addValue={props.addValue}
                resetValue={props.resetValue}
                setStartValue={props.setStartValue}
                setMaxValue={props.setMaxValue}
                changeMaxStart={props.changeMaxStart}
                disableInput={props.disableInput}
             />
        </div>
    );
}

export default CounterHouse;