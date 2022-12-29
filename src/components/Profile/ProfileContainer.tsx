import React from "react";
import Profile from "./Profile";
import {AppStoreType} from "../../redux/reduxStore";
import {
    addPost, getProfile, getStatus,
    InitialStateType, savePhoto, saveProfile, updateStatus,
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId as string
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                {...this.props}
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
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photos: any) => void
    saveProfile: (data: any) => void
}
type MapStateToPropsType = InitialStateType & { authorisedUserId: string | null, isAuth: boolean }
let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost,
        getProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

