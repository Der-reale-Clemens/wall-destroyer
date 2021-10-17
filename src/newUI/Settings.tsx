import React, {FC} from "react";
import {MenuItem, Select} from "@material-ui/core";
import {ImportButton} from "../components/settings/ImportButton";
import {ExportButton} from "../components/settings/ExportButton";
import {HardResetButton} from "../components/settings/HardResetButton";
import {version} from "../environment";
import {Changelog} from "../components/settings/Changelog";
import {Info} from "../components/settings/Info";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {setFormat, setTheme} from "../redux/SystemSlice";

export const Settings: FC = () => {
    const format = useSelector((state: AppState) => state.system.format);
    const theme = useSelector((state: AppState) => state.system.theme);
    const dispatch = useDispatch();

    const style = {paddingLeft: "10px"}

    const handleFormatChange = (e: React.ChangeEvent<{value: unknown}>) => {
        dispatch(setFormat(e.target.value as string));
    };

    const handleThemeChange = (e: React.ChangeEvent<{value: unknown}>) => {
        dispatch(setTheme(e.target.value as string));
    };

    return <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "300px", margin: "0 auto", textAlign: "center"}}>
            <div style={{display: "inline"}}>
                <br/>v.{version} -<Changelog/> - <Info/><br/>
            </div>
            <div style={{display: "inline"}}>
                Theme:
                <Select style={style} value={theme} onChange={handleThemeChange}>
                    <MenuItem value="original">Original</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="light">Light</MenuItem>
                </Select></div>
            <br/>
            <div style={{display: "inline"}}>
                Notation:
                <Select style={style} value={format} onChange={handleFormatChange}>
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="scientific">Scientific</MenuItem>
                    <MenuItem value="engineering">Engineering</MenuItem>
                </Select>
            </div>
            <br/>
            <ImportButton/>
            <ExportButton/>
            <br/><HardResetButton/>
        </div>
    </div>
}