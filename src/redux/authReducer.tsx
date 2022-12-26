import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const initialState = {
    email: null as string | null,
    login: null as string | null,
    id: null as string | null,
    isAuth: false as boolean
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

//thunks
export const getAuth = () => {
    return async (dispatch: Dispatch) => {
        const res = await usersAPI.getAuth()

        if (res.resultCode === 0) {
            let {email, login, id} = res.data
            dispatch(setAuthUserData(email, login, id, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch) => {
        const res = await authAPI.login(email, password, rememberMe)

        if (res.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuth())
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Incorrect value'
            dispatch(stopSubmit('login', {_error: message}))
        }

    }
}
export const logOut = () => {
    return async (dispatch: Dispatch) => {
        const res = await authAPI.logOut()

        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

//actions
export const setAuthUserData = (email: string | null, login: string | null, id: string | null, isAuth: boolean) => {
    return {type: 'auth/SET_USER_DATA', payload: {email, login, id, isAuth}} as const
}

//types
export type AuthActionType = ReturnType<typeof setAuthUserData>
export type InitialStateType = typeof initialState
