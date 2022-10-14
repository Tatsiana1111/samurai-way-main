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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<PropsType> {
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
}
type MapStateToPropsType = InitialStateType
let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        onChangePost,
        addPost,
        getProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withRouterProfileComponent = withRouter(AuthRedirectComponent)
//  connect(mapStateToProps, {
//     onChangePost,
//     addPost,
//     getProfile
// })(withRouterProfileComponent)