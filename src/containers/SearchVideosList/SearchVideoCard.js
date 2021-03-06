import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    cardContent: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    cardMedia: {
        minHeight: 180,
        minWidth: 320,
        [theme.breakpoints.down('md')]: {
            height: 180,
            width: 320,
        }
    },
    videoInfo: {
        marginLeft: '20px',
        '& > h2:last-child': {
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            }
        }
    }
}));

const SearchVideoCard = ({ item }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.cardContent}>
                <CardMedia image={item.snippet.thumbnails.medium.url} className={classes.cardMedia} />
                <div className={classes.videoInfo}>
                    <Typography gutterBottom variant="h6" component="h2">{item.snippet.title}</Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2">{item.snippet.channelTitle}</Typography>
                    <Typography gutterBottom variant="body1" component="h2">{item.snippet.description}</Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default SearchVideoCard;