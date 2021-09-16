import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    laserSights: {
        isVisible: () => store.getState().buildings.gunshooter >= 1,
        isBuyable: () => store.getState().game.money >= 8e+4,
        buy: (dispatch) => dispatch(decreaseMoney(8e+4)),
        effect: {gunshooter: 1.5},
        text: <>
            <Typography color="inherit">Laser Sights</Typography>
            Gunshooters do <b>50%</b> more damage.
            <br/><i>You wouldn't think you'd need these when your target is a brick wall, but the guys you hired are
            really bad at their job.</i>
            <br/>Costs <b>{prettify(80000)}</b> Cash
        </>,
        img: "http://i.imgur.com/d6qPAe1.png"
    },
    doubleMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 5,
        isBuyable: () => store.getState().game.money >= 8e+5,
        buy: (dispatch) => dispatch(decreaseMoney(8e+5)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Double Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>Less pesky reloading.</i>
            <br/>Costs <b>{prettify(800000)}</b> Cash
        </>,
        img: "http://i.imgur.com/rJl9TeZ.png"
    },
    quadrupleMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 25,
        isBuyable: () => store.getState().game.money >= 8e+6,
        buy: (dispatch) => dispatch(decreaseMoney(8e+6)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Quadruple Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>A little unwieldy, but agility isn't exactly the first priority when your opponent is a brick
            wall.</i>
            <br/>Costs <b>{prettify(8000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/IyI3G2S.png"
    },
    infiniteMagazines: {
        isVisible: () => store.getState().buildings.gunshooter >= 50,
        isBuyable: () => store.getState().game.money >= 8e+7,
        buy: (dispatch) => dispatch(decreaseMoney(8e+7)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Infinite Magazines</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>As seen in the movies!</i>
            <br/>Costs <b>{prettify(80000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ZexRC2F.png"
    },
    snipers: {
        isVisible: () => store.getState().buildings.gunshooter >= 75,
        isBuyable: () => store.getState().game.money >= 8e+8,
        buy: (dispatch) => dispatch(decreaseMoney(8e+8)),
        effect: {gunshooter: 2},
        text: <>
            <Typography color="inherit">Snipers</Typography>
            Gunshooters do <b>twice</b> as much damage.
            <br/><i>They prefer to be known as "1337 NoScOp3 sn1p3rs".</i>"
            <br/>Costs <b>{prettify(800000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/r4ii51b.png"
    },
    machineGuns: {
        isVisible: () => store.getState().buildings.gunshooter >= 100,
        isBuyable: () => store.getState().game.money >= 8e+9,
        buy: (dispatch) => dispatch(decreaseMoney(8e+9)),
        effect: {gunshooter: 3},
        text: <>
            <Typography color="inherit">Machine Guns</Typography>
            Gunshooters do <b>three times</b> as much damage.
            <br/><i>"pistols r 4 overnabz" ~1337 NoScOp3 sn1p3r #33</i>"
            <br/>Costs <b>{prettify(8000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/EItFPd4.png"
    },
    plasmaRifles: {
        isVisible: () => store.getState().buildings.gunshooter >= 150,
        isBuyable: () => store.getState().game.money >= 4e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4e+11)),
        effect: {gunshooter: 3},
        text: <>
            <Typography color="inherit">Plasma Rifles</Typography>
            Gunshooters do <b>three times</b> as much damage.
            <br/><i>Thanks, sci-fi technology!</i>
            <br/>Costs <b>{prettify(400000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/eAFR8kh.png"
    },
    laserChainsawGatlingGuns: {
        isVisible: () => store.getState().buildings.gunshooter >= 200,
        isBuyable: () => store.getState().game.money >= 1.6e+13,
        buy: (dispatch) => dispatch(decreaseMoney(1.6e+13)),
        effect: {gunshooter: 4},
        text: <>
            <Typography color="inherit">Laser Chainsaw Gatling Guns</Typography>
            Gunshooters do <b>four times</b> as much damage.
            <br/><i>We told R&D to be as ridiculous as they could with this, and boy did they deliver.</i>
            <br/>Costs <b>{prettify(16000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/2oIB7lS.png"
    },
    unstoppableBullets: {
        isVisible: () => store.getState().buildings.gunshooter >= 300,
        isBuyable: () => store.getState().game.money >= 1.6e+17,
        buy: (dispatch) => dispatch(decreaseMoney(1.6e+17)),
        effect: {gunshooter: 5},
        text: <>
            <Typography color="inherit">Unstoppable Bullets</Typography>
            Gunshooters do <b>five times</b> as much damage.
            <br/><i>This couldn't possibly have negative effects and is a great idea.</i>
            <br/>Costs <b>{prettify(160000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/1QXsFlH.png"
    },
    everyGunCombinedIntoOne: {
        isVisible: () => store.getState().buildings.gunshooter >= 400,
        isBuyable: () => store.getState().game.money >= 3.2e+21,
        buy: (dispatch) => dispatch(decreaseMoney(3.2e+21)),
        effect: {gunshooter: 5},
        text: <>
            <Typography color="inherit">Every Gun Combined Into One</Typography>
            Gunshooters do <b>five times</b> as much damage.
            <br/><i>"gg" ~1337 sn1p3r #52</i>
            <br/>Costs <b>{prettify(3.2e+21)}</b> Cash
        </>,
        img: "http://i.imgur.com/OrTrCod.png"
    },
    hyzemsGoldenRifle: {
        isVisible: () => store.getState().buildings.gunshooter >= 500,
        isBuyable: () => store.getState().game.money >= 6.4e+25,
        buy: (dispatch) => dispatch(decreaseMoney(6.4e+25)),
        effect: {gunshooter: 7},
        text: <>
            <Typography color="inherit">Hyzem's Golden Rifle</Typography>
            Gunshooters do <b>seven times</b> as much damage.
            <br/><i>We profited from Hyzem and Reaefsek's war, because they made a ton of powerful magical artifacts
            during it.</i>
            <br/>Costs <b>{prettify(6.4e+25)}</b> Cash
        </>,
        img: "http://i.imgur.com/V95QmIo.png"
    },
    reaefseksCrimsonRifle: {
        isVisible: () => store.getState().buildings.gunshooter >= 700,
        isBuyable: () => store.getState().game.money >= 1.6e+34,
        buy: (dispatch) => dispatch(decreaseMoney(1.6e+34)),
        effect: {gunshooter: 5},
        text: <>
            <Typography color="inherit">Reaefsek's Crimson Rifle</Typography>
            Gunshooters do <b>five times</b> as much damage.
            <br/><i>King Hyzem is credited as the first ever to claim "copyscum".</i>
            <br/>Costs <b>{prettify(1.6e34)}</b> Cash
        </>,
        img: "http://i.imgur.com/zZXuikn.png"
    },
    magicBullets: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        isBuyable: () => store.getState().game.money >= 4.00040004e+10 &&
            store.getState().game.bricks >= 1 &&
            store.getState().buildings.gunshooter >= 125,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.00040004e+10));
            dispatch(decreaseBricks(1));
        },
        effect: {gunshooter: 3},
        text: <>
            <Typography color="inherit">Magic Bullets</Typography>
            Gunshooters do <b>three times</b> as much damage.
            <br/><i>They're magic so they do more damage.</i>
            <br/>Costs <b>{prettify(40004000400)}</b> Cash & <b>{prettify(1)}</b> Brick
            <br/>Also requires <b>125</b> Gunshooters
        </>,
        img: "http://i.imgur.com/IbegX1u.png"
    },
    pureMagicBullets: {
        isVisible: () => store.getState().buildings.gunshooter >= 250,
        isBuyable: () => store.getState().game.money >= 8.000800080008e+14 && store.getState().game.bricks >= 80_000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(8.000800080008e+14));
            dispatch(decreaseBricks(80_000));
        },
        effect: {gunshooter: 4},
        text: <>
            <Typography color="inherit">Pure Magic Bullets</Typography>
            Gunshooters do <b>four times</b> as much damage.
            <br/><i>The wizards told us you can actually make things out of pure magic, so we capitalized on that
            immediately.</i>
            <br/>Costs <b>{prettify(800080008000800)}</b> Cash & <b>{prettify(80_000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/4Lzho0L.png"
    },
    theBestGun: {
        isVisible: () => store.getState().buildings.gunshooter >= 350,
        isBuyable: () => store.getState().game.money >= 4.000400040004e+19 && store.getState().game.bricks >= 400000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.000400040004e+19));
            dispatch(decreaseBricks(400000000));
        },
        effect: {gunshooter: 5},
        text: <>
            <Typography color="inherit">The Best Gun</Typography>
            Gunshooters do <b>five times</b> as much damage.
            <br/><i>As employed by 12 year olds everywhere.</i>
            <br/>Costs <b>{prettify(40004000400040000000)}</b> Cash & <b>{prettify(400000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/pTa1WAu.png"
    },
    blackBullets: {
        isVisible: () => store.getState().buildings.gunshooter >= 600,
        isBuyable: () => store.getState().game.money >= 9.60009600096001e+29 && store.getState().game.bricks >= 960009600096000960,
        buy: (dispatch) => {
            dispatch(decreaseMoney(9.60009600096001e+29));
            dispatch(decreaseBricks(960009600096000960));
        },
        effect: {gunshooter: 6},
        text: <>
            <Typography color="inherit">Black Bullets</Typography>
            Gunshooters do <b>six times</b> as much damage.
            <br/><i>"I support this because then I will be able to tell people that we're destroying the walls with BB
            guns and actually be telling the truth." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(9.60009600096001e+29)}</b> Cash & <b>{prettify(960009600096000960)}</b> Bricks
        </>,
        img: "http://i.imgur.com/GQyW8ni.png"
    },
    consciosnessSegmentation: {
        isVisible: () => store.getState().buildings.gunshooter >= 800,
        isBuyable: () => store.getState().game.money >= 1.6e+38 &&
            store.getState().game.bricks >= 1.6e27 &&
            store.getState().game.fourthWallBricks >= 1.6e23,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.6e+36));
            dispatch(decreaseBricks(1.6e27));
            dispatch(decreaseFourthWallBricks(1.6e23));
        },
        effect: {gunshooter: 4},
        text: <>
            <Typography color="inherit">Consciousness Segmentation</Typography>
            Gunshooters do <b>four times</b> as much damage.
            <br/><i>One of the scripts written in the Divine Instructions. Allows the 1337 sn1p3rs to play first person
            shooters while destroying the wall, thus making their dream a reality.</i>
            <br/>Costs <b>{prettify(1.6e38)}</b> Cash & <b>{prettify(1.6e27)}</b> Bricks
            & <b>{prettify(1.6e23)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/zS1s1Fp.png"
    },
    crossoverGuns: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 88800808800008008 && store.getState().game.fourthWallBricks >= 10_000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(88800808800008008));
            dispatch(decreaseFourthWallBricks(10_000));
        },
        effect: {gunshooter: 4},
        text: <>
            <Typography color="inherit">Crossover Guns</Typography>
            Gunshooters do <b>four times</b> as much damage.
            <br/><i>Let's just reach over into other fictional universes
            and grab ourselves some good guns.</i>
            <br/>Costs <b>{prettify(88800808800008008)}</b> Cash & <b>{prettify(10_000)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/Mdp9R1V.png"
    },

}

export const {
    laserSights,
    doubleMagazines,
    quadrupleMagazines,
    infiniteMagazines,
    snipers,
    machineGuns,
    plasmaRifles,
    laserChainsawGatlingGuns,
    unstoppableBullets,
    everyGunCombinedIntoOne,
    hyzemsGoldenRifle,
    reaefseksCrimsonRifle,

    magicBullets,
    pureMagicBullets,
    theBestGun,
    blackBullets,
    consciosnessSegmentation,
    crossoverGuns,
} = upgrades;