import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import youtube from 'apis/youtube';

import HomeVideoCard from './HomeVideoCard';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '90%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },
    link: {
        textDecoration: 'none'
    }
}));

const HomeVideosList = () => {
    const [fetchedVideos, setFetchedVideos] = useState({});
    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    maxResults: process.env.REACT_APP_YOUTUBE_HOME_PAGE_VIDEOS_COUNT
                }
            });
            setFetchedVideos(res.data);
        })();
    }, []);

    if (!fetchedVideos.etag) {
        return null;
    }

    return (
        <Grid className={classes.container} container spacing={2}>
            {fetchedVideos.items.map(item => (
                item.id.kind === 'youtube#video' ?
                    <Grid key={item.etag} item xs={12} sm={6} md={3}>
                        <Link to={`/watch?v=${item.id.videoId}`} className={classes.link}>
                            <HomeVideoCard item={item} />
                        </Link>
                    </Grid>
                    : null
            ))}
        </Grid>
    );
};

export default HomeVideosList;