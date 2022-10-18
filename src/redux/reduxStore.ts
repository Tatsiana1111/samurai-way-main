import {applyMiddleware, combineReducers, createStore} from "redux";

import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type RootStateType = ReturnType<typeof rootReducers>
export type PostType = {
    message: string
    likeCount: number
    id: number
}
type MessageType = {
    message: string
    id: number
}
type DialogsItemType = {
    name: string
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppStoreType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

