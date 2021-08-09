import {UpgradeKeys} from "../constants/upgrades";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {simpleArrayEquals} from "../constants";

const initialState = {
    boughtUpgrades: [] as UpgradeKeys[],
    unlockedUpgrades: [] as UpgradeKeys[],
    notifications: [] as UpgradeKeys[],
}

const upgradeSlice = createSlice({
    name: "upgrades",
    initialState,
    reducers: {
        addUpgrade: (state, {payload: upgrade}: PayloadAction<UpgradeKeys>) => {
            state.boughtUpgrades.push(upgrade);
        },
        updateUnlockedUpgrades: (state, {payload: unlockedUpgrades}: PayloadAction<UpgradeKeys[]>) => {
            if(!simpleArrayEquals(state.unlockedUpgrades, unlockedUpgrades)) {
                const newUpgrades = unlockedUpgrades.filter(a => !state.unlockedUpgrades.includes(a));
                newUpgrades.forEach(a => state.notifications.push(a));
                state.unlockedUpgrades = unlockedUpgrades;
            }
        },
        clearNotifications: (state) => {
            state.notifications = [];
        }
    }
});

export const upgradeReducer = upgradeSlice.reducer;

export const {
    addUpgrade,
    updateUnlockedUpgrades,
    clearNotifications,
} = upgradeSlice.actions;