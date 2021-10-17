import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
import magicMiningImg from "../../images/upgrades/magicMining.png";
import React from "react";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    magicMining: {
        isVisible: () => store.getState().game.wall >= 1,
        isBuyable: () => store.getState().game.bricks >= 1,
        effect: {},
        buy: (dispatch) => dispatch(decreaseBricks(1)),
        text: <>
            <Typography color="inherit">Magic Mining</Typography>
            We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable
            resource.
            <br/>Costs <b>1</b> Brick
        </>,
        img: magicMiningImg,
    },
    deepMagicMining: {
        isVisible: () => store.getState().game.wall >= 2,
        isBuyable: () => store.getState().game.money >= 6.666666e13 && store.getState().game.bricks >= 6,
        effect: {necromancer: 2, titan: 1.5},
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.666666e13));
            dispatch(decreaseBricks(6));
        },
        text: <>
            <Typography color="inherit">Deep Magic Mining</Typography>
            Necromancers do <b>twice</b> as much damage.
            <br/>Titans do <b>50%</b> more damage.
            <br/>Unlocks the <b>brick factory</b>.
            <br/><i>The wizards are saying we shouldn't go this deep, but we found these cool dark magic tablets.</i>
            <br/>Costs <b>{prettify(6.666666e13)}</b> Cash & <b>6</b> Bricks
        </>,
        img: "http://i.imgur.com/3C1bIXe.png",
    },
    darkMagicMining: {
        isVisible: () => store.getState().game.wall >= 3,
        isBuyable: () => store.getState().game.money >= 6.666666e15 && store.getState().game.bricks >= 66_666,
        effect: {necromancer: 1.5},
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.666666e15));
            dispatch(decreaseBricks(66_666));
        },
        text: <>
            <Typography color="inherit">Dark Magic Mining</Typography>
            Summons <b>demons</b>.
            <br/>Necromancers and titans do <b>50%</b> more damage.
            <br/><i>We need to mine into hell with dark magic so we can make a deal with the devil to destroy the wall.
            Everything about this plan is excellent.</i>
            <br/>Costs <b>{prettify(6.666666e15)}</b> Cash & <b>{prettify(66_666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Z4p4G7T.png",
    },
    realityResearch: {
        isVisible: () => store.getState().game.wall >= 4,
        isBuyable: () => store.getState().game.money >= 404400040440040440 && store.getState().game.bricks >= 4_004_404,
        effect: {},
        buy: (dispatch) => {
            dispatch(decreaseMoney(404400040440040440));
            dispatch(decreaseBricks(4_004_404));
        },
        text: <>
            <Typography color="inherit">Reality Research</Typography>
            Unlocks <b>reality compromisers</b>.
            <br/>Unlocks the <b>4th wall upgrade tier</b>.
            <br/>We have discovered with the breaking of the 4th wall that we are all inside a stupid idle game. Not
            even a <i>real</i> game! But we can use this knowledge to our advantage...
            <br/>Costs <b>{prettify(404400040440040440)}</b> Cash & <b>{prettify(4_004_404)}</b> Bricks
        </>,
        img: " http://i.imgur.com/RH7gkh2.png",
    },
    blackResearch: {
        isVisible: () => store.getState().game.wall >= 5,
        isBuyable: () => store.getState().game.money >= 42000000000000000000,
        effect: {},
        buy: (dispatch) => dispatch(decreaseMoney(42000000000000000000)),
        text: <>
            <Typography color="inherit">Black Research</Typography>
            Unlocks <b>Black Obliterators</b>.
            <br/><i>We have discovered a substance in [REDACTED] that holds more power than anything we have ever
            encountered. We call it The Black because it is pitch black.</i>
            <br/>Costs <b>{prettify(42000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Pewjyq5.png",
    },
    unlockTitan: {
        isVisible: () => store.getState().game.wall >= 2,
        isBuyable: () => store.getState().game.bricks >= 16,
        effect: {necromancer: 2},
        buy: (dispatch) => dispatch(decreaseBricks(16)),
        text: <>
            <Typography color="inherit">Summon Titans</Typography>
            The wizards are willing to raise titans from the dead to help destroy the walls. This is a good idea.
            <br/>Costs <b>16</b> Bricks
        </>,
        img: "http://i.imgur.com/YYCAyYr.png",
    }
}

export const {
    magicMining,
    deepMagicMining,
    unlockTitan,
    darkMagicMining,
    realityResearch,
    blackResearch,
} = upgrades