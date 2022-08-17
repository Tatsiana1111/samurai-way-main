import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    ProfilePageType, store, StoreType
} from "../../redux/store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
    statePosts: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} statePost={props.statePosts} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;