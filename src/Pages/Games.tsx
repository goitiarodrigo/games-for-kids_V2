import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BodyLayout from '@/Components/BodyLayout/BodyLayout';
import CardDetail from '@/Components/CardDetail/CardDetail';
import { getUrlForGames, URL_API_CG } from '@/../constants';

const Games = () => {
    // const [typeOfGames, setTypeOfGames] = useState<'most-played' | 'new' | 'significantly-updated'>(
    //     'most-played'
    // );
    const [games, setGames] = useState<any[]>([]);

    const fetchGames = async () => {
        let allGames: any[] = [];
        try {
            const allUrls = [0, 1, 2].map((el) => {
                const typesOfGames = ['most-played', 'new', 'significantly-updated'];
                const url = getUrlForGames(typesOfGames[el]);
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
                                    type: index,
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
    const navigate = useNavigate();

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <BodyLayout>
            <div className="flex gap-6 flex-wrap justify-center p-5">
                {games.map((game: any) =>
                    game.data.map((element: any) => (
                        <div key={element.id} onClick={() => navigate(`/game/${element.slug}`)}>
                            <CardDetail data={element} />
                        </div>
                    ))
                )}
            </div>
        </BodyLayout>
    );
};

export default Games;
