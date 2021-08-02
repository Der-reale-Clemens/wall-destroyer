import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    lastUpdate:0,
    format: "standard"
};

export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers : {
        setFormat(state, {payload: format}: PayloadAction<string>) {
            state.format = format;
        },
        setLastUpdate(state, {payload: time}: PayloadAction<number>) {
            state.lastUpdate = time;
        }
    }
});

export const systemReducer = systemSlice.reducer;

export const {
    setLastUpdate,
    setFormat
} = systemSlice.actions