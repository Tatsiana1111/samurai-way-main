import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItem, DialogsItemType} from "./DialogsItem/DialogsItem";
import {Message, MessageType} from "./Message/Message";

export type DialogsMessagesType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsMessagesType) => {
    let dialogsElement = props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.messages.map(message => <Message message={message.message} id={message.id}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
};
