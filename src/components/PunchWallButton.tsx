import {FC} from "react";
import {Button} from "@mui/material";
import {punchWall} from "../functions/punchWall";
import {useDispatch} from "react-redux";

export const PunchWallButton: FC = () => {
    const dispatch = useDispatch();

    return (<div style={{paddingTop: "10px"}}>
        <Button variant="contained" onClick={() => punchWall(dispatch)}>
            Punch Wall
        </Button>
        </div>)
}