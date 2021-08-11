import {Typography} from "@material-ui/core";
import React from "react";
import {store} from "../redux/store";
import {decreaseBricks} from "../redux/GameSlice";
import magicMiningImg from "../images/upgrades/magicMining.png";
import {Dispatch} from "@reduxjs/toolkit";
import {addUpgrade} from "../redux/UpgradeSlice";
import {BuildingKeys} from "./buildings";
import {
    adamantiumKnuckles, antimatterGauntlets,
    diamondKnuckles, brassKnuckles,
    gloves,
    paddedGloves, redactedGloves,
    steelPlatedGloves,
    titaniumKnuckles
} from "./upgrades/puncher";
import {
    biggerCrates,
    bigGrenades,
    extraShrapnel,
    flameGrenades,
    greasedPins,
    nuclearGrenades, plasmaGrenades, unobtaniumShrapnel
} from "./upgrades/grenademan";
import {
    doubleMagazines,
    infiniteMagazines, laserChainsawGatlingGuns,
    laserSights,
    machineGuns, plasmaRifles,
    quadrupleMagazines,
    snipers
} from "./upgrades/gunshooter";
import {
    coffee,
    elephantiasis,
    energyDrinks,
    experimentalDrugs, laserBrainSurgery,
    mechanicalLimbs,
    personalTrainer, trainingMontage
} from "./upgrades/hand";
import {
    betterClubs,
    biggerClubs,
    bombClubs,
    ironClubs,
    nukeClubs,
    plasmaClubs,
    spikedClubs,
    titaniumClubs
} from "./upgrades/club";
import {
    animeSizedSwords,
    biggerSwords,
    dualKatanas,
    fancyHilts,
    flamingKatanas,
    katanas, lightsabers,
    sharpening
} from "./upgrades/swordsman";
import {
    ballsOfSteel,
    biggerBalls,
    diamondBalls,
    flamingBalls, neutronBalls,
    reinforcedBalls,
    spikedBalls, triBalls
} from "./upgrades/wreckingBall";
import {
    adamantiumBlades,
    bladesWithBlades,
    diamondBlades,
    doubleBlades,
    powerfulEngines,
    powerTreads,
    strongerBlades, theMegadozer
} from "./upgrades/bulldozer";
import {
    anvils,
    anvilShapedBombs,
    fasterCommunications, missiles, nukes,
    pianos,
    statues,
    supersonicJets
} from "./upgrades/airstrikeCaller";
import {
    bulldozerStrike,
    bulletPunch,
    clubKnuckles,
    comeTogether, energyDraining,
    finalTeamUp, fistGrenades, skydiving,
    standingOvation, swordKnuckles,
    teamUp,
    theChallenge,
    ultraTeamUp, wreckingBallPunch
} from "./upgrades/synergyHandPuncher";
import {
    bayonets,
    clubsCoveredInSwords, kingHyzemBlades,
    rotatingChainsawSwordClubs,
    swordClubs, theArenaOfSgapang,
    thePerfectCombination
} from "./upgrades/synergyClubberPuncher";
import {
    giantGunGrenades,
    grenadeGuns,
    grenadeThatShoots,
    gunnades,
    gunThatShootsGrenades, inspirationalWarFilms, theTurretsOfBextic
} from "./upgrades/synergyGunGrenade";
import {
    coordinatedWrecking, literalWreckingBallFists, thePuekingFill,
    ultimateFistBalls,
    wreckingBallFists,
    wreckingBallRiders, wreckingFists
} from "./upgrades/synergyPuncherWreckingball";
import {
    bulldozerDrop, bulldozerPlanes,
    enhancedBulldozerDrop, epicBulldozerDrop,
    precisionStrikes, theDarkBindings,
    ultimateBulldozerDrop
} from "./upgrades/synergyBulldozerAirstrike";

export interface Upgrade {
    isVisible: () => boolean;
    isBuyable: () => boolean;
    buy: (_: Dispatch<any>) => void;
    text: JSX.Element;
    effect: Effect;
    img: string;
}

export type UpgradeKeys = keyof typeof upgrades;

type Effect = {
    [key in BuildingKeys | "hand"]?: number | (() => number);
};


export const buyUpgrade = (upgrade: UpgradeKeys, dispatch: Dispatch<any>) => {
    if (upgrades[upgrade].isBuyable()) {
        upgrades[upgrade].buy(dispatch);
        dispatch(addUpgrade(upgrade));
    }
}

