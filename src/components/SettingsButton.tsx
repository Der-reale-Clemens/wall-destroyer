import React, {FC} from "react";
import {IconButton, Popover} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import {Settings} from "./Settings";



export const SettingsButton: FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return  (<>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)} style={{position: "fixed", bottom: 0, right: 0}}>
            <SettingsIcon/>
        </IconButton>
        <Popover
            style={{marginLeft: "10px"}}
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
            <Settings/>
        </Popover>
        </>)
}