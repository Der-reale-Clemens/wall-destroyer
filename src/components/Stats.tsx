import {FC} from "react";
import { Divider, Paper } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {prettify} from "../constants";
import {buildings} from "../constants/buildings";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Stats: FC = () => {
    const classes = useStyles();
    const {damage, dps} = useSelector((state: AppState) => state.game);
    const {
        hand,
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
        demon,
        realityCompromiser,
        blackObliterator
    } = useSelector((state: AppState) => state.stats);
    const {
        handDps,
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
        demonDps,
        realityCompromiserDps,
        blackObliteratorDps,
    } = useSelector((state: AppState) => state.stats.dps);

    return (<Paper className={classes.paper} style={{maxHeight: '49vh', minHeight: "49vh", overflow: 'auto'}} variant="outlined">
        Stats
        <Divider/>
        <div style={{textAlign: "center"}}>
            <b>Overall damage: {prettify(damage)}(+{prettify(dps)}/s)</b><br/>
            Hand damage: {prettify(hand)}(+{prettify(handDps)}/p)<br/>
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
            {buildings.realityCompromiser.isUnlocked() && <>Reality Compromiser damage: {prettify(realityCompromiser)}(+{prettify(realityCompromiserDps)}/s)<br/></>}
            {buildings.blackObliterator.isUnlocked() && <>Black Obliterator damage: {prettify(blackObliterator)}(+{prettify(blackObliteratorDps)}/s)<br/></>}
        </div>
    </Paper>)
}