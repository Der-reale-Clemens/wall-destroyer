import React, {FC} from "react";
import {FormControl, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {setFormat, setTheme} from "../../redux/SystemSlice";
import {Changelog} from "./Changelog";
import {version} from "../../environment";
import {ImportButton} from "./ImportButton";
import {HardResetButton} from "./HardResetButton";
import {Info} from "./Info";
import {ExportButton} from "./ExportButton";

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
    const theme = useSelector((state: AppState) => state.system.theme);
    const dispatch = useDispatch();

    const style = {paddingLeft: "10px"}

    const handleFormatChange = (e: SelectChangeEvent) => {
        dispatch(setFormat(e.target.value));
    };

    const handleThemeChange = (e: SelectChangeEvent) => {
        dispatch(setTheme(e.target.value));
    };

    return (<>
        <Typography className={classes.typography}>Settings</Typography>
        Theme:
        <FormControl variant="standard">
            <Select style={style} value={theme} onChange={handleThemeChange}>
                <MenuItem value="original">Original</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
                <MenuItem value="light">Light</MenuItem>
            </Select>
        </FormControl>

        <br/>
        Notation:
        <FormControl variant="standard">
        <Select style={style} value={format} onChange={handleFormatChange}>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="scientific">Scientific</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
        </Select>
        </FormControl>
        <br/>
        <ImportButton/>
        <ExportButton/>
        <br/><HardResetButton/>
        <br/>v.{version} -<Changelog/> - <Info/>
    </>)
}