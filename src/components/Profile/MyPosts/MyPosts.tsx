import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
        {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
        {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
    ]
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
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount} id={postsData[0].id}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount} id={postsData[1].id}/>
                <Post message={postsData[2].message} likeCount={postsData[2].likeCount} id={postsData[2].id}/>
            </div>
        </div>
    );
};

export default MyPosts;