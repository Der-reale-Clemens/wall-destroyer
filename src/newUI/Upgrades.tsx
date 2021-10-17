import {FC} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import * as handUpgrades from "../constants/upgrades/hand"
import * as puncherUpgrades from "../constants/upgrades/puncher"
import * as clubberUpgrades from "../constants/upgrades/club"
import * as swordsmanUpgrades from "../constants/upgrades/swordsman"
import * as gunshooterUpgrades from "../constants/upgrades/gunshooter"
import * as grenademanUpgrades from "../constants/upgrades/grenademan"
import * as wreckingBallUpgrades from "../constants/upgrades/wreckingBall"
import * as bulldozerUpgrades from "../constants/upgrades/bulldozer"
import * as airstrikeCallerUpgrades from "../constants/upgrades/airstrikeCaller"
import * as necromancerUpgrades from "../constants/upgrades/necromancer"
import * as titanUpgrades from "../constants/upgrades/titan"
import * as demonUpgrades from "../constants/upgrades/demon"
import * as brickFactoryUpgrades from "../constants/upgrades/brickFactory"


import {Upgrade} from "./Upgrade";
import {orderArray} from "../constants";

export const NewUpgrades: FC = () => {
    return <table>
        <UpgradeRow name="Hand" upgradeOrder={handUpgrades}/>
        <UpgradeRow name="Puncher" upgradeOrder={puncherUpgrades}/>
        <UpgradeRow name="Clubber" upgradeOrder={clubberUpgrades}/>
        <UpgradeRow name="Swordsman" upgradeOrder={swordsmanUpgrades}/>
        <UpgradeRow name="Gunshooter" upgradeOrder={gunshooterUpgrades}/>
        <UpgradeRow name="Grenademan" upgradeOrder={grenademanUpgrades}/>
        <UpgradeRow name="Wrecking Ball" upgradeOrder={wreckingBallUpgrades}/>
        <UpgradeRow name="Bulldozer" upgradeOrder={bulldozerUpgrades}/>
        <UpgradeRow name="Airstrike Caller" upgradeOrder={airstrikeCallerUpgrades}/>
        <UpgradeRow name="Necromancer" upgradeOrder={necromancerUpgrades}/>
        <UpgradeRow name="Titan" upgradeOrder={titanUpgrades}/>
        <UpgradeRow name="Demon" upgradeOrder={demonUpgrades}/>
        <UpgradeRow name="Brick Factory" upgradeOrder={brickFactoryUpgrades}/>
    </table>
}

interface Props {
    name: string;
    upgradeOrder: any;
}

const UpgradeRow: FC<Props> = ({name, upgradeOrder}) => {
    const boughtUpgrades = useSelector((state: AppState) => state.upgrades.boughtUpgrades);
    const unlockedUpgrades = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);

    // @ts-ignore
    const upgrades = boughtUpgrades.filter(u => Object.keys(upgradeOrder).includes(u))
        // @ts-ignore
        .concat(unlockedUpgrades.filter(u => Object.keys(upgradeOrder).includes(u)));

    return <tr>
        <th>{name}</th>
        {orderArray(upgrades, Object.keys(upgradeOrder))
            .map((u: any) => <th>
                <Upgrade name={u}/>
            </th>)}
    </tr>
}