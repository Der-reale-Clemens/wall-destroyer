import React, {FC, useEffect} from 'react';
import { Grid, Paper } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {useDispatch} from "react-redux";
import {increaseMoney} from "./redux/GameSlice";
import {BuildingTable} from "./components/BuildingTable";
import {update} from "./functions/update";
import {addNotification, setLastUpdate} from "./redux/SystemSlice";
import {SettingsButton} from "./components/settings/SettingsButton";
import {save} from "./functions/save";
import {DestroyWall} from "./components/DestroyWall";
import {UpgradeAndAchievementTable} from "./components/upgradsAndAchievements/UpgradeAndAchievementTable";
import {PunchWallButton} from "./components/PunchWallButton";
import {StoryDisplay} from "./components/StoryDisplay";
import {Resources} from "./components/Resources";
import {Stats} from "./components/Stats";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Window: FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        const interval = setInterval(() => {
            const damage = update(dispatch);
            dispatch(increaseMoney(damage));
        }, 100);

        //set time for first load
        dispatch(setLastUpdate(new Date().getTime()));

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addNotification({message:"Game Saved", options: {variant: "info"}}))
            save();
        }, 60000);

        return () => clearInterval(interval);
    })

    return (
        <div className={classes.root}>
            <StoryDisplay/>
            <SettingsButton/>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}  style={{maxHeight: '99vh', minHeight: "99vh", overflow: 'auto'}} variant="outlined">
                        <BuildingTable/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={8}>
                            <Resources/>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} variant="outlined">
                                <DestroyWall/>
                                <PunchWallButton/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Stats/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{maxHeight: '99vh', minHeight: "99vh", overflow: 'auto'}} variant="outlined">
                        <UpgradeAndAchievementTable/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}