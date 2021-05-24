import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import urlParser from '../utils/urlParser'
import VideoPlayer from './VideoPlayer'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '90%',
        margin: 'auto'
    },
    videoResponsive: {
        overflow: 'hidden',
        paddingBottom: '56.25%',
        height: '0'
    }
}))

const VideoPage = () => {
    const classes = useStyles()

    const videoId = urlParser('watch', 'v')
    if (videoId) {
        return (
            <Grid container className={classes.container}>
                <Grid item className={classes.videoResponsive}>
                    <VideoPlayer videoId={videoId} />
                </Grid>
            </Grid>
        )
    } else {
        return null
    }
}

export default VideoPage