import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import CardDetail from '@/Components/CardDetail/CardDetail';
import { Context } from '@/context/Context';

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

const Games = () => {
    const navigate = useNavigate();

    const { fetchGamesByTypes, games, gamesByTypes } = useContext(Context);

    useEffect(() => {
        fetchGamesByTypes();
    }, []);

    return (
        <div className="w-full h-full flex flex-col gap-5 items-center py-5">
            {(games ?? gamesByTypes).map((game) => (
                <div className="slider-container w-11/12 py-3 flex flex-col gap-3 " key={game.type}>
                    <span className="text-white">{game.type}</span>
                    {games ? (
                        <div className="flex flex-wrap gap-4">
                            {game.data.map((element: any) => (
                                <div
                                    key={element.id}
                                    onClick={() => navigate(`/game/${element.slug}`)}>
                                    <CardDetail data={element} size="medium" />
                                </div>
                            ))}
                        </div>
                    ) : (
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
                    )}
                </div>
            ))}
        </div>
    );
};

export default Games;
