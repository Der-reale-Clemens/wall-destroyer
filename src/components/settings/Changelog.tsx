import React, {FC, useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
} from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
                    v.0.16.3 - Bit of QoL
                    <Divider/>
                    Now the buildings show insufficient resources in red and also simplified the code surrounding this.
                    <Divider/>
                    v.0.16.2 - More fixes
                    <Divider/>
                    Fixed a spelling mistake for Melee buildings and a wrong cost for an upgrade
                    <Divider/>
                    v.0.16.1 - First post release fix
                    <Divider/>
                    Hi to everyone who came here after the release and decided to read these notes. Instead of the architectural
                    changes I talked about in the previous notes I just decided to go ahead and release this finally. And
                    with the big increase in player base we already found our first post release bug: Not working hand synergy
                    upgrades for the higher tiers, which is now fixed.
                    <Divider/>
                    v.0.16 - The Reality update
                    <Divider/>
                    After quite some time the reality update is finally here, this update includes the last two buildings,
                    over 50(!) new upgrades (with quite a few still missing but we almost got all). This update is technically
                    still unfinished as some upgrades are missing, but I wanted to release this stuff for testing first, as
                    I am considering rewriting parts of the architecture to future proof it against problems that I started to
                    identify while adding as much content as in this updated. The next update might therefore take a while
                    and might not even contain new content or other directly visible changes.
                    <Divider/>
                    v.0.15 - New UI (again)
                    <Divider/>
                    Yup, I changed the UI again, the resource display should now be more modern and easier on the eyes.
                    And it is ready for incoming new content in the next updates as well.
                    <Divider/>
                    v.0.14 - Magic
                    <Divider/>
                    Finally some proper rewards for destroying the walls.  This was just supposed to be a quick and small
                    addition of a new building and some updates but no I got a bit carried away and its now magic content
                    for the first three walls. Also made some small stylistic changes to the buildings.
                    <Divider/>
                    v.0.13 - Story?
                    <Divider/>
                    There are now a few little story popups in the game triggered at specific points. This is first bit
                    where I'm actually deviating from the original game, therefore I'm sorry if the quality of this is
                    lower compared to the rest. I'm open to all feedback though and would love some suggestions on how
                    to improve this.
                    <Divider/>
                    v.0.12 - Modern save features
                    <Divider/>
                    Added the option to import and export your save in the settings. We now have basic functionality that
                    literally every other game in this genre has as well, quality stuff right here
                    <Divider/>
                    v.0.11.1 - No more infinite upgrades
                    <Divider/>
                    Fix for the infinite upgrades bug. I literally just accidentally commented out the bit to prevent that.
                    Im kinda dumb sometimes.
                    <Divider/>
                    v.0.11 - Synergies
                    <Divider/>
                    All the other games got cool synergy upgrades so we have them too now, gotta go with the trend afterall.
                    Added synergy upgrades for all the buildings, there are so many.
                    <Divider/>
                    v.0.10 - Stats
                    <Divider/>
                    There now exists a stats page where you can see all the damage a building did and it's current dps, so
                    now you can tell what building produces the most. Also some achievements for building damage.
                    <Divider/>
                    v.0.9 - Achievements
                    <Divider/>
                    Added almost all achievements and added a small info text about the game. Plus some other smaller
                    changes that I can't entirely remember, we are getting closer to 1.0 though, very exciting, I'll
                    wonder who will actually read any of these notes after release.
                    <Divider/>
                    v.0.8 - Toast
                    <Divider/>
                    Add toasts for achievements, upgrade unlocks and saving. What is a toast? It's a little notification
                    in the bottom left corner of the screen. Also changed autosaving interval to 60 seconds.
                    <Divider/>
                    v.0.7 - Themes
                    <Divider/>
                    Since everyone hates light mode these days I added a dark mode that is easier on the eyes and since
                    I was already on it there also is an original theme, which is meant to mimic the look of the original
                    Wall Destroyer. Also added tiny borders to upgrades and achievements.
                    <Divider/>
                    v.0.6 - Did someone say upgrades?
                    <Divider/>
                    Added the first 8 upgrades for every building, that should make it fairly feasible to destroy the
                    first wall. Also made a few more changes to the UI, including a background colour, sharper boxes
                    and making the app fixed size.
                    <Divider/>
                    v.0.5 - New UI
                    <Divider/>
                    Overhauled the UI pretty significantly, to put the wall more into the focus and make the app feel
                    a bit more modern, the overall damage is also being displayed now. Also made upgrades effect hand
                    punches now and fixed a crash when you defeat all walls.
                    <Divider/>
                    v.0.4.1 - Prices are back
                    <Divider/>
                    Forgot to add a price display to upgrades, now you can see again how much an upgrade costs and also
                    added this to the converter script. Also changed number of significant figures from 5 to 4, might
                    change back though.
                    <Divider/>
                    v.0.4 - Club Upgrades
                    <Divider/>
                    Thanks to some cool converter script I wrote upgrades can be created a lot faster now. Therefore
                    we now have 8 new club upgrades and an increase in development speed.
                    <Divider/>
                    v.0.3 - The first content
                    <Divider/>
                    Added the rest of the original walls and achievements for them. Also added added puncher upgrades
                    till 200, yay. Oh yeah also added different wall images for the higher walls.
                    <Divider/>
                    v.0.2.1 - Bug Fixes
                    <Divider/>
                    Fixed critical production bug that prevented page from loading at all. Cause was the number formatting
                    library. The bug disappeared after changing some code and then changing it back, programming is
                    black magic sometimes.
                    <Divider/>
                    v.0.2 - Upgrades
                    <Divider/>
                    Made upgrades actually do something, should be a solid system to add a lot more upgrades in the future.
                    Also added money/s display.
                    <Divider/>
                    v.0.1 - Initial prototype
                    <Divider/>
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