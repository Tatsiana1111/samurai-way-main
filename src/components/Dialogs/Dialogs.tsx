import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}
export const Dialogs = () => {
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
                <DialogsItem name='Tanya' id={1}/>
                <DialogsItem name='Alex' id={2}/>
                <DialogsItem name='Vika' id={3}/>
                <DialogsItem name='Dima' id={4}/>
                <DialogsItem name='Alena' id={5}/>
                <DialogsItem name='Nick' id={6}/>
            </div>
            <div className={style.messages}>
                <Message message='Hello'/>
                <Message message='Where are you now??'/>
                <Message message='Good of you, baby))'/>
                <Message message='What the bloody hell is this???'/>
                <Message message='Okay, thanks'/>
                <Message message='Very well!'/>
            </div>
        </div>
    );
};
