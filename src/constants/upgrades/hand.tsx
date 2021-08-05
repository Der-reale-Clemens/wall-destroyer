import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    coffee: {
        isVisible: () => store.getState().game.handDamage >= 1000,
        isBuyable: () => store.getState().game.money >= 1.1111e+4,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111e+4)),
        effect: {hand: 3},
        text: <>
            <Typography color="inherit">Coffee</Typography>
            Hand punches do <b>3 times</b> as much damage.
            <br/><i>Caffeine obviously gives you the ability to punch faster.</i>
            <br/>Costs <b>{prettify(11111)}</b> Cash
        </>,
        img: "http://i.imgur.com/c3mfsZ7.png"
    },
    energyDrinks: {
        isVisible: () => store.getState().game.handDamage >= 100000,
        isBuyable: () => store.getState().game.money >= 1.111111e+6,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111e+6)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Energy Drinks</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>POWERTHIIIRRRST</i>
            <br/>Costs <b>{prettify(1111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/1VAyqoa.png"
    },
    experimentalDrugs: {
        isVisible: () => store.getState().game.handDamage >= 10000000,
        isBuyable: () => store.getState().game.money >= 1.11111111e+8,
        buy: (dispatch) => dispatch(decreaseMoney(1.11111111e+8)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Experimental Drugs</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>Probably completely safe.</i>
            <br/>Costs <b>{prettify(111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/3pMJrsL.png"
    },
    personalTrainer: {
        isVisible: () => store.getState().game.handDamage >= 1000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111e+10,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111e+10)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Personal Trainer</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>This guy is like the grandmaster of punching walls.</i>
            <br/>Costs <b>{prettify(11111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/bOLxNz7.png"
    },
    elephantiasis: {
        isVisible: () => store.getState().game.handDamage >= 100000000000,
        isBuyable: () => store.getState().game.money >= 1.111111111111e+12,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111111111e+12)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Elephantiasis</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>With this horribly crippling disease your fists will be like hardass wrecking balls!</i>
            <br/>Costs <b>{prettify(1111111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/PtmkAH3.png"
    },
    trainingMontage: {
        isVisible: () => store.getState().game.handDamage >= 10000000000000,
        isBuyable: () => store.getState().game.money >= 1.11111111111111e+14,
        buy: (dispatch) => dispatch(decreaseMoney(1.11111111111111e+14)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Training Montage</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>Set to '80s music, of course.</i>
            <br/>Costs <b>{prettify(111111111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/ouFA8Lg.png"
    },
    laserBrainSurgery: {
        isVisible: () => store.getState().game.handDamage >= 1000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111112e+16,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111112e+16)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Laser Brain Surgery
            </Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>For enhanced speed!</i>
            <br/>Costs <b>{prettify(11111111111111112)}</b> Cash
        </>,
        img: "http://i.imgur.com/ee3LJxJ.png"
    },
    mechanicalLimbs: {
        isVisible: () => store.getState().game.handDamage >= 100000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111112e+18,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111112e+18)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Mechanical Limbs</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>One step closer to being a Terminator.</i>
            <br/>Costs <b>{prettify(1111111111111111200)}</b> Cash
        </>,
        img: "http://i.imgur.com/YZfg6Vg.png"
    },
}

export const {
    coffee,
    energyDrinks,
    experimentalDrugs,
    personalTrainer,
    elephantiasis,
    trainingMontage,
    laserBrainSurgery,
    mechanicalLimbs
} = upgrades;