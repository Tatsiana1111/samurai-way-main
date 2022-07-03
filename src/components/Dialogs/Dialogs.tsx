import React from 'react';
import style from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>Tanya</div>
                <div className={style.dialog}>Alex</div>
                <div className={style.dialog}>Vika</div>
                <div className={style.dialog}>Dima</div>
                <div className={style.dialog}>Alena</div>
                <div className={style.dialog}>Nick</div>
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
