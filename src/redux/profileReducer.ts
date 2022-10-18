import {PostType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

type ActionType = addPostActionCreatorType | setUserProfileType | setUserStatusType

export type InitialStateType = {
    posts: PostType[]
    profile: IMainUser | null
    status: string
}

export interface IMainUser {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    posts: [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                message: action.newPostText,
                likeCount: 0,
                id: 5
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
    }
    return state
}

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


type addPostActionCreatorType = ReturnType<typeof addPost>
export const addPost = (newPostText: string) => {
    return {type: ADD_POST, newPostText: newPostText} as const
}
type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: IMainUser) => {
    return {type: SET_USER_PROFILE, profile} as const
}
type setUserStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status} as const
}