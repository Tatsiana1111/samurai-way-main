import {DialogsPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
    dialogs: [
        {name: 'Tanya', id: 1},
        {name: 'Alex', id: 2},
        {name: 'Vika', id: 3},
        {name: 'Dima', id: 4},
        {name: 'Alena', id: 5},
        {name: 'Nick', id: 5},
    ],
    messages: [
        {message: 'Hello', id: 1},
        {message: 'Where are you now??', id: 2},
        {message: 'Good of you, baby))', id: 3},
        {message: 'What the bloody hell is this???', id: 4},
        {message: 'Okay, thanks', id: 5},
        {message: 'Very well!', id: 5},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                message: state.newMessageText,
                id: 5
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            break;
    }
    return state
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const onChangeMessageActionCreator = (messageText: string) => {
    return {type: UPDATE_MESSAGE_TEXT, messageText: messageText} as const
}