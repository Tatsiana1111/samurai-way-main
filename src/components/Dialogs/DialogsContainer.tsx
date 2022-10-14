import {addMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeMessageHandler: (messageText: string) => {
            dispatch(onChangeMessageActionCreator(messageText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
    , withAuthRedirect
)(Dialogs)

