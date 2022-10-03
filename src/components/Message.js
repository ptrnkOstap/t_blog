import React from 'react';
import {Box, Typography} from "@mui/material";

function Message({key, message}) {
    return <Box key={key} className="message">
        <Typography className="messageContent">{message.text}</Typography>
        <Typography className="messageAuthor">{message.author}</Typography>
    </Box>;
}

export default Message;