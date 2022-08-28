import React from 'react';
import MyPosts from "../MyPosts";
import {StoreType} from "../../../../redux/store";
import {addPostActionCreator, onChangePostActionCreator} from "../../../../redux/profileReducer";

type MyPostsContainerPropsType = {
    store: StoreType
    // statePost: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()
    const addPost = () => {
        return props.store.dispatch(addPostActionCreator())
    }
    const onChangePostHandler = (text: string) => {
        return props.store.dispatch(onChangePostActionCreator(text))
    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost}
                 onChangePostHandler={onChangePostHandler}/>);

}


export default MyPostsContainer;