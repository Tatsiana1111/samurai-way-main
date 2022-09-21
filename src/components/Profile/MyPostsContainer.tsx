import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/reduxStore";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangePostHandler: (text: string) => {
            dispatch(onChangePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)