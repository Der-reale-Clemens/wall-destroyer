import React, {FC} from "react";
import {createStyles, Divider, Grid, makeStyles, Paper} from "@material-ui/core";
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
    const boughtUpgrades = useSelector((state: AppState) => state.upgrades.boughtUpgrades);
    const unlockedUpgrades = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);
    const classes = useStyles();

    return (<>
            <Grid container>
                {unlockedUpgrades.map(u => (
                    <Grid item xs={2}>
                        <Upgrade name={u}/>
                    </Grid>
                ))}
            </Grid>

            <Divider style={{marginBottom: "5px"}}/>
            <Grid container>
                {boughtUpgrades.map(u => (
                    <Grid item xs={2}>
                        <Upgrade name={u} disabled={true}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}