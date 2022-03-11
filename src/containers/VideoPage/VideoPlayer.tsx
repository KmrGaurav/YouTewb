import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    iframe: {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '100%'
    }
}));

// NOTE: Rethink type of videoId
const VideoPlayer: React.FC<{ videoId: string | null }> = ({ videoId }): JSX.Element => {
    const classes = useStyles();

    return (
        <iframe className={classes.iframe}
            // width="915" height="510"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
        />
    );
};

export default VideoPlayer;