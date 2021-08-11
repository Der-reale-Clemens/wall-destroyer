import React, {FC, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

export const Info: FC = () => {
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