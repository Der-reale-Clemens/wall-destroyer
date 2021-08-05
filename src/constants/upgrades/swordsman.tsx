import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";
import {Upgrade} from "../upgrades";

const upgrades: { [key: string]: Upgrade } = {
    sharpening: {
        isVisible: () => store.getState().buildings.swordsman >= 1,
        isBuyable: () => store.getState().game.money >= 5.5e+3,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+3)),
        effect: {swordsman: 1.5},
        text: <>
            <Typography color="inherit">Sharpening</Typography>
            Swordsmen do <b>50%</b> more damage.
            <br/><i>Kind of useless in the long term of wall-slicing.</i>
            <br/>Costs <b>{prettify(5500)}</b> Cash
        </>,
        img: "http://i.imgur.com/U0XqNYE.png"
    },
    biggerSwords: {
        isVisible: () => store.getState().buildings.swordsman >= 5,
        isBuyable: () => store.getState().game.money >= 5.5e+4,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+4)),
        effect: {swordsman: 2},
        text: <>
            <Typography color="inherit">Bigger Swords</Typography>
            Swordsmen do <b>twice</b> as much damage.
            <br/><i>Bigger is better!</i>
            <br/>Costs <b>{prettify(55000)}</b> Cash
        </>,
        img: "http://i.imgur.com/roZk4Yj.png"
    },
    fancyHilts: {
        isVisible: () => store.getState().buildings.swordsman >= 25,
        isBuyable: () => store.getState().game.money >= 5.5e+5,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+5)),
        effect: {swordsman: 2},
        text: <>
            <Typography color="inherit">Fancy Hilts</Typography>
            Swordsmen do <b>twice</b> as much damage.
            <br/><i>Raises morale.</i>
            <br/>Costs <b>{prettify(550000)}</b> Cash
        </>,
        img: "http://i.imgur.com/hmaylF0.png"
    },
    katanas: {
        isVisible: () => store.getState().buildings.swordsman >= 50,
        isBuyable: () => store.getState().game.money >= 5.5e+6,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+6)),
        effect: {swordsman: 2},
        text: <>
            <Typography color="inherit">Katanas</Typography>
            Swordsmen do <b>twice</b> as much damage.
            <br/><i>Regular swords are lame.</i>
            <br/>Costs <b>{prettify(5500000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ciaHQnB.png"
    },
    dualKatanas: {
        isVisible: () => store.getState().buildings.swordsman >= 75,
        isBuyable: () => store.getState().game.money >= 5.5e+7,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+7)),
        effect: {swordsman: 2},
        text: <>
            <Typography color="inherit">Dual Katanas</Typography>
            Swordsmen do <b>twice</b> as much damage.
            <br/><i>Upping the cool factor by even more. Well, it would be cool if they were good with swords.</i>
            <br/>Costs <b>{prettify(55000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/RtatyPV.png"
    },
    flamingKatanas: {
        isVisible: () => store.getState().buildings.swordsman >= 100,
        isBuyable: () => store.getState().game.money >= 1.1e+9,
        buy: (dispatch) => dispatch(decreaseMoney(1.1e+9)),
        effect: {swordsman: 3},
        text: <>
            <Typography color="inherit">Flaming Katanas</Typography>
            Swordsmen do <b>three times</b> as much damage.
            <br/><i>"If something isn't effective enough, light it on fire." ~CEO of Realistic Upgrades
            Corporation(RUC)</i>
            <br/>Costs <b>{prettify(1100000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ybxgoAN.png"
    },
    animeSizedSwords: {
        isVisible: () => store.getState().buildings.swordsman >= 150,
        isBuyable: () => store.getState().game.money >= 5.5e+10,
        buy: (dispatch) => dispatch(decreaseMoney(5.5e+10)),
        effect: {swordsman: 3},
        text: <>
            <Typography color="inherit">Anime-Sized Swords</Typography>
            Swordsmen do <b>three times</b> as much damage.
            <br/><i>Bigger than the people wielding them!</i>
            <br/>Costs <b>{prettify(55000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Jk4qhmJ.png"
    },
    lightsabers: {
        isVisible: () => store.getState().buildings.swordsman >= 200,
        isBuyable: () => store.getState().game.money >= 2.2e+12,
        buy: (dispatch) => dispatch(decreaseMoney(2.2e+12)),
        effect: {swordsman: 4},
        text: <>
            <Typography color="inherit">Lightsabers</Typography>
            Swordsmen do <b>four times</b> as much damage.
            <br/><i>We got to work on this the <b>second</b> we got plasma.</i>
            <br/>Costs <b>{prettify(2200000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/w6XsCGU.png"
    },
}

export const {
    sharpening,
    biggerSwords,
    fancyHilts,
    katanas,
    dualKatanas,
    flamingKatanas,
    animeSizedSwords,
    lightsabers
} = upgrades;