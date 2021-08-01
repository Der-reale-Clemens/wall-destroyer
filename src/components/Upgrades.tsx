import React, {FC} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";
import {Upgrade} from "./Upgrade";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Upgrades: FC = () => {
    //const update = useSelector((state:AppState)=> state.system.lastUpdate);
    const boughtUpgrades = useSelector((state: AppState) => state.upgrades.boughtUpgrades);
    const unlockedUpgrades = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            Upgrades:
            <Divider style={{marginBottom: "5px"}}/>
            {unlockedUpgrades.map(u => <Upgrade name={u}/>)}

            <Divider style={{marginBottom: "5px"}}/>
            {boughtUpgrades.map(u => <Upgrade name={u} disabled={true}/>)}
        </Paper>
    )
}