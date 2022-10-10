import React from "react";
import Profile from "./Profile";
import {AppStoreType} from "../../redux/reduxStore";
import {
    addPost, IMainUser,
    InitialStateType,
    onChangePost, setUserProfile,
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";

// type ProfileContainerPropsType = {
//     newPostText: string
//     onChangePostHandler: (text: string) => void
//     addPost: () => void
// }

export class ProfileContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25313'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
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
                onChangePostHandler={this.props.onChangePost}
                addPost={this.props.addPost}
            />
        );
    }
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps<PathParamType>
type PathParamType = {
    userId: string
}
type MapDispatchToPropsType = {
    onChangePost: (newText: string) => void
    addPost: () => void
    setUserProfile: (profile: IMainUser) => void
}
type MapStateToPropsType = InitialStateType
let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const withRouterProfileComponent = withRouter(ProfileContainerComponent)
export const ProfileContainer = connect(mapStateToProps, {
    onChangePost,
    addPost,
    setUserProfile
})(withRouterProfileComponent)