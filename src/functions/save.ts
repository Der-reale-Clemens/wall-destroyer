import {store} from "../redux/store";
import {version} from "../environment";

export const save = () => {
    const state = store.getState();
    const saveObject = {
        version: version,
        state
    };

    const saveString = JSON.stringify(saveObject);
    localStorage.setItem("save", saveString);
}

export const load = () => {
    const saveString = localStorage.getItem("save");
    if(!saveString)
        return {};
    const saveObject = JSON.parse(saveString);
    if(!saveObject.state){
        console.log("No state");
        console.log(saveObject);
        return {};
    }


    //Object.keys(saveObject.state.stats).forEach(k=> saveObject.state.stats[k] = 0);
    console.log(saveObject);

    return saveObject.state;
}

const emptySave = {
    version: "",
    state: {
        "system": {
            "lastUpdate": 0,
            "format": "standard",
            "theme": "original",
            "notifications": []
        },
        "game": {
            "money": 0,
            "damage": 0,
            "bricks": 0,
            "wall": 0,
            "knowledge": 0,
            "dps": 0,
            "handDamage": 0,
        },
        "buildings": {
            "puncher": 0,
            "clubber": 0,
            "swordsman": 0,
            "gunshooter": 0,
            "grenademan": 0,
            "wreckingBall": 0,
            "bulldozer": 0,
            "airstrikeCaller": 0
        },
        "upgrades": {
            "unlockedUpgrades": [],
            "boughtUpgrades": [],
            "notifications": []
        },
        "achievements": {
            "achievements": [],
            "notifications": []
        },
        "stats": {
            "puncher": 0,
            "clubber": 0,
            "swordsman": 0,
            "gunshooter": 0,
            "grenademan": 0,
            "wreckingBall": 0,
            "bulldozer": 0,
            "airstrikeCaller": 0,
        }
    }
};