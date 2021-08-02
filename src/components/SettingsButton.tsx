import React, {FC} from "react";
import {createStyles, IconButton, makeStyles, Popover, Typography} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
    }),
);

export const SettingsButton: FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return  (<>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)} style={{position: "fixed", bottom: 0, right: 0}}>
            <SettingsIcon/>
        </IconButton>
        <Popover
            id={open ? 'simple-popover' : undefined}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Typography className={classes.typography}>Settings</Typography>
            v.0.1
        </Popover>
        </>)
}