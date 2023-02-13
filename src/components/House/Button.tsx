import React from 'react';

export  type ButtonType = {
    set?: string
    inc?: string
    reset?: string
    addValue?: () => void
    resetValue?: () => void
    value?:  number
    disabled?: number
    changeMaxStart?: () => void
    disabledInput: boolean
}
function Button(props: ButtonType) {

    console.log("34444", props.value, props.disabled)

    return (
        <>
            {props.set && <button disabled={!props.disabledInput}  className="button-counter" onClick={props.changeMaxStart}> {props.set}</button>}
            {props.inc && <button disabled={props.value === props.disabled} className="button-counter" onClick={props.addValue} >{props.inc}</button>}
            {props.reset && <button disabled={!props.disabledInput} className="button-counter" onClick={props.resetValue} >{props.reset}</button>}

        </>

    );
}

export default Button;