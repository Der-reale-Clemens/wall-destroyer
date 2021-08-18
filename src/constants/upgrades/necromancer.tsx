import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    polishedBricks: {
        isVisible: () => store.getState().buildings.necromancer >= 1,
        isBuyable: () => store.getState().game.money >= 3.33333333333e+11 && store.getState().game.bricks >= 2,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.33333333333e+11));
            dispatch(decreaseBricks(2));
        },
        effect: {necromancer: 1.5},
        text: <>
            <Typography color="inherit">Polished Bricks</Typography>
            Necromancers do <b>50%</b> more damage.
            <br/><i>Gives them more of an incentive.</i>
            <br/>Costs <b>{prettify(333333333333)}</b> Cash & <b>{prettify(2)}</b> Bricks
        </>,
        img: "http://i.imgur.com/v1AK3rT.png"
    },
    giantHats: {
        isVisible: () => store.getState().buildings.necromancer >= 5,
        isBuyable: () => store.getState().game.money >= 3.333333333333e+12 && store.getState().game.bricks >= 4,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.333333333333e+12));
            dispatch(decreaseBricks(4));
        },
        effect: {necromancer: 2},
        text: <>
            <Typography color="inherit">Giant Hats</Typography>
            Necromancers do <b>twice</b> as much damage.
            <br/><i>If there's one thing the wizards value other than bricks, it's big hats.</i>
            <br/>Costs <b>{prettify(3333333333333)}</b> Cash & <b>{prettify(4)}</b> Bricks
        </>,
        img: "http://i.imgur.com/TFn4qy8.png"
    },
    ancientScrolls: {
        isVisible: () => store.getState().buildings.necromancer >= 25,
        isBuyable: () => store.getState().game.money >= 3.3333333333333e+13 && store.getState().game.bricks >= 33,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333e+13));
            dispatch(decreaseBricks(33));
        },
        effect: {necromancer: 2},
        text: <>
            <Typography color="inherit">Ancient Scrolls</Typography>
            Necromancers do <b>twice</b> as much damage.
            <br/><i>We find these while mining, so we might as well finally put them to use.</i>
            <br/>Costs <b>{prettify(33333333333333)}</b> Cash & <b>{prettify(33)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Rcq67yT.png"
    },
    thrones: {
        isVisible: () => store.getState().buildings.necromancer >= 50,
        isBuyable: () => store.getState().game.money >= 3.33333333333333e+14 && store.getState().game.bricks >= 333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.33333333333333e+14));
            dispatch(decreaseBricks(333));
        },
        effect: {necromancer: 2},
        text: <>
            <Typography color="inherit">Thrones</Typography>
            Necromancers do <b>twice</b> as much damage.
            <br/><i>They're demanding these. Necromancers are assholes.</i>
            <br/>Costs <b>{prettify(333333333333333)}</b> Cash & <b>{prettify(333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/9zBRNek.png"
    },
    zombiePreservatives: {
        isVisible: () => store.getState().buildings.necromancer >= 75,
        isBuyable: () => store.getState().game.money >= 3.333333333333333e+15 && store.getState().game.bricks >= 3333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.333333333333333e+15));
            dispatch(decreaseBricks(3333));
        },
        effect: {necromancer: 2},
        text: <>
            <Typography color="inherit">Zombie Preservatives</Typography>
            Necromancers do <b>twice</b> as much damage.
            <br/><i>Keeps them from rotting too fast.</i>
            <br/>Costs <b>{prettify(3333333333333333)}</b> Cash & <b>{prettify(3333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/oR9MbS5.png"
    },
    betterGraveyards: {
        isVisible: () => store.getState().buildings.necromancer >= 100,
        isBuyable: () => store.getState().game.money >= 3.3333333333333332e+16 && store.getState().game.bricks >= 333_333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333332e+16));
            dispatch(decreaseBricks(333_333));
            },
        effect: {necromancer: 3},
        text: <>
            <Typography color="inherit">Better Graveyards</Typography>
            Necromancers do <b>three times</b> as much damage.
            <br/><i>They were using some pretty low-class wizard graveyards before.</i>
            <br/>Costs <b>{prettify(33333333333333332)}</b> Cash & <b>{prettify(333_333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/8eam0qT.png"
    },
    higherClassedNecromancers: {
        isVisible: () => store.getState().buildings.necromancer >= 150,
        isBuyable: () => store.getState().game.money >= 3.3333333333333335e+18 && store.getState().game.bricks >= 33_333_333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333335e+18));
            dispatch(decreaseBricks(33_333_333));
        },
        effect: {necromancer: 3},
        text: <>
            <Typography color="inherit">Higher-Classed Necromancers</Typography>
            Necromancers do <b>three times</b> as much damage.
            <br/><i>The guys we hired before turned out to be scrubs.</i>
            <br/>Costs <b>{prettify(3333333333333333500)}</b> Cash & <b>{prettify(33_333_333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/qXqoMU6.png"
    },
    teleportationSpells: {
        isVisible: () => store.getState().buildings.necromancer >= 200,
        isBuyable: () => store.getState().game.money >= 6.666666666666666e+19 && store.getState().game.bricks >= 666_666_666,
        buy: (dispatch) => {
            dispatch(decreaseMoney(6.666666666666666e+19));
            dispatch(decreaseBricks(666_666_666));
        },
        effect: {necromancer: 4},
        text: <>
            <Typography color="inherit">Teleportation Spells</Typography>
            Necromancers do <b>four times</b> as much damage.
            <br/><i>So they can clean out the world's graveyards faster.</i>
            <br/>Costs <b>{prettify(66666666666666660000)}</b> Cash & <b>{prettify(666_666_666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/RnCc5dn.png"
    },
    duplicationSpells: {
        isVisible: () => store.getState().buildings.necromancer >= 300,
        isBuyable: () => store.getState().game.money >= 3.3333333333333333e+24 && store.getState().game.bricks >= 33333333333333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333333e+24));
            dispatch(decreaseBricks(33333333333333));
        },
        effect: {necromancer: 5},
        text: <>
            <Typography color="inherit">Duplication Spells</Typography>
            Necromancers do <b>five times</b> as much damage.
            <br/><i>To multiply the zombification spells for cheap.</i>
            <br/>Costs <b>{prettify(3.3333333333333333e+24)}</b> Cash & <b>{prettify(33333333333333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/OZnAMmh.png"
    },
    ancientTombs: {
        isVisible: () => store.getState().buildings.necromancer >= 400,
        isBuyable: () => store.getState().game.money >= 3.3333333333333333e+28 && store.getState().game.bricks >= 333333333333333333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333333e+28));
            dispatch(decreaseBricks(333333333333333333));
        },
        effect: {necromancer: 5},
        text: <>
            <Typography color="inherit">Ancient Tombs</Typography>
            Necromancers do <b>five times</b> as much damage.
            <br/><i>"All ancient tombs have tons of useful magical stuff and only the highest quality corpses. We've
            never really thought why; it's just a fact." ~A necromancer</i>
            <br/>Costs <b>{prettify(3.3333333333333333e+28)}</b> Cash & <b>{prettify(333333333333333333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Q42Qlh5.png"
    },
    firstWizardScrolls: {
        isVisible: () => store.getState().buildings.necromancer >= 500,
        isBuyable: () => store.getState().game.money >= 3.3333333333333336e+32 && store.getState().game.bricks >= 3333333333333333333333,
        buy: (dispatch) => {
            dispatch(decreaseMoney(3.3333333333333336e+32));
            dispatch(decreaseBricks(3333333333333333333333));
        },
        effect: {necromancer: 7},
        text: <>
            <Typography color="inherit">First Wizard Scrolls</Typography>
            Necromancers do <b>seven times</b> as much damage.
            <br/><i>A few centuries ago, some demons snuck into the Great Wizard Library, took all the First Wizards'
            scrolls, and sent the wizards on the greatest treasure hunt ever constructed to get them back. The scrolls
            were never found. We're just going to cheat and use the compromisers to hunt them down.
            <br/>
            <br/>"I propose we send everyone we have out on the hunt instead of cheating." ~Agent Johnson
            <br/>"No." ~Everyone</i>
            <br/>Costs <b>{prettify(3.3333333333333336e+32)}</b> Cash & <b>{prettify(3333333333333333333333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/2nlwuwZ.png"
    },
}

export const {
    polishedBricks,
    giantHats,
    ancientScrolls,
    thrones,
    zombiePreservatives,
    betterGraveyards,
    higherClassedNecromancers,
    teleportationSpells,
    duplicationSpells,
    ancientTombs,
    firstWizardScrolls,
} = upgrades;