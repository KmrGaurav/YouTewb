import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import youtube from '../apis/youtube'
import HomeVideoCard from './HomeVideoCard'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '90%',
        margin: 'auto'
    }
}))

const HomeVideosList = () => {
    const [fetchedVideos, setFetchedResults] = useState({})
    const classes = useStyles()

    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    maxResults: 5
                }
            })
            setFetchedResults(res.data)
        })()
    }, [])

    if (!fetchedVideos.etag) {
        return null
    }

    return (
        <Grid className={classes.container} container spacing={2}>
            {fetchedVideos.items.map(item => (
                <Grid key={item.etag} item xs={3}>
                    <HomeVideoCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default HomeVideosList