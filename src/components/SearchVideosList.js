import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import youtube from '../apis/youtube'
import SearchVideoCard from './SearchVideoCard'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '70%',
        margin: 'auto'
    },
    link: {
        textDecoration: 'none'
    }
}))

const SearchVideosList = (props) => {
    const [fetchedSearchedVideos, setFetchedSearchedVideos] = useState({})
    const classes = useStyles()

    const searchTerm = props.location.search.split('=')[1]

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
                    <Link to={`/watch?v=${item.id.videoId}`} className={classes.link}>
                        <SearchVideoCard item={item} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default SearchVideosList