import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '@/context/Context';

const Game = () => {
    const { isInitializedGame } = useContext(Context);

    const { gameId } = useParams<{ gameId: string }>();
    const windowOptions: any = window;
    const startGame = async () => {
        if (isInitializedGame) {
            try {
                await windowOptions.CrazyGames.SDK.game.loadingStart();
                console.log(await windowOptions.CrazyGames.SDK);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    };

    useEffect(() => {
        startGame().then(() => {
            console.log(windowOptions.CrazyGames.SDK.game);
        });
    }, [isInitializedGame]);

    return (
        <div>
            <h1>Juego de CrazyGames</h1>
            {isInitializedGame ? (
                <iframe
                    allowFullScreen
                    height="500px"
                    src={`https://games.crazygames.com/es_ES/${gameId}/index.html?v=1.293`}
                    width="1000px"
                />
            ) : null}
        </div>
    );
};

export default Game;
