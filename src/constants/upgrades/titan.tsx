import {Upgrade} from "../upgrades";
import {prettify} from "../../constants";
import {decreaseMoney} from "../../redux/GameSlice";
import {store} from "../../redux/store";
import {Typography} from "@mui/material";

const upgrades: { [key: string]: Upgrade } = {
    wizardTranslators: {
        isVisible: () => store.getState().buildings.titan >= 1,
        isBuyable: () => store.getState().game.money >= 4.444444444444e+12,
        buy: (dispatch) => dispatch(decreaseMoney(4.444444444444e+12)),
        effect: {titan: 1.5},
        text: <>
            <Typography color="inherit">Wizard Translators</Typography>
            Titans do <b>50%</b> more damage.
            <br/><i>The titans only speak the language of the Old World, so we gotta get the wizards to translate
            that.</i>
            <br/>Costs <b>{prettify(4444444444444)}</b> Cash
        </>,
        img: "http://i.imgur.com/YYCAyYr.png"
    },
    strengthRestorationSpells: {
        isVisible: () => store.getState().buildings.titan >= 5,
        isBuyable: () => store.getState().game.money >= 4.4444444444444e+13,
        buy: (dispatch) => dispatch(decreaseMoney(4.4444444444444e+13)),
        effect: {titan: 2},
        text: <>
            <Typography color="inherit">Strength Restoration Spells</Typography>
            Titans do <b>twice</b> as much damage.
            <br/><i>Turns out being dead for thousands of years can do things to your strength.</i>
            <br/>Costs <b>{prettify(44444444444444)}</b> Cash
        </>,
        img: "http://i.imgur.com/NJiXXeV.png"
    },
    theLexiconOfKnowledge: {
        isVisible: () => store.getState().buildings.titan >= 25,
        isBuyable: () => store.getState().game.money >= 4.44444444444444e+14,
        buy: (dispatch) => dispatch(decreaseMoney(4.44444444444444e+14)),
        effect: {titan: 2},
        text: <>
            <Typography color="inherit">The Lexicon of Knowledge</Typography>
            Titans do <b>twice</b> as much damage.
            <br/><i>It tells us that the actually strong titans were buried over there.</i>
            <br/>Costs <b>{prettify(444444444444444)}</b> Cash
        </>,
        img: "http://i.imgur.com/qRTZ0PT.png"
    },
    giantBrassKnuckles: {
        isVisible: () => store.getState().buildings.titan >= 50,
        isBuyable: () => store.getState().game.money >= 4.444444444444444e+15,
        buy: (dispatch) => dispatch(decreaseMoney(4.444444444444444e+15)),
        effect: {titan: 2},
        text: <>
            <Typography color="inherit">Giant Brass Knuckles</Typography>
            Titans do <b>twice</b> as much damage.
            <br/><i>We finally found a way to improve the titans themselves!</i>
            <br/>Costs <b>{prettify(4444444444444444)}</b> Cash
        </>,
        img: "http://i.imgur.com/C8MyH4G.png"
    },
    giantSwords: {
        isVisible: () => store.getState().buildings.titan >= 75,
        isBuyable: () => store.getState().game.money >= 2.2222222222222224e+16,
        buy: (dispatch) => dispatch(decreaseMoney(2.2222222222222224e+16)),
        effect: {titan: 2},
        text: <>
            <Typography color="inherit">Giant Swords</Typography>
            Titans do <b>twice</b> as much damage.
            <br/><i>Even bigger than the anime swords!</i>
            <br/>Costs <b>{prettify(22222222222222224)}</b> Cash
        </>,
        img: "http://i.imgur.com/fIsmdEs.png"
    },
    giantLightsabers: {
        isVisible: () => store.getState().buildings.titan >= 100,
        isBuyable: () => store.getState().game.money >= 2.222222222222222e+17,
        buy: (dispatch) => dispatch(decreaseMoney(2.222222222222222e+17)),
        effect: {titan: 3},
        text: <>
            <Typography color="inherit">Giant Lightsabers</Typography>
            Titans do <b>three times</b> as much damage.
            <br/><i>These cost a lot to make, but totally worth.</i>
            <br/>Costs <b>{prettify(222222222222222200)}</b> Cash
        </>,
        img: "http://i.imgur.com/syOhDD5.png"
    },
    enlargedCataract: {
        isVisible: () => store.getState().buildings.titan >= 150,
        isBuyable: () => store.getState().game.money >= 8.888888888888889e+18,
        buy: (dispatch) => dispatch(decreaseMoney(8.888888888888889e+18)),
        effect: {titan: 3},
        text: <>
            <Typography color="inherit">Enlarged Cataract</Typography>
            Titans do <b>three times</b> as much damage.
            <br/><i>These guys are really big, so they need a really big crack to get through faster.</i>
            <br/>Costs <b>{prettify(8888888888888889000)}</b> Cash
        </>,
        img: "http://i.imgur.com/nqgG46f.png"
    },
    theStrongestTitans: {
        isVisible: () => store.getState().buildings.titan >= 200,
        isBuyable: () => store.getState().game.money >= 8.888888888888889e+20,
        buy: (dispatch) => dispatch(decreaseMoney(8.888888888888889e+20)),
        effect: {titan: 4},
        text: <>
            <Typography color="inherit">The Strongest Titans</Typography>
            Titans do <b>four times</b> as much damage.
            <br/><i>We found them, finally!</i>
            <br/>Costs <b>{prettify(888888888888888900000)}</b> Cash
        </>,
        img: "http://i.imgur.com/Uozfrtb.png"
    },
    theTitanKing: {
        isVisible: () => store.getState().buildings.titan >= 300,
        isBuyable: () => store.getState().game.money >= 2.222222222222222e+25,
        buy: (dispatch) => dispatch(decreaseMoney(2.222222222222222e+25)),
        effect: {titan: 5},
        text: <>
            <Typography color="inherit">The Titan King</Typography>
            Titans do <b>five times</b> as much damage.
            <br/><i>He lives again, so he can destroy these brick walls for us.</i>
            <br/>Costs <b>{prettify(2.222222222222222e+25)}</b> Cash
        </>,
        img: "http://i.imgur.com/uw0puJR.png"
    },
    vwynido: {
        isVisible: () => store.getState().buildings.titan >= 400,
        isBuyable: () => store.getState().game.money >= 4.444444444444444e+29,
        buy: (dispatch) => dispatch(decreaseMoney(4.444444444444444e+29)),
        effect: {titan: 5},
        text: <>
            <Typography color="inherit">Vwynido's Guide to Hand Combat</Typography>
            Titans do <b>five times</b> as much damage.
            <br/>Punchers do <b>twice</b> as much damage.
            <br/><i>One of the greatest lost books of all time, and we found it! (It was on an online trading site)</i>
            <br/>Costs <b>{prettify(4.444444444444444e+29)}</b> Cash
        </>,
        img: "http://i.imgur.com/1VqgNdS.png"
    },
    scrollsOfWisdom: {
        isVisible: () => store.getState().buildings.titan >= 500,
        isBuyable: () => store.getState().game.money >= 8.888888888888889e+33,
        buy: (dispatch) => dispatch(decreaseMoney(8.888888888888889e+33)),
        effect: {titan: 7},
        text: <>
            <Typography color="inherit">All The Titan King Scrolls of Wisdom</Typography>
            Titans do <b>seven times</b> as much damage.
            <br/><i>"What took so long?" ~Head of Titan Relations
            <br/>"None of us wanted to attempt to get all the ones that the demons had. We temporarily lifted Agent
            Johnson's ban from the demons and he managed to get them to fork 'em over for only a few sacrifices." ~Agent
            Connor
            <br/>"On what grounds?"
            <br/>"He didn't... Oh god damn it."</i>
            <br/>Costs <b>{prettify(8.888888888888889e+33)}</b> Cash
        </>,
        img: "http://i.imgur.com/enLETzJ.png"
    },
    hellfireWeapons: {
        isVisible: () => store.getState().buildings.titan >= 125,
        isBuyable: () => store.getState().game.money >= 2.2222222222222223e+18,
        buy: (dispatch) => dispatch(decreaseMoney(2.2222222222222223e+18)),
        effect: {titan: 3},
        text: <>
            <Typography color="inherit">Hellfire Weapons</Typography>
            Titans do <b>three times</b> as much damage.
            <br/><i>Of course they're not made out of fire, they're just evilium forged in hellfire.</i>
            <br/>Costs <b>{prettify(2222222222222222300)}</b> Cash
        </>,
        img: "http://i.imgur.com/05q6ewZ.png"
    },
    accessToTheLibraryOfHell: {
        isVisible: () => store.getState().buildings.titan >= 250,
        isBuyable: () => store.getState().game.money >= 8.888888888888889e+22,
        buy: (dispatch) => dispatch(decreaseMoney(8.888888888888889e+22)),
        effect: {titan: 4},
        text: <>
            <Typography color="inherit">Access to The Library of Hell</Typography>
            Titans do <b>four times</b> as much damage.
            <br/><i>The library of hell has scrolls from the Old World, knowledge that will allow the titans to regain
            their old strength.</i>
            <br/>Costs <b>{prettify(8.888888888888889e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/KUOtPNQ.png"
    },
    bathsInThePitsOfAhnsquall: {
        isVisible: () => store.getState().buildings.titan >= 350,
        isBuyable: () => store.getState().game.money >= 2.222222222222222e+27,
        buy: (dispatch) => dispatch(decreaseMoney(2.222222222222222e+27)),
        effect: {titan: 5},
        text: <>
            <Typography color="inherit">Baths in The Pits of Ahnsquall</Typography>
            Titans do <b>five times</b> as much damage.
            <br/><i>These pits full of red liquid are legendary, for they are what give demons their superhuman
            strength: they are the demon birthplace. Only beings full of magic can survive being submerged, and the
            results are extreme.</i>
            <br/>Costs <b>{prettify(2.222222222222222e+27)}</b> Cash
        </>,
        img: "http://i.imgur.com/vmq6vME.png"
    },
}

export const {
    wizardTranslators,
    strengthRestorationSpells,
    theLexiconOfKnowledge,
    giantBrassKnuckles,
    giantSwords,
    giantLightsabers,
    enlargedCataract,
    theStrongestTitans,
    theTitanKing,
    vwynido,
    scrollsOfWisdom,
    hellfireWeapons,
    accessToTheLibraryOfHell,
    bathsInThePitsOfAhnsquall,
} = upgrades