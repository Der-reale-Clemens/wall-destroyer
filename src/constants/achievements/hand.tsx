import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@mui/material";
import {prettify} from "../../constants";

const achievements: { [key: string]: Achievement } = {
    puncher: {
        isUnlocked: () => store.getState().stats.hand >= 100,
        text: <>
            <Typography color="inherit">Puncher</Typography>
            Deal <b>{prettify(100)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/c3mfsZ7.png"
    },
    boxer: {
        isUnlocked: () => store.getState().stats.hand >= 10000,
        text: <>
            <Typography color="inherit">Boxer</Typography>
            Deal <b>{prettify(10_000)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/1VAyqoa.png"
    },
    brawler: {
        isUnlocked: () => store.getState().stats.hand >= 1000000,
        text: <>
            <Typography color="inherit">Brawler</Typography>
            Deal <b>{prettify(1e6)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/3pMJrsL.png"
    },
    blood: {
        isUnlocked: () => store.getState().stats.hand >= 100000000,
        text: <>
            <Typography color="inherit">Blood, Sweat, and Tears</Typography>
            Deal <b>{prettify(1e8)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/bOLxNz7.png"
    },
    karateMaster: {
        isUnlocked: () => store.getState().stats.hand >= 10000000000,
        text: <>
            <Typography color="inherit">Karate Master</Typography>
            Deal <b>{prettify(1e10)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/PtmkAH3.png"
    },
    doingGodsWork: {
        isUnlocked: () => store.getState().stats.hand >= 1000000000000,
        text: <>
            <Typography color="inherit">Doing God's Work</Typography>
            Deal <b>{prettify(1e12)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/ouFA8Lg.png"
    },
    theHeroGothamDeserves: {
        isUnlocked: () => store.getState().stats.hand >= 100000000000000,
        text: <>
            <Typography color="inherit">The Hero Gotham Deserves</Typography>
            Deal <b>{prettify(1e14)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/ee3LJxJ.png"
    },
    theGrandmaster: {
        isUnlocked: () => store.getState().stats.hand >= 10000000000000000,
        text: <>
            <Typography color="inherit">The Grandmaster</Typography>
            Deal <b>{prettify(1e16)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/YZfg6Vg.png"
    },
    theChampionOfTheWorld: {
        isUnlocked: () => store.getState().stats.hand >= 1000000000000000000,
        text: <>
            <Typography color="inherit">The Champion of The World</Typography>
            Deal <b>{prettify(1e18)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/0fHTOjH.png"
    },
    theChosenOne: {
        isUnlocked: () => store.getState().stats.hand >= 100000000000000000000,
        text: <>
            <Typography color="inherit">The Chosen One</Typography>
            Deal <b>{prettify(1e20)}</b> damage by hand.
        </>,
        img: "http://i.imgur.com/uKozUUJ.png"
    },
    theWinner: {
        isUnlocked: () => store.getState().stats.hand >= 10000000000000000000000,
        text: <>
            <Typography color="inherit">The Winner</Typography>
            Deal <b>{prettify(1e22)}</b> damage by hand.
            <br/><i>Not actually though. Keep going.</i>
        </>,
        img: "http://i.imgur.com/VywN1Do.png"
    },
    agentOfTheDevil: {
        isUnlocked: () => store.getState().stats.hand >= 1000000000000000000000000,
        text: <>
            <Typography color="inherit">Agent of The Devil</Typography>
            Deal <b>{prettify(1e24)}</b> damage by hand.
            <br/><i>The amount of time you've wasted has reached evil status.</i>
        </>,
        img: "http://i.imgur.com/XSPPdpX.png"
    },
    beyondReality: {
        isUnlocked: () => store.getState().stats.hand >= 100000000000000000000000000,
        text: <>
            <Typography color="inherit">Beyond Reality</Typography>
            Deal <b>{prettify(1e26)}</b> damage by hand.
            <br/><i>"Pff, as if we weren't past </i>that<i> years ago." ~Head of R&D</i>
        </>,
        img: "http://i.imgur.com/QJ6t0uF.png"
    },
    theHarbinger: {
        isUnlocked: () => store.getState().stats.hand >= 10000000000000000000000000000,
        text: <>
            <Typography color="inherit">The Harbinger</Typography>
            Deal <b>{prettify(1e28)}</b> damage by hand.
            <br/><i>The harbinger of the final destruction of all these damn walls, that is!</i>
        </>,
        img: "http://i.imgur.com/uCnJqSI.png"
    },
    missionaryOfTheDivine: {
        isUnlocked: () => store.getState().stats.hand >= 10000000000000000000000000000000,
        text: <>
            <Typography color="inherit">Missionary of The Divine</Typography>
            Deal <b>{prettify(1e31)}</b> damage by hand.
            <br/><i>You've reached maximum level. The divine message: punch harder.</i>
        </>,
        img: "http://i.imgur.com/0WGwFSJ.png"
    },
}

export const {
    puncher,
    boxer,
    brawler,
    blood,
    karateMaster,
    doingGodsWork,
    theHeroGothamDeserves,
    theGrandmaster,
    theChampionOfTheWorld,
    theChosenOne,
    theWinner,
    agentOfTheDevil,
    beyondReality,
    theHarbinger,
    missionaryOfTheDivine,
} = achievements;