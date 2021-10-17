import React, {FC} from "react";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {Achievement} from "./Achievement";

export const Achievements: FC = () => {
    const achievements = useSelector((state: AppState) => state.achievements.achievements);

    return (
            <Grid container>
                {achievements.map(a => (
                    <Grid key={a} item xs={2}>
                        <Achievement name={a}/>
                    </Grid>
                ))}
            </Grid>
    )
}