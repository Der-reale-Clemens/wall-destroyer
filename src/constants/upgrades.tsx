import {Dispatch} from "@reduxjs/toolkit";
import {addUpgrade} from "../redux/UpgradeSlice";
import {BuildingKeys} from "./buildings";
import {
    adamantiumKnuckles,
    antimatterGauntlets,
    diamondKnuckles,
    brassKnuckles,
    gloves,
    paddedGloves,
    redactedGloves,
    steelPlatedGloves,
    titaniumKnuckles,
    magicallyEnhancedFists,
    theFistsOfDestiny,
    eternityGloves,
    theMillion,
    finalityRockKnuckles,
    maganiumGauntlets, blackHoleGloves, blackDippedGloves, chessKnuckles, maximumSuperStrength
} from "./upgrades/puncher";
import {
    biggerCrates,
    bigGrenades, blackInfusedGrenades, bucketsOfGrenades, enlargedExplosions,
    extraShrapnel,
    flameGrenades,
    greasedPins, grenades, hellfireBombs, holyHandGrenades, magicalLightningGrenades,
    nuclearGrenades, oblivionGrenades, plasmaGrenades, portalGrenades, timeSplittingGrenades, unobtaniumShrapnel
} from "./upgrades/grenademan";
import {
    blackBullets,
    consciosnessSegmentation, crossoverGuns,
    doubleMagazines, everyGunCombinedIntoOne, hyzemsGoldenRifle,
    infiniteMagazines, laserChainsawGatlingGuns,
    laserSights,
    machineGuns, magicBullets, plasmaRifles, pureMagicBullets,
    quadrupleMagazines, reaefseksCrimsonRifle,
    snipers, theBestGun, unstoppableBullets
} from "./upgrades/gunshooter";
import {
    breakingPoint,
    cloning,
    coffee,
    elephantiasis,
    energyDrinks,
    experimentalDrugs, laserBrainSurgery,
    mechanicalLimbs,
    personalTrainer, propasal731, theFinalFist, theFinalityTrees, theHandOfGod, theMightyFistOfReaefsek, trainingMontage
} from "./upgrades/hand";
import {
    betterClubs,
    biggerClubs, blackInfestedClubs,
    bombClubs, cartoonPhysics, clubsOfHappiness,
    ironClubs, magicLavaClub,
    nukeClubs, perfectClubs,
    plasmaClubs, protectionAgainstTheClubs, quantumClubs,
    spikedClubs, sunClubs, supernovaClubs, theDevilsClub,
    titaniumClubs
} from "./upgrades/club";
import {
    animeSizedSwords,
    biggerSwords, blackCoatedSwords, buildingSizedSwords,
    dualKatanas, dualWielding,
    fancyHilts,
    flamingKatanas,
    katanas, lightsabers, maganiumSwords, oblivionBlades, realityBlades, sevensSword,
    sharpening, swordThatCutsThroughEverything, theFinalitySwords, theNightmareBlade
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
    ancientTechniques, brickKnuckles,
    bulldozerStrike,
    bulletPunch,
    clubKnuckles,
    comeTogether, energyDraining,
    finalTeamUp, fistGrenades, fistOfEvil, fistOfTheBlack, invulnerability, skydiving,
    standingOvation, swordKnuckles,
    teamUp,
    theChallenge,
    ultraTeamUp, wreckingBallPunch, zombification
} from "./upgrades/synergy/synergyHandPuncher";
import {
    bayonets,
    clubsCoveredInSwords, kingHyzemBlades,
    rotatingChainsawSwordClubs,
    swordClubs, theArenaOfSgapang,
    thePerfectCombination
} from "./upgrades/synergy/synergyClubberPuncher";
import {
    giantGunGrenades,
    grenadeGuns,
    grenadeThatShoots,
    gunnades,
    gunThatShootsGrenades, inspirationalWarFilms, theTurretsOfBextic
} from "./upgrades/synergy/synergyGunGrenade";
import {
    coordinatedWrecking, literalWreckingBallFists, thePuekingFill,
    ultimateFistBalls,
    wreckingBallFists,
    wreckingBallRiders, wreckingFists
} from "./upgrades/synergy/synergyPuncherWreckingball";
import {
    bulldozerDrop, bulldozerPlanes,
    enhancedBulldozerDrop, epicBulldozerDrop,
    precisionStrikes, theDarkBindings,
    ultimateBulldozerDrop
} from "./upgrades/synergy/synergyBulldozerAirstrike";
import {
    ancientScrolls, ancientTombs,
    betterGraveyards, duplicationSpells, firstWizardScrolls,
    giantHats, higherClassedNecromancers,
    polishedBricks, teleportationSpells,
    thrones,
    zombiePreservatives
} from "./upgrades/necromancer";
import {
    blackResearch,
    darkMagicMining,
    deepMagicMining,
    magicMining,
    realityResearch,
    unlockTitan
} from "./upgrades/research";
import {
    accessToTheLibraryOfHell, bathsInThePitsOfAhnsquall, enlargedCataract,
    giantBrassKnuckles,
    giantLightsabers, giantSwords, hellfireWeapons, scrollsOfWisdom, strengthRestorationSpells,
    theLexiconOfKnowledge,
    theStrongestTitans, theTitanKing, vwynido,
    wizardTranslators
} from "./upgrades/titan";
import {
    incidentX,
    kingHyzem,
    kingOptuqui,
    magicSwap,
    mergeForm,
    titanThrones
} from "./upgrades/synergy/synergyNecromancerTitan";
import {
    allTheMostPowerfulSpellScrolls,
    hyzemsArtifactVault, illusionSpells,
    leatherJackets,
    loadsOfWeapons, LordReaefseksJournal,
    motorcycles, notDestroyingTheWorldTax, nuclearLaunchCodes, realityBendingMagic,
    ritualSacrifices,
    tortureReels, universalPasses,
    worshippers
} from "./upgrades/demon";
import {
    alignmentSliders, assholes, blackImbuedFactoryWalls, blackMagic, childBlood, convictFiltering,
    convicts,
    evilAlchemist, evilium, evilMagic,
    evilProofSuits,
    evilRobots,
    interviewers, pureEvilMagic, theHolyBrickOfVywheir
} from "./upgrades/brickFactory";

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
    //Research Upgrades
    //--------------
    magicMining,
    deepMagicMining,
    darkMagicMining,
    realityResearch,
    blackResearch,
    unlockTitan,

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
    zombification,
    ancientTechniques,
    fistOfEvil,
    invulnerability,
    fistOfTheBlack,
    brickKnuckles,

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
    cloning,
    theFinalFist,
    breakingPoint,
    theMightyFistOfReaefsek,
    propasal731,
    theFinalityTrees,
    theHandOfGod,

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
    theFistsOfDestiny,
    eternityGloves,
    theMillion,
    finalityRockKnuckles,

    magicallyEnhancedFists,
    maganiumGauntlets,
    blackHoleGloves,
    blackDippedGloves,
    chessKnuckles,
    maximumSuperStrength,

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
    quantumClubs,
    clubsOfHappiness,
    protectionAgainstTheClubs,
    theDevilsClub,

    magicLavaClub,
    sunClubs,
    supernovaClubs,
    blackInfestedClubs,
    perfectClubs,
    cartoonPhysics,

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
    realityBlades,
    dualWielding,
    theFinalitySwords,
    theNightmareBlade,

    maganiumSwords,
    swordThatCutsThroughEverything,
    oblivionBlades,
    blackCoatedSwords,
    sevensSword,
    buildingSizedSwords,

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
    unstoppableBullets,
    everyGunCombinedIntoOne,
    hyzemsGoldenRifle,
    reaefseksCrimsonRifle,

    magicBullets,
    pureMagicBullets,
    theBestGun,
    blackBullets,
    consciosnessSegmentation,
    crossoverGuns,

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
    timeSplittingGrenades,
    bucketsOfGrenades,
    holyHandGrenades,
    hellfireBombs,

    magicalLightningGrenades,
    portalGrenades,
    oblivionGrenades,
    blackInfusedGrenades,
    grenades,
    enlargedExplosions,

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

    //--------------
    //Necromancer Upgrades
    //--------------
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

    //--------------
    //Titan Upgrades
    //--------------
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

    //--------------
    //Necromancer and Titan Synergy Upgrades
    //--------------
    titanThrones,
    magicSwap,
    mergeForm,
    incidentX,
    kingHyzem,
    kingOptuqui,

    //--------------
    //Demon Upgrades
    //--------------
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

    //--------------
    //Brick Factory Upgrades
    //--------------
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


}

const effectsAllBuildings = (power: number) => {

}

