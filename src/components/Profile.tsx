import React from 'react';
import style from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={style.profile}>
            <div><img src="https://html5css.ru/howto/img_snow.jpg"/></div>
            <div>ava + description</div>
            <div>My posts
                <div>New Post</div>
                <div>
                    <div className={style.item}>Post1</div>
                    <div className={style.item}>Post2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;