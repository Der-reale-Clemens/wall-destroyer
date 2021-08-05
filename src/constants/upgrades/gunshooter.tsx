import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";

const upgrades: {[key: string]: Upgrade} = {
    laserSights: {
        isVisible: () => store.getState().buildings.gunshooter >= 1,
        isBuyable: () => store.getState().game.money >= 8e+4,
        buy: (dispatch) => dispatch(decreaseMoney(8e+4)),
        effect: {gunshooter: 1.5},
        text: <>
            <Typography color="inherit">Laser Sights</Typography>
            Gunshooters do <b>50%</b> more damage.
            <br/><i>You wouldn't think you'd need these when your target is a brick wall, but the guys you hired are
            really bad at their job.</i>
            <br/>Costs <b>{prettify(80000)}</b> Cash
        </>,
        img: "http://i.imgur.com/d6qPAe1.png"
    },
    doubleMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 5,
        isBuyable: () => store.getState().game.money >= 8e+5,
        buy: (dispatch) => dispatch(decreaseMoney(8e+5)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Double Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>Less pesky reloading.</i>
            <br/>Costs <b>{prettify(800000)}</b> Cash
        </>,
        img: "http://i.imgur.com/rJl9TeZ.png"
    },
    quadrupleMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 25,
        isBuyable: () => store.getState().game.money >= 8e+6,
        buy: (dispatch) => dispatch(decreaseMoney(8e+6)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Quadruple Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>A little unwieldy, but agility isn't exactly the first priority when your opponent is a brick
            wall.</i>
            <br/>Costs <b>{prettify(8000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/IyI3G2S.png"
    },
    infiniteMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 50,
        isBuyable: () => store.getState().game.money >= 8e+7,
        buy: (dispatch) => dispatch(decreaseMoney(8e+7)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Infinite Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>As seen in the movies!</i>
            <br/>Costs <b>{prettify(80000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ZexRC2F.png"
    },
    snipers: {
        isVisible: () => store.getState().buildings.gunshooter >= 75,
        isBuyable: () => store.getState().game.money >= 8e+8,
        buy: (dispatch) => dispatch(decreaseMoney(8e+8)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Snipers</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>They prefer to be known as "1337 NoScOp3 sn1p3rs".</i>"
            <br/>Costs <b>{prettify(800000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/r4ii51b.png"
    },
    machineGuns: {
        isVisible: () => store.getState().buildings.gunshooter >= 100,
        isBuyable: () => store.getState().game.money >= 8e+9,
        buy: (dispatch) => dispatch(decreaseMoney(8e+9)),
        effect: {gunshooter: 3},
        text: <>
            <Typography color="inherit">Machine Guns</Typography>
            Gunshooters do <b>three times</b> as much damage.
            <br/><i>"pistols r 4 overnabz" ~1337 NoScOp3 sn1p3r #33</i>"
            <br/>Costs <b>{prettify(8000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/EItFPd4.png"
    },
    plasmaRifles: {
        isVisible: () => store.getState().buildings.gunshooter >= 150,
        isBuyable: () => store.getState().game.money >= 4e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4e+11)),
        effect: {gunshooter: 3},
        text: <>
            <Typography color="inherit">Plasma Rifles</Typography>
            Gunshooters do <b>three times</b> as much damage.
            <br/><i>Thanks, sci-fi technology!</i>
            <br/>Costs <b>{prettify(400000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/eAFR8kh.png"
    },
    laserChainsawGatlingGuns: {
        isVisible: () => store.getState().buildings.gunshooter >= 200,
        isBuyable: () => store.getState().game.money >= 1.6e+13,
        buy: (dispatch) => dispatch(decreaseMoney(1.6e+13)),
        effect: {gunshooter: 4},
        text: <>
            <Typography color="inherit">Laser Chainsaw Gatling Guns</Typography>
            Gunshooters do <b>four times</b> as much damage.
            <br/><i>We told R&D to be as ridiculous as they could with this, and boy did they deliver.</i>
            <br/>Costs <b>{prettify(16000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/2oIB7lS.png"
    },
}

export const {
    laserSights,
    doubleMagazines,
    quadrupleMagazines,
    infiniteMagazines,
    snipers,
    machineGuns,
    plasmaRifles,
    laserChainsawGatlingGuns
} = upgrades;