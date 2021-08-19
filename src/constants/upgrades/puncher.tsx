import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import glovesImg from "../../images/upgrades/punchUpg1.png";
import paddedGlovesImg from "../../images/upgrades/punchUpg2.png";
import React from "react";
import steelPlatedGlovesImg from "../../images/upgrades/punchUpg3.png";
import brassKnucklesImg from "../../images/upgrades/punchUpg4.png";
import titaniumKnucklesImg from "../../images/upgrades/punchUpg5.png";
import diamonKnucklesImg from "../../images/upgrades/punchUpg6.png";
import adamantiumKnucklesImg from "../../images/upgrades/punchUpg7.png";
import redactedGlovesImg from "../../images/upgrades/punchUpg8.png";

const upgrades: {[key: string]: Upgrade} = {
    gloves: {
        isVisible: () => store.getState().buildings.puncher >= 1,
        isBuyable: () => store.getState().game.money >= 100,
        buy: (dispatch) => dispatch(decreaseMoney(100)),
        effect: {puncher: 1.5},
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
        effect: {hand: 2, puncher: 2},
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
        effect: {hand: 2, puncher: 2},
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
        effect: {hand: 2, puncher: 2},
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
        effect: {hand: 2, puncher: 2},
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
        effect: {hand: 2, puncher: 3},
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
        effect: {hand: 1.5, puncher: 3},
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
        effect: {hand: 1.5, puncher: 4},
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
        effect: {hand: 1.5, puncher: 5},
        text: <>
            <Typography color="inherit">Antimatter Gauntlets</Typography>
            Punchers do <b>five times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>The RUC is not responsible for any deaths/implosions caused by the Antimatter Gauntlets(TM).</i>
            <br/>Costs <b>{prettify(2e15)}</b> Cash
        </>,
        img: "http://i.imgur.com/GfoMaz4.png"
    },
    magicallyEnhancedFists: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        isBuyable: () => store.getState().game.money >= 20202020202 &&
            store.getState().game.bricks >= 1 &&
            store.getState().buildings.puncher >= 125,
        buy: (dispatch) => {
            dispatch(decreaseMoney(20202020202));
            dispatch(decreaseBricks(1));
        },
        effect: {hand: 1.5, puncher: 3},
        text: <>
            <Typography color="inherit">Magically Enhanced Fists</Typography>
            Punchers do <b>three times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>A syringe filled with pure magic.</i>
            <br/>Costs <b>{prettify(20202020202)}</b> Cash & <b>{prettify(1)}</b> Brick
            <br/>Also requires <b>125</b> punchers
        </>,
        img: "http://i.imgur.com/kRu3uU8.png"
    },
}

export const {
    gloves,
    paddedGloves,
    steelPlatedGloves,
    brassKnuckles,
    titaniumKnuckles,
    diamondKnuckles,
    adamantiumKnuckles,
    redactedGloves,
    antimatterGauntlets,
    magicallyEnhancedFists
} = upgrades;