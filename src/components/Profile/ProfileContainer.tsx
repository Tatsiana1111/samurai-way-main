import React from "react";
import Profile from "./Profile";
import {AppStoreType} from "../../redux/reduxStore";
import {
    addPost,
    InitialStateType,
    onChangePost, setUserProfile,
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import axios from "axios";

// type ProfileContainerPropsType = {
//     newPostText: string
//     onChangePostHandler: (text: string) => void
//     addPost: () => void
// }

export class ProfileContainerComponent extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(
                response.data
            )
        })
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                onChangePostHandler={this.props.onChangePostHandler}
                addPost={this.props.addPost}/>
        );
    }
}

type MapStateToPropsType = InitialStateType
let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}


export const ProfileContainer = connect(mapStateToProps, {
    onChangePost,
    addPost,
    setUserProfile
})(ProfileContainerComponent)