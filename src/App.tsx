import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "common/Header";
import { HomeVideosList, SearchVideosList, VideoPage, ChannelPage } from 'containers';
import withTheme from './Theme';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper
    }
}));

interface IProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const App: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();
    const { darkMode, setDarkMode } = props;

    return (
        <div className={classes.root}>
            <Router>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Route path="/" exact component={HomeVideosList} />
                <Route path="/results" exact component={SearchVideosList} />
                <Route path="/watch" exact component={VideoPage} />
                <Route path="/c" component={ChannelPage} />
            </Router>
        </div>
    );
};

export default withTheme(App);