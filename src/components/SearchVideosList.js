import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import youtube from '../apis/youtube'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',


    }
}))

const SearchVideosList = ({ searchTerm }) => {
    const classes = useStyles()

    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    q: searchTerm,
                    maxResults: 5
                }
            })
            console.log(res)
        })()
    }, [searchTerm])
    
    return (
        <Grid className={classes.container}>
            <h1>SearchVideosList</h1>
        </Grid>
    )
}

export default SearchVideosList