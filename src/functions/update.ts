import {store} from "../redux/store";
import {addSeenStories, setLastUpdate} from "../redux/SystemSlice";
import {BuildingKeys, buildings} from "../constants/buildings";
import {Dispatch} from "@reduxjs/toolkit";
import {setUnlockedUpgrades} from "../redux/UpgradeSlice";
import {upgrades} from "../constants/upgrades";
import {achievements} from "../constants/achievements";
import {setAchievements} from "../redux/AchievementSlice";
import {increaseBricks, increaseFourthWallBricks, updateDps} from "../redux/GameSlice";
import {increaseBuildingDamage, updateBuildingDps} from "../redux/StatSlice";
import {stories} from "../constants/stories";
import {simpleArrayEquals} from "../constants";

export const update = (dispatch: Dispatch<any>) => {
    const state = store.getState();
    //Calculate passed time
    const currentTime = new Date().getTime();
    const oldTime = state.system.lastUpdate;
    const deltaTime = currentTime - oldTime;
    dispatch(setLastUpdate(currentTime));

    const damages = calculateDamages(deltaTime);

    //@ts-ignore - Update stats
    Object.keys(damages).filter(d => d !== "hand").forEach(k => dispatch(increaseBuildingDamage({building: k, amount: damages[k]})));
    //@ts-ignore
    Object.keys(damages).filter(d => d !== "hand").forEach(k => dispatch(updateBuildingDps({building: k, amount: damages[k]*(1000/deltaTime)})));

    dispatch(updateBuildingDps({building: "hand", amount: damages.hand}));

    let overallDamage = Object.keys(damages)
        .filter(d => d !== "hand" && d !== "brickFactory" && d !== "fourthWallBricks")
        //@ts-ignore
        .map(d => damages[d])
        .reduce((sum, d) => sum+d) + 10;

    //Set Dps
    dispatch(updateDps(overallDamage*(1000/deltaTime)));

    //Update Bricks
    dispatch(increaseBricks(damages.brickFactory));

    //Update 4th Wall Bricks
    dispatch(increaseFourthWallBricks(damages.fourthWallBricks));


    //Handle displayed upgrades
    // const boughtUpgrades = state.upgrades.boughtUpgrades
    // const visible = Object.keys(upgrades)
    //     .filter(u => upgrades[u].isVisible())
    //     .filter(u => !boughtUpgrades.includes(u));
    // dispatch(updateUnlockedUpgrades(visible));
    updateUnlockedUpgrades(dispatch);

    //Handle achievements
    //const wonAchievements = Object.keys(achievements)
    //    .filter(a => achievements[a].isUnlocked())
    //dispatch(updateAchievements(wonAchievements));
    updateAchievements(dispatch);


    //Handle stories
    const newStories = Object.keys(stories)
        .filter(s => !state.system.seenStories.includes(s))
        .filter(s => stories[s].trigger());
    dispatch(addSeenStories(newStories))


    return overallDamage;
}

const updateAchievements = (dispatch: Dispatch<any>) => {
    const state = store.getState();

    const wonAchievements = Object.keys(achievements)
        .filter(a => achievements[a].isUnlocked());

    //Update achievements if a new one has been earned
    if(!simpleArrayEquals(state.achievements.achievements, wonAchievements)) {
        dispatch(setAchievements(wonAchievements))
    }
}

const updateUnlockedUpgrades = (dispatch: Dispatch<any>) => {
    const state = store.getState();

    const boughtUpgrades = state.upgrades.boughtUpgrades;
    const unlockedUpgrades = Object.keys(upgrades)
        .filter(u => upgrades[u].isVisible())
        .filter(u => !boughtUpgrades.includes(u));

    //Update upgrades if a new one has been unlocked
    if(!simpleArrayEquals(state.upgrades.unlockedUpgrades, unlockedUpgrades)) {
        dispatch(setUnlockedUpgrades(unlockedUpgrades));
    }

}

const calculateDamages = (deltaTime: number) => {
    const state = store.getState();

    //Calculate building damage
    const calculateBuilding = (name: BuildingKeys) =>
        state.buildings[name]*buildings[name].power*(deltaTime/1000);

    const productions = {
        hand: 1,
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
        fourthWallBricks: 0,
    }

    //@ts-ignore no idea how to make this typesafe, impossible to iterate over BuildingKeys
    //Calculates the normal productions
    Object.keys(buildings).forEach(k => productions[k] = calculateBuilding(k));

    //Cause Gloves add damage instead of multiplying
    if(state.upgrades.boughtUpgrades.includes("gloves"))
        productions.hand++;


    //Alright so basically we go through all bought upgrades and then for every building that gets effected by the upgrade
    //we multiply the damage by the effect.
    //The fun bit is that effects can either be numbers for static multipliers or thunks in case they depend on other factors
    //The reason they're not all thunks is that numbers are a fair bit more efficient (i think) and I only realized
    //in the middle of development that thunks are needed for dynamic multipliers
    state.upgrades.boughtUpgrades.forEach((u) => {
        const effects = upgrades[u].effect;
        for(const effectKey in effects) {
            // @ts-ignore
            const effect = effects[effectKey];

            //@ts-ignore
            productions[effectKey] *= (effect instanceof Function) ? effect() : effect;
        }
    })

    //calculate 4th Wall Brick production
    productions.fourthWallBricks = (productions.realityCompromiser/buildings.realityCompromiser.power)*0.1;

    return productions;
}