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

    return (
        <div className="w-full flex flex-col items-center">
            {isInitializedGame ? (
                <iframe
                    allowFullScreen
                    height="500px"
                    src={`https://games.crazygames.com/es_ES/${gameId}/index.html?v=1.293`}
                    width="90%"
                />
            ) : null}
            {gameInfo ? (
                <div className="w-[90%] flex flex-col items-center">
                    <GameTabs data={gameInfo.game} />
                    <RelatedGames data={gameInfo.related.data} />
                </div>
            ) : null}
        </div>
    );
};

export default Game;
