import {store} from "../redux/store";
import {calculateNextBuildingCost} from "../constants";
import {increaseBuilding} from "../redux/BuildingSlice";
import {decreaseMoney} from "../redux/GameSlice";
import {BuildingKeys, buildings} from "../constants/buildings";

export const buyBuilding = (name: BuildingKeys) => {
    const state = store.getState()

    const nextCost = calculateNextBuildingCost(state.buildings[name], buildings[name].cost);
    //if(state.game.money >= nextCost) {
        return (dispatch: any) => {
            dispatch(increaseBuilding(name));
            //dispatch(decreaseMoney(nextCost));
        }
    //}
    //return (dispatch: any) => {};
}