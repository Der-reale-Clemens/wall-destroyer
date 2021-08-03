import {store} from "../redux/store";
import {setLastUpdate} from "../redux/SystemSlice";
import {BuildingKeys, buildings} from "../constants/buildings";
import {Dispatch} from "@reduxjs/toolkit";
import {updateUnlockedUpgrades} from "../redux/UpgradeSlice";
import {upgrades} from "../constants/upgrades";
import {achievements} from "../constants/achievements";
import {updateAchievements} from "../redux/AchievementSlice";
import {updateDps} from "../redux/GameSlice";

export const update = (dispatch: Dispatch<any>) => {
    const state = store.getState();
    //Calculate passed time
    const currentTime = new Date().getTime();
    const oldTime = state.system.lastUpdate;
    const deltaTime = currentTime - oldTime;
    dispatch(setLastUpdate(currentTime));

    //Calculate building damage
    const calculateBuilding = (name: BuildingKeys) =>
        state.buildings[name]*buildings[name].power*(deltaTime/1000);

    const damages = {
        puncher: 0,
        clubber: 0,
        swordsman: 0,
        gunshooter: 0,
        grenademan: 0,
        wreckingBall: 0,
        bulldozer: 0,
        airstrikeCaller: 0,
    }

    //@ts-ignore no idea how to make this typesafe, impossible to iterate over BuildingKeys
    Object.keys(buildings).forEach(k => damages[k] = calculateBuilding(k));

    state.upgrades.boughtUpgrades.forEach((u) => {
        const effects = upgrades[u].effect;
        for(const effectKey in effects) {
            //@ts-ignore
            damages[effectKey] *= effects[effectKey];
        }
    })

    let overallDamage = Object.values(damages).reduce((sum, d) => sum+d);

    //Set Dps
    dispatch(updateDps(overallDamage*(1000/deltaTime)))

    //Handle displayed upgrades
    const boughtUpgrades = state.upgrades.boughtUpgrades
    const visible = Object.keys(upgrades)
        .filter(u => upgrades[u].isVisible())
        .filter(u => !boughtUpgrades.includes(u));
    dispatch(updateUnlockedUpgrades(visible));

    //Handle achievements
    const wonAchievements = Object.keys(achievements)
        .filter(a => achievements[a].isUnlocked())
    dispatch(updateAchievements(wonAchievements));



    return overallDamage;
}