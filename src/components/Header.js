import React, { useState } from 'react'
import { AppBar, Toolbar, InputBase, Typography, makeStyles } from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'white',
        color: 'black'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        display: 'flex',
        justifyContent: 'space-between',
        border: `1px solid ${theme.palette.grey[400]}`,
        borderRadius: '1px',
        width: '42%',
    },
    inputRoot: {
        paddingLeft: '10px',
        width: '100%'
    },
    inputInput: {},
    searchIcon: {
        alignSelf: 'center',
        background: theme.palette.grey[100],
        color: theme.palette.grey[600],
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            background: theme.palette.grey[200],
            color: theme.palette.grey[800],
        },
        padding: '0px',
        border: 'none'
    }
}))

const Header = (props) => {
    const classes = useStyles()
    const [searchText, setSearchText] = useState('')

    const onSearchSubmit = (e) => {
        e.preventDefault()

        if(searchText) {
            props.setSearchTerm(searchText)
            setSearchText('')
        }
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <div className={classes.title}>
                    <YouTubeIcon style={{color: 'red'}}/>
                    <Typography variant="h6" noWrap>YouTewb</Typography>
                </div>
                <form onSubmit={onSearchSubmit} className={classes.search}>
                    <InputBase
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <button type="submit" className={classes.searchIcon}>
                        <SearchIcon />
                    </button>
                </form>
                <div />
            </Toolbar>
        </AppBar>
    )
}

export default Header