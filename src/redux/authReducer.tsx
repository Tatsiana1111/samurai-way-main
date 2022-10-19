import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA'


export type AuthActionType =
    setAuthUserDataType

export type InitialStateType = {
    email: string | null
    login: string | null
    id: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    email: null,
    login: null,
    id: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const getAuth = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, login, id} = data.data
                    dispatch(setAuthUserData(email, login, id, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuth())
                } else {
                    const message = data.data.messages.length > 0 ? data.data.messages[0] : 'Incorrect value'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logOut = () => {
    return (dispatch: Dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (email: string | null, login: string | null, id: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {email, login, id, isAuth}} as const
}

