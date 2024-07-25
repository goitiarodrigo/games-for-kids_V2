// ChatMessage.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

const ChatMessage = ({ message, isCurrentUser }) => {
    const { text, time, user } = message;

    return (
        <div
            className={`flex items-start p-4 border-b border-gray-200 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
            <Avatar alt={user.name} src={user.avatar} />
            <div className={`ml-4 ${isCurrentUser ? 'mr-4' : ''}`}>
                <Typography className="font-semibold" variant="subtitle1">
                    {user.name}
                </Typography>
                <Typography className="text-gray-500" variant="caption">
                    {format(new Date(time), 'p, MMM dd')}
                </Typography>
                <Typography className="mt-2" variant="body1">
                    {text}
                </Typography>
            </div>
        </div>
    );
};

export default ChatMessage;
