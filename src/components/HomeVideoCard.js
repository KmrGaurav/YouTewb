import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    cardMedia: {
        minHeight: 180,
        minWidth: 320,
        [theme.breakpoints.down('md')]: {
            height: 180,
            width: 320,
        }
    }
}))

const HomeVideoCard = ({ item }) => {
    const classes = useStyles()
    
    return (
        <Card>
            <CardContent>
                <CardMedia image={item.snippet.thumbnails.medium.url} className={classes.cardMedia} />
                <Typography gutterBottom variant="h6" component="h2" noWrap>{item.snippet.title}</Typography>
                <Typography gutterBottom variant="subtitle2" component="h2">{item.snippet.channelTitle}</Typography>
            </CardContent>
        </Card>
    )
}

export default HomeVideoCard