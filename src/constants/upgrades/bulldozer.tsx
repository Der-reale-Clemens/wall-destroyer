import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {prettify} from "../../constants";
import {Typography} from "@mui/material";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    strongerBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 1,
        isBuyable: () => store.getState().game.money >= 6e+8,
        buy: (dispatch) => dispatch(decreaseMoney(6e+8)),
        effect: {bulldozer: 1.5},
        text: <>
            <Typography color="inherit">Stronger Blades</Typography>
            Bulldozers do <b>50%</b> more damage.
            <br/><i>Probably made of titanium.</i>
            <br/>Costs <b>{prettify(600000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/q1QrnCW.png"
    },
    powerTreads: {
        isVisible: () => store.getState().buildings.bulldozer >= 5,
        isBuyable: () => store.getState().game.money >= 6e+9,
        buy: (dispatch) => dispatch(decreaseMoney(6e+9)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Power Treads</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Power Treads(TM), By the Realistic Upgrades Corporation(RUC).</i>
            <br/>Costs <b>{prettify(6000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/EiU5wtP.png"
    },
    doubleBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 25,
        isBuyable: () => store.getState().game.money >= 6e+10,
        buy: (dispatch) => dispatch(decreaseMoney(6e+10)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Double Blades</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Two is better than one, right?</i>
            <br/>Costs <b>{prettify(60000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/HH6K4Vq.png"
    },
    powerfulEngines: {
        isVisible: () => store.getState().buildings.bulldozer >= 50,
        isBuyable: () => store.getState().game.money >= 3e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3e+11)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Powerful Engines</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>"Gotta go fast." ~Sonic</i>
            <br/>Costs <b>{prettify(300000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/BXEfdVE.png"
    },
    bladesWithBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 75,
        isBuyable: () => store.getState().game.money >= 3e+12,
        buy: (dispatch) => dispatch(decreaseMoney(3e+12)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Blades With Blades</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Smaller blades on the blade. More blades, more damage.</i>
            <br/>Costs <b>{prettify(3000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/XKWl4gL.png"
    },
    diamondBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 100,
        isBuyable: () => store.getState().game.money >= 3e+13,
        buy: (dispatch) => dispatch(decreaseMoney(3e+13)),
        effect: {bulldozer: 3},
        text: <>
            <Typography color="inherit">Diamond Blades</Typography>
            Bulldozers do <b>three times</b> as much damage.
            <br/><i>"Why yes, we are one of the world's richest corporations. Why do you ask?" ~RUC Head of Finance</i>
            <br/>Costs <b>{prettify(30000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/AZU88GP.png"
    },
    adamantiumBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 150,
        isBuyable: () => store.getState().game.money >= 3e+15,
        buy: (dispatch) => dispatch(decreaseMoney(3e+15)),
        effect: {bulldozer: 3},
        text: <>
            <Typography color="inherit">Adamantium Blades</Typography>
            Bulldozers do <b>three times</b> as much damage.
            <br/><i>Cuts through diamond!(more effectively than this wall)</i>
            <br/>Costs <b>{prettify(3000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/crWt6tW.png"
    },
    theMegadozer: {
        isVisible: () => store.getState().buildings.bulldozer >= 200,
        isBuyable: () => store.getState().game.money >= 3e+17,
        buy: (dispatch) => dispatch(decreaseMoney(3e+17)),
        effect: {bulldozer: 4},
        text: <>
            <Typography color="inherit">The Megadozer</Typography>
            Bulldozers do <b>four times</b> as much damage.
            <br/><i>It's really, really big.</i>
            <br/>Costs <b>{prettify(300000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/jVDRDvc.png"
    },
    gravityAlteringEngines: {
        isVisible: () => store.getState().buildings.bulldozer >= 300,
        isBuyable: () => store.getState().game.money >= 2.4e+21,
        buy: (dispatch) => dispatch(decreaseMoney(2.4e+21)),
        effect: {bulldozer: 5},
        text: <>
            <Typography color="inherit">Gravity-Altering Engines</Typography>
            Bulldozers do <b>five times</b> as much damage.
            <br/><i>These assign all the nearby gravity to the bulldozers. And sideways so they hit the wall.</i>
            <br/>Costs <b>{prettify(2.4e+21)}</b> Cash
        </>,
        img: "http://i.imgur.com/F68kWwp.png"
    },
    explosiveBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 400,
        isBuyable: () => store.getState().game.money >= 2.4e+25,
        buy: (dispatch) => dispatch(decreaseMoney(2.4e+25)),
        effect: {},
        text: <>
            <Typography color="inherit">Explosive Blades</Typography>
            Bulldozers do <b>five times</b> as much damage.
            <br/><i>"No, it's not just bombs tied to the blades. That was an early prototype." ~Bulldozer Project
            Leader, RUC</i>
            <br/>Costs <b>{prettify(2.4e+25)}</b> Cash
        </>,
        img: "http://i.imgur.com/WQZmqRv.png"
    },
    hyzemsTablet: {
        isVisible: () => store.getState().buildings.bulldozer >= 500,
        isBuyable: () => store.getState().game.money >= 6e+29,
        buy: (dispatch) => dispatch(decreaseMoney(6e+29)),
        effect: {bulldozer: 7},
        text: <>
            <Typography color="inherit">Hyzem's Tablet</Typography>
            Bulldozers do <b>seven times</b> as much damage.
            <br/><i>Probably King Hyzem's strangest creation, the indestructible tablet that destroys everything it
            touches except one type of fabric. It says "CLEANSE". Let's tie it to a bulldozer blade.</i>
            <br/>Costs <b>{prettify(6e+29)}</b> Cash
        </>,
        img: "http://i.imgur.com/wzJXciZ.png"
    },
    roboticBulldozers: {
        isVisible: () => store.getState().buildings.bulldozer >= 700,
        isBuyable: () => store.getState().game.money >= 1.2e+38,
        buy: (dispatch) => dispatch(decreaseMoney(1.2e+38)),
        effect: {bulldozer: 5},
        text: <>
            <Typography color="inherit">Robotic Bulldozers</Typography>
            Bulldozers do <b>five times</b> as much damage.
            <br/><i>"DESTROY WALL. DESTROY WALL." ~Bulldozer #21
            <br/>"As you can see, we've created the perfect worker." ~Head of R&D
            <br/>"...Can you turn off the constant robot voice announcements?" ~Agent Carter
            <br/>"Nope."</i>
            <br/>Costs <b>{prettify(1.2e38)}</b> Cash
        </>,
        img: "http://i.imgur.com/taZMkYw.png"
    },
    phasingEngines: {
        isVisible: () => store.getState().buildings.bulldozer >= 125,
        isBuyable: () => store.getState().game.money >= 3.000300030003e+14 && store.getState().game.bricks >= 300,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.000300030003e+14));
            dispatch(decreaseBricks(300));
        },
        effect: {bulldozer: 3},
        text: <>
            <Typography color="inherit">Phasing Engines</Typography>
            Bulldozers do <b>three times</b> as much damage.
            <br/><i>Magically-enhanced engines that allow the dozers to teleport.</i>
            <br/>Costs <b>{prettify(300030003000300)}</b> Cash & <b>{prettify(300)}</b> Bricks
        </>,
        img: "http://i.imgur.com/DPbausO.png"
    },
    antimatterBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 250,
        isBuyable: () => store.getState().game.money >= 1.2001200120012001e+19 && store.getState().game.bricks >= 300000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.2001200120012001e+19));
            dispatch(decreaseBricks(300000000));
        },
        effect: {bulldozer: 4},
        text: <>
            <Typography color="inherit">Antimatter Blades</Typography>
            Bulldozers do <b>four times</b> as much damage.
            <br/><i>Antimatter is the new titanium.</i>
            <br/>Costs <b>{prettify(12001200120012001000)}</b> Cash & <b>{prettify(300000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/50pc780.png"
    },
    theUnstoppableForce: {
        isVisible: () => store.getState().buildings.bulldozer >= 350,
        isBuyable: () => store.getState().game.money >= 1.2001200120012002e+23 && store.getState().game.bricks >= 120000000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.2001200120012002e+23));
            dispatch(decreaseBricks(120000000000));
        },
        effect: {bulldozer: 5},
        text: <>
            <Typography color="inherit">The Unstoppable Force</Typography>
            Bulldozers do <b>five times</b> as much damage.
            <br/><i>This wall better not be the immovable barrier.</i>
            <br/>Costs <b>{prettify(1.2001200120012002e+23)}</b> Cash & <b>{prettify(120000000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/lKRKuaD.png"
    },
    blackEnhancedBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 600,
        isBuyable: () => store.getState().game.money >= 7.200072000720007e+33 && store.getState().game.bricks >= 720007200072000720007,
        buy: (dispatch) => {
            dispatch(decreaseMoney(7.200072000720007e+33));
            dispatch(decreaseBricks(720007200072000720007));
        },
        effect: {bulldozer: 6},
        text: <>
            <Typography color="inherit">Black-Enhanced Blades</Typography>
            Bulldozers do <b>six times</b> as much damage.
            <br/><i>"How long until we run out of verbs?" ~Agent Carter
            <br/>"Our best agents are browsing the thesaurus as we speak." ~Agent Connor</i>
            <br/>Costs <b>{prettify(7.200072000720007e+33)}</b> Cash & <b>{prettify(720007200072000720007)}</b> Bricks
        </>,
        img: "http://i.imgur.com/sfXVHT6.png"
    },
    indestructibleBulldozers: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 1201212000120012120 && store.getState().game.fourthWallBricks >= 1000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1201212000120012120));
            dispatch(decreaseFourthWallBricks(1000000));
        },
        effect: {bulldozer: 4},
        text: <>
            <Typography color="inherit">Indestructible Bulldozers</Typography>
            Bulldozers do <b>four times</b> as much damage.
            <br/><i>No more scratches!</i>
            <br/>Costs <b>{prettify(1201212000120012120)}</b> Cash & <b>{prettify(1000000)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/RCXwbSZ.png"
    },
}

export const {
    strongerBlades,
    powerTreads,
    doubleBlades,
    powerfulEngines,
    bladesWithBlades,
    diamondBlades,
    adamantiumBlades,
    theMegadozer,
    gravityAlteringEngines,
    explosiveBlades,
    hyzemsTablet,
    roboticBulldozers,

    phasingEngines,
    antimatterBlades,
    theUnstoppableForce,
    blackEnhancedBlades,
    indestructibleBulldozers,
} = upgrades