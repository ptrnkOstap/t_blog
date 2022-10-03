import './App.css';

import React, {useState, useEffect, useCallback} from "react";
import {Box, List, Button, FormControl, TextField, Typography, ListItem} from "@mui/material";
import Grid from "@mui/material/Grid"


function App() {
    const [chatList, setChatList] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const defaultAnswer = 'Hello, here we can help you with nearly anything. Give us a few minutes and we\'ll get back to you shortly';

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageList(prevState => [...prevState, {
            id: getLastMessageId(prevState),
            text: message,
            author: author
        }]);

        setMessage('');

    };

    useEffect(() => {
        if (messageList.length === 1) {
            setTimeout(() =>
                setMessageList((prevState) =>
                    [...prevState, {id: getLastMessageId(prevState), text: defaultAnswer, author: 'bot_Fred'}]), 1500)
        }
        if (messageList.length >= 2 &&
            (((messageList.at(messageList.length - 2).author !== author) &&
                (messageList.at(messageList.length - 2).author !== 'bot_Fred')))) {
            setMessageList((prevState) => [...prevState, {
                id: getLastMessageId(prevState),
                text: defaultAnswer,
                author: 'bot_Fred'
            }])
        }
    }, [messageList]);


    function getLastMessageId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }


    return (<Box sx={{
        minHeight: 600,
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        p: 1 / 2,
        boxShadow: 2,
        borderRadius: 3,
        bgcolor: "#f5f5f5"
    }}>
        <Box sx={{
            borderRight: 2,
            minWidth: 200,
            borderColor: "#9c9ea1",
        }}
             className={"chatRooms"}
        >
            <List>
                {chatList.map((room) => {
                    <ListItem key={room.id}> {room.author} </ListItem>
                })}
            </List>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            p: 1 / 2
        }}>
            <Box className="messageList">
                {messageList.map((item) =>
                    <Box key={item.id} className="message">
                        <Typography className="messageContent">{item.text}</Typography>
                        <Typography className="messageAuthor">{item.author}</Typography>
                    </Box>
                )}
            </Box>
            <Box className="sendMessageForm" sx={{
                display: "flex",
                gap: 1 / 2
            }}>
                <TextField label={'Your name'} className="sendMessageFormAuthor" value={author} onChange={
                    event => setAuthor(event.target.value)
                } type="text"/>
                <TextField label={'Write your message here'} focused className="sendMessageFormInput"
                           value={message} onChange={event => setMessage(event.target.value)} type="text"/>
                <Button type={"submit"} variant={"contained"} onClick={handleSubmit}
                        className="sendMessageFormSendButton">send</Button>
            </Box>
        </Box>
    </Box>);
}

export default App;
