import React from 'react';
import style from './MessageItem.module.css'
import {DialogsPageType} from "../../../redux/state";

type MessagesPropsType = {
    stateMessage: DialogsPageType
    dispatch: any
    newMessageText: string
}

const MessageItem = (props: MessagesPropsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeMessageHandler = () => {
        if (newMessageElement.current) {
            let messageText = newMessageElement.current?.value
            props.dispatch({type: 'UPDATE-MESSAGE-TEXT', messageText})
            newMessageElement.current.value = ''
        }
    }
    const addMessage = () => {
        if (newMessageElement.current) {
            props.dispatch({type: 'ADD-MESSAGE'})
        }
    }

    return (
        <div>
            <textarea value={props.stateMessage.newMessageText} className={style.messageArea} ref={newMessageElement}
                      onChange={onChangeMessageHandler}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
};

export default MessageItem;