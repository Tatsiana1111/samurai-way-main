import React from 'react';
import style from './MyPosts.module.css'
import Post, {PostsType} from "./Post/Post";

const MyPosts = (props: PostsType) => {

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
                {props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}
                                               id={post.id}/>)}
            </div>
        </div>
    );
};

export default MyPosts;