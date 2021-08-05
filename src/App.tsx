import React, {useEffect} from 'react';
import {Button, createStyles, Grid, makeStyles, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {increaseMoney} from "./redux/GameSlice";
import {BuildingTable} from "./components/BuildingTable";
import {Resources} from "./components/Resources";
import {Achievements} from "./components/Achievements";
import {Upgrades} from "./components/Upgrades";
import {update} from "./functions/update";
import {setLastUpdate} from "./redux/SystemSlice";
import destroyWall from './images/walls/destroyWall.png'
import {SettingsButton} from "./components/SettingsButton";
import {save} from "./functions/save";
import {AppState} from "./redux/store";
import {walls} from "./constants/walls";
import {DestroyWall} from "./components/DestroyWall";
import {DestroyWallProgress} from "./components/DestroyWallProgress";
import {UpgradeAndAchievementTable} from "./components/UpgradeAndAchievementTable";
import {PunchWallButton} from "./components/PunchWallButton";

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

function App() {
    const wall = useSelector((state: AppState) => state.game.wall);
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
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            save();
        }, 5000);

        return () => clearInterval(interval);
    })

    return (
        <div className={classes.root}>
            <SettingsButton/>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}  style={{maxHeight: '93vh', minHeight: "93vh", overflow: 'auto'}} variant="outlined">
                        <BuildingTable/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} variant="outlined">
                                <DestroyWall/>
                                <PunchWallButton/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Resources/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{maxHeight: '93vh', minHeight: "93vh", overflow: 'auto'}} variant="outlined">
                        <UpgradeAndAchievementTable/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
