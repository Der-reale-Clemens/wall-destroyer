import {store} from "../redux/store";
import {calculateNextBuildingCost} from "../constants";
import {increaseBuilding} from "../redux/BuildingSlice";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../redux/GameSlice";
import {BuildingKeys, buildings} from "../constants/buildings";
import {Dispatch} from "@reduxjs/toolkit";

export const buyBuilding = (name: BuildingKeys, dispatch: Dispatch<any>) => {
    const state = store.getState();

    // @ts-ignore
    if(buildings[name].brickCost !== undefined) {
        return buyWithBricks(name, dispatch);
    }

    // @ts-ignore
    if(buildings[name].fourthWallBrickCost !== undefined) {
        return buyWithFourthWallBricks(name, dispatch);
    }

    const nextCost = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    if(state.game.money >= nextCost) {
        dispatch(increaseBuilding(name));
        dispatch(decreaseMoney(nextCost));
    }
}

const buyWithBricks = (name: BuildingKeys, dispatch: Dispatch<any>) => {
    const state = store.getState();

    const nextCostMoney = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    // @ts-ignore
    const nextCostBricks = calculateNextBuildingCost(state.buildings[name], buildings[name].brickCost);

    if(state.game.money >= nextCostMoney && state.game.bricks >= nextCostBricks) {
        dispatch(increaseBuilding(name));
        dispatch(decreaseMoney(nextCostMoney));
        dispatch(decreaseBricks(nextCostBricks));
    }
}

const buyWithFourthWallBricks = (name: BuildingKeys, dispatch: Dispatch<any>) => {
    const state = store.getState();

    const nextCostMoney = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    // @ts-ignore
    const nextCostFourtWallBricks = calculateNextBuildingCost(state.buildings[name], buildings[name].fourthWallBrickCost);

    if(state.game.money >= nextCostMoney && state.game.fourthWallBricks >= nextCostFourtWallBricks) {
        dispatch(increaseBuilding(name));
        dispatch(decreaseMoney(nextCostMoney));
        dispatch(decreaseFourthWallBricks(nextCostFourtWallBricks));
    }
}