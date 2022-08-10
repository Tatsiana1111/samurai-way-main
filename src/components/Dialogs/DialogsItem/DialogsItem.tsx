import React from 'react';
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItemType} from "../../../redux/store";


export const DialogsItem = (props: DialogsItemType) => {
    let dialogPath = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}><NavLink
            to={dialogPath}>{props.name}</NavLink>
        </div>)
}
