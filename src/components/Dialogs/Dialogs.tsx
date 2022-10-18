import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import {store} from "../../redux/reduxStore";
import {DialogsPageType} from "../../redux/reduxStore";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    addMessage: (newMessageText: string) => void
    dialogsPage: DialogsPageType
}

interface IMessageType {
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = store.getState()
    let dialogsElement = state.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id}
                                                                              id={dialog.id}/>)
    let messagesElement = state.dialogsPage.messages.map(message => <Message key={message.id} message={message.message}
                                                                             id={message.id}/>)
    const addNewMessage = (value: any) => {
        props.addMessage(value.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div>{messagesElement}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};
const AddMessageForm: React.FC<InjectedFormProps<IMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'}
                   placeholder={'Enter your message...'}/>
            <button>Add message</button>
        </form>)
}

const AddMessageFormRedux = reduxForm<IMessageType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)