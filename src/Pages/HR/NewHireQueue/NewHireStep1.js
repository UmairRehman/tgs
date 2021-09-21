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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const Approval = [
    { title: 'Approve'},
    { title: 'Not Approve' },
    { title: 'Pending' }
];
const PositionLevel = [
    { title: 'Manager'},
    { title: 'Director' },
    { title: 'Assitant' }
];
const PositionLoc = [
    { title: 'Head office Canda'},
    { title: 'Australia Branch' },
    { title: 'Newzealand Branch' }
];
const FullTitle = [
    { title: 'Accounting and finance Manager'},
    { title: 'Accounting and finance Assistant' },
    { title: 'Accounting and finance Junior' }
];
const JobCode = [
    { title: '0117' },
    { title: '1280' },
    { title: '5678' }
];
const Paytype = [
    { title: 'hourly' },
    { title: 'monthly' },
    { title: 'weekly' }
];
const queueRate = [
    {title: '$10'},
    {title: '$20'},
    {title: '$30'},
];
const Supervisor = [
    {title: 'John Alex'},
    {title: 'Greek Alan'},
    {title: 'Susan John'}
];
const ITR1 = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const NewHireStep1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">New Applicant - Step 1 Approval</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Applicant Name
                            </Grid>
                            <Grid>
                            Ryan Westmeyer
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Employee ID
                            </Grid>
                            <Grid>
                            44433
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Date of Application
                            </Grid>
                            <Grid>
                            30/20/2021
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Home City, St
                            </Grid>
                            <Grid>
                            Houston, Texas 77066
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Phone Number
                            </Grid>
                            <Grid>
                            832 704 6517
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Email Address
                            </Grid>
                            <Grid>
                            Ryan.westmeyer@gmail.com
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Job ID / Description
                            </Grid>
                            <Grid>
                            1234
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Job Category
                            </Grid>
                            <Grid>
                            Operations
                            </Grid>
                        </ListItem>
                        <ListItem container alignItems="flex-start" className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Notes For HR
                            </Grid>
                            <Grid xs={3}>
                            Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem.
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Questionaire
                            </Grid>
                            <Grid className="PDFDownload">
                                <Grid className="FileName">
                                    Questionaire
                                </Grid>
                                <Button></Button>
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                                Resume
                            </Grid>
                            <Grid className="PDFDownload">
                                <Grid className="FileName">
                                    Resume
                                </Grid>
                                <Button></Button>
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={12} md={8} lg={6}>
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Step 1 Approval
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={Approval}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={6} className="pr20">
                                <Grid xs={12} className="mbold mb14">
                                    Date
                                </Grid>
                                <TextField id="outlined-basic" label="3/10/2021" disabled variant="outlined" className="w100p"/>
                            </Grid>
                            <Grid xs={6} className="pl20">
                                <Grid xs={12} className="mbold mb14">
                                    Time
                                </Grid>
                                <TextField id="outlined-basic" label="04:05 PM" disabled variant="outlined" className="w100p"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Level
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={PositionLevel}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Full Title
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={FullTitle}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Category
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={PositionLevel}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Location
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={PositionLoc}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Job Code
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={JobCode}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Pay Type
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={Paytype}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Rate
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={queueRate}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Start Date
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
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Department
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={PositionLevel}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Sub - Department
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={FullTitle}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Supervisor
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={Supervisor}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Other
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
                    
                    {/* ---------- */}
                    <Grid xs={12}>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9} className="mbold">
                                IT Request
                            </Grid>
                            <Grid xs={3} className="mbold">
                                Required
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Computer
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR1}
                                    className="w100p"
                                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Active Directory
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR2}
                                    className="w100p"
                                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Company Cell Phone
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR3}
                                    className="w100p"
                                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Company Vehicle
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR4}
                                    className="w100p"
                                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Fuel Card
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR5}
                                    className="w100p"
                                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Comments to IT
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
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/new-hire-queue" className="LinkButtonBack">Back</Link>
                        <Link to="/new-hire-queue/step/1" className="LinkButton">Save & Continue</Link>
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

export default NewHireStep1;
