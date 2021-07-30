import React, {FC} from "react";
import {createStyles, Divider, makeStyles, Paper} from "@material-ui/core";

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
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            Achievements
            <Divider/>
        </Paper>
    )
}