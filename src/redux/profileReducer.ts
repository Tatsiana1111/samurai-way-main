import {PostType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


const initialState = {
    posts: [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ],
    profile: null as IMainUser | null,
    status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST': {
            const newPost: PostType = {
                message: action.newPostText,
                likeCount: 0,
                id: 5
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/DELETE_POST': {
            return {...state, posts: [...state.posts.filter(p => p.id !== action.id)]}
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
    }
    return state
}

//thunks
export const getProfile = (userId: string) => {
    return async (dispatch: Dispatch) => {
        const res = await profileAPI.getProfile(userId)

        dispatch(setUserProfile(res))
    }
}
export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch) => {
        const res = await profileAPI.getStatus(userId)

        dispatch(setStatus(res))
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        const res = await profileAPI.updateStatus(status)

        if (res.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const savePhoto = (photos: any) => {
    return async (dispatch: Dispatch) => {
        const res = await profileAPI.savePhoto(photos)

        if (res.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.photos))
        }
    }
}


//actions
export const addPost = (newPostText: string) => {
    return {type: 'profile/ADD_POST', newPostText: newPostText} as const
}
export const deletePost = (id: number) => {
    return {type: 'profile/DELETE_POST', id} as const
}
export const setUserProfile = (profile: IMainUser) => {
    return {type: 'profile/SET_USER_PROFILE', profile} as const
}
export const setStatus = (status: string) => {
    return {type: 'profile/SET_STATUS', status} as const
}
export const savePhotoSuccess = (photos: any) => {
    return {type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const
}

//types
type ActionType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
export type InitialStateType = {
    posts: PostType[]
    profile: IMainUser | null
    status: string
}

export interface IMainUser {
    aboutMe?: string
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos?: {
        small: string
        large: string
    }
}