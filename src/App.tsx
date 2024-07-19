import { useContext, useEffect } from 'react';

import Navigation from './routes/Navigation';
import { Context } from './context/Context';

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

    return <Navigation />;
};

export default App;
