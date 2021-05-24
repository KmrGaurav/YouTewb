import React, { useEffect } from 'react'
import { AppBar, Toolbar, InputBase, Typography, makeStyles } from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom'

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
        alignItems: 'center',
        textDecoration: 'none',
        "&:visited": {
            color: 'inherit'
        }
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

const Header = ({ searchTerm, setSearchTerm }) => {
    useEffect(() => {
        const location = document.location

        if (location.pathname === '/results') {
            const query = location.search.split('?')[1]
            
            if (query) {
                if (query.split('=')[0] === 'search_query') {
                    if (query.split('=')[1]) {
                        setSearchTerm(query.split('=')[1].split('+').join(' '))
                    }
                }
            }
        }
    }, [setSearchTerm])

    const classes = useStyles()
    const history = useHistory()

    const onSearchSubmit = (e) => {
        e.preventDefault()

        if(searchTerm) {
            history.push(`/results?search_query=${searchTerm.split(' ').join('+')}`)
        }
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Link to="/" className={classes.title}>
                    <YouTubeIcon style={{color: 'red'}}/>
                    <Typography variant="h6" noWrap>YouTewb</Typography>
                </Link>
                <form onSubmit={onSearchSubmit} className={classes.search}>
                    <InputBase
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ spellCheck: 'false', 'aria-label': 'search' }}
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