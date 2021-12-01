import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";


// import MobileScreen from './Mobile/SafetyTesting';
// import {isMobile} from 'react-device-detect';


/** Local deoendencies & Libraries */
import Services from '../../../Services';


const {
  hr,
  Storage
} = Services;

const HR_CATEGORY_ID = 1;
const IT_CATEGORY_ID = 2;

const columns = [
  { id: "employeeid", label: "Employee ID", minWidth: 120, type: "value" },
  { id: "name", label: "Name", minWidth: 155, type: "value" },
  { id: "alertType", label: "Tickets/Alerts", minWidth: 300, type: "value" },
  { id: "category", label: "Category", minWidth: 80, maxWidth: 100, type: "value" },
  { id: "description", label: "Description", minWidth: 300, type: "value" },
  { id: "id", label: "View", minWidth: 50, type: "edit" },
  { id: "C", label: "Complete", minWidth: 50, type: "view" },
];

function createData(
  eid,
  nm,
  ta,
  ct,
  ds,
  V,
  C
) {
  return {
    eid,
    nm,
    ta,
    ct,
    ds,
    V,
    C
  };
}

const rows = [
  createData("1234", "Ryan Westmeyer", "Ticket", "IT", "Need monitor cables for new docking"),
  createData("324", "John Daniel", "Alert", "Management", "Terminated: AD Enabled"),
  createData("554", "Paul Jason", "Ticket", "IT", "Requesting a second monitor, Current"),
  createData("783", "Donald Jeff", "Alert", "Account", "Terminated: AD Enabled"),
  createData("234", "William Anthony", "Alert", "Management", "Need monitor cables for new docking"),
  createData("5433", "Mark Robert", "Ticket", "Account", "Requesting a second monitor, Current"),
];


const TicketsAndAlerts = () => {
  const storage = new Storage()
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

  const [loader, setLoader] = useState(false)
  const [ticket, setTicket] = useState({})
  const [test, setTest] = useState([])
  useEffect(async () => {
    let userProfile = await JSON.parse(localStorage.user_profile);
    try {
      setLoader(true)
      if(userProfile)
      {
        console.log(userProfile.role_id , userProfile.role_id==3);
        let categoryId = (userProfile.role_id == 3) ? IT_CATEGORY_ID : HR_CATEGORY_ID
        let response = await hr.listTicketByCategory({roleId:categoryId});
  
        const { data } = response;
  
        const setTickets = data
          .reverse()
          .map((rows) => ({
            id: rows.id,
            employeeid: rows.FEmployee.id,
            name: rows.FEmployee.firstName + " " + rows.FEmployee.middleName + " " + rows.FEmployee.lastName,
            alertType: rows.isAlert ? "Alert" : "Ticket",
            category: rows.TicketType.name,
            description: rows.creation_comment
          }))
  
        setTest(setTickets);
      }
    }
    catch (exc) {
      console.log(exc);
    }

  }, [])

  function onClickDetail(value) {
    console.log(value)
    if (value.alertType == "Ticket") {
      history.push({
        pathname: "/tickets-alerts/ticket/details",
        state: value
      });
    }
    else {
      history.push({
        pathname: "/tickets-alerts/alert/details",
        state: value
      });
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
                        {test
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((test) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={test.code}
                              >
                                {columns.map((column) => {
                                  // console.log(column)
                                  const value = test[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.type == "edit" ? (
                                        <Button className="ViewIcon" onClick={() => onClickDetail(test)}>
                                        </Button>
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
                    <TextField />
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
