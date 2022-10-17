import React, {useEffect, useState} from "react";
import {Box, Button, List, ListItem, TextField, Typography, Link} from "@mui/material";
// import Message from "./Message";
import {NavLink, useParams} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const Message = ({message}) => {
    return <Box className="message">
        <Typography className="messageContent">{message.text}</Typography>
        <Typography className="messageAuthor">{message.author}</Typography>
    </Box>;
}


const Chats = () => {

    const dummyMessageList = [
        {
            roomID: 1,
            messages:
                    [
                        {
                            messageID: 1,
                            text: "hello there",
                            author: "Fred"
                        },
                        {
                            messageID: 2,
                            text: "hello, Fred",
                            author: "Ivan"
                        },
                        {
                            messageID: 3,
                            text: "How can i help you?",
                            author: "Ivan"
                        }
                    ],
        },
        {
            roomID: 2,
            messages: [
                {
                    messageID: 1,
                    text: "Hello, i can't install windows on my pc, an error pops up. Is there any one to help?",
                    author: "Mark"
                },
                {
                    messageID: 2,
                    text: "Dear Mark, did you google you'r error? Most probably there is a solution already in the internet",
                    author: "Pavel"
                }
                , {
                    messageID: 3,
                    text: "Nice idea, thank you",
                    author: "Mark"
                }
            ]
        },
        {
            roomID: 3,
            messages: [
                {
                    messageID: 1,
                    text: "Hello, i can't buy these scissors art. #123777. They are available for purchase at your store, but every time i try to put them to cart and error pops up",
                    author: "Nina"
                },
                {
                    messageID: 2,
                    text: "Could you please paste error text here?",
                    author: "Ivan"
                }
                , {
                    messageID: 3,
                    text: "Sure, 1 min",
                    author: "Andrey"
                }
            ]
        }
    ];
    const [chatList, setChatList] = useState(dummyMessageList);
    const [currentRoom, setCurrentRoom] = useState({currentRoomID: 1});

    const {id} = useParams() ?? null;

    const switchRoom = () => {
        setCurrentRoom({currentRoomID: +id});
    }

    const showMessages = (id) => {
        if (id) {
            const mList = chatList[id - 1].messages;
            return mList.map(message => {
                return <Message key={message.messageID} message={message}></Message>
            });
        }
        return null
    }

    function getLastMessageId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    const SendMessageForm = () => {
        const [messageList, setMessageList] = useState([]);
        const [message, setMessage] = useState('');
        const [author, setAuthor] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();

            setMessageList(prevState => [...prevState, {
                id: getLastMessageId(prevState),
                text: message,
                author: author
            }]);

            setMessage('');

        };

        return (<Box className="sendMessageForm" sx={{
            display: "flex", gap: 1 / 2
        }}>
            <TextField
                    label={'Your name'}
                    className="sendMessageFormAuthor"
                    value={message.author}
                    onChange={event => setAuthor(event.target.value)}
                    type="text"/>
            <TextField
                    label={'Write your message here'}
                    focused
                    className="sendMessageFormInput"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    type="text"/>
            <Button
                    type={"submit"}
                    variant={"contained"}
                    onClick={handleSubmit}
                    className="sendMessageFormSendButton"
            >
                send
            </Button>
        </Box>);
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
            borderRight: 2, minWidth: 200, borderColor: "#9c9ea1",
        }}
             className={"chatRooms"}
        >
            <List sx={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
            }}>
                {chatList.map((room) => {
                    return (
                            <ListItem key={room.roomID}
                                      // onClick={() => switchRoom(room.roomID)}
                                      sx={{pl: 0}}>
                                <Link href={`/chats/${room.roomID}`}>{room.messages[0].author}</Link>
                            </ListItem>);
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
                {showMessages(id)}
            </Box>
            <SendMessageForm/>
        </Box>
    </Box>);
}

export default Chats;