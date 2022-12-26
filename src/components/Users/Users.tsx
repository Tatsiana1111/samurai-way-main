import React from 'react';
import {UserType} from "../../redux/usersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User/User";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingInProgress: Array<number>
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}
export const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                        currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {props.users.map(user => {
                return <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                             unfollowUser={props.unfollowUser} followUser={props.followUser}/>
            })}
        </div>
    );
};

