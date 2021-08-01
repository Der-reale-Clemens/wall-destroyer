import React, {FC, useEffect, useState} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";
import {Upgrade} from "./Upgrade";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {UpgradeKeys, upgrades} from "../constants/upgrades";
import {update} from "../functions/update";
import {increaseMoney} from "../redux/GameSlice";
import {setLastUpdate} from "../redux/SystemSlice";

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
    const unboughtUpgrades = Object.keys(upgrades).filter(k => !boughtUpgrades.includes(k))
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