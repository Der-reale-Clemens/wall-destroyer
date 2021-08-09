import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";
import {Achievement} from "../achievements";

const achievements: {[key: string]: Achievement} = {
    wallslicer: {
        isUnlocked: () => store.getState().buildings.swordsman >= 1,
        text: <>
            <Typography color="inherit">Wallslicer</Typography>
            Hire <b>1</b> swordsman.
        </>,
        img: "http://i.imgur.com/U0XqNYE.png"
    },
    hackNSlash: {
        isUnlocked: () => store.getState().buildings.swordsman >= 10,
        text: <>
            <Typography color="inherit">Hack 'n Slash</Typography>
            Hire <b>10</b> swordsmen.
        </>,
        img: "http://i.imgur.com/roZk4Yj.png"
    },
    smorgasword: {
        isUnlocked: () => store.getState().buildings.swordsman >= 50,
        text: <>
            <Typography color="inherit">Smorgasword</Typography>
            Hire <b>50</b> swordsmen.
        </>,
        img: "http://i.imgur.com/hmaylF0.png"
    },
    bladeBattalion: {
        isUnlocked: () => store.getState().buildings.swordsman >= 100,
        text: <>
            <Typography color="inherit">Blade Battalion
            </Typography>
            Hire <b>100</b> swordsmen.
        </>,
        img: "http://i.imgur.com/ciaHQnB.png"
    },
    theCavalry: {
        isUnlocked: () => store.getState().buildings.swordsman >= 150,
        text: <>
            <Typography color="inherit">The Cavalry</Typography>
            Hire <b>150</b> swordsmen.
        </>,
        img: "http://i.imgur.com/Jk4qhmJ.png"
    },
    theCrusaders: {
        isUnlocked: () => store.getState().buildings.swordsman >= 200,
        text: <>
            <Typography color="inherit">The Crusaders</Typography>
            Hire <b>200</b> swordsmen.
        </>,
        img: "http://i.imgur.com/w6XsCGU.png"
    },
    bladeRunner: {
        isUnlocked: () => store.getState().buildings.swordsman >= 300,
        text: <>
            <Typography color="inherit">Blade Runner</Typography>
            Hire <b>300</b> swordsmen.
        </>,
        img: "http://i.imgur.com/s8DBCzK.png"
    },
    allTheKing: {
        isUnlocked: () => store.getState().buildings.swordsman >= 400,
        text: <>
            <Typography color="inherit">All The King's Men</Typography>
            Hire <b>400</b> swordsmen.
        </>,
        img: "http://i.imgur.com/vtFhIQk.png"
    },
    theConquerorsOfTheWorld: {
        isUnlocked: () => store.getState().buildings.swordsman >= 500,
        text: <>
            <Typography color="inherit">The Conquerors of The World</Typography>
            Hire <b>500</b> swordsmen.
            <br/><i>"As if we weren't already am I right?" ~Swordsman Project Leader</i>"
        </>,
        img: "http://i.imgur.com/iPTUQJx.png"
    },
    tyrannoswordusRex: {
        isUnlocked: () => store.getState().buildings.swordsman >= 700,
        text: <>
            <Typography color="inherit">Tyrannoswordus Rex</Typography>
            Hire <b>700</b> swordsmen.
            <br/><i>Agent Johnson's proposal to build a T. rex-shaped sword was shot down before it even caught air.</i>
        </>,
        img: "http://i.imgur.com/WljzKK3.png"
    },

    // namePls: {
    //     isUnlocked: () => store.getState().buildings.swordsmanDamage >= 100000000000,
    //     text: <>
    //         <Typography color="inherit">Castle Crashers
    //         </Typography>
    //         Deal <b>100,000,000,000</b> damage to the wall with your swordsmen.
    //     </>,
    //     img: "http://i.imgur.com/U0XqNYE.png"
    // },
}

export const {
    wallslicer,
    hackNSlash,
    smorgasword,
    bladeBattalion,
    theCavalry,
    theCrusaders,
    bladeRunner,
    allTheKing,
    theConquerorsOfTheWorld,
    tyrannoswordusRex,
} = achievements;