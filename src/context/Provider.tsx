import React, { useState } from 'react';

import { Context, IFetchGame } from './Context';
import Games from '../services/game.service';
import { getUrlForAnyGame, getUrlForGames, getUrlFormEachGame } from '../../constants';

interface IProps {
    children: React.JSX.Element | React.JSX.Element[];
}

interface IGames {
    data: any[];
    type: string;
}

const typesOfGames = [
    {
        type: 'new',
        name: 'Juegos nuevos',
    },
    {
        type: 'most-played',
        name: 'Más jugados',
    },
    {
        type: 'significantly-updated',
        name: 'Juegos TOP',
    },
];

export const Provider = ({ children }: IProps) => {
    const [openModalLog, setOpenModalLog] = useState(false);
    const [typeLog, setTypeLog] = useState<'signin' | 'signup'>('signin');
    const [isInitializedGame, setIsInitializedGame] = useState(false);
    const [selectedGame, setSelectedGame] = useState('');
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState<IGames[] | undefined>(undefined);
    const [gamesByTypes, setGamesByTypes] = useState<IGames[]>([]);

    const fetchGames = async (data: IFetchGame) => {
        const { genre, path, name } = data;
        try {
            const url = genre ? getUrlFormEachGame(path) : getUrlForGames(path);

            const response = await Games.getGames(url);

            setGames([
                {
                    type: name,
                    data: response.games.data.items,
                },
            ]);
        } catch (error: any) {
            console.log(error.message);
            return error;
        } finally {
            setLoading(false);
        }
    };

    const fetchGamesByTypes = async () => {
        let allGames: any[] = [];
        setLoading(true);
        try {
            const allUrls = [0, 1, 2].map((el) => {
                const url = getUrlForGames(typesOfGames[el].type);
                return fetch(url).then((response) => response.json());
            });

            Promise.allSettled(allUrls)
                .then((results) => {
                    results.forEach((result: any, index) => {
                        if (result.status === 'fulfilled') {
                            allGames = [
                                ...allGames,
                                {
                                    data: result.value.games.data.items,
                                    type: typesOfGames[index].name,
                                },
                            ];
                        } else {
                            console.error(
                                `Endpoint ${index + 1} rejected with reason:`,
                                result.reason
                            );
                        }
                    });
                    setGamesByTypes(allGames);
                })
                .catch((error) => {
                    console.error('An error occurred while fetching the endpoints:', error);
                });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAnyGame = async (game: string) => {
        try {
            const url = getUrlForAnyGame(game);
            const response = await Games.gameAnyGame(url);
            return response;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <Context.Provider
            value={{
                openModalLog,
                setOpenModalLog,
                setTypeLog,
                typeLog,
                isInitializedGame,
                setIsInitializedGame,
                selectedGame,
                setSelectedGame,
                games,
                fetchGames,
                fetchGamesByTypes,
                gamesByTypes,
                loading,
                fetchAnyGame,
            }}>
            {children}
        </Context.Provider>
    );
};
