
import './App.css';

import React, {useState, useEffect} from "react";

function Message(props) {
    return <div className="message">
        <p className="messageContent">{props.message.text}</p>
        <p className="messageAuthor">{props.message.author}</p>
    </div>;
}


function App() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    const defaultAnswer = 'Hello, here we can help you with nearly anything. Give us a few minutes and we\'ll get back to you shortly';

    useEffect(() => {
        if (messageList.length === 1) {
            setTimeout(() =>
                setMessageList(
                    [...messageList, {text: defaultAnswer, author: 'bot_Fred'}]), 1500)
        }
        if (messageList.length >= 2 &&
            (((messageList.at(messageList.length - 2).author !== author) &&
                (messageList.at(messageList.length - 2).author !== 'bot_Fred')))) {
            setMessageList([...messageList, {text: defaultAnswer, author: 'bot_Fred'}])
        }
    }, [messageList]);

    return (<>
        <div className="messageList">
            {messageList.map((item) => <Message message={item}></Message>)}
        </div>
        <div className="sendMessageForm">
            <input className="sendMessageFormAuthor" value={author} onChange={
                event => setAuthor(event.target.value)
            } type="text"/>
            <input className="sendMessageFormInput" value={message} onChange={
                event => setMessage(event.target.value)} type="text"/>
            <button className="sendMessageFormSendButton" onClick={() => {
                setMessageList([...messageList, {text: message, author: author}]);
                setMessage('');
            }
            }>send
            </button>
        </div>
    </>);
}

export default App;
