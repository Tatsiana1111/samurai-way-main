import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type PropfilePropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const Profile = (props: PropfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;