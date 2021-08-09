import {
    armadaOfPunches, aSockInThePark,
    getTheFistOfIt,
    hiredHelp,
    legionOfFists,
    punchCity, punchNation, thanksAPunch, theWorldPunchedToPieces,
    unarmedArmy
} from "./achievements/puncher";
import {
    beelzeclub, club,
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
    bladeRunner,
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
    shooterOfGuns,
    theMilitary,
    theOldWest, whenAllIsSaidAndGun
} from "./achievements/gunshooter";
import {
    bombTheWorld, divineBombedy, grenadeAchievement,
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
    deconstructionTeam,
    ImGonnaWreckIt, realityWreck, roundThisWreck, theWreckoning, wreckIsLove,
    wreckRepublic, wrecktacular
} from "./achievements/wreckingBall";
import {
    bullshit,
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
    crushTheWorld, godsOnTheOtherLine, itsCallOverNow, takeAStrike,
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