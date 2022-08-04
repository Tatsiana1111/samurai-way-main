import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    statePost: ProfilePageType
    dispatch: any
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST'})
        }
    }
    const onChangePostHandler = () => {
        if (newPostElement.current) {
            let newText = newPostElement.current?.value
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText})
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={style.postsBlock}><h3>My posts</h3>
            <div>
                <div><textarea
                    onChange={onChangePostHandler}
                    ref={newPostElement}
                    value={props.statePost.newPostText}
                />
                </div>
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