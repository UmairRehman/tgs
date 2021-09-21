import React, {useState,useEffect} from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';
const TicketUpdate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12} className="Liq-Container HRPortal AlertUpdate">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
            <PageHeader />
            <Grid id="PageTitle">Tickets and Alerts</Grid>
            {/* Page Start */}
            <Grid xs={12} md={6} className="TicketAlertTab">
                <Grid xs={12} container>
                    <Link to="/tickets-alerts/alert/1234">Close Alert</Link>
                    <Link to="/tickets-alerts/ticket/1234" className="ActiveTab">Ticket Update</Link>
                </Grid>
            </Grid>
            <Grid xs={12} className="TicketAlertTabH1">
                <Typography variant="h1" component="h2">Update Ticket</Typography>
            </Grid>
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Entered By
                            </Grid>
                            <Grid>
                            Ryan Westmeyer
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Entered For
                            </Grid>
                            <Grid>
                            Jhon Doe
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket of Employee ID
                            </Grid>
                            <Grid>
                            44433
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Date Ticket Entered
                            </Grid>
                            <Grid>
                            30/20/2021
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Department
                            </Grid>
                            <Grid>
                            HR
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Type
                            </Grid>
                            <Grid>
                            Benefits
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Request
                            </Grid>
                            <Grid>
                            Question
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Comments
                            </Grid>
                            <Grid>
                            401k is deducting wrong amount
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={12} md={6}>
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Date
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextField
                                        id="date"
                                        type="date"
                                        className="DateTimePicker"
                                        defaultValue="YY-MM-DD"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Comment
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextareaAutosize className="w100p" rowsMin={6} placeholder="Comment here" />
                                </Grid>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please leave this field empty if you have no comments
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid xs={12} container justify="space-between" className="mt50 pr40">
                        <Link to="/tickets-alerts" className="LinkButtonBack">Back</Link>
                        <Link to="/tickets-alerts/ticket/1" className="LinkButton">Save & Continue</Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TicketUpdate;
