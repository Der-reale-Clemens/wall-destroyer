import React from 'react';
import {FC} from "react";
import {Tooltip, withStyles} from "@material-ui/core";

interface Props {
    text: any,
    children: any
}

export const BuildingTooltip: FC<Props> = ({text, children}) => {
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            border: '1px solid #dadde9',
        }
    }))(Tooltip)

    return (
        <HtmlTooltip title={text}>
            {children}
        </HtmlTooltip>
    )
}