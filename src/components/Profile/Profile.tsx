import React, {ChangeEvent} from 'react';
import style from './Profile.module.css'
import Post from "./Post";
import {store} from "../../redux/reduxStore";
import {ProfileInfo} from "./ProfileInfo";


type MyPostsPropsType = {
    onChangePost: (text: string) => void
    addPost: () => void
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: MyPostsPropsType) => {
    let state = store.getState()

    const addPost = () => {
        props.addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePost(e.currentTarget.value)
    }

    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.postsBlock}><h3>My posts</h3>
                <div>
                    <div><textarea
                        onChange={onChangePostHandler}
                        value={state.profilePage.newPostText}
                    />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {state.profilePage.posts.map(post => <Post {...props} key={post.id} message={post.message}
                                                               likeCount={post.likeCount}
                                                               id={post.id}/>)}
                </div>
            </div>
        </>

    );
};

export default Profile;