import React, {FC} from "react";
import {Divider, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
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
    const _ = useSelector((state: AppState) => state.system.format);
    const amount = useSelector((state: AppState) => state.buildings[name])
    const dispatch = useDispatch();

    const cost = calculateNextBuildingCost(amount, buildings[name].cost);
    const buy = () => buyBuilding(name, dispatch);

    const secondaryText = () => {
        const building = buildings[name];
        // @ts-ignore
        if(building.fourthWallBrickCost !== undefined) {
            // @ts-ignore
            const fourthWallBrickCost = calculateNextBuildingCost(amount, buildings[name].fourthWallBrickCost);
            return <>{prettify(cost)} Cash<br/>{prettify(fourthWallBrickCost)} 4th Wall Bricks</>
        }
        // @ts-ignore
        if (building.brickCost === undefined) {
            return `${prettify(cost)} Cash`;
        }
        // @ts-ignore
        const brickCost = calculateNextBuildingCost(amount, buildings[name].brickCost);
        if (building.cost === 0) {
            return <>{prettify(brickCost)} Bricks</>
        }
        return <>{prettify(cost)} Cash<br/>{prettify(brickCost)} Bricks</>

    }

    return (<div>
            <ListItem button style={{border: "1px"}} onClick={buy}>
                <ListItemIcon>
                    <img src={img} alt={name}/>
                </ListItemIcon>
                <ListItemText primary={<b>{text}</b>} secondary={secondaryText()}/>
                <b>{amount}</b>
            </ListItem>
            <Divider/>
        </div>
    )
}

