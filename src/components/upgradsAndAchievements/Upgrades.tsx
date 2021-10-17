import React, {FC} from "react";
import {Divider, Grid} from "@mui/material";
import {Upgrade} from "./Upgrade";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";

export const Upgrades: FC = () => {
    const boughtUpgrades = useSelector((state: AppState) => state.upgrades.boughtUpgrades);
    const unlockedUpgrades = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);

    return (<>
            <Grid container>
                {unlockedUpgrades.map(u => (
                    <Grid key={u} item xs={2}>
                        <Upgrade name={u}/>
                    </Grid>
                ))}
            </Grid>

            <Divider style={{marginBottom: "5px"}}/>
            <Grid container>
                {boughtUpgrades.map(u => (
                    <Grid key={u} item xs={2}>
                        <Upgrade name={u} disabled={true}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}