import React from 'react';
import {addMessageActionCreator, onChangeMessageActionCreator} from "../../../redux/dialogsReducer";
import {StoreContext} from '../../../StoreContext';
import MessageItem from "./MessageItem";

// type DialogsPropsType = {
//     store: StoreType
//     // stateDialogs: DialogsPageType
//     // dispatch: (action: ActionsTypes) => void
// }
export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const onChangeMessageHandler = (messageText: string) => {
                    store.dispatch(onChangeMessageActionCreator(messageText))
                }
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return <MessageItem dialogsPage={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText}
                                    addMessage={addMessage} onChangeMessageHandler={onChangeMessageHandler}/>
            }}
        </StoreContext.Consumer>
    )
};
