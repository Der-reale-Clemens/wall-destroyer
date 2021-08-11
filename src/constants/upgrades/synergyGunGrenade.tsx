import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    gunThatShootsGrenades: {
        isVisible: () => store.getState().buildings.gunshooter >= 25 && store.getState().buildings.grenademan >= 25,
        isBuyable: () => store.getState().game.money >= 4.16e+7,
        buy: (dispatch) => dispatch(decreaseMoney(4.16e+7)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.05,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.04
        },
        text: <>
            <Typography color="inherit">Gun That Shoots Grenades</Typography>
            Gunshooters do <b>5%</b> more damage per grenademan.
            <br/>Grenademen do <b>4%</b> more damage per Gunshooter.
            <br/><i>Not to be confused with a grenade launcher.</i>
            <br/>Costs <b>{prettify(41600000)}</b> Cash
        </>,
        img: "http://i.imgur.com/pAx5oIh.png"
    },
    grenadeThatShoots: {
        isVisible: () => store.getState().buildings.gunshooter >= 100 && store.getState().buildings.grenademan >= 100,
        isBuyable: () => store.getState().game.money >= 8.32e+10,
        buy: (dispatch) => dispatch(decreaseMoney(8.32e+10)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.02,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.01
        },
        text: <>
            <Typography color="inherit">Grenade That Shoots</Typography>
            Gunshooters do <b>2%</b> more damage per grenademan.
            <br/>Grenademen do <b>1%</b> more damage per Gunshooter.
            <br/><i>It shoots little grenades.</i>
            <br/>Costs <b>{prettify(83200000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/OltGQgd.png"
    },
    giantGunGrenades: {
        isVisible: () => store.getState().buildings.gunshooter >= 200 && store.getState().buildings.grenademan >= 200,
        isBuyable: () => store.getState().game.money >= 8.32e+14,
        buy: (dispatch) => dispatch(decreaseMoney(8.32e+14)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.015,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.01
        },
        text: <>
            <Typography color="inherit">Giant Gun Grenades</Typography>
            Gunshooters do <b>1.5%</b> more damage per grenademan.
            <br/>Grenademen do <b>1%</b> more damage per Gunshooter.
            <br/><i>Whatever you're thinking these are, they're more ridiculous than that.</i>
            <br/>Costs <b>{prettify(832000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/U3cxHTY.png"
    },
    grenadeGuns: {
        isVisible: () => store.getState().buildings.gunshooter >= 300 && store.getState().buildings.grenademan >= 300,
        isBuyable: () => store.getState().game.money >= 8.32e+18,
        buy: (dispatch) => dispatch(decreaseMoney(8.32e+18)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.01,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.008
        },
        text: <>
            <Typography color="inherit">Grenade Guns</Typography>
            Gunshooters do <b>1%</b> more damage per grenademan.
            <br/>Grenademen do <b>0.8%</b> more damage per Gunshooter.
            <br/><i>It's hard to describe what exactly these are, but they're perfect.</i>
            <br/>Costs <b>{prettify(8320000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/S4dXGCa.png"
    },
    gunnades: {
        isVisible: () => store.getState().buildings.gunshooter >= 400 && store.getState().buildings.grenademan >= 400,
        isBuyable: () => store.getState().game.money >= 8.32e+22,
        buy: (dispatch) => dispatch(decreaseMoney(8.32e+22)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.008,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.008
        },
        text: <>
            <Typography color="inherit">Hyperbeam Laser Plasma Photon Fusion Gunnades</Typography>
            Gunshooters do <b>0.8%</b> more damage per grenademan.
            <br/>Grenademen do <b>0.8%</b> more damage per Gunshooter.
            <br/><i>"We just threw a bunch of space-age crap together and whaddya know, it works!" ~Chief of R&D,
            RUC</i>
            <br/>Costs <b>{prettify(8.32e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/ELmdwkT.png"
    },
    theTurretsOfBextic: {
        isVisible: () => store.getState().buildings.gunshooter >= 500 && store.getState().buildings.grenademan >= 500,
        isBuyable: () => store.getState().game.money >= 1.64e+27,
        buy: (dispatch) => dispatch(decreaseMoney(1.64e+27)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.007,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.007
        },
        text: <>
            <Typography color="inherit">The Turrets of Bextic</Typography>
            Gunshooters do <b>0.7%</b> more damage per grenademan.
            <br/>Grenademen do <b>0.7%</b> more damage per Gunshooter.
            <br/><i>Hyzem's castle defenses were the stuff of legends: giant bombs, guns that shoot bombs, giant guns,
            bombs that explode into guns... And they're all extremely powerful with Old World magic!</i>
            <br/>Costs <b>{prettify(1.64e+27)}</b> Cash
        </>,
        img: "http://i.imgur.com/K34d64L.png"
    },
    inspirationalWarFilms: {
        isVisible: () => store.getState().buildings.gunshooter >= 700 && store.getState().buildings.grenademan >= 700,
        isBuyable: () => store.getState().game.money >= 3e+0,
        buy: (dispatch) => dispatch(decreaseMoney(3e+0)),
        effect: {
            gunshooter: () => 1+store.getState().buildings.grenademan *0.004,
            grenademan: () => 1+store.getState().buildings.gunshooter *0.004
        },
        text: <>
            <Typography color="inherit">Inspirational War Films</Typography>
            Gunshooters do <b>0.4%</b> more damage per grenademan.
            <br/>Grenademen do <b>0.4%</b> more damage per Gunshooter.
            <br/><i>"I'm impressed by their ability to even find movies this absolutely terrible." ~Agent Connor
            <br/>"Quality is different from </i>inspirational level<i>." ~Gunner Project Leader</i>
            <br/>Costs <b>{prettify(3)}</b> Cash
        </>,
        img: "http://i.imgur.com/ukER0vw.png"
    },
}

export const {
    gunThatShootsGrenades,
    grenadeThatShoots,
    giantGunGrenades,
    grenadeGuns,
    gunnades,
    theTurretsOfBextic,
    inspirationalWarFilms,
} = upgrades;