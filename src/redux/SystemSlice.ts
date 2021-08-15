import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StoryKeys} from "../constants/stories";

const initialState = {
    lastUpdate: 0,
    format: "standard",
    theme: "original",
    notifications: [] as Notification[],
    seenStories: [] as StoryKeys[],
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
            addSeenStories: (state, {payload}: PayloadAction<StoryKeys[]>) => {
                const changed = !payload.every(s => state.seenStories.includes(s));
                if(changed) {
                    console.log("changed:" + payload.toString())
                    state.seenStories.push(...payload);
                }
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
    addSeenStories,
} = systemSlice.actions