import React, {FC} from "react";
import {createStyles, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";
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

    const handleFormatChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setFormat(e.target.value as string));
    };

    const handleThemeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setTheme(e.target.value as string));
    };

    return (<>
        <Typography className={classes.typography}>Settings</Typography>
        Theme:
        <Select style={style} value={theme} onChange={handleThemeChange}>
            <MenuItem value="original">Original</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
        </Select>
        <br/>
        Notation:
        <Select style={style} value={format} onChange={handleFormatChange}>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="scientific">Scientific</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
        </Select>
        <br/>
        <ImportButton/>
        <ExportButton/>
        <br/><HardResetButton/>
        <br/>v.{version} -<Changelog/> - <Info/>
    </>)
}