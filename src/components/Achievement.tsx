import {FC} from "react";
import {AchievementKeys, achievements} from "../constants/achievements";
import {HtmlTooltip} from "./HtmlTooltip";

interface Props {
    name: AchievementKeys
}

export const Achievement: FC<Props> = ({name}) => (
    <HtmlTooltip text={achievements[name].text}>
        <img src={achievements[name].img} alt="A"/>
    </HtmlTooltip>)
