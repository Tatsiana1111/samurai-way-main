import React from 'react';
import loader from "../../../assets/images/loader.svg";


export const Preloader = () => {
    return (
        <div>
            <img src={loader} alt="preloader" style={{height: '500px', width: '500px'}}/>
        </div>
    );
};
