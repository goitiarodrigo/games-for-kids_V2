import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import BodyLayout from '@/Components/BodyLayout/BodyLayout';
import CardDetail from '@/Components/CardDetail/CardDetail';
import { getUrlForGames } from '@/../constants';

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

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 7,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

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
        <div className="w-full h-full flex flex-col gap-5 items-center py-5">
            {games.map((game) => (
                <div className="slider-container w-11/12 py-3 flex flex-col gap-3 " key={game.type}>
                    <span className="text-white">{game.type}</span>
                    <Slider {...settings}>
                        {game.data.map((element: any) => (
                            <div
                                className="w-auto"
                                key={element.id}
                                onClick={() => navigate(`/game/${element.slug}`)}>
                                <CardDetail data={element} size="small" />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

export default Games;
