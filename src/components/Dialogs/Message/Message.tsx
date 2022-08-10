import React from 'react';
import style from './../Dialogs.module.css'
import {MessageType} from "../../../redux/store";


export const Message = (props: MessageType) => {
    return (<div className={style.message}>{props.message}</div>)
}

