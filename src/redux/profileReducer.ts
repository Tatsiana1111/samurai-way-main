import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ],
    newPostText: 'SAMURAI',
}

export const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                message: state.newPostText,
                likeCount: 0,
                id: 5
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}

export const onChangePostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}