import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
import {prettify} from "../../constants";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    biggerBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 1,
        isBuyable: () => store.getState().game.money >= 4e+7,
        buy: (dispatch) => dispatch(decreaseMoney(4e+7)),
        effect: {wreckingBall: 1.5},
        text: <>
            <Typography color="inherit">Bigger Balls</Typography>
            Wrecking balls do <b>50%</b> more damage.
            <br/><i>If you know what I mean.(I don't)</i>
            <br/>Costs <b>{prettify(40000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/yM8TEHL.png"
    },
    ballsOfSteel: {
        isVisible: () => store.getState().buildings.wreckingBall >= 5,
        isBuyable: () => store.getState().game.money >= 4e+8,
        buy: (dispatch) => dispatch(decreaseMoney(4e+8)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Balls of Steel</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>I'm not sure what the previous ones were made out of.</i>
            <br/>Costs <b>{prettify(400000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/mAr2vCg.png"
    },
    reinforcedBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 25,
        isBuyable: () => store.getState().game.money >= 4e+9,
        buy: (dispatch) => dispatch(decreaseMoney(4e+9)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Reinforced Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>They're actually just titanium balls, but the "Titanium _______" upgrades were getting boring.</i>
            <br/>Costs <b>{prettify(4000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/G48Ecxn.png"
    },
    flamingBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 50,
        isBuyable: () => store.getState().game.money >= 4e+10,
        buy: (dispatch) => dispatch(decreaseMoney(4e+10)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Flaming Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>Yes, this totally works against a brick wall.</i>
            <br/>Costs <b>{prettify(40000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/RiUfzHo.png"
    },
    spikedBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 75,
        isBuyable: () => store.getState().game.money >= 4e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4e+11)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Spiked Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>Badass and more effective.</i>
            <br/>Costs <b>{prettify(400000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/VUzXniN.png"
    },
    diamondBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 100,
        isBuyable: () => store.getState().game.money >= 4e+12,
        buy: (dispatch) => dispatch(decreaseMoney(4e+12)),
        effect: {wreckingBall: 3},
        text: <>
            <Typography color="inherit">Diamond Balls</Typography>
            Wrecking balls do <b>three times</b> as much damage.
            <br/><i>The strongest balls the world has to offer.</i>
            <br/>Costs <b>{prettify(4000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/AJ4EZ5y.png"
    },
    triBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 150,
        isBuyable: () => store.getState().game.money >= 2e+14,
        buy: (dispatch) => dispatch(decreaseMoney(2e+14)),
        effect: {wreckingBall: 3},
        text: <>
            <Typography color="inherit">Tri-Balls</Typography>
            Wrecking balls do <b>three times</b> as much damage.
            <br/><i>Three is better than one!</i>
            <br/>Costs <b>{prettify(200000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/0sEdsxd.png"
    },
    neutronBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 200,
        isBuyable: () => store.getState().game.money >= 8e+15,
        buy: (dispatch) => dispatch(decreaseMoney(8e+15)),
        effect: {wreckingBall: 4},
        text: <>
            <Typography color="inherit">Neutron Balls</Typography>
            Wrecking balls do <b>four times</b> as much damage.
            <br/><i>As dense as a neutron star and about the same potential of turning into a black hole.</i>
            <br/>Costs <b>{prettify(8000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/sgAPNQT.png"
    },
    singularityBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 300,
        isBuyable: () => store.getState().game.money >= 8e+19,
        buy: (dispatch) => dispatch(decreaseMoney(8e+19)),
        effect: {wreckingBall: 5},
        text: <>
            <Typography color="inherit">Singularity Balls</Typography>
            Wrecking balls do <b>five times</b> as much damage.
            <br/><i>They are all. They are one. They exist at all times at once.</i>
            <br/>Costs <b>{prettify(80000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/tWgYnpW.png"
    },
    agentJohnsonIsAnIdiot: {
        isVisible: () => store.getState().buildings.wreckingBall >= 400,
        isBuyable: () => store.getState().game.money >= 1.6e+24,
        buy: (dispatch) => dispatch(decreaseMoney(1.6e+24)),
        effect: {wreckingBall: 5},
        text: <>
            <Typography color="inherit">Agent Johnson is an Idiot</Typography>
            Wrecking balls do <b>five times</b> as much damage.
            <br/><i>[REDACTED]
            <br/>CHIEF OF R&D EDIT: Agent Johnson is no longer allowed near the demons.</i>
            <br/>Costs <b>{prettify(1.6e+24)}</b> Cash
        </>,
        img: "http://i.imgur.com/8CXUpDK.png"
    },
    theSgapangBall: {
        isVisible: () => store.getState().buildings.wreckingBall >= 500,
        isBuyable: () => store.getState().game.money >= 3.2e+28,
        buy: (dispatch) => dispatch(decreaseMoney(3.2e+28)),
        effect: {wreckingBall: 7},
        text: <>
            <Typography color="inherit">The Sgapang Ball</Typography>
            Wrecking balls do <b>seven times</b> as much damage.
            <br/><i>A large white ball made of an unknown substance found in the center of Sgapang, Lord Reaefsek's
            castle. Judging by its strange properties, it is unlikely Reaefsek or Hyzem created it. Especially since
            white is not at all Reaefsek's color.</i>
            <br/>Costs <b>{prettify(3.2e+28)}</b> Cash
        </>,
        img: "http://i.imgur.com/3OYp1g4.png"
    },
    reaefseksCrystalBall: {
        isVisible: () => store.getState().buildings.wreckingBall >= 700,
        isBuyable: () => store.getState().game.money >= 8e+0,
        buy: (dispatch) => dispatch(decreaseMoney(8e+0)),
        effect: {wreckingBall: 5},
        text: <>
            <Typography color="inherit">Reaefsek's Crystal Ball</Typography>
            Wrecking balls do <b>five times</b> as much damage.
            <br/><i>"Couldn't we use this thing's crazy magic power to like, do something, instead of just smashing it
            into the wall?" ~Agent Carter
            <br/>"Hah, good one." ~Wrecking Ball Project Leader</i>
            <br/>Costs <b>{prettify(8)}</b> Cash
        </>,
        img: "http://i.imgur.com/LmISELN.png"
    },
    magicExplodingBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 125,
        isBuyable: () => store.getState().game.money >= 2.000200020002e+13 && store.getState().game.bricks >= 5,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.000200020002e+13));
            dispatch(decreaseBricks(5));
        },
        effect: {wreckingBall: 3},
        text: <>
            <Typography color="inherit">Magic Exploding Balls</Typography>
            Wrecking balls do <b>three times</b> as much damage.
            <br/><i>Yeah, magic can pretty much do anything. Endless explosions!</i>
            <br/>Costs <b>{prettify(20002000200020)}</b> Cash & <b>{prettify(5)}</b> Bricks
        </>,
        img: "http://i.imgur.com/0b76QvZ.png"
    },
    antimatterBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 250,
        isBuyable: () => store.getState().game.money >= 8.000800080008001e+17 && store.getState().game.bricks >= 80000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(8.000800080008001e+17));
            dispatch(decreaseBricks(80000000));
        },
        effect: {wreckingBall: 4},
        text: <>
            <Typography color="inherit">Antimatter Balls</Typography>
            Wrecking balls do <b>four times</b> as much damage.
            <br/><i>The wizards can create antimatter with their magic. It's pretty damn cool.</i>
            <br/>Costs <b>{prettify(800080008000800100)}</b> Cash & <b>{prettify(80000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/WgKfsDM.png"
    },
    hellfireBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 350,
        isBuyable: () => store.getState().game.money >= 8.000800080008e+21 && store.getState().game.bricks >= 80000000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(8.000800080008e+21));
            dispatch(decreaseBricks(80000000000));
        },
        effect: {wreckingBall: 5},
        text: <>
            <Typography color="inherit">Hellfire Balls</Typography>
            Wrecking balls do <b>five times</b> as much damage.
            <br/><i>The fire of the underworld is hotter than anything else, so we got the wizards to make magic balls
            out of it.</i>
            <br/>Costs <b>{prettify(8.000800080008e+21)}</b> Cash & <b>{prettify(80000000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/E8N1BEF.png"
    },
    blackAbsorbedBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 600,
        isBuyable: () => store.getState().game.money >= 4.8000480004800046e+32 && store.getState().game.bricks >= 48000480004800048000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.8000480004800046e+32));
            dispatch(decreaseBricks(48000480004800048000));
        },
        effect: {wreckingBall: 7},
        text: <>
            <Typography color="inherit">Black-Absorbed Balls</Typography>
            Wrecking balls do <b>seven times</b> as much damage.
            <br/><i>"I support this because Agent Johnson doesn't." ~Agent Connor</i>
            <br/>Costs <b>{prettify(4.8000480004800046e+32)}</b> Cash & <b>{prettify(48000480004800048000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/2yFjtIa.png"
    },
    planets: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 440044400040440040 && store.getState().game.fourthWallBricks >= 250000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(440044400040440040));
            dispatch(decreaseFourthWallBricks(250000));
        },
        effect: {wreckingBall: 4},
        text: <>
            <Typography color="inherit">Planets</Typography>
            Wrecking balls do <b>four times</b> as much damage.
            <br/><i>Ah, the things we can do when there's none of that "realism" nonsense!</i>
            <br/>Costs <b>{prettify(440044400040440040)}</b> Cash & <b>{prettify(250000)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/fWDh6nT.png"
    },

}

export const {
    biggerBalls,
    ballsOfSteel,
    reinforcedBalls,
    flamingBalls,
    spikedBalls,
    diamondBalls,
    triBalls,
    neutronBalls,
    singularityBalls,
    agentJohnsonIsAnIdiot,
    theSgapangBall,
    reaefseksCrystalBall,

    magicExplodingBalls,
    antimatterBalls,
    hellfireBalls,
    blackAbsorbedBalls,
    planets,
} = upgrades;