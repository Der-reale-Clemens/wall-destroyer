import {Achievement} from "../achievements";
import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const allBuildings = (): number => Object.values(store.getState().buildings)
    .reduce((acc, b) => acc + b);


const achievements: {[key: string]: Achievement} = {
    theMenagerie:{
        isUnlocked: () => allBuildings() >= 100,
        text: <>
            <Typography color="inherit">The Menagerie
            </Typography>
            Have <b>100</b> buildings.
        </>,
        img: "http://i.imgur.com/93tCmIj.png"
    },
    theAggregation:{
        isUnlocked: () => allBuildings() >= 500,
        text: <>
            <Typography color="inherit">The Aggregation
            </Typography>
            Have <b>500</b> buildings.
        </>,
        img: "http://i.imgur.com/F4FwhJe.png"
    },
    theArmada:{
        isUnlocked: () => allBuildings() >= 1000,
        text: <>
            <Typography color="inherit">The Armada
            </Typography>
            Have <b>1,000</b> buildings.
        </>,
        img: "http://i.imgur.com/tHUohS4.png"
    },
    rulerOfTheWorld:{
        isUnlocked: () => allBuildings() >= 2000,
        text: <>
            <Typography color="inherit">Ruler of The World
            </Typography>
            Have <b>2,000</b> buildings.
        </>,
        img: "http://i.imgur.com/CSzNF0J.png"
    },
    kingOfTheCosmos:{
        isUnlocked: () => allBuildings() >= 3000,
        text: <>
            <Typography color="inherit">King of The Cosmos
            </Typography>
            Have <b>3,000</b> buildings.
        </>,
        img: "http://i.imgur.com/piFqUdL.png"
    },
    masterOfReality:{
        isUnlocked: () => allBuildings() >= 5000,
        text: <>
            <Typography color="inherit">Master of Reality
            </Typography>
            Have <b>5,000</b> buildings.
        </>,
        img: "http://i.imgur.com/fGDPekC.png"
    },
    god:{
        isUnlocked: () => allBuildings() >= 7500,
        text: <>
            <Typography color="inherit">God
            </Typography>
            Have <b>7,500</b> buildings.
        </>,
        img: "http://i.imgur.com/gszdkb6.png"
    },
    theKing:{
        isUnlocked: () => allBuildings() >= 10000,
        text: <>
            <Typography color="inherit">The King
            </Typography>
            Have <b>10,000</b> buildings.
        </>,
        img: "http://i.imgur.com/xvVrdJg.png"
    },
}

export const {
    theMenagerie,
    theAggregation,
    theArmada,
    rulerOfTheWorld,
    kingOfTheCosmos,
    masterOfReality,
    god,
    theKing,
} = achievements