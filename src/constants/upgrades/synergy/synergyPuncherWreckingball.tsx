import {Upgrade} from "../../upgrades";
import {store} from "../../../redux/store";
import {decreaseMoney} from "../../../redux/GameSlice";
import {prettify} from "../../../constants";
import {Typography} from "@mui/material";

const upgrades: { [key: string]: Upgrade } = {
    wreckingBallFists: {
        isVisible: () => store.getState().buildings.puncher >= 100 && store.getState().buildings.wreckingBall >= 25,
        isBuyable: () => store.getState().game.money >= 2.8e+9,
        buy: (dispatch) => dispatch(decreaseMoney(2.8e+9)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.1,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.01
        },
        text: <>
            <Typography color="inherit">Wrecking Ball Fists</Typography>
            Punchers do <b>10%</b> more damage per wrecking ball.
            <br/>Wrecking balls do <b>1%</b> more damage per puncher.
            <br/><i>We have the strength.</i>
            <br/>Costs <b>{prettify(2800000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/GOhAQbq.png"
    },
    coordinatedWrecking: {
        isVisible: () => store.getState().buildings.puncher >= 200 && store.getState().buildings.wreckingBall >= 100,
        isBuyable: () => store.getState().game.money >= 2.8e+12,
        buy: (dispatch) => dispatch(decreaseMoney(2.8e+12)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.04,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.01
        },
        text: <>
            <Typography color="inherit">Coordinated Wrecking</Typography>
            Punchers do <b>4%</b> more damage for each wrecking ball.
            <br/>Wrecking balls do <b>1%</b> more damage for each puncher.
            <br/><i>Using the power of the wrecking balls to enhance the power of fists using physics or something.</i>
            <br/>Costs <b>{prettify(2800000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/9uj2ciF.png"
    },
    wreckingBallRiders: {
        isVisible: () => store.getState().buildings.puncher >= 300 && store.getState().buildings.wreckingBall >= 200,
        isBuyable: () => store.getState().game.money >= 8.2e+15,
        buy: (dispatch) => dispatch(decreaseMoney(8.2e+15)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.02,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.009
        },
        text: <>
            <Typography color="inherit">Wrecking Ball Riders</Typography>
            Punchers do <b>2%</b> more damage for each wrecking ball.
            <br/>Wrecking balls do <b>0.9%</b> more damage for each puncher.
            <br/><i>Yes. Hell yes. Hell fucking yes.</i>
            <br/>Costs <b>{prettify(8200000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/HVOtNiB.png"
    },
    ultimateFistBalls: {
        isVisible: () => store.getState().buildings.puncher >= 400 && store.getState().buildings.wreckingBall >= 300,
        isBuyable: () => store.getState().game.money >= 8.2e+19,
        buy: (dispatch) => dispatch(decreaseMoney(8.2e+19)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.01,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.007
        },
        text: <>
            <Typography color="inherit">Ultimate Fist Balls</Typography>
            Punchers do <b>1%</b> more damage for each wrecking ball.
            <br/>Wrecking balls do <b>0.7%</b> more damage for each puncher.
            <br/><i>Wrecking balls shaped like fists. The punchers do more damage because they like to see their symbol
            destroying the wall.</i>
            <br/>Costs <b>{prettify(82000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/WMAG1Bb.png"
    },
    literalWreckingBallFists: {
        isVisible: () => store.getState().buildings.puncher >= 500 && store.getState().buildings.wreckingBall >= 400,
        isBuyable: () => store.getState().game.money >= 2.8e+24,
        buy: (dispatch) => dispatch(decreaseMoney(2.8e+24)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.008,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.007
        },
        text: <>
            <Typography color="inherit">Literal Wrecking Ball Fists</Typography>
            Punchers do <b>0.8%</b> more damage for each wrecking ball.
            <br/>Wrecking balls do <b>0.7%</b> more damage for each puncher.
            <br/><i>"Should have done this the first time." ~Puncher Project Leader, RUC</i>
            <br/>Costs <b>{prettify(2.8e+24)}</b> Cash
        </>,
        img: "http://i.imgur.com/u74hjiG.png"
    },
    wreckingFists: {
        isVisible: () => store.getState().buildings.puncher >= 600 && store.getState().buildings.wreckingBall >= 500,
        isBuyable: () => store.getState().game.money >= 2.8e+28,
        buy: (dispatch) => dispatch(decreaseMoney(2.8e+28)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.008,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.006
        },
        text: <>
            <Typography color="inherit">Wrecking Fists</Typography>
            Punchers do <b>0.8%</b> more damage per wrecking ball.
            <br/>Wrecking balls do <b>0.6%</b> more damage per puncher.
            <br/><i>"Many a man has asked what the Wrecking Fists are." ~Wrecking Ball Project Leader</i>
            <br/>Costs <b>{prettify(2.8e+28)}</b> Cash
        </>,
        img: "http://i.imgur.com/WAEGG3I.png"
    },
    thePuekingFill: {
        isVisible: () => store.getState().buildings.puncher >= 800 && store.getState().buildings.wreckingBall >= 700,
        isBuyable: () => store.getState().game.money >= 8.2e+36,
        buy: (dispatch) => dispatch(decreaseMoney(8.2e+36)),
        effect: {
            puncher: () => 1+store.getState().buildings.wreckingBall *0.004,
            wreckingBall: () => 1+store.getState().buildings.puncher *0.004
        },
        text: <>
            <Typography color="inherit">The Puecking Fill</Typography>
            Punchers do <b>0.4%</b> more damage per wrecking ball.
            <br/>Wrecking balls do <b>0.4%</b> more damage per puncher.
            <br/><i>"Our mission is to create the most experimental, absurd, ridiculous, out-of-left-field upgrade we
            can." ~Head of R&D<br/>"THE GAME IS ON." ~Agent Johnson</i>
            <br/>Costs <b>{prettify(8.2e36)}</b> Cash
        </>
        ,
        img: "http://i.imgur.com/JAcNOnC.png"
    },

}

export const {
    wreckingBallFists,
    coordinatedWrecking,
    wreckingBallRiders,
    ultimateFistBalls,
    literalWreckingBallFists,
    wreckingFists,
    thePuekingFill,
} = upgrades;