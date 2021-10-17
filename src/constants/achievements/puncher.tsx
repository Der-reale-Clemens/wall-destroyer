import {Typography} from "@mui/material";
import {store} from "../../redux/store";
import {Achievement} from "../achievements";
import {prettify} from "../../constants";

const achievements: {[key: string]: Achievement} = {
    hiredHelp: {
        isUnlocked: () => store.getState().buildings.puncher >= 1,
        text: <>
            <Typography color="inherit">Hired Help</Typography>
            Hire <b>1</b> puncher.
        </>,
        img: "http://i.imgur.com/tzwF920.png"
    },
    getTheFistOfIt: {
        isUnlocked: () => store.getState().buildings.puncher >= 10,
        text: <>
            <Typography color="inherit">Get The Fist Of It</Typography>
            Hire <b>10</b> punchers.
        </>,
        img: "http://i.imgur.com/uwEoJ22.png"
    },
    unarmedArmy: {
        isUnlocked: () => store.getState().buildings.puncher >= 50,
        text: <>
            <Typography color="inherit">Unarmed Army</Typography>
            Hire <b>50</b> punchers.
        </>,
        img: "http://i.imgur.com/ukeWk4S.png"
    },
    armadaOfPunches: {
        isUnlocked: () => store.getState().buildings.puncher >= 100,
        text: <>
            <Typography color="inherit">Armada of Punches</Typography>
            Hire <b>100</b> punchers.
        </>,
        img: "http://i.imgur.com/Un2IBSH.png"
    },
    legionOfFists: {
        isUnlocked: () => store.getState().buildings.puncher >= 150,
        text: <>
            <Typography color="inherit">Legion of Fists</Typography>
            Hire <b>150</b> punchers.
        </>,
        img: "http://i.imgur.com/ZWHQHkW.png"
    },
    punchCity: {
        isUnlocked: () => store.getState().buildings.puncher >= 200,
        text: <>
            <Typography color="inherit">Punch City</Typography>
            Hire <b>200</b> punchers.
        </>,
        img: "http://i.imgur.com/rVykEWs.png"
    },
    punchNation: {
        isUnlocked: () => store.getState().buildings.puncher >= 300,
        text: <>
            <Typography color="inherit">Punch Nation</Typography>
            Hire <b>300</b> punchers.
        </>,
        img: "http://i.imgur.com/GfoMaz4.png"
    },
    theWorldPunchedToPieces: {
        isUnlocked: () => store.getState().buildings.puncher >= 400,
        text: <>
            <Typography color="inherit">The World Punched to Pieces</Typography>
            Hire <b>400</b> punchers.
        </>,
        img: "http://i.imgur.com/KoB491g.png"
    },
    thanksAPunch: {
        isUnlocked: () => store.getState().buildings.puncher >= 500,
        text: <>
            <Typography color="inherit">Thanks A Punch
            </Typography>
            Hire <b>500</b> punchers.
        </>,
        img: "http://i.imgur.com/wxsTySo.png"
    },
    aSockInThePark: {
        isUnlocked: () => store.getState().buildings.puncher >= 700,
        text: <>
            <Typography color="inherit">A Sock In The Park</Typography>
            Hire <b>700</b> punchers.
        </>,
        img: "http://i.imgur.com/PhxmHqr.png"
    },
    noSuchThingAsAFreePunch: {
        isUnlocked: () => store.getState().stats.puncher >= 1000000000,
        text: <>
            <Typography color="inherit">No Such Thing as a Free Punch
            </Typography>
            Deal <b>{prettify(1000000000)}</b> damage to the wall with your punchers.
        </>,
        img: "http://i.imgur.com/tzwF920.png"
    },
}

export const {
    hiredHelp,
    getTheFistOfIt,
    unarmedArmy,
    armadaOfPunches,
    legionOfFists,
    punchCity,
    punchNation,
    theWorldPunchedToPieces,
    thanksAPunch,
    aSockInThePark,
    noSuchThingAsAFreePunch
} = achievements;