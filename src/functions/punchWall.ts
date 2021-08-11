import {Dispatch} from "@reduxjs/toolkit";
import {store} from "../redux/store";
import {upgrades} from "../constants/upgrades";
import {increaseHandDamage, increaseMoney} from "../redux/GameSlice";
import {prettify} from "../constants";

export const punchWall = (dispatch: Dispatch<any>) => {
    const state = store.getState();

    let damage = 1;

    //Cause Gloves add damage instead of multiplying
    if(state.upgrades.boughtUpgrades.includes("gloves"))
        damage++;

    state.upgrades.boughtUpgrades.forEach((u) => {
        const handEffect = upgrades[u].effect.hand;
        if(handEffect) {
            //Look at the update function as for why this is a thing
            damage *= (handEffect instanceof Function) ? handEffect() : handEffect;
        }
    })

    //console.log(prettify(damage));

    dispatch(increaseMoney(damage));
    dispatch(increaseHandDamage(damage));
}