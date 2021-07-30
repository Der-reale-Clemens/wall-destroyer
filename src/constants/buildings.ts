import puncherImage from "../images/buildings/puncher.png";
import clubberImage from "../images/buildings/clubber.png";
import swordsmanImage from "../images/buildings/swordsman.png";
import gunshooterImage from "../images/buildings/gunshooter.png";
import grenademanImage from "../images/buildings/grenademan.png";
import wreckingBallImage from "../images/buildings/wreckingBall.png";
import bulldozerImage from "../images/buildings/bulldozer.png";
import airstrikeCallerImage from "../images/buildings/airstrikeCaller.png";

export interface Building {
    cost: number;
    power: number;
    img: typeof puncherImage;
    type: string;
    description: string;
}

export const buildings = {
    puncher: {
        cost: 20,
        power: 0.1,
        img: puncherImage,
        type: "Meele",
        description: "Punches the wall for you.",
    },
    clubber: {
        cost: 100,
        power: 1,
        img: clubberImage,
        type: "Meele",
        description: "Not to be confused with the other kind of clubbing.",
    },
    swordsman: {
        cost: 1100,
        power: 2.5,
        img: swordsmanImage,
        type: "Meele",
        description: "Some question the use of swords on a brick wall. Those guys are lame.",
    },
    gunshooter: {
        cost: 16000,
        power: 30,
        img: gunshooterImage,
        type: "Ranged",
        description: "Shoots his gun.",
    },
    grenademan: {
        cost: 400_000,
        power: 500,
        img: grenademanImage,
        type: "Ranged",
        description: "A man with grenades. I am a master of descriptions.",
    },
    wreckingBall: {
        cost: 8_000_000,
        power: 7000,
        img: wreckingBallImage,
        type: "Heavy duty",
        description: "Something actually meant for destroying walls.",
    },
    bulldozer: {
        cost: 120_000_000,
        power: 80_000,
        img: bulldozerImage,
        type: "Heavy duty",
        description: "Rams the wall. So good.",
    },
    airstrikeCaller: {
        cost: 5_000_000_000,
        power: 2_500_000,
        img: airstrikeCallerImage,
        type: "Heavy duty",
        description: "You know, the guy that calls airstrikes.",
    }
}
export type BuildingKeys = keyof typeof buildings;