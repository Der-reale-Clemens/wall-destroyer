import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
import {prettify} from "../../constants";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    fasterCommunications: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 1,
        isBuyable: () => store.getState().game.money >= 3e+10,
        buy: (dispatch) => dispatch(decreaseMoney(3e+10)),
        effect: {airstrikeCaller: 1.5},
        text: <>
            <Typography color="inherit">Faster Communications</Typography>
            Airstrikes do <b>50%</b> more damage.
            <br/><i>Upgrading from dial-up.</i>
            <br/>Costs <b>{prettify(30000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ziKked6.png"
    },
    pianos: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 5,
        isBuyable: () => store.getState().game.money >= 3e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3e+11)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Pianos</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>What, did you think we were dropping missiles?</i>
            <br/>Costs <b>{prettify(300000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/pGXsYZg.png"
    },
    anvils: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 25,
        isBuyable: () => store.getState().game.money >= 3e+12,
        buy: (dispatch) => dispatch(decreaseMoney(3e+12)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Anvils</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>Ah, a classic.</i>
            <br/>Costs <b>{prettify(3000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/0yGfwss.png"
    },
    supersonicJets: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 50,
        isBuyable: () => store.getState().game.money >= 1.5e+13,
        buy: (dispatch) => dispatch(decreaseMoney(1.5e+13)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Supersonic Jets</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>3-5 business days no more!</i>
            <br/>Costs <b>{prettify(15000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Mh3dfeG.png"
    },
    statues: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 75,
        isBuyable: () => store.getState().game.money >= 6e+13,
        buy: (dispatch) => dispatch(decreaseMoney(6e+13)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">20-Foot Statues</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>Statues of the CEO of the RUC of course.</i>
            <br/>Costs <b>{prettify(60000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Ec8NMPt.png"
    },
    anvilShapedBombs: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 100,
        isBuyable: () => store.getState().game.money >= 6e+14,
        buy: (dispatch) => dispatch(decreaseMoney(6e+14)),
        effect: {airstrikeCaller: 3},
        text: <>
            <Typography color="inherit">Anvil-Shaped Bombs</Typography>
            Airstrikes do <b>three times</b> as much damage.
            <br/><i>A lot more effective than anvils, and clearly better than using actual missiles.</i>
            <br/>Costs <b>{prettify(600000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/WdlfCsk.png"
    },
    missiles: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 150,
        isBuyable: () => store.getState().game.money >= 6e+16,
        buy: (dispatch) => dispatch(decreaseMoney(6e+16)),
        effect: {airstrikeCaller: 3},
        text: <>
            <Typography color="inherit">Missiles</Typography>
            Airstrikes do <b>three times</b> as much damage.
            <br/><i>Yeah, we gave in eventually.</i>
            <br/>Costs <b>{prettify(60000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/nkSdY4M.png"
    },
    nukes: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 200,
        isBuyable: () => store.getState().game.money >= 6e+18,
        buy: (dispatch) => dispatch(decreaseMoney(6e+18)),
        effect: {airstrikeCaller: 4},
        text: <>
            <Typography color="inherit">Nukes</Typography>
            Airstrikes do <b>four times</b> as much damage.
            <br/><i>A little overkill for a brick wall, you think? Well, you haven't seen this wall.</i>
            <br/>Costs <b>{prettify(6000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/kggtIiP.png"
    },
    astralMagnets: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 300,
        isBuyable: () => store.getState().game.money >= 6e+22,
        buy: (dispatch) => dispatch(decreaseMoney(6e+22)),
        effect: {airstrikeCaller: 5},
        text: <>
            <Typography color="inherit">Astral Magnets</Typography>
            Airstrikes do <b>five times</b> as much damage.
            <br/><i>We drop these and they pull down a bunch of asteroids with them. Also satellites, uh, that was
            unintentional.</i>
            <br/>Costs <b>{prettify(6e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/gXHS6sy.png"
    },
    biggerEverything: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 400,
        isBuyable: () => store.getState().game.money >= 1.5e+27,
        buy: (dispatch) => dispatch(decreaseMoney(1.5e+27)),
        effect: {airstrikeCaller: 5},
        text: <>
            <Typography color="inherit">Bigger Everything</Typography>
            Airstrikes do <b>five times</b> as much damage.
            <br/><i>"Bigger = More Damage" ~The entire BE proposal</i>
            <br/>Costs <b>{prettify(1.5e+27)}</b> Cash
        </>,
        img: "http://i.imgur.com/DcaMUp9.png"
    },
    theWallsOfBixtec: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 500,
        isBuyable: () => store.getState().game.money >= 1.5e+31,
        buy: (dispatch) => dispatch(decreaseMoney(1.5e+31)),
        effect: {airstrikeCaller: 7},
        text: <>
            <Typography color="inherit">The Walls of Bixtec</Typography>
            Airstrikes do <b>seven times</b> as much damage.
            <br/><i>Bixtec Castle was made to be impenetrable, so its walls are almost indestructible, very heavy, and
            magicked up to reflect any damage dealt to them back to their attacker. We knew immediately what to do.</i>
            <br/>Costs <b>{prettify(1.5e+31)}</b> Cash
        </>,
        img: "http://i.imgur.com/KqdTHwt.png"
    },
    theBoxesOfRelocation: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 700,
        isBuyable: () => store.getState().game.money >= 3.0003e+39,
        buy: (dispatch) => dispatch(decreaseMoney(3.0003e+39)),
        effect: {airstrikeCaller: 5},
        text: <>
            <Typography color="inherit">The Boxes of Relocation</Typography>
            Airstrikes do <b>five times</b> as much damage.
            <br/><i>Two boxes Lord Reaefsek made that relocate everything put into the "in" box to the "out" box. So
            obviously we should tie the out box upside-down to our space station so we can reduce our plane usage.</i>
            <br/>Costs <b>{prettify(3.0003e39)}</b> Cash
        </>,
        img: "http://i.imgur.com/pyvvTSj.png"
    },
    densitySpells: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 125,
        isBuyable: () => store.getState().game.money >= 3.000300030003e+15 && store.getState().game.bricks >= 2500,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.000300030003e+15));
            dispatch(decreaseBricks(2500));
        },
        effect: {airstrikeCaller: 3},
        text: <>
            <Typography color="inherit">Density Spells</Typography>
            Airstrikes do <b>three times</b> as much damage.
            <br/><i>How useful!</i>
            <br/>Costs <b>{prettify(3000300030003000)}</b> Cash & <b>{prettify(2500)}</b> Bricks
        </>,
        img: "http://i.imgur.com/xxfcJIo.png"
    },
    dimensionalPortal: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 250,
        isBuyable: () => store.getState().game.money >= 6.000600060006e+20 && store.getState().game.bricks >= 6000000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.000600060006e+20));
            dispatch(decreaseBricks(6000000000));
        },
        effect: {airstrikeCaller: 4},
        text: <>
            <Typography color="inherit">Dimensional Portals</Typography>
            Airstrikes do <b>four times</b> as much damage.
            <br/><i>Now we can empty the contents of other dimensions onto the wall!</i>
            <br/>Costs <b>{prettify(600060006000600000000)}</b> Cash & <b>{prettify(6000000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/rEOQtOS.png"
    },
    unknow: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 350,
        isBuyable: () => store.getState().game.money >= 6.000600060006e+24 && store.getState().game.bricks >= 6000000000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.000600060006e+24));
            dispatch(decreaseBricks(6000000000000));
        },
        effect: {airstrikeCaller: 5},
        text: <>
            <Typography color="inherit">???</Typography>
            Airstrikes do <b>five times</b> as much damage.
            <br/><i>We have no idea what this stuff is, but it does the trick. Thanks, dark wizards!</i>
            <br/>Costs <b>{prettify(6.000600060006e+24)}</b> Cash & <b>{prettify(6000000000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/2ySbj27.png"
    },
    blackMergedAnvils: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 600,
        isBuyable: () => store.getState().game.money >= 3.0003e+35 && store.getState().game.bricks >= 30003000300030003000300,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.0003e+35));
            dispatch(decreaseBricks(30003000300030003000300));
        },
        effect: {airstrikeCaller: 6},
        text: <>
            <Typography color="inherit">Black-Merged Anvils</Typography>
            Airstrikes do <b>six times</b> as much damage.
            <br/><i>"Is it time to buff the anvils? The answer is yes, always, forever." ~Agent Connor, in the BMA
            proposal
            <br/>"Finally, we agree." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(3.0003e35)}</b> Cash & <b>{prettify(30003000300030003000300)}</b> Bricks
        </>,
        img: "http://i.imgur.com/YqEx6Xx.png"
    },
    planets2: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 5050550050000505550 && store.getState().game.fourthWallBricks >= 10000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(5050550050000505550));
            dispatch(decreaseFourthWallBricks(10000000));
        },
        effect: {airstrikeCaller: 4},
        text: <>
            <Typography color="inherit">Planets</Typography>
            Airstrikes do <b>four times</b> as much damage.
            <br/><i>Yeah, we already used this, but it works here too.</i>
            <br/>Costs <b>{prettify(5050550050000505550)}</b> Cash & <b>{prettify(10000000)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/CS5T9De.png"
    },

}

export const {
    fasterCommunications,
    pianos,
    anvils,
    supersonicJets,
    statues,
    anvilShapedBombs,
    missiles,
    nukes,
    astralMagnets,
    biggerEverything,
    theWallsOfBixtec,
    theBoxesOfRelocation,

    densitySpells,
    dimensionalPortal,
    unknow,
    blackMergedAnvils,
    planets2,
} = upgrades;