import React from 'react';
import {Box, Typography} from "@mui/material";

const Message = ({message}) => {
    return <Box className="message">
        <Typography className="messageContent">{message.text}</Typography>
        <Typography className="messageAuthor">{message.author}</Typography>
    </Box>;
}

export default Message;