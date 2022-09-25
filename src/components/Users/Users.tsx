import React, {MouseEventHandler} from 'react';
import style from './users.module.css'
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";
import axios from "axios";
import userIcon from '../../assets/images/userIcon.png'


type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class Users extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(
                response.data.items
            )
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page ? style.selected : ''}
                                     onClick={() => this.onPageChanged(page)}>{page}</span>
                    })}
                </div>
                {this.props.users.map(user => {
                    return <div className={style.div} key={user.id}>
                        <div className={style.divPhoto}>
                            <div><img src={user.photos.small !== null ? user.photos.small : userIcon}
                                      className={style.avatar}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>UNFOLLOW</button>
                                    : <button onClick={() => {
                                        this.props.follow(user.id)
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
        ;
    }
}
