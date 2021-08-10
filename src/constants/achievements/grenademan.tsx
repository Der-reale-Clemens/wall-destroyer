import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";
import {Achievement} from "../achievements";
import {prettify} from "../../constants";

const achievements: {[key: string]: Achievement} = {
    manWithGrenades: {
        isUnlocked: () => store.getState().buildings.grenademan >= 1,
        text: <>
            <Typography color="inherit">The Man With the Grenade</Typography>
            Hire <b>1</b> grenademan.
        </>,
        img: "http://i.imgur.com/IiBqHel.png"
    },
    theBarrage: {
        isUnlocked: () => store.getState().buildings.grenademan >= 10,
        text: <>
            <Typography color="inherit">The Barrage</Typography>
            Hire <b>10</b> grenademen.
        </>,
        img: "http://i.imgur.com/R9gZAzL.png"
    },
    nadeBarricade: {
        isUnlocked: () => store.getState().buildings.grenademan >= 50,
        text: <>
            <Typography color="inherit">Nade Barricade</Typography>
            Hire <b>50</b> grenademen.
        </>,
        img: "http://i.imgur.com/iygAO3d.png"
    },
    rainOfGrenades: {
        isUnlocked: () => store.getState().buildings.grenademan >= 100,
        text: <>
            <Typography color="inherit">Rain of Grenades</Typography>
            Hire <b>100</b> grenademen.
        </>,
        img: "http://i.imgur.com/4Ro8woi.png"
    },
    grenadeGale: {
        isUnlocked: () => store.getState().buildings.grenademan >= 150,
        text: <>
            <Typography color="inherit">Grenade Gale</Typography>
            Hire <b>150</b> grenademen.
        </>,
        img: "http://i.imgur.com/fXuVuxM.png"
    },
    oceanOfGrenades: {
        isUnlocked: () => store.getState().buildings.grenademan >= 200,
        text: <>
            <Typography color="inherit">Ocean of Grenades</Typography>
            Hire <b>200</b> grenademen.
        </>,
        img: "http://i.imgur.com/POTBoez.png"
    },
    bombTheWorld: {
        isUnlocked: () => store.getState().buildings.grenademan >= 300,
        text: <>
            <Typography color="inherit">Bomb The World
            </Typography>
            Hire <b>300</b> grenademen.
        </>,
        img: "http://i.imgur.com/fMBo2SN.png"
    },
    NadeItThrough: {
        isUnlocked: () => store.getState().buildings.grenademan >= 400,
        text: <>
            <Typography color="inherit">Nade It Through</Typography>
            Hire <b>400</b> grenademen.
        </>,
        img: "http://i.imgur.com/LX0Sy7U.png"
    },
    divineBombedy: {
        isUnlocked: () => store.getState().buildings.grenademan >= 500,
        text: <>
            <Typography color="inherit">The Divine Bombedy</Typography>
            Hire <b>500</b> grenademen.
        </>,
        img: "http://i.imgur.com/FzLeFau.png"
    },
    grenadeAchievement: {
        isUnlocked: () => store.getState().buildings.grenademan >= 700,
        text: <>
            <Typography color="inherit">Grenademan Achievement </Typography>
            Hire <b>700</b> grenademen.
            <br/><i>"I quit." ~Chief of Puns</i>"
        </>,
        img: "http://i.imgur.com/8EFEm0M.png"
    },
    endlessWar: {
        isUnlocked: () => store.getState().stats.grenademan >= 10000000000000,
        text: <>
            <Typography color="inherit">Endless War</Typography>
            Deal <b>{prettify(10000000000000)}</b> damage to the wall with your grenademen.
        </>,
        img: "http://i.imgur.com/IiBqHel.png"
    },
}

export const {
    manWithGrenades,
    theBarrage,
    nadeBarricade,
    rainOfGrenades,
    grenadeGale,
    oceanOfGrenades,
    bombTheWorld,
    NadeItThrough,
    divineBombedy,
    grenadeAchievement,
    endlessWar,
} = achievements;