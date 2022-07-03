import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    // @ts-ignore
    return (
        <div className={style.postsBlock}><h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='This is my first post!1!!1!' likeCount='14'/>
                <Post message='Hello, welcome to Social Network' likeCount='28'/>
                <Post message='TypeScript is very difficult' likeCount='37'/>
            </div>
        </div>
    );
};

export default MyPosts;