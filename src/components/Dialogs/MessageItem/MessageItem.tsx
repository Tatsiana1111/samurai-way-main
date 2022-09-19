import React from 'react';
import style from './MessageItem.module.css'
import {DialogsPageType} from "../../../redux/store";


type MessagesPropsType = {
    newMessageText: string
    addMessage: () => void
    onChangeMessageHandler: (messageText: string) => void
    dialogsPage: DialogsPageType
}

const MessageItem = (props: MessagesPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeMessageHandler = () => {
        if (newMessageElement.current) {
            let messageText = newMessageElement.current?.value
            props.onChangeMessageHandler(messageText)
            newMessageElement.current.value = ''
        }
    }
    const addMessage = () => {
        if (newMessageElement.current) {
            props.addMessage()
        }
    }

    return (
        <div>
            <textarea placeholder='Enter your message' value={props.dialogsPage.newMessageText}
                      className={style.messageArea} ref={newMessageElement}
                      onChange={onChangeMessageHandler}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
};

export default MessageItem;