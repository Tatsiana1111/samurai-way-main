import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    statePost: ProfilePageType
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={style.postsBlock}><h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {props.statePost.posts.map(post => <Post message={post.message} likeCount={post.likeCount}
                                                         id={post.id}/>)}
            </div>
        </div>
    );
};

export default MyPosts;