import {FC} from "react";
import {Tooltip, withStyles} from "@material-ui/core";

interface Props {
    children: JSX.Element;
    text: JSX.Element;
}

export const HtmlTooltip: FC<Props> = ({children, text}) => {
    const HtmlTooltipBase = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            border: '1px solid #dadde9',
            maxWidth: 200,
            minWidth: 200,
        }
    }))(Tooltip);

    return (
        <HtmlTooltipBase title={text} arrow>
            <div>
                {children}
            </div>
        </HtmlTooltipBase>
    )
}