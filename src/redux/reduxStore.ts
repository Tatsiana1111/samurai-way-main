import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export const store: StoreType = createStore(reducers)