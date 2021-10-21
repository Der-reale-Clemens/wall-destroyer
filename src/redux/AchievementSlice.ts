import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AchievementKeys, achievements} from "../constants/achievements";
import {simpleArrayEquals} from "../constants";

const initialState = {
    achievements: [] as AchievementKeys[],
    notifications: [] as AchievementKeys[]
}

const achievementSlice = createSlice({
    name: "achievements",
    initialState,
    reducers: {
        //  updateAchievements: (state, {payload: achievements}: PayloadAction<AchievementKeys[]>) => {
        //     if(!simpleArrayEquals(state.achievements, achievements)) {
        //         const newAchievements = achievements.filter(a => !state.achievements.includes(a));
        //         newAchievements.forEach(a => state.notifications.push(a));
        //         state.achievements = achievements;
        //     }
        // },
        setAchievements: (state, {payload: achievements}: PayloadAction<AchievementKeys[]>) => {
            const newAchievements = achievements.filter(a => !state.achievements.includes(a));
            newAchievements.forEach(a => state.notifications.push(a));
            state.achievements = achievements;
        },
        clearNotifications: (state) => {
            state.notifications = [];
        }
    }
});

export const achievementReducer = achievementSlice.reducer;

export const {
    //updateAchievements,
    setAchievements,
    clearNotifications
} = achievementSlice.actions;