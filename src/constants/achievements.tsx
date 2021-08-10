import {
    armadaOfPunches, aSockInThePark,
    getTheFistOfIt,
    hiredHelp,
    legionOfFists, noSuchThingAsAFreePunch,
    punchCity, punchNation, thanksAPunch, theWorldPunchedToPieces,
    unarmedArmy
} from "./achievements/puncher";
import {
    beelzeclub, club, clubbedToDeath,
    clubParty,
    clubReality,
    clubstep,
    clubTheNation,
    clubTheUniverse,
    clubTheWorld, clubToInfinity,
    theClubhouse
} from "./achievements/clubber";
import {
    allTheKing,
    bladeBattalion,
    bladeRunner, castleCrashers,
    hackNSlash,
    smorgasword,
    theCavalry, theConquerorsOfTheWorld,
    theCrusaders, tyrannoswordusRex,
    wallslicer
} from "./achievements/swordsman";
import {
    allAreGun,
    armamentArmada,
    blastBattalion,
    firingSquad, goodGun, gunWithTheWind,
    shooterOfGuns, swissCheese,
    theMilitary,
    theOldWest, whenAllIsSaidAndGun
} from "./achievements/gunshooter";
import {
    bombTheWorld, divineBombedy, endlessWar, grenadeAchievement,
    grenadeGale,
    manWithGrenades,
    nadeBarricade, NadeItThrough,
    oceanOfGrenades,
    rainOfGrenades,
    theBarrage
} from "./achievements/grenademan";
import {
    ballBusters,
    deconstructionArmy,
    deconstructionTeam, getWrecked,
    ImGonnaWreckIt, realityWreck, roundThisWreck, theWreckoning, wreckIsLove,
    wreckRepublic, wrecktacular
} from "./achievements/wreckingBall";
import {
    bullshit, crackNSmash,
    dozesAreRed,
    levelTheCity, levelTheCountry, overdoze,
    stopAndSmellTheDozes,
    theDozeDivision,
    theDozeKnows, theSuperbull,
    thoseWhoAreToDoze
} from "./achievements/bulldozer";
import {
    calamityCalling,
    callingTheShots,
    callOfNature,
    crushTheWorld, deathCalled, godsOnTheOtherLine, itsCallOverNow, takeAStrike,
    theStrikedown,
    theStrikes
} from "./achievements/airstrikeCaller";
import {
    lessScrub,
    overnab,
    scrub, suddenAwareness,
    wallBreaker, wallConquerer,
    wallCrusher, wallDestroyer,
    wallPuncher, wallSlayer,
    wallSmasher,
    wallTapper, youreAWinner
} from "./achievements/wall";
import {
    god,
    kingOfTheCosmos,
    masterOfReality,
    rulerOfTheWorld,
    theAggregation,
    theArmada, theKing,
    theMenagerie
} from "./achievements/buildings";
import {
    agentOfTheDevil, beyondReality,
    blood,
    boxer,
    brawler,
    doingGodsWork,
    karateMaster, missionaryOfTheDivine,
    puncher, theChampionOfTheWorld, theChosenOne,
    theGrandmaster, theHarbinger,
    theHeroGothamDeserves, theWinner
} from "./achievements/hand";

export interface Achievement {
    isUnlocked: () => boolean;
    text: JSX.Element;
    img: string;
}

export type AchievementKeys = keyof typeof achievements;

export const achievements: {[key: string]: Achievement} = {
    //--------------
    //Wall Achievements
    //--------------
    overnab,
    scrub,
    lessScrub,
    wallTapper,
    wallPuncher,
    wallBreaker,
    wallSmasher,
    wallCrusher,
    wallDestroyer,
    wallSlayer,
    wallConquerer,
    suddenAwareness,
    youreAWinner,

    //--------------
    //Hand Achievements
    //--------------
    puncher,
    boxer,
    brawler,
    blood,
    karateMaster,
    doingGodsWork,
    theHeroGothamDeserves,
    theGrandmaster,
    theChampionOfTheWorld,
    theChosenOne,
    theWinner,
    agentOfTheDevil,
    beyondReality,
    theHarbinger,
    missionaryOfTheDivine,

    //--------------
    //Puncher Achievements
    //--------------
    hiredHelp,
    getTheFistOfIt,
    unarmedArmy,
    armadaOfPunches,
    legionOfFists,
    punchCity,
    punchNation,
    theWorldPunchedToPieces,
    thanksAPunch,
    aSockInThePark,
    noSuchThingAsAFreePunch,

    //--------------
    //Clubber Achievements
    //--------------
    clubstep,
    clubParty,
    theClubhouse,
    clubTheNation,
    clubTheWorld,
    clubTheUniverse,
    clubReality,
    clubToInfinity,
    beelzeclub,
    club,
    clubbedToDeath,

    //--------------
    //Swordsman Achievements
    //--------------
    wallslicer,
    hackNSlash,
    smorgasword,
    bladeBattalion,
    theCavalry,
    theCrusaders,
    bladeRunner,
    allTheKing,
    theConquerorsOfTheWorld,
    tyrannoswordusRex,
    castleCrashers,

    //--------------
    //Gunshooter Achievements
    //--------------
    shooterOfGuns,
    firingSquad,
    blastBattalion,
    theOldWest,
    theMilitary,
    armamentArmada,
    gunWithTheWind,
    goodGun,
    whenAllIsSaidAndGun,
    allAreGun,
    swissCheese,

    //--------------
    //Grenademan Achievements
    //--------------
    manWithGrenades,
    theBarrage,
    nadeBarricade,
    rainOfGrenades,
    grenadeGale,
    oceanOfGrenades,
    bombTheWorld,
    NadeItThrough,
    divineBombedy,
    grenadeAchievement,
    endlessWar,

    //--------------
    //Wrecking Ball Achievements
    //--------------
    ImGonnaWreckIt,
    ballBusters,
    deconstructionTeam,
    deconstructionArmy,
    wreckRepublic,
    wrecktacular,
    theWreckoning,
    wreckIsLove,
    realityWreck,
    roundThisWreck,
    getWrecked,

    //--------------
    //Bulldozer Achievements
    //--------------
    theDozeKnows,
    thoseWhoAreToDoze,
    theDozeDivision,
    stopAndSmellTheDozes,
    levelTheCity,
    levelTheCountry,
    theSuperbull,
    dozesAreRed,
    overdoze,
    bullshit,
    crackNSmash,

    //--------------
    //Airstrike Caller Achievements
    //--------------
    callingTheShots,
    theStrikes,
    callOfNature,
    theStrikedown,
    crushTheWorld,
    calamityCalling,
    takeAStrike,
    itsCallOverNow,
    godsOnTheOtherLine,
    deathCalled,

    //--------------
    //All Buildings Achievements
    //--------------
    theMenagerie,
    theAggregation,
    theArmada,
    rulerOfTheWorld,
    kingOfTheCosmos,
    masterOfReality,
    god,
    theKing,
}