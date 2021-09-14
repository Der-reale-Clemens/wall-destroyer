import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BuildingKeys} from "../constants/buildings";

interface BuildingDamage {
    building: BuildingKeys|"hand";
    amount: number;
}

const initialState = {
    hand: 0,
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
    realityCompromiser: 0,
    blackObliterator: 0,
    brickFactory: 0,
    fourthWallbricks: 0,
    dps: {
        handDps: 0,
        puncherDps: 0,
        clubberDps: 0,
        swordsmanDps: 0,
        gunshooterDps: 0,
        grenademanDps: 0,
        wreckingBallDps: 0,
        bulldozerDps: 0,
        airstrikeCallerDps: 0,
        necromancerDps: 0,
        titanDps: 0,
        demonDps: 0,
        realityCompromiserDps: 0,
        blackObliteratorDps: 0,
        brickFactoryDps: 0,
        fourthWallbricksDps: 0,
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
        updateBuildingDps: (state, payload: PayloadAction<BuildingDamage>) => {
            //@ts-ignore I know what im doing (Maybe)
            state.dps[payload.payload.building + "Dps"] = payload.payload.amount;
        }
    }
})

export const statsReducer = statSlice.reducer;

export const {
    increaseBuildingDamage,
    updateBuildingDps,
} = statSlice.actions;