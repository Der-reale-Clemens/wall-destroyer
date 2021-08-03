import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {walls} from "../constants/walls";

const initialState = {
    money: 0,
    damage: 0,
    bricks: 0,
    wall: 0,
    knowledge: 0,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        increaseMoney: (state, {payload: amount}: PayloadAction<number>) => {
            state.damage += amount;
            state.money += amount;
        },
        decreaseMoney: (state, {payload: amount}: PayloadAction<number>) => {
            state.money -= amount;
        },
        decreaseDamage: (state, {payload: amount}: PayloadAction<number>) => {
            state.damage -= amount;
        },
        increaseKnowledge: (state, {payload: amount}: PayloadAction<number>) => {
            state.knowledge += amount;
        },
        increaseBricks: (state, {payload: amount}: PayloadAction<number>) => {
            state.bricks += amount;
        },
        decreaseBricks: (state, {payload: amount}: PayloadAction<number>) => {
            state.bricks -= amount;
        },
        tryDestroyWall: (state) => {
            const cost = walls[state.wall].cost;
            if(state.damage >= cost) {
                state.money += cost/4;
                state.knowledge += walls[state.wall].knowledge;
                state.bricks += walls[state.wall].bricks;
                state.wall++;
            }
        },
    }
})

export const gameReducer = gameSlice.reducer;

export const {
    increaseMoney,
    decreaseMoney,
    decreaseBricks,
    tryDestroyWall,
} = gameSlice.actions