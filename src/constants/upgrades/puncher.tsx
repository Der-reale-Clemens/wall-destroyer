import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
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

const upgrades: { [key: string]: Upgrade } = {
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
    theFistsOfDestiny: {
        isVisible: () => store.getState().buildings.puncher >= 400,
        isBuyable: () => store.getState().game.money >= 2e+19,
        buy: (dispatch) => dispatch(decreaseMoney(2e+19)),
        effect: {hand: 1.5, puncher: 5},
        text: <>
            <Typography color="inherit">The Fists of Destiny</Typography>
            Punchers do <b>five times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>We found these in an old mine. They're thousands of years old and punch through anything!</i>
            <br/>Costs <b>{prettify(20000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/KoB491g.png"
    },
    eternityGloves: {
        isVisible: () => store.getState().buildings.puncher >= 500,
        isBuyable: () => store.getState().game.money >= 2e+23,
        buy: (dispatch) => dispatch(decreaseMoney(2e+23)),
        effect: {hand: 2, puncher: 7},
        text: <>
            <Typography color="inherit">Eternity Gloves</Typography>
            Punchers do <b>seven times</b> as much damage.
            <br/>Hand punches do <b>twice</b> as much damage.
            <br/><i>We found these in Agent Johnson's office trash can. When asked, he said "I've never seen those
            before."</i>
            <br/>Costs <b>{prettify(2e+23)}</b> Cash
        </>,
        img: "http://i.imgur.com/wxsTySo.png"
    },
    theMillion: {
        isVisible: () => store.getState().buildings.puncher >= 700,
        isBuyable: () => store.getState().game.money >= 2e+31,
        buy: (dispatch) => dispatch(decreaseMoney(2e+31)),
        effect: {hand: 2, puncher: 5},
        text: <>
            <Typography color="inherit">The Million</Typography>
            Punchers do <b>five times</b> as much damage.
            <br/>Hand punches do <b>twice</b> as much damage.
            <br/><i>"The nickname for Lord Reaefsek's terrifying... punching... thing. How do I describe it without
            having to describe it?" ~Agent Carter in the 1,000,000 proposal</i>
            <br/>Costs <b>{prettify(2e+31)}</b> Cash
        </>,
        img: "http://i.imgur.com/PhxmHqr.png"
    },
    finalityRockKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 900,
        isBuyable: () => store.getState().game.money >= 2e+39,
        buy: (dispatch) => dispatch(decreaseMoney(2e+39)),
        effect: {hand: 2, puncher: 4},
        text: <>
            <Typography color="inherit">Finality Rock Knuckles</Typography>
            Punchers do <b>four times</b> as much damage.
            <br/>Hand punches do <b>twice</b> as much damage.
            <br/><i>Protocol upon finding extremely powerful substance: Check if you can tie it to puncher knuckles.
            Then, like, research it or whatever less exciting stuff you do.
            <br/>
            <br/>As for the Plateau rocks themselves: they may be far less potent than the Trees, but they're still far
            more so than anything else we've got!</i>
            <br/>Costs <b>{prettify(2e39)}</b> Cash
        </>,
        img: "http://i.imgur.com/TRuR1pM.png"
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
            <br/>Also requires <b>125</b> Punchers
        </>,
        img: "http://i.imgur.com/kRu3uU8.png"
    },
    maganiumGauntlets: {
        isVisible: () => store.getState().buildings.puncher >= 250,
        isBuyable: () => store.getState().game.money >= 2.020202020202e+13 && store.getState().game.bricks >= 10,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.020202020202e+13));
            dispatch(decreaseBricks(10));
        },
        effect: {hand: 1.5, puncher: 4},
        text: <>
            <Typography color="inherit">Maganium Gauntlets</Typography>
            Punchers do <b>four times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>These gauntlets magically enhance your magically enhanced fists.</i>
            <br/>Costs <b>{prettify(20202020202020)}</b> Cash & <b>{prettify(10)}</b> Bricks
        </>,
        img: "http://i.imgur.com/PjH1TTm.png"
    },
    blackHoleGloves: {
        isVisible: () => store.getState().buildings.puncher >= 350,
        isBuyable: () => store.getState().game.money >= 2.0202020202020202e+17 && store.getState().game.bricks >= 200_000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.0202020202020202e+17));
            dispatch(decreaseBricks(200_000));
        },
        effect: {hand: 1.5, puncher: 5},
        text: <>
            <Typography color="inherit">Black Hole Gloves</Typography>
            Punchers do <b>five times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>"These may end up killing us all, but at least they'll take that damn wall down with us." ~CEO,
            RUC</i>
            <br/>Costs <b>{prettify(202020202020202020)}</b> Cash & <b>{prettify(200_000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/5bqbpYi.png"
    },
    blackDippedGloves: {
        isVisible: () => store.getState().buildings.puncher >= 600,
        isBuyable: () => store.getState().game.money >= 6.060606060606061e+27 && store.getState().game.bricks >= 60606060606060,
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.060606060606061e+27));
            dispatch(decreaseBricks(60606060606060));
        },
        effect: {hand: 1.5, puncher: 6},
        text: <>
            <Typography color="inherit">Black-Dipped Gloves</Typography>
            Punchers do <b>six times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>If we haven't mentioned it yet, The Black is a kind of rubbery tar-like substance that slowly moves
            like it's alive and absorbs and eats through everything. The antimatter gauntlets last a few hours; we're
            not wasting the Fists of Destiny or Eternity Gloves by testing it with them.</i>
            <br/>Costs <b>{prettify(6.060606060606061e+27)}</b> Cash & <b>{prettify(60606060606060)}</b> Bricks
        </>,
        img: "http://i.imgur.com/hIw2jGW.png"
    },
    chessKnuckles: {
        isVisible: () => store.getState().buildings.puncher >= 800,
        isBuyable: () => store.getState().game.money >= 2e+35 &&
            store.getState().game.bricks >= 2e24 &&
            store.getState().game.fourthWallBricks >= 2e21,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2e+35));
            dispatch(decreaseBricks(2e24));
            dispatch(decreaseFourthWallBricks(2e21));
        },
        effect: {hand: 2, puncher: 4},
        text: <>
            <Typography color="inherit">Chess Knuckles</Typography>
            Punchers do <b>four times</b> as much damage.
            <br/>Hand punches are <b>twice</b> as efficient.
            <br/><i>"Okay, let's review: You find a chess set. Shrouded in mystery, indestructible and incredibly
            powerful with reality editing, dating back to before Optuqui's time. You make... CHESS KNUCKLES." ~Agent
            Taylor
            <br/>"I don't understand your problem with this." ~Puncher Project Leader</i>
            <br/>Costs <b>{prettify(2e35)}</b> Cash & <b>{prettify(2e24)}</b> Bricks
            & <b>{prettify(2e21)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/wy0NkCV.png"
    },
    maximumSuperStrength: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 22020020022020002 &&
            store.getState().game.fourthWallBricks >= 50,
        buy: (dispatch) => {
            dispatch(decreaseMoney(22020020022020002));
            dispatch(decreaseFourthWallBricks(50));
        },
        effect: {hand: 2, puncher: 4},
        text: <>
            <Typography color="inherit">Maximum Super Strength</Typography>
            Punchers do <b>four times</b> as much damage.
            <br/>Hand punches do <b>50%</b> more damage.
            <br/><i>Thanks to rewriting the universe, they can now lift up to 8000 tons.</i>
            <br/>Costs <b>{prettify(22020020022020002)}</b> Cash & <b>{prettify(50)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/efQyJBe.png"
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
    theFistsOfDestiny,
    eternityGloves,
    theMillion,
    finalityRockKnuckles,
    magicallyEnhancedFists,
    maganiumGauntlets,
    blackHoleGloves,
    blackDippedGloves,
    chessKnuckles,
    maximumSuperStrength,
} = upgrades;