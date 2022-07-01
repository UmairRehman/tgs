import React, { useState, useEffect } from "react";
import Select from 'react-select';

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
import DatePicker from "react-date-picker";

var moment = require('moment-timezone')

const { apiPath } = environment;


const {
  hr,
  employee
} = Services;


const userProfile = JSON.parse(localStorage.getItem("user_profile"));

if (userProfile) {
  var { EmployeeStatusId, role_id } = userProfile;
  // console.log(userProfile)
}

// First Table
const addresscol = [
  { id: "id", label: "Employee ID", minWidth: 100, type: "value" },
  { id: "address", label: "Street Address", minWidth: 100, type: "value" },
  { id: "address1", label: "Street Address 2", minWidth: 100, type: "value" },
  { id: "city", label: "City, State", minWidth: 100, type: "value" },
  { id: "zip", label: "Zip Code", minWidth: 100, type: "value" },
  { id: "ed", label: "Edit", minWidth: 50, type: "edit" }
];

const Lisencecertificate = [
  { label: "Conductor", value: 1 },
  { label: "Student Engineer", value: 2 },
  { label: "Engineer", value: 3 },
  { label: "Qualified Engineer", value: 4 },
  { label: "Aerial Lift", value: 5 },
  { label: "Backhoe", value: 6 },
  { label: "Backhoe with Forks", value: 7 },
  { label: "Compactor", value: 8 },
  { label: "Dozer", value: 9 },
  { label: "Drump Truck", value: 10 },
  { label: "Excavator", value: 11 },
  { label: "Forklift", value: 12 },
  { label: "FrontEnd Loader", value: 13 },
  { label: "FrontEnd Loader with Forks", value: 14 },
  { label: "Grader", value: 15 },
  { label: "Regualator", value: 16 },
  { label: "Rigger", value: 17 },
  { label: "Tamper", value: 18 },
  { label: "Truck Mounted Services Crane", value: 19 },

]

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
  { id: "JobCategory.name", label: "Category", minWidth: 100, type: "value" },
  { id: "TGSLocation.name", label: "Location", minWidth: 100, type: "value" },
  // { id: "departmentName", label: "Department", minWidth: 100, type: "value" },
  { id: "SubDepartment.name", label: "Sub-Department", minWidth: 100, type: "value" },
  { id: "Employee.firstName", label: "Supervisor", minWidth: 100, type: "value" },

  { id: "EffectiveDate", label: "Start Date", minWidth: 100, type: "value" },
  // { id: "ed", label: "Edit", minWidth: 50, type: "edit" }
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
  { id: "name", label: "License", minWidth: 160, type: "value" },
  { id: "issue_date", label: "Issue Date", minWidth: 160, type: "value" },
  { id: "expiry_date", label: "Expire Date", minWidth: 160, type: "value" },
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


const permission = {
  showPosition: [2, 5],
  showPay: [2, 5],
  showTerminate: [2, 5],
  hrAdminOrSystemAdmin: [2, 5],
  attachfile: [2, 5]
};

