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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useLocation } from 'react-router'
import { environment } from "../../../environments/environment";
import { useHistory } from "react-router-dom";
import Snackbar from '../../../Components/Snackbar';

/** Local deoendencies & Libraries */
import Services from '../../../Services';

var moment = require('moment-timezone')

const { apiPath } = environment;


const {
  hr,
  employee
} = Services;



const roleFromLocalStorage = localStorage.getItem('role_id')


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
  { id: "PayType.name", label: "Pay Type", minWidth: 160, type: "value" },
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
  { id: "TGSLocation.name", label: "Location", minWidth: 100, type: "value" },
  // { id: "departmentName", label: "Department", minWidth: 100, type: "value" },
  { id: "SubDepartment.name", label: "Sub-Department", minWidth: 100, type: "value" },
  { id: "Employee.firstName", label: "Supervisor", minWidth: 100, type: "value" },
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
  { id: "id", label: "ID", minWidth: 140, type: "value" },
  { id: "name", label: "License Certificate", minWidth: 160, type: "value" },
  { id: "issue_date", label: "Issue Date", minWidth: 160, type: "value" },
  { id: "expiry_date", label: "Expiry Date", minWidth: 160, type: "value" },
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

  let history = useHistory();

  const location = useLocation();

  const [employeeDetails, setEmployeeDetails] = useState({})

  const [files, setFiles] = useState([])

  const [position, setPosition] = useState([])

  const [tgsLocation, setTgsLocation] = useState({})

  const [department, setDepartment] = useState({})

  const [comment, setComment] = useState('')

  const [loader, setLoader] = useState(false)

  const [componentLoader, setComponentLoader] = useState(false)

  const [updateAddress, setUpdateAddress] = useState({})

  const [streedAddress, setStreedAddress] = useState(employeeDetails.address)

  const [streedAddress1, setStreedAddress1] = useState(employeeDetails.address1)

  const [city, setCity] = useState(employeeDetails.city)

  const [stateName, setStateName] = useState(employeeDetails.state)

  const [zip, setZip] = useState(employeeDetails.zip)

  const [updateCertificate, setUpdateCertificate] = useState({})

  const [payRate, setPayRate] = useState([])

  const [certificate, setCertificate] = useState([])

  const [updatedCertificateID, setUpdatedCertificateID] = useState('')

  const [updatedCertificateName, setUpdatedCertificateName] = useState('')

  const [updatedCertificateIssueDate, setUpdatedCertificateIssueDate] = useState('')

  const [updatedCertificateExpiryDate, setUpdatedCertificateExpiryDate] = useState('')

  const [certificateID, setCertificateID] = useState('')

  const [addCertificate, setAddCertificate] = useState(false);

  const [flag, setFlag] = useState(false)





  function terminateEmployee() {
    history.push({
      pathname: '/employees-profile/termination',
      state: empData
    });
  }




  function onUpdateCertificate() {

    let data = {
      name: updatedCertificateName,
      issue_date: moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString(),
      expiry_date: moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString(),
      employee_id: employeeDetails?.id,
      id: updatedCertificateID
    }

    console.log(data)

    try {
      employee.update_employee_certificate(data).then((certificateData) => {
        console.log(certificateData)
        setFlag(true)
        setOpenC(!openCerti);
        setAddCertificate(false)

      }).catch((err) => { console.log(err) });

    }
    catch (exc) {
      console.log(exc);
    }

  }

  // update Pay 

  function onUpdatePay(e) {
    e.preventDefault();

    let data = {
      position_level: 1,
      rate: updatePay.rate,
      pay_type: updatePay.pay_type,
      employee_id: employeeDetails?.id,
      start_date: updatePayDate
    }
    try {
      hr.updatePay(data).then((certificateData) => {
        console.log(certificateData)
        setFlag(true)
        setOpenC(!openCerti);

      }).catch((err) => { console.log(err) });

      setOpenPosition(false)


    }
    catch (exc) {
      console.log(exc);

    }

  }

  // update POsition 

  function onUpdatePosition(e) {
    e.preventDefault();

    let data = {
      full_title: updatePositon?.fullTitle,
      position_level: '1',
      position_category: updatePositon?.category,
      location_id: updatePositon?.location,
      SubDepartment_Id: updatePositon?.subDepartment,
      Supervisor_Id: updatePositon?.supervisor,
      employee_id: updatePositon?.employeeId,
      start_date: startDate
    }

    console.log(data)

    try {
      hr.updatePosition(data).then((certificateData) => {
        console.log(certificateData)
        setFlag(true)
        setOpenC(!openCerti);

      }).catch((err) => { console.log(err) });

      setOpenPosition(false)


    }
    catch (exc) {
      console.log(exc);

    }

  }

  const [paytypeDropdown, setPaytypeDropdown] = useState([]);


  const [lists, setLists] = useState({
    users: [],
    positions: [],
    departments: [],
    sites: []
  })

  useEffect(async () => {

    let departmentList = await employee.get_department_listing()
    if (departmentList.httpStatus == 200) {
      departmentList = departmentList.data;
      console.log(departmentList);
    }



    let jobCategoryList = await employee.get_job_category_listing()
    if (jobCategoryList.httpStatus == 200) {
      jobCategoryList = jobCategoryList.data;
      console.log(jobCategoryList);
    }



    let siteList = await employee.get_site_listing()
    if (siteList.httpStatus == 200) {
      siteList = siteList.data;
      console.log(siteList);
    }


    let userList = await employee.get_employee_listing()
    if (userList.httpStatus == 200) {
      userList = userList.data;
      userList.map(row => {
        row.name = `${row.firstName} ${row.lastName}`
      })
    }

    setLists({ ...lists, users: userList, positions: jobCategoryList, departments: departmentList, sites: siteList })


    let payLocationData = await hr.pay_type();
    setPaytypeDropdown(payLocationData.data);

  }, [])


  const [empData, setEmpData] = useState({})


  useEffect(async () => {
    window.scrollTo(0, 0);

    let id = location?.state;

    try {
      hr.getEmployee({ id }).then((applicantDataHistory) => {
        console.log(applicantDataHistory)
        setComponentLoader(true)
        setEmployeeDetails(applicantDataHistory?.employee[0])
        setEmpData(applicantDataHistory)
        setComponentLoader(false)
        setFiles(applicantDataHistory?.files)
        setPosition(applicantDataHistory?.position)
        setPayRate(applicantDataHistory.pay)

        setTgsLocation(applicantDataHistory?.employee[0].TGSLocation)
        setDepartment(applicantDataHistory?.employee[0]?.SubDepartment)
        setZip(applicantDataHistory?.employee[0].zip)
        setStateName(applicantDataHistory?.employee[0].state)
        setCity(applicantDataHistory?.employee[0].city)
        setStreedAddress(applicantDataHistory?.employee[0].address)
        setStreedAddress1(applicantDataHistory?.employee[0].address1)

      }).catch((err) => { console.log(err) });

    }
    catch (exc) {
      console.log(exc);
    }



    // certificate api 

    try {
      hr.getCertificate({ id }).then((certificateData) => {
        console.log(certificateData)
        certificateData.data.rows.forEach(element => {
          element.issue_date = moment( new Date(element.issue_date) ).format('DD-MM-YYYY')
          element.expiry_date = moment( new Date(element.expiry_date) ).format('DD-MM-YYYY')
        });

        setCertificate(certificateData.data.rows)


      }).catch((err) => { console.log(err) });

    }
    catch (exc) {
      console.log(exc);
    }


  }, [flag]);


  // For Modal
  const [openAdd, setOpenA] = React.useState(false);
  const [openCerti, setOpenC] = React.useState(false);

  const [openPosition, setOpenPosition] = React.useState(false);

  const [updatePositon, setUpdatePositon] = useState({
    employeeId: '',
    fullTitle: '',
    category: '',
    location: '',
    subDepartment: '',
    supervisor: ''
  })

  const [startDate, setStartDate] = useState('')
  const [updatePayDate, setUpdatePayDate] = useState('')


  function editPosiotion(row) {
    setOpenPosition(true)

    console.log(row)

    setUpdatePositon({ ...updatePositon, employeeId: row.EmployeeId, fullTitle: row.FullTitle, category: row.EmployeeId, location: row.EmployeeId, subDepartment: row.SubDepartment.id, supervisor: row.firstName })

    console.log(updatePositon)

  }

  const [openPay, setOpenPay] = useState(false)
  const [updatePay, setUpdatePay] = useState({
    position_level: '',
    rate: '',
    pay_type: '',
    employee_id: '',
    start_date: ""
  })

  function editPay(row) {
    console.log(row)
    setOpenPay(true)
    setUpdatePay({ ...updatePay, position_level: '1', rate: row.Rate, pay_type: row.PayType.name, employee_id: row.EmployeeId })
    console.log("---------------")
    console.log(updatePay)

  }

  function editPayClose() {
    setOpenPay(false)
  }

  function editPosiotionClose() {
    setOpenPosition(false)
  }

  useEffect(() => {
    console.log(updatePositon)
    return () => {

    }
  }, [updatePositon])


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClickOpenAdd(row) {

    console.log(row)
    setOpenA(true);

  };

  const handleCloseAdd = () => {
    setOpenA(false);
  };

  function getCertificate(row) {

    
    setUpdateCertificate(row)
    setUpdatedCertificateID(row.id)
    setUpdatedCertificateName(row.name)
    setUpdatedCertificateIssueDate(row.issue_date)
    setUpdatedCertificateExpiryDate(row.expiry_date)



    setOpenC(true);
    console.log(row)
  };

  const openCertificateModal = () =>{
    setAddCertificate(true)
    setOpenC(true)
  }
  const handleCloseCerti = () => {
    setAddCertificate(false)
    setOpenC(false);
  };

  const onAddCertificate = async () => {

    let data = {
      name: updatedCertificateName,
      issue_date: moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString(),
      expiry_date: moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString(),
      employee_id: employeeDetails?.id
    }

    console.log(data)

    try {
      let result = await employee.add_employee_certificate(data)
      if(result.httpStatus==200) {
        console.log(result)
        setFlag(true)
        setOpenC(!openCerti);
        setAddCertificate(false)
      }
    }
    catch (exc) {
      console.log(exc);
    }
  }

  const handleCertificate = (e) =>{
    e.preventDefault();

    
    if(addCertificate)
      onAddCertificate()  
    else
      onUpdateCertificate()
    
  }


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
      employee_id: employeeDetails?.id
    }
    console.log(data)

    try {
      hr.updateEmployeeAddress(data)
        .then((update) => {
          setUpdateAddress(update);
          console.log(update)

          setOpenA(false);

        }).then(() => {
          console.log('emp', employeeDetails.id)
          hr.getEmployee(employeeDetails).then((applicantDataHistory) => {
            setLoader(true);
            console.log(applicantDataHistory)
            setComponentLoader(true)
            setEmployeeDetails(applicantDataHistory?.employee[0])
            console.log(employeeDetails)
            setComponentLoader(false)
            setFiles(applicantDataHistory?.files)
            console.log(files)
            setPosition(applicantDataHistory?.position)

            setTgsLocation(applicantDataHistory?.employee[0].TGSLocation)
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
                        {employeeDetails?.id}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        First Name
                      </Grid>
                      <Grid xs={5}>
                        {employeeDetails?.firstName}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Last Name
                      </Grid>
                      <Grid xs={5}>
                        {employeeDetails?.lastName}

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
                        {`${employeeDetails?.SEmployee?.firstName} ${employeeDetails?.SEmployee?.lastName}`}
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
                    {
                      (employeeDetails?.hireDate) && 
                      (<ListItem container className="p0 pt6 pb20">
                      <Grid xs={5} className="bold">
                        Hire Date
                      </Grid>
                      <Grid xs={5}>
                        {employeeDetails?.hireDate}
                      </Grid>
                      </ListItem>)
                    }
                    { (employeeDetails?.terminateDate) &&
                      (<ListItem container className="p0 pt6 pb20">
                        <Grid xs={5} className="bold">
                          Termination Date
                        </Grid>
                        <Grid xs={5}>
                          {employeeDetails?.terminateDate}
                        </Grid>
                      </ListItem>)
                    }
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
                        {[employeeDetails]
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
                        {certificate
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
                                        <Button onClick={() => getCertificate(row)} className="EditIcon"></Button>
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









              {roleFromLocalStorage == 5 ?
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
                                      var ex = column.id;
                                      var value = row;
                                      // const value = row[column.id];
                                      while (ex.includes(".")) {
                                        let v = ex.split('.');
                                        value = value[v[0]];
                                        ex = v[1];
                                        // code block to be executed
                                      }
                                      value = value[ex];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.type == "edit" ? (

                                            <Button onClick={() => editPosiotion(row)} className="EditIcon"></Button>
                                          )
                                            : (
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
                            {payRate
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}
                                  >
                                    {PayCol.map((column) => {
                                      var ex = column.id;
                                      var value = row;
                                      // const value = row[column.id];
                                      while (ex.includes(".")) {
                                        let v = ex.split('.');
                                        value = value[v[0]];
                                        ex = v[1];
                                        // code block to be executed
                                      }
                                      value = value[ex];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.type == "edit" ? (
                                            <Button onClick={() => editPay(row)} className="EditIcon"></Button>
                                          )
                                            : (
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
                    <Button onClick={terminateEmployee} className="LinkButton">
                      Terminate Employee
                    </Button>
                  </Grid>
                </div>
                : ""
              }


              {/* Add Certificate & License Button */}
              <Grid xs={12} container className="mt40">
                <Button for="selecteSertificate" className="LinkButton" onClick={openCertificateModal}>
                  Add Certificate & License
                </Button>
                {/* <input id="selecteSertificate" type="file" className="hide" /> */}
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

                        <a href={`${apiPath}/employee/applicant/download?id=${employeeDetails?.id}&name=${name}`} target="_blank">{name}</a>

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
                <TextField id="outlined-basic" label="Type Here" value={employeeDetails?.id} disabled variant="outlined" className="w100p" />
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
          <form onSubmit={handleCertificate}>
            <DialogContent>
              {
                (!addCertificate)&&
                (
                  <Grid xs={12} className="mbold">
                    <Grid xs={12} className="pl14">Certificate ID</Grid>
                    <TextField id="outlined-basic" required value={updateCertificate?.id} variant="outlined" className="w100p" />
                  </Grid>
                )
              }
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">License Certificate</Grid>
                <TextField id="outlined-basic" required value={updatedCertificateName} onChange={(e) => setUpdatedCertificateName(e.target.value)} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30 DatePickerCss">
                <Grid xs={12} className="pl14">Issue Date</Grid>
                <TextField
                  id="date"
                  type="date"
                  className="DateTimePicker"
                  value={moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString()}
                  onChange={(e) => setUpdatedCertificateIssueDate(moment(new Date(e.target.value)).format('YYYY-MM-DD').toString())}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    max: moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString()
                  }}
                />
              </Grid>
              <Grid xs={12} className="mbold mt30 DatePickerCss">
                <Grid xs={12} className="pl14">Expiry Date</Grid>
                {console.log(updatedCertificateExpiryDate)}
                <TextField
                  id="date"
                  type="date"
                  className="DateTimePicker"
                  value={moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString()}

                  onChange={(e) =>
                    setUpdatedCertificateExpiryDate(moment(new Date(e.target.value)).format('YYYY-MM-DD').toString())}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString()
                  }}
                />
              </Grid>
              <Grid xs={12} container justify="center" className="mt30">
                <Button type="submit" className="LinkButton" >Save</Button>
              </Grid>
            </DialogContent>
          </form>
        </Dialog>


        {/* Modal Position*/}
        <Dialog
          fullScreen={fullScreen}
          open={openPosition}
          onClose={editPosiotionClose}
          className="BroadcastMessageModal LiqTables"
          aria-labelledby="responsive-dialog-title"
        >
          <Button autoFocus onClick={editPosiotionClose} className="ModalClose">
          </Button>
          <form onSubmit={onUpdatePosition}>
            <DialogContent>
              <Grid xs={12} className="mbold">
                <Grid xs={12} className="pl14">Employee ID</Grid>
                <TextField id="outlined-basic" required value={updatePositon?.employeeId} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Full title</Grid>
                <TextField id="outlined-basic" required value={updatePositon.fullTitle} onChange={(e) => setUpdatePositon({ ...updatePositon, fullTitle: e.target.value })} variant="outlined" className="w100p" />
              </Grid>


              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Location</Grid>



                <Autocomplete
                  className="w100p"
                  id="checkboxes-tags-demo"
                  onChange={(event, newValue) => { setUpdatePositon({ ...updatePositon, location: newValue.id }) }}
                  options={lists.sites}
                  getOptionLabel={option => (option.title)}
                  renderInput={(params) => (
                    <TextField required={true} {...params} variant="outlined" />
                  )}
                />


              </Grid>

              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Sub-Department</Grid>

                <Autocomplete
                  className="w100p"
                  id="checkboxes-tags-demo"
                  onChange={(event, newValue) => { setUpdatePositon({ ...updatePositon, subDepartment: newValue.id }) }}
                  options={lists.departments}
                  getOptionLabel={option => (option.title)}
                  renderInput={(params) => (
                    <TextField required={true} {...params} variant="outlined" />
                  )}
                />

              </Grid>

              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Supervisor</Grid>

                <Autocomplete
                  className="w100p"
                  id="checkboxes-tags-demo"
                  value={updatePositon.supervisor}
                  onChange={(event, newValue) => { setUpdatePositon({ ...updatePositon, supervisor: newValue.id }) }}
                  options={lists.users}
                  getOptionLabel={option => (option.name)}
                  renderInput={(params) => (
                    <TextField required={true} {...params} variant="outlined" />
                  )}
                />

              </Grid>



              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Started Date</Grid>
                <TextField
                  required={true}
                  id="date"
                  type="date"
                  className="DateTimePicker"
                  onChange={(e, value) => setStartDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>



              <Grid xs={12} container justify="center" className="mt30">
                <Button type="submit" className="LinkButton">Save</Button>
              </Grid>
            </DialogContent>
          </form>
        </Dialog>

        <Snackbar
        ></Snackbar>




        {/* Modal pay  */}
        <Dialog
          fullScreen={fullScreen}
          open={openPay}
          onClose={editPayClose}
          className="BroadcastMessageModal LiqTables"
          aria-labelledby="responsive-dialog-title"
        >


          <Button autoFocus onClick={editPayClose} className="ModalClose">
          </Button>

          <form onSubmit={onUpdatePay}>
            <DialogContent>
              <Grid xs={12} className="mbold">
                <Grid xs={12} className="pl14">Employee ID</Grid>
                <TextField id="outlined-basic" required value={updatePay?.employee_id} variant="outlined" className="w100p" />
              </Grid>
              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Pay Type</Grid>

                <Autocomplete
                  className="w100p"
                  id="combo-box-demo"
                  // onChange={(e, value) => {
                  //   setpartType(value.id);
                  // }}
                  onChange={(event, newValue) => setUpdatePay({ ...updatePay, pay_type: newValue.id })}

                  options={paytypeDropdown}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      required={true}
                      {...params}
                      label="Select"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Pay Rate</Grid>
                <TextField id="outlined-basic" required value={updatePay.rate} onChange={(e) => setUpdatePay({ ...updatePay, rate: e.target.value })} variant="outlined" className="w100p" />
              </Grid>

              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">Updated Date</Grid>
                <TextField
                  required={true}
                  id="date"
                  type="date"
                  className="DateTimePicker"
                  onChange={(e, value) => setUpdatePayDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid xs={12} container justify="center" className="mt30">
                <Button type="submit" className="LinkButton">Save</Button>
              </Grid>
            </DialogContent>
          </form>
        </Dialog>
      </Grid >
  );
}


export default EmployeeResult;