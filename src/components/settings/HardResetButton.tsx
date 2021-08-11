import React, {FC, useState} from "react";
import {
    Button, createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {hardReset} from "../../functions/hardReset";

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

export const HardResetButton: FC = () => {
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