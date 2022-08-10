import {ActionsTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: any) => {
    if (action.type === ADD_POST) {
        const newPost: PostType = {
            message: state.newPostText,
            likeCount: 0,
            id: 5
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        console.log('action', action)
        state.newPostText = action.newText
    }
    return state
}

export const onChangePostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}