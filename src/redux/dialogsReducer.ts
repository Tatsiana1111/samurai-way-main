export type MessageType = {
    message: string
    id: number
}
export type DialogsItemType = {
    name: string
    id: number
}

const ADD_MESSAGE = 'ADD-MESSAGE'


type ActionType = addMessageActionCreatorType
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
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessageType = {
                message: action.newMessageText,
                id: 5
            }

            return {...state, messages: [...state.messages, newMessage]}
        }

    }
    return state
}
type addMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
export const addMessageActionCreator = (newMessageText: string) => {
    return {type: ADD_MESSAGE, newMessageText: newMessageText} as const
}
