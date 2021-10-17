import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@mui/material";
import overnabImg from "../../images/achievements/overnab.png";
import scrubImg from "../../images/achievements/scrub.png";
import lessScrubImg from "../../images/achievements/lessScrub.png";
import wallTapperImg from "../../images/achievements/wallTapper.png";
import wallPuncherImg from "../../images/achievements/wallPuncher.png";
import wallBreakerImg from "../../images/achievements/WallBreaker.png";
import wallSmasherImg from "../../images/achievements/WallSmasher.png";
import wallCrusherImg from "../../images/achievements/WallSmasher.png";
import wallDestroyerImg from "../../images/achievements/WallDestroyer.png";
import wallDestroyer2Img from "../../images/achievements/wallDestroyer2.png";
import wallDestroyer3Img from "../../images/achievements/wallDestroyer3.png";
import wallDestroyer4Img from "../../images/achievements/wallDestroyer4.png";
import wallDestroyer5Img from "../../images/achievements/wallDestroyer5.png";
import React from "react";

const achievements: {[key: string]: Achievement} = {
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
    wallTapper: {
        isUnlocked: () => store.getState().game.damage >= 10_000,
        text: <>
            <Typography color="inherit">Wall Tapper</Typography>
            Deal <b>10,000</b> damage to the wall.
        </>,
        img: wallTapperImg
    },
    wallPuncher: {
        isUnlocked: () => store.getState().game.damage >= 1_000_000,
        text: <>
            <Typography color="inherit">Wall Puncher</Typography>
            Deal <b>1,000,000</b> damage to the wall.
        </>,
        img: wallPuncherImg
    },
    wallBreaker: {
        isUnlocked: () => store.getState().game.damage >= 10_000_000,
        text: <>
            <Typography color="inherit">Wall Breaker</Typography>
            Deal <b>10,000,000</b> damage to the wall.
        </>,
        img: wallBreakerImg
    },
    wallSmasher: {
        isUnlocked: () => store.getState().game.damage >= 1_000_000_000,
        text: <>
            <Typography color="inherit">Wall Smasher</Typography>
            Deal <b>1,000,000,000</b> damage to the wall.
        </>,
        img: wallSmasherImg
    },
    wallCrusher: {
        isUnlocked: () => store.getState().game.damage >= 100_000_000_000,
        text: <>
            <Typography color="inherit">Wall Crusher</Typography>
            Deal <b>100,000,000,000</b> damage to the wall.
        </>,
        img: wallCrusherImg
    },
    wallDestroyer: {
        isUnlocked: () => store.getState().game.wall >= 1,
        text: <>
            <Typography color="inherit">Wall Destroyer</Typography>
            Destroy your first wall.<br/><i>You've earned the title!</i>
        </>,
        img: wallDestroyerImg
    },
    wallSlayer: {
        isUnlocked: () => store.getState().game.wall >= 2,
        text: <>
            <Typography color="inherit">Wall Slayer</Typography>
            Destroy the big second wall.
            <br/><i>"gettin sum slays" ~1337 sn1p3r #108</i>
        </>,
        img: wallDestroyer2Img
    },
    wallConquerer: {
        isUnlocked: () => store.getState().game.wall >= 3,
        text: <>
            <Typography color="inherit">Wall Conqueror</Typography>
            Destroy the huge third wall.
        </>,
        img: wallDestroyer3Img
    },
    suddenAwareness: {
        isUnlocked: () => store.getState().game.wall >= 4,
        text: <>
            <Typography color="inherit">Sudden Awareness </Typography>
            Destroy the massive fourth wall.
        </>,
        img: wallDestroyer4Img
    },
    youreAWinner: {
        isUnlocked: () => store.getState().game.wall >= 5,
        text: <>
            <Typography color="inherit">You're a Winner!</Typography>
            Destroy the final wall.
            <br/><i>*sounds of incredibly crappy 8-bit horns*</i>
        </>,
        img: wallDestroyer5Img
    },
}

export const {
    overnab,
    scrub,
    lessScrub,
    wallTapper,
    wallPuncher,
    wallBreaker,
    wallSmasher,
    wallCrusher,
    wallDestroyer,
    wallSlayer,
    wallConquerer,
    suddenAwareness,
    youreAWinner,
} = achievements;