import React from 'react';
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div><img src="https://html5css.ru/howto/img_snow.jpg"/></div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;