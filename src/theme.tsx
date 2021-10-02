import React from "react";
import {createTheme, ThemeOptions, ThemeProvider} from "@material-ui/core";
import { useAppStore } from "./store";


const FRONT_COLORS = {
    primary: {
        main: '#64B5F6',
        contrastText: '#000000',
    },
    secondary: {
        main: '#EF9A9A',
        contrastText: '#000000',
    },
};

    const LIGHT_THEME: ThemeOptions = {
    palette: {
        type: 'light',
        ...FRONT_COLORS,
    },
};
    const DARK_THEME: ThemeOptions = {
    palette: {
        type: 'dark',
        ...FRONT_COLORS,
    },
};


const AppThemeProvider: React.FunctionComponent = ({children}) => {
    const [state] = useAppStore();

    const theme =  state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export { AppThemeProvider}
