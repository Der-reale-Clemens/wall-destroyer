import {FC} from "react";
import {AchievementKeys, achievements} from "../constants/achievements";
import {HtmlTooltip} from "./HtmlTooltip";

interface Props {
    name: AchievementKeys
}

export const Achievement: FC<Props> = ({name}) => {
    const style = {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black"
    }

    return(<HtmlTooltip text={achievements[name].text}>
        <img style={style} src={achievements[name].img} alt="A"/>
    </HtmlTooltip>)
}
