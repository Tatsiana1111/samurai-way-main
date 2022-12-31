import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionType, dialogsReducer} from "./dialogsReducer";
import {UsersActionType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AppActionType, appReducer} from "./appReducer";


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
    app: appReducer
})

export type AppStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store

