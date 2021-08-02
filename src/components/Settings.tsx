import React, {FC} from "react";
import {createStyles, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {setFormat} from "../redux/SystemSlice";

const useStyles = makeStyles((theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
    }),
);

export const Settings: FC = () => {
    const classes = useStyles();
    const format = useSelector((state: AppState) => state.system.format);
    const dispatch = useDispatch();

    const style = {padding: "10px"}

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setFormat(e.target.value as string));
    };

    return (<>
        <Typography className={classes.typography}>Settings</Typography>
        Notation:
        <Select style={style} value={format} onChange={handleChange}>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="scientific">Scientific</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
        </Select>
        <br/>v.0.1
        </>)
}
