import {Dispatch} from "redux";
import {getAuth} from "./authReducer";

type InitialStateType = {
    initialized: boolean
}
type AppActionType = setInitializedType
type setInitializedType = ReturnType<typeof setInitialized>

const SET_INITIALIZED = 'SET_INITIALIZED'
const initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializeApp = () => {
    return (dispatch: Dispatch) => {
        // @ts-ignore
        let promise = dispatch(getAuth())
        promise.then(() => {
            dispatch(setInitialized())
        })


    }
}

export const setInitialized = () => {
    return {type: SET_INITIALIZED} as const
}

export default appReducer

function dispatch(arg0: (dispatch: Dispatch<import("redux").AnyAction>) => Promise<void>): Promise<any> {
    throw new Error("Function not implemented.");
}
