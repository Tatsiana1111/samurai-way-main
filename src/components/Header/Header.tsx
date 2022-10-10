import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            <img alt='logo'
                 src="https://upload.wikimedia.org/wikipedia/commons/1/1f/The_IMG_Media_broadcasting_company_logo.png"/>
            <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
};
