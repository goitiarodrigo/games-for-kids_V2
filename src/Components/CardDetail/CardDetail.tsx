import { useState } from 'react';
import { CardCover, Card, CardContent, Typography } from '@mui/joy';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import { URL_IMAGES_CG, URL_VIDEOS_CG } from '../../../constants';

interface IProps {
    data: any;
    size: 'small' | 'medium' | 'large';
}

const sizes = {
    small: {
        maxWidth: 200,
        minWidth: 200,
        maxHeight: 200,
        minHeight: 200,
    },
    medium: {
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 300,
        minHeight: 300,
    },
    large: {
        maxWidth: 400,
        minWidth: 400,
        maxHeight: 400,
        minHeight: 400,
    },
};

const CardDetail = ({ data, size }: IProps) => {
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
            className="hover:scale-[105%]"
            onMouseEnter={() => handleMouseEnter(videos.sizes[2])}
            onMouseLeave={handlMouseLeave}
            sx={{
                ...sizes[size],
                position: 'relative',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
            }}>
            {isMouseEnter ? (
                <CardCover>
                    <video autoPlay loop muted>
                        <source
                            src={`${URL_VIDEOS_CG}${videos.sizes[2]?.location}`}
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
            ) : (
                <CardCover>
                    <img
                        alt="Game"
                        loading="lazy"
                        src={`${URL_IMAGES_CG}${cover}`}
                        style={{ objectFit: 'cover' }}
                    />
                </CardCover>
            )}
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                    {name}
                </Typography>
                <Typography startDecorator={<VideogameAssetIcon />} textColor="neutral.300">
                    California, USA
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardDetail;
