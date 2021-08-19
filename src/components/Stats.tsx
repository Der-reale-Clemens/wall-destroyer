import {FC} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {prettify} from "../constants";
import {buildings} from "../constants/buildings";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Stats: FC = () => {
    const classes = useStyles();
    const {handDamage, damage, dps} = useSelector((state: AppState) => state.game);
    const {
        puncher,
        clubber,
        swordsman,
        gunshooter,
        grenademan,
        wreckingBall,
        bulldozer,
        airstrikeCaller,
        necromancer,
        titan,
        demon
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
        necromancerDps,
        titanDps,
        demonDps
    } = useSelector((state: AppState) => state.stats.dps);

    return (<Paper className={classes.paper} variant="outlined">
        Stats
        <Divider/>
        <div style={{textAlign: "center"}}>
            <b>Overall damage: {prettify(damage)}(+{prettify(dps)}/s)</b><br/>
            Hand damage: {prettify(handDamage)}<br/>
            Puncher damage: {prettify(puncher)}(+{prettify(puncherDps)}/s)<br/>
            Clubber damage: {prettify(clubber)}(+{prettify(clubberDps)}/s)<br/>
            Swordsman damage: {prettify(swordsman)}(+{prettify(swordsmanDps)}/s)<br/>
            Gunshooter damage: {prettify(gunshooter)}(+{prettify(gunshooterDps)}/s)<br/>
            Grenademan damage: {prettify(grenademan)}(+{prettify(grenademanDps)}/s)<br/>
            Wrecking Ball damage: {prettify(wreckingBall)}(+{prettify(wreckingBallDps)}/s)<br/>
            Bulldozer damage: {prettify(bulldozer)}(+{prettify(bulldozerDps)}/s)<br/>
            Airstrike Caller damage: {prettify(airstrikeCaller)}(+{prettify(airstrikeCallerDps)}/s)<br/>
            {buildings.necromancer.isUnlocked() && <>Necromancer damage: {prettify(necromancer)}(+{prettify(necromancerDps)}/s)<br/></>}
            {buildings.titan.isUnlocked() && <>Titan damage: {prettify(titan)}(+{prettify(titanDps)}/s)<br/></>}
            {buildings.demon.isUnlocked() && <>Demon damage: {prettify(demon)}(+{prettify(demonDps)}/s)<br/></>}
        </div>
    </Paper>)
}