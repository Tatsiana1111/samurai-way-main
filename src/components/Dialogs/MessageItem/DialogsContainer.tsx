import React from 'react';
import {addMessageActionCreator, onChangeMessageActionCreator} from "../../../redux/dialogsReducer";
import MessageItem from "./MessageItem";
import {connect} from "react-redux";
import {Dialogs} from "../Dialogs";
import {RootStateType} from "../../../redux/store";

// type DialogsPropsType = {
//     store: StoreType
//     // stateDialogs: DialogsPageType
//     // dispatch: (action: ActionsTypes) => void
// }
// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store: StoreType) => {
//                 let state = store.getState()
//                 const onChangeMessageHandler = (messageText: string) => {
//                     store.dispatch(onChangeMessageActionCreator(messageText))
//                 }
//                 const addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//                 return <MessageItem dialogsPage={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText}
//                                     addMessage={addMessage} onChangeMessageHandler={onChangeMessageHandler}/>
//             }}
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeMessageHandler: (messageText: string) => {
            dispatch(onChangeMessageActionCreator(messageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem)