import React, {FC, useState} from "react";
import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {Resources} from "../components/Resources";
import {StoryDisplay} from "../components/StoryDisplay";
import {SettingsButton} from "../components/settings/SettingsButton";
import {Upgrades} from "../components/upgradsAndAchievements/Upgrades";
import {NewUpgrades} from "./Upgrades";
import {Achievements} from "./Achievements";
import {Stats} from "../components/Stats";
import {Settings} from "./Settings";
import {Buildings} from "./Buildings";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const NewWindow: FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <StoryDisplay/>
        <SettingsButton/>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Resources/>
            </Grid>
            <UpperTabs/>
        </Grid>

    </div>
}

const UpperTabs: FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
        setValue(newValue);

    return <>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <Tab label="The Wall"/>
            <Tab label="Buildings"/>
            <Tab label="Upgrades" />
            <Tab label="Achievements" />
            <Tab label="Stats" />
            <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <Upgrades/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Buildings/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <NewUpgrades/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Achievements/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Stats/>
        </TabPanel>
        <TabPanel value={value} index={5}>
            <Settings/>
        </TabPanel>
    </>
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    <Paper style={{overflow: "scroll", height: "84vh", width: "99vw"}}>
                        {children}
                    </Paper>
                </Box>
            )}
        </div>
    );
}