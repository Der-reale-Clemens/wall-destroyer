import {store} from "../redux/store";
import {setLastUpdate} from "../redux/SystemSlice";
import {BuildingKeys, buildings} from "../constants/buildings";

export const update = (dispatch: any) => {
    const state = store.getState();
    const currentTime = new Date().getTime();
    const oldTime = state.system.lastUpdate;
    const deltaTime = currentTime - oldTime;
    dispatch(setLastUpdate(currentTime));

    const calculateBuilding = (name: BuildingKeys) =>
        state.buildings[name]*buildings[name].power*(deltaTime/1000);

    let damage = 0;

    for(const key in buildings) {
        //@ts-ignore no idea how to make this typesafe, impossible to iterate over BuildingKeys
        damage += calculateBuilding(key);
    }

    return damage;
}