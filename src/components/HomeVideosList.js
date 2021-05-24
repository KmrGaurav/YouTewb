import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import youtube from '../apis/youtube'
import HomeVideoCard from './HomeVideoCard'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '90%',
        margin: 'auto'
    },
    link: {
        textDecoration: 'none'
    }
}))

const HomeVideosList = () => {
    const [fetchedVideos, setFetchedVideos] = useState({})
    const classes = useStyles()

    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    maxResults: 5
                }
            })
            setFetchedVideos(res.data)
        })()
    }, [])

    if (!fetchedVideos.etag) {
        return null
    }

    return (
        <Grid className={classes.container} container spacing={2}>
            {fetchedVideos.items.map(item => (
                <Grid key={item.etag} item xs={3}>
                    <Link to={`/watch?v=${item.id.videoId}`} className={classes.link}>
                        <HomeVideoCard item={item} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default HomeVideosList