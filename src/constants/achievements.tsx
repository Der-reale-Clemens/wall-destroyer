import {store} from "../redux/store";
import {Typography} from "@material-ui/core";
import React from "react";
import overnabImg from "../images/achievements/overnab.png";
import scrubImg from "../images/achievements/scrub.png";
import lessScrubImg from "../images/achievements/lessScrub.png";

export interface Achievement {
    isUnlocked: () => boolean;
    text: JSX.Element;
    img: string;
}

export type AchievementKeys = keyof typeof achievements;

export const achievements: {[key: string]: Achievement} = {
    overnab: {
        isUnlocked: () => store.getState().game.damage >= 1,
        text: <>
            <Typography color="inherit">Overnab</Typography>
            Damage the wall.
        </>,
        img: overnabImg
    },
    scrub: {
        isUnlocked: () => store.getState().game.damage >= 100,
        text: <>
            <Typography color="inherit">Scrub</Typography>
            Deal <b>100</b> damage to the wall.
        </>,
        img: scrubImg
    },
    lessScrub: {
        isUnlocked: () => store.getState().game.damage >= 1000,
        text: <>
            <Typography color="inherit">Less of a Scrub</Typography>
            Deal <b>1,000</b> damage to the wall.
        </>,
        img: lessScrubImg
    },
}