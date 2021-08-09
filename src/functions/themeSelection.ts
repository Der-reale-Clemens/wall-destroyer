import {createTheme, Theme} from "@material-ui/core";

export const themeSelection = (name: string): Theme => {
    const themeLight = createTheme({palette: {type: "light"}});
    const themeDark = createTheme({palette: {type: "dark"}});
    const themeOriginal = createTheme(originalThemeObject);
    switch (name) {
        case "light": return themeLight;
        case "dark": return themeDark;
        case "original": return themeOriginal;
        default: return themeOriginal;
    }
}

const originalThemeObject = {
    palette: {
        primary: {
            main:'#304846',
        },
        secondary: {
            main: '#4aa897'
        },
        background: {
            default: '#4aa897',
            paper: '#92baaf',
        },
        divider: '#304846',
    }
}