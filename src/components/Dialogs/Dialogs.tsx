import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/state";
import MessageItem from "./MessageItem/MessageItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    stateDialogs: DialogsPageType
    dispatch: any
}
export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.stateDialogs.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.stateDialogs.messages.map(message => <Message message={message.message}
                                                                              id={message.id}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div>{messagesElement}</div>
            <div>
                <MessageItem dispatch={props.dispatch} newMessageText={props.stateDialogs.newMessageText}
                             stateMessage={props.stateDialogs}/>
            </div>
        </div>
    );
};
