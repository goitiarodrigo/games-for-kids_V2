import { debounce } from 'lodash';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
    TextField,
    List,
    ListItemText,
    ListItemAvatar,
    Avatar,
    CircularProgress,
    ListItemButton,
    InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import { URL_IMAGES_CG, URL_API_CG } from '../../../constants';

const inputProps = {
    endAdornment: (
        <InputAdornment position="end">
            <SearchIcon />
        </InputAdornment>
    ),
    style: {
        backgroundColor: '#2B2C3B',
        borderRadius: '30px',
        color: 'white',
    },
};

const inputStyle = {
    '& .MuiFilledInput-root': {
        backgroundColor: '#2B2C3B',
        borderRadius: '30px',
        color: 'white',
    },
    '& .Mui-focused': {
        backgroundColor: '#2B2C3B',
    },
    '& .MuiFilledInput-underline:before': {
        borderBottom: 'none',
    },
    '& .MuiFilledInput-underline:after': {
        borderBottom: 'none',
    },
    '& .MuiFilledInput-underline:hover:before': {
        borderBottom: 'none',
    },
};

// https://api.crazygames.com/v3/en_US/page/tagCategory/spiderman?paginationPage=1&paginationSize=70&tag=spiderman&includeUnreal=true&sorting=default&limitTopGames=15&limitSubRowTags=15&limitDesktopOnly=8&device=desktop&includeDesktopOnly=false&limitTopMobileGames=10&limitRelatedTags=20&desktopPageSize=70
const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const wrapperRef: any = useRef(null);
    const textFieldRef: any = useRef(null);

    const fetchResults = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${URL_API_CG}/en_US/search?q=${searchQuery}&limit=10&device=desktop&includeTopGames=false`
            );
            setResults(response.data.result);
        } catch (error) {
            setResults([]);
            console.error('Error fetching search results:', error);
        }
        setLoading(false);
    };

    const debouncedSetQuery = debounce((value) => {
        setQuery(value);
    }, 500);

    useEffect(() => {
        if (query) fetchResults(query);
        else setResults([]);
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (textFieldRef.current) {
                    textFieldRef.current.value = '';
                }
                setResults([]);
                setQuery('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    const handleInputChange = (event) => {
        debouncedSetQuery(event.target.value);
    };

    const handleClickResult = (slug: string) => {
        navigate(`/game/${slug}`);
        setResults([]);
        setQuery('');
    };

    return (
        <div className="relative w-2/6" ref={wrapperRef}>
            <TextField
                InputLabelProps={{
                    style: { color: 'rgba(255, 255, 255, 0.6)' }, // Color del texto del label
                }}
                InputProps={inputProps}
                color="success"
                fullWidth
                id="filled-basic"
                inputRef={textFieldRef}
                label="Buscar"
                onChange={handleInputChange}
                sx={inputStyle}
                variant="filled"
            />
            {loading ? (
                <CircularProgress className="!absolute top-full left-0 right-0 !p-0 bg-white shadow-lg z-20" />
            ) : null}
            <List className="!absolute top-full left-0 right-0 bg-[#1f2030] shadow-lg !p-0 z-20 max-h-60 overflow-y-auto !mt-2">
                {results.map((result, index) => (
                    <ListItemButton
                        key={index}
                        onClick={() => handleClickResult(result.slug)}
                        sx={{
                            '&:hover': {
                                backgroundColor: '#ababb080',
                                cursor: 'pointer',
                            },
                        }}>
                        <ListItemAvatar>
                            <Avatar src={`${URL_IMAGES_CG}${result.thumbnail ?? result.cover}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${result.title ?? result.name} ${result.totalGames ? '(' + result.totalGames + ')' : ''}`}
                        />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default SearchComponent;
