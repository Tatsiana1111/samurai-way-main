import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import MessageItem from "./MessageItem/MessageItem";


export const Dialogs = (props: DialogsPageType) => {
    let dialogsElement = props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    // let messagesElement = props.messages.map(message => <Message message={message.message}
    //                                                              id={message.id}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
            </div>
        </div>
    );
};
