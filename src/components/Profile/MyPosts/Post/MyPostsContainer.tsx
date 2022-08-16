import React from 'react';
import MyPosts from "../MyPosts";
import {
    ActionsTypes,
    ProfilePageType, StoreType
} from "../../../../redux/store";
import {addPostActionCreator, onChangePostActionCreator} from "../../../../redux/profileReducer";

type MyPostsContainerPropsType = {
    statePost: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const addPost = () => {
        return props.dispatch(addPostActionCreator())
    }
    const onChangePostHandler = (text: string) => {
        return props.dispatch(onChangePostActionCreator(text))
    }
    return (
        <MyPosts addPost={addPost} onChangePostHandler={onChangePostHandler} statePost={props.statePost}/>);

}


export default MyPostsContainer;