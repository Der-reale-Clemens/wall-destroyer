import React, {FC} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {prettify} from "../constants";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Resources: FC = () => {
    const {money, bricks, dps} = useSelector((state: AppState) => state.game);
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <label>Resources</label>
            <Divider/>
            <label>Money: {prettify(money)}
                (+{prettify(dps)}/s)</label>
            <br/>
            <label>Bricks: {bricks}</label>
        </Paper>);
}