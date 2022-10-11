import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

interface Props {
    login: string | null
    isAuth: boolean
}

export const Header = (props: Props) => {
    return (
        <header className={style.header}>
            <img alt='logo'
                 src="https://upload.wikimedia.org/wikipedia/commons/1/1f/The_IMG_Media_broadcasting_company_logo.png"/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};
