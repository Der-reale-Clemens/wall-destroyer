import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    fasterCommunications: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 1,
        isBuyable: () => store.getState().game.money >= 3e+10,
        buy: (dispatch) => dispatch(decreaseMoney(3e+10)),
        effect: {airstrikeCaller: 1.5},
        text: <>
            <Typography color="inherit">Faster Communications</Typography>
            Airstrikes do <b>50%</b> more damage.
            <br/><i>Upgrading from dial-up.</i>
            <br/>Costs <b>{prettify(30000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/ziKked6.png"
    },
    pianos: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 5,
        isBuyable: () => store.getState().game.money >= 3e+11,
        buy: (dispatch) => dispatch(decreaseMoney(3e+11)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Pianos</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>What, did you think we were dropping missiles?</i>
            <br/>Costs <b>{prettify(300000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/pGXsYZg.png"
    },
    anvils: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 25,
        isBuyable: () => store.getState().game.money >= 3e+12,
        buy: (dispatch) => dispatch(decreaseMoney(3e+12)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Anvils</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>Ah, a classic.</i>
            <br/>Costs <b>{prettify(3000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/0yGfwss.png"
    },
    supersonicJets: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 50,
        isBuyable: () => store.getState().game.money >= 1.5e+13,
        buy: (dispatch) => dispatch(decreaseMoney(1.5e+13)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">Supersonic Jets</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>3-5 business days no more!</i>
            <br/>Costs <b>{prettify(15000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Mh3dfeG.png"
    },
    statues: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 75,
        isBuyable: () => store.getState().game.money >= 6e+13,
        buy: (dispatch) => dispatch(decreaseMoney(6e+13)),
        effect: {airstrikeCaller: 2},
        text: <>
            <Typography color="inherit">20-Foot Statues</Typography>
            Airstrikes do <b>twice</b> as much damage.
            <br/><i>Statues of the CEO of the RUC of course.</i>
            <br/>Costs <b>{prettify(60000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Ec8NMPt.png"
    },
    anvilShapedBombs: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 100,
        isBuyable: () => store.getState().game.money >= 6e+14,
        buy: (dispatch) => dispatch(decreaseMoney(6e+14)),
        effect: {airstrikeCaller: 3},
        text: <>
            <Typography color="inherit">Anvil-Shaped Bombs</Typography>
            Airstrikes do <b>three times</b> as much damage.
            <br/><i>A lot more effective than anvils, and clearly better than using actual missiles.</i>
            <br/>Costs <b>{prettify(600000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/WdlfCsk.png"
    },
    missiles: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 150,
        isBuyable: () => store.getState().game.money >= 6e+16,
        buy: (dispatch) => dispatch(decreaseMoney(6e+16)),
        effect: {airstrikeCaller: 3},
        text: <>
            <Typography color="inherit">Missiles</Typography>
            Airstrikes do <b>three times</b> as much damage.
            <br/><i>Yeah, we gave in eventually.</i>
            <br/>Costs <b>{prettify(60000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/nkSdY4M.png"
    },
    nukes: {
        isVisible: () => store.getState().buildings.airstrikeCaller >= 200,
        isBuyable: () => store.getState().game.money >= 6e+18,
        buy: (dispatch) => dispatch(decreaseMoney(6e+18)),
        effect: {airstrikeCaller: 4},
        text: <>
            <Typography color="inherit">Nukes</Typography>
            Airstrikes do <b>four times</b> as much damage.
            <br/><i>A little overkill for a brick wall, you think? Well, you haven't seen this wall.</i>
            <br/>Costs <b>{prettify(6000000000000000000)}</b> Cash
        </>,
        img: "http://i.imgur.com/kggtIiP.png"
    },

}

export const {
    fasterCommunications,
    pianos,
    anvils,
    supersonicJets,
    statues,
    anvilShapedBombs,
    missiles,
    nukes
} = upgrades;