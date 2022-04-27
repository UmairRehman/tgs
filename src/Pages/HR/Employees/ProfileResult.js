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
  Paper,
  List,
  ListItem,
  Dialog,
  DialogContent,
  DialogContentText,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";

import LeftControl from "../../../Components/LeftControl";
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";

/** Local deoendencies & Libraries */
import Services from '../../../Services';


const {
  hr
} = Services;
// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


// First Table
const Positioncol = [
    { id: "peid", label: "Employee ID", minWidth: 100, type: "value" },
    { id: "lv", label: "Level", minWidth: 100, type: "value" },
    { id: "ft", label: "Full title", minWidth: 100, type: "value" },
    { id: "ct", label: "Category", minWidth: 100, type: "value" },
    { id: "lc", label: "Location", minWidth: 100, type: "value" },
    { id: "dp", label: "Department", minWidth: 100, type: "value" },
    { id: "sd", label: "Sub-Department", minWidth: 100, type: "value" },
    { id: "sp", label: "Supervisor", minWidth: 100, type: "value" },
    { id: "hd", label: "Hire Date", minWidth: 100, type: "value" },
    { id: "ed", label: "Edit", minWidth: 50, type: "edit" }
  ];
  
  function PositionData(
    peid,
    lv,
    ft,
    ct,
    lc,
    dp,
    sd,
    sp,
    hd,
    ed
  ) {
    return {
        peid,
        lv,
        ft,
        ct,
        lc,
        dp,
        sd,
        sp,
        hd,
        ed
    };
  }
  
  const Posrows = [
    PositionData("1011", "Director", "Director of Systems & Technologies", "Management", "Baytown, Texas (Cedar Port)", "IT", "IT Management & Admin", "Jhon Doe", "3/10/2021"),
  ];

  // Second Table
const PayCol = [
    { id: "eid", label: "Employee ID", minWidth: 140, type: "value" },
    { id: "pt", label: "Pay Type", minWidth: 160, type: "value" },
    { id: "pr", label: "Pay Rate", minWidth: 160, type: "value" },
    { id: "red", label: "Rate Effective Date", minWidth: 160, type: "value" },
    { id: "sp", label: "Supervisor", minWidth: 160, type: "value" },
    { id: "edi", label: "Edit", minWidth: 50, type: "edit" }
  ];
  
  function PayData(
    eid,
    pt,
    pr,
    red,
    sp,
    edi
  ) {
    return {
        eid,
        pt,
        pr,
        red,
        sp,
        edi
    };
  }
  
  const Payrows = [
    PayData("1011", "FT-Hourly", "$15.00", "1/1/2021", "Jhon Doe"),
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

const ProfileResult = () => {


    let history = useHistory();

    const location = useLocation();

    const [page, setPage] = React.useState(0);

    const [emplpyeeData, setEmplpyeeData] = useState({})

    useEffect(async() => {
        
      window.scrollTo(0, 0);

      let id = location?.state;
      console.log(id)


      try{
        let data1 = await hr.getEmployee({id}) ;
        console.log(data1)    

        history.push({
          pathname : "/employees/result",
          state: data1?.employee[0]?.id
        });
      
      }
      catch(exc){
        console.log(exc);
      }

    }, []);

    // For Modal
    const [openAdd, setOpenA] = React.useState(false);
    const [openCerti, setOpenC] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpenAdd = () => {
        setOpenA(true);
    };
    const handleCloseAdd = () => {
        setOpenA(false);
    };
    const handleClickOpenCerti = () => {
        setOpenC(true);
    };
    const handleCloseCerti = () => {
        setOpenC(false);
    };

  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Employee Profile</Grid>
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
                <Grid xs={6}>
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
                    </List>
                </Grid>
            </Grid>


            {/* Position */}
            <Grid xs={12} className="LiqTables">
                <Grid xs={12} className="mt28 mb14">
                    <Typography variant="h1" component="h2" className="bold f22">
                        Position
                    </Typography>
                </Grid>
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          {Positioncol.map((column) => (
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
                      {Posrows
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {Positioncol.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.type == "edit" ? (
                                        <Button onClick={handleClickOpenAdd} className="EditIcon"></Button>
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
                </Paper>
            </Grid>



            {/* Pay Details */}
            <Grid xs={12} className="LiqTables">
                <Grid xs={12} className="mt28 mb14">
                    <Typography variant="h1" component="h2" className="bold f22">
                        Pay Details
                    </Typography>
                </Grid>
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          {PayCol.map((column) => (
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
                      {Payrows
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {PayCol.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.type == "edit" ? (
                                        <Button onClick={handleClickOpenCerti} className="EditIcon"></Button>
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
                </Paper>
            </Grid>

            {/* Add Certificate & License Button */}
            <Grid xs={12} container className="mt40">
                <Link to="/employees-profile/termination" className="LinkButton">
                    Terminate Employee
              </Link>
            </Grid>

            <Grid xs={12} container className="mt20">
                <Grid xs={12} md={8} lg={5}>
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
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={5} container justify="space-between">
                        <Link to="/employees" className="LinkButtonBack">Back</Link>
                        <Link to="/employees/result" className="LinkButton">Save & Continue</Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>

      

    {/* Position*/}
    <Dialog
        fullScreen={fullScreen}
        open={openAdd}
        onClose={handleCloseAdd}
        className="BroadcastMessageModal LiqTables"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={handleCloseAdd} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12} className="mbold">
            <Grid xs={12} className="pl14">Employee ID</Grid>
            <TextField id="outlined-basic" value="11001" disabled variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Level</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Director" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Full Title</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Director of Systems & Technologies" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Category</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Management" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Location</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Baytown, Texas (Cedar Port)" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Department</Grid>
            <TextField id="outlined-basic" label="Type Here" value="IT" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Sub-Department</Grid>
            <TextField id="outlined-basic" label="Type Here" value="IT Management & Admin" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Supervisor</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Jhon Doe" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Hire Date</Grid>
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
          <Grid xs={12} container justify="center" className="mt30">
            <Button className="LinkButton">Save</Button>
          </Grid>
        </DialogContent>
      </Dialog>



      {/* Modal Certificate*/}
    <Dialog
        fullScreen={fullScreen}
        open={openCerti}
        onClose={handleCloseCerti}
        className="BroadcastMessageModal LiqTables"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={handleCloseCerti} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12} className="mbold">
            <Grid xs={12} className="pl14">Employee ID</Grid>
            <TextField id="outlined-basic" label="Type Here" value="11001" disabled variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">License Certificate</Grid>
            <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30 DatePickerCss">
            <Grid xs={12} className="pl14">Issue Date</Grid>
            <TextField
                id="date"
                type="date"
                className="DateTimePicker"
                defaultValue="YY-MM-DD"
                InputLabelProps={{
                    shrink: false,
                }}
            />
          </Grid>
          <Grid xs={12} className="mbold mt30 DatePickerCss">
            <Grid xs={12} className="pl14">Expiry Date</Grid>
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
          <Grid xs={12} container justify="center" className="mt30">
            <Button className="LinkButton">Save</Button>
          </Grid>
        </DialogContent>
      </Dialog>




    </Grid>
  );
}

export default ProfileResult;