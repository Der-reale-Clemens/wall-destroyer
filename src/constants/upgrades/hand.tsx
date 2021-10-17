import {Upgrade} from "../upgrades";
import {store} from "../../redux/store";
import {decreaseMoney} from "../../redux/GameSlice";
import {Typography} from "@mui/material";
import {prettify} from "../../constants";
import React from "react";

const upgrades: { [key: string]: Upgrade } = {
    coffee: {
        isVisible: () => store.getState().stats.hand >= 1000,
        isBuyable: () => store.getState().game.money >= 1.1111e+4,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111e+4)),
        effect: {hand: 3},
        text: <>
            <Typography color="inherit">Coffee</Typography>
            Hand punches do <b>3 times</b> as much damage.
            <br/><i>Caffeine obviously gives you the ability to punch faster.</i>
            <br/>Costs <b>{prettify(11111)}</b> Cash
        </>,
        img: "http://i.imgur.com/c3mfsZ7.png"
    },
    energyDrinks: {
        isVisible: () => store.getState().stats.hand >= 100000,
        isBuyable: () => store.getState().game.money >= 1.111111e+6,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111e+6)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Energy Drinks</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>POWERTHIIIRRRST</i>
            <br/>Costs <b>{prettify(1111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/1VAyqoa.png"
    },
    experimentalDrugs: {
        isVisible: () => store.getState().stats.hand >= 10000000,
        isBuyable: () => store.getState().game.money >= 1.11111111e+8,
        buy: (dispatch) => dispatch(decreaseMoney(1.11111111e+8)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Experimental Drugs</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>Probably completely safe.</i>
            <br/>Costs <b>{prettify(111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/3pMJrsL.png"
    },
    personalTrainer: {
        isVisible: () => store.getState().stats.hand >= 1000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111e+10,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111e+10)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Personal Trainer</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>This guy is like the grandmaster of punching walls.</i>
            <br/>Costs <b>{prettify(11111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/bOLxNz7.png"
    },
    elephantiasis: {
        isVisible: () => store.getState().stats.hand >= 100000000000,
        isBuyable: () => store.getState().game.money >= 1.111111111111e+12,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111111111e+12)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Elephantiasis</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>With this horribly crippling disease your fists will be like hardass wrecking balls!</i>
            <br/>Costs <b>{prettify(1111111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/PtmkAH3.png"
    },
    trainingMontage: {
        isVisible: () => store.getState().stats.hand >= 10000000000000,
        isBuyable: () => store.getState().game.money >= 1.11111111111111e+14,
        buy: (dispatch) => dispatch(decreaseMoney(1.11111111111111e+14)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Training Montage</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>Set to '80s music, of course.</i>
            <br/>Costs <b>{prettify(111111111111111)}</b> Cash
        </>,
        img: "http://i.imgur.com/ouFA8Lg.png"
    },
    laserBrainSurgery: {
        isVisible: () => store.getState().stats.hand >= 1000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111112e+16,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111112e+16)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Laser Brain Surgery
            </Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>For enhanced speed!</i>
            <br/>Costs <b>{prettify(11111111111111112)}</b> Cash
        </>,
        img: "http://i.imgur.com/ee3LJxJ.png"
    },
    mechanicalLimbs: {
        isVisible: () => store.getState().stats.hand >= 100000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111112e+18,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111112e+18)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Mechanical Limbs</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>One step closer to being a Terminator.</i>
            <br/>Costs <b>{prettify(1111111111111111200)}</b> Cash
        </>,
        img: "http://i.imgur.com/YZfg6Vg.png"
    },
    cloning: {
        isVisible: () => store.getState().stats.hand >= 10000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111111e+20,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111111e+20)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Cloning</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>Now there are two of you. This is a good idea.</i>
            <br/>Costs <b>{prettify(111111111111111110000)}</b> Cash
        </>,
        img: "http://i.imgur.com/0fHTOjH.png"
    },
    theFinalFist: {
        isVisible: () => store.getState().stats.hand >= 1000000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111111e+22,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111111e+22)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">The Final Fist</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>As spoken of by the prophets, it has finally arrived.</i>
            <br/>Costs <b>{prettify(1.1111111111111111e+22)}</b> Cash
        </>,
        img: "http://i.imgur.com/uKozUUJ.png"
    },
    breakingPoint: {
        isVisible: () => store.getState().stats.hand >= 100000000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111111e+24,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111111e+24)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">Breaking Point</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>The most legendary hand combat technique of all time. Invented by Grandmaster Vwynido, the most
            skilled hand combatant in recorded history. And yes, it totally works on a brick wall.</i>
            <br/>Costs <b>{prettify(1.1111111111111111e+24)}</b> Cash
        </>,
        img: "http://i.imgur.com/VywN1Do.png"
    },
    theMightyFistOfReaefsek: {
        isVisible: () => store.getState().stats.hand >= 10000000000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.111111111111111e+26,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111111111111e+26)),
        effect: {hand: 2},
        text: <>
            <Typography color="inherit">The Mighty Fist of Reaefsek</Typography>
            Hand punches do <b>twice</b> as much damage.
            <br/><i>The fate of Lord Reaefsek is unknown; he simply vanished one day after saying he was "going to
            contact the king". Hyzem was the king at the time, and he reported never having seen Reaefsek. The only
            evidence of the journey is his severed hand, found lying in a barren field holding the Nightmare Blade.</i>
            <br/>Costs <b>{prettify(1.111111111111111e+26)}</b> Cash
        </>,
        img: "http://i.imgur.com/XSPPdpX.png"
    },
    propasal731: {
        isVisible: () => store.getState().stats.hand >= 1000000000000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.1111111111111112e+28,
        buy: (dispatch) => dispatch(decreaseMoney(1.1111111111111112e+28)),
        effect: {hand: 3},
        text: <>
            <Typography color="inherit">Proposal #731</Typography>
            Hand punches do <b>three times</b> as much damage.
            <br/><i>"Reaefsek's wrist had traces of something on the cut. It's hard to describe exactly what it is...
            it's like magic that has been perfectly optimised. There's so little of it that we could only use it to
            improve one object." ~Head of R&D<br/>"We tried to examine it in reality code to see if we could replicate
            it, but its code is even more incomprehensible than other magic code. It almost seems like its creator made
            it confusing on purpose." ~RC Project Leader</i>
            <br/>Costs <b>{prettify(1.1111111111111112e+28)}</b> Cash
        </>,
        img: "http://i.imgur.com/QJ6t0uF.png"
    },
    theFinalityTrees: {
        isVisible: () => store.getState().stats.hand >= 100000000000000000000000000000,
        isBuyable: () => store.getState().game.money >= 1.111111111111111e+30,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111111111111e+30)),
        effect: {hand: 3},
        text: <>
            <Typography color="inherit">The Finality Trees</Typography>
            Hand punches do <b>three times</b> as much damage.
            <br/><i>"Upon the mountainous plateaus of a land afar lies a grove of silver leafless trees. Their power is
            equal to their mystery, and they symbolize The Finality." ~A wall dating back to the time of the first titan
            king
            <br/>
            <br/>We found them. The power surrounding their presence is so ridiculous that just by chilling next
            to them for a while you will be thrice as strong. But we could only take you, because getting there is
            just horrible.</i>
            <br/>Costs <b>{prettify(1.111111111111111e+30)}</b> Cash
        </>
        ,
        img: "http://i.imgur.com/uCnJqSI.png"
    },
    theHandOfGod: {
        isVisible: () => store.getState().stats.hand >= 1e33,
        isBuyable: () => store.getState().game.money >= 1.111111111111111e+34,
        buy: (dispatch) => dispatch(decreaseMoney(1.111111111111111e+34)),
        effect: {hand: 4},
        text: <>
            <Typography color="inherit">The Hand of God</Typography>
            Hand punches do <b>four times</b> as much damage.
            <br/><i>"Did he seriously put himself in as the last tier? Oh my god. Oh my fucking god. </i>Disgusting.<i>"
            ~Agent Johnson</i>
            <br/>Costs <b>{prettify(1.111111111111111e+34)}</b> Cash
        </>,
        img: "http://i.imgur.com/0WGwFSJ.png"
    },

}

export const {
    coffee,
    energyDrinks,
    experimentalDrugs,
    personalTrainer,
    elephantiasis,
    trainingMontage,
    laserBrainSurgery,
    mechanicalLimbs,
    cloning,
    theFinalFist,
    breakingPoint,
    theMightyFistOfReaefsek,
    propasal731,
    theFinalityTrees,
    theHandOfGod,
} = upgrades;