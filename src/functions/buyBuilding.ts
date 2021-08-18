import {store} from "../redux/store";
import {calculateNextBuildingCost} from "../constants";
import {increaseBuilding} from "../redux/BuildingSlice";
import {decreaseBricks, decreaseMoney} from "../redux/GameSlice";
import {BuildingKeys, buildings} from "../constants/buildings";

export const buyBuilding = (name: BuildingKeys) => {
    const state = store.getState();

    // @ts-ignore
    if(buildings[name].brickCost !== undefined) {
        return buyWithBricks(name);
    }

    const nextCost = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    if(state.game.money >= nextCost) {
        return (dispatch: any) => {
            dispatch(increaseBuilding(name));
            dispatch(decreaseMoney(nextCost));
        }
    }
    return (dispatch: any) => {};
}

const buyWithBricks = (name: BuildingKeys) => {
    const state = store.getState();

    const nextCostMoney = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    // @ts-ignore
    const nextCostBricks = calculateNextBuildingCost(state.buildings[name], buildings[name].brickCost);

    if(state.game.money >= nextCostMoney && state.game.bricks >= nextCostBricks) {
        return (dispatch: any) => {
            dispatch(increaseBuilding(name));
            dispatch(decreaseMoney(nextCostMoney));
            dispatch(decreaseBricks(nextCostBricks));
        }
    }
    return (dispatch: any) => {};
}