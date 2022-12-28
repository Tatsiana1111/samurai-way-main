import React from 'react';
import style from './Profile.module.css'
import Post from "./Post";
import {store} from "../../redux/reduxStore";
import {ProfileInfo} from "./ProfileInfo";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {IMainUser} from "../../redux/profileReducer";
import {maxLengthCreator, minLength2, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

interface IPost {
    post: string
}

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
}

const Profile = (props: MyPostsPropsType) => {
    let state = store.getState()

    const addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <div className={style.postsBlock}><h3>My posts</h3>
                <div>
                    <AddPostFormRedux onSubmit={addNewPost}/>
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
const maxLength30 = maxLengthCreator(30)
const AddPostForm: React.FC<InjectedFormProps<IPost>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <Field component={Textarea} name={'newPostText'}
                   placeholder={'Enter your post...'} validate={[required, maxLength30, minLength2]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}
const AddPostFormRedux = reduxForm<IPost>({
    form: 'profileAddPostForm'
})(AddPostForm)

export default Profile;