import {Upgrade} from "../../upgrades";
import {store} from "../../../redux/store";
import {decreaseMoney} from "../../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../../constants";

const upgrades: { [key: string]: Upgrade } = {
    swordClubs: {
        isVisible: () => store.getState().buildings.clubber >= 25 && store.getState().buildings.swordsman >= 25,
        isBuyable: () => store.getState().game.money >= 1.511e+6,
        buy: (dispatch) => dispatch(decreaseMoney(1.511e+6)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.05,
            swordsman: () => 1+store.getState().buildings.clubber *0.05
        },
        text: <>
            <Typography color="inherit">Sword Clubs</Typography>
            Clubbers do <b>5%</b> more damage per swordsman.
            <br/>Swordsmen do <b>5%</b> more damage per clubber.
            <br/><i>I don't actually know what these are, but they sound badass.</i>
            <br/>Costs <b>{prettify(1511000)}</b> Cash
        </>,
        img: "http://i.imgur.com/LeWcVOs.png"
    },
    clubsCoveredInSwords: {
        isVisible: () => store.getState().buildings.clubber >= 100 && store.getState().buildings.swordsman >= 100,
        isBuyable: () => store.getState().game.money >= 3.022e+8,
        buy: (dispatch) => dispatch(decreaseMoney(3.022e+8)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.04,
            swordsman: () => 1+store.getState().buildings.clubber *0.03
        },
        text: <>
            <Typography color="inherit">Clubs Covered in Swords</Typography>
            Clubbers do <b>4%</b> more damage per swordsman.
            <br/>Swordsmen do <b>3%</b> more damage per clubber.
            <br/><i>Genius.</i>
            <br/>Costs <b>{prettify(302200000)}</b> Cash
        </>,
        img: "http://i.imgur.com/f22Lrs4.png"
    },
    rotatingChainsawSwordClubs: {
        isVisible: () => store.getState().buildings.clubber >= 200 && store.getState().buildings.swordsman >= 200,
        isBuyable: () => store.getState().game.money >= 3.022e+12,
        buy: (dispatch) => dispatch(decreaseMoney(3.022e+12)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.02,
            swordsman: () => 1+store.getState().buildings.clubber *0.02
        },
        text: <>
            <Typography color="inherit">Rotating Chainsaw Sword Clubs</Typography>
            Clubbers do <b>2%</b> more damage per swordsman.
            <br/>Swordsmen do <b>2%</b> more damage per clubber.
            <br/><i>Don't even try to imagine what the hell these things are.</i>
            <br/>Costs <b>{prettify(3022000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/2L70O5v.png"
    },
    thePerfectCombination: {
        isVisible: () => store.getState().buildings.clubber >= 300 && store.getState().buildings.swordsman >= 300,
        isBuyable: () => store.getState().game.money >= 1.511e+16,
        buy: (dispatch) => dispatch(decreaseMoney(1.511e+16)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.015,
            swordsman: () => 1+store.getState().buildings.clubber *0.015
        },
        text: <>
            <Typography color="inherit">The Perfect Combination</Typography>
            Clubbers do <b>1.5%</b> more damage per swordsman.
            <br/>Swordsmen do <b>1.5%</b> more damage per clubber.
            <br/><i>50% club, 50% sword. Perfect.</i>
            <br/>Costs <b>{prettify(15110000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/EYhxJLA.png"
    },
    bayonets: {
        isVisible: () => store.getState().buildings.clubber >= 400 && store.getState().buildings.swordsman >= 400,
        isBuyable: () => store.getState().game.money >= 3.022e+20,
        buy: (dispatch) => dispatch(decreaseMoney(3.022e+20)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.012,
            swordsman: () => 1+store.getState().buildings.clubber *0.012
        },
        text: <>
            <Typography color="inherit">Bayonets</Typography>
            Clubbers do <b>1.2%</b> more damage per swordsman.
            <br/>Swordsmen do <b>1.2%</b> more damage per clubber.
            <br/><i>Now our technology is up to par with the 17th century! [applause]</i>
            <br/>Costs <b>{prettify(302200000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Mus5GU4.png"
    },
    kingHyzemBlades: {
        isVisible: () => store.getState().buildings.clubber >= 500 && store.getState().buildings.swordsman >= 500,
        isBuyable: () => store.getState().game.money >= 6.044e+24,
        buy: (dispatch) => dispatch(decreaseMoney(6.044e+24)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.01,
            swordsman: () => 1+store.getState().buildings.clubber *0.01
        },
        text: <>
            <Typography color="inherit">King Hyzem's Blades</Typography>
            Clubbers do <b>1%</b> more damage per swordsman.
            <br/>Swordsmen do <b>1%</b> more damage per clubber.
            <br/><i>It is said that Hyzem's Blades are unrecognizable as any one melee weapon; they are all at once.</i>
            <br/>Costs <b>{prettify(6.044e+24)}</b> Cash
        </>,
        img: "http://i.imgur.com/sjjiH7m.png"
    },
    theArenaOfSgapang: {
        isVisible: () => store.getState().buildings.clubber >= 700 && store.getState().buildings.swordsman >= 700,
        isBuyable: () => store.getState().game.money >= 1.511e+33,
        buy: (dispatch) => dispatch(decreaseMoney(1.511e+33)),
        effect: {
            clubber: () => 1+store.getState().buildings.swordsman *0.005,
            swordsman: () => 1+store.getState().buildings.clubber *0.005
        },
        text: <>
            <Typography color="inherit">The Arena of Sgapang</Typography>
            Clubbers do <b>0.5%</b> more damage per swordsman.
            <br/>Swordsmen do <b>0.5%</b> more damage per clubber.
            <br/><i>Reaefsek did something to his castle arena to make it extremely effective in improving fighting
            skill. We'd rather not know what, to be honest. The place is creepy enough as it is.</i>
            <br/>Costs <b>{prettify(1.511e+33)}</b> Cash
        </>,
        img: "http://i.imgur.com/BoL6x5t.png"
    },
}

export const {
    swordClubs,
    clubsCoveredInSwords,
    rotatingChainsawSwordClubs,
    thePerfectCombination,
    bayonets,
    kingHyzemBlades,
    theArenaOfSgapang,
} = upgrades;