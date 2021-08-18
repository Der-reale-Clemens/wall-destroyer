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
import brickFactoryImage from "../images/buildings/brickFactory.png";
import {store} from "../redux/store";

export interface Building {
    isUnlocked: () => boolean;
    cost: number;
    brickCost?: number;
    power: number;
    img: typeof puncherImage;
    type: string;
    description: string;
}

export const buildings = {
    puncher: {
        isUnlocked: () => true,
        cost: 20,
        power: 0.1,
        img: puncherImage,
        type: "Meele",
        description: "Punches the wall for you.",
    },
    clubber: {
        isUnlocked: () => true,
        cost: 100,
        power: 1,
        img: clubberImage,
        type: "Meele",
        description: "Not to be confused with the other kind of clubbing.",
    },
    swordsman: {
        isUnlocked: () => true,
        cost: 1100,
        power: 2.5,
        img: swordsmanImage,
        type: "Meele",
        description: "Some question the use of swords on a brick wall. Those guys are lame.",
    },
    gunshooter: {
        isUnlocked: () => true,
        cost: 16000,
        power: 30,
        img: gunshooterImage,
        type: "Ranged",
        description: "Shoots his gun.",
    },
    grenademan: {
        isUnlocked: () => true,
        cost: 400_000,
        power: 500,
        img: grenademanImage,
        type: "Ranged",
        description: "A man with grenades. I am a master of descriptions.",
    },
    wreckingBall: {
        isUnlocked: () => true,
        cost: 8_000_000,
        power: 7000,
        img: wreckingBallImage,
        type: "Heavy duty",
        description: "Something actually meant for destroying walls.",
    },
    bulldozer: {
        isUnlocked: () => true,
        cost: 120_000_000,
        power: 80_000,
        img: bulldozerImage,
        type: "Heavy duty",
        description: "Rams the wall. So good.",
    },
    airstrikeCaller: {
        isUnlocked: () => true,
        cost: 5_000_000_000,
        power: 2_500_000,
        img: airstrikeCallerImage,
        type: "Heavy duty",
        description: "You know, the guy that calls airstrikes.",
    },
    necromancer: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        cost: 66_666_666_666,
        brickCost: 1,
        power: 33_333_333,
        img: necromancerImage,
        type: "Magic",
        description: "Raises dead wizards to destroy the wall with their dark magic. Requires bricks."
    },
    titan: {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("unlockTitan"),
        cost: 888_888_888_888,
        power: 250_000_000,
        img: titanImage,
        type: "Magic",
        description: "The prime inhabitants of the Old World, back from the dead. They smash the wall with their giant fists."
    },
    demon : {
        isUnlocked: () => store.getState().upgrades.boughtUpgrades.includes("darkMagicMining"),
        cost: 0,
        brickCost: 666,
        power: 3_666_666_666,
        img: demonImage,
        type: "Magic",
        description: "Defiles the wall with the darkest magic of all."
    }
}

export type BuildingKeys = keyof typeof buildings;