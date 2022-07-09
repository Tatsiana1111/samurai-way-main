import React from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";


let dialogs = [
    {name: 'Tanya', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Vika', id: 3},
    {name: 'Dima', id: 4},
    {name: 'Alena', id: 5},
    {name: 'Nick', id: 5},
]
let messages = [
    {message: 'Hello', id: 1},
    {message: 'Where are you now??', id: 2},
    {message: 'Good of you, baby))', id: 3},
    {message: 'What the bloody hell is this???', id: 4},
    {message: 'Okay, thanks', id: 5},
    {message: 'Very well!', id: 5},
]


export const Dialogs = () => {
    let dialogsElement = dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = messages.map(message => <Message message={message.message} id={message.id}/>)
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
