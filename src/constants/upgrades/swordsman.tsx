import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
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
    realityBlades: {
        isVisible: () => store.getState().buildings.swordsman >= 300,
        isBuyable: () => store.getState().game.money >= 1.1e+16,
        buy: (dispatch) => dispatch(decreaseMoney(1.1e+16)),
        effect: {swordsman: 5},
        text: <>
            <Typography color="inherit">Reality Blades</Typography>
            Swordsmen do <b>five times</b> as much damage.
            <br/><i>Swords made out of the fabric of reality. How this works I have no idea, but they are awesome.</i>
            <br/>Costs <b>{prettify(11000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/s8DBCzK.png"
    },
    dualWielding: {
        isVisible: () => store.getState().buildings.swordsman >= 400,
        isBuyable: () => store.getState().game.money >= 1.1e+20,
        buy: (dispatch) => dispatch(decreaseMoney(1.1e+20)),
        effect: {swordsman: 5},
        text: <>
            <Typography color="inherit">Dual Wielding</Typography>
            Swordsmen do <b>five times</b> as much damage.
            <br/><i>Thanks to the swords that cut through anything, it doesn't matter how hard they're swung.</i>
            <br/>Costs <b>{prettify(110000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/vtFhIQk.png"
    },
    theFinalitySwords: {
        isVisible: () => store.getState().buildings.swordsman >= 500,
        isBuyable: () => store.getState().game.money >= 4.4e+24,
        buy: (dispatch) => dispatch(decreaseMoney(4.4e+24)),
        effect: {swordsman: 7},
        text: <>
            <Typography color="inherit">The Finality Swords</Typography>
            Swordsmen do <b>seven times</b> as much damage.
            <br/><i>This is what the Swordsman Project Leader calls this collection of swords that he reportedly found
            in a cave. He won't show us them or say what they do.</i>
            <br/>Costs <b>{prettify(4.4e+24)}</b> Cash
        </>,
        img: "http://i.imgur.com/iPTUQJx.png"
    },
    theNightmareBlade: {
        isVisible: () => store.getState().buildings.swordsman >= 700,
        isBuyable: () => store.getState().game.money >= 1.1e+33,
        buy: (dispatch) => dispatch(decreaseMoney(1.1e+33)),
        effect: {swordsman: 5},
        text: <>
            <Typography color="inherit">The Nightmare Blade</Typography>
            Swordsmen do <b>five times</b> as much damage.
            <br/><i>"The Blade was Lord Reaefsek's favorite weapon. It was his first magical artifact, and he kept
            upgrading it to the point where it's just ridiculously powerful." ~Agent Taylor
            <br/>"The name's pretty cliché though." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(1.1e+33)}</b> Cash
        </>,
        img: "http://i.imgur.com/WljzKK3.png"
    },
    maganiumSwords: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        isBuyable: () => store.getState().game.money >= 1.100110011e+10 &&
            store.getState().game.bricks >= 1 &&
            store.getState().buildings.swordsman >= 125,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.100110011e+10));
            dispatch(decreaseBricks(1));
        },
        effect: {swordsman: 3},
        text: <>
            <Typography color="inherit">Maganium Swords</Typography>
            Swordsmen do <b>three times</b> as much damage.
            <br/><i>We found this mineral that happens to be the perfect magic enhancer, so we named it maganium.</i>
            <br/>Costs <b>{prettify(11001100110)}</b> Cash & <b>{prettify(1)}</b> Brick
            <br/>Also requires <b>125</b> Swordsmen
        </>,
        img: "http://i.imgur.com/1bc1Ufp.png"
    },
    swordThatCutsThroughEverything: {
        isVisible: () => store.getState().buildings.swordsman >= 250,
        isBuyable: () => store.getState().game.money >= 1.1001100110011e+14 && store.getState().game.bricks >= 5000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.1001100110011e+14));
            dispatch(decreaseBricks(5000));
        },
        effect: {swordsman: 4},
        text: <>
            <Typography color="inherit">Sword That Cuts Through Everything</Typography>
            Swordsmen do <b>four times</b> as much damage.
            <br/><i>Thanks to the power of dark magic, we have finally made it.</i>
            <br/>Costs <b>{prettify(110011001100110)}</b> Cash & <b>{prettify(5000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/3xcSNC8.png"
    },
    oblivionBlades: {
        isVisible: () => store.getState().buildings.swordsman >= 350,
        isBuyable: () => store.getState().game.money >= 1.1001100110011002e+18 && store.getState().game.bricks >= 50000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.1001100110011002e+18));
            dispatch(decreaseBricks(50000000));
        },
        effect: {swordsman: 5},
        text: <>
            <Typography color="inherit">Oblivion Blades</Typography>
            Swordsmen do <b>five times</b> as much damage.
            <br/><i>These were created by accident when we told the wizards to pump as much magic as they possibly could
            into the swords. Declaration: worth.</i>
            <br/>Costs <b>{prettify(1100110011001100200)}</b> Cash & <b>{prettify(50000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/BVw5a9o.png"
    },
    blackCoatedSwords: {
        isVisible: () => store.getState().buildings.swordsman >= 600,
        isBuyable: () => store.getState().game.money >= 6.600660066006601e+28 && store.getState().game.bricks >= 6600660066006600660,
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.600660066006601e+28));
            dispatch(decreaseBricks(6600660066006600660));
        },
        effect: {swordsman: 6},
        text: <>
            <Typography color="inherit">Black-Coated Swords</Typography>
            Swordsmen do <b>six times</b> as much damage.
            <br/><i>"All those complainers who said hiring someone to make a really cool sword design for these was
            stupid 'cause The Black would eat through and destroy them eventually were being dumb. Look at these
            things." ~CEO, RUC</i>
            <br/>Costs <b>{prettify(6.600660066006601e+28)}</b> Cash & <b>{prettify(6600660066006600660)}</b> Bricks
        </>,
        img: "http://i.imgur.com/nYJudXF.png"
    },
    sevensSword: {
        isVisible: () => store.getState().buildings.swordsman >= 800,
        isBuyable: () => store.getState().game.money >= 1.1e+37 &&
            store.getState().game.bricks >= 1.1e26 &&
            store.getState().game.fourthWallBricks >= 1.1e22,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.1e+37));
            dispatch(decreaseBricks(1.1e22));
        },
        effect: {swordsman: 4},
        text: <>
            <Typography color="inherit">#7's Sword</Typography>
            Swordsmen do <b>four times</b> as much damage.
            <br/><i>According to a demon historian, 35,000 years ago "some masked asshole tried to sneak into the boss's
            HQ". This sword and the mask (made of the same strange material) are all that remain of the stranger, after
            "the boss taught him a lesson". This incident was one of the only times in history that demons were killed,
            and as said by the Devil, "the only time I ever got a real challenge".
            <br/>
            <br/>As a test of this sword's strength, Agent Johnson cut one of our swords that cuts through everything
            clean in half. He wanted to attempt chopping down a Finality Tree next, but the plan was vetoed by literally
            everyone else.</i>
            <br/>Costs <b>{prettify(1.1e37)}</b> Cash & <b>{prettify(1.1e26)}</b> Bricks
            & <b>{prettify(1.1e22)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/ZiK08m9.png"
    },
    buildingSizedSwords: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 55_055_005_505_000_555 && store.getState().game.fourthWallBricks >= 2500,
        buy: (dispatch) => {
            dispatch(decreaseMoney(55055005505000555));
            dispatch(decreaseFourthWallBricks(2500));
        },
        effect: {swordsman: 4},
        text: <>
            <Typography color="inherit">Building-Sized Swords</Typography>
            Swordsmen do <b>four times</b> as much damage.
            <br/><i>We can hold them because it's a damn idle game, it doesn't need to make sense.</i>
            <br/>Costs <b>{prettify(55055005505000555)}</b> Cash & <b>{prettify(2500)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/XIZVvLa.png"
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
    lightsabers,
    realityBlades,
    dualWielding,
    theFinalitySwords,
    theNightmareBlade,

    maganiumSwords,
    swordThatCutsThroughEverything,
    oblivionBlades,
    blackCoatedSwords,
    sevensSword,
    buildingSizedSwords,
} = upgrades;