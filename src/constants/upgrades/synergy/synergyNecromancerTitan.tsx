import {Upgrade} from "../../upgrades";
import {store} from "../../../redux/store";
import {decreaseMoney} from "../../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../../constants";

const upgrades: { [key: string]: Upgrade } = {
    titanThrones: {
        isVisible: () => store.getState().buildings.necromancer >= 50 && store.getState().buildings.titan >= 50,
        isBuyable: () => store.getState().game.money >= 4.777777777777777e+15 && store.getState().game.bricks >= 477,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.777777777777777e+15));
            dispatch(decreaseMoney(477));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.025,
            titan: () => 1+store.getState().buildings.necromancer*0.02,
        },
        text: <>
            <Typography color="inherit">Titan Thrones</Typography>
            Necromancers do <b>2.5%</b> more damage per titan.
            <br/>Titans do <b>2%</b> more damage per necromancer.
            <br/><i>The necromancers' thrones now sit atop the titans, so they can infuse the titans with greater
            magic(and look awesome).</i>
            <br/>Costs <b>{prettify(4777777777777777)}</b> Cash & <b>477</b> Bricks
        </>,
        img: "http://i.imgur.com/ENs5xQl.png"
    },
    magicSwap: {
        isVisible: () => store.getState().buildings.necromancer >= 100 && store.getState().buildings.titan >= 100,
        isBuyable: () => store.getState().game.money >= 2.777777777777778e+17 && store.getState().game.bricks >= 27_777,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.777777777777778e+17));
            dispatch(decreaseMoney(27_777));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.02,
            titan: () => 1+store.getState().buildings.necromancer*0.015,
        },
        text: <>
            <Typography color="inherit">Magic Swap</Typography>
            Necromancers do <b>2%</b> more damage per titan.
            <br/>Titans do <b>1.5%</b> more damage per necromancer.
            <br/><i>The necromancers gain enormous power and the titans gain the ability to raise the dead.</i>
            <br/>Costs <b>{prettify(277777777777777800)}</b> Cash & <b>{prettify(27777)}</b> Bricks
        </>,
        img: "http://i.imgur.com/KWgN54C.png"
    },
    mergeForm: {
        isVisible: () => store.getState().buildings.necromancer >= 200 && store.getState().buildings.titan >= 200,
        isBuyable: () => store.getState().game.money >= 1.7777777777777778e+21 && store.getState().game.bricks >= 177777777,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.7777777777777778e+21));
            dispatch(decreaseMoney(177777777));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.015,
            titan: () => 1+store.getState().buildings.necromancer*0.015,
        },
        text: <>
            <Typography color="inherit">Merge Form</Typography>
            Necromancers do <b>1.5%</b> more damage per titan.
            <br/>Titans do <b>1.5%</b> more damage per necromancer.
            <br/><i>Necromancers merge with titans to create almighty dead-rising wall-smashing monsters!</i>
            <br/>Costs <b>{prettify(1.7777777777777778e+21)}</b> Cash & <b>{prettify(177777777)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Zp3cflT.png"
    },
    incidentX: {
        isVisible: () => store.getState().buildings.necromancer >= 300 && store.getState().buildings.titan >= 300,
        isBuyable: () => store.getState().game.money >= 1.7777777777777777e+25 && store.getState().game.bricks >= 17777777777777,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.7777777777777777e+25));
            dispatch(decreaseMoney(17777777777777));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.015,
            titan: () => 1+store.getState().buildings.necromancer*0.01,
        },
        text: <>
            <Typography color="inherit">Incident 073X</Typography>
            Necromancers do <b>1.5%</b> more damage per titan.
            <br/>Titans do <b>1%</b> more damage per necromancer.
            <br/><i>[REDACTED, REDACTED SO HARD]
            <br/>"NEVER AGAIN." ~Head of Demon Relations, RUC</i>
            <br/>Costs <b>{prettify(1.7777777777777777e+25)}</b> Cash & <b>{prettify(17777777777777)}</b> Bricks
        </>,
        img: "http://i.imgur.com/xc5KMYP.png"
    },
    kingHyzem: {
        isVisible: () => store.getState().buildings.necromancer >= 400 && store.getState().buildings.titan >= 400,
        isBuyable: () => store.getState().game.money >= 2.7777777777777776e+29 && store.getState().game.bricks >= 277777777777777777,
        buy: (dispatch) => {
            dispatch(decreaseMoney(2.7777777777777776e+29));
            dispatch(decreaseMoney(277777777777777777));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.008,
            titan: () => 1+store.getState().buildings.necromancer*0.006,
        },
        text: <>
            <Typography color="inherit">King Hyzem</Typography>
            Necromancers do <b>0.8%</b> more damage per titan.
            <br/>Titans do <b>0.6%</b> more damage per necromancer.
            <br/><i>After a long search, we have found the resting place of the greatest titan king who ever lived.
            <br/>
            <br/>Unfortunately*, Lord Reaefsek's body was never found, as explained in the description of his hand.
            <br/>EDIT: *fucking fortunately.</i>
            <br/>Costs <b>{prettify(2.7777777777777776e+29)}</b> Cash & <b>{prettify(277777777777777777)}</b> Bricks
        </>,
        img: "http://i.imgur.com/CSalqxT.png"
    },
    kingOptuqui: {
        isVisible: () => store.getState().buildings.necromancer >= 500 && store.getState().buildings.titan >= 500,
        isBuyable: () => store.getState().game.money >= 4.777777777777778e+33 && store.getState().game.bricks >= 4777777777777777777777,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.777777777777778e+33));
            dispatch(decreaseMoney(4777777777777777777777));
        },
        effect: {
            necromancer: () => 1+store.getState().buildings.titan*0.006,
            titan: () => 1+store.getState().buildings.necromancer*0.005,
        },
        text: <>
            <Typography color="inherit">King Optuqui</Typography>
            Necromancers do <b>0.6%</b> more damage per titan.
            <br/>Titans do <b>0.5%</b> more damage per necromancer.
            <br/><i>Time to finally question him about his unusual knowledge! He says that much of his knowledge came
            from a stranger to the land, who always wore a white mask and told of many things. When questioned about a
            name, this stranger asked to be referred to as '#16'.</i>
            <br/>Costs <b>{prettify(4.777777777777778e+33)}</b> Cash & <b>{prettify(4777777777777777777777)}</b> Bricks
        </>,
        img: "http://i.imgur.com/eJI7yUF.png"
    },

}

export const {
    titanThrones,
    magicSwap,
    mergeForm,
    incidentX,
    kingHyzem,
    kingOptuqui,
} = upgrades;