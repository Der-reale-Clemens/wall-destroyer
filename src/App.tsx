import React, {useEffect} from 'react';
import {Button, createStyles, Grid, makeStyles, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {increaseMoney} from "./redux/GameSlice";
import {BuildingTable} from "./components/BuildingTable";
import {Resources} from "./components/Resources";
import {Achievements} from "./components/Achievements";
import {Upgrades} from "./components/Upgrades";
import {update} from "./functions/update";
import {setLastUpdate} from "./redux/SystemSlice";
import destroyWall from './images/destroyWall.png'

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

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <BuildingTable/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <img alt="Wall" src={destroyWall}/>
                                <Button variant="contained" onClick={() => dispatch(increaseMoney(10))}>Punch Wall</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Resources/>
                        </Grid>
                        <Grid item xs={12}>
                            <Achievements/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Upgrades/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