export const upgrades: { [key: string]: Upgrade } = {
    //--------------
    //Hand Synergy Upgrades
    //--------------
    teamUp,
    comeTogether,
    standingOvation,
    theChallenge,
    finalTeamUp,
    ultraTeamUp,
    energyDraining,

    clubKnuckles,
    swordKnuckles,
    bulletPunch,
    fistGrenades,
    wreckingBallPunch,
    bulldozerStrike,
    skydiving,

    //--------------
    //Hand Upgrades
    //--------------
    coffee,
    energyDrinks,
    experimentalDrugs,
    personalTrainer,
    elephantiasis,
    trainingMontage,
    laserBrainSurgery,
    mechanicalLimbs,

    //--------------
    //Puncher Upgrades
    //--------------
    gloves,
    paddedGloves,
    steelPlatedGloves,
    brassKnuckles,
    titaniumKnuckles,
    diamondKnuckles,
    adamantiumKnuckles,
    redactedGloves,
    antimatterGauntlets,

    //--------------
    //Club Upgrades
    //--------------
    betterClubs,
    ironClubs,
    titaniumClubs,
    spikedClubs,
    biggerClubs,
    bombClubs,
    plasmaClubs,
    nukeClubs,

    //--------------
    //Swordsman Upgrades
    //--------------
    sharpening,
    biggerSwords,
    fancyHilts,
    katanas,
    dualKatanas,
    flamingKatanas,
    animeSizedSwords,
    lightsabers,

    //--------------
    //Clubber & Swordsman Synergy Upgrades
    //--------------
    swordClubs,
    clubsCoveredInSwords,
    rotatingChainsawSwordClubs,
    thePerfectCombination,
    bayonets,
    kingHyzemBlades,
    theArenaOfSgapang,

    //--------------
    //GunshooterUpgrades
    //--------------
    laserSights,
    doubleMagazines,
    quadrupleMagazines,
    infiniteMagazines,
    snipers,
    machineGuns,
    plasmaRifles,
    laserChainsawGatlingGuns,

    //--------------
    //Grenademan Upgrades
    //--------------
    greasedPins,
    biggerCrates,
    bigGrenades,
    flameGrenades,
    extraShrapnel,
    nuclearGrenades,
    plasmaGrenades,
    unobtaniumShrapnel,

    //--------------
    //Gunshooter & Grenademan Synergy Upgrades
    //--------------
    gunThatShootsGrenades,
    grenadeThatShoots,
    giantGunGrenades,
    grenadeGuns,
    gunnades,
    theTurretsOfBextic,
    inspirationalWarFilms,

    //--------------
    //Wrecking Ball Upgrades
    //--------------
    biggerBalls,
    ballsOfSteel,
    reinforcedBalls,
    flamingBalls,
    spikedBalls,
    diamondBalls,
    triBalls,
    neutronBalls,

    //--------------
    //Puncher & Wrecking Ball Synergy Upgrades
    //--------------
    wreckingBallFists,
    coordinatedWrecking,
    wreckingBallRiders,
    ultimateFistBalls,
    literalWreckingBallFists,
    wreckingFists,
    thePuekingFill,

    //--------------
    //Bulldozer Upgrades
    //--------------
    strongerBlades,
    powerTreads,
    doubleBlades,
    powerfulEngines,
    bladesWithBlades,
    diamondBlades,
    adamantiumBlades,
    theMegadozer,

    //--------------
    //Airstrike Caller Upgrades
    //--------------
    fasterCommunications,
    pianos,
    anvils,
    supersonicJets,
    statues,
    anvilShapedBombs,
    missiles,
    nukes,

    //--------------
    //Bulldozer & Airstrike Caller Synergy Upgrades
    //--------------
    precisionStrikes,
    bulldozerDrop,
    enhancedBulldozerDrop,
    ultimateBulldozerDrop,
    epicBulldozerDrop,
    bulldozerPlanes,
    theDarkBindings,


    magicMining: {
        isVisible: () => store.getState().game.wall >= 10,
        isBuyable: () => {
            const state = store.getState();
            const bricks = state.game.bricks;
            return bricks >= 10;
        },
        effect: {},
        buy: (dispatch) => dispatch(decreaseBricks(1)),
        text: <>
            <Typography color="inherit">Magic Mining</Typography>
            We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable
            resource.
            <br/>Costs <b>1</b> Brick
        </>,
        img: magicMiningImg,
    }
}

const effectsAllBuildings = (power: number) => {

}

