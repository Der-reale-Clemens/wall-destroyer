import {Upgrade} from "../../upgrades";
import {store} from "../../../redux/store";
import {decreaseBricks} from "../../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../../constants";

const upgrades: { [key: string]: Upgrade } = {
    leatherJackets: {
        isVisible: () => store.getState().buildings.demon >= 1,
        isBuyable: () => store.getState().game.bricks >= 3.333e+3,
        buy: (dispatch) => dispatch(decreaseBricks(3.333e+3)),
        effect: {demon: 1.5},
        text: <>
            <Typography color="inherit">Leather Jackets</Typography>
            Demons do <b>50%</b> more damage.
            <br/><i>The only things we can do to make demons do more damage involve making them want to.</i>
            <br/>Costs <b>{prettify(3333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/klcGmts.png"
    },
    motorcycles: {
        isVisible: () => store.getState().buildings.demon >= 5,
        isBuyable: () => store.getState().game.bricks >= 3.3333e+4,
        buy: (dispatch) => dispatch(decreaseBricks(3.3333e+4)),
        effect: {demon: 2},
        text: <>
            <Typography color="inherit">Motorcycles
            </Typography>
            Demons do <b>twice</b> as much damage.
            <br/><i>Totally tricked out and really loud, of course.</i>
            <br/>Costs <b>{prettify(33333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/SxcztPw.png"
    },
    ritualSacrifices: {
        isVisible: () => store.getState().buildings.demon >= 25,
        isBuyable: () => store.getState().game.bricks >= 1.33333e+5,
        buy: (dispatch) => dispatch(decreaseBricks(1.33333e+5)),
        effect: {demon: 2},
        text: <>
            <Typography color="inherit">Ritual Sacrifices</Typography>
            Demons do <b>twice</b> as much damage.
            <br/><i>The cult that was doing these before stopped, so we have to take over.</i>
            <br/>Costs <b>{prettify(133333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/8r38suM.png"
    },
    tortureReels: {
        isVisible: () => store.getState().buildings.demon >= 50,
        isBuyable: () => store.getState().game.bricks >= 6.66666e+5,
        buy: (dispatch) => dispatch(decreaseBricks(6.66666e+5)),
        effect: {demon: 2},
        text: <>
            <Typography color="inherit">Torture Reels</Typography>
            Demons do <b>twice</b> as much damage.
            <br/><i>Keeping them entertained.</i>
            <br/>Costs <b>{prettify(666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/zpaA3Yo.png"
    },
    loadsOfWeapons: {
        isVisible: () => store.getState().buildings.demon >= 75,
        isBuyable: () => store.getState().game.bricks >= 3.333333e+6,
        buy: (dispatch) => dispatch(decreaseBricks(3.333333e+6)),
        effect: {demon: 2},
        text: <>
            <Typography color="inherit">Loads of Weapons
            </Typography>
            Demons do <b>twice</b> as much damage.
            <br/><i>They don't have guns down there, so they want some to take back.</i>
            <br/>Costs <b>{prettify(3333333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/cp19yJ7.png"
    },
    worshippers: {
        isVisible: () => store.getState().buildings.demon >= 100,
        isBuyable: () => store.getState().game.bricks >= 3.3333333e+7,
        buy: (dispatch) => dispatch(decreaseBricks(3.3333333e+7)),
        effect: {demon: 3},
        text: <>
            <Typography color="inherit">Worshippers</Typography>
            Demons do <b>three times</b> as much damage.
            <br/><i>Man, demons are much bigger assholes than necromancers.</i>
            <br/>Costs <b>{prettify(33333333)}</b> Bricks
        </>,
        img: "http://i.imgur.com/Fa1DMi2.png"
    },
    universalPasses: {
        isVisible: () => store.getState().buildings.demon >= 150,
        isBuyable: () => store.getState().game.bricks >= 6.666666666e+9,
        buy: (dispatch) => dispatch(decreaseBricks(6.666666666e+9)),
        effect: {demon: 3},
        text: <>
            <Typography color="inherit">Universal Passes</Typography>
            Demons do <b>three times</b> as much damage.
            <br/><i>Okay so some people are worried about the amount of power the demons have at this point... But
            remember, we're finally gonna take down this wall!</i>
            <br/>Costs <b>{prettify(6666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/f9zhDkC.png"
    },
    nuclearLaunchCodes: {
        isVisible: () => store.getState().buildings.demon >= 200,
        isBuyable: () => store.getState().game.bricks >= 6.66666666666e+11,
        buy: (dispatch) => dispatch(decreaseBricks(6.66666666666e+11)),
        effect: {demon: 4},
        text: <>
            <Typography color="inherit">Nuclear Launch Codes
            </Typography>
            Demons do <b>four times</b> as much damage.
            <br/><i>I'm sure they have a totally legit reason for wanting these.</i>
            <br/>Costs <b>{prettify(666666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/MKqt6OB.png"
    },
    notDestroyingTheWorldTax: {
        isVisible: () => store.getState().buildings.demon >= 300,
        isBuyable: () => store.getState().game.bricks >= 1.3333333333333332e+16,
        buy: (dispatch) => dispatch(decreaseBricks(1.3333333333333332e+16)),
        effect: {demon: 5},
        text: <>
            <Typography color="inherit">Not-Destroying-The-World Tax</Typography>
            Demons do <b>five times</b> as much damage.
            <br/><i>"Okay, maybe giving them all of those things was not a good idea." ~CEO, RUC</i>
            <br/>Costs <b>{prettify(13333333333333332)}</b> Bricks
        </>,
        img: "http://i.imgur.com/92rYyAC.png"
    },
    LordReaefseksJournal: {
        isVisible: () => store.getState().buildings.demon >= 400,
        isBuyable: () => store.getState().game.bricks >= 6.666666666666666e+19,
        buy: (dispatch) => dispatch(decreaseBricks(6.666666666666666e+19)),
        effect: {demon: 5},
        text: <>
            <Typography color="inherit">Lord Reaefsek's Journal</Typography>
            Demons do <b>five times</b> as much damage.
            <br/><i>Titled "Lord Reaefsek: God of The Unfinished", this journal is full of evil doings and tips &
            tricks. And, of course, it suddenly cuts off a few dozen pages from the end.</i>
            <br/>Costs <b>{prettify(66666666666666660000)}</b> Bricks
        </>,
        img: "http://i.imgur.com/FmFQPoJ.png"
    },
    hyzemsArtifactVault: {
        isVisible: () => store.getState().buildings.demon >= 500,
        isBuyable: () => store.getState().game.bricks >= 3.3333333333333333e+24,
        buy: (dispatch) => dispatch(decreaseBricks(3.3333333333333333e+24)),
        effect: {demon: 7},
        text: <>
            <Typography color="inherit">Hyzem's Artifact Vault</Typography>
            Demons do <b>seven times</b> as much damage.
            <br/><i>"Oh please tell me you removed The Amsora first." ~Agent Taylor
            <br/>"Yes... So we can give it to them as a seperate upgrade." ~Agent Connor
            <br/>"NOOOOOOOO." ~Head of Demon Relations</i>
            <br/>Costs <b>{prettify(3.3333333333333333e+24)}</b> Bricks
        </>,
        img: "http://i.imgur.com/msrmpyh.png"
    },
    illusionSpells: {
        isVisible: () => store.getState().buildings.demon >= 125,
        isBuyable: () => store.getState().game.bricks >= 6.66666666e+8,
        buy: (dispatch) => dispatch(decreaseBricks(6.66666666e+8)),
        effect: {demon: 3},
        text: <>
            <Typography color="inherit">Illusion Spells</Typography>
            Demons do <b>three times</b> as much damage.
            <br/><i>They told us they'd use these strictly for trolling.
            <br/>EDIT: WHY THE HELL DID WE GIVE THEM THESE</i>
            <br/>Costs <b>{prettify(666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/SyYTebW.png"
    },
    realityBendingMagic: {
        isVisible: () => store.getState().buildings.demon >= 250,
        isBuyable: () => store.getState().game.bricks >= 6.6666666666666e+13,
        buy: (dispatch) => dispatch(decreaseBricks(6.6666666666666e+13)),
        effect: {demon: 4},
        text: <>
            <Typography color="inherit">Reality-Bending Magic</Typography>
            Demons do <b>four times</b> as much damage.
            <br/><i>"Whatever you do, NEVER give them the ability to actually bend reality instead of just look like
            they can." ~Demon Relations Department Chief, RUC</i>
            <br/>Costs <b>{prettify(66666666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/wkLzlig.png"
    },
    allTheMostPowerfulSpellScrolls: {
        isVisible: () => store.getState().buildings.demon >= 350,
        isBuyable: () => store.getState().game.bricks >= 6.666666666666666e+17,
        buy: (dispatch) => dispatch(decreaseBricks(6.666666666666666e+17)),
        effect: {demon: 5},
        text: <>
            <Typography color="inherit">All The Most Powerful Spell Scrolls</Typography>
            Demons do <b>five times</b> as much damage.
            <br/><i>You have to be joking." ~All the wizards (paraphrased)</i>
            <br/>Costs <b>{prettify(666666666666666600)}</b> Bricks
        </>,
        img: "http://i.imgur.com/nIT1FkW.png"
    },
}

export const {
    leatherJackets,
    motorcycles,
    ritualSacrifices,
    tortureReels,
    loadsOfWeapons,
    worshippers,
    universalPasses,
    nuclearLaunchCodes,
    notDestroyingTheWorldTax,
    LordReaefseksJournal,
    hyzemsArtifactVault,
    illusionSpells,
    realityBendingMagic,
    allTheMostPowerfulSpellScrolls,
} = upgrades;