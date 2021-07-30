import React, {FC} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";
import {Upgrade, Upgrade2} from "./Upgrade";

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
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            Upgrades:
            <Divider style={{marginBottom: "5px"}}/>
            <Upgrade name="paddedGloves"/>

            <Divider style={{marginBottom: "5px"}}/>
            <Upgrade name="magicMining"/>
            <Upgrade2/>
        </Paper>
    )
}