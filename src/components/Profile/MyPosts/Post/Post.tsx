import React from 'react';
import style from './Post.module.css'

export type PostType = {
    message: string
    likeCount: number
    id: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={style.item}>
            <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"/>
            {props.message}
            <div><span>LIKE: {props.likeCount}</span></div>
        </div>
    );
};

export default Post;