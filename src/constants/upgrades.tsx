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
import {prettify} from "../constants";

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
            <br/>Costs <b>{prettify(100)}</b> Cash
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
            <br/>Costs <b>{prettify(400)}</b> Cash
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
            <br/>Costs <b>{prettify(10_000)}</b> Cash
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
            <br/>Costs <b>{prettify(100_000)}</b> Cash
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
            <br/>Costs <b>{prettify(1_000_000)}</b> Cash
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
            <br/>Costs <b>{prettify(2e7)}</b> Cash
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
            <br/>Costs <b>{prettify(2e9)}</b> Cash
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
            <br/>Costs <b>{prettify(2e11)}</b> Cash
        </>,
        img: redactedGlovesImg
    },
    antimatterGauntlets: {
        isVisible: () => store.getState().buildings.puncher >= 300,
        isBuyable: () => store.getState().game.money >= 2e15,
        buy: (dispatch) => dispatch(decreaseMoney(2e15)),
        effect: {puncher: 5},
        text: <>
            <Typography color="inherit">Antimatter Gauntlets</Typography>
            Punchers do <b>five times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>The RUC is not responsible for any deaths/implosions caused by the Antimatter Gauntlets(TM).</i>
            <br/>Costs <b>{prettify(2e15)}</b> Cash
        </>,
        img: "http://i.imgur.com/GfoMaz4.png"
    },
    betterClubs:{
        isVisible: () => store.getState().buildings.clubber >= 1,
        isBuyable: () => store.getState().game.money >= 7.5e+2,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+2)),
        effect: {clubber: 1.5},
        text: <>
            <Typography color="inherit">Better Clubs</Typography>
            Clubbers do <b>50%</b> more damage.
            <br/><i>Simply feels better to hold.</i>
            <br/>Costs <b>{prettify(750)}</b> Cash
        </>,
        img: "http://i.imgur.com/k6W8MW9.png"
    },
    ironClubs:{
        isVisible: () => store.getState().buildings.clubber >= 5,
        isBuyable: () => store.getState().game.money >= 7.5e+3,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+3)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Iron Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Wood is old school.</i>
            <br/>Costs <b>{prettify(7.5e3)}</b> Cash
        </>,
        img: "http://i.imgur.com/LRhDWi7.png"
    },
    titaniumClubs:{
        isVisible: () => store.getState().buildings.clubber >= 25,
        isBuyable: () => store.getState().game.money >= 7.5e+4,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+4)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Titanium Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Heavier, but actually does damage.</i>
            <br/>Costs <b>{prettify(7.5e4)}</b> Cash
        </>,
        img: "http://i.imgur.com/tIHqvj8.png"
    },
    spikedClubs:{
        isVisible: () => store.getState().buildings.clubber >= 50,
        isBuyable: () => store.getState().game.money >= 7.5e+5,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+5)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Spiked Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Titanium spikes, of course.</i>
            <br/>Costs <b>{prettify(7.5e5)}</b> Cash
        </>,
        img: "http://i.imgur.com/zIFpGEb.png"
    },
    biggerClubs:{
        isVisible: () => store.getState().buildings.clubber >= 75,
        isBuyable: () => store.getState().game.money >= 7.5e+6,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+6)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Bigger Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>I'm surprised we didn't get these sooner.</i>
            <br/>Costs <b>{prettify(7.5e6)}</b> Cash
        </>,
        img: "http://i.imgur.com/5rYYXJ1.png"
    },
    bombClubs:{
        isVisible: () => store.getState().buildings.clubber >= 100,
        isBuyable: () => store.getState().game.money >= 7.5e+7,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+7)),
        effect: {clubber: 3},
        text: <>
            <Typography color="inherit">Bomb Clubs</Typography>
            Clubbers do <b>three times</b> as much damage.
            <br/><i>Just attach some bombs to the clubs. An excellent plan.</i>
            <br/>Costs <b>{prettify(7.5e7)}</b> Cash
        </>,
        img: "http://i.imgur.com/8rGt4hi.png"
    },
    plasmaClubs:{
        isVisible: () => store.getState().buildings.clubber >= 150,
        isBuyable: () => store.getState().game.money >= 3.75e+9,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+9)),
        effect: {clubber: 3},
        text: <>
            <Typography color="inherit">Plasma Coated Clubs</Typography>
            Clubbers do <b>three times</b> as much damage.
            <br/><i>Melts through the wall. Be careful!</i>
            <br/>Costs <b>{prettify(3.75e9)}</b> Cash
        </>,
        img: "http://i.imgur.com/2Kpfgha.png"
    },
    nukeClubs:{
        isVisible: () => store.getState().buildings.clubber >= 200,
        isBuyable: () => store.getState().game.money >= 3.75e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+11)),
        effect: {},
        text: <>
            <Typography color="inherit">Nuke Clubs
            </Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>Like bomb clubs, but waaaay more dangerous.</i>
            <br/>Costs <b>{prettify(375000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/sqh5GGD.png"
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

