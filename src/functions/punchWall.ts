import {Dispatch} from "@reduxjs/toolkit";
import {store} from "../redux/store";
import {upgrades} from "../constants/upgrades";
import {increaseHandDamage, increaseMoney} from "../redux/GameSlice";

export const punchWall = (dispatch: Dispatch<any>) => {
    const state = store.getState();

    let damage = 1;

    //Cause Gloves add damage instead of multiplying
    if(state.upgrades.boughtUpgrades.includes("gloves"))
        damage++;

    state.upgrades.boughtUpgrades.forEach((u) => {
        const handEffect = upgrades[u].effect.hand;
        if(handEffect) {
            damage *= handEffect;
        }
    })

    dispatch(increaseMoney(damage));
    dispatch(increaseHandDamage(damage));
}