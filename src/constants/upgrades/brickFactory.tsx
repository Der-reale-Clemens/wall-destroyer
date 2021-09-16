import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseBricks, decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@material-ui/core";
import {prettify} from "../../constants";

const upgrades: { [key: string]: Upgrade } = {
    interviewers: {
        isVisible: () => store.getState().buildings.brickFactory >= 1,
        isBuyable: () => store.getState().game.money >= 6.6666666666666e+13,
        buy: (dispatch) => dispatch(decreaseMoney(6.6666666666666e+13)),
        effect: {brickFactory: 1.5},
        text: <>
            <Typography color="inherit">Interviewers</Typography>
            Brick factories produce <b>50%</b> more bricks.
            <br/><i>The dark magic tablets we're using can talk, so we need to learn more about them to use them better.
            They sound really creepy, and talk about really disturbing stuff.</i>
            <br/>Costs <b>{prettify(66666666666666)}</b> Cash
        </>,
        img: "http://i.imgur.com/aCU88Ro.png"
    },
    assholes: {
        isVisible: () => store.getState().buildings.brickFactory >= 5,
        isBuyable: () => store.getState().game.money >= 2.66666666666666e+14,
        buy: (dispatch) => dispatch(decreaseMoney(2.66666666666666e+14)),
        effect: {brickFactory: 1.5},
        text: <>
            <Typography color="inherit">Assholes</Typography>
            Brick factories produce <b>50%</b> more bricks.
            <br/><i>The tablets like evil, so this is the first step. You can imagine the recruitment process for
            this.</i>
            <br/>Costs <b>{prettify(266666666666666)}</b> Cash
        </>,
        img: "http://i.imgur.com/tpCfx3P.png"
    },
    convicts: {
        isVisible: () => store.getState().buildings.brickFactory >= 25,
        isBuyable: () => store.getState().game.money >= 2.666666666666666e+15,
        buy: (dispatch) => dispatch(decreaseMoney(2.666666666666666e+15)),
        effect: {brickFactory: 2},
        text: <>
            <Typography color="inherit">Convicts</Typography>
            Brick factories produce <b>twice</b> as many bricks.
            <br/><i>The next step.</i>
            <br/>Costs <b>{prettify(2666666666666666)}</b> Cash
        </>,
        img: "http://i.imgur.com/DzNqcUh.png"
    },
    convictFiltering: {
        isVisible: () => store.getState().buildings.brickFactory >= 50,
        isBuyable: () => store.getState().game.money >= 4.6666666666666664e+16,
        buy: (dispatch) => dispatch(decreaseMoney(4.6666666666666664e+16)),
        effect: {brickFactory: 2},
        text: <>
            <Typography color="inherit">Convict Filtering</Typography>
            Brick factories and manual brick creation produce <b>twice</b> as many bricks.
            <br/><i>We need the real cream of the crop here, not those guys in for possessing drugs.</i>
            <br/>Costs <b>{prettify(46666666666666664)}</b> Cash
        </>,
        img: "http://i.imgur.com/e6dtWjK.png"
    },
    evilRobots: {
        isVisible: () => store.getState().buildings.brickFactory >= 75,
        isBuyable: () => store.getState().game.money >= 4.666666666666667e+17,
        buy: (dispatch) => dispatch(decreaseMoney(4.666666666666667e+17)),
        effect: {brickFactory: 2},
        text: <>
            <Typography color="inherit">Evil Robots</Typography>
            Brick factories produce <b>twice</b> as many bricks.
            <br/>Manual brick creation produces <b>three times</b> as many bricks.
            <br/><i>Let's make our own evil! Nothing could go wrong with this.</i>
            <br/>Costs <b>{prettify(466666666666666700)}</b> Cash
        </>,
        img: "http://i.imgur.com/eTfuby4.png"
    },
    evilAlchemist: {
        isVisible: () => store.getState().buildings.brickFactory >= 100,
        isBuyable: () => store.getState().game.money >= 8.666666666666667e+18,
        buy: (dispatch) => dispatch(decreaseMoney(8.666666666666667e+18)),
        effect: {brickFactory: 3},
        text: <>
            <Typography color="inherit">Evil Alchemists</Typography>
            Brick factories produce <b>three times</b> as many bricks.
            <br/>Manual brick creation produces <b>four times</b> as many bricks.
            <br/><i>They're evil, and they know stuff about illegal brick production! It's perfect!</i>
            <br/>Costs <b>{prettify(8666666666666667000)}</b> Cash
        </>,
        img: "http://i.imgur.com/AuwAJ6i.png"
    },
    evilium: {
        isVisible: () => store.getState().buildings.brickFactory >= 150,
        isBuyable: () => store.getState().game.money >= 4.333333333333333e+20,
        buy: (dispatch) => dispatch(decreaseMoney(4.333333333333333e+20)),
        effect: {brickFactory: 3},
        text: <>
            <Typography color="inherit">Evilium</Typography>
            Brick factories produce <b>three times</b> as many bricks.
            <br/>Manual brick creation produces <b>four times</b> as many bricks.
            <br/><i>The prime export of hell, bought it off some demons. Now all we're missing for the ingredients is
            child blood.</i>
            <br/>Costs <b>{prettify(433333333333333300000)}</b> Cash
        </>,
        img: "http://i.imgur.com/WAMfl5a.png"
    },
    childBlood: {
        isVisible: () => store.getState().buildings.brickFactory >= 200,
        isBuyable: () => store.getState().game.money >= 4.666666666666666e+22,
        buy: (dispatch) => dispatch(decreaseMoney(4.666666666666666e+22)),
        effect: {brickFactory: 4},
        text: <>
            <Typography color="inherit">Child Blood</Typography>
            Brick factories produce <b>four times</b> as many bricks.
            <br/>Manual brick creation produces <b>five times</b> as many bricks.
            <br/><i>The demons always come through. For a price, of course.</i>
            <br/>Costs <b>{prettify(4.666666666666666e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/aJfezqc.png"
    },
    alignmentSliders: {
        isVisible: () => store.getState().buildings.brickFactory >= 300,
        isBuyable: () => store.getState().game.money >= 2.6666666666666668e+26,
        buy: (dispatch) => dispatch(decreaseMoney(2.6666666666666668e+26)),
        effect: {brickFactory: 5},
        text: <>
            <Typography color="inherit">Alignment Sliders</Typography>
            Brick factories produce <b>five times</b> as many bricks.
            <br/>Manual brick creation produces <b>six times</b> as many bricks.
            <br/><i>Brought in the reality compromisers for this one. We found the reality code for good & evil. I'm
            sure you can guess what we did with that.</i>
            <br/>Costs <b>{prettify(2.6666666666666668e+26)}</b> Cash
        </>,
        img: "http://i.imgur.com/kEcAqB6.png"
    },
    evilProofSuits: {
        isVisible: () => store.getState().buildings.brickFactory >= 400,
        isBuyable: () => store.getState().game.money >= 2.6666666666666665e+30,
        buy: (dispatch) => dispatch(decreaseMoney(2.6666666666666665e+30)),
        effect: {brickFactory: 5},
        text: <>
            <Typography color="inherit">Evil-Proof Suits</Typography>
            Brick factories produce <b>five times</b> as many bricks.
            <br/>Manual brick creation produces <b>six times</b> as many bricks.
            <br/><i>The factories have reached the point where normal people can't really go in anymore, at the risk of
            being corrupted. We can make suits with the alignment slid all the way over to 'good' to be able to collect
            the bricks, instead of actually having to do something about it.</i>
            <br/>Costs <b>{prettify(2.6666666666666665e+30)}</b> Cash
        </>,
        img: "http://i.imgur.com/v1FFhA9.png"
    },
    theHolyBrickOfVywheir: {
        isVisible: () => store.getState().buildings.brickFactory >= 500,
        isBuyable: () => store.getState().game.money >= 8.666666666666668e+34,
        buy: (dispatch) => dispatch(decreaseMoney(8.666666666666668e+34)),
        effect: {brickFactory: 7},
        text: <>
            <Typography color="inherit">The Holy Brick of Vywheir</Typography>
            Brick factories and manual brick creation produce <b>seven times</b> as many bricks.
            <br/><i>Said to be blessed by the gods, the Holy Brick was first found 37,000 years ago on Vywheir, an
            uninhabited island.
            <br/>
            <br/>"It doesn't look anything like a brick." ~BF Project Leader
            <br/>"Would you want a magical artifact called 'The Big White Cube' or 'The Holy Brick of Vywheir'?" ~Agent
            Connor</i>
            <br/>Costs <b>{prettify(8.666666666666668e+34)}</b> Cash
        </>,
        img: "http://i.imgur.com/CVVcmHj.png"
    },
    evilMagic: {
        isVisible: () => store.getState().buildings.brickFactory >= 125,
        isBuyable: () => store.getState().game.money >= 8.666666666666667e+19 && store.getState().game.bricks >= 466666666,
        buy: (dispatch) => {
            dispatch(decreaseMoney(8.666666666666667e+19));
            dispatch(decreaseBricks(466666666));
        },
        effect: {brickFactory: 3},
        text: <>
            <Typography color="inherit">Evil Magic</Typography>
            Brick factories and manual brick creation produce <b>three times</b> as many bricks.
            <br/><i>We've asked the wizards what exactly makes some magic "evil", and they said that the First Wizards
            who invented all the spells just kinda decided that certain spells were "evil". The First Wizards are pretty
            widely hated among magic users.</i>
            <br/>Costs <b>{prettify(86666666666666670000)}</b> Cash & <b>{prettify(466666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/eN3zjjZ.png"
    },
    blackMagic: {
        isVisible: () => store.getState().buildings.brickFactory >= 250,
        isBuyable: () => store.getState().game.money >= 1.6666666666666666e+24 && store.getState().game.bricks >= 46666666666666,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.6666666666666666e+24));
            dispatch(decreaseBricks(46666666666666));
        },
        effect: {brickFactory: 4},
        text: <>
            <Typography color="inherit">Black Magic</Typography>
            Brick factories and manual brick creation produce <b>four times</b> as many bricks.
            <br/><i>As similar as they sound, Black magic is actually unrelated to dark magic. Dark magic is magic that
            is frowned upon for general use, whereas Black magic comes from The Black, which is absolute pure evil.</i>
            <br/>Costs <b>{prettify(1.6666666666666666e+24)}</b> Cash & <b>{prettify(46666666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/XqIMXQp.png"
    },
    pureEvilMagic: {
        isVisible: () => store.getState().buildings.brickFactory >= 350,
        isBuyable: () => store.getState().game.money >= 4.666666666666666e+28 && store.getState().game.bricks >= 46666666666666666,
        buy: (dispatch) => {
            dispatch(decreaseMoney(4.666666666666666e+28));
            dispatch(decreaseBricks(46666666666666666));
        },
        effect: {brickFactory: 5},
        text: <>
            <Typography color="inherit">Pure Evil Magic</Typography>
            Brick factories and manual brick creation produce <b>five times</b> as many bricks.
            <br/><i>Might as well just make the entire factories out of it, for maximal usage.</i>
            <br/>Costs <b>{prettify(4.666666666666666e+28)}</b> Cash & <b>{prettify(46666666666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/jEDWowF.png"
    },
    blackImbuedFactoryWalls: {
        isVisible: () => store.getState().buildings.brickFactory >= 600,
        isBuyable: () => store.getState().game.money >= 1.66666e+36 && store.getState().game.bricks >= 366666666666666666666666666,
        buy: (dispatch) => {
            dispatch(decreaseMoney(1.66666e+36));
            dispatch(decreaseBricks(366666666666666666666666666));
        },
        effect: {brickFactory: 6},
        text: <>
            <Typography color="inherit">Black-Imbued Factory Walls</Typography>
            Brick factories and manual brick creation produce <b>six times</b> as many bricks.
            <br/><i>We really should've done this sooner, seeing as the tablets love evil and that The Black is 100%
            evil.
            <br/>And that since the demons are in charge, we don't have to be the ones to handle that shit.</i>
            <br/>Costs <b>{prettify(1.66666e36)}</b> Cash & <b>{prettify(366666666666666666666666666)}</b> Bricks
        </>,
        img: "http://i.imgur.com/ufqnZaV.png"
    },

}

export const {
    interviewers,
    assholes,
    convicts,
    convictFiltering,
    evilRobots,
    evilAlchemist,
    evilium,
    childBlood,
    alignmentSliders,
    evilProofSuits,
    theHolyBrickOfVywheir,

    evilMagic,
    blackMagic,
    pureEvilMagic,
    blackImbuedFactoryWalls,
} = upgrades;