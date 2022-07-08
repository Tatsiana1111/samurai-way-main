import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
    id: number
}
export const Dialogs = () => {
    let dialogsData = [
        {name: 'Tanya', id: 1},
        {name: 'Alex', id: 2},
        {name: 'Vika', id: 3},
        {name: 'Dima', id: 4},
        {name: 'Alena', id: 5},
        {name: 'Nick', id: 5},
    ]
    let messagesData = [
        {message: 'Hello', id: 1},
        {message: 'Where are you now??', id: 2},
        {message: 'Good of you, baby))', id: 3},
        {message: 'What the bloody hell is this???', id: 4},
        {message: 'Okay, thanks', id: 5},
        {message: 'Very well!', id: 5},
    ]
    const DialogsItem = (props: DialogsItemType) => {
        let dialogPath = '/dialogs/' + props.id
        return (
            <div className={style.dialog + ' ' + style.active}><NavLink
                to={dialogPath}>{props.name}</NavLink>
            </div>)
    }
    const Message = (props: MessageType) => {
        return (<div className={style.message}>{props.message}</div>)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
                <Message message={messagesData[5].message} id={messagesData[5].id}/>
            </div>
        </div>
    );
};
