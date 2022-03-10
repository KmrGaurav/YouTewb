import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';


const themeLight = createMuiTheme({
    palette: {
        primary: {
            main: grey[50]
        },
        text: {
            primary: grey[900]
        },
        background: {
            paper: grey[50]
        }
    }
});

const themeDark = createMuiTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        text: {
            primary: grey[50]
        },
        background: {
            paper: grey[900]
        }
    }
});

const withTheme = (Component) => {
    return (propsOfWrappedComponent) => {
        const [darkMode, setDarkMode] = React.useState(false);

        return (
            <ThemeProvider theme={darkMode ? themeDark : themeLight}>
                <CssBaseline />
                <Component {...propsOfWrappedComponent} darkMode={darkMode} setDarkMode={setDarkMode} />
            </ThemeProvider>
        );
    };
};

export default withTheme;