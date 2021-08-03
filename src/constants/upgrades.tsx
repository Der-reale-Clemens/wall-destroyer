import {Typography} from "@material-ui/core";
import React from "react";
import {store} from "../redux/store";
import {decreaseBricks, decreaseMoney} from "../redux/GameSlice";
import magicMiningImg from "../images/upgrades/magicMining.png";
import glovesImg from "../images/upgrades/punchUpg1.png";
import paddedGlovesImg from "../images/upgrades/punchUpg2.png";
import steelPlatedGlovesImg from "../images/upgrades/punchUpg3.png";
import brassKnucklesImg from "../images/upgrades/punchUpg4.png";
import titaniumKnucklesImg from "../images/upgrades/punchUpg5.png";
import diamonKnucklesImg from "../images/upgrades/punchUpg6.png";
import adamantiumKnucklesImg from "../images/upgrades/punchUpg7.png";
import redactedGlovesImg from "../images/upgrades/punchUpg8.png";
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
            <Typography color="inherit">Steel Plated Gloves</Typography>
            Punchers and hand punches do <b>twice</b> as much damage.
            <br/><em>A brilliant plan.</em>
            <br/>Costs <b>10,000</b> Cash
        </>,
        img: steelPlatedGlovesImg
    },
    brassKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 50,
        isBuyable: () => store.getState().game.money >= 100_000,
        buy: (dispatch) => dispatch(decreaseMoney(100_000)),
        effect: {puncher: 2},
        text: <>
            <Typography color="inherit">Brass Knuckles</Typography>
            Punchers and hand punches do <b>twice</b> as much damage.
            <br/><i>That's on top of the steel plated gloves. Hell yes.</i>
            <br/>Costs <b>100,000</b> Cash
        </>,
        img: brassKnucklesImg
    },
    titaniumKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 75,
        isBuyable: () => store.getState().game.money >= 1_000_000,
        buy: (dispatch) => dispatch(decreaseMoney(1_000_000)),
        effect: {puncher: 2},
        text: <>
            <Typography color="inherit">Titanium Knuckles</Typography>
            Punchers and hand punches do <b>twice</b> as much damage.
            <br/><i>Clearly better, because anything made of titanium does way more damage.</i>
            <br/>Costs <b>1,000,000</b> Cash
        </>,
        img: titaniumKnucklesImg
    },
    diamondKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 100,
        isBuyable: () => store.getState().game.money >= 2e7,
        buy: (dispatch) => dispatch(decreaseMoney(2e7)),
        effect: {puncher: 3},
        text: <>
            <Typography color="inherit">Diamond Knuckles</Typography>
            Punchers do <b>three times</b> as much damage.
            <br/>Hand punches do <b>twice</b> as much damage.
            <br/><i>The only real substance that can make things do more damage than titanium.</i>
            <br/>Costs <b>20,000,000</b> Cash
        </>,
        img: diamonKnucklesImg
    },
    adamantiumKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 150,
        isBuyable: () => store.getState().game.money >= 2e9,
        buy: (dispatch) => dispatch(decreaseMoney(2e9)),
        effect: {puncher: 3},
        text: <>
            <Typography color="inherit">Adamantium Knuckles</Typography>
            Punchers do <b>three times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>Wolverine claws optional.</i>
            <br/>Costs <b>2,000,000,000</b> Cash
        </>,
        img: adamantiumKnucklesImg
    },
    redactedGloves: {
        isVisible: () => store.getState().buildings.puncher >= 200,
        isBuyable: () => store.getState().game.money >= 2e11,
        buy: (dispatch) => dispatch(decreaseMoney(2e11)),
        effect: {puncher: 4},
        text: <>
            <Typography color="inherit">[REDACTED] Gloves</Typography>
            Punchers do <b>four times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>We brought back an old experiment to make gloves made out of [REDACTED].
            <br/>CHIEF OF R&D EDIT: that's top secret, you idiot.</i>
            <br/>Costs <b>200,000,000,000</b> Cash
        </>,
        img: redactedGlovesImg
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

