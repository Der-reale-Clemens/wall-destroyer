import React, {FC, useEffect} from "react";
import {AppState} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import { CssBaseline, ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Window} from "./Window";
import {themeSelection} from "./functions/themeSelection";
import {SnackbarProvider} from "notistack";
import {Notifier} from "./components/Notifier";
import {update} from "./functions/update";
import {increaseMoney} from "./redux/GameSlice";
import {addNotification, setLastUpdate} from "./redux/SystemSlice";
import {save} from "./functions/save";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NewWindow} from "./newUI/NewWindow";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export const App: FC = () => {
    const dispatch = useDispatch();
    const themeName = useSelector((state: AppState) => state.system.theme);
    const theme = themeSelection(themeName);

    useEffect(() => {
        const interval = setInterval(() => {
            const damage = update(dispatch);
            dispatch(increaseMoney(damage));
        }, 100);

        //set time for first load
        dispatch(setLastUpdate(new Date().getTime()));

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addNotification({message:"Game Saved", options: {variant: "info"}}))
            save();
        }, 60000);

        return () => clearInterval(interval);
    })

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={4}>
                    <Notifier/>
                    <CssBaseline/>
                    <NewWindow/>
                </SnackbarProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}