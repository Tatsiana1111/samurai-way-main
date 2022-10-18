import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";
import {store} from "../../redux/reduxStore";
import {DialogsPageType} from "../../redux/reduxStore";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLength2, required} from "../../utils/validators/validators";

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

const maxLength100 = maxLengthCreator(100)
const AddMessageForm: React.FC<InjectedFormProps<IMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageText'}
                   placeholder={'Enter your message...'} validate={[required, maxLength100, minLength2]}/>
            <button>Add message</button>
        </form>)
}

const AddMessageFormRedux = reduxForm<IMessageType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)