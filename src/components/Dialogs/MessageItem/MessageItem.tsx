import React from 'react';
import style from './MessageItem.module.css'
import {DialogsPageType} from "../../../redux/state";

type MessagesPropsType = {
    stateMessage: DialogsPageType
    addMessage: (MessageText: string) => void
}

const MessageItem = (props: MessagesPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        if (newMessageElement.current) {
            props.addMessage(newMessageElement.current?.value)
            newMessageElement.current.value = ''
        }
    }
    return (
        <div>
            <textarea className={style.messageArea} ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
};

export default MessageItem;