import {PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
type ActionType = onChangePostActionCreatorType | addPostActionCreatorType

const initialState = {
    posts: [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ],
    newPostText: 'SAMURAI',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                message: state.newPostText,
                likeCount: 0,
                id: 5
            }
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            // // state.posts.push(newPost)
            // stateCopy.newPostText = ''
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            return {...state, newPostText: action.newText}
        }
    }
    return state
}
type onChangePostActionCreatorType = ReturnType<typeof onChangePostActionCreator>
export const onChangePostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}
type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}