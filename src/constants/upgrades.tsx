import {Typography} from "@material-ui/core";
import React from "react";
import {store} from "../redux/store";
import {decreaseBricks, decreaseMoney} from "../redux/GameSlice";
import magicMiningImg from "../images/upgrades/magicMining.png";
import glovesImg from "../images/upgrades/punchUpg1.png";
import paddedGlovesImg from "../images/upgrades/punchUpg2.png";
import steelPlatedGloves from "../images/upgrades/punchUpg3.png";
import {Dispatch} from "@reduxjs/toolkit";
import {addUpgrade} from "../redux/UpgradeSlice";
import {BuildingKeys} from "./buildings";

export type UpgradeKeys = keyof typeof upgrades;

type Effect = {
    [key in BuildingKeys]?: number;
};

export interface Upgrade {
    isVisible: () => boolean;
    isBuyable: () => boolean;
    buy: (_:Dispatch<any>) => void;
    text: JSX.Element;
    effect: Effect;
    img: string;
}

export const buyUpgrade = (upgrade: UpgradeKeys, dispatch: Dispatch<any>) => {
    if(upgrades[upgrade].isBuyable()) {
        upgrades[upgrade].buy(dispatch);
        dispatch(addUpgrade(upgrade));
    }
}

export const upgrades: {[key: string]: Upgrade} = {
    gloves: {
        isVisible: () => store.getState().buildings.puncher >= 1,
        isBuyable: () => store.getState().game.money >= 100,
        buy: (dispatch) => dispatch(decreaseMoney(100)),
        effect: { puncher: 1.5},
        text: <>
            <Typography color="inherit">Gloves</Typography>
            Hand punches do <b>1</b> more damage.
            Punchers do <b>50%</b> more damage.
            <br/><em>A little padding.</em>
            <br/>Costs <b>100</b> Cash
        </>,
        img: glovesImg
    },
    paddedGloves: {
        isVisible: () => store.getState().buildings.puncher >= 5,
        isBuyable: () => store.getState().game.money >= 400,
        buy: (dispatch) => dispatch(decreaseMoney(400)),
        effect: {puncher: 2},
        text: <>
            <Typography color="inherit">Padded Gloves</Typography>
            Punchers and hand punches do <b>twice</b> as much damage.
            <br/><em>Actually significant padding.</em>
            <br/>Costs <b>400</b> Cash
        </>,
        img: paddedGlovesImg
    },
    steelPlatedGloves: {
        isVisible: () => store.getState().buildings.puncher >= 25,
        isBuyable: () => store.getState().game.money >= 10_000,
        buy: (dispatch) => dispatch(decreaseMoney(10_000)),
        effect: {puncher: 2},
        text: <>
            <Typography color="inherit">Steel Plated Gloves </Typography>
            Punchers and hand punches do <b>twice</b> as much damage.
            <br/><em>A brilliant plan.</em>
            <br/>Costs <b>10,000</b> Cash
        </>,
        img: steelPlatedGloves
    },
    magicMining: {
        isVisible: () => store.getState().game.wall >= 10,
        isBuyable: () => {
            const state = store.getState();
            const bricks = state.game.bricks;
            return bricks >= 10;
        },
        effect: {},
        buy: (dispatch) => dispatch(decreaseBricks(1)),
        text: <>
            <Typography color="inherit">Magic Mining</Typography>
            We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.
            <br/>Costs <b>1</b> Brick
        </>,
        img: magicMiningImg,
    }
}

const effectsAllBuildings = (power: number) => {

}

