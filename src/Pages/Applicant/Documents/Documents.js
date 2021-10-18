import React, {useState,useEffect} from "react";
import {
  Grid,
  Checkbox,
  TextareaAutosize,
  Typography,
  Button,
  List,
  ListItem
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

const PositionLevel = [
    { title: 'Accounting and finance'},
    { title: 'Communications' },
    { title: 'Manager' }
];
const FullTitle = [
    { title: 'Accounting and finance Manager'},
    { title: 'Accounting and finance Assistant' },
    { title: 'Accounting and finance Junior' }
];

const addressstate = [
    {title: 'Alaska'},
    {title: 'Arizona'},
    {title: 'Arkansas'},
    {title: 'California'},
    {title: 'Colorado'},
    {title: 'Connecticut'},
    {title: 'Delaware'},
    {title: 'Florida'},
    {title: 'Georgia'},
    {title: 'Hawaii'},
    {title: 'Idaho'},
    {title: 'Illinois'},
    {title: 'Indiana'},
    {title: 'Iowa'},
    {title: 'Kansas'},
    {title: 'Kentucky'},
    {title: 'Louisiana'},
    {title: 'Maine'},
    {title: 'Maryland'},
    {title: 'Massachusetts'},
    {title: 'Michigan'}
];
const MaritalStatus = [
    {title: 'Married'},
    {title: 'Single'}
];
const JobCategories = [
    {title: 'Administrative assistant'},
    {title: 'Business development manager'},
    {title: 'Civil service administrative officer'},
    {title: 'Compliance officer'},
    {title: 'European Union official'},
    {title: 'Health service manager'},
    {title: 'Local government administrative assistant'},
    {title: 'Management consultant'},
    {title: 'Operational researcher'},
    {title: 'Purchasing manager'},
    {title: 'Business analyst'},
    {title: 'Civil service executive officer'}
];

const Follicle = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const Documents = () => {
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
          <Grid id="PageTitle" className="f16">Complete Onboarding Document</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} className="StepsLine Step2Line">
                <List>
                    <ListItem className="StepComplete">Step 1</ListItem>
                    <ListItem className="StepComplete">Step 2</ListItem>
                    <ListItem>Step 3</ListItem>
                    <ListItem>Step 4</ListItem>
                </List>
            </Grid>
            <Grid xs={12}>
                <Grid xs={12} md={8} lg={6}>
                    <Typography variant="h1" component="h2" className="bold f16">
                    You're required to fill out the following documents to complete your application
                    </Typography>
                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                    Section 2
                    </Typography>
                    
                    <Link to="" className="DocDownload">
                        <Grid className="FileName">
                        Employee Data Sheet & Question
                        </Grid>
                        <Button></Button>
                    </Link>
                    <Link to="" className="DocDownload">  
                        <Grid className="FileName">
                        Application For Employment
                        </Grid>
                        <Button></Button>
                    </Link>
                    <Link to="" className="DocDownload">
                        <Grid className="FileName">
                        Driver License
                        </Grid>
                        <Button></Button>
                    </Link>



                    
                   
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/questionnaire" className="LinkButtonBack">Back</Link>
                        <Link to="/documents/step/3" className="LinkButton">Save & Continue</Link>
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

export default Documents;
