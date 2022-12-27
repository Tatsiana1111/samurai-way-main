import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";

import {
    followUser, requestUsers,
    InitialStateType,
    setPages, unfollowUser,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


type MapStatePropsType = InitialStateType
type MapDispatchPropsType = {
    setPages: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}
type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPages(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        onPageChanged={this.onPageChanged}
                        {...this.props}
                    />}
            </>);
        ;
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setPages,
        requestUsers,
        unfollowUser,
        followUser,
    }),
    withAuthRedirect
)(UsersContainer)
