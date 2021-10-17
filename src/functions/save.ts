import {store} from "../redux/store";
import {version} from "../environment";

export const save = () => {
    const encodedSave = constructSave();
    localStorage.setItem("save", encodedSave);
}

export const importSave = (save: string) => {
    localStorage.setItem("save", save);
    window.location.reload();
}

export const constructSave = () => {
    const state = store.getState();
    const saveObject = {
        version: version,
        state
    };

    const saveString = JSON.stringify(saveObject);
    return btoa(saveString);
}

export const loadFromLocal = () => {
    const saveString = localStorage.getItem("save");
    if(!saveString)
        return {};
    return load(saveString);
}


const load = (saveString: string) => {
    let saveObject;
    try {
        //Succeeds for saves in the old format
        saveObject = JSON.parse(saveString);
    } catch (e) {
        //For saves in the new format
        try {
            saveString = atob(saveString);
            saveObject = JSON.parse(saveString);
        } catch(e) {
            //For invalid new saves
            console.error("Save data is corrupted. Proceeding with new save");
            return {};
        }
    }


    if(saveObject.version === "0.12") {
        saveObject = convertTo013(saveObject);
    }

    return saveObject.state;
}


const convertTo013 = (saveObject: any) => {
    saveObject.state.system.seenStories = []
    return saveObject;
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            "dps": {
                "puncherDps": 0,
                "clubberDps": 0,
                "swordsmanDps": 0,
                "gunshooterDps": 0,
                "grenademanDps": 0,
                "wreckingBallDps": 0,
                "bulldozerDps": 0,
                "airstrikeCallerDps": 0,
            }
        }
    }
};