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
  TextField,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
// import MobileScreen from './Mobile/SafetyTesting';
// import {isMobile} from 'react-device-detect';

const columns = [
  { id: "eid", label: "Employee ID", minWidth: 120, type: "value" },
  { id: "nm", label: "Name", minWidth: 155, type: "value" },
  { id: "ta", label: "Ticket / Alert", minWidth: 160, type: "value" },
  { id: "ds", label: "Description", minWidth: 300, type: "value" },
  { id: "V", label: "View", minWidth: 50, type: "edit" },
  { id: "C", label: "Complete", minWidth: 50, type: "view" },
];

function createData(
  eid,
  nm,
  ta,
  ds,
  V,
  C
) {
  return {
    eid,
    nm,
    ta,
    ds,
    V,
    C
  };
}

const rows = [
  createData("1234", "Ryan Westmeyer", "Ticket", "Need monitor cables for new docking"),
  createData("324", "John Daniel", "Alert", "Terminated: AD Enabled"),
  createData("554", "Paul Jason", "Ticket", "Requesting a second monitor, Current"),
  createData("783", "Donald Jeff", "Alert", "Terminated: AD Enabled"),
  createData("234", "William Anthony", "Alert", "Need monitor cables for new docking"),
  createData("5433", "Mark Robert", "Ticket", "Requesting a second monitor, Current"),
];


const TicketsAndAlerts = () => {
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
          <Grid id="PageTitle">HR Alert / Message Queue</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            <Grid xs={12}>
              <Grid
                xs={12}
                container
                justify="space-between"
                className="LiqTables SafetyTable"
              >
                <Paper>
                  <TableContainer>
                    <Table aria-label="table" className="HTAlrtTab">
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
                                      {column.type == "edit" ? (
                                        <Link to={`/tickets-alerts/alert/${row.eid}`} className="ViewIcon"></Link>
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

export default TicketsAndAlerts;
