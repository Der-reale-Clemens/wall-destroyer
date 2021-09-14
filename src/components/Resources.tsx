import {FC} from "react";
import {createStyles, Grid, LinearProgress, makeStyles, Paper} from "@material-ui/core";
import moneyImg from "../images/dollar.png";
import brickImg from "../images/brick.png";
import fourthWallBrickImg from "../images/fourthWallBrick.png";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {prettify} from "../constants";
import {walls} from "../constants/walls";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(0.5),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Resources: FC = () => {
    const classes = useStyles();
    const {money, bricks, fourthWallBricks, wall} = useSelector((state: AppState) => state.game);
    const alignStyle = {display: "flex", alignItems: "center"}

    return (<>
        <Paper className={classes.paper} variant="outlined">
            <Grid container>
                <Grid item xs={4} style={alignStyle}>
                    <img src={moneyImg}/>
                    {prettify(money)}
                </Grid>
                <Grid item xs={4} style={alignStyle}>
                    {wall >= 1 &&
                    <><img src={brickImg}/>
                    {prettify(bricks)}</>}
                </Grid>
                <Grid item xs={4} style={alignStyle}>
                    {wall >= 4 &&
                    <><img src={fourthWallBrickImg}/>
                        {prettify(fourthWallBricks)}</>}
                </Grid>
            </Grid>
            <ProgressBar/>
        </Paper>
    </>)
}

const ProgressBar: FC = () => {
    const wall = useSelector((state: AppState) => state.game.wall);
    const damage = useSelector((state: AppState) => state.game.damage);
    const cost = walls[wall].cost;
    const progress = Math.min(damage / cost * 100, 100);

    return <LinearProgress variant="determinate" value={progress}/>
}