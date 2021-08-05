import {FC} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {walls} from "../constants/walls";
import {prettify} from "../constants";
import {LinearProgress} from "@material-ui/core";

export const DestroyWallProgress: FC = () => {
    const wall = useSelector((state:AppState)=> state.game.wall);

    return (<>
            <ProgressBar cost={walls[wall].cost}/>
            <WallText cost={walls[wall].cost}/>
        </>
    )
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