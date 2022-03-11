import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import youtube from 'apis/youtube';
import urlParser from 'utils/urlParser';
import SearchVideoCard from './SearchVideoCard';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '70%',
        margin: 'auto',
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: '80%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            maxWidth: '90%'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%'
        }
    },
    link: {
        textDecoration: 'none'
    }
}));

const SearchVideosList: React.FC = (): JSX.Element => {
    // NOTE: Remove any
    const [fetchedSearchedVideos, setFetchedSearchedVideos] = useState<any>(null);
    const classes = useStyles();

    const searchTerm = urlParser('results', 'search_query');
    useEffect(() => {
        if (searchTerm) {
            (async () => {
                const res = await youtube.get('/search', {
                    params: {
                        q: searchTerm,
                        maxResults: process.env.REACT_APP_YOUTUBE_SEARCH_PAGE_VIDEOS_COUNT
                    }
                });
                setFetchedSearchedVideos(res.data);
            })();
        }
    }, [searchTerm]);

    if (!fetchedSearchedVideos?.etag) {
        return <></>;
    }

    return (
        <Grid container className={classes.container}>
            {fetchedSearchedVideos.items.map((item: any /* NOTE: Remove any */) => (
                item.id.kind === 'youtube#video' && (
                    <Grid item key={item.etag}>
                        <Link to={`/watch?v=${item.id.videoId}`} className={classes.link}>
                            <SearchVideoCard item={item} />
                        </Link>
                    </Grid>
                )
            ))}
        </Grid>
    );
};

export default SearchVideosList;