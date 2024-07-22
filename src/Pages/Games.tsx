import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BodyLayout from '@/Components/BodyLayout/BodyLayout';
import CardDetail from '@/Components/CardDetail/CardDetail';
import { getUrlForGames, URL_API_CG } from '@/../constants';

const typesOfGames = [
    {
        type: 'new',
        name: 'Nuevos juegos',
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

interface IGames {
    data: any[];
    type: string;
}

const Games = () => {
    const [games, setGames] = useState<IGames[]>([]);

    const navigate = useNavigate();

    const fetchGames = async () => {
        let allGames: any[] = [];
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
                    setGames(allGames);
                })
                .catch((error) => {
                    console.error('An error occurred while fetching the endpoints:', error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-between ">
            {games.map((game) => (
                <BodyLayout key={game.type} title={game.type}>
                    {game.data.map((element: any) => (
                        <div
                            className=""
                            key={element.id}
                            onClick={() => navigate(`/game/${element.slug}`)}>
                            <CardDetail data={element} size="small" />
                        </div>
                    ))}
                </BodyLayout>
            ))}
        </div>
    );
};

export default Games;
