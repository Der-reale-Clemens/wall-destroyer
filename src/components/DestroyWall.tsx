import {FC} from "react";
import {Divider} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {HtmlTooltip} from "./HtmlTooltip";
import {walls} from "../constants/walls";
import {tryDestroyWall} from "../redux/GameSlice";
import {prettify} from "../constants";

export const DestroyWall: FC = () => {
    const wall = useSelector((state: AppState) => state.game.wall);
    const dispatch = useDispatch();

    const styles = {
        container: {
            position: "relative",
            textAlign: "center",
        } as React.CSSProperties,
        text: {
            position: "absolute",
            top: "2px",
            left: "13%",
            color: "black",
            fontSize: "large",
        } as React.CSSProperties,
    };

    return (<>
        <WallText/>
        <HtmlTooltip text={walls[wall].text}>
            <div onClick={() => dispatch(tryDestroyWall())} style={styles.container}>
                <b style={styles.text}>Destroy Wall</b>
                <img src={walls[wall].img} style={{width: "85%"}} alt="Wall"/>
            </div>
        </HtmlTooltip>
        <Divider/>
    </>)
}

const WallText: FC = () => {
    const damage = useSelector((state: AppState) => state.game.damage);
    const wall = useSelector((state:AppState)=> state.game.wall);
    const cost = walls[wall].cost
    const textColor = damage > cost ? "green" : "red";

    return <label style={{color: textColor}}>Needs: {prettify(cost)} Damage</label>
}