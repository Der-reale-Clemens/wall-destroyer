import {Typography} from "@material-ui/core";
import React from "react";
import {store} from "../redux/store";
import {decreaseBricks, decreaseMoney} from "../redux/GameSlice";
import magicMiningImg from "../images/upgrades/magicMining.png";
import paddedGlovesImg from "../images/upgrades/punchUpg1.png";
import {Dispatch} from "@reduxjs/toolkit";
import {addUpgrade} from "../redux/UpgradeSlice";

export interface Upgrade {
    isVisible: () => boolean;
    isBuyable: () => boolean;
    buy: (_:Dispatch<any>) => void;
    text: JSX.Element;
    img: string;
}

export const buyUpgrade = (upgrade: UpgradeKeys, dispatch: Dispatch<any>) => {
    if(upgrades[upgrade].isBuyable()) {
        upgrades[upgrade].buy(dispatch);
        dispatch(addUpgrade(upgrade));
    }
}

export type UpgradeKeys = keyof typeof upgrades;

interface UpgradesType {
    [key: string]: Upgrade;
}

export const upgrades: UpgradesType = {
    paddedGloves: {
        isVisible: () => store.getState().buildings.puncher >= 1,
        isBuyable: () => store.getState().game.money >= 100,
        buy: (dispatch) => dispatch(decreaseMoney(100)),
        text: <>
            <Typography color="inherit">Padded Gloves</Typography>
            Hand punches do <b>1</b> more damage.
            Punchers do <b>50%</b> more damage.
            <br/><em>A little padding.</em>
            <br/>Costs <b>100</b> Cash
        </>,
        img: paddedGlovesImg
    },
    magicMining: {
        isVisible: () => store.getState().game.wall >= 10,
        isBuyable: () => {
            const state = store.getState();
            const bricks = state.game.bricks;
            return bricks >= 10;
        },
        buy: (dispatch) => dispatch(decreaseBricks(1)),
        text: <>
            <Typography color="inherit">Magic Mining</Typography>
            We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.
            <br/>Costs <b>1</b> Brick
        </>,
        img: magicMiningImg,
    }
}




