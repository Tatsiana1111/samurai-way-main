import React from 'react';
import style from "./users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


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
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // const offset = props.pageSize * (props.currentPage - 1);
    // const slicePages = pages.slice(offset, props.pageSize + props.currentPage);
    // const slicePages = pages.slice((props.currentPage - 1) * props.pageSize, props.currentPage * props.pageSize)

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? style.selected : ''}
                                 onClick={() => props.onPageChanged(page)}>{page}</span>
                })}
            </div>
            {props.users.map(user => {
                return <div className={style.div} key={user.id}>
                    <div className={style.divPhoto}>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='avatar' src={user.photos.small !== null ? user.photos.small : userIcon}
                                 className={style.avatar}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                                        onClick={() => {
                                            props.unfollowUser(user.id)
                                        }}>UNFOLLOW</button>
                                :
                                <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                                        onClick={() => {
                                            props.followUser(user.id)
                                        }}>FOLLOW</button>}
                        </div>
                    </div>
                    <div className={style.divStatus}>
                        <div>
                            <div className={style.userName}>{user.name}</div>
                            <div className={style.userStatus}>{user.status}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

