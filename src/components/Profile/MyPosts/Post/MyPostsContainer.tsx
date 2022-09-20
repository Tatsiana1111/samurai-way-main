import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, onChangePostActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import {Dialogs} from "../../../Dialogs/Dialogs";
import {RootStateType} from "../../../../redux/store";
import {addMessageActionCreator, onChangeMessageActionCreator} from "../../../../redux/dialogsReducer";
import Profile from "../../Profile";


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//                 const addPost = () => {
//                     return store.dispatch(addPostActionCreator())
//                 }
//                 const onChangePostHandler = (text: string) => {
//                     return store.dispatch(onChangePostActionCreator(text))
//                 }
//                 return <MyPosts posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}
//                                 addPost={addPost}
//                                 onChangePostHandler={onChangePostHandler}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
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