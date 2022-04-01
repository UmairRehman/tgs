/** Core dependencies */
import React, { Component, useState } from 'react';


/** Third party dependencies */
import {
    IconButton,
    Tabs,
    Tab,
    Box,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 * 
 * @param {Array<Component>} props.children 
 * @param {Number} props.value 
 * @returns 
 */
function TabPanel(props) {
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

const TabsComponent = (props) => {
    const {
        borderBottom = 1,
        borderColor = 'divider',
        tabState,
        tabDetails = [],
    } = props;

    const [tabValue, setTabValue] = tabState;

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <Box sx={{ borderBottom, borderColor }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="tabs-to-use">
                    {
                        tabDetails
                            .map((tabDetail) => (<Tab label={tabDetail.label} />))
                    }
                </Tabs>
            </Box>
            {
                tabDetails
                    .map((tabDetail, index) => {
                        return (tabValue === index) && (
                            <TabPanel value={tabValue} index={index}>
                                {tabDetail.content}
                            </TabPanel>
                        );
                    })
            }
        </div>
    )
}

export default TabsComponent;
