import {Dispatch} from "@reduxjs/toolkit";
import {store} from "../redux/store";
import {increaseMoney} from "../redux/GameSlice";
import {increaseBuildingDamage} from "../redux/StatSlice";

export const punchWall = (dispatch: Dispatch<any>) => {
    const state = store.getState();

    dispatch(increaseMoney(state.stats.dps.handDps));
    dispatch(increaseBuildingDamage({building: "hand", amount: state.stats.dps.handDps}));
}