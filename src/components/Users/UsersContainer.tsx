import React from 'react';
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Users} from './Users';
import {
    followAC,
    InitialStateType,
    setPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";

export type MapStatePropsType = InitialStateType
export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPages: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
const mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);