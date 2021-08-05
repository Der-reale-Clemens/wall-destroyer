import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";
import {Upgrade} from "../upgrades";

const upgrades: { [key: string]: Upgrade } = {
    betterClubs: {
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
    ironClubs: {
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
    titaniumClubs: {
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
    spikedClubs: {
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
    biggerClubs: {
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
    bombClubs: {
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
    plasmaClubs: {
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
    nukeClubs: {
        isVisible: () => store.getState().buildings.clubber >= 200,
        isBuyable: () => store.getState().game.money >= 3.75e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+11)),
        effect: {clubber: 4},
        text: <>
            <Typography color="inherit">Nuke Clubs
            </Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>Like bomb clubs, but waaaay more dangerous.</i>
            <br/>Costs <b>{prettify(375000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/sqh5GGD.png"
    },

}

export const {
    betterClubs,
    ironClubs,
    titaniumClubs,
    spikedClubs,
    biggerClubs,
    bombClubs,
    plasmaClubs,
    nukeClubs,
} = upgrades;