import {combineReducers, createStore} from "redux";

import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

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
    newMessageText: string
}

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStoreType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

// @ts-ignore
window.store = store

