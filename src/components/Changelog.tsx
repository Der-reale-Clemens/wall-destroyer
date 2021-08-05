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

export const Changelog: FC = () => {
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
            size="small"
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
        >
            Changelog
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Changelog</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    v.0.5 - New UI
                    <hr/>
                    Overhauled the UI pretty significantly, to put the wall more into the focus and make the app feel
                    a bit more modern, the overall damage is also being displayed now. Also made upgrades effect hand
                    punches now and fixed a crash when you defeat all walls.
                    <hr/>
                    v.0.4.1 - Prices are back
                    <hr/>
                    Forgot to add a price display to upgrades, now you can see again how much an upgrade costs and also
                    added this to the converter script. Also changed number of significant figures from 5 to 4, might
                    change back though.
                    <hr/>
                    v.0.4 - Club Upgrades
                    <hr/>
                    Thanks to some cool converter script I wrote upgrades can be created a lot faster now. Therefore
                    we now have 8 new club upgrades and an increase in development speed.
                    <hr/>
                    v.0.3 - The first content
                    <hr/>
                    Added the rest of the original walls and achievements for them. Also added added puncher upgrades
                    till 200, yay. Oh yeah also added different wall images for the higher walls.
                    <hr/>
                    v.0.2.1 - Bug Fixes
                    <hr/>
                    Fixed critical production bug that prevented page from loading at all. Cause was the number formatting
                    library. The bug disappeared after changing some code and then changing it back, programming is
                    black magic sometimes.
                    <hr/>
                    v.0.2 - Upgrades
                    <hr/>
                    Made upgrades actually do something, should be a solid system to add a lot more upgrades in the future.
                    Also added money/s display.
                    <hr/>
                    v.0.1 - Initial prototype
                    <hr/>
                    The first release of the game. Contains the 8 original buildings, a destroyable first wall, a punch wall
                    button and the resources money, damage and bricks.
                    Also includes a prototype upgrade system with 3(4) test upgrades that do not function yet as well
                    as a prototype achievement system with 3 achievements.
                    There also is a simple settings menu with a notation change option, a hard reset button and this
                    changelog.
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