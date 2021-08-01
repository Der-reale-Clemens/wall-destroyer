import {configureStore} from "@reduxjs/toolkit";
import {gameReducer} from "./GameSlice";
import {buildingReducer} from "./BuildingSlice";
import {systemReducer} from "./SystemSlice";
import {upgradeReducer} from "./UpgradeSlice";

export type AppState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        system: systemReducer,
        game: gameReducer,
        buildings: buildingReducer,
        upgrades: upgradeReducer,
    }
});

