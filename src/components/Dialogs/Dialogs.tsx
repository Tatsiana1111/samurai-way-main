import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}><NavLink to='/dialogs/1'>Tanya</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/2'>Alex</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/3'>Vika</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/4'>Dima</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/5'>Alena</NavLink></div>
                <div className={style.dialog}><NavLink to='/dialogs/6'>Nick</NavLink></div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>Where are you now??</div>
                <div className={style.message}>Good of you, baby))</div>
                <div className={style.message}>What the bloody hell is this???</div>
                <div className={style.message}>I'm okay, thanks</div>
                <div className={style.message}>Very well!</div>
            </div>
        </div>
    );
};
