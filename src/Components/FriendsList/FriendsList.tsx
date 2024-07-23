import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const friends = [
    {
        name: 'saria_n',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'mgs.arquitectura',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'nico__suarez',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'jerofreixas',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'danproven',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'architects_united',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'letsspeakenglish',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
    {
        name: 'milagroslista',
        img: 'https://cdn.vectorstock.com/i/500p/20/44/laughing-boy-avatar-funny-kid-profile-picture-vector-41562044.jpg',
    },
];

const FriendsOnline = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleClick = (friend) => {
        setSelectedFriend(friend);
    };

    return (
        <div className="flex w-full px-2 h-[8rem] items-center max-w-full overflow-x-auto">
            {friends.map((friend, index) => (
                <div className="flex flex-col items-center w-[10rem] max-w-[10rem]" key={index}>
                    <div className="relative">
                        <Tooltip
                            arrow
                            title={
                                <div className="p-2">
                                    <div className="flex items-center mb-2">
                                        <img
                                            alt={friend.name}
                                            className="w-10 h-10 rounded-full"
                                            src={friend.img}
                                        />
                                        <div className="ml-2">
                                            <div className="font-bold">{friend.name}</div>
                                            <div className="text-gray-500">@{friend.name}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold hover:underline cursor-pointer">
                                            Jugando - SPIDERMAN
                                        </div>
                                        <button
                                            className="bg-green-500 text-white px-4 py-1 rounded mb-2"
                                            onClick={() => console.log('prueba')}
                                            type="button">
                                            Unirse
                                        </button>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <IconButton size="small">
                                                <InfoIcon color="warning" />
                                            </IconButton>
                                            <span>Chatea con {friend.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <IconButton size="small">
                                                <InfoIcon color="warning" />
                                            </IconButton>
                                            <span>Ver perfil</span>
                                        </div>
                                    </div>
                                </div>
                            }>
                            <img
                                alt={friend.name}
                                className="w-16 h-16 rounded-full border-4 border-pink-500 cursor-pointer"
                                onClick={() => handleClick(friend)}
                                src={friend.img}
                            />
                        </Tooltip>
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <span className="mt-2 text-white text-sm">{friend.name}</span>
                </div>
            ))}
        </div>
    );
};

export default FriendsOnline;
