import {Upgrade} from "../../upgrades";
import {store} from "../../../redux/store";
import {decreaseMoney} from "../../../redux/GameSlice";
import {Typography} from "@mui/material";
import {prettify} from "../../../constants";

const upgrades: { [key: string]: Upgrade } = {
    teamUp: {
        isVisible: () => store.getState().buildings.puncher >= 50,
        isBuyable: () => store.getState().game.money >= 21111,
        buy: (dispatch) => dispatch(decreaseMoney(21111)),
        effect: {hand: () => 1 + store.getState().buildings.puncher * 0.04},
        text: <>
            <Typography color="inherit">Team Up</Typography>
            Hand punches do <b>4%</b> more damage per puncher.
            <br/><i>Get a morale boost from the fact that you're hiring people to punch a wall.</i>
            <br/>Costs <b>{prettify(21111)}</b> Cash
        </>,
        img: "http://i.imgur.com/K4S6bwX.png"
    },
    comeTogether: {
        isVisible: () => store.getState().buildings.puncher >= 100,
        isBuyable: () => store.getState().game.money >= 2.1111111e+7,
        buy: (dispatch) => dispatch(decreaseMoney(2.1111111e+7)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.02,
            puncher: 1.5
        },
        text: <>
            <Typography color="inherit">Come Together</Typography>
            Hand punches do <b>2%</b> more damage per puncher.
            <br/>Punchers do <b>50%</b> more damage.
            <br/><i>The weak become strong(er).</i>
            <br/>Costs <b>{prettify(21111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/mpYQ0Cj.png"
    },
    standingOvation: {
        isVisible: () => store.getState().buildings.puncher >= 200,
        isBuyable: () => store.getState().game.money >= 4.22222222222e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4.22222222222e+11)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.01,
            puncher: 2
        },
        text: <>
            <Typography color="inherit">Standing Ovation</Typography>
            Hand punches do <b>1%</b> more damage per puncher.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>After you gave a great inspiring speech about punching walls.</i>
            <br/>Costs <b>{prettify(422222222222)}</b> Cash
        </>,
        img: "http://i.imgur.com/zL6FPFt.png"
    },
    theChallenge: {
        isVisible: () => store.getState().buildings.puncher >= 300,
        isBuyable: () => store.getState().game.money >= 1.0555555555555556e+16,
        buy: (dispatch) => dispatch(decreaseMoney(1.0555555555555556e+16)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.008,
            puncher: 2
        },
        text: <>
            <Typography color="inherit">The Challenge</Typography>
            Hand punches do <b>0.8%</b> more damage per puncher.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>To destroy the wall with only your fists.</i>
            <br/>Costs <b>{prettify(10555555555555556)}</b> Cash
        </>,
        img: "http://i.imgur.com/REcsTwa.png"
    },
    finalTeamUp: {
        isVisible: () => store.getState().buildings.puncher >= 400,
        isBuyable: () => store.getState().game.money >= 1.0555555555555556e+20,
        buy: (dispatch) => dispatch(decreaseMoney(1.0555555555555556e+20)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.003,
            puncher: 2
        },
        text: <>
            <Typography color="inherit">Final Team Up</Typography>
            Hand punches do <b>0.3%</b> more damage per puncher.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>To defeat the walls once and for all!</i>
            <br/>Costs <b>{prettify(105555555555555560000)}</b> Cash
        </>,
        img: "http://i.imgur.com/7kwTlaV.png"
    },
    ultraTeamUp: {
        isVisible: () => store.getState().buildings.puncher >= 500,
        isBuyable: () => store.getState().game.money >= 4.222222222222222e+23,
        buy: (dispatch) => dispatch(decreaseMoney(4.222222222222222e+23)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.002,
            puncher: 2
        },
        text: <>
            <Typography color="inherit">Ultra Team Up</Typography>
            Hand punches do <b>0.2%</b> more damage per puncher.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>We lied about the last one being final, but it's not like we can just stop upgrading!</i>
            <br/>Costs <b>{prettify(4.222222222222222e+23)}</b> Cash
        </>,
        img: "http://i.imgur.com/RmIVXGc.png"
    },
    energyDraining: {
        isVisible: () => store.getState().buildings.puncher >= 700,
        isBuyable: () => store.getState().game.money >= 4.222222222222222e+31,
        buy: (dispatch) => dispatch(decreaseMoney(4.222222222222222e+31)),
        effect: {
            hand: () => 1 + store.getState().buildings.puncher * 0.002,
            puncher: 2
        },
        text: <>
            <Typography color="inherit">Energy Draining</Typography>
            Hand punches do <b>0.2%</b> more damage per puncher.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>With additional duplicating so the punchers don't lose any power. They'll complain, but you're
            clearly better than them.</i>
            <br/>Costs <b>{prettify(4.222222222222222e+31)}</b> Cash
        </>,
        img: "http://i.imgur.com/LAaQh56.png"
    },


    clubKnuckles: {
        isVisible: () => store.getState().buildings.clubber >= 50,
        isBuyable: () => store.getState().game.money >= 1e+6,
        buy: (dispatch) => dispatch(decreaseMoney(1e+6)),
        effect: {hand: () => 1 + store.getState().buildings.clubber * 0.01},
        text: <>
            <Typography color="inherit">Club Knuckles</Typography>
            Hand punches do <b>1%</b> more damage per clubber.
            <br/><i>They're like clubs tied to your knuckles. Another brilliant invention from the Realistic Upgrades
            Corporation(RUC).</i>
            <br/>Costs <b>{prettify(1000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/xDZyr8d.png"
    },
    swordKnuckles: {
        isVisible: () => store.getState().buildings.swordsman >= 50,
        isBuyable: () => store.getState().game.money >= 7.5e+6,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+6)),
        effect: {hand: () => 1 + store.getState().buildings.swordsman * 0.01},
        text: <>
            <Typography color="inherit">Sword Knuckles</Typography>
            Hand punches do <b>1%</b> more damage per swordsman.
            <br/><i>We're currently trying to figure out how to combine these with the club knuckles. Then, our work
            here will be done.</i>
            <br/>Costs <b>{prettify(7500000)}</b> Cash
        </>,
        img: "http://i.imgur.com/9ZiSEAZ.png"
    },
    bulletPunch: {
        isVisible: () => store.getState().buildings.gunshooter >= 50,
        isBuyable: () => store.getState().game.money >= 1e+8,
        buy: (dispatch) => dispatch(decreaseMoney(1e+8)),
        effect: {hand: () => 1 + store.getState().buildings.gunshooter * 0.01},
        text: <>
            <Typography color="inherit">Bullet Punch</Typography>
            Hand punches do <b>1%</b> more damage per gunshooter.
            <br/><i>An ancient technique passed down by the wall punching masters.</i>
            <br/>Costs <b>{prettify(100000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/fH9Bzpc.png"
    },
    fistGrenades: {
        isVisible: () => store.getState().buildings.grenademan >= 50,
        isBuyable: () => store.getState().game.money >= 2.5e+9,
        buy: (dispatch) => dispatch(decreaseMoney(2.5e+9)),
        effect: {hand: () => 1 + store.getState().buildings.grenademan * 0.01},
        text: <>
            <Typography color="inherit">Fist Grenades</Typography>
            Hand punches do <b>1%</b> more damage per grenademan.
            <br/><i>I honestly don't know what these are. Feel free to imagine them how you want.</i>
            <br/>Costs <b>{prettify(2500000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/wdE5w9X.png"
    },
    wreckingBallPunch: {
        isVisible: () => store.getState().buildings.wreckingBall >= 50,
        isBuyable: () => store.getState().game.money >= 5e+10,
        buy: (dispatch) => dispatch(decreaseMoney(5e+10)),
        effect: {hand: () => 1 + store.getState().buildings.wreckingBall * 0.01},
        text: <>
            <Typography color="inherit">Wrecking Ball Punch</Typography>
            Hand punches do <b>1%</b> more damage per wrecking ball.
            <br/><i>Another legendary technique.</i>
            <br/>Costs <b>{prettify(50000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/eO38cOQ.png"
    },
    bulldozerStrike: {
        isVisible: () => store.getState().buildings.bulldozer >= 50,
        isBuyable: () => store.getState().game.money >= 5e+11,
        buy: (dispatch) => dispatch(decreaseMoney(5e+11)),
        effect: {hand: () => 1 + store.getState().buildings.bulldozer * 0.01},
        text: <>
            <Typography color="inherit">Bulldozer Strike</Typography>
            Hand punches do <b>1%</b> more damage per bulldozer.
            <br/><i>This isn't actually a legendary technique, we just made it up.</i>
            <br/>Costs <b>{prettify(500000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/4teEkYK.png"
    },
    skydiving: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 50,
        isBuyable: () => store.getState().game.money >= 2e+13,
        buy: (dispatch) => dispatch(decreaseMoney(2e+13)),
        effect: {hand: () => 1 + store.getState().buildings.airstrikeCaller * 0.01},
        text: <>
            <Typography color="inherit">Skydiving</Typography>
            Hand punches do <b>1%</b> more damage per airstrike caller.
            <br/><i>30,000 feet of DAMAGE!</i>
            <br/>Costs <b>{prettify(20000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/2Os5vuG.png"
    },
    zombification:{
        isVisible: () => store.getState().buildings.necromancer >= 50,
        isBuyable: () => store.getState().game.money >= 5e+14,
        buy: (dispatch) => dispatch(decreaseMoney(5e+14)),
        effect: {hand: () => 1 + store.getState().buildings.necromancer * 0.01},
        text: <>
            <Typography color="inherit">Zombification</Typography>
            Hand punches do <b>1%</b> more damage per necromancer.
            <br/><i>Now you don't have to waste hours sleeping.</i>
            <br/>Costs <b>{prettify(500000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/LXWPMiN.png"
    },
    ancientTechniques:{
        isVisible: () => store.getState().buildings.titan >= 50,
        isBuyable: () => store.getState().game.money >= 5e+15,
        buy: (dispatch) => dispatch(decreaseMoney(5e+15)),
        effect: {hand: () => 1 + store.getState().buildings.titan * 0.01},
        text: <>
            <Typography color="inherit">Ancient Techniques</Typography>
            Hand punches do <b>1%</b> more damage per titan.
            <br/><i>The walls were around even in the Old World, and with the walls comes wall punching.</i>
            <br/>Costs <b>{prettify(5000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/NYQFO1N.png"
    },
    fistOfEvil:{
        isVisible: () => store.getState().buildings.demon >= 50,
        isBuyable: () => store.getState().game.money >= 7e+5,
        buy: (dispatch) => dispatch(decreaseMoney(7e+5)),
        effect: {hand: () => 1 + store.getState().buildings.demon * 0.005},
        text: <>
            <Typography color="inherit">Fist of Evil</Typography>
            Hand punches do <b>0.5%</b> more damage per demon.
            <br/><i>It doesn't matter how evil or horrible the technique, all that matters is that the wall comes down!</i>
            <br/>Costs <b>{prettify(700000)}</b> Cash
        </>,
        img: "http://i.imgur.com/8COb4Z5.png"
    },
    invulnerability:{
        isVisible: () => store.getState().buildings.realityCompromiser >= 50,
        isBuyable: () => store.getState().game.money >= 6e+17,
        buy: (dispatch) => dispatch(decreaseMoney(6e+17)),
        effect: {hand: () => 1 + store.getState().buildings.realityCompromiser * 0.005},
        text: <>
            <Typography color="inherit">Invulnerability</Typography>
            Hand punches do <b>0.5%</b> more damage per reality compromiser.
            <br/><i>Sometimes it hurts to punch a brick wall. Not anymore!</i>
            <br/>Costs <b>{prettify(600000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/3tap4AJ.png"
    },
    fistOfTheBlack:{
        isVisible: () => store.getState().buildings.blackObliterator >= 50,
        isBuyable: () => store.getState().game.money >= 3e+22,
        buy: (dispatch) => dispatch(decreaseMoney(3e+22)),
        effect: {hand: () => 1 + store.getState().buildings.blackObliterator * 0.005},
        text: <>
            <Typography color="inherit">Fist of The Black</Typography>
            Hand punches do <b>0.5%</b> more damage per Black obliterator.
            <br/><i>Since you're invulnerable, you are the only person who can touch The Black without dying a horrible, painful death.</i>
            <br/>Costs <b>{prettify(3e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/pFyHQUx.png"
    },
    brickKnuckles:{
        isVisible: () => store.getState().buildings.brickFactory >= 50,
        isBuyable: () => store.getState().game.money >= 5e+16,
        buy: (dispatch) => dispatch(decreaseMoney(5e+16)),
        effect: {hand: () => 1 + store.getState().buildings.brickFactory * 0.005},
        text: <>
            <Typography color="inherit">Brick Knuckles</Typography>
            Hand punches do <b>0.5%</b> more damage per brick factory.
            <br/>Manual brick creation creates <b>4%</b> more bricks per brick factory.
            <br/><i>Fight fire with fire!</i>
            <br/>Costs <b>{prettify(50000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/pcHLrGL.png"
    },

}

export const {
    teamUp,
    comeTogether,
    standingOvation,
    theChallenge,
    finalTeamUp,
    ultraTeamUp,
    energyDraining,

    clubKnuckles,
    swordKnuckles,
    bulletPunch,
    fistGrenades,
    wreckingBallPunch,
    bulldozerStrike,
    skydiving,
    zombification,
    ancientTechniques,
    fistOfEvil,
    invulnerability,
    fistOfTheBlack,
    brickKnuckles,
} = upgrades;
