import React from 'react';
import style from "./users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}
export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
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
                            <img src={user.photos.small !== null ? user.photos.small : userIcon}
                                 className={style.avatar}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '0416d0e4-e507-4140-8ae2-fbcfceb7fe23'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true, headers: {
                                            'API-KEY': '0416d0e4-e507-4140-8ae2-fbcfceb7fe23'
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                                }}>FOLLOW</button>}

                        </div>
                    </div>
                    <div className={style.divStatus}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

