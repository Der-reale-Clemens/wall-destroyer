import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {prettify} from "../../constants";
import {Typography} from "@material-ui/core";
import React from "react";

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
    timeSplittingGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 300,
        isBuyable: () => store.getState().game.money >= 8e+18,
        buy: (dispatch) => dispatch(decreaseMoney(8e+18)),
        effect: {grenademan: 5},
        text: <>
            <Typography color="inherit">Time-Splitting Grenades</Typography>
            Grenademen do <b>five times</b> as much damage.
            <br/><i>They split through time to destroy the wall's past, present, and future!</i>
            <br/>Costs <b>{prettify(8000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/fMBo2SN.png"
    },
    bucketsOfGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 400,
        isBuyable: () => store.getState().game.money >= 8e+22,
        buy: (dispatch) => dispatch(decreaseMoney(8e+22)),
        effect: {grenademan: 5},
        text: <>
            <Typography color="inherit">Buckets of Grenades</Typography>
            Grenademen do <b>five times</b> as much damage.
            <br/><i>"dude just lob the whole bucket" ~1337 sn1p3r #73, before being promoted</i>
            <br/>Costs <b>{prettify(8e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/LX0Sy7U.png"
    },
    holyHandGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 500,
        isBuyable: () => store.getState().game.money >= 2e+27,
        buy: (dispatch) => dispatch(decreaseMoney(2e+27)),
        effect: {grenademan: 7},
        text: <>
            <Typography color="inherit">Holy Hand Grenades</Typography>
            Grenademen do <b>seven times</b> as much damage.
            <br/><i>They're actually Hyzem's Bombs of Purgation, but the Grenademan Project Leader insisted we call them
            this. He's the one who insisted we call them 'grenademen' instead of grenadiers.</i>
            <br/>Costs <b>{prettify(2e+27)}</b> Cash
        </>,
        img: "http://i.imgur.com/FzLeFau.png"
    },
    hellfireBombs: {
        isVisible: () => store.getState().buildings.grenademan >= 700,
        isBuyable: () => store.getState().game.money >= 4e+35,
        buy: (dispatch) => dispatch(decreaseMoney(4e+35)),
        effect: {grenademan: 5},
        text: <>
            <Typography color="inherit">Hellfire Bombs</Typography>
            Grenademen do <b>five times</b> as much damage.
            <br/><i>"What a boring upgrade." ~Agent Johnson
            <br/>"I don't believe interesting names are the priority when upgrading things." ~Agent Lawrence
            <br/>"That's factually incorrect." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(4e35)}</b> Cash
        </>,
        img: "http://i.imgur.com/8EFEm0M.png"
    },
    magicalLightningGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 125,
        isBuyable: () => store.getState().game.money >= 2.000200020002e+12 && store.getState().game.bricks >= 1,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.000200020002e+12));
            dispatch(decreaseBricks(1));
        },
        effect: {grenademan: 3},
        text: <>
            <Typography color="inherit">Magical Lightning Grenades</Typography>
            Grenademen do <b>three times</b> as much damage.
            <br/><i>These are pretty self-explanatory.</i>
            <br/>Costs <b>{prettify(2000200020002)}</b> Cash & <b>{prettify(1)}</b> Brick
        </>,
        img: "http://i.imgur.com/Z4YDjVW.png"
    },
    portalGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 250,
        isBuyable: () => store.getState().game.money >= 4.000400040004e+16 && store.getState().game.bricks >= 4000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.000400040004e+16));
            dispatch(decreaseBricks(4000000));
        },
        effect: {grenademan: 4},
        text: <>
            <Typography color="inherit">Portal Grenades</Typography>
            Grenademen do <b>four times</b> as much damage.
            <br/><i>Instead of exploding, these transport what they hit into a magical pool of certain destruction.</i>
            <br/>Costs <b>{prettify(40004000400040000)}</b> Cash & <b>{prettify(4000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/3QX7sbz.png"
    },
    oblivionGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 350,
        isBuyable: () => store.getState().game.money >= 4.000400040004e+20 && store.getState().game.bricks >= 4000000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.000400040004e+20));
            dispatch(decreaseBricks(4000000000));
        },
        effect: {grenademan: 5},
        text: <>
            <Typography color="inherit">Oblivion Grenades</Typography>
            Grenademen do <b>five times</b> as much damage.
            <br/><i>These skip the portal and just obliterate anything they hit.</i>
            <br/>Costs <b>{prettify(400040004000400000000)}</b> Cash & <b>{prettify(4000000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/pUkQa2G.png"
    },
    blackInfusedGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 600,
        isBuyable: () => store.getState().game.money >= 3.0003000300030004e+31 && store.getState().game.bricks >= 3000300030003000300,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.0003000300030004e+31));
            dispatch(decreaseBricks(3000300030003000300));
        },
        effect: {grenademan: 6},
        text: <>
            <Typography color="inherit">Black-Infused Grenades</Typography>
            Grenademen do <b>six times</b> as much damage.
            <br/><i>"I support this because its acronym is 'BIG'." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(3.0003000300030004e+31)}</b> Cash & <b>{prettify(3000300030003000300)}</b> Bricks
        </>,
        img: "http://i.imgur.com/J7oP3HO.png"
    },
    grenades: {
        isVisible: () => store.getState().buildings.grenademan >= 800,
        isBuyable: () => store.getState().game.money >= 4e+39 &&
            store.getState().game.bricks >= 4e28 &&
            store.getState().game.fourthWallBricks >= 4e24,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4e+39));
            dispatch(decreaseBricks(4e28));
            dispatch(decreaseFourthWallBricks(4e24));
        },
        effect: {grenademan: 4},
        text: <>
            <Typography color="inherit">Grenades</Typography>
            Grenademen do <b>four times</b> as much damage.
            <br/><i>"We've hit critical." ~Head of R&D</i>
            <br/>Costs <b>{prettify(4e39)}</b> Cash & <b>{prettify(4e28)}</b> Bricks
            & <b>{prettify(4e24)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/VcNgtva.png"
    },
    enlargedExplosions: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 202002220020200002 && store.getState().game.fourthWallBricks >= 50_000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(202002220020200002));
            dispatch(decreaseFourthWallBricks(50_000));
        },
        effect: {grenademan: 4},
        text: <>
            <Typography color="inherit">Enlarged Explosions</Typography>
            Grenademen do <b>four times</b> as much damage.
            <br/><i>Now that we can alter reality, we don't need reasons for things. Explosions are just really big
            now.</i>
            <br/>Costs <b>{prettify(202002220020200002)}</b> Cash & <b>{prettify(50_000)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/ZTUASsk.png"
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
    timeSplittingGrenades,
    bucketsOfGrenades,
    holyHandGrenades,
    hellfireBombs,

    magicalLightningGrenades,
    portalGrenades,
    oblivionGrenades,
    blackInfusedGrenades,
    grenades,
    enlargedExplosions,
} = upgrades;