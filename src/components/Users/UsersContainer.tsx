import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import loader from '../../assets/images/loader.svg'

import {
    followAC,
    InitialStateType, setIsFetchingAC,
    setPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";

export type MapStatePropsType = InitialStateType
export type MapDispatchPropsType = {
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
                {this.props.isFetching ? <img src={loader} alt="loading"/> : null}
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
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setPages: (currentPages: number) => {
            dispatch(setPagesAC(currentPages))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);