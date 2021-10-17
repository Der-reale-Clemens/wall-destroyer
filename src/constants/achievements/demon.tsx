import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@mui/material";

const achievements: { [key: string]: Achievement } = {
    raisingHell: {
        isUnlocked: () => store.getState().buildings.demon >= 1,
        text: <>
            <Typography color="inherit">Raising Hell</Typography>
            Hire <b>1</b> demon.
        </>,
        img: "http://i.imgur.com/klcGmts.png"
    },
    satansLittleHelpers: {
        isUnlocked: () => store.getState().buildings.demon >= 10,
        text: <>
            <Typography color="inherit">Satan's Little Helpers</Typography>
            Hire <b>10</b> demons.
        </>,
        img: "http://i.imgur.com/SxcztPw.png"
    },
    fireAndBrimstone: {
        isUnlocked: () => store.getState().buildings.demon >= 50,
        text: <>
            <Typography color="inherit">Fire & Brimstone</Typography>
            Hire <b>50</b> demons.
            <br/><i>"The only actual fire here is the fire coming from MY ANGER." ~Head of Tech
            <br/>"There's also the bonfire they built over some box they buried in my yard. They said it was part of a
            treasure hunt." ~RC Project Leader
            <br/>"THOSE ARE ALL MY OLD FLOPPY DISKS." ~Head of Tech</i>
        </>,
        img: "http://i.imgur.com/8r38suM.png"
    },
    hellOnEarth: {
        isUnlocked: () => store.getState().buildings.demon >= 100,
        text: <>
            <Typography color="inherit">Hell On Earth</Typography>
            Hire <b>100</b> demons.
            <br/><i>"You've got THAT right." ~Everyone except Agent Johnson</i>
        </>,
        img: "http://i.imgur.com/zpaA3Yo.png"
    },
    demonicDominace: {
        isUnlocked: () => store.getState().buildings.demon >= 150,
        text: <>
            <Typography color="inherit">Demonic Dominance</Typography>
            Hire <b>150</b> demons.
            <br/><i>"Dominance over NOT BEING ANNOYED ALL THE TIME." ~Head of Demon Relations</i>
        </>,
        img: "http://i.imgur.com/f9zhDkC.png"
    },
    noQuarter: {
        isUnlocked: () => store.getState().buildings.demon >= 200,
        text: <>
            <Typography color="inherit">No Quarter</Typography>
            Hire <b>200</b> demons.
            <br/><i>"The only quarter they give is the quarter they used to jam the coffee maker in the lobby. We ended
            up inventing a coffee maker that requires a password so they would stop screwing with it." ~Head of R&D</i>
        </>,
        img: "http://i.imgur.com/MKqt6OB.png"
    },
    judgementDay: {
        isUnlocked: () => store.getState().buildings.demon >= 300,
        text: <>
            <Typography color="inherit">Judgement Day</Typography>
            Hire <b>300</b> demons.
        </>,
        img: "http://i.imgur.com/92rYyAC.png"
    },
    howCouldYouHell: {
        isUnlocked: () => store.getState().buildings.demon >= 400,
        text: <>
            <Typography color="inherit">How Could You Hell</Typography>
            Hire <b>400</b> demons.
            <br/><i>"From all the demons being awful and trolling everyone maybe??" ~Agent Connor</i>
        </>,
        img: "http://i.imgur.com/FmFQPoJ.png"
    },
    holyHell: {
        isUnlocked: () => store.getState().buildings.demon >= 500,
        text: <>
            <Typography color="inherit">Holy Hell</Typography>
            Hire <b>500</b> demons.
            <br/><i>"Say, isn't that an oxymoron?" ~Agent Carter
            <br/>"</i>You're<i> an oxymoron." ~Agent Johnson</i>
        </>,
        img: "http://i.imgur.com/msrmpyh.png"
    },
}

export const {
    raisingHell,
    satansLittleHelpers,
    fireAndBrimstone,
    hellOnEarth,
    demonicDominace,
    noQuarter,
    judgementDay,
    howCouldYouHell,
    holyHell,
} = achievements;