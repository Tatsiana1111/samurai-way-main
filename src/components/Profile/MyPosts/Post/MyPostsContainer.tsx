import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, onChangePostActionCreator} from "../../../../redux/profileReducer";
import {StoreContext} from '../../../../StoreContext';


const MyPostsContainer = () => {
    // let state = props.store.getState()

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    return store.dispatch(addPostActionCreator())
                }
                const onChangePostHandler = (text: string) => {
                    return store.dispatch(onChangePostActionCreator(text))
                }
                return <MyPosts posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                addPost={addPost}
                                onChangePostHandler={onChangePostHandler}/>
            }}
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;