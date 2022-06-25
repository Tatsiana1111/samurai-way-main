import React from 'react';
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/The_IMG_Media_broadcasting_company_logo.png"/>
        </header>
    );
};

export default Header;