export type MessageType = {
    message: string
    id: number
}
export type DialogsItemType = {
    name: string
    id: number
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

type ActionType = addMessageActionCreatorType | onChangeMessageActionCreatorType
type InitialStateType = typeof initialState

const initialState = {
    dialogs: [
        {name: 'Tanya', id: 1},
        {name: 'Alex', id: 2},
        {name: 'Vika', id: 3},
        {name: 'Dima', id: 4},
        {name: 'Alena', id: 5},
        {name: 'Nick', id: 5},
    ] as Array<DialogsItemType>,
    messages: [
        {message: 'Hello', id: 1},
        {message: 'Where are you now??', id: 2},
        {message: 'Good of you, baby))', id: 3},
        {message: 'What the bloody hell is this???', id: 4},
        {message: 'Okay, thanks', id: 5},
        {message: 'Very well!', id: 5},
    ] as Array<MessageType>,
    newMessageText: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessageType = {
                message: state.newMessageText,
                id: 5
            }
            // let stateCopy = {...state}
            // stateCopy.messages = [...state.messages]
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageText = ''
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case UPDATE_MESSAGE_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newMessageText = action.messageText
            return {...state, newMessageText: action.messageText}
        }
    }
    return state
}
type addMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}
type onChangeMessageActionCreatorType = ReturnType<typeof onChangeMessageActionCreator>
export const onChangeMessageActionCreator = (messageText: string) => {
    return {type: UPDATE_MESSAGE_TEXT, messageText: messageText} as const
}