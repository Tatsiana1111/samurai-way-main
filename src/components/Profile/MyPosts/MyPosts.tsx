import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

let posts = [
    {message: 'This is my first post!1!!1!', likeCount: 14, id: 1},
    {message: 'Hello, welcome to Social Network', likeCount: 28, id: 2},
    {message: 'TypeScript is very difficult', likeCount: 4, id: 3},
]
const MyPosts = () => {
    // @ts-ignore
    let postsElement = posts.map(post => <Post message={post.message} likeCount={post.likeCount} id={post.id}/>)
    return (
        <div className={style.postsBlock}><h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;