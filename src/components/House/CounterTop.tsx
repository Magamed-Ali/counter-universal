import React, {ChangeEvent} from 'react';
import {ValueType} from "../../CounterOne";

function CounterTop(props: ValueType) {

    const onChangeValue = (e: string) => {
        props.setMaxValue(e)

    }
    const onChangeStart = (e: string) => {
        props.setStartValue(e)

    }

    return (
        <div className="counter-top">
            <div className={`counter-value ${props.value === props.disabled && "value-red"}`}>
                {props.one ? props.disableInput ? props.value : <span className="incorrect-value">Incorrect value!</span> : props.value}
            </div>
            <div >
                {props.two &&
                    <div className="counter-input">
                        <div><span>max value:</span>
                            <input
                                className={!props.disableInput ? "disabledInput" : ""}
                                type="number"
                                value={props.dataInput?.max}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.currentTarget.value)}/>
                        </div>

                        <div><span>start value:</span>
                            <input
                                className={!props.disableInput ? "disabledInput" : ""}
                                type="number"
                                value={props.dataInput?.start}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeStart(e.currentTarget.value)}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CounterTop;