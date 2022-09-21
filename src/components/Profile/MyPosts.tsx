import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post";
import {
    PostType
} from "../../redux/store";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    onChangePostHandler: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePostHandler(e.currentTarget.value)
    }

    return (
        <>
            <div>
                <div><img src="https://html5css.ru/howto/img_snow.jpg"/></div>
                <div className={style.descriptionBlock}>ava + description</div>
            </div>
            <div className={style.postsBlock}><h3>My posts</h3>
                <div>
                    <div><textarea
                        onChange={onChangePostHandler}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}
                                                   id={post.id}/>)}
                </div>
            </div>
        </>

    );
};

export default MyPosts;