import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    ProfilePageType, store
} from "../../redux/store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

type ProfilePropsType = {
    statePosts: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer statePost={props.statePosts} dispatch={props.dispatch}/>
            {/*<MyPosts statePost={props.statePosts}*/}
            {/*         newPostText={props.statePosts.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    );
};

export default Profile;