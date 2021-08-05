import React, {FC} from "react";
import {createStyles, List, makeStyles, Typography} from "@material-ui/core";
import {BuildingButton} from "./BuildingButton";
import {DestroyWall} from "./DestroyWall";
import {BuildingKeys, buildings} from "../constants/buildings";
import {HtmlTooltip} from "./HtmlTooltip";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360
        },
    }),
);



export const BuildingTable: FC = () => {
    const classes = useStyles();

    const createBuilding = (name: BuildingKeys) =>  {
        //Takes the name of a building and capitilizes the first letter and adds a space in front
        // of all subsequent capital letters. Works by regex magic
        const text = (name.charAt(0).toUpperCase() + name.substr(1))
            .replaceAll(/([A-Z])/g, " $1").trim()

        const getDescription = () => {
            return (
                <>
                    <Typography color="inherit">{text}</Typography>
                    {buildings[name].type + " Building"}
                    <br/>
                    {"Does "} <b>{buildings[name].power}</b> {"base damage."}
                    <br/>
                    <em>{buildings[name].description}</em>
                </>
            )
        };

        return (<HtmlTooltip text={getDescription()}>
                <BuildingButton text={text} img={buildings[name].img} name={name}/>
        </HtmlTooltip>)
    }


    return (
        <div className={classes.root}>
        <List component="nav">
            {createBuilding("puncher")}
            {createBuilding("clubber")}
            {createBuilding("swordsman")}
            {createBuilding("gunshooter")}
            {createBuilding("grenademan")}
            {createBuilding("wreckingBall")}
            {createBuilding("bulldozer")}
            {createBuilding("airstrikeCaller")}
        </List>
        </div>
    )
};