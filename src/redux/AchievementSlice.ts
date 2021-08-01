import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AchievementKeys} from "../constants/achievements";
import {simpleArrayEquals} from "../constants";

const initialState = {
    achievements: [] as AchievementKeys[]
}

const achievementSlice = createSlice({
    name: "achievements",
    initialState,
    reducers: {
        updateAchievements: (state, {payload: achievements}: PayloadAction<AchievementKeys[]>) => {
            if(!simpleArrayEquals(state.achievements, achievements)) {
                state.achievements = achievements;
            }
        }
    }
});

export const achievementReducer = achievementSlice.reducer;

export const {
    updateAchievements
} = achievementSlice.actions;