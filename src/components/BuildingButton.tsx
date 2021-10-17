import React, {FC} from "react";
import {Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {buyBuilding} from "../functions/buyBuilding";
import {calculateNextBuildingCost, prettify} from "../constants";
import {BuildingKeys, buildings} from "../constants/buildings";
import {HtmlTooltip} from "./HtmlTooltip";


interface Props {
    name: BuildingKeys;
}

export const BuildingButton: FC<Props> = ({name}) => {
    const text = (name.charAt(0).toUpperCase() + name.substr(1))
        .replaceAll(/([A-Z])/g, " $1").trim()

    return (<HtmlTooltip text={buildings[name].description}>
        <BuildingButtonCore text={text} img={buildings[name].img} name={name}/>
    </HtmlTooltip>)
}


interface PropsCore {
    img: string,
    text: string,
    name: BuildingKeys;
}


const BuildingButtonCore: FC<PropsCore> = ({img, text, name}) => {
    // Listen to format changes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = useSelector((state: AppState) => state.system.format);
    const amount = useSelector((state: AppState) => state.buildings[name])
    const dispatch = useDispatch();

    const buy = () => buyBuilding(name, dispatch);

    return (<div>
            <ListItem button style={{border: "1px"}} onClick={buy}>
                <ListItemIcon>
                    <img src={img} alt={name}/>
                </ListItemIcon>
                <ListItemText primary={<b>{text}</b>} secondary={<CostText name={name}/>}/>
                <b>{amount}</b>
            </ListItem>
            <Divider/>
        </div>
    )
}

const CostText: FC<Props> = ({name}) => {
    const {money, bricks, fourthWallBricks} = useSelector((state: AppState) => state.game);
    const amount = useSelector((state: AppState) => state.buildings[name])
    const building:any = buildings[name];

    let cashcost;
    if (building.cost !== 0) {
        const cost = calculateNextBuildingCost(amount, building.cost);
        const style = money >= cost ? {} : {color: "red"};
        cashcost = <span style={style}>{prettify(cost)} Cash</span>;
    }

    let brickCost;
    if (building.brickCost !== undefined) {
        const cost = calculateNextBuildingCost(amount, building.brickCost);
        const style = bricks >= cost ? {} : {color: "red"};
        brickCost = <span style={style}>{prettify(cost)} Bricks</span>;
    }

    let fourtWallCost;
    if (building.fourthWallBrickCost !== undefined) {
        const cost = calculateNextBuildingCost(amount, building.fourthWallBrickCost);
        const style = fourthWallBricks >= cost ? {} : {color: "red"};
        fourtWallCost = <span style={style}>{prettify(cost)} 4th Bricks</span>;
    }

    return <>{cashcost && (<>{cashcost}<br/></>)}
    {brickCost && (<>{brickCost}<br/></>)}
    {fourtWallCost}</>
}

