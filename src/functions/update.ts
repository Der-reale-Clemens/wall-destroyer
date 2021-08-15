import {store} from "../redux/store";
import {addSeenStories, setLastUpdate} from "../redux/SystemSlice";
import {BuildingKeys, buildings} from "../constants/buildings";
import {Dispatch} from "@reduxjs/toolkit";
import {updateUnlockedUpgrades} from "../redux/UpgradeSlice";
import {upgrades} from "../constants/upgrades";
import {achievements} from "../constants/achievements";
import {updateAchievements} from "../redux/AchievementSlice";
import {updateDps} from "../redux/GameSlice";
import {increaseBuildingDamage, updateBuildingDps} from "../redux/StatSlice";
import {stories} from "../constants/stories";

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

    //Alright so basically we go through all bought upgrades and then for every building that gets effected by the upgrade
    //we multiply the damage by the effect.
    //But we dont do hand upgrades here so the get ignored
    //The fun bit is that effects can either be numbers for static multipliers or thunks in case they depend on other factors
    //The reason they're not all thunks is that numbers are a fair bit more efficient (i think) and I only realized
    //in the middle of development that thunks are needed for dynamic multipliers
    state.upgrades.boughtUpgrades.forEach((u) => {
        const effects = upgrades[u].effect;
        for(const effectKey in effects) {

            if(effectKey === "hand") {
                continue;
            }
            // @ts-ignore
            const effect = effects[effectKey];

            //@ts-ignore
            damages[effectKey] *= (effect instanceof Function) ? effect() : effect;
        }
    })

    //@ts-ignore - Update stats
    Object.keys(damages).forEach(k => dispatch(increaseBuildingDamage({building: k, amount: damages[k]})));
    //@ts-ignore
    Object.keys(damages).forEach(k => dispatch(updateBuildingDps({building: k, amount: damages[k]*(1000/deltaTime)})));

    let overallDamage = Object.values(damages).reduce((sum, d) => sum+d);

    //Set Dps
    dispatch(updateDps(overallDamage*(1000/deltaTime)));

    //const a = Object.keys(upgrades).filter(u => upgrades[u] === undefined);
    //console.log(a);
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


    //Handle stories
    const newStories = Object.keys(stories)
        .filter(s => !state.system.seenStories.includes(s))
        .filter(s => stories[s].trigger());
    dispatch(addSeenStories(newStories))


    return overallDamage;
}