const EmployeeResult = (props) => {

  let history = useHistory();

  const location = useLocation();

  const [employeeDetails, setEmployeeDetails] = useState({})

  const [files, setFiles] = useState([]);

  const [additionalFiles, setAdditionalFiles] = useState([]);

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

  const [updatedCertificateName, setUpdatedCertificateName] = useState('default_license')

  const [updatedCertificateIssueDate, setUpdatedCertificateIssueDate] = useState('')

  const [updatedCertificateExpiryDate, setUpdatedCertificateExpiryDate] = useState('')

  const [certificateID, setCertificateID] = useState('')

  const [addCertificate, setAddCertificate] = useState(false);

  const [flag, setFlag] = useState(false)


  useEffect(() => {
    if (!additionalFiles.length) {
      const additionalFilesInput = document.getElementById('additional-files-input');

      if (!additionalFiles.length)
        return false;

      clearAdditionalFiles();
    }
  }, [additionalFiles]);

  const clearAdditionalFiles = () => {
    additionalFiles.value = null;

    setAdditionalFiles([]);
  }

  function terminateEmployee() {
    history.push({
      pathname: '/employees-profile/termination',
      state: employeeData
    });
  }




  function onUpdateCertificate() {


    let data = {
      name: updatedCertificateName,
      type: selectedCertificateType,
      issue_date: moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString(),
      expiry_date: moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString(),
      employee_id: employeeDetails?.id,
      id: updatedCertificateID
    }


    try {
      employee.update_employee_certificate(data).then((certificateData) => {
        setFlag(!flag)
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
      position_level: employeeInitialData?.PositionLevelId,
      position_category: employeeInitialData?.JobCategoryId,
      location_id: updatePositon?.location,
      SubDepartment_Id: updatePositon?.subDepartment,
      Supervisor_Id: updatePositon?.supervisor,
      employee_id: employeeDetails?.id,
      start_date: startDate
    }


    try {
      hr.updatePosition(data).then((certificateData) => {
        setFlag(!flag)
        // setOpenC(!openCerti);

      }).catch((err) => { console.log(err) });

      setOpenPosition(false)


    }
    catch (exc) {
      console.log(exc);

    }

  }

  const [paytypeDropdown, setPaytypeDropdown] = useState([]);

  const [certificateType, setCertificateType] = useState([])

  const [selectedCertificateType, setSelectedCertificateType] = useState('')


  const [lists, setLists] = useState({
    users: [],
    positions: [],
    departments: [],
    sites: []
  })

  useEffect(async () => {

    // let departmentList = await employee.get_department_listing()
    // if (departmentList.httpStatus == 200) {
    //   departmentList = departmentList.data;
    // }

    let departmentList = await employee.get_subDepartment_listing()
    if (departmentList.httpStatus == 200) {
      departmentList = departmentList.data;
    }



    let jobCategoryList = await employee.get_job_category_listing()
    if (jobCategoryList.httpStatus == 200) {
      jobCategoryList = jobCategoryList.data;
    }



    let siteList = await employee.get_site_listing()
    if (siteList.httpStatus == 200) {
      siteList = siteList.data;
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


  const [employeeData, setEmployeeData] = useState(location?.state || {});


  useEffect(async () => {
    window.scrollTo(0, 0);

    let id = location?.state?.employee?.[0]?.id;

    try {
      getEmployeeDetails({ id });
    }
    catch (exc) {
      console.log(exc);
    }

    // certificate api 

    try {
      hr.getCertificate({ id }).then((certificateData) => {
        certificateData.data.rows.forEach(element => {
          element.issue_date = moment(new Date(element.issue_date)).utc().format('MM-DD-YYYY')
          element.expiry_date = moment(new Date(element.expiry_date)).utc().format('MM-DD-YYYY')
        });

        setCertificate(certificateData.data.rows)


      }).catch((err) => { console.log(err) });

    }
    catch (exc) {
      console.log(exc);
    }

    // get certificate type 
    try {
      hr.getCertificateType().then((certificateData) => {
        // console.log(certificateData.data.rows)

        setCertificateType(certificateData?.data?.rows)
        console.log("Here: ", certificateData?.data?.rows)

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
    supervisor: '',
    updatePositon: ''
  })

  const [startDate, setStartDate] = useState('')
  const [updatePayDate, setUpdatePayDate] = useState('')


  function editPosiotion(row) {
    setOpenPosition(true)
    // setUpdatePositon({ ...updatePositon, employeeId: row.EmployeeId, fullTitle: row.FullTitle, category: row.JobCategoryId, location: row.EmployeeId, subDepartment: row.SubDepartment.id, supervisor: row.firstName, positionLevelId: row.PositionLevelId })
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
    setOpenPay(true)
    setUpdatePay({ ...updatePay, position_level: '1', rate: row.Rate, pay_type: row.PayType.name, employee_id: row.EmployeeId })

  }

  function editPayClose() {
    setOpenPay(false)
  }

  function editPosiotionClose() {
    setOpenPosition(false)
  }

  useEffect(() => {
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
    setSelectedCertificateType(row.CertificateTypeId);
    setUpdatedCertificateName(row.name);


    setUpdatedCertificateIssueDate(new Date(row.issue_date))
    setUpdatedCertificateExpiryDate(new Date(row.expiry_date))


    setOpenC(true);
  };

  const openCertificateModal = () => {
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
      type: selectedCertificateType,
      issue_date: moment(new Date(updatedCertificateIssueDate)).format('YYYY-MM-DD').toString(),
      expiry_date: moment(new Date(updatedCertificateExpiryDate)).format('YYYY-MM-DD').toString(),
      employee_id: employeeDetails?.id
    }



    try {
      let result = await employee.add_employee_certificate(data)
      if (result.httpStatus == 200) {
        setFlag(!flag)
        setOpenC(!openCerti);
        setAddCertificate(false)
      }
    }
    catch (exc) {
      console.log(exc);
    }

  }

  const handleCertificate = (e) => {
    e.preventDefault();


    if (addCertificate)
      onAddCertificate()
    else
      onUpdateCertificate()
  }


  async function onSubmitEmploye(event) {
    try {
      event.preventDefault()

      let data = {
        comment,
      }

      const formData = new FormData();
      const { id } = employeeDetails;


      Array.from(additionalFiles)
        .forEach(file => {
          formData.append('file', file);
        });

      const response = await hr.additionalFiles({
        id,
        formData,
      });

      await getEmployeeDetails();
      clearAdditionalFiles();
    } catch (exc) {
      console.log(exc);
    }


  }



  async function onSubmitModal(event) {

    event.preventDefault()

    let data = {
      address_1: streedAddress,
      address_2: streedAddress1 == null ? " " : streedAddress1,
      state: stateName,
      zip: zip,
      employee_id: employeeDetails?.id,
      city: city,
    }

    try {
      hr.updateEmployeeAddress(data)
        .then((update) => {
          setUpdateAddress(update);

          setOpenA(false);

        }).then(() => {
          getEmployeeDetails();
        })
        .catch(err => {
          console.log(err)
        })
    } catch (exc) {
      console.log(exc);
    }

  }

  const [employeeInitialData, setEmployeeInitialData] = useState()


  const getEmployeeDetails = async (forcedParams = {}) => {
    try {
      const applicantDataHistory = await hr.getEmployee({
        ...(employeeDetails || {}),
        ...forcedParams,
      })
      setLoader(true);
      setComponentLoader(true)
      setEmployeeDetails(applicantDataHistory?.employee[0])
      setComponentLoader(false)
      setFiles(applicantDataHistory?.files)
      setPosition(applicantDataHistory?.position)
      if (applicantDataHistory?.position?.length) setEmployeeInitialData(applicantDataHistory?.position[0])
      if (!applicantDataHistory?.position?.length) setEmployeeInitialData({ ...applicantDataHistory?.employee[0], JobCategoryId: 1 })
      setTgsLocation(applicantDataHistory?.employee[0].TGSLocation)
      setDepartment(applicantDataHistory?.employee[0]?.SubDepartment)
      setZip(applicantDataHistory?.employee[0].zip)
      setStateName(applicantDataHistory?.employee[0].state)
      setCity(applicantDataHistory?.employee[0].city)
      setStreedAddress(applicantDataHistory?.employee[0].address)
      setStreedAddress1(applicantDataHistory?.employee[0].address1)
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }




  const removeFile = (fileIndexToOptOut) => {
    const files = Array.from(
      additionalFiles
    )
      .filter((files, fileIndex) => fileIndex !== fileIndexToOptOut);

    setAdditionalFiles(files);
  }

  const [role_id, setRole_id] = useState()
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("user_profile"));


    setRole_id(userProfile?.role_id)

  }, [])

  const dateToday = moment(new Date()).utc().format('MM-DD-YYYY').split('-')

  const getValidation = (today, expire) => {


    console.log({ expire, today })


    // If expiry year is greater
    if (expire[2] > today[2]) return true

    // If expiry year is less
    if (expire[2] < today[2]) return false

    // If expiry year is equal ( This is when the validation starts )
    if (expire[2] == today[2]) {

      // If the expiry month is greater than current month
      if ((expire[0] - today[0]) > 1) return true

      if ((expire[0] - today[0]) == 1) {

        if (((expire[1] - today[1]) + 30) <= 30) return false

      }

      // If month is less
      if (expire[0] < today[0]) return false

      if (expire[0] == today[0]) {

        if (expire[1] < today[1]) return false

        if ((expire[1] - today[1]) <= 30) return false

      }


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
                        Phone Number <span style={{ fontSize: '12px', fontWeight: 'lighter' }}>(Home / Cell)</span>
                      </Grid>
                      <Grid xs={5}>
                        {/* {employeeDetails?.cellPhone?.length ? employeeDetails?.cellPhone : employeeDetails?.homePhone} */}
                        {employeeDetails?.cellPhone?.length ? employeeDetails?.homePhone + " / " + employeeDetails?.cellPhone : employeeDetails?.homePhone}

                      </Grid>
                    </ListItem>
                    {(employeeDetails?.fullTitle) &&
                      (<ListItem container className="p0 pt6 pb20">
                        <Grid xs={5} className="bold">
                          Full title
                        </Grid>
                        <Grid xs={5}>
                          Director of Systems
                        </Grid>
                      </ListItem>)
                    }
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
                          {moment(employeeDetails?.hireDate).utc().format('MM-DD-YYYY')}
                        </Grid>
                      </ListItem>)
                    }
                    {(employeeDetails?.terminateDate) &&
                      (<ListItem container className="p0 pt6 pb20">
                        <Grid xs={5} className="bold">
                          Termination Date
                        </Grid>
                        <Grid xs={5}>
                          {moment(employeeDetails?.terminateDate).utc().format('YYYY-MM-DD')}
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
                                        value === row.city ? value + ", " + row.state : value
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
                    Certifications & Licenses
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
                                        //  column.id === 'expiry_date' && value === row?.expiry_date && row?.expiry_date.split('-')[2] === dateToday[2] && row?.expiry_date.split('-')[1] - dateToday[1]  < 1 && row?.expiry_date.split('-')[0] - dateToday[0] < 30 ? <p className="testExpiry">{value}</p> : value
                                        // column.id === 'expiry_date' && value === row?.expiry_date && row?.expiry_date.split('-')[2] === dateToday[2] && getValidation(dateToday, row?.expiry_date.split('-'), row?.expiry) == false ? <p className="testExpiry">{value}</p> : value
                                        column.id === 'expiry_date' && value === row?.expiry_date && getValidation(dateToday, row?.expiry_date.split('-'), row?.expiry) == false ? <p className="testExpiry">{value}</p> : value


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
                <Button for="selecteSertificate" className="LinkButton" onClick={openCertificateModal}>
                  Add Certificate & License
                </Button>
                {/* <input id="selecteSertificate" type="file" className="hide" /> */}
              </Grid>
              {/**/}

              {
                permission?.showPosition?.includes(+role_id) && (
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
                              {
                                (position.length)
                                  ? (
                                    position.sort((a, b) => (
                                      new Date(a.EffectiveDate) - new Date(b.EffectiveDate)
                                    )).reverse()
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
                                                >   {(
                                                  value === row.EffectiveDate ? moment(value).utc().format('MM-DD-YYYY') : value === row?.Employee?.firstName ? row?.Employee.firstName + " " + row?.Employee.lastName : value
                                                )}

                                                </TableCell>
                                              );
                                            })}
                                          </TableRow>

                                        );
                                      })
                                  )
                                  : (
                                    <Grid xs={12}>
                                      No data found
                                    </Grid>
                                  )
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                      <Button style={{ marginTop: "20px" }} className="LinkButton" onClick={() => setOpenPosition(true)}>Add new position</Button>
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
                              {
                                (payRate.length)
                                  ? (payRate
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
                                    }))
                                  : (
                                    <Grid xs={12}>
                                      No data found
                                    </Grid>
                                  )
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Grid>


                    <Grid xs={12} container className="mt40">
                      <Button onClick={terminateEmployee} className="LinkButton"
                        disabled={employeeDetails?.terminate}>
                        Terminate Employee
                      </Button>
                    </Grid>
                  </div>
                )
              }


              {/* Employee Document */}
              {
                (permission?.hrAdminOrSystemAdmin?.includes(+role_id)) && (

                  (<Grid xs={12} className="mt30">
                    <Grid xs={12} className="mb10">
                      <Typography className="bold">
                        Employee Documents
                      </Typography>
                    </Grid>
                    <Grid xs={12} md={8} lg={6} container className="HREmployeeDownloads">
                      {
                        (files.length)
                          ? files.map((name) => (
                            <Grid className="PDFDownload">
                              <Grid className="FileName">

                                <a href={`${apiPath}/employee/applicant/download?id=${employeeDetails?.id}&name=${name}`} target="_blank">{name}</a>

                              </Grid>
                              {/* <Button></Button> */}
                            </Grid>
                          ))
                          : (<Grid>
                            No files found
                          </Grid>)
                      }

                    </Grid>
                  </Grid>)
                )
              }

              {/*attachment fle*/}




              <Grid xs={12} container>

                <Grid xs={12} md={8} lg={6}>
                  {/* ---------- */}
                  {
                    (permission.attachfile.includes(+role_id)) ?
                      <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                          {
                            !additionalFiles.length
                              ? (
                                <Grid xs={12}>
                                  <Grid xs={12} className="mbold">
                                    Attach Additional Files
                                  </Grid>
                                  <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">

                                    <Button
                                      onClick={($event) => {
                                        const input = document.getElementById('additional-files-input');

                                        input.click();
                                      }}>Select Files</Button>
                                  </Grid>
                                  <input
                                    id="additional-files-input"
                                    type="file"
                                    multiple="multiple"
                                    hidden="true"
                                    onChange={($event) => {
                                      setAdditionalFiles($event.target.files);
                                    }}
                                  />
                                </Grid>
                              )
                              : (
                                <Grid className="Step2DragFile files-tag-container">
                                  {
                                    Array
                                      .from(additionalFiles)
                                      .map(
                                        (file, fileIndex) => (
                                          <Grid className="files-tag position-relative">
                                            <Grid className="d-flex justify-content-end position-absolute r-0">
                                              <Button
                                                className="dustbinBtn min-width-auto dustbinBtn-size-auto-100"
                                                onClick={
                                                  $e => {
                                                    removeFile(fileIndex)
                                                  }
                                                }></Button>
                                            </Grid>
                                            <Typography>
                                              {file.name}
                                            </Typography>
                                          </Grid>
                                        )
                                      )
                                  }
                                </Grid>
                              )
                          }
                        </Grid>
                      </Grid> : ""
                  }
                  {/* ---------- */}

                  <form onSubmit={onSubmitEmploye}>
                    <Grid xs={12} className="mt12 pr70">
                      <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/employees" className="LinkButtonBack">Back</Link>
                        <Button
                          type='submit'
                          className="LinkButton"
                          disabled={!additionalFiles.length}>Save & Continue</Button>
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
                <TextField id="outlined-basic" label="Type Here" required={false} defaultValue={streedAddress1} onChange={(e) => setStreedAddress1(e.target.value)} variant="outlined" className="w100p" />
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
                (!addCertificate) &&
                (
                  <Grid xs={12} className="mbold">
                    <Grid xs={12} className="pl14">Certificate ID</Grid>
                    <TextField id="outlined-basic" required value={updateCertificate?.id} variant="outlined" className="w100p" />
                  </Grid>
                )
              }
              {/* <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">License Certificate</Grid>
                <TextField id="outlined-basic" required value={updatedCertificateName} onChange={(e) => setUpdatedCertificateName(e.target.value)} variant="outlined" className="w100p" />
              </Grid> */}

              {/* <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">License Certificate List</Grid>
                <Grid xs={12} className="mt14">
                  <Select onChange={(e) => setUpdatedCertificateName(e.label)} options={Lisencecertificate} />
                </Grid>
              </Grid> */}
              {/* <TextField id="outlined-basic" required value={updatedCertificateName} onChange={(e) => setUpdatedCertificateName(e.target.value)} variant="outlined" className="w100p" /> */}




              <Grid xs={12} className="mbold mt30">
                <Grid xs={12} className="pl14">License Type</Grid>
                <Grid xs={12} className="mt14">
                  <Autocomplete
                    className="w100p"
                    id="combo-box-demo"
                    defaultValue={certificateType[updateCertificate?.CertificateTypeId - 1]}
                    onChange={(event, newValue) => {
                      const { id, name } = newValue;

                      setSelectedCertificateType(id);
                      setUpdatedCertificateName(name);
                    }}
                    options={certificateType}
                    getOptionLabel={(option) => option.name}
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
                {/* <TextField id="outlined-basic" required value={updatedCertificateName} onChange={(e) => setUpdatedCertificateName(e.target.value)} variant="outlined" className="w100p" /> */}
              </Grid>


              <Grid xs={12} className="mbold mt30 DatePickerCss">
                <Grid xs={12} className="pl14">Issue Date</Grid>

                <DatePicker
                  value={updatedCertificateIssueDate}
                  onChange={(value) => setUpdatedCertificateIssueDate(value)}
                  // onChange={(value) => console.log(value)}
                  id="dob"
                  // onKeyDown={(e) => {
                  //     e.preventDefault();
                  //  }}
                  className="datePickerReact w100p bg-white react-date-picker"
                />

                {/* <TextField
                  required={false}
                  id="dob"
                  type="date"
                  className="DateTimePicker"
                  value={updatedCertificateIssueDate}
                  onChange={(e) => { setUpdatedCertificateIssueDate(e.target.value) }}
                  formatDate={(date) => moment(date).format('MM-DD-YYYY')}
                /> */}

              </Grid>
              <Grid xs={12} className="mbold mt30 DatePickerCss">
                <Grid xs={12} className="pl14">Expire Date</Grid>

                {/* <TextField
                  required={false}
                  id="date1"
                  type="date"
                  className="DateTimePicker"
                  value={updatedCertificateExpiryDate}
                  onChange={(e) => setUpdatedCertificateExpiryDate(e.target.value)}
                  formatDate={(date) => moment(date).format('MM-DD-YYYY')}
                /> */}

                <DatePicker
                  value={updatedCertificateExpiryDate}
                  onChange={(value) => setUpdatedCertificateExpiryDate(value)}
                  id="dob"
                  // onKeyDown={(e) => {
                  //     e.preventDefault();
                  //  }}
                  className="datePickerReact w100p bg-white react-date-picker"
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
                <TextField id="outlined-basic" disabled required value={employeeDetails?.id} variant="outlined" className="w100p" />
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
                  onChange={(event, newValue) => setUpdatePositon({ ...updatePositon, supervisor: newValue.id })}
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