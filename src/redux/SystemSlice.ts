import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    lastUpdate:0
};

export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers : {
        setLastUpdate(state, {payload: time}: PayloadAction<number>) {
            state.lastUpdate = time;
        }
    }
});

export const systemReducer = systemSlice.reducer;

export const {
    setLastUpdate
} = systemSlice.actions