import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const achievements: { [key: string]: Achievement } = {
    bringInTheHats: {
        isUnlocked: () => store.getState().buildings.necromancer >= 1,
        text: <>
            <Typography color="inherit">Bring In The Hats</Typography>
            Hire <b>1</b> necromancer.
            <br/><i>"The biggest possible." ~Head of Wizard Relations</i>
        </>,
        img: "http://i.imgur.com/v1AK3rT.png"
    },
    menInBlack: {
        isUnlocked: () => store.getState().buildings.necromancer >= 10,
        text: <>
            <Typography color="inherit">Men In Black</Typography>
            Hire <b>10</b> necromancers.
        </>,
        img: "http://i.imgur.com/TFn4qy8.png"
    },
    theCult: {
        isUnlocked: () => store.getState().buildings.necromancer >= 50,
        text: <>
            <Typography color="inherit">The Cult</Typography>
            Hire <b>50</b> necromancers.
        </>,
        img: "http://i.imgur.com/Rcq67yT.png"
    },
    deadRising: {
        isUnlocked: () => store.getState().buildings.necromancer >= 100,
        text: <>
            <Typography color="inherit">Dead Rising</Typography>
            Hire <b>100</b> necromancers.
        </>,
        img: "http://i.imgur.com/9zBRNek.png"
    },
    zombieland: {
        isUnlocked: () => store.getState().buildings.necromancer >= 150,
        text: <>
            <Typography color="inherit">Zombieland</Typography>
            Hire <b>150</b> necromancers.
        </>,
        img: "http://i.imgur.com/qXqoMU6.png"
    },
    armyOfDarkness: {
        isUnlocked: () => store.getState().buildings.necromancer >= 200,
        text: <>
            <Typography color="inherit">Army of Darkness</Typography>
            Hire <b>200</b> necromancers.
        </>,
        img: "http://i.imgur.com/RnCc5dn.png"
    },
    thatsItImGettingTheDead: {
        isUnlocked: () => store.getState().buildings.necromancer >= 300,
        text: <>
            <Typography color="inherit">That's It. I'm Getting The Dead.</Typography>
            Hire <b>300</b> necromancers.
            <br/><i>*thats it. im getting the dead.</i>
        </>,
        img: "http://i.imgur.com/OZnAMmh.png"
    },
    onlyZombiesNow: {
        isUnlocked: () => store.getState().buildings.necromancer >= 400,
        text: <>
            <Typography color="inherit">Only Zombies Now</Typography>
            Hire <b>400</b> necromancers.
        </>,
        img: "http://i.imgur.com/Q42Qlh5.png"
    },
    theGratefulDead: {
        isUnlocked: () => store.getState().buildings.necromancer >= 500,
        text: <>
            <Typography color="inherit">The Grateful Dead</Typography>
            Hire <b>500</b> necromancers.
            <br/><i>Not actually though.</i>
        </>,
        img: "http://i.imgur.com/2nlwuwZ.png"
    },
}

export const {
    bringInTheHats,
    menInBlack,
    theCult,
    deadRising,
    zombieland,
    armyOfDarkness,
    thatsItImGettingTheDead,
    onlyZombiesNow,
    theGratefulDead,
} = achievements;