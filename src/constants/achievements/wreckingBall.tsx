import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@mui/material";
import {prettify} from "../../constants";

const achievements: { [key: string]: Achievement } = {
    ImGonnaWreckIt: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 1,
        text: <>
            <Typography color="inherit">I'm Gonna Wreck It</Typography>
            Hire <b>1</b> wrecking ball.
        </>,
        img: "http://i.imgur.com/yM8TEHL.png"
    },
    ballBusters: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 10,
        text: <>
            <Typography color="inherit">Ball Busters</Typography>
            Hire <b>10</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/mAr2vCg.png"
    },
    deconstructionTeam: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 50,
        text: <>
            <Typography color="inherit">Deconstruction Team</Typography>
            Hire <b>50</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/G48Ecxn.png"
    },
    deconstructionArmy: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 100,
        text: <>
            <Typography color="inherit">Deconstruction Army
            </Typography>
            Hire <b>100</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/RiUfzHo.png"
    },
    wreckRepublic: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 150,
        text: <>
            <Typography color="inherit">The Wreck Republic</Typography>
            Hire <b>150</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/0sEdsxd.png"
    },
    wrecktacular: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 200,
        text: <>
            <Typography color="inherit">Wrecktacular</Typography>
            Hire <b>200</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/sgAPNQT.png"
    },
    theWreckoning: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 300,
        text: <>
            <Typography color="inherit">The Wreckoning</Typography>
            Hire <b>300</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/tWgYnpW.png"
    },
    wreckIsLove: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 400,
        text: <>
            <Typography color="inherit">Wreck is Love, Wreck is Life</Typography>
            Hire <b>400</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/8CXUpDK.png"
    },
    realityWreck: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 500,
        text: <>
            <Typography color="inherit">Reality Wreck</Typography>
            Hire <b>500</b> wrecking balls.
        </>,
        img: "http://i.imgur.com/3OYp1g4.png"
    },
    roundThisWreck: {
        isUnlocked: () => store.getState().buildings.wreckingBall >= 700,
        text: <>
            <Typography color="inherit">Round This Wreck of The Woods
            </Typography>
            Hire <b>700</b> wrecking balls.
            <br/><i>"I think you ran out of fitting ones." ~Agent Carter
            <br/>"Round this wreck of the woods, we don't question my puns." ~Chief of Puns</i>"
        </>,
        img: "http://i.imgur.com/LmISELN.png"
    },
    getWrecked: {
        isUnlocked: () => store.getState().stats.wreckingBall >= 100000000000000,
        text: <>
            <Typography color="inherit">Get Wrecked</Typography>
            Deal <b>{prettify(100000000000000)}</b> damage to the wall with your wrecking balls.
        </>,
        img: "http://i.imgur.com/yM8TEHL.png"
    },
}

export const {
    ImGonnaWreckIt,
    ballBusters,
    deconstructionTeam,
    deconstructionArmy,
    wreckRepublic,
    wrecktacular,
    theWreckoning,
    wreckIsLove,
    realityWreck,
    roundThisWreck,
    getWrecked,
} = achievements;