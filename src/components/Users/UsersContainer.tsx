import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";

import {
    follow,
    InitialStateType, setIsFetching,
    setPages,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStatePropsType = InitialStateType
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPages: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainerComponent extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(
                response.data.items
            )
            this.props.setTotalUsersCount(
                response.data.totalCount
            )

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPages(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(
                response.data.items
            )
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Users
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                />
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
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setPages: (currentPages: number) => {
//             dispatch(setPages(currentPages))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPages,
    setTotalUsersCount,
    setIsFetching,
})(UsersContainerComponent);