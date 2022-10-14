import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";

import {
    followUser, getUsers,
    InitialStateType,
    setPages, unfollowUser,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = InitialStateType
type MapDispatchPropsType = {
    setPages: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}
type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainerComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPages(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        unfollowUser={this.props.unfollowUser}
                        followUser={this.props.followUser}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        followingInProgress={this.props.followingInProgress}
                    />}
            </>);
        ;
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
    setPages,
    getUsers,
    unfollowUser,
    followUser,
})(UsersContainerComponent));