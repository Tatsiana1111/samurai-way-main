import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";


const initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case 'users/SET_USERS':
            return {...state, users: action.users}
        case 'users/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'users/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'users/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.userID)
            }
        default:
            return state
    }
}

//thunks
export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        const res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(res.items))
        dispatch(setTotalUsersCount(res.totalCount))
    }

}
export const followUser = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true, userID))
        const res = await usersAPI.follow(userID)

        if (res.resultCode === 0) {
            dispatch(follow(userID))
        }
        dispatch(setIsFollowingProgress(false, userID))
    }
}
export const unfollowUser = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true, userID))
        const res = await usersAPI.unfollow(userID)

        if (res.resultCode === 0) {
            dispatch(unfollow(userID))
        }
        dispatch(setIsFollowingProgress(false, userID))
    }
}

//actions
export const follow = (userID: number) => {
    return {type: 'users/FOLLOW', userID} as const
}
export const unfollow = (userID: number) => {
    return {type: 'users/UNFOLLOW', userID} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'users/SET_USERS', users} as const
}
export const setPages = (currentPage: number) => {
    return {type: 'users/SET_CURRENT_PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: 'users/SET_TOTAL_USERS_COUNT', totalUsersCount} as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {type: 'users/TOGGLE_IS_FETCHING', isFetching} as const
}
export const setIsFollowingProgress = (isFetching: boolean, userID: number) => {
    return {type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userID} as const
}


//types
export type UsersActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setPages>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setIsFollowingProgress>
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
export type InitialStateType = typeof initialState