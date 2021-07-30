import React, {FC, useEffect, useRef, useState} from "react";
import {HtmlTooltip} from "./HtmlTooltip";
import magicMining from "../images/upgrades/magicMining.png";
import punchUpg from "../images/upgrades/punchUpg1.png";
import {Typography} from "@material-ui/core";
import {buyUpgrade, upgrades} from "../constants/upgrades";
import {useDispatch, useSelector} from "react-redux";
import {UpgradeKeys} from "../constants/upgrades";
import {AppState} from "../redux/store";

interface Props {
    name: UpgradeKeys;
}

export const Upgrade: FC<Props> = ({name}) => (
    <HtmlTooltip text={upgrades[name].text}>
        <UpgradeImg name={name}/>
    </HtmlTooltip>)

const UpgradeImg: FC<Props> = ({name}) => {
    //Hooking into redux to force re-renders
    const _ = useSelector((state: AppState) => state.system.lastUpdate);
    const dispatch = useDispatch();

    const upgrade = upgrades[name];
    const style =  upgrade.isBuyable() ? {filter: "grayscale(0%)"} : {filter: "grayscale(100%)"};
    return <img onClick={() => buyUpgrade(name, dispatch)} style={style} src={upgrade.img} alt="Magic Mining"/>
}


export const Upgrade2: FC = () => {

    const getText = () => <React.Fragment>
        <Typography color="inherit">Gloves</Typography>
        Hand punches do <b>1</b> more damage. Punchers do <b>50%</b> more damage.
        <br/><em>A little padding.</em>
        <br/>Costs <b>{100}</b> Cash
    </React.Fragment>

    return <HtmlTooltip text={getText()}>
        <img style={{filter: "grayscale(0%)"}} src={punchUpg}/>
    </HtmlTooltip>
}