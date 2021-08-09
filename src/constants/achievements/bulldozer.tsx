import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const achievements: { [key: string]: Achievement } = {
    theDozeKnows: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 1,
        text: <>
            <Typography color="inherit">The Doze Knows</Typography>
            Hire <b>1</b> bulldozer.
        </>,
        img: "http://i.imgur.com/q1QrnCW.png"
    },
    thoseWhoAreToDoze: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 10,
        text: <>
            <Typography color="inherit">Those Who Arose to Doze</Typography>
            Hire <b>10</b> bulldozers.
        </>,
        img: "http://i.imgur.com/EiU5wtP.png"
    },
    theDozeDivision: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 50,
        text: <>
            <Typography color="inherit">The Doze Division</Typography>
            Hire <b>50</b> bulldozers.
        </>,
        img: "http://i.imgur.com/HH6K4Vq.png"
    },
    stopAndSmellTheDozes: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 100,
        text: <>
            <Typography color="inherit">Stop And Smell The Dozes</Typography>
            Hire <b>100</b> bulldozers.
        </>,
        img: "http://i.imgur.com/BXEfdVE.png"
    },
    levelTheCity: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 150,
        text: <>
            <Typography color="inherit">Level The City</Typography>
            Hire <b>150</b> bulldozers.
        </>,
        img: "http://i.imgur.com/crWt6tW.png"
    },
    levelTheCountry: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 200,
        text: <>
            <Typography color="inherit">Level The Country</Typography>
            Hire <b>200</b> bulldozers.
            <br/><i>Disclamer: these achievement titles are not commands.</i>
        </>,
        img: "http://i.imgur.com/jVDRDvc.png"
    },
    theSuperbull: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 300,
        text: <>
            <Typography color="inherit">The Superbull</Typography>
            Hire <b>300</b> bulldozers.
        </>,
        img: "http://i.imgur.com/F68kWwp.png"
    },
    dozesAreRed: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 400,
        text: <>
            <Typography color="inherit">Dozes Are Red, The World is Dead</Typography>
            Hire <b>400</b> bulldozers.
        </>,
        img: "http://i.imgur.com/WQZmqRv.png"
    },
    overdoze: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 500,
        text: <>
            <Typography color="inherit">Overdoze</Typography>
            Hire <b>500</b> bulldozers.
        </>,
        img: "http://i.imgur.com/wzJXciZ.png"
    },
    bullshit: {
        isUnlocked: () => store.getState().buildings.bulldozer >= 700,
        text: <>
            <Typography color="inherit">Bullshit</Typography>
            Hire <b>700</b> bulldozers.
            <br/><i>"Could it be... The only accurately named thing in the entire game?" ~Agent Connor"</i>
        </>,
        img: "http://i.imgur.com/taZMkYw.png"
    },
    // namePls: {
    //     isUnlocked: () => store.getState().buildings.bulldozerDamage >= 200000000000000,
    //     text: <>
    //         <Typography color="inherit">Crack n Smash
    //         </Typography>
    //         Deal <b>200,000,000,000,000</b> damage to the wall with your bulldozers.
    //     </>,
    //     img: "http://i.imgur.com/q1QrnCW.png"
    // },

}

export const {
    theDozeKnows,
    thoseWhoAreToDoze,
    theDozeDivision,
    stopAndSmellTheDozes,
    levelTheCity,
    levelTheCountry,
    theSuperbull,
    dozesAreRed,
    overdoze,
    bullshit,
} = achievements;