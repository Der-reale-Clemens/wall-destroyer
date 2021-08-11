import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    precisionStrikes: {
        isVisible: () => store.getState().buildings.bulldozer >= 50 && store.getState().buildings.airstrikeCaller >= 50,
        isBuyable: () => store.getState().game.money >= 3.6e+13,
        buy: (dispatch) => dispatch(decreaseMoney(3.6e+13)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.03,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.03
        },
        text: <>
            <Typography color="inherit">Precision Strikes</Typography>
            Bulldozers do <b>3%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>3%</b> more damage for each bulldozer.
            <br/><i>We gotta drop the stuff so that it bounces off the bulldozers in the perfect way to do the maximum
            damage.</i>
            <br/>Costs <b>{prettify(36000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/PEvEBLp.png"
    },
    bulldozerDrop: {
        isVisible: () => store.getState().buildings.bulldozer >= 100 && store.getState().buildings.airstrikeCaller >= 100,
        isBuyable: () => store.getState().game.money >= 3.6e+15,
        buy: (dispatch) => dispatch(decreaseMoney(3.6e+15)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.01,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.01
        },
        text: <>
            <Typography color="inherit">Bulldozer Drop</Typography>
            Bulldozers do <b>1%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>1%</b> more damage for each bulldozer.
            <br/><i>The guy who thought of this was a shoe-in for Employee of The Month.</i>
            <br/>Costs <b>{prettify(3600000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/8EjO4Pc.png"
    },
    enhancedBulldozerDrop: {
        isVisible: () => store.getState().buildings.bulldozer >= 200 && store.getState().buildings.airstrikeCaller >= 200,
        isBuyable: () => store.getState().game.money >= 6.12e+18,
        buy: (dispatch) => dispatch(decreaseMoney(6.12e+18)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.01,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.008
        },
        text: <>
            <Typography color="inherit">Enhanced Bulldozer Drop</Typography>
            Bulldozers do <b>1%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>0.8%</b> more damage for each bulldozer.
            <br/><i>Tied big jets to the bulldozers so they fall faster.</i>
            <br/>Costs <b>{prettify(6120000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/wZYXDls.png"
    },
    ultimateBulldozerDrop: {
        isVisible: () => store.getState().buildings.bulldozer >= 300 && store.getState().buildings.airstrikeCaller >= 300,
        isBuyable: () => store.getState().game.money >= 6.12e+22,
        buy: (dispatch) => dispatch(decreaseMoney(6.12e+22)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.01,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.008
        },
        text: <>
            <Typography color="inherit">Ultimate Bulldozer Drop</Typography>
            Bulldozers do <b>1%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>0.8%</b> more damage for each bulldozer.
            <br/><i>The guy who came up with the bulldozer drop is a millionaire now.</i>
            <br/>Costs <b>{prettify(6.12e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/2oO31SH.png"
    },
    epicBulldozerDrop: {
        isVisible: () => store.getState().buildings.bulldozer >= 400 && store.getState().buildings.airstrikeCaller >= 400,
        isBuyable: () => store.getState().game.money >= 1.26e+27,
        buy: (dispatch) => dispatch(decreaseMoney(1.26e+27)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.008,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.008
        },
        text: <>
            <Typography color="inherit">Epic Bulldozer Drop</Typography>
            Bulldozers do <b>0.8%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>0.8%</b> more damage for each bulldozer.
            <br/><i>"More like epic FAIL." ~The walls, before getting wrecked with this</i>
            <br/>Costs <b>{prettify(1.26e+27)}</b> Cash
        </>,
        img: "http://i.imgur.com/4vt1A6Q.png"
    },
    bulldozerPlanes: {
        isVisible: () => store.getState().buildings.bulldozer >= 500 && store.getState().buildings.airstrikeCaller >= 500,
        isBuyable: () => store.getState().game.money >= 1.26e+31,
        buy: (dispatch) => dispatch(decreaseMoney(1.26e+31)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.006,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.006
        },
        text: <>
            <Typography color="inherit">Bulldozer Planes</Typography>
            Bulldozers do <b>0.6%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>0.6%</b> more damage for each bulldozer.
            <br/><i>"Basically we went with the most badass thing we could think of." ~Head of R&D, on the process</i>
            <br/>Costs <b>{prettify(1.26e+31)}</b> Cash
        </>,
        img: "http://i.imgur.com/jIhkyDF.png"
    },
    theDarkBindings: {
        isVisible: () => store.getState().buildings.bulldozer >= 700 && store.getState().buildings.airstrikeCaller >= 700,
        isBuyable: () => store.getState().game.money >= 6.12e39,
        buy: (dispatch) => dispatch(decreaseMoney(6.12e39)),
        effect: {
            bulldozer: () => 1+store.getState().buildings.airstrikeCaller *0.005,
            airstrikeCaller: () => 1+store.getState().buildings.bulldozer *0.005
        },
        text: <>
            <Typography color="inherit">The Dark Bindings</Typography>
            Bulldozers do <b>0.5%</b> more damage for each airstrike caller.
            <br/>Airstrike callers do <b>0.5%</b> more damage for each bulldozer.
            <br/><i>A set of spells devised by a famous evil wizard. Cast them on two objects or beings and they are
            bound to each other, their strength becomes entwined and increases massively through some sort of mutual
            copying reality exploit.
            <br/>"Planes and bulldozers, anyone? No one? Whatever, we're doing it anyway." ~Head of R&D</i>
            <br/>Costs <b>{prettify(6.12e39)}</b> Cash
        </>,
        img: "http://i.imgur.com/eDyhOUN.png"
    },

}

export const {
    precisionStrikes,
    bulldozerDrop,
    enhancedBulldozerDrop,
    ultimateBulldozerDrop,
    epicBulldozerDrop,
    bulldozerPlanes,
    theDarkBindings,
} = upgrades;