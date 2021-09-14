import {store} from "../../redux/store";
import {decreaseBricks, decreaseFourthWallBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";
import React from "react";
import {Upgrade} from "../upgrades";

const upgrades: { [key: string]: Upgrade } = {
    betterClubs: {
        isVisible: () => store.getState().buildings.clubber >= 1,
        isBuyable: () => store.getState().game.money >= 7.5e+2,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+2)),
        effect: {clubber: 1.5},
        text: <>
            <Typography color="inherit">Better Clubs</Typography>
            Clubbers do <b>50%</b> more damage.
            <br/><i>Simply feels better to hold.</i>
            <br/>Costs <b>{prettify(750)}</b> Cash
        </>,
        img: "http://i.imgur.com/k6W8MW9.png"
    },
    ironClubs: {
        isVisible: () => store.getState().buildings.clubber >= 5,
        isBuyable: () => store.getState().game.money >= 7.5e+3,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+3)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Iron Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Wood is old school.</i>
            <br/>Costs <b>{prettify(7.5e3)}</b> Cash
        </>,
        img: "http://i.imgur.com/LRhDWi7.png"
    },
    titaniumClubs: {
        isVisible: () => store.getState().buildings.clubber >= 25,
        isBuyable: () => store.getState().game.money >= 7.5e+4,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+4)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Titanium Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Heavier, but actually does damage.</i>
            <br/>Costs <b>{prettify(7.5e4)}</b> Cash
        </>,
        img: "http://i.imgur.com/tIHqvj8.png"
    },
    spikedClubs: {
        isVisible: () => store.getState().buildings.clubber >= 50,
        isBuyable: () => store.getState().game.money >= 7.5e+5,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+5)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Spiked Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>Titanium spikes, of course.</i>
            <br/>Costs <b>{prettify(7.5e5)}</b> Cash
        </>,
        img: "http://i.imgur.com/zIFpGEb.png"
    },
    biggerClubs: {
        isVisible: () => store.getState().buildings.clubber >= 75,
        isBuyable: () => store.getState().game.money >= 7.5e+6,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+6)),
        effect: {clubber: 2},
        text: <>
            <Typography color="inherit">Bigger Clubs</Typography>
            Clubbers do <b>twice</b> as much damage.
            <br/><i>I'm surprised we didn't get these sooner.</i>
            <br/>Costs <b>{prettify(7.5e6)}</b> Cash
        </>,
        img: "http://i.imgur.com/5rYYXJ1.png"
    },
    bombClubs: {
        isVisible: () => store.getState().buildings.clubber >= 100,
        isBuyable: () => store.getState().game.money >= 7.5e+7,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+7)),
        effect: {clubber: 3},
        text: <>
            <Typography color="inherit">Bomb Clubs</Typography>
            Clubbers do <b>three times</b> as much damage.
            <br/><i>Just attach some bombs to the clubs. An excellent plan.</i>
            <br/>Costs <b>{prettify(7.5e7)}</b> Cash
        </>,
        img: "http://i.imgur.com/8rGt4hi.png"
    },
    plasmaClubs: {
        isVisible: () => store.getState().buildings.clubber >= 150,
        isBuyable: () => store.getState().game.money >= 3.75e+9,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+9)),
        effect: {clubber: 3},
        text: <>
            <Typography color="inherit">Plasma Coated Clubs</Typography>
            Clubbers do <b>three times</b> as much damage.
            <br/><i>Melts through the wall. Be careful!</i>
            <br/>Costs <b>{prettify(3.75e9)}</b> Cash
        </>,
        img: "http://i.imgur.com/2Kpfgha.png"
    },
    nukeClubs: {
        isVisible: () => store.getState().buildings.clubber >= 200,
        isBuyable: () => store.getState().game.money >= 3.75e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+11)),
        effect: {clubber: 4},
        text: <>
            <Typography color="inherit">Nuke Clubs
            </Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>Like bomb clubs, but waaaay more dangerous.</i>
            <br/>Costs <b>{prettify(375000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/sqh5GGD.png"
    },
    quantumClubs: {
        isVisible: () => store.getState().buildings.clubber >= 300,
        isBuyable: () => store.getState().game.money >= 7.5e+15,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+15)),
        effect: {clubber: 5},
        text: <>
            <Typography color="inherit">Quantum Clubs</Typography>
            Clubbers do <b>five times</b> as much damage.
            <br/><i>We used quantum mechanics to make these clubs do the absolute maximum damage.</i>
            <br/>Costs <b>{prettify(7500000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/4wh5BY0.png"
    },
    clubsOfHappiness: {
        isVisible: () => store.getState().buildings.clubber >= 400,
        isBuyable: () => store.getState().game.money >= 3.75e+19,
        buy: (dispatch) => dispatch(decreaseMoney(3.75e+19)),
        effect: {clubber: 5},
        text: <>
            <Typography color="inherit">Clubs of Happiness</Typography>
            Clubbers do <b>five times</b> as much damage.
            <br/><i>Just holding these makes you happy. Sure, there are some pretty bad side effects, but none that will
            halt wall destruction!</i>
            <br/>Costs <b>{prettify(37500000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/JruQMzO.png"
    },
    protectionAgainstTheClubs: {
        isVisible: () => store.getState().buildings.clubber >= 500,
        isBuyable: () => store.getState().game.money >= 7.5e+23,
        buy: (dispatch) => dispatch(decreaseMoney(7.5e+23)),
        effect: {clubber: 7},
        text: <>
            <Typography color="inherit">Protection Against The Clubs</Typography>
            Clubbers do <b>seven times</b> as much damage.
            <br/><i>Now we don't have to clean up after the accidents that the at-this-point-ridiculously-dangerous
            clubs cause. Maybe this is something we should have gotten earlier.</i>
            <br/>Costs <b>{prettify(7.5e+23)}</b> Cash
        </>,
        img: "http://i.imgur.com/eecKJ8i.png"
    },
    theDevilsClub: {
        isVisible: () => store.getState().buildings.clubber >= 700,
        isBuyable: () => store.getState().game.money >= 1.5e+32,
        buy: (dispatch) => dispatch(decreaseMoney(1.5e+32)),
        effect: {clubber: 5},
        text: <>
            <Typography color="inherit">The Devil's Club</Typography>
            Clubbers do <b>five times</b> as much damage.
            <br/><i>Literally. According to the demons, he'd use it to bash sinners over the head in the old days; he
            doesn't need it any more because he has new methods. (We didn't inquire as to what those are)</i>
            <br/>Costs <b>{prettify(1.5e+32)}</b> Cash
        </>,
        img: "http://i.imgur.com/20i38CD.png"
    },
    magicLavaClub: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("magicMining"),
        isBuyable: () => store.getState().game.money >= 1.501501501e+9 &&
            store.getState().game.bricks >= 1 &&
            store.getState().buildings.clubber >= 125,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.501501501e+9));
            dispatch(decreaseBricks(1));
        },
        effect: {clubber: 3},
        text: <>
            <Typography color="inherit">Magic Lava Clubs</Typography>
            Clubbers do <b>three times</b> as much damage.
            <br/><i>Clubs made out of pure lava. It works because it's magic.</i>
            <br/>Costs <b>{prettify(1501501501)}</b> Cash & <b>{prettify(1)}</b> Brick
            <br/>Also requires <b>125</b> Clubbers
        </>,
        img: "http://i.imgur.com/JZbeJbZ.png"
    },
    sunClubs: {
        isVisible: () => store.getState().buildings.clubber >= 250,
        isBuyable: () => store.getState().game.money >= 1.5015015015015e+13 && store.getState().game.bricks >= 1500,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.5015015015015e+13));
            dispatch(decreaseBricks(1500));
        },
        effect: {clubber: 4},
        text: <>
            <Typography color="inherit">Sun Clubs</Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>As hot as the sun. Magic!</i>
            <br/>Costs <b>{prettify(15015015015015)}</b> Cash & <b>{prettify(1500)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Tb9Rpht.png"
    },
    supernovaClubs: {
        isVisible: () => store.getState().buildings.clubber >= 350,
        isBuyable: () => store.getState().game.money >= 1.5015015015015014e+17 && store.getState().game.bricks >= 15000000,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.5015015015015014e+17));
            dispatch(decreaseBricks(15000000));
        },
        effect: {clubber: 5},
        text: <>
            <Typography color="inherit">Supernova Clubs</Typography>
            Clubbers do <b>five times</b> as much damage.
            <br/><i>Thanks to the wizards we can now make something even more dangerous than the nuke clubs!</i>
            <br/>Costs <b>{prettify(150150150150150140)}</b> Cash & <b>{prettify(15000000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/IpEk7wV.png"
    },
    blackInfestedClubs: {
        isVisible: () => store.getState().buildings.clubber >= 600,
        isBuyable: () => store.getState().game.money >= 4.5045045045045043e+27 && store.getState().game.bricks >= 450450450450450,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.5045045045045043e+27));
            dispatch(decreaseBricks(450450450450450));
        },
        effect: {clubber: 6},
        text: <>
            <Typography color="inherit">Black-Infested Clubs</Typography>
            Clubbers do <b>six times</b> as much damage.
            <br/><i>They spread The Black like a plague with each hit. Only to the walls though, it's safe!</i>
            <br/>Costs <b>{prettify(4.5045045045045043e+27)}</b> Cash & <b>{prettify(450450450450450)}</b> Bricks
        </>,
        img: "http://i.imgur.com/ofHYvwo.png"
    },
    perfectClubs: {
        isVisible: () => store.getState().buildings.clubber >= 800,
        isBuyable: () => store.getState().game.money >= 1.5e36 && store.getState().game.bricks >= 1.5e25,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.5e36));
            dispatch(decreaseBricks(1.5e25));
            dispatch(decreaseFourthWallBricks(1.5e21));
        },
        effect: {clubber: 4},
        text: <>
            <Typography color="inherit">Perfect Clubs</Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>"Are you serious?" ~Agent Lawrence
            <br/>"Oh yes. We did it. Mission complete. Project finished. Clubs over." ~Head of R&D</i>
            <br/>Costs <b>{prettify(1.5e36)}</b> Cash & <b>{prettify(1.5e25)}</b> Bricks
            & <b>{prettify(1.5e21)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/RIWt6UD.png"
    },
    cartoonPhysics: {
        isVisible: () => store.getState().upgrades.boughtUpgrades.includes("realityResearch"),
        isBuyable: () => store.getState().game.money >= 3.303000303300333e+16 && store.getState().game.fourthWallBricks >= 500,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.303000303300333e+16));
            dispatch(decreaseFourthWallBricks(500));
        },
        effect: {clubber: 4},
        text: <>
            <Typography color="inherit">Cartoon Physics</Typography>
            Clubbers do <b>four times</b> as much damage.
            <br/><i>You can whack someone 1000 feet into the air with a club now!</i>
            <br/>Costs <b>{prettify(33030003033003330)}</b> Cash & <b>{prettify(500)}</b> 4th Wall Bricks
        </>,
        img: "http://i.imgur.com/kB9V23R.png"
    },

}

export const {
    betterClubs,
    ironClubs,
    titaniumClubs,
    spikedClubs,
    biggerClubs,
    bombClubs,
    plasmaClubs,
    nukeClubs,
    quantumClubs,
    clubsOfHappiness,
    protectionAgainstTheClubs,
    theDevilsClub,

    magicLavaClub,
    sunClubs,
    supernovaClubs,
    blackInfestedClubs,
    perfectClubs,
    cartoonPhysics,
} = upgrades;