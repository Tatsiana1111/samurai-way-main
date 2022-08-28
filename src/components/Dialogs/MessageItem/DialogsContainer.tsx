import React from 'react';
import {StoreType} from "../../../redux/store";
import MessageItem from "./MessageItem";
import {addMessageActionCreator, onChangeMessageActionCreator} from "../../../redux/dialogsReducer";

type DialogsPropsType = {
    store: StoreType
    // stateDialogs: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
}
export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()

    const onChangeMessageHandler = (messageText: string) => {
        props.store.dispatch(onChangeMessageActionCreator(messageText))
    }
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
        <MessageItem dialogsPage={state.dialogsPage} addMessage={addMessage}
                     onChangeMessageHandler={onChangeMessageHandler}/>
    );
};
