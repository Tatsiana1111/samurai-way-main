import {PostType} from "./reduxStore";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
type ActionType = onChangePostActionCreatorType | addPostActionCreatorType | setUserProfileType

export type InitialStateType = {
    posts: PostType[]
    newPostText: string
    profile: IMainUser | null
    isAuth: boolean
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

const initialState: InitialStateType = {
    posts: [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ],
    newPostText: 'SAMURAI',
    profile: null,
    isAuth: false,
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                message: state.newPostText,
                likeCount: 0,
                id: 5
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
    }
    return state
}

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

type onChangePostActionCreatorType = ReturnType<typeof onChangePost>
export const onChangePost = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}
type addPostActionCreatorType = ReturnType<typeof addPost>
export const addPost = () => {
    return {type: ADD_POST} as const
}
type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: IMainUser) => {
    return {type: SET_USER_PROFILE, profile} as const
}