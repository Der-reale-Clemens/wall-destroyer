import React, {FC} from "react";
import {AppState} from "./redux/store";
import {useSelector} from "react-redux";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import {Window} from "./Window";
import {themeSelection} from "./functions/themeSelection";
import {SnackbarProvider} from "notistack";
import {Notifier} from "./components/Notifier";

export const App: FC = () => {
    const themeName = useSelector((state: AppState) => state.system.theme);
    const theme = themeSelection(themeName);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={4}>
                <Notifier/>
                <CssBaseline/>
                <Window/>
            </SnackbarProvider>
        </ThemeProvider>
    )
}