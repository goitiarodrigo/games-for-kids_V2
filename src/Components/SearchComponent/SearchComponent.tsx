// https://api.crazygames.com/v3/en_US/search?q=spider&limit=10&device=desktop&includeTopGames=false

import { debounce } from 'lodash';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    TextField,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    CircularProgress,
} from '@mui/material';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchResults = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.crazygames.com/v3/en_US/search?q=${searchQuery}&limit=10&device=desktop&includeTopGames=false`
            );
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
        setLoading(false);
    };

    const debouncedFetchResult = debounce(fetchResults, 500);

    useEffect(() => {
        if (query) debouncedFetchResult(query);
        else setResults([]);
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <TextField
                fullWidth
                label="Search"
                onChange={handleInputChange}
                value={query}
                variant="outlined"
            />
            {loading ? <CircularProgress /> : null}
            <List>
                {results.map((result, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={result.image} />
                        </ListItemAvatar>
                        <ListItemText primary={result.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SearchComponent;
