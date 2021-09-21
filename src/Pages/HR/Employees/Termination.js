import React, {useState,useEffect} from "react";
import {
  Grid,
  Button,
  TextareaAutosize,
  Typography,
  List,
  ListItem
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const ReasonsTerminat = [
    { title: 'Misc-Violation of Safety Policy'},
    { title: 'Misc-Violation of Company Pol' },
    { title: 'Misc-Violation of Drug Policy' },
    { title: 'Misc-Insubordination' },
    { title: 'Vol-No-call/No-show 3+ days' },
    { title: 'Vol-Medical issue' },
    { title: 'Vol-Quit' },
    { title: 'Other-Unable to perform job duties' },
    { title: 'Other-Poor work habits' },
    { title: 'Other-Excessive absenteeism' },
    { title: 'Other-Reduction in force' },
    { title: 'Other' }
];

const Termination = () => {
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
          <Grid id="PageTitle">Employee Termination</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage BlueHeadTable FormTableArea">
            
            {/* Employee Search */}
            <Grid xs={12}>
                <Grid xs={12} md={6} container className="HREmSearch">
                    <Grid xs={5}>
                        <Typography>Name</Typography>
                        <TextField id="outlined-basic" value="Ryan" variant="outlined" className="w100p"/>
                    </Grid>
                    <Grid xs={5}>
                        <Typography>Employee ID</Typography>
                        <TextField id="outlined-basic" value="11001" variant="outlined" className="w100p"/>
                    </Grid>
                    <Grid xs={2}>
                        <Typography className="SearchBtnDot">.</Typography>
                        <Link to="/employees/result"></Link>
                    </Grid>
                </Grid>
            </Grid>

            {/* Employee Details List */}
            <Grid xs={12}>
                <Grid xs={12}  md={6}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Employee ID
                            </Grid>
                            <Grid xs={5}>
                            11001
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            First Name
                            </Grid>
                            <Grid xs={5}>
                            Ryan
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Last Name
                            </Grid>
                            <Grid xs={5}>
                            Westmeyer
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Level
                            </Grid>
                            <Grid xs={5}>
                            Director
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Full title
                            </Grid>
                            <Grid xs={5}>
                            Director of System Administration
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Category
                            </Grid>
                            <Grid xs={5}>
                            Management
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Location
                            </Grid>
                            <Grid xs={5}>
                            Baytown, Texas (Cedar Port)
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Department
                            </Grid>
                            <Grid xs={5}>
                            IT
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Sub Department
                            </Grid>
                            <Grid xs={5}>
                            IT Management & Admin
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Supervisor
                            </Grid>
                            <Grid xs={5}>
                            John Doe
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>


            

            {/* Termination Date */}
            <Grid xs={12} container className="mt40">
                <Grid xs={12} md={6}>
                    <Grid xs={12} className="mt30">
                        <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                                Termination Date
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
                    {/* -------------- */}
                    <Grid xs={12} className="mt30">
                        <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                                Termination Reason
                            </Grid>
                            <Grid xs={12} className="mt14">
                                <Autocomplete
                                    className="w100p"
                                    id="combo-box-demo"
                                    options={ReasonsTerminat}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid xs={12} container className="mt20">
                <Grid xs={12} md={6}>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Comments
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
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Attach Additional Files
                                </Grid>
                                <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">
                                    Drop File Here OR <Button>Select Files</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={6} container justify="space-between">
                        <Link to="/employees" className="LinkButtonBack">Back</Link>
                        <Link to="/employees-profile/terminated" className="LinkButton">Save & Continue</Link>
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

export default Termination;