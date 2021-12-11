import React, { useState, useEffect } from "react";
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
import { useLocation } from 'react-router'
import { environment } from "../../../environments/environment";
import { useHistory } from "react-router-dom";
/** Local deoendencies & Libraries */
import Services from '../../../Services';

const { apiPath } = environment;


const {
  hr
} = Services;

const roleFromLocalStorage = localStorage.getItem('role_id')

// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


// First Table
const addresscol = [
  { id: "id", label: "Employee ID", minWidth: 100, type: "value" },
  { id: "address", label: "Street Address", minWidth: 100, type: "value" },
  { id: "address1", label: "Street Address 2", minWidth: 100, type: "value" },
  { id: "city", label: "City, State", minWidth: 100, type: "value" },
  { id: "zip", label: "Zip Code", minWidth: 100, type: "value" },
  { id: "ed", label: "Edit", minWidth: 50, type: "edit" }
];

// Second Table
const PayCol = [
  { id: "EmployeeId", label: "Employee ID", minWidth: 140, type: "value" },
  { id: "PayType", label: "Pay Type", minWidth: 160, type: "value" },
  { id: "Rate", label: "Pay Rate", minWidth: 160, type: "value" },
  { id: "EffectiveDate", label: "Rate Effective Date", minWidth: 160, type: "value" },
  // { id: "sp", label: "Supervisor", minWidth: 160, type: "value" },
  { id: "edi", label: "Edit", minWidth: 50, type: "edit" }
];

// First Table
const Positioncol = [
  { id: "EmployeeId", label: "Employee ID", minWidth: 100, type: "value" },
  // { id: "lv", label: "Level", minWidth: 100, type: "value" },
  { id: "FullTitle", label: "Full title", minWidth: 100, type: "value" },
  { id: "JobCategoryId", label: "Category", minWidth: 100, type: "value" },
  { id: "TGSLocation.address", label: "Location", minWidth: 100, type: "value" },
  { id: "departmentName", label: "Department", minWidth: 100, type: "value" },
  { id: "SubDepartmentName", label: "Sub-Department", minWidth: 100, type: "value" },
  { id: "SupervisorName", label: "Supervisor", minWidth: 100, type: "value" },
  { id: "EffectiveDate", label: "Hire Date", minWidth: 100, type: "value" },
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

  let history = useHistory();

  const location = useLocation();

  const [emplpyeeDetails, setEmplpyeeDetails] = useState({})

  const [files, setFiles] = useState([])

  const [position, setPosition] = useState([])

  const [tgsLocation, setTgsLocation] = useState({})

  const [department, setDepartment] = useState({})

  const [comment, setComment] = useState('')
  const [loader, setLoader] = useState(false)
  const [componentLoader, setComponentLoader] = useState(false)

  const [updateAddress, setUpdateAddress] = useState({})

  const [streedAddress, setStreedAddress] = useState(emplpyeeDetails.address)
  const [streedAddress1, setStreedAddress1] = useState(emplpyeeDetails.address1)
  const [city, setCity] = useState(emplpyeeDetails.city)
  const [stateName, setStateName] = useState(emplpyeeDetails.state)
  const [zip, setZip] = useState(emplpyeeDetails.zip)

  const [payRate, setPayRate] = useState({})


  useEffect(async () => {
    window.scrollTo(0, 0);

    let id = location?.state;

    try {
      hr.getEmployee({ id }).then((applicantDataHistory) => {
        console.log(applicantDataHistory)
        setComponentLoader(true)
        setEmplpyeeDetails(applicantDataHistory?.employee[0])
        console.log(emplpyeeDetails)
        setComponentLoader(false)
        setFiles(applicantDataHistory?.files)
        console.log(files)
        setPosition(applicantDataHistory?.position)
        setTgsLocation(applicantDataHistory?.TGSLocation)
        setDepartment(applicantDataHistory?.employee[0]?.SubDepartment)
        setZip(applicantDataHistory?.employee[0].zip)
        setStateName(applicantDataHistory?.employee[0].state)
        setCity(applicantDataHistory?.employee[0].city)
        setStreedAddress(applicantDataHistory?.employee[0].address)
        setStreedAddress1(applicantDataHistory?.employee[0].address1)

        setPayRate(applicantDataHistory?.pay)

      }).catch((err) => { console.log(err) });

    }
    catch (exc) {
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


  function onSubmitEmploye(event) {
    event.preventDefault()

    let data = {
      comment: comment
    }



  }



  async function onSubmitModal(event) {

    event.preventDefault()

    let data = {
      address_1: streedAddress,
      address_2: streedAddress1,
      state: stateName,
      zip: zip,
      employee_id: emplpyeeDetails?.id
    }
    console.log(data)

    try {
      hr.updateEmployeeAddress(data)
        .then((update) => {
          setUpdateAddress(update);
          console.log(update)

          setOpenA(false);

        }).then(() => {
          console.log('emp', emplpyeeDetails.id)
          hr.getEmployee(emplpyeeDetails).then((applicantDataHistory) => {
            setLoader(true);
            console.log(applicantDataHistory)
            setComponentLoader(true)
            setEmplpyeeDetails(applicantDataHistory?.employee[0])
            console.log(emplpyeeDetails)
            setComponentLoader(false)
            setFiles(applicantDataHistory?.files)
            console.log(files)
            setPosition(applicantDataHistory?.position)
            setTgsLocation(applicantDataHistory?.TGSLocation)
            setDepartment(applicantDataHistory?.employee[0]?.SubDepartment)
            setZip(applicantDataHistory?.employee[0].zip)
            setStateName(applicantDataHistory?.employee[0].state)
            setCity(applicantDataHistory?.employee[0].city)
            setStreedAddress(applicantDataHistory?.employee[0].address)
            setStreedAddress1(applicantDataHistory?.employee[0].address1)
            setLoader(false);

          }).catch((err) => { console.log(err) });
        })
        .catch(err => {
          console.log(err)
        })
    } catch (exc) {
      console.log(exc);
    }

  }

  return (
    loader ? <div>Loading...</div> :
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

              {/* Employee Details List */}
              <Grid xs={12}>
                <Grid xs={6}>
                  <List>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Employee ID
                      </Grid>
                      <Grid xs={5}>
                        {emplpyeeDetails?.id}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        First Name
                      </Grid>
                      <Grid xs={5}>
                        {emplpyeeDetails?.firstName}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Last Name
                      </Grid>
                      <Grid xs={5}>
                        {emplpyeeDetails?.lastName}

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
                        {tgsLocation?.name}
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
                        Sub Department
                      </Grid>
                      <Grid xs={5}>
                        {department?.name}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Hire Date
                      </Grid>
                      <Grid xs={5}>
                        {emplpyeeDetails?.hireDate}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Termination Date
                      </Grid>
                      <Grid xs={5}>
                        {emplpyeeDetails?.terminateDate}
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
                        {[emplpyeeDetails]
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









              {roleFromLocalStorage == 3 ?
                <div>

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
                            {position
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
                            {[payRate]
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


                  <Grid xs={12} container className="mt40">
                    <Link to="/employees-profile/termination" className="LinkButton">
                      Terminate Employee
                    </Link>
                  </Grid>
                </div>
                : "null"
              }


              {/* Add Certificate & License Button */}
              <Grid xs={12} container className="mt40">
                <label for="selecteSertificate" className="LinkButton">
                  Add Certificate & License
                </label>
                <input id="selecteSertificate" type="file" className="hide" />
              </Grid>







              {/* Employee Document */}
              <Grid xs={12} className="mt30">
                <Grid xs={12} className="mb10">
                  <Typography className="bold">
                    Employee Document
                  </Typography>
                </Grid>
                <Grid xs={12} md={8} lg={6} container className="HREmployeeDownloads">
                  {files.map((name) => (
                    <Grid className="PDFDownload">
                      <Grid className="FileName">
                      
                        <a href={`${apiPath}/employee/applicant/download?id=${emplpyeeDetails?.id}&name=${name}`}target="_blank">{name}</a>

                      </Grid>
                      {/* <Button></Button> */}
                    </Grid>
                  ))}

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

                  <form onSubmit={onSubmitEmploye}>
                    {/* <Grid xs={12} container>
                      <Grid xs={12} className="mt30 pr40">
                        <Grid xs={12}>
                          <Grid xs={12} className="mbold">
                            Comments
                          </Grid>
                          <Grid xs={12} className="mt14">
                            <TextareaAutosize onChange={(e) => setComment(e.target.value)} className="w100p" rowsMin={6} placeholder="Comment here" required={true} />
                          </Grid>
                          <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                            Please leave this field empty if you have no comments
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid> */}
                    <Grid xs={12} className="mt50 pr70">
                      <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/employees" className="LinkButtonBack">Back</Link>
                        <Button type='submit' className="LinkButton">Save & Continue</Button>
                        {/* to="/employees/result"  */}
                      </Grid>
                    </Grid>
                  </form>
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
            <form onSubmit={onSubmitModal}>
              <Grid xs={12} className="mbold">
                <Grid xs={12} className="pl14">Employee ID</Grid>
                <TextField id="outlined-basic" label="Type Here" value={emplpyeeDetails?.id} disabled variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Street Address1</Grid>
                <TextField id="outlined-basic" label="Type Here" required={true} defaultValue={streedAddress} onChange={(e) => setStreedAddress(e.target.value)} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Street Address 2</Grid>
                <TextField id="outlined-basic" label="Type Here" required={true} defaultValue={streedAddress1} onChange={(e) => setStreedAddress1(e.target.value)} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">City</Grid>
                <TextField id="outlined-basic" label="Type Here" required={true} defaultValue={city} onChange={(e) => setCity(e.target.value)} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">State</Grid>
                <TextField id="outlined-basic" label="Type Here" required={true} defaultValue={stateName} onChange={(e) => setStateName(e.target.value)} ariant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Zip</Grid>
                <TextField id="outlined-basic" label="Type Here" required={true} defaultValue={zip} onChange={(e) => setZip(e.target.value)} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} container justify="center" className="mt30">
                <Button type="submit" className="LinkButton">Save</Button>
              </Grid>
            </form>
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
              <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p" />
            </Grid>
            <Grid xs={12} className="mbold mt30">
              <Grid xs={12} className="pl14">License Certificate</Grid>
              <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p" />
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




      </Grid >
  );
}

export default EmployeeResult;