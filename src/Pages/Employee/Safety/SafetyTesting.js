import React , { useState ,useEffect } from "react";
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
  DialogContent,
  DialogContentText,
  Dialog,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/SafetyTesting';
import {isMobile} from 'react-device-detect';
import Services from '../../../Services'

var moment = require('moment-timezone')
const {
  employee,
  Storage
} = Services

const columns = [
  { id: "id", label: "Event ID", minWidth: 170, type: "value" },
  { id: "date", label: "Date", minWidth: 120, type: "value" },
  { id: "time", label: "Time", minWidth: 100, type: "value" },
  { id: "locationAdded", label: "Location", minWidth: 100, type: "value" },
  { id: "jobID", label: "Job ID", minWidth: 170, type: "value" },
  { id: "rulesCount", label: "Rules", minWidth: 170, type: "value" },
  { id: "editrules", label: "Add Rules", minWidth: 50, type: "edit" },
  { id: "viewrules", label: "View Rules", minWidth: 50, type: "view" },
];


const SafetyTesting = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // For Modal
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState([]) 
 
  const getlistEvents =async () =>{
    try {
      let data = await employee.get_test_event_listing()
      console.log(data);
      if(data.httpStatus==200){
        data= data.data
        data.forEach(element => {
          element.date = moment( new Date(element.date) ).format('DD-MM-YYYY')
          element.time = element.time.slice(0,-3)
          element.locationAdded = element.TGSLocation.name
          element.rulesCount = element.TestEventRules.length
        });
        setRows(data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(async () => {
    
    let data = await getlistEvents()
    
  }, [])


  if(isMobile) {
    return (
        <MobileScreen />
    )
  }

  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Safety &#38; Testing</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Link to="/enter-railroad-event" className="LinkButton">
                Enter Railroad Test Event
              </Link>
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
                                        <Link to={`/safety-testing/${row.eventid}`} className="EditIcon"></Link>
                                      ) : column.type == "view" ? (
                                        <Button  onClick={handleClickOpen} className="ViewIcon"></Button>
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
              </Grid>
            </Grid> 
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>


      {/* Modal */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        className="SafetyModal LiqTables"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={handleClose} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Event_ID</TableCell>
                    <TableCell>Rule_NBR</TableCell>
                    <TableCell>Crew_Member</TableCell>
                    <TableCell>Result</TableCell>
                    <TableCell>Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>564</TableCell>
                    <TableCell>12345</TableCell>
                    <TableCell>6.2</TableCell>
                    <TableCell>John Doe 1 EMP ID</TableCell>
                    <TableCell>Pass</TableCell>
                    <TableCell>Null / Blank</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>569</TableCell>
                    <TableCell>12345</TableCell>
                    <TableCell>6.2</TableCell>
                    <TableCell>John Doe 2 EMP ID</TableCell>
                    <TableCell>Rules Review</TableCell>
                    <TableCell>DID NOT SECURE RAILCAR</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>570</TableCell>
                    <TableCell>12345</TableCell>
                    <TableCell>6.2</TableCell>
                    <TableCell>John Doe 1 EMP ID</TableCell>
                    <TableCell>Pass</TableCell>
                    <TableCell>Null / Blank</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12}>
          <TableContainer>
              <Table className="mt10">
                <TableHead>
                  <TableRow>
                    <TableCell className="pt0 pb6">Reviewer Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <DialogContentText>
                        * 4TH Crew member was not tested on rule 6.2 and N/A was entered for the result. Therefore, a rules record should not be added to the rules table for John 
Doe4, rule 6.2
                      </DialogContentText>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </DialogContent>
      </Dialog>
      




    </Grid>
  );
}

export default SafetyTesting;
