import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import ChatMessage from './ChatMessage';

const allMessages = {
    Juan: [
        {
            text: 'Hola, ¿cómo estás?',
            time: '2023-07-25T14:48:00.000Z',
            user: {
                name: 'Juan',
                avatar: 'https://via.placeholder.com/40',
            },
        },
        {
            text: 'Todo bien, gracias',
            time: '2023-07-25T14:50:00.000Z',
            user: {
                name: 'Juan',
                avatar: 'https://via.placeholder.com/40',
            },
        },
    ],
    María: [
        {
            text: 'Hola María, ¿cómo estás?',
            time: '2023-07-25T14:48:00.000Z',
            user: {
                name: 'María',
                avatar: 'https://via.placeholder.com/40',
            },
        },
        {
            text: 'Muy bien, ¿y tú?',
            time: '2023-07-25T14:50:00.000Z',
            user: {
                name: 'María',
                avatar: 'https://via.placeholder.com/40',
            },
        },
    ],
};

const currentUser = {
    name: 'Rodrigo',
    avatar: 'https://via.placeholder.com/40',
};

const getMessages = async (friendName) => {
    // Simula una solicitud de red con un retraso
    await new Promise((resolve) => setTimeout(resolve, 500));
    return allMessages[friendName] || [];
};

const Chat = ({ friends }) => {
    const [selectedFriend, setSelectedFriend] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessages, setNewMessages] = useState({});
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const selectFriend = async (friend) => {
        setSelectedFriend(friend);
        setLoading(true);
        const messages = await getMessages(friend.name);
        setMessages(messages);
        setLoading(false);
        setNewMessages((prev) => ({ ...prev, [friend.name]: false }));
    };

    const backToFriends = () => {
        setSelectedFriend(null);
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                text: inputValue,
                time: new Date().toISOString(),
                user: currentUser,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputValue('');
        }
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       const randomFriend = friends[Math.floor(Math.random() * friends.length)].name;
    //       setNewMessages((prev) => ({ ...prev, [randomFriend]: true }));
    //     }, 10000); // Cada 10 segundos
    //     return () => clearInterval(interval);
    //   }, [friends]);

    return (
        <div className="fixed bottom-0 right-5 max-w-sm w-full bg-white shadow-lg rounded-t-lg overflow-hidden">
            <div
                className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer"
                onClick={toggleChat}>
                {selectedFriend ? (
                    <>
                        <ArrowBackIcon className="cursor-pointer" onClick={backToFriends} />
                        <Typography className="font-semibold flex-grow text-center" variant="h6">
                            Chat con {selectedFriend.name}
                        </Typography>
                    </>
                ) : (
                    <div className="font-semibold flex items-center gap-4">
                        <h1>Amigos {'(' + friends.length + ')'}</h1>
                        {Object.values(newMessages).length > 0 ? (
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
                            </span>
                        ) : null}
                    </div>
                )}
                {isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </div>
            {isOpen ? (
                <div className="p-4 max-h-80 overflow-y-auto flex flex-col justify-between">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            <div className="flex-grow overflow-y-auto">
                                {!selectedFriend ? (
                                    <div>
                                        {friends.map((friend, index) => (
                                            <div
                                                className={`flex items-center p-2 border-b border-gray-200 cursor-pointer ${newMessages[friend.name] ? 'bg-yellow-100' : ''}`}
                                                key={index}
                                                onClick={() => selectFriend(friend)}>
                                                <Avatar alt={friend.name} src={friend.avatar} />
                                                <Typography
                                                    className="ml-4 flex-grow"
                                                    variant="subtitle1">
                                                    {friend.name}
                                                </Typography>
                                                {newMessages[friend.name] ? (
                                                    <NotificationsIcon className="text-red-500" />
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        {messages.map((message, index) => (
                                            <ChatMessage
                                                isCurrentUser={
                                                    message.user.name === currentUser.name
                                                }
                                                key={index}
                                                message={message}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            {selectedFriend ? (
                                <div className="flex items-center p-2 border-t border-gray-200">
                                    <TextField
                                        fullWidth
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Escribe un mensaje..."
                                        value={inputValue}
                                        variant="outlined"
                                    />
                                    <IconButton color="primary" onClick={handleSendMessage}>
                                        <SendIcon />
                                    </IconButton>
                                </div>
                            ) : null}
                        </>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Chat;
