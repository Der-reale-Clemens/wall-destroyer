import {Achievement} from "../achievements";
import {Typography} from "@material-ui/core";
import {store} from "../../redux/store";

const achievements: { [key: string]: Achievement } = {
    shooterOfGuns: {
        isUnlocked: () => 1 <= store.getState().buildings.gunshooter,
        text: <>
            <Typography color="inherit">Shooter of Guns</Typography>
            Hire <b>1</b> gunshooter.
        </>,
        img: "http://i.imgur.com/d6qPAe1.png"
    },
    firingSquad: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 10,
        text: <>
            <Typography color="inherit">Firing Squad</Typography>
            Hire <b>10</b> gunshooters.
        </>,
        img: "http://i.imgur.com/rJl9TeZ.png"
    },
    blastBattalion: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 50,
        text: <>
            <Typography color="inherit">Blast Battalion</Typography>
            Hire <b>50</b> gunshooters.
        </>,
        img: "http://i.imgur.com/IyI3G2S.png"
    },
    theOldWest: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 100,
        text: <>
            <Typography color="inherit">The Old West</Typography>
            Hire <b>100</b> gunshooters.
        </>,
        img: "http://i.imgur.com/ZexRC2F.png"
    },
    theMilitary: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 150,
        text: <>
            <Typography color="inherit">The Military</Typography>
            Hire <b>150</b> gunshooters.
        </>,
        img: "http://i.imgur.com/eAFR8kh.png"
    },
    armamentArmada: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 200,
        text: <>
            <Typography color="inherit">Armament Armada</Typography>
            Hire <b>200</b> gunshooters.
        </>,
        img: "http://i.imgur.com/2oIB7lS.png"
    },
    gunWithTheWind: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 300,
        text: <>
            <Typography color="inherit">Gun With The Wind
            </Typography>
            Hire <b>300</b> gunshooters.
        </>,
        img: "http://i.imgur.com/1QXsFlH.png"
    },
    goodGun: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 400,
        text: <>
            <Typography color="inherit">Couldn't Think of a Good Gun</Typography>
            Hire <b>400</b> gunshooters.
            <br/><i>"Oh wait, I'm done already. I mean... I'm GUN already." ~Chief of <del>Guns</del> Puns</i>"
        </>,
        img: "http://i.imgur.com/OrTrCod.png"
    },
    whenAllIsSaidAndGun: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 500,
        text: <>
            <Typography color="inherit">When All Is Said And Gun</Typography>
            Hire <b>500</b> gunshooters.
        </>,
        img: "http://i.imgur.com/V95QmIo.png"
    },
    allAreGun: {
        isUnlocked: () => store.getState().buildings.gunshooter >= 700,
        text: <>
            <Typography color="inherit">All Are Gun & Gun Is All</Typography>
            Hire <b>700</b> gunshooters.
            <br/><i>"ALL. ALL GUN. AAAAAAALLL." ~Automated RUC complaint responder"</i>
        </>,
        img: "http://i.imgur.com/zZXuikn.png"
    },
    // namePls: {
    //     isUnlocked: () => store.getState().buildings.gunnerDamage >= 1000000000000,
    //     text: <>
    //         <Typography color="inherit">Swiss Cheese
    //         </Typography>
    //         Deal <b>1,000,000,000,000</b> damage to the wall with your gunshooters.
    //     </>,
    //     img: "http://i.imgur.com/d6qPAe1.png"
    // },

}

export const {
    shooterOfGuns,
    firingSquad,
    blastBattalion,
    theOldWest,
    theMilitary,
    armamentArmada,
    gunWithTheWind,
    goodGun,
    whenAllIsSaidAndGun,
    allAreGun,
} = achievements;