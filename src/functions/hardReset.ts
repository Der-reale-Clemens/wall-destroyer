import {version} from "../environment";

export const hardReset = () => {
    const overrideObject = {version: version}
    const overrideString = JSON.stringify(overrideObject)
    localStorage.setItem("save", overrideString);
    window.location.reload();
}