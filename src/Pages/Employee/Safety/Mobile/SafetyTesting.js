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
  DialogContent,
  DialogContentText,
  Dialog,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PageHeader from "../../../../Components/Mobile/PageHeader";

const columns = [
  { id: "eventid", label: "Event ID", minWidth: 170, type: "value" },
  { id: "date", label: "Date", minWidth: 120, type: "value" },
  { id: "time", label: "Time", minWidth: 100, type: "value" },
  { id: "location", label: "Location", minWidth: 100, type: "value" },
  { id: "jobid", label: "Job ID", minWidth: 170, type: "value" },
  { id: "resulttest", label: "Result / Test", minWidth: 170, type: "value" },
  { id: "editrules", label: "Edit Rules", minWidth: 50, type: "edit" },
  { id: "viewrules", label: "View Rules", minWidth: 50, type: "view" },
];

function createData(
  eventid,
  date,
  time,
  location,
  jobid,
  resulttest,
  editrules,
  viewrules
) {
  return {
    eventid,
    date,
    time,
    location,
    jobid,
    resulttest,
    editrules,
    viewrules,
  };
}

const rows = [
  createData("20101", "1-20-2021", "13:14", "Cedar Port", "54568", "1"),
  createData("20102", "1-20-2021", "10:26", "Port of Beaumont", "987498", "0"),
  createData("20103", "1-20-2021", "18:22", "Cedar Port", "452118", "3"),
  createData("20104", "1-20-2021", "09:23", "Port of Beaumont", "5421", "4"),
  createData("20105", "1-20-2021", "01:42", "Port of Beaumont", "78751", "3"),
  createData("20106", "1-20-2021", "13:51", "Port of Beaumont", "1235", "2"),
  createData("20107", "1-20-2021", "10:14", "Cedar Port", "15488", "1"),
  createData("20108", "1-20-2021", "12:55", "Port of Beaumont", "12588", "6"),
  createData("20109", "1-20-2021", "17:58", "Port of Beaumont", "3644", "7"),
  createData("201010", "1-20-2021", "03:15", "Port of Beaumont", "2458", "2"),
  createData("201011", "1-20-2021", "01:65", "Cedar Port", "45263", "2"),
  createData("201012", "1-20-2021", "06:22", "Port of Beaumont", "42582", "6"),
  createData("201013", "1-20-2021", "01:15", "Port of Beaumont", "15263", "1"),
  createData("201014", "1-20-2021", "09:47", "Port of Beaumont", "94152", "2"),
  createData("201015", "1-20-2021", "11:55", "Cedar Port", "2166", "3"),
];
export default function StickyHeadTable() {
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
  return (
    <Grid container xs={12} className="Liq-Container Device">
      <Grid xs={12} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Safety &#38; Testing</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
                <Grid xs={12} container justify="center">
                    <Link to="/enter-railroad-event" className="LinkButton">
                        Enter Railroad Test Event
                    </Link>
                </Grid>
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
                    <Table className="ImpretionRow">
                        <TableBody>
                          <TableRow>
                              <TableCell className="StikyTableNoteTable">
                                <Grid className="StikyTableNote">To View/Edit, swipe left</Grid>
                              </TableCell>
                          </TableRow>
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
                  <TableRow>
                    <TableCell className="EmptyTD">&nbsp;</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12}>
          <TableContainer>
              <Table className="mt30">
                <TableHead>
                  <TableRow>
                    <TableCell className="pt16 pb6">Reviewer Note</TableCell>
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

// export default SafetyTesting;
