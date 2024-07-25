import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ReactNode, SyntheticEvent, useState } from 'react';

import TabComponent from './TabComponent';
import DescriptionTab from './DescriptionTab';
import { IGameInfo } from '@/interfaces/game.interface';
import InfoTab from './InfoTab';

const tabStyles = {
    color: 'white',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginRight: '1rem',
    '&.Mui-selected': {
        color: '#b9b2c887',
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#b9b2c887',
    },
};

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

interface IProps {
    data: IGameInfo;
}

const CustomTabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
    return (
        <div
            aria-labelledby={`simple-tab-${index}`}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            role="tabpanel"
            {...other}>
            {value === index ? <Box sx={{ p: 3 }}>{children}</Box> : null}
        </div>
    );
};

const GameTabs = ({ data }: IProps) => {
    const [value, setValue] = useState(1);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '90%', typography: 'body1', color: 'white' }}>
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        backgroundColor: '#7E60BF',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <TabList aria-label="lab API tabs example" onChange={handleChange}>
                        <Tab label="Descripción" sx={tabStyles} value={1} />
                        <Tab label="Info" sx={tabStyles} value={2} />
                        <Tab label="Gameplay" sx={tabStyles} value={3} />
                    </TabList>
                </Box>
                <CustomTabPanel index={1} value={value}>
                    <DescriptionTab data={data} />
                </CustomTabPanel>
                <CustomTabPanel index={2} value={value}>
                    <InfoTab data={data} />
                </CustomTabPanel>
                <CustomTabPanel index={3} value={value}>
                    <TabComponent>
                        <h1>Hola3</h1>
                    </TabComponent>
                </CustomTabPanel>
            </TabContext>
        </Box>
    );
};

export default GameTabs;
