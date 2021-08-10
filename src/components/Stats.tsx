import {FC} from "react";
import {Divider} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {prettify} from "../constants";

export const Stats: FC = () => {
    const hand = useSelector((state: AppState) => state.game.handDamage);
    const {
        puncher,
        clubber,
        swordsman,
        gunshooter,
        grenademan,
        wreckingBall,
        bulldozer,
        airstrikeCaller,
    } = useSelector((state: AppState) => state.stats);
    const {
        puncherDps,
        clubberDps,
        swordsmanDps,
        gunshooterDps,
        grenademanDps,
        wreckingBallDps,
        bulldozerDps,
        airstrikeCallerDps,
    } = useSelector((state: AppState) => state.stats.dps);

    return (<>
        <Divider/>
        Stats
        <Divider/>
        <div style={{textAlign: "center"}}>
            Hand damage: {prettify(hand)}<br/>
            Puncher damage: {prettify(puncher)}(+{prettify(puncherDps)}/s)<br/>
            Clubber damage: {prettify(clubber)}(+{prettify(clubberDps)}/s)<br/>
            Swordsman damage: {prettify(swordsman)}(+{prettify(swordsmanDps)}/s)<br/>
            Gunshooter damage: {prettify(gunshooter)}(+{prettify(gunshooterDps)}/s)<br/>
            Grenademan damage: {prettify(grenademan)}(+{prettify(grenademanDps)}/s)<br/>
            Wrecking Ball damage: {prettify(wreckingBall)}(+{prettify(wreckingBallDps)}/s)<br/>
            Bulldozer damage: {prettify(bulldozer)}(+{prettify(bulldozerDps)}/s)<br/>
            Airstrike Caller damage{prettify(airstrikeCaller)}(+{prettify(airstrikeCallerDps)}/s)<br/>
        </div>
    </>)
}