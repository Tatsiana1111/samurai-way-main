import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    statePosts: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts statePost={props.statePosts}
                     addPost={props.addPost}
                     newPostText={props.statePosts.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;