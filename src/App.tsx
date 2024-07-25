import { useContext, useEffect } from 'react';

import Navigation from './routes/Navigation';
import { Context } from './context/Context';
import Chat from './Components/Chat/Chat';

const friends = [
    {
        name: 'Juan',
        avatar: 'https://via.placeholder.com/40',
    },
    {
        name: 'María',
        avatar: 'https://via.placeholder.com/40',
    },
    // Agrega más amigos aquí
];

const App = () => {
    const { setIsInitializedGame } = useContext(Context);
    const init = async () => {
        await (window as any).CrazyGames.SDK.init();
    };

    useEffect(() => {
        init().then(() => {
            console.log('CrazyGames SDK initialized');
            setIsInitializedGame(true);
        });
    }, []);

    return (
        <>
            <Navigation />
            <Chat friends={friends} />
        </>
    );
};

export default App;
