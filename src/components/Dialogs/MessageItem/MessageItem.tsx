import React from 'react';
import style from './MessageItem.module.css'


const MessageItem = () => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }
    return (
        <div>
            <textarea className={style.messageArea} ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
};

export default MessageItem;