import React from 'react';
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://html5css.ru/howto/img_snow.jpg"/></div>
            <div className={style.descriptionBlock}>ava + description</div>
        </div>
    );
};
