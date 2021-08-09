import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    lastUpdate: 0,
    format: "standard",
    theme: "original",
    notifications: [] as Notification[],
};

interface Notification {
    message: string;
    options?: any;
}

export const systemSlice = createSlice({
        name: "system",
        initialState,
        reducers: {
            setFormat: (state, {payload: format}: PayloadAction<string>) => {
                state.format = format;
            },
            setLastUpdate: (state, {payload: time}: PayloadAction<number>) => {
                state.lastUpdate = time;
            },
            setTheme: (state, {payload: theme}: PayloadAction<string>) => {
                state.theme = theme;
            },
            clearNotifications: (state) => {
                state.notifications = []
            },
            addNotification: (state, {payload}: PayloadAction<Notification>) => {
                state.notifications.push(payload);
            },
        }
    })
;

export const systemReducer = systemSlice.reducer;

export const {
    setLastUpdate,
    setFormat,
    setTheme,
    clearNotifications,
    addNotification,
} = systemSlice.actions