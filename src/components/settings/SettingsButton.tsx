import React, {FC} from "react";
import {IconButton, Popover} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {Settings} from "./Settings";



export const SettingsButton: FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return <>
        <IconButton
            onClick={e => setAnchorEl(e.currentTarget)}
            style={{position: "fixed", bottom: 0, right: 0}}
            size="large">
            <SettingsIcon/>
        </IconButton>
        <Popover
            style={{marginLeft: "10px", alignItems: "center"}}
            id={open ? 'simple-popover' : undefined}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
        >
            <div style={{textAlign: "center"}}>
                <Settings/>
            </div>
        </Popover>
        </>;
}