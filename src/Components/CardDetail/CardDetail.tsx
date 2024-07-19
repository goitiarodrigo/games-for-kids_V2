import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useState } from 'react';
import { CardCover } from '@mui/joy';

import { URL_IMAGES_CG, URL_VIDEOS_CG } from '../../../constants';

interface IProps {
    data: any;
}

const CardDetail = ({ data }: IProps) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const { name, cover, videos, mobileFriendly } = data;

    const handleMouseEnter = (video?: string) => {
        if (video) {
            setIsMouseEnter(true);
        }
    };

    const handlMouseLeave = () => {
        setIsMouseEnter(false);
    };

    return (
        <Card
            onMouseEnter={() => handleMouseEnter(videos.sizes[2])}
            onMouseLeave={handlMouseLeave}
            sx={{
                maxWidth: 345,
                minWidth: 345,
                maxHeight: 320,
                minHeight: 320,
                position: 'relative',
            }}>
            <CardActionArea>
                {isMouseEnter ? (
                    <CardMedia sx={{ height: '200' }}>
                        <video autoPlay loop muted>
                            <source
                                src={`${URL_VIDEOS_CG}${videos.sizes[2]?.location}`}
                                type="video/mp4"
                            />
                        </video>
                    </CardMedia>
                ) : (
                    <CardMedia>
                        <img
                            alt="green iguana"
                            className="h-[140px] w-full"
                            src={`${URL_IMAGES_CG}${cover}`}
                            style={{ objectFit: 'cover', height: '200px' }}
                        />
                    </CardMedia>
                )}
                <CardContent>
                    <div className="absolute right-5 bottom-[80px] rounded-full bg-black p-3">
                        <VideogameAssetIcon sx={{ color: 'white', height: 50, width: 50 }} />
                    </div>
                    <Typography component="div" gutterBottom variant="h5">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardDetail;
