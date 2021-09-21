import React, {useState,useEffect} from "react";
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
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
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
    { title: 'Approve'},
    { title: 'Not Approve' },
    { title: 'Pending' }
];
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
const FailPass = [
    { title: 'Pass'},
    { title: 'Fail' },
    { title: 'Pending' }
];

const NewHireStep2 = () => {
    const [page, setPage] = React.useState(0);
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
          <Grid id="PageTitle">New Applicant - Step 2</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage BlueHeadTable FormTableArea">
            <Grid xs={12} className="LiqTables">
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
                                      {value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
            </Grid>
            <Grid xs={12} md={8} lg={6}>
                <Grid xs={12} container className="LRM40">
                    <Grid xs={6} className="mt30 pr20">
                        <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                                Step 2 Approval
                            </Grid>
                            <Grid xs={12} className="mt14">
                                <Autocomplete
                                    className="w100p"
                                    id="combo-box-demo"
                                    options={Approval}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={6} container className="mt30 pl20">
                        <Grid xs={6} className="pr20">
                            <Grid xs={12} className="mbold mb14">
                                Date
                            </Grid>
                            <TextField id="outlined-basic" label="3/10/2021" disabled variant="outlined" className="w100p"/>
                        </Grid>
                        <Grid xs={6} className="pl20">
                            <Grid xs={12} className="mbold mb14">
                                Time
                            </Grid>
                            <TextField id="outlined-basic" label="04:05 PM" disabled variant="outlined" className="w100p"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Drug Test Date
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
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Drug Test
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={FailPass}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Background Completed At
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
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Background Check
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={FailPass}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12} className="mbold">
                                Hire Date
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
                    <Grid xs={12} container justify="space-between" className="mt50">
                        <Link to="/new-hire-queue/234" className="LinkButtonBack">Back</Link>
                        <Link to="/new-hire-queue/step/1" className="LinkButton">Save & Continue</Link>
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

export default NewHireStep2;
