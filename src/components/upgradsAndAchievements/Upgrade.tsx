import React, {FC} from "react";
import {HtmlTooltip} from "../HtmlTooltip";
import {buyUpgrade, upgrades} from "../../constants/upgrades";
import {useDispatch, useSelector} from "react-redux";
import {UpgradeKeys} from "../../constants/upgrades";
import {AppState} from "../../redux/store";

interface Props {
    name: UpgradeKeys;
    disabled?: boolean;
}

export const Upgrade: FC<Props> = ({name, disabled}) => (
    <HtmlTooltip text={upgrades[name].text}>
        <UpgradeImg name={name} disabled={disabled}/>
    </HtmlTooltip>)

const UpgradeImg: FC<Props> = ({name, disabled}) => {
    //Hooking into redux to force re-renders
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = useSelector((state: AppState) => state.system.lastUpdate);
    const dispatch = useDispatch();
    const upgrade = upgrades[name];

    const style = {
        filter: (upgrade.isBuyable() || disabled) ? "grayscale(0%)" : "grayscale(100%)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
    }


    if(disabled === true) {
        return <img style={style} src={upgrade.img} alt="U"/>
    }
    return <img onClick={() => buyUpgrade(name, dispatch)} style={style} src={upgrade.img} alt="U"/>
}