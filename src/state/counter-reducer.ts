export type ActionType =
    ReturnType<typeof MaxValue>
    | ReturnType<typeof StartValue>
    | ReturnType<typeof changeMaxStart>
    | ReturnType<typeof addVal>
    | ReturnType<typeof resetValue>
    | ReturnType<typeof changeDisabledInput>
    | ReturnType<typeof changeDisabled>
    | ReturnType<typeof changeValue>
    | ReturnType<typeof changeDataInput>

type StateType = {

    dataInput: {
        max: number,
        start: number
    }
    disableInput: boolean
    disabled: number
    value: number
}
const initialState = {

    dataInput: {
        max: 1,
        start: 0
    },
    disableInput: true,
    disabled: 1,
    value: 0
}
export const counterReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'MAX-VALUE': {
            if (Number(action.payload.max) > state.dataInput.start) {
                return {
                    ...state,
                    disableInput: true,
                    disabled: Number(action.payload.max),
                    dataInput: {...state.dataInput, max: Number(action.payload.max)},

                }
            } else {
                return {
                    ...state, disableInput: false
                }
            }
        }
        case 'START-VALUE': {
            if (Number(action.payload.start) < state.dataInput.max && Number(action.payload.start) >= 0) {
                return {
                    ...state,
                    disableInput: true,
                    dataInput: {
                        ...state.dataInput,
                        start: Number(action.payload.start)
                    }
                }
            } else {
                return {
                    ...state, disableInput: false
                }
            }
        }
        case 'SET-COUNTER-START': {
            return {
                ...state,
                disabled: state.dataInput.max,
                value: state.dataInput.start
            }
        }
        case 'ADD-VALUE': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case 'RESET-VALUE': {
            return {
                ...state,
                value: state.dataInput.start
            }
        }
        case 'CHANGE-VALUE': {
            return {
                ...state,
                value: action.payload.item
            }
        }
        case 'CHANGE-DISABLED-INPUT': {
            return {
                ...state,
                disableInput: action.payload.isActive
            }
        }
        case 'CHANGE-DISABLED': {
            return {
                ...state,
                disabled: action.payload.isActive
            }
        }
        case 'CHANGE-DATA-INPUT': {
            return {
                ...state,
                dataInput: {start: action.payload.start, max: action.payload.max}
            }
        }

        default:
            return state
    }
}

export const MaxValue = (max: number) => {
    return {
        type: 'MAX-VALUE',
        payload: {
            max
        }
    } as const
}

export const StartValue = (start: number) => {
    return {
        type: 'START-VALUE',
        payload: {
            start
        }
    } as const
}
export const changeDataInput = (start: number, max: number) => {
    return {
        type: 'CHANGE-DATA-INPUT',
        payload: {
            start,
            max
        }
    } as const
}
export const changeMaxStart = () => {
    return {
        type: 'SET-COUNTER-START',
    } as const
}
export const addVal = () => {
    return {
        type: 'ADD-VALUE'
    } as const
}
export const resetValue = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}
export const changeValue = (item: number) => {
    return {
        type: 'CHANGE-VALUE',
        payload: {
            item
        }
    } as const
}
export const changeDisabledInput = (isActive: boolean) => {
    return {
        type: 'CHANGE-DISABLED-INPUT',
        payload: {
            isActive
        }
    } as const
}
export const changeDisabled = (isActive: number) => {
    return {
        type: 'CHANGE-DISABLED',
        payload: {
            isActive
        }
    } as const
}