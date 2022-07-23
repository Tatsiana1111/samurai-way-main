import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type PropfilePropsType = {
    statePosts: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = (props: PropfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts statePost={props.statePosts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;