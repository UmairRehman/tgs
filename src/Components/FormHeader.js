import React, {useEffect} from 'react';
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
const FormHeader = () => {
    useEffect(() => {
        
      }, []);
    return (
    <Grid className="FormsHeader">
        <List>
            <ListItem>
                <Grid className="FormMenuLogo"></Grid>
            </ListItem>
            <ListItem>
                <Button>
                    <SaveIcon/>
                </Button>
            </ListItem>
            <ListItem>
                <Button onClick={() => window.print()}>
                    <LocalPrintshopIcon/>
                </Button>
            </ListItem>
            <ListItem>
                <Button onClick={() => window.close()}>
                    <CancelIcon/>
                </Button>
            </ListItem>
        </List>
    </Grid>
  );
}
export default FormHeader;