import React from 'react';
import Button from "./Button";
import {ValueType} from "../../CounterOne";


function ButtonBottom(props: ValueType) {

    return (
        <div className="button-bottom">

            {props.two && <Button
                disabledInput={props.disableInput}
                set={"set"}
                changeMaxStart={props.changeMaxStart}
            />
            }

            {props.one && <Button
                value={props.value}
                disabled={props.disabled}
                disabledInput={props.disableInput}
                inc={"inc"}
                reset={"reset"}
                addValue={props.addValue}
                resetValue={props.resetValue}
            />}
        </div>
    );
}

export default ButtonBottom;