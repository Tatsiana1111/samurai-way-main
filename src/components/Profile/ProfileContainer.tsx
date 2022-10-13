import React from "react";
import Profile from "./Profile";
import {AppStoreType} from "../../redux/reduxStore";
import {
    addPost, getProfile,
    InitialStateType,
    onChangePost,
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";


export class ProfileContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25313'
        }
        this.props.getProfile(userId)

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
    getProfile: (userId: string) => void
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
    getProfile
})(withRouterProfileComponent)