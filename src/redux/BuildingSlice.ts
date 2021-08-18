import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BuildingKeys} from "../constants/buildings";

const initialState = {
    puncher: 0,
    clubber: 0,
    swordsman: 0,
    gunshooter: 0,
    grenademan: 0,
    wreckingBall: 0,
    bulldozer: 0,
    airstrikeCaller: 0,
    necromancer: 0,
    titan: 0,
    demon: 0,
}

const buildingSlice = createSlice({
    name: "buildings",
    initialState,
    reducers: {
        increaseBuilding(state, {payload}: PayloadAction<BuildingKeys>) {
            state[payload] += 1;
        }
    }
})

export const buildingReducer = buildingSlice.reducer;

export const {
    increaseBuilding
} = buildingSlice.actions