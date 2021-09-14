import puncherImage from "../images/buildings/puncher.png";
import clubberImage from "../images/buildings/clubber.png";
import swordsmanImage from "../images/buildings/swordsman.png";
import gunshooterImage from "../images/buildings/gunshooter.png";
import grenademanImage from "../images/buildings/grenademan.png";
import wreckingBallImage from "../images/buildings/wreckingBall.png";
import bulldozerImage from "../images/buildings/bulldozer.png";
import airstrikeCallerImage from "../images/buildings/airstrikeCaller.png";
import necromancerImage from "../images/buildings/necromancer.png";
import titanImage from "../images/buildings/titan.png";
import demonImage from "../images/buildings/demon.png";
import realityCompromiserImage from "../images/buildings/realityCompromiser.png";
import blackObliteratorImage from "../images/buildings/blackObliterator.png";
import brickFactoryImage from "../images/buildings/brickFactory.png";
import {store} from "../redux/store";
import {Typography} from "@material-ui/core";
import React from "react";
import {prettify} from "../constants";

export interface Building {
    isUnlocked: () => boolean;
    cost: number;
    brickCost?: number;
    fourthWallBrickCost?: number;
    power: number;
    img: typeof puncherImage;
    description: string;
}

export const buildings = {
    puncher: {
        isUnlocked: () => true,
        cost: 20,
        power: 0.1,
        img: puncherImage,
        description: <>
            <Typography color="inherit">Puncher</Typography>
            Melee Building
            <br/>
            Does <b>{prettify(0.1)}</b> base damage.
            <br/>
            <em>Punches the wall for you</em></>
    },
    clubber: {
        isUnlocked: () => true,
        cost: 100,
        power: 1,
        img: clubberImage,
        description: <>
            <Typography color="inherit">Clubber</Typography>
            Melee Building
            <br/>
            Does <b>{prettify(1)}</b> base damage.
            <br/>
            <em>Not to be confused with the other kind of clubbing.</em></>,
    },
    swordsman: {
        isUnlocked: () => true,
        cost: 1100,
        power: 2.5,
        img: swordsmanImage,
        description: <>
            <Typography color="inherit">Swordsman</Typography>
            Melee Building
            <br/>
            Does <b>{prettify(2.5)}</b> base damage.
            <br/>
            <em>Some question the use of swords on a brick wall. Those guys are lame.</em></>,
    },
    gunshooter: {
        isUnlocked: () => true,
        cost: 16000,
        power: 30,
        img: gunshooterImage,
        description: <>
            <Typography color="inherit">Gunshooter</Typography>
            Ranged Building
            <br/>
            Does <b>{prettify(30)}</b> base damage.
            <br/>
            <em>Shoots his gun.</em></>,
    },
    grenademan: {
        isUnlocked: () => true,
        cost: 400_000,
        power: 500,
        img: grenademanImage,
        description: <>
            <Typography color="inherit">Grenademan</Typography>
            Ranged Building
            <br/>
            Does <b>{prettify(500)}</b> base damage.
            <br/>
            <em>A man with grenades. I am a master of descriptions.</em></>,
    },
    wreckingBall: {
        isUnlocked: () => true,
        cost: 8_000_000,
        power: 7000,
        img: wreckingBallImage,
        description: <>
            <Typography color="inherit">Wrecking Ball</Typography>
            Heavy duty Building
            <br/>
            Does <b>{prettify(7000)}</b> base damage.
            <br/>
            <em>Something actually meant for destroying walls.</em></>,
    },
    bulldozer: {
        isUnlocked: () => true,
        cost: 120_000_000,
        power: 80_000,
        img: bulldozerImage,
        description: <>
            <Typography color="inherit">Bulldozer</Typography>
            Heavy duty Building
            <br/>
            Does <b>{prettify(80_000)}</b> base damage.
            <br/>
            <em>Rams the wall. So good.</em></>,
    },
    airstrikeCaller: {
        isUnlocked: () => true,
        cost: 5_000_000_000,
        power: 2_500_000,
        img: airstrikeCallerImage,
        description: <>
            <Typography color="inherit">Airstrike Caller</Typography>
            Heavy duty Building
            <br/>
            Does <b>{prettify(2_500_000)}</b> base damage.
            <br/>
            <em>You know, the guy that calls airstrikes.</em></>,
    },
    necromancer: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        cost: 66_666_666_666,
        brickCost: 1,
        power: 33_333_333,
        img: necromancerImage,
        description: <>
            <Typography color="inherit">Necromancer</Typography>
            Magic Building
            <br/>
            Does <b>{prettify(33_333_333)}</b> base damage.
            <br/>
            <em>Raises dead wizards to destroy the wall with their dark magic. Requires bricks.</em></>,
    },
    titan: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("unlockTitan"),
        cost: 888_888_888_888,
        power: 250_000_000,
        img: titanImage,
        description: <>
            <Typography color="inherit">Titan</Typography>
            Magic Building
            <br/>
            Does <b>{prettify(250_000_000)}</b> base damage.
            <br/>
            <em>The prime inhabitants of the Old World, back from the dead. They smash the wall with their giant
                fists.</em></>,
    },
    demon: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("darkMagicMining"),
        cost: 0,
        brickCost: 666,
        power: 3_666_666_666,
        img: demonImage,
        description: <>
            <Typography color="inherit">Demon</Typography>
            Magic Building
            <br/>
            Does <b>{prettify(3_666_666_666)}</b> base damage.
            <br/>
            <em>Defiles the wall with the darkest magic of all.</em></>,
    },
    realityCompromiser: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        cost: 100_101_001_011_010,
        power: 40_000_000_000,
        img: realityCompromiserImage,
        description: <>
            <Typography color="inherit">Reality Compromiser</Typography>
            Dream Building
            <br/>
            Does <b>{prettify(40_000_000_000)}</b> base damage.
            <br/>Gives <b>0.1</b> fourth wall bricks.
            <br/>
            <em>Enters reality code and removes the wall from existence.</em></>,
    },
    blackObliterator: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("blackResearch"),
        cost: 52_000_000_000_000_000_000,
        fourthWallBrickCost: 52_000,
        power: 1_000_000_000_000_000,
        img: blackObliteratorImage,
        description: <>
            <Typography color="inherit">Black Obliterator</Typography>
            Dream Building
            <br/>
            Does <b>{prettify(1_000_000_000_000_000)}</b> base damage.
            <br/>
            <em>Robots covered in The Black. They're really cool, so no one questions mixing the most dangerous & evil
                thing ever with cold, unfeeling robots.</em></>,
    },
    brickFactory: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("deepMagicMining"),
        cost: 16_666_666_666_666,
        power: 0.05,
        img: brickFactoryImage,
        description: <>
            <Typography color="inherit">Brick Factory</Typography>
            Special Building
            <br/>
            Creates <b>0.05</b> base bricks.
            <br/>
            <em>Creates artificial bricks with dark magic. The wizards will never know.</em></>,
    }
}

export type BuildingKeys = keyof typeof buildings;