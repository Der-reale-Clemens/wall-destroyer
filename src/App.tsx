import React, {FC, useEffect} from "react";
import {AppState} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import {Window} from "./Window";
import {themeSelection} from "./functions/themeSelection";
import {SnackbarProvider} from "notistack";
import {Notifier} from "./components/Notifier";
import {update} from "./functions/update";
import {increaseMoney} from "./redux/GameSlice";
import {addNotification, setLastUpdate} from "./redux/SystemSlice";
import {save} from "./functions/save";
import {NewWindow} from "./newUI/NewWindow";

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
    },[dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addNotification({message:"Game Saved", options: {variant: "info"}}))
            save();
        }, 60000);

        return () => clearInterval(interval);
    },[dispatch])

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={4}>
                <Notifier/>
                <CssBaseline/>
                <NewWindow/>
            </SnackbarProvider>
        </ThemeProvider>
    )
}