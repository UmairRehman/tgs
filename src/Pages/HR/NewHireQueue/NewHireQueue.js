import React, {useState, useEffect} from "react";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField
} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import {employeeStatuses} from '../../../Imports/employeeStatuses'
import { useHistory } from "react-router-dom";
// import MobileScreen from './Mobile/SafetyTesting';
// import {isMobile} from 'react-device-detect';


/** Local deoendencies & Libraries */
import Services from '../../../Services';


const {
  hr
} = Services;

const columns = [
  { id: "id", label: "Employee ID", minWidth: 170, type: "value" },
  { id: "firstName", label: "Name", minWidth: 120, type: "value" },
  { id: "SubDepartmentId", label: "Department", minWidth: 100, type: "value" },
  { id: "state", label: "City", minWidth: 100, type: "value" },
  { id: "email", label: "Email", minWidth: 170, type: "value" },
  { id: "employeeStatus", label: "Application Stage", minWidth: 170, type: "value" },
  { id: "View", label: "View", minWidth: 50, type: "edit" },
  { id: "Complete", label: "Complete", minWidth: 50, type: "view" },
];

const employeeStatus = [
   "Application Pending", //1
   "Application Approved", //2
   "Application Rejected", //3
   "Questionnaire Pending", //4
   "Questionnaire Approved", //5
   "Questionnaire Rejected", //6
   "Documents Submitted", //7
   "PDF Forms , Submitted", //8
   "Employee" //9
]

const rows = [
  ("1234", "Ryan Westmeyer", "Information Technology", "Houston", "Ryan@tgs.com", "Step 1"),
  ("324", "John Daniel", "Human Resources", "California", "Singer@tgs.com", "Step 4"),
  ("554", "Paul Jason", "Operations", "Chicago", "Saim@tgs.com", "Step 3"),
  ("783", "Donald Jeff", "Safety", "Houston", "Stive@tgs.com", "Step 1"),
  ("234", "William Anthony", "Safety", "Dallas", "Rocking@tgs.com", "Step 2"),
  ("5433", "Mark Robert", "Operations", "Florida", "Serial@tgs.com", "Step 4"),
];

const NewHireQueue = () => {

  let history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [applicantData, setApplicantData] = useState([])
  
  useEffect(async() => {

    try{
      let data = await hr.getAllApplicants() ;
      if(data?.httpStatus==200){
        data = data.data; 
        data.forEach(row => {
          row.employeeStatus = employeeStatus[row.EmployeeStatusId-1]
        });
        setApplicantData(data);      
      }
    }
    catch(exc){
      console.log(exc);
    }
  }, [])


  function onClickView(value){

    if(value.EmployeeStatusId == 1){
      history.push({
        pathname : "/new-hire-queue/details",
        state: value
      });
    }
    else if(value.EmployeeStatusId == 6){
      history.push({
        pathname : "/new-hire-queue/details/approval",
        state: value
      });
    }
    else {
      alert('Do nothing')
    }
  }


  return (
    <Grid container xs={12} className="Liq-Container NewHireQueue">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">New Hire Queue</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Grid
                xs={12}
                container
                justify="space-between"
                className="LiqTables SafetyTable"
              >
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              className="bold f16"
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {applicantData
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((applicantData) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={applicantData.code}
                              >
                                {columns.map((column) => {
                                  const value = applicantData[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {/* {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value} */}
                                      {column.type == "edit" ? (
                                        applicantData?.EmployeeStatusId == 1 || applicantData?.EmployeeStatusId == 6 ?
                                        <Button onClick={()=>onClickView(applicantData)} className="ViewIcon" ></Button>
                                        :null
                                      ) : column.type == "view" ? (
                                        <Grid className="CompleteIcon"></Grid>
                                      ) : (
                                        value
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
                <Grid xs={12} className="TableSearchBox">
                  <Grid xs={12}>
                  Search By Employee ID
                  </Grid>
                  <Grid xs className="mt6">
                    <Button></Button>
                    <TextField/>
                  </Grid>
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

export default NewHireQueue;
