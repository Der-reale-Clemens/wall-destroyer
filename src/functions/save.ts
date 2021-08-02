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

    return saveObject.state;
}