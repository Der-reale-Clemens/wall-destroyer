import React, {FC} from "react";
import {AppState} from "./redux/store";
import {useSelector} from "react-redux";
import { CssBaseline, ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import {Window} from "./Window";
import {themeSelection} from "./functions/themeSelection";
import {SnackbarProvider} from "notistack";
import {Notifier} from "./components/Notifier";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const App: FC = () => {
    const themeName = useSelector((state: AppState) => state.system.theme);
    const theme = themeSelection(themeName);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={4}>
                    <Notifier/>
                    <CssBaseline/>
                    <Window/>
                </SnackbarProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}