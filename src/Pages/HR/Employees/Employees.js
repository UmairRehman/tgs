import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Button,
  TextareaAutosize,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import Snackbar from '../../../Components/Snackbar';


/** Local deoendencies & Libraries */
import Services from '../../../Services';

import { helpers } from "../../../helpers";


const {
  hr
} = Services;



const {
  showSnackBar,
} = helpers;
// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


const columns = [
  { id: "ap", label: "Applicant", minWidth: 170, type: "value" },
  { id: "emID", label: "Employee ID", minWidth: 120, type: "value" },
  { id: "dop", label: "Date of Application", minWidth: 100, type: "value" },
  { id: "hc", label: "Home City, St", minWidth: 100, type: "value" },
  { id: "pn", label: "Phone Number", minWidth: 170, type: "value" },
  { id: "ed", label: "Email Address", minWidth: 170, type: "value" }
];

function createData(
  ap,
  emID,
  dop,
  hc,
  pn,
  ed
) {
  return {
    ap,
    emID,
    dop,
    hc,
    pn,
    ed
  };
}

const rows = [
  createData("Joe Dae", "44433", "01/20/2021", "Houston, Texas", "402-233-5555", "Joe.Dae@gmail.com"),
];





const Approval = [
  { title: 'Approve' },
  { title: 'Not Approve' },
  { title: 'Pending' }
];
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
const FailPass = [
  { title: 'Pass' },
  { title: 'Fail' },
  { title: 'Pending' }
];




const EmployeeLookup = () => {

  let history = useHistory();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [isLoadingEmployees, setIsLoadingEmployees] = useState(false);
  const [isRetreivingForThrottling, setIsRetreivingForThrottling] = useState(false);
  const [retreivingEmployee, setRetreivingEmployee] = useState(false);
  const [error, setError] = useState(false);
  const [employeesList, setEmployeesList] = useState([]);

  const timeouts = {
    employeesRetreival: null
  }

  const [page, setPage] = React.useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      if (!employeeName) {
        setIsLoadingEmployees(false);
        setEmployeesList([]);
        return false;
      }

      // if (timeouts.employeesRetreival && isLoadingEmployees)
      //   clearTimeout(timeouts.employeesRetreival);


      try {
        // if (isRetreivingForThrottling)
        //   return false;

        setIsRetreivingForThrottling(true);
        // setEmployeesList([]);

        const list = await hr.getAllApplicantsByName({ name: employeeName });

        const { employee: employeesList } = list;

        setEmployeesList(employeesList);

        clearTimeout(timeouts.employeesRetreival);

        setTimeout(() => {
          setIsLoadingEmployees(false);
        }, 0);

        setIsRetreivingForThrottling(false);
      } catch (exc) {
        console.log(exc);
      }
    })();
  }, [employeeName]);

  async function onSubmit(event, forcedIdParam = '') {
    if (event)
      event.preventDefault();

    const useId = (id || forcedIdParam).toString();

    if (useId) {

      let data = {
        id: useId,
      }

      console.log(data)
      try {

        let data1 = await hr.getEmployee(data);
        console.log(data1)

        history.push({
          pathname: "/employees/result",
          state: data1?.employee[0]?.id
        });

      }


      catch (exc) {
        console.log(exc);
        // return showSnackBar('Error Occured while submitting form');
      }
    }
    else {
      console.log("error")
      setError(!error)
      // return showSnackBar('Error Occured while submitting form');

    }


  }

  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Snackbar></Snackbar>

      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Employee Lookup</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage BlueHeadTable FormTableArea">
            <Grid xs={12}>
              <Grid xs={12} md={8} lg={6} container className="HREmSearch">
                <form style={{ width: '100%' }} onClick={onSubmit}>
                  {/* <Grid xs={5}>
                          <Typography>Name</Typography>
                          <TextField id="outlined-basic" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" className="w100p"/>
                      </Grid> */}
                  <Grid style={{ marginTop: '10px' }} xs={5}>
                    <Typography>Employee ID</Typography>
                    <TextField id="outlined-basic" value={id} onChange={(e) => { setId(e.target.value) }} variant="outlined" className="w100p" />
                    <p style={{ display: error == true ? "block" : "none" }}>Id is required</p>
                  </Grid>
                  <Grid style={{ marginTop: '10px' }} xs={5}>
                    <Typography>Employee Name: (Search by name)</Typography>
                    <TextField id="outlined-basic" onChange={(e) => {
                      setIsLoadingEmployees(true);
                      setEmployeeName(e.target.value);
                    }} variant="outlined" className="w100p" />
                  </Grid>
                  {
                    (isLoadingEmployees)
                      ? (
                        <Grid>
                          Retreiving List ...
                        </Grid>
                      )
                      : <Grid></Grid>

                    // Showing employees list if retreived
                  }

                  {
                    (!isLoadingEmployees && employeesList.length)
                      ? <Grid className='employees-list'>
                        {
                          // Show employees
                          employeesList.map(employee => {
                            return (
                              <ListItem style={{
                                'box-shadow': '1px 1px 15px -10px #555'
                              }}>
                                <Typography style={{ flex: 1 }}>ID: {employee.id}</Typography>
                                <Typography style={{ flex: 6 }}>{employee.firstName} {employee.lastName}</Typography>
                                <Button style={{
                                  flex: 1,
                                  background: '#2963AD',
                                  color: 'white',
                                }}
                                  type="submit"
                                  onClick={(event) => {
                                    setRetreivingEmployee(true);
                                    setId(employee.id);
                                    onSubmit(event, employee.id);
                                  }}>
                                  View
                                </Button>
                              </ListItem>
                            )
                          })
                        }
                      </Grid>
                      : <Grid></Grid>
                  }
                  <Grid xs={2}>
                    <Typography className="SearchBtnDot">.</Typography>
                    <Button style={{ background: '#2963AD', color: 'white' }} type='submit' >Search</Button>
                    {/* <Link  to="/employees/result"></Link> */}
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeLookup;