import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {prettify} from "../../constants";
import {Typography} from "@material-ui/core";

const upgrades: { [key: string]: Upgrade } = {
    greasedPins: {
        isVisible: () => store.getState().buildings.grenademan >= 1,
        isBuyable: () => store.getState().game.money >= 2e+6,
        buy: (dispatch) => dispatch(decreaseMoney(2e+6)),
        effect: {grenademan: 1.5},
        text: <>
            <Typography color="inherit">Greased Pins</Typography>
            Grenademen do <b>50%</b> more damage.
            <br/><i>We received complaints... These guys aren't very good.</i>
            <br/>Costs <b>{prettify(2000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/IiBqHel.png"
    },
    biggerCrates: {
        isVisible: () => store.getState().buildings.grenademan >= 5,
        isBuyable: () => store.getState().game.money >= 2e+7,
        buy: (dispatch) => dispatch(decreaseMoney(2e+7)),
        effect: {grenademan: 2},
        text: <>
            <Typography color="inherit">Bigger Crates</Typography>
            Grenademen do <b>twice</b> as much damage.
            <br/><i>Less running to the store.</i>
            <br/>Costs <b>{prettify(20000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/R9gZAzL.png"
    },
    bigGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 25,
        isBuyable: () => store.getState().game.money >= 2e+8,
        buy: (dispatch) => dispatch(decreaseMoney(2e+8)),
        effect: {grenademan: 2},
        text: <>
            <Typography color="inherit">Big Grenades</Typography>
            Grenademen do <b>twice</b> as much damage.
            <br/><i>I'm not sure why we were using the small ones.</i>
            <br/>Costs <b>{prettify(200000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/iygAO3d.png"
    },
    flameGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 50,
        isBuyable: () => store.getState().game.money >= 2e+9,
        buy: (dispatch) => dispatch(decreaseMoney(2e+9)),
        effect: {grenademan: 2},
        text: <>
            <Typography color="inherit">Flame Grenades</Typography>
            Grenademen do <b>twice</b> as much damage.
            <br/><i>Not to be confused with incendiaries, these are literally grenades lit on fire. Never doubt the
            effectiveness of lighting things on fire.</i>
            <br/>Costs <b>{prettify(2000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/4Ro8woi.png"
    },
    extraShrapnel: {
        isVisible: () => store.getState().buildings.grenademan >= 75,
        isBuyable: () => store.getState().game.money >= 2e+10,
        buy: (dispatch) => dispatch(decreaseMoney(2e+10)),
        effect: {grenademan: 2},
        text: <>
            <Typography color="inherit">Extra Shrapnel</Typography>
            Grenademen do <b>twice</b> as much damage.
            <br/><i>"get shrapped" ~1337 sn1p3r #73</i>"
            <br/>Costs <b>{prettify(20000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/PmjzTBw.png"
    },
    nuclearGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 100,
        isBuyable: () => store.getState().game.money >= 4e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4e+11)),
        effect: {grenademan: 3},
        text: <>
            <Typography color="inherit">Nuclear Grenades</Typography>
            Grenademen do <b>three times</b> as much damage.
            <br/><i>Radiation poisoning? Naaaaah...</i>
            <br/>Costs <b>{prettify(400000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/VRc7WhE.png"
    },
    plasmaGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 150,
        isBuyable: () => store.getState().game.money >= 2e+13,
        buy: (dispatch) => dispatch(decreaseMoney(2e+13)),
        effect: {grenademan: 3},
        text: <>
            <Typography color="inherit">Plasma Grenades</Typography>
            Grenademen do <b>three times</b> as much damage.
            <br/><i>I don't actually know what these do, but they sound cool.</i>
            <br/>Costs <b>{prettify(20000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/fXuVuxM.png"
    },
    unobtaniumShrapnel: {
        isVisible: () => store.getState().buildings.grenademan >= 200,
        isBuyable: () => store.getState().game.money >= 4e+14,
        buy: (dispatch) => dispatch(decreaseMoney(4e+14)),
        effect: {grenademan: 4},
        text: <>
            <Typography color="inherit">Unobtanium Shrapnel</Typography>
            Grenademen do <b>four times</b> as much damage.
            <br/><i>Just happens to be the perfect material to cut through the wall, but it was really hard to get.</i>
            <br/>Costs <b>{prettify(400000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/POTBoez.png"
    },
}

export const {
    greasedPins,
    biggerCrates,
    bigGrenades,
    flameGrenades,
    extraShrapnel,
    nuclearGrenades,
    plasmaGrenades,
    unobtaniumShrapnel,
} = upgrades;