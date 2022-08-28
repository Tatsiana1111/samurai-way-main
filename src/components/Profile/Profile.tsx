import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    StoreType
} from "../../redux/store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
    // statePosts: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;