import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, InputBase, Typography, makeStyles } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';

import { Popper, ClickAwayListener, MenuList, MenuItem, IconButton, Switch } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { Link, useHistory } from 'react-router-dom';

import urlParser from '../utils/urlParser';

const useStyles = makeStyles(theme => ({
    appBar: {
        background: theme.palette.primary.main,
        color: theme.palette.text.primary
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
}));

interface IProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IProps> = ({ darkMode, setDarkMode }): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState('');

    const value = urlParser('results', 'search_query');
    useEffect(() => {
        if (value) {
            setSearchTerm(value.split('+').join(' '));
        }
    }, [value]);

    const classes = useStyles();
    const history = useHistory();

    const onSearchSubmit = (e: any) => {
        e.preventDefault();

        if (searchTerm) {
            history.push(`/results?search_query=${searchTerm.split(' ').join('+')}`);
        }
    };

    const [open, setOpen] = React.useState(false);
    // NOTE: Remove any
    const anchorRef = React.useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // NOTE: Remove any
    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Link to="/" className={classes.title}>
                    <YouTubeIcon style={{ color: 'red' }} />
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
                {/* <div> */}
                <IconButton ref={anchorRef} onClick={handleToggle} color="inherit">
                    <MoreVertIcon />
                </IconButton>
                <Popper open={open} anchorEl={anchorRef.current} style={{ zIndex: 1100 }} placement="left-start">
                    {/* <Paper> */}
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                            <MenuItem>
                                <Brightness4Icon style={{ marginRight: '16px' }} />
                                Appearance: Dark
                                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                    {/* </Paper> */}
                </Popper>
                {/* </div> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;