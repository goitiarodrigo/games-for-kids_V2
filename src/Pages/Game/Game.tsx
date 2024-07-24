import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '@/context/Context';
import GameTabs from '@/Pages/Game/Tabs/GameTabs';
import RelatedGames from './RelatedGames/RelatedGames';
import { IGameInfo } from '@/interfaces/game.interface';

interface IGameInfoInComponent {
    game: IGameInfo;
    related: any;
}

const Game = () => {
    const [gameInfo, setGameInfo] = useState<IGameInfoInComponent | undefined>(undefined);

    const { isInitializedGame, fetchAnyGame } = useContext(Context);

    const { gameId } = useParams<{ gameId: string }>();
    const windowOptions: any = window;
    const startGame = async () => {
        if (isInitializedGame) {
            try {
                await windowOptions.CrazyGames.SDK.game.loadingStart();
                const response = await fetchAnyGame(gameId ?? '');
                setGameInfo(response);
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

    console.log(gameInfo?.related);

    return (
        <div className="w-full flex-col items-center">
            <h1>Juego de CrazyGames</h1>
            {isInitializedGame ? (
                <iframe
                    allowFullScreen
                    height="500px"
                    src={`https://games.crazygames.com/es_ES/${gameId}/index.html?v=1.293`}
                    width="1500px"
                />
            ) : null}
            {gameInfo ? (
                <>
                    <GameTabs data={gameInfo.game} />
                    <RelatedGames data={gameInfo.related.data} />
                </>
            ) : null}
        </div>
    );
};

export default Game;
