import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    statePosts: ProfilePageType
    dispatch: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts statePost={props.statePosts}
                     newPostText={props.statePosts.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;