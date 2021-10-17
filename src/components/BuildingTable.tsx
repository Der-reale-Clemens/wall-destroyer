import React, {FC} from "react";
import {createStyles, Divider, List, makeStyles} from "@material-ui/core";
import {BuildingButton} from "./BuildingButton";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {buildings} from "../constants/buildings";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360
        },
    }),
);



export const BuildingTable: FC = () => {
    // Update when new buildings get unlocked
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = useSelector((state: AppState) => state.upgrades.boughtUpgrades);
    const classes = useStyles();


    return (
        <div className={classes.root}>
        <List component="nav">
            <Divider/>
            <BuildingButton name="puncher"/>
            <BuildingButton name="clubber"/>
            <BuildingButton name="swordsman"/>
            <BuildingButton name="gunshooter"/>
            <BuildingButton name="grenademan"/>
            <BuildingButton name="wreckingBall"/>
            <BuildingButton name="bulldozer"/>
            <BuildingButton name="airstrikeCaller"/>
            {buildings.necromancer.isUnlocked() && <BuildingButton name="necromancer"/>}
            {buildings.titan.isUnlocked() && <BuildingButton name="titan"/>}
            {buildings.demon.isUnlocked() && <BuildingButton name="demon"/>}
            {buildings.realityCompromiser.isUnlocked() && <BuildingButton name="realityCompromiser"/>}
            {buildings.blackObliterator.isUnlocked() && <BuildingButton name="blackObliterator"/>}
            {buildings.brickFactory.isUnlocked() && <BuildingButton name="brickFactory"/>}
        </List>
        </div>
    )
};