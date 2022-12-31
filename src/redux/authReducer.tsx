import {Dispatch} from "redux";
import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const initialState = {
    email: null as string | null,
    login: null as string | null,
    id: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as null | string,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state, captchaURL: action.captchaURL
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
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => {
    return async (dispatch: Dispatch<any>) => {
        const res = await authAPI.login(email, password, rememberMe, captcha)

        if (res.data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
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
export const getCaptcha = () => {
    return async (dispatch: Dispatch) => {
        const res = await securityAPI.getCaptchaURL()
        const captchaUrl = res.data.url

        dispatch(getCaptchaURLSuccess(captchaUrl))
    }
}

//actions
export const setAuthUserData = (email: string | null, login: string | null, id: string | null, isAuth: boolean) => {
    return {type: 'auth/SET_USER_DATA', payload: {email, login, id, isAuth}} as const
}
export const getCaptchaURLSuccess = (captchaURL: null | string) => {
    return {type: 'auth/GET_CAPTCHA_URL_SUCCESS', captchaURL} as const
}

//types
export type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaURLSuccess>
export type InitialStateType = typeof initialState
