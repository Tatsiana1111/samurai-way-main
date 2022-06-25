import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message={'This is my first post!1!!1!'} likeCount={14}/>
                <Post message={'Hello, welcome to Social Network'} likeCount={28}/>
                <Post message={'TypeScript is very difficult'} likeCount={37}/>
            </div>
        </div>
    );
};

export default MyPosts;