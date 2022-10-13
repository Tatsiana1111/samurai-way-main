import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";

import {Message} from "./Message";
import {store} from "../../redux/reduxStore";
import {DialogsPageType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    addMessage: () => void
    onChangeMessageHandler: (messageText: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = store.getState()
    let dialogsElement = state.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id}
                                                                              id={dialog.id}/>)
    let messagesElement = state.dialogsPage.messages.map(message => <Message key={message.id} message={message.message}
                                                                             id={message.id}/>)
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageHandler(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage()
    }
    if (!props.isAuth) {
        return <Redirect to='./login'/>
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div>{messagesElement}</div>
            <div>
            <textarea placeholder='Enter your message' value={props.dialogsPage.newMessageText}
                      className={style.messageArea}
                      onChange={onChangeMessageHandler}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};
