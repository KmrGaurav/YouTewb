import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

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

    if (document.location.search) {
        if (document.location.search.split('?')[1]) {
            if (document.location.search.split('?')[1].split('=')) {
                const videoId = document.location.search.split('?')[1].split('=')[1]
                
                return (
                    <Grid container className={classes.container}>
                        <Grid item className={classes.videoResponsive}>
                            <VideoPlayer videoId={videoId} />
                        </Grid>
                    </Grid>
                )
            }
        }
    } else {
        return null
    }

}

export default VideoPage