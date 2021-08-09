import React, {FC, useState} from "react";
import {
    Button,
    createStyles,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    makeStyles,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {setFormat, setTheme} from "../redux/SystemSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import {hardReset} from "../functions/hardReset";
import {Changelog} from "./Changelog";
import {version} from "../environment";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            padding: theme.spacing(1),
            paddingLeft: "10px",
        },
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

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
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
        <Select style={style} value={format} onChange={handleChange}>
            <MenuItem value="standard">Standard</MenuItem>
            <MenuItem value="scientific">Scientific</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
        </Select>
        <br/>
        <HardResetButton/>
        <br/>v.{version} -<Changelog/> - <Info/>
    </>)
}

const Info: FC = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <Button size="small"
                color="primary"
                onClick={handleClickOpen}
                style={{paddingLeft: "-10px", marginLeft: "-10px"}}>
            Info
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">About this game</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This is a complete rewrite of the original Wall Destroyer made by Tellurium, which was created using
                    IGM. This rewrite is build using typescript, react, redux toolkit, notistack and swarm-numberformat.
                    <br/>
                    This projects packed source can be found on <a href="https://github.com/Der-reale-Clemens/wall-destroyer-prod">
                    https://github.com/Der-reale-Clemens/wall-destroyer-prod</a>, the unpacked source might be released
                    at a latter date.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}

const HardResetButton: FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
                onClick={handleClickOpen}
                style={{marginTop: "10px"}}
            >
                HARD RESET
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Save?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to completely delete all your save data? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        hardReset();
                        handleClose()
                    }} color="secondary">
                        Reset
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
