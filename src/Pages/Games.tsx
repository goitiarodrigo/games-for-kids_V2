import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BodyLayout from '@/Components/BodyLayout/BodyLayout';
import CardDetail from '@/Components/CardDetail/CardDetail';
import { URL_API_CG } from '@/../constants';

const Games = () => {
    // const [typeOfGames, setTypeOfGames] = useState<'most-played' | 'new-games' | 'top-games'>(
    //     'most-played'
    // );
    const [games, setGames] = useState<any[]>([]);

    const navigate = useNavigate();

    const fetchGames = async () => {
        try {
            const response = await axios.get(
                `${URL_API_CG}/en_US/page/tagCategory/action?paginationPage=1&paginationSize=70&category=action&includeUnreal=true&sorting=most-played&limitTopGames=15&limitSubRowTags=15&limitDesktopOnly=8&device=desktop&includeDesktopOnly=false&limitTopMobileGames=10&limitRelatedTags=20&desktopPageSize=70`
            );
            setGames(response.data.games.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <BodyLayout>
            <div className="flex gap-6 flex-wrap justify-center p-5">
                {games.map((game: any) => (
                    <div key={game.id} onClick={() => navigate(`/game/${game.slug}`)}>
                        <CardDetail data={game} />
                    </div>
                ))}
            </div>
        </BodyLayout>
    );
};

export default Games;
