import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BuildingKeys} from "../constants/buildings";

interface BuildingDamage {
    building: BuildingKeys;
    amount: number;
}

const initialState = {
    puncher: 0,
    clubber: 0,
    swordsman: 0,
    gunshooter: 0,
    grenademan: 0,
    wreckingBall: 0,
    bulldozer: 0,
    airstrikeCaller: 0,
     dps: {
         puncherDps: 0,
         clubberDps: 0,
         swordsmanDps: 0,
         gunshooterDps: 0,
         grenademanDps: 0,
         wreckingBallDps: 0,
         bulldozerDps: 0,
         airstrikeCallerDps: 0,
    }
}

const statSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        increaseBuildingDamage: (state, payload: PayloadAction<BuildingDamage>) => {
            state[payload.payload.building] += payload.payload.amount;

            //const a = payload.payload.building+"Dps"
            //@ts-ignore I know what im doing (Maybe)
            //state[payload.payload.building+"Dps"] += payload.payload.amount;
        },
        updateBuildingDps: (state,  payload: PayloadAction<BuildingDamage>) => {
            //@ts-ignore I know what im doing (Maybe)
            state.dps[payload.payload.building+"Dps"] = payload.payload.amount;
        }
    }
})

export const statsReducer = statSlice.reducer;

export const {
    increaseBuildingDamage,
    updateBuildingDps,
} = statSlice.actions;