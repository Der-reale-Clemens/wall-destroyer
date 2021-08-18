import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const achievements: { [key: string]: Achievement } = {
    itsBack: {
        isUnlocked: () => store.getState().buildings.titan >= 1,
        text: <>
            <Typography color="inherit">It's Back</Typography>
            Hire <b>1</b> titan.
        </>,
        img: "http://i.imgur.com/YYCAyYr.png"
    },
    theyreComing: {
        isUnlocked: () => store.getState().buildings.titan >= 10,
        text: <>
            <Typography color="inherit">They're Coming</Typography>
            Hire <b>10</b> titans.
        </>,
        img: "http://i.imgur.com/NJiXXeV.png"
    },
    massiveAttack: {
        isUnlocked: () => store.getState().buildings.titan >= 50,
        text: <>
            <Typography color="inherit">Massive Attack</Typography>
            Hire <b>50</b> titans.
        </>,
        img: "http://i.imgur.com/qRTZ0PT.png"
    },
    titanicTakeover: {
        isUnlocked: () => store.getState().buildings.titan >= 100,
        text: <>
            <Typography color="inherit">Titanic Takeover</Typography>
            Hire <b>100</b> titans.
        </>,
        img: "http://i.imgur.com/C8MyH4G.png"
    },
    ancientArmy: {
        isUnlocked: () => store.getState().buildings.titan >= 150,
        text: <>
            <Typography color="inherit">Ancient Army</Typography>
            Hire <b>150</b> titans.
        </>,
        img: "http://i.imgur.com/nqgG46f.png"
    },
    lordReaefsek: {
        isUnlocked: () => store.getState().buildings.titan >= 200,
        text: <>
            <Typography color="inherit">Lord Reaefsek's Castle</Typography>
            Hire <b>200</b> titans.
            <br/><i>Lord Reaefsek, God of The Unfinished, was one of the most famous titans. He was insane, and very
            skilled with Old World magic.</i>
        </>,
        img: "http://i.imgur.com/Uozfrtb.png"
    },
    hyzemsKingdom: {
        isUnlocked: () => store.getState().buildings.titan >= 300,
        text: <>
            <Typography color="inherit">Hyzem's Kingdom</Typography>
            Hire <b>300</b> titans.
            <br/><i>Lord Reaefsek and King Hyzem were rivals; as the records in Bextic - Hyzem's castle - state,
            Reaefsek decided that he was the god of everything and attacked Hyzem's kingdom. This was the golden age of
            magical artifacts.</i>
        </>,
        img: "http://i.imgur.com/uw0puJR.png"
    },
    aBeautifulSight: {
        isUnlocked: () => store.getState().buildings.titan >= 400,
        text: <>
            <Typography color="inherit">A Beautiful Sight</Typography>
            Hire <b>400</b> titans.
            <br/><i>The giant warriors of the Old World, joining together for the single purpose of smashing a brick
            wall to the ground... Beautiful.</i>
        </>,
        img: "http://i.imgur.com/1VqgNdS.png"
    },
    theOldWorld: {
        isUnlocked: () => store.getState().buildings.titan >= 500,
        text: <>
            <Typography color="inherit">The Old World</Typography>
            Hire <b>500</b> titans.
        </>,
        img: "http://i.imgur.com/enLETzJ.png"
    },
}

export const {
    itsBack,
    theyreComing,
    massiveAttack,
    titanicTakeover,
    ancientArmy,
    lordReaefsek,
    hyzemsKingdom,
    aBeautifulSight,
    theOldWorld,
} = achievements;