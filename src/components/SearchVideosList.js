import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import youtube from '../apis/youtube'
import SearchVideoCard from './SearchVideoCard'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '70%',
        margin: 'auto'
    },
}))

const SearchVideosList = ({ searchTerm }) => {
    const [fetchedSearchedVideos, setFetchedSearchedVideos] = useState({})
    const classes = useStyles()

    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    q: searchTerm,
                    maxResults: 3
                }
            })
            setFetchedSearchedVideos(res.data)
        })()
    }, [searchTerm])

    if (!fetchedSearchedVideos.etag) {
        return null
    }

    return (
        <Grid container className={classes.container}>
            {fetchedSearchedVideos.items.map(item => (
                <Grid item key={item.etag}>
                    <SearchVideoCard item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default SearchVideosList