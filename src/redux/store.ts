import {configureStore} from "@reduxjs/toolkit";
import {gameReducer} from "./GameSlice";
import {pokemonApi} from "../services/pokemon";
import {buildingReducer} from "./BuildingSlice";
import {systemReducer} from "./SystemSlice";

export type AppState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer:{
        game: gameReducer,
        buildings: buildingReducer,
        system: systemReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware =>
        getDefaultMiddleware().concat(pokemonApi.middleware))
});

