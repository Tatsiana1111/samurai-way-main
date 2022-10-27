import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UsersActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setPagesACType
    | setTotalUsersCountACType
    | setIsFetchingACType
    | setIsFollowingProgressACType

export type UserIDType = {
    userID: number
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(
                data.items
            ))
            dispatch(setTotalUsersCount(
                data.totalCount
            ))
        })
    }
}
export const followUser = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true, userID))
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID))
                }
                dispatch(setIsFollowingProgress(false, userID))
            })
    }
}
export const unfollowUser = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(true, userID))
        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userID))
                }
                dispatch(setIsFollowingProgress(false, userID))
            })
    }
}

type followACType = ReturnType<typeof follow>
export const follow = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {type: SET_USERS, users} as const
}
type setPagesACType = ReturnType<typeof setPages>
export const setPages = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
type setIsFetchingACType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
type setIsFollowingProgressACType = ReturnType<typeof setIsFollowingProgress>
export const setIsFollowingProgress = (isFetching: boolean, userID: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID} as const
}