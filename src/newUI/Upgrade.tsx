import React, {FC} from "react";
import {HtmlTooltip} from "../components/HtmlTooltip";
import {buyUpgrade, upgrades} from "../constants/upgrades";
import {useDispatch, useSelector} from "react-redux";
import {UpgradeKeys} from "../constants/upgrades";
import {AppState} from "../redux/store";

interface Props {
    name: UpgradeKeys;
}

export const Upgrade: FC<Props> = ({name}) => {
    const unlockedUpgrades = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);

    return <HtmlTooltip text={upgrades[name].text}>
        {unlockedUpgrades.includes(name) ? <UnlockedUpgrade name={name}/>: <BoughtUpgrade name={name}/>}
    </HtmlTooltip>
}

const BoughtUpgrade: FC<Props> = ({name}) => {
    const style = {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
    }

    return <img style={style} src={upgrades[name].img} alt="U"/>
}

const UnlockedUpgrade: FC<Props> = ({name}) => {
    //Hooking into redux to force re-renders
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = useSelector((state: AppState) => state.system.lastUpdate);
    const dispatch = useDispatch();

    const stripes = (child:any) => <div style={{position: "relative"}}>{child}<span style={{
        position: "absolute",
        background: "repeating-linear-gradient(45deg,rgba(255, 0, 0, 0.3),rgba(255, 0, 0, 0.3) 10px," +
            "rgba(255, 0, 0, 0.5) 10px," +
            "rgba(255, 0, 0, 0.5) 20px)",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "90%",
        zIndex: 100,
        backgroundPosition: "center",
        display: upgrades[name].isBuyable() ? "none" : undefined,
    }}></span></div>

    const style = {
        filter: "grayscale(100%)",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        width: "100%"
    }

    return stripes(<img onClick={() => buyUpgrade(name, dispatch)} style={style} src={upgrades[name].img} alt="U"/>)
}