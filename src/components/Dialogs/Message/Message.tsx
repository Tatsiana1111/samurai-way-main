import React from 'react';
import style from './../Dialogs.module.css'


export type MessageType = {
    message: string
    id: number
}
export const Message = (props: MessageType) => {
    return (<div className={style.message}>{props.message}</div>)
}

