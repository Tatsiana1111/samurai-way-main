import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";

import {Message} from "./Message/Message";
// import {DialogsContainer} from "./MessageItem/DialogsContainer";
import {store} from "../../redux/reduxStore";
import {DialogsContainer} from "./MessageItem/DialogsContainer";


export const Dialogs = () => {
    let state = store.getState()
    let dialogsElement = state.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = state.dialogsPage.messages.map(message => <Message message={message.message}
                                                                             id={message.id}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div>{messagesElement}</div>
            <div>
                <DialogsContainer/>
                {/*<MessageItem dispatch={props.dispatch} newMessageText={props.stateDialogs.newMessageText}*/}
                {/*             stateMessage={props.stateDialogs}/>*/}
            </div>
        </div>
    );
};
