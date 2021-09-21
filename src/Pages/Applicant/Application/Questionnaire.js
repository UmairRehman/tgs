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

const Questionnaire = () => {
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
          <Grid id="PageTitle">Employment Questionnaire</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} className="StepsLine">
                <List>
                    <ListItem className="StepComplete">Step 1</ListItem>
                    <ListItem>Step 2</ListItem>
                    <ListItem>Step 3</ListItem>
                    <ListItem>Step 4</ListItem>
                </List>
            </Grid>
            <Grid xs={12}>
                <Grid xs={12} md={8} lg={6}>
                    <Typography variant="h1" component="h2" className="bold f16">
                        Are you able to
                    </Typography>   
                    
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                            Pass a hair follicle test? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Pass an oral alcohol & drug test? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Have you ever been convicted of a felony or a misdemeanor which resulted in imprisonment within the last seven years? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Are you able to perform essential functions of the job for which you are applying, with or without a reasonable accommodation? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40 mt30">
                        <Grid xs={12}>
                            <Grid xs={12} className="mb14">
                            If no, Please Explain:
                            </Grid>
                            <TextField id="outlined-basic" placeholder="Comment here" variant="outlined" className="w100p"/>
                            <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                Please leave this field empty if you have no comments
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        When would you available to begin work? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Do you speak English?
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Are you bilingual? 
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40 mt30">
                        <Grid xs={12}>
                            <Grid xs={12} className="mb14">
                            If yes, What lanuage:
                            </Grid>
                            <TextField id="outlined-basic" placeholder="Comment here" variant="outlined" className="w100p"/>
                            <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                Please leave this field empty if you have no comments
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    {/* --------- */}
                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                    If required, would you be willing to
                    </Typography>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Work overtime
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Work Shift
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Work holidays
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Work weekends
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Travel
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Relocate
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>

                    {/* --------- */}
                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                        Generals questions
                    </Typography>

                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40 mt30">
                        <Grid xs={12}>
                            <Grid xs={12} className="mb14">
                            How did you hear about TGS
                            </Grid>
                            <TextField id="outlined-basic" placeholder="Type here" variant="outlined" className="w100p"/>
                            <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                Please leave this field empty if you have no comments
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* --------- */}
                    <Grid xs={12} container justify="space-between" className="mt30">
                        <Grid xs={9} container alignContent="center">
                        Have you worked for TGS before
                        </Grid>
                        <Grid xs={3}>
                            <Autocomplete
                                id="controllable-states-demo"
                                options={Follicle}
                                className="w100p"
                                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select"/>}
                            />
                        </Grid>
                    </Grid>



                    
                   
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/application" className="LinkButtonBack">Back</Link>
                        <Link to="/submission" className="LinkButton">Save & Continue</Link>
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

export default Questionnaire;
