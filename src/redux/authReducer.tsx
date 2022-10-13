import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


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
                ...action.data,
                isAuth: true
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
                    dispatch(setAuthUserData(email, login, id))
                }
            })
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (email: string, login: string, id: string) => {
    return {type: SET_USER_DATA, data: {email, login, id}} as const
}

