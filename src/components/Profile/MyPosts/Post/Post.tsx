import React from 'react';
import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"/>
            Post1
            <div><span>LIKE</span></div>
        </div>
    );
};

export default Post;