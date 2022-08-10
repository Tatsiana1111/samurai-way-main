import {DialogsPageType, MessageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const dialogsReducer = (state: DialogsPageType, action: any) => {
    if (action.type === ADD_MESSAGE) {
        const newMessage: MessageType = {
            message: state.newMessageText,
            id: 5
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        state.newMessageText = action.messageText
    }
    return state
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const onChangeMessageActionCreator = (messageText: string) => {
    return {type: UPDATE_MESSAGE_TEXT, messageText: messageText} as const
}