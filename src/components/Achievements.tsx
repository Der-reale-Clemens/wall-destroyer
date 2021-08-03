import React, {FC} from "react";
import {createStyles, Divider, Grid, makeStyles, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {Achievement} from "./Achievement";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Achievements: FC = () => {
    const achievements = useSelector((state: AppState) => state.achievements.achievements);
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            Achievements
            <Divider style={{marginBottom: "5px"}}/>
            <Grid container>
                {achievements.map(a => (
                    <Grid item xs={2}>
                        <Achievement name={a}/>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}