import {configureStore} from "@reduxjs/toolkit";
import {gameReducer} from "./GameSlice";
import {buildingReducer} from "./BuildingSlice";
import {systemReducer} from "./SystemSlice";
import {upgradeReducer} from "./UpgradeSlice";
import {achievementReducer} from "./AchievementSlice";
import {load} from "../functions/save";

export type AppState = ReturnType<typeof store.getState>

const preloadedState = load();

export const store = configureStore({
    reducer: {
        system: systemReducer,
        game: gameReducer,
        buildings: buildingReducer,
        upgrades: upgradeReducer,
        achievements: achievementReducer,
    },
    preloadedState
});

