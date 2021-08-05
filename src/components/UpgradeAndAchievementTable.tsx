import {FC, useState} from "react";
import {Box, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";
import {Upgrades} from "./Upgrades";
import {Achievements} from "./Achievements";

export const UpgradeAndAchievementTable: FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
        setValue(newValue);

    return (<>
        <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
    >
        <Tab label="Upgrades" />
        <Tab label="Achievements" />
    </Tabs>
        <TabPanel value={value} index={0}>
            <Upgrades/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Achievements/>
        </TabPanel>
        </>)
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
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));