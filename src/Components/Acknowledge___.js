import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    Button,
    Grid, List, ListItem
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const CloseTab = () => {
    window.close();
}
const PrintOut = () => {
    window.print();
}
const Acknowledge = (props = {}) => {

    const {
        acknowledgedState: [
            isAcknowledged,
            setAcknowledged
        ]
    } = props;

    useEffect(() => {
    }, []);


    const acknowledge = () => {
        setAcknowledged(true);
    }

    return (
        <Grid xs={12} className={
            isAcknowledged
                ? 'd-none'
                : 'Acknowledge'
        }>
            <Grid className="FormMenuLogo"></Grid>
            <Button className="AcknowledgeBtn" onClick={acknowledge}>Acknowledge</Button>
            <Grid className="p0">
                <List className="p0">
                    <ListItem className="p0 pr10">
                        <Button onClick={() => window.print()}>
                            <LocalPrintshopIcon />
                        </Button>
                    </ListItem>
                    <ListItem className="p0 pl10">
                        <Button onClick={() => window.close()}>
                            <CancelIcon />
                        </Button>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
export default Acknowledge;