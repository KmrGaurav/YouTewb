import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import youtube from 'apis/youtube';
import urlParser from 'utils/urlParser';

import VideoPlayer from './VideoPlayer';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '70px',

        maxWidth: '90%',
        margin: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },
    videoDetail: {
        display: 'flex',
        flexDirection: 'column',
        flex: '2 1 650px',
    },
    right: {
        height: '100px',
        flex: '1.8 1 200px',
        marginLeft: '20px'
    },
    videoResponsive: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '56.25%',
    },
    likedislike: {
        display: 'flex',
        color: 'grey',
        '& > *': {
            margin: '0 4px',
            fontWeight: 'bold'
        }
    },
    description: {
        width: '70%',
        margin: '50px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: '30px 10px'
        }
    }
}));

const VideoPage: React.FC = (): JSX.Element => {
    // NOTE: Remove any
    const [videoDetail, setVideoDetail] = useState<any>({});

    const classes = useStyles();

    const videoId = urlParser('watch', 'v');
    useEffect(() => {
        if (videoId) {
            (async () => {
                const res = await youtube.get('/videos', {
                    params: {
                        part: 'snippet,statistics',//,contentDetails',
                        id: videoId
                    }
                });

                const detail = res.data.items[0];

                const publishedAt = new Date(detail.snippet.publishedAt);
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                detail.publishedDate = `${months[publishedAt.getMonth()]} ${publishedAt.getDate()}, ${publishedAt.getFullYear()}`;

                const formatCount = (count: number) => count < 1000 ? count : count < 1000000 ? `${Math.trunc(count / 1000)}K` : count < 1000000000 ? `${Math.trunc(count / 1000000)}M` : count;
                const likeCount = Number(detail.statistics.likeCount);
                detail.likeCount = formatCount(likeCount);
                const dislikeCount = Number(detail.statistics.dislikeCount);
                detail.dislikeCount = formatCount(dislikeCount);

                // console.log(detail)
                setVideoDetail(detail);
            })();
        }
    }, [videoId]);

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.videoDetail}>
                <Grid className={classes.videoResponsive}>
                    <VideoPlayer videoId={videoId} />
                </Grid>
                <Grid>
                    {videoDetail.etag ?
                        <>
                            <Typography variant="h6" component="h1">
                                {videoDetail.snippet.title}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" component="h6">
                                    {Number(videoDetail.statistics.viewCount).toLocaleString()} views • {videoDetail.publishedDate}
                                </Typography>
                                <div className={classes.likedislike} >
                                    <ThumbUpIcon />
                                    <Typography variant="body1" component="h6">{videoDetail.likeCount}</Typography>
                                    <ThumbDownIcon />
                                    <Typography variant="body1" component="h6">{videoDetail.dislikeCount}</Typography>
                                </div>
                            </div>
                            <hr style={{ margin: '20px 0', color: 'red' }} />
                            <Typography variant="body1" component="h5" className={classes.description}>
                                {videoDetail.snippet.description}
                            </Typography>
                        </>
                        : null}
                </Grid>
            </Grid>
            <Grid item className={classes.right} />
        </Grid>
    );
};

export default VideoPage;