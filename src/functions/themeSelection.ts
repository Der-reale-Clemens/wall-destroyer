import { createTheme, Theme} from "@mui/material";

export const themeSelection = (name: string): Theme => {
    const themeLight = createTheme(lightThemeObject);
    const themeDark = createTheme(darkThemeObject);
    const themeOriginal = createTheme(originalThemeObject);
    switch (name) {
        case "light": return themeLight;
        case "dark": return themeDark;
        case "original": return themeOriginal;
        default: return themeOriginal;
    }
}

const lightThemeObject = {
    palette: {
        type: "light",
        background: {
            default: '#fafafa',
        },
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 12,
    }
}

const darkThemeObject = {
    palette: {
        type: "dark",
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
        },
        background: {
            default: '#303030',
            paper: "#424242"
        },
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 12,
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
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 12,
    }
}