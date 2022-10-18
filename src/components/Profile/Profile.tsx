import React from 'react';
import style from './Profile.module.css'
import Post from "./Post";
import {store} from "../../redux/reduxStore";
import {ProfileInfo} from "./ProfileInfo";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

interface IPost {
    post: string
}

type MyPostsPropsType = {
    onChangePost: (text: string) => void
    addPost: (newPostText: string) => void
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: MyPostsPropsType) => {
    let state = store.getState()

    const addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.postsBlock}><h3>My posts</h3>
                <div>
                    <div>
                        <AddPostFormRedux onSubmit={addNewPost}/>
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
const AddPostForm: React.FC<InjectedFormProps<IPost>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <Field component={'textarea'} name={'newPostText'}
                   placeholder={'Enter your post...'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}
const AddPostFormRedux = reduxForm<IPost>({
    form: 'profileAddPostForm'
})(AddPostForm)

export default Profile;