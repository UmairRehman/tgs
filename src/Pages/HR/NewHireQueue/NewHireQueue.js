import React from "react";
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
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
// import MobileScreen from './Mobile/SafetyTesting';
// import {isMobile} from 'react-device-detect';

const columns = [
  { id: "eID", label: "Employee ID", minWidth: 170, type: "value" },
  { id: "Name", label: "Name", minWidth: 120, type: "value" },
  { id: "Department", label: "Department", minWidth: 100, type: "value" },
  { id: "City", label: "City", minWidth: 100, type: "value" },
  { id: "Email", label: "Email", minWidth: 170, type: "value" },
  { id: "ApplicationStage", label: "Application Stage", minWidth: 170, type: "value" },
  { id: "View", label: "View", minWidth: 50, type: "edit" },
  { id: "Complete", label: "Complete", minWidth: 50, type: "view" },
];

function createData(
  eID,
  Name,
  Department,
  City,
  Email,
  ApplicationStage,
  View,
  Complete
) {
  return {
    eID,
    Name,
    Department,
    City,
    Email,
    ApplicationStage,
    View,
    Complete
  };
}

const rows = [
  createData("1234", "Ryan Westmeyer", "Information Technology", "Houston", "Ryan@tgs.com", "Step 1"),
  createData("324", "John Daniel", "Human Resources", "California", "Singer@tgs.com", "Step 4"),
  createData("554", "Paul Jason", "Operations", "Chicago", "Saim@tgs.com", "Step 3"),
  createData("783", "Donald Jeff", "Safety", "Houston", "Stive@tgs.com", "Step 1"),
  createData("234", "William Anthony", "Safety", "Dallas", "Rocking@tgs.com", "Step 2"),
  createData("5433", "Mark Robert", "Operations", "Florida", "Serial@tgs.com", "Step 4"),
];


const NewHireQueue = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
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
                                        <Link to={`/new-hire-queue/${row.eID}`} className="ViewIcon"></Link>
                                        // <Link onClick={handleClickOpen} className="ViewIcon"></Link>
                                      ) : column.type == "view" ? (
                                        <Grid className="CompleteIcon"></Grid>
                                        // <Button to={`/new-hire-queue/${row.eventid}`} className="CompleteIcon"></Button>
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
