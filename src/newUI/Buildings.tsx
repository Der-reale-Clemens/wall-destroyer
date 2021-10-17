import {FC} from "react";
import {Grid, Paper} from "@mui/material";
import {buildings} from "../constants/buildings";

export const Buildings: FC = () => {

    return <><Building/></>
}

const Building: FC = () => {
//sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}
    return <Paper >
        <Grid container>
            <Grid item>
                <img src={buildings.puncher.img}/>
            </Grid>
        </Grid>
    </Paper>
}