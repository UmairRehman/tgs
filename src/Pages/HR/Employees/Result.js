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
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


// First Table
const addresscol = [
    { id: "eid", label: "Employee ID", minWidth: 100, type: "value" },
    { id: "sa", label: "Street Address", minWidth: 100, type: "value" },
    { id: "sa2", label: "Street Address 2", minWidth: 100, type: "value" },
    { id: "cs", label: "City, State", minWidth: 100, type: "value" },
    { id: "zc", label: "Zip Code", minWidth: 100, type: "value" },
    { id: "ed", label: "Edit", minWidth: 50, type: "edit" }
  ];
  
  function addcreateData(
    eid,
    sa,
    sa2,
    cs,
    zc,
    ed
  ) {
    return {
        eid,
        sa,
        sa2,
        cs,
        zc,
        ed
    };
  }
  
  const addrows = [
    addcreateData("1011", "235 T C Mester", "Apartment 40", "Houston, Texas", "402-233-5555"),
  ];

  // Second Table
const CertiCol = [
    { id: "eid", label: "Employee ID", minWidth: 140, type: "value" },
    { id: "lc", label: "License Certificate", minWidth: 160, type: "value" },
    { id: "is", label: "Issue Date", minWidth: 160, type: "value" },
    { id: "ed", label: "Expiry Date", minWidth: 160, type: "value" },
    { id: "edi", label: "Edit", minWidth: 50, type: "edit" }
  ];
  
  function createData(
    eid,
    lc,
    is,
    ed,
    edi
  ) {
    return {
        eid,
        lc,
        is,
        ed,
        edi
    };
  }
  
  const Crtirows = [
    createData("1011", "Backhoe", "3/10/2021", "6/10/2021"),
  ];
const EmployeeResult = () => {
    const [page, setPage] = React.useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
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

//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12} className="Liq-Container HRPortal EmployeeResult">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Employee Lookup</Grid>
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
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Full title
                            </Grid>
                            <Grid xs={5}>
                            Director of Systems
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Location
                            </Grid>
                            <Grid xs={5}>
                            Baytown, Texas
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Supervisor
                            </Grid>
                            <Grid xs={5}>
                            Westmeyer, Ryan
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Department
                            </Grid>
                            <Grid xs={5}>
                            IT
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Sub Department
                            </Grid>
                            <Grid xs={5}>
                            IT & Management Admin
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Hire Date
                            </Grid>
                            <Grid xs={5}>
                            3/10/2021
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid xs={5} className="bold">
                            Termination Date
                            </Grid>
                            <Grid xs={5}>
                            3/10/2021
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>


            {/* Address */}
            <Grid xs={12} className="LiqTables">
                <Grid xs={12} className="mt28 mb14">
                    <Typography variant="h1" component="h2" className="bold f22">
                        Address
                    </Typography>
                </Grid>
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          {addresscol.map((column) => (
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
                      {addrows
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {addresscol.map((column) => {
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



            {/* Certificates & Licenses Table */}
            <Grid xs={12} className="LiqTables">
                <Grid xs={12} className="mt28 mb14">
                    <Typography variant="h1" component="h2" className="bold f22">
                        Certificates & Licenses
                    </Typography>
                </Grid>
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          {CertiCol.map((column) => (
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
                      {Crtirows
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {CertiCol.map((column) => {
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
                <label for="selecteSertificate" className="LinkButton">
                    Add Certificate & License
                </label>
                <input id="selecteSertificate" type="file" className="hide"/>
            </Grid>







            {/* Employee Document */}
            <Grid xs={12} className="mt30">
                <Grid xs={12} className="mb10">
                    <Typography className="bold">
                        Employee Document
                    </Typography>
                </Grid>
                <Grid xs={12} md={8} lg={6} container className="HREmployeeDownloads">
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Application
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Driver License
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Conditional Offer
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Post Conditional
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Driver ineligibility
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Drugs / Background
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Rel & Doc Preview
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Boot Agreement
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        TWIC Card...
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Direct Deposit
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        W-4
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Fuel Card...
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Employment
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        I-9
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Employee Hand...
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        TGS Harassment....
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Safety Handbook.....
                        </Grid>
                        <Button></Button>
                    </Grid>
                    <Grid className="PDFDownload">
                        <Grid className="FileName">
                        Drug / Alcohol.....
                        </Grid>
                        <Button></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                
                <Grid xs={12} md={8} lg={6}>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
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
                        <Grid xs={12} className="mt30 pr40">
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
                <Grid xs={12} className="mt50 pr70">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/employees" className="LinkButtonBack">Back</Link>
                        <Link to="/employees/result" className="LinkButton">Save & Continue</Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>

      

    {/* Modal Address*/}
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
            <TextField id="outlined-basic" label="Type Here" value="1011" disabled variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Street Address 1</Grid>
            <TextField id="outlined-basic" label="Type Here" value="235 T C Mester" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Street Address 2</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Apartment 40" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">City</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Houston" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">State</Grid>
            <TextField id="outlined-basic" label="Type Here" value="Texas" variant="outlined" className="w100p"/>
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Zip</Grid>
            <TextField id="outlined-basic" label="Type Here" value="402-233-5555" variant="outlined" className="w100p"/>
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
            <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p"/>
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
                    shrink: true,
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

export default EmployeeResult;