const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UsersActionType = followACType | unfollowACType | setUsersACType
type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    photos: PhotosType
    followed: boolean
    status: string
    // location: LocationType
}
export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}
type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {type: SET_USERS, users} as const
}