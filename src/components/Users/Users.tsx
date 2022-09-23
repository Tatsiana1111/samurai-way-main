import React from 'react';
import style from './users.module.css'
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";
import axios from "axios";
import userIcon from '../../assets/images/userIcon.png'

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class Users extends React.Component<UsersPropsType, UsersPropsType> {
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(
                response.data.items
            )
        })
    }

    render() {
        return (
            <div>
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
