import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const achievements: { [key: string]: Achievement } = {
    callingTheShots:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 1,
        text: <>
            <Typography color="inherit">Calling the Shots</Typography>
            Hire <b>1</b> airstrike caller.
        </>,
        img: "http://i.imgur.com/ziKked6.png"
    },
    theStrikes:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 10,
        text: <>
            <Typography color="inherit">The Strikes</Typography>
            Hire <b>10</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/pGXsYZg.png"
    },
    callOfNature:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 50,
        text: <>
            <Typography color="inherit">Call of Nature</Typography>
            Hire <b>50</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/0yGfwss.png"
    },
    theStrikedown:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 100,
        text: <>
            <Typography color="inherit">The Strikedown
            </Typography>
            Hire <b>100</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/Mh3dfeG.png"
    },
    crushTheWorld:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 150,
        text: <>
            <Typography color="inherit">Crush the World</Typography>
            Hire <b>150</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/nkSdY4M.png"
    },
    calamityCalling:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 200,
        text: <>
            <Typography color="inherit">Calamity Calling</Typography>
            Hire <b>200</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/kggtIiP.png"
    },
    takeAStrike:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 300,
        text: <>
            <Typography color="inherit">Take A Strike</Typography>
            Hire <b>300</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/gXHS6sy.png"
    },
    itsCallOverNow:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 400,
        text: <>
            <Typography color="inherit">It's Call Over Now</Typography>
            Hire <b>400</b> airstrike callers.
        </>,
        img: "http://i.imgur.com/DcaMUp9.png"
    },
    godsOnTheOtherLine:{
        isUnlocked: () => store.getState().buildings.airstrikeCaller >= 500,
        text: <>
            <Typography color="inherit">God's On The Other Line</Typography>
            Hire <b>500</b> airstrike callers.
            <br/><i>He wants his walls back.</i>
        </>,
        img: "http://i.imgur.com/KqdTHwt.png"
    },
    // namePls:{
    //     isUnlocked: () => store.getState().buildings.airstrikeDamage >= 2000000000000000,
    //     text: <>
    //         <Typography color="inherit">Death Called
    //         </Typography>
    //         Deal <b>2,000,000,000,000,000</b> damage to the wall with your airstrike callers.
    //     </>,
    //     img: "http://i.imgur.com/ziKked6.png"
    // },
}

export const {
    callingTheShots,
    theStrikes,
    callOfNature,
    theStrikedown,
    crushTheWorld,
    calamityCalling,
    takeAStrike,
    itsCallOverNow,
    godsOnTheOtherLine,
} = achievements;