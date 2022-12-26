import {Dispatch} from "redux";
import {getAuth} from "./authReducer";


const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case 'app/SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}


//thunk
export const initializeApp = () => {
    return async (dispatch: Dispatch) => {
        // @ts-ignore
        let promise = await dispatch(getAuth())
        dispatch(setInitialized())
    }
}

//actions
export const setInitialized = () => {
    return {type: 'app/SET_INITIALIZED'} as const
}

//types
type InitialStateType = typeof initialState
type AppActionType = setInitializedType
type setInitializedType = ReturnType<typeof setInitialized>
