import {addMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/reduxStore";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)