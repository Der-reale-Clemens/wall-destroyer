import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {prettify} from "../../constants";
import {Typography} from "@material-ui/core";

const upgrades: { [key: string]: Upgrade } = {
    strongerBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 1,
        isBuyable: () => store.getState().game.money >= 6e+8,
        buy: (dispatch) => dispatch(decreaseMoney(6e+8)),
        effect: {bulldozer: 1.5},
        text: <>
            <Typography color="inherit">Stronger Blades</Typography>
            Bulldozers do <b>50%</b> more damage.
            <br/><i>Probably made of titanium.</i>
            <br/>Costs <b>{prettify(600000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/q1QrnCW.png"
    },
    powerTreads: {
        isVisible: () => store.getState().buildings.bulldozer >= 5,
        isBuyable: () => store.getState().game.money >= 6e+9,
        buy: (dispatch) => dispatch(decreaseMoney(6e+9)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Power Treads</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Power Treads(TM), By the Realistic Upgrades Corporation(RUC).</i>
            <br/>Costs <b>{prettify(6000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/EiU5wtP.png"
    },
    doubleBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 25,
        isBuyable: () => store.getState().game.money >= 6e+10,
        buy: (dispatch) => dispatch(decreaseMoney(6e+10)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Double Blades</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Two is better than one, right?</i>
            <br/>Costs <b>{prettify(60000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/HH6K4Vq.png"
    },
    powerfulEngines: {
        isVisible: () => store.getState().buildings.bulldozer >= 50,
        isBuyable: () => store.getState().game.money >= 3e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3e+11)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Powerful Engines</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>"Gotta go fast." ~Sonic</i>
            <br/>Costs <b>{prettify(300000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/BXEfdVE.png"
    },
    bladesWithBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 75,
        isBuyable: () => store.getState().game.money >= 3e+12,
        buy: (dispatch) => dispatch(decreaseMoney(3e+12)),
        effect: {bulldozer: 2},
        text: <>
            <Typography color="inherit">Blades With Blades</Typography>
            Bulldozers do <b>twice</b> as much damage.
            <br/><i>Smaller blades on the blade. More blades, more damage.</i>
            <br/>Costs <b>{prettify(3000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/XKWl4gL.png"
    },
    diamondBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 100,
        isBuyable: () => store.getState().game.money >= 3e+13,
        buy: (dispatch) => dispatch(decreaseMoney(3e+13)),
        effect: {bulldozer: 3},
        text: <>
            <Typography color="inherit">Diamond Blades</Typography>
            Bulldozers do <b>three times</b> as much damage.
            <br/><i>"Why yes, we are one of the world's richest corporations. Why do you ask?" ~RUC Head of Finance</i>
            <br/>Costs <b>{prettify(30000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/AZU88GP.png"
    },
    adamantiumBlades: {
        isVisible: () => store.getState().buildings.bulldozer >= 150,
        isBuyable: () => store.getState().game.money >= 3e+15,
        buy: (dispatch) => dispatch(decreaseMoney(3e+15)),
        effect: {bulldozer: 3},
        text: <>
            <Typography color="inherit">Adamantium Blades</Typography>
            Bulldozers do <b>three times</b> as much damage.
            <br/><i>Cuts through diamond!(more effectively than this wall)</i>
            <br/>Costs <b>{prettify(3000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/crWt6tW.png"
    },
    theMegadozer: {
        isVisible: () => store.getState().buildings.bulldozer >= 200,
        isBuyable: () => store.getState().game.money >= 3e+17,
        buy: (dispatch) => dispatch(decreaseMoney(3e+17)),
        effect: {bulldozer: 4},
        text: <>
            <Typography color="inherit">The Megadozer</Typography>
            Bulldozers do <b>four times</b> as much damage.
            <br/><i>It's really, really big.</i>
            <br/>Costs <b>{prettify(300000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/jVDRDvc.png"
    },

}

export const {
    strongerBlades,
    powerTreads,
    doubleBlades,
    powerfulEngines,
    bladesWithBlades,
    diamondBlades,
    adamantiumBlades,
    theMegadozer,
} = upgrades