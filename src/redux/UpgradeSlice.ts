import {UpgradeKeys, upgrades} from "../constants/upgrades";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {simpleArrayEquals} from "../constants";

const initialState = {
    boughtUpgrades: [] as UpgradeKeys[],
    unlockedUpgrades: [] as UpgradeKeys[],
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
                state.unlockedUpgrades = unlockedUpgrades;
            }
        },
    }
});

export const upgradeReducer = upgradeSlice.reducer;

export const {
    addUpgrade,
    updateUnlockedUpgrades
} = upgradeSlice.actions;