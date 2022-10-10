const SET_USER_DATA = 'SET_USER_DATA'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export type AuthActionType =
    setAuthUserDataType

export type InitialStateType = {
    email: string | null
    login: string | null
    id: string | null
}

const initialState: InitialStateType = {
    email: null,
    login: null,
    id: null,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (email: string, login: string, id: string) => {
    return {type: SET_USER_DATA, data: {email, login, id}} as const
}

