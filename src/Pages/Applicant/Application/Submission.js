import React, { useState, useEffect } from "react";
import {
  Grid,
  Checkbox,
  TextareaAutosize,
  Typography,
  Button,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";

import { Link, useLocation } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";


/** Local dependencies & Libraries */
import { Imports } from '../../../Imports';

import Services from '../../../Services';


const {
  employeeStatuses
} = Imports;

const {
  Storage
} = Services;

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const PositionLevel = [
  { title: 'Accounting and finance' },
  { title: 'Communications' },
  { title: 'Manager' }
];
const FullTitle = [
  { title: 'Accounting and finance Manager' },
  { title: 'Accounting and finance Assistant' },
  { title: 'Accounting and finance Junior' }
];

const addressstate = [
  { title: 'Alaska' },
  { title: 'Arizona' },
  { title: 'Arkansas' },
  { title: 'California' },
  { title: 'Colorado' },
  { title: 'Connecticut' },
  { title: 'Delaware' },
  { title: 'Florida' },
  { title: 'Georgia' },
  { title: 'Hawaii' },
  { title: 'Idaho' },
  { title: 'Illinois' },
  { title: 'Indiana' },
  { title: 'Iowa' },
  { title: 'Kansas' },
  { title: 'Kentucky' },
  { title: 'Louisiana' },
  { title: 'Maine' },
  { title: 'Maryland' },
  { title: 'Massachusetts' },
  { title: 'Michigan' }
];
const MaritalStatus = [
  { title: 'Married' },
  { title: 'Single' }
];
const JobCategories = [
  { title: 'Administrative assistant' },
  { title: 'Business development manager' },
  { title: 'Civil service administrative officer' },
  { title: 'Compliance officer' },
  { title: 'European Union official' },
  { title: 'Health service manager' },
  { title: 'Local government administrative assistant' },
  { title: 'Management consultant' },
  { title: 'Operational researcher' },
  { title: 'Purchasing manager' },
  { title: 'Business analyst' },
  { title: 'Civil service executive officer' }
];

const Follicle = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const useStyles = makeStyles((theme) => ({
  DisplayNone: {
    display: 'none'
  },
  SubmissionProcess: {
    width: '200px',
    position: 'absolute',
    bottom: '2vw',
    right: '2vw',
    'font-size': '11px',
  }
}));

const Submission = () => {

  const location = useLocation();

  const storage = new Storage();

  const {
    state: { applyToStorage }
  } = location;

  console.log(location)

  if (applyToStorage) {

    for (let key in applyToStorage) {
      const data = applyToStorage[key];

      storage.set(key, JSON.stringify(data));
    }

    const queryParams = new URLSearchParams(location.state);

    if (queryParams.has('applyToStorage'))
      queryParams.delete('applyToStorage');
  }

  const classes = useStyles();
  /** Retreiving User Profile Information, cached in localstorage.
 * TO APPLY - state service later.
 */
  const userProfile = JSON.parse(
    localStorage.getItem('user_profile')
  )

  if (userProfile) {
    var {
      EmployeeStatusId
    } = userProfile;
  }

  /********************************************************** */

  /** Setting sidebar styles if the user is authenticated */

  const submissionStatus = Imports.employeeStatuses
    .find(status => status.id === EmployeeStatusId);

  const {
    params: {
      status,
      nextStep: linkToUse,
    }
  } = submissionStatus;

  console.log(submissionStatus)

  console.log(status);

  const proceedSectionClassName = (
    status > 0 && EmployeeStatusId !== 9
  )
    ? classes.SubmissionProcess
    : classes.DisplayNone;
  /********************************************************** */



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
          <Grid id="PageTitle">Profile Submission</Grid>
          {/* Page Start */}
          <Grid xs={12} md={8} className="Submission">
            <Grid xs={12} className="SubmissionTable">
              <Grid xs={12} md={6} lg={4}>
                Thank you for applying to TGS, Our HR Team will review your application & get back to you.
              </Grid>
            </Grid>

            <Grid className={proceedSectionClassName}>
              <Link  to={linkToUse}>
                <h2>Proceed to next step</h2>
                </Link>
             <h2> This   option  will  be  available  after  your  profile  is  approved by HR. You will receive an  email  to  continue with the next steps of the process.</h2>
            </Grid>
          </Grid>

          
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Submission;
