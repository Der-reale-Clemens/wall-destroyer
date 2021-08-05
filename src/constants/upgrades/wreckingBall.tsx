import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    biggerBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 1,
        isBuyable: () => store.getState().game.money >= 4e+7,
        buy: (dispatch) => dispatch(decreaseMoney(4e+7)),
        effect: {wreckingBall: 1.5},
        text: <>
            <Typography color="inherit">Bigger Balls</Typography>
            Wrecking balls do <b>50%</b> more damage.
            <br/><i>If you know what I mean.(I don't)</i>
            <br/>Costs <b>{prettify(40000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/yM8TEHL.png"
    },
    ballsOfSteel: {
        isVisible: () => store.getState().buildings.wreckingBall >= 5,
        isBuyable: () => store.getState().game.money >= 4e+8,
        buy: (dispatch) => dispatch(decreaseMoney(4e+8)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Balls of Steel</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>I'm not sure what the previous ones were made out of.</i>
            <br/>Costs <b>{prettify(400000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/mAr2vCg.png"
    },
    reinforcedBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 25,
        isBuyable: () => store.getState().game.money >= 4e+9,
        buy: (dispatch) => dispatch(decreaseMoney(4e+9)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Reinforced Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>They're actually just titanium balls, but the "Titanium _______" upgrades were getting boring.</i>
            <br/>Costs <b>{prettify(4000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/G48Ecxn.png"
    },
    flamingBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 50,
        isBuyable: () => store.getState().game.money >= 4e+10,
        buy: (dispatch) => dispatch(decreaseMoney(4e+10)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Flaming Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>Yes, this totally works against a brick wall.</i>
            <br/>Costs <b>{prettify(40000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/RiUfzHo.png"
    },
    spikedBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 75,
        isBuyable: () => store.getState().game.money >= 4e+11,
        buy: (dispatch) => dispatch(decreaseMoney(4e+11)),
        effect: {wreckingBall: 2},
        text: <>
            <Typography color="inherit">Spiked Balls</Typography>
            Wrecking balls do <b>twice</b> as much damage.
            <br/><i>Badass and more effective.</i>
            <br/>Costs <b>{prettify(400000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/VUzXniN.png"
    },
    diamondBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 100,
        isBuyable: () => store.getState().game.money >= 4e+12,
        buy: (dispatch) => dispatch(decreaseMoney(4e+12)),
        effect: {wreckingBall: 3},
        text: <>
            <Typography color="inherit">Diamond Balls</Typography>
            Wrecking balls do <b>three times</b> as much damage.
            <br/><i>The strongest balls the world has to offer.</i>
            <br/>Costs <b>{prettify(4000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/AJ4EZ5y.png"
    },
    triBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 150,
        isBuyable: () => store.getState().game.money >= 2e+14,
        buy: (dispatch) => dispatch(decreaseMoney(2e+14)),
        effect: {wreckingBall: 3},
        text: <>
            <Typography color="inherit">Tri-Balls</Typography>
            Wrecking balls do <b>three times</b> as much damage.
            <br/><i>Three is better than one!</i>
            <br/>Costs <b>{prettify(200000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/0sEdsxd.png"
    },
    neutronBalls: {
        isVisible: () => store.getState().buildings.wreckingBall >= 200,
        isBuyable: () => store.getState().game.money >= 8e+15,
        buy: (dispatch) => dispatch(decreaseMoney(8e+15)),
        effect: {wreckingBall: 4},
        text: <>
            <Typography color="inherit">Neutron Balls</Typography>
            Wrecking balls do <b>four times</b> as much damage.
            <br/><i>As dense as a neutron star and about the same potential of turning into a black hole.</i>
            <br/>Costs <b>{prettify(8000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/sgAPNQT.png"
    },

}

export const {
    biggerBalls,
    ballsOfSteel,
    reinforcedBalls,
    flamingBalls,
    spikedBalls,
    diamondBalls,
    triBalls,
    neutronBalls,
} = upgrades;