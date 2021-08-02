import {FC} from "react";
import {Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {buyBuilding} from "../functions/buyBuilding";
import {calculateNextBuildingCost, prettify} from "../constants";
import {BuildingKeys, buildings} from "../constants/buildings";

interface Props {
    text: string;
    img: any;
    name: BuildingKeys;
}

export const BuildingButton: FC<Props> = ({text, img, name}) => {
    const _ = useSelector((state: AppState) => state.system.format);
    const amount = useSelector((state:AppState) => state.buildings[name])
    const dispatch = useDispatch();

    const cost = calculateNextBuildingCost(amount, buildings[name].cost);
    const func = () => buyBuilding(name)(dispatch);

    return (<div>
            <ListItem button style={{border:"1px"}} onClick={func}>
                <ListItemIcon>
                    <img src={img} alt={name}/>
                </ListItemIcon>
                <ListItemText primary={text} secondary={`${prettify(cost)} cash`}/>
                {amount}
            </ListItem>
            <Divider/>
        </div>
    )
};