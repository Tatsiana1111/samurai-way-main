import React from 'react';
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import userIcon from "../../../assets/images/userIcon.png";
import {UserType} from "../../../redux/usersReducer";

type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollowUser: (userID: number) => void
    followUser: (userID: number) => void
}
export const User = (props: UsersPropsType) => {
    return (
        <div className={style.div} key={props.user.id}>
            <div className={style.divPhoto}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img alt='avatar' src={props.user.photos.small !== null ? props.user.photos.small : userIcon}
                         className={style.avatar}/>
                </NavLink>
                <div>
                    {props.user.followed
                        ?
                        <button disabled={props.followingInProgress.some((id: number) => id === props.user.id)}
                                onClick={() => {
                                    props.unfollowUser(props.user.id)
                                }}>UNFOLLOW</button>
                        :
                        <button disabled={props.followingInProgress.some((id: number) => id === props.user.id)}
                                onClick={() => {
                                    props.followUser(props.user.id)
                                }}>FOLLOW</button>}
                </div>
            </div>
            <div className={style.divStatus}>
                <div>
                    <div className={style.userName}>{props.user.name}</div>
                    <div className={style.userStatus}>{props.user.status}</div>
                </div>
            </div>
        </div>
    );
};

