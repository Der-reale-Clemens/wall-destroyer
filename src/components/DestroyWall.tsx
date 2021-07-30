import {FC} from "react";
import {Button, Divider, LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {HtmlTooltip} from "./HtmlTooltip";
import {walls} from "../constants/walls";
import {prettify} from "../constants";
import {tryDestroyWall} from "../redux/GameSlice";

export const DestroyWall: FC = () => {
    const wall = useSelector((state:AppState)=> state.game.wall);

    const dispatch = useDispatch();


    return (
        <>
            <ProgressBar cost={walls[wall].cost}/>
            <WallText cost={walls[wall].cost}/>
            <br/>
            <HtmlTooltip text={walls[wall].text}>
                <Button style={{marginTop:"10px", marginBottom:"10px"}}
                        variant="contained" onClick={() => dispatch(tryDestroyWall())}
                >
                    Destroy Wall
                </Button>
            </HtmlTooltip>

            <Divider/>
    </>)
}

interface Props {
    cost: number;
}

const WallText: FC<Props> = ({cost}) => {
    const damage = useSelector((state: AppState) => state.game.damage);
    const textColor = damage > cost ? "green" : "red";

    return <label style={{color: textColor}}>Needs: {prettify(cost)} Damage</label>
}

const ProgressBar: FC<Props> = ({cost}) => {
    const {damage} = useSelector((state: AppState) => state.game);
    const progress = Math.min(damage/cost*100, 100);

    return <LinearProgress  variant="determinate" value={progress}/>
}