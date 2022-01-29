import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { environment } from "../../../environments/environment";

/** Local deoendencies & Libraries */
import Services from "../../../Services";
import { helpers } from "../../../helpers";
import Snackbar from "../../../Components/Snackbar";

const { showSnackBar } = helpers;

const { hr , employee } = Services;
var moment = require("moment-timezone");

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const { apiPath } = environment;

const YesNo = [
  { title : 'Yes' , value:true },
  { title : 'No' ,  value:false },
]

const statuses = [
  { id: 1, title: "Approve" ,value:true },
  { id: 2, title: "Reject" , value:false},
];

const NewHireStep1 = () => {
  let history = useHistory();

  const [applicantData, setApplicantData] = useState({});
  const [resume, setResume] = useState(null);
  const [drivingLicense, setDrivingLicense] = useState(null);
  
  // states for Form

  const [step1, setStep1] = useState({value:false});
  const [position, setPosition] = useState("");
  const [jobCode, setjobCode] = useState("");
  const [rate, setrate] = useState("");
  const [department, setdepartment] = useState("");
  const [fullTitle, setfullTitle] = useState("");
  const [positionCategory, setpositionCategory] = useState("");
  const [positionLocation, setpositionLocation] = useState("");
  const [partType, setpartType] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [subDepartment, setsubDepartment] = useState("");
  const [supervisorList, setSupervisorList] = useState({})
  const [supervisor, setSupervisor] = useState({});
  const [comment, setcomment] = useState("");
  const [computer, setcomputer] = useState("");
  const [active, setactive] = useState("");
  const [companyCellPhone, setcompanyCellPhone] = useState("");
  const [companyVehicle, setcompanyVehicle] = useState("");
  const [fuelCard, setfuelCard] = useState("");
  const [ITComment, setITComment] = useState("");
  const [locationID, setLocationID] = useState("");
  const [statusDateTime, setStatusDateTime] = useState({
    date: moment(new Date()).format("DD-MM-YYYY"),
    time: moment(new Date()).format("hh:mm a"),
  });

  // dropdowns

  const [jobCategoriesOption, setJobCategoriesOption] = useState([]);
  const [locationDropdown, setLocationDropdown] = useState([]);
  const [paytypeDropdown, setPaytypeDropdown] = useState([]);
  const [departmentDropdown, setDepartmentDropdown] = useState([]);
  const [SubDepartmentDropdown, setSubDepartmentDropdown] = useState([]);
  const [PositionLevel, setPositionLevel] = useState([])

  const location = useLocation();
  const [holdData, setHoldData] = useState({});

  async function onformSubmit(event) {
    event.preventDefault();
    let data ={};
    if(! step1.value) 
    {
      data= {
            employee_id : holdData?.id,
            step : 0,
            comment : document.getElementById("comment1").value,
        }
    }
    else if(step1.value){
      data = {
        employee_id: holdData?.id,
        Supervisor_Id: supervisor.id,
        location_id: positionLocation,
        step1,
        position,
        job_code: document.getElementById("jobIDText").value,
        rate,
        department: department,
        full_title: fullTitle,
        position_level: 1,
        position_category: positionCategory,
        pay_type: partType,
        SubDepartment_Id: subDepartment,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        comment: document.getElementById("comment1").value,
        IT: {
          computer: computer.value,
          AD: active.value,
          cell_phone: companyCellPhone.value,
          vehicle: companyVehicle.value,
          fuel_card: fuelCard.value,
          comment: document.getElementById("comment2").value,
        },
      };
    }  
    console.log(data);

    try {
       
      let result = (step1.value) ? await hr.step1(data)
                                  : await hr.reject(data)
      if(result){
        setTimeout(() => {
          history.push('/new-hire-queue')
        }, 1500);
        return showSnackBar('Form Successfully Submitted');
      }
      } catch (exc) {
        console.log(exc);
        return showSnackBar(exc.message);
      }

  }

  useEffect(async () => {
    window.scrollTo(0, 0);

    let applicantDataHistory = location?.state;
    setHoldData(applicantDataHistory);
    console.log(applicantDataHistory);

    try {
      let data = await hr.getAllApplicantsByID(applicantDataHistory);
      setApplicantData(data.employee);
      setResume(data.files[0]);
      setDrivingLicense(data.files[1]);
      console.log(applicantData);
    } catch (exc) {
      console.log(exc);
    }
  }, []);

  async function onDepartmentChange(e, value) {
    setdepartment(value.id);
    try {
      let data = {
        id: value.id,
      };
      let jobSubCategory = await hr.subDepartment(data);
      console.log(jobSubCategory?.data);
      setSubDepartmentDropdown(jobSubCategory?.data);
      console.log(SubDepartmentDropdown);
    } catch (exc) {
      console.log(exc);
    }
  }

  const setStatus = async (status) => {
    setStep1(status);
    setStatusDateTime({
      date: moment(new Date()).format("DD-MM-YYYY"),
      time: moment(new Date()).format("hh:mm a"),
    });
    console.log(status.value)
     // get job catrgories options
    if(status.value){
      try {
        let jobCategory = await hr.get_job_categories();
        setJobCategoriesOption(jobCategory.data);

        let position_level = await hr.getPositionLevel();
        setPositionLevel(position_level.data);

        let locationData = await hr.location();
        setLocationDropdown(locationData.data);

        let payLocationData = await hr.pay_type();
        setPaytypeDropdown(payLocationData.data);

        let departmentData = await hr.department();
        setDepartmentDropdown(departmentData.data);

        let supervisorData = await employee.get_employee_listing();
        setSupervisorList(supervisorData.data);
      } catch (exc) {
        console.log(exc);
      }
    }
  };

  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">New Applicant - Step 1 Approval</Grid>
          {/* Page Start */}
          <form onSubmit={onformSubmit}>
            <Grid xs={12} className="ContentPage FormTableArea">
              <Grid xs={12} container>
                <Grid xs={12}>
                  <List>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Applicant Name</Grid>
                      <Grid>{applicantData?.firstName}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Employee ID</Grid>
                      <Grid>{applicantData?.id}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Date of Application</Grid>
                      <Grid>
                        {moment(new Date(applicantData?.updatedAt)).format(
                          "DD-MM-YYYY"
                        )}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Home City, St</Grid>
                      <Grid>
                        {applicantData?.address}, {applicantData?.address1}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Phone Number</Grid>
                      <Grid>{applicantData?.cellPhone}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Email Address</Grid>
                      <Grid>{applicantData?.email}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Job ID / Description</Grid>
                      <Grid>{
                        (applicantData?.jobId || applicantData?.jobDescription) 
                          ?` ${applicantData?.jobId} / ${applicantData?.jobDescription}`
                          :`Not Available`
                        }</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Job Category</Grid>
                      <Grid>{applicantData?.JobCategory?.name}</Grid>
                    </ListItem>
                    <ListItem
                      container
                      alignItems="flex-start"
                      className="p0 pt6 pb20"
                    >
                      <Grid className="w250 bold">Notes For HR</Grid>
                      <Grid xs={3}>{applicantData?.notesForHR}</Grid>
                    </ListItem>
                    {/* <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Questionaire</Grid>
                      <Grid className="PDFDownload">
                        <Grid className="FileName">Questionaire</Grid>
                        <Button></Button>
                      </Grid>
                    </ListItem> */}
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Resume</Grid>
                      <Grid className="PDFDownload">
                        <Grid className="FileName">Resume</Grid>
                        <a
                          className="Button"
                          href={`${apiPath}/employee/applicant/download?id=${applicantData?.id}&name=${resume}`}
                          target="_blank"
                        ></a>
                      </Grid>
                    </ListItem>

                    {/* <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Drivers License</Grid>
                      <Grid className="PDFDownload">
                        <Grid className="FileName">Drivers License</Grid>
                        <a
                          className="Button"
                          href={`${apiPath}/employee/applicant/download?id=${applicantData?.id}&name=${drivingLicense}`}
                          target="_blank"
                        ></a>
                      </Grid>
                    </ListItem> */}
                  </List>
                </Grid>
                <Grid xs={12} md={8} lg={6}>
                  <Grid xs={12} container className="LRM40">
                    <Grid xs={6} className="mt30 pr20">
                      <Grid xs={12}>
                        <Grid xs={12} className="mbold">
                          Step 1 Status
                        </Grid>
                        <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={statuses}
                            onChange={(e, value) => {
                              setStatus(value);
                            }}
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
                      </Grid>
                    </Grid>
                    <Grid xs={6} container className="mt30 pl20">
                      <Grid xs={6} className="pr20">
                        <Grid xs={12} className="mbold mb14">
                          Date
                        </Grid>
                        <TextField
                          id="statusDate"
                          value={statusDateTime.date}
                          label="3/10/2021"
                          disabled
                          variant="outlined"
                          className="w100p"
                        />
                      </Grid>
                      <Grid xs={6} className="pl20">
                        <Grid xs={12} className="mbold mb14">
                          Time
                        </Grid>
                        <TextField
                          id="statusTime"
                          value={statusDateTime.time}
                          label="04:05 PM"
                          disabled
                          variant="outlined"
                          className="w100p"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---------- */}
                  {step1.value && (
                    <div>
                      <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Position Level
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                id="combo-box-demo"
                                onChange={(e, value) => {
                                  setPosition(value.name);
                                }}
                                options={PositionLevel}
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
                          </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Full Title
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <TextField
                                className="w100p"
                                id="full-title"
                                required={true}
                                label="FullTitle"
                                variant="outlined"
                                value={fullTitle}
                                onChange={(e,v)=> setfullTitle(e.target.value)}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Position Category
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                id="combo-box-demo"
                                onChange={(e, value) => {
                                  setpositionCategory(value.id);
                                }}
                                options={jobCategoriesOption}
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
                          </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Position Location
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                onChange={(e, value) => {
                                  setpositionLocation(value.id);
                                }}
                                id="combo-box-demo"
                                options={locationDropdown}
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
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Job Code
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <TextField
                                className="w100p"
                                id="jobIDText"
                                required={true}
                                label="jobID"
                                variant="outlined"
                                value={jobCode}
                                onChange={(e,v)=> setjobCode(e.target.value)}
                              />
                              {/* <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setjobCode(value.title)}}
                                        options={JobCode}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    /> */}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Pay Type
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                id="combo-box-demo"
                                onChange={(e, value) => {
                                  setpartType(value.id);
                                }}
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
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Rate
                            </Grid>
                            <Grid xs={12} className="mt14">
                              {/* <Autocomplete
                                className="w100p"
                                id="combo-box-demo"
                                onChange={(e, value) => {
                                  setrate(value.title);
                                }}
                                options={queueRate}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                  <TextField
                                    required={true}
                                    {...params}
                                    label="Select"
                                    variant="outlined"
                                  />
                                )}
                              /> */}
                              <TextField  className="w100p"
                                id="rateID"
                                required={true}
                                label="Rate"
                                variant="outlined"
                                type="number"
                                value={rate}
                                defaultValue = {0}
                                InputProps={{ inputProps: { min: 0 } }}
                                onChange={(e,v)=> setrate(e.target.value)}
                                />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Start Date
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <DatePicker
                                onChange={(value) => {
                                  setstartDate(value);
                                }}
                                value={startDate}
                                className="DateTimePicker"
                                id="date"
                                className="datePickerReact"
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Department
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                onChange={(e, value) =>
                                  onDepartmentChange(e, value)
                                }
                                // onChange={(e, value)=>{setdepartment(value.id)}}
                                id="combo-box-demo"
                                options={departmentDropdown}
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
                          </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Sub - Department
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                className="w100p"
                                // onChange={(e,value)=>onChangeSubDepartment(e,value)}
                                onChange={(e, value) => {
                                  setsubDepartment(value.id);
                                }}
                                id="combo-box-demo"
                                options={
                                  SubDepartmentDropdown == null
                                    ? null
                                    : SubDepartmentDropdown
                                }
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
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Supervisor
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <Autocomplete
                                onChange={(e, value) => {
                                  setSupervisor(value);
                                }}
                                className="w100p"
                                id="combo-box-demo"
                                options={supervisorList}
                                getOptionLabel={(option) => option.firstName + ' ' +  option.lastName}
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
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  )}

                  {/* ---------- */}
                  <Grid xs={12} container>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12}>
                        <Grid xs={12} className="mbold">
                          Other
                        </Grid>
                        <Grid xs={12} className="mt14">
                          <TextareaAutosize
                            required={(! step1.value) ? true : false}
                            id="comment1"
                            className="w100p"
                            rowsMin={6}
                            placeholder="Comment here"
                          />
                        </Grid>
                        <Typography
                          variant="h6"
                          className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary"
                          component="h6"
                        >
                          {step1.value
                            ? `Please leave this field empty if you have no comments`
                            : `Please define the reason of rejection`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* ---------- */}
                  {step1.value && (
                    <div>
                      <Grid xs={12}>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9} className="mbold">
                            IT Request
                          </Grid>
                          <Grid xs={3} className="mbold">
                            Required
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9}>Computer</Grid>
                          <Grid xs={3}>
                            <Autocomplete
                              id="controllable-states-demo"
                              onChange={(e, value) => {
                                setcomputer(value);
                              }}
                              options={YesNo}
                              getOptionLabel = {(option)=> option.title}
                              className="w100p"
                              renderInput={(params) => (
                                <TextField
                                  required={true}
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select"
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9}>Active Directory</Grid>
                          <Grid xs={3}>
                            <Autocomplete
                              id="controllable-states-demo"
                              options={YesNo}
                              getOptionLabel = {(option)=> option.title}
                              onChange={(e, value) => {
                                setactive(value);
                              }}
                              className="w100p"
                              renderInput={(params) => (
                                <TextField
                                  required={true}
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select"
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9}>Company Cell Phone</Grid>
                          <Grid xs={3}>
                            <Autocomplete
                              onChange={(e, value) => {
                                setcompanyCellPhone(value);
                              }}
                              id="controllable-states-demo"
                              options={YesNo}
                              getOptionLabel = {(option)=> option.title}
                              className="w100p"
                              renderInput={(params) => (
                                <TextField
                                  required={true}
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select"
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9}>Company Vehicle</Grid>
                          <Grid xs={3}>
                            <Autocomplete
                              id="controllable-states-demo"
                              onChange={(e, value) => {
                                setcompanyVehicle(value);
                              }}
                              options={YesNo}
                              getOptionLabel = {(option)=> option.title}
                              className="w100p"
                              renderInput={(params) => (
                                <TextField
                                  required={true}
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select"
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                        <Grid
                          xs={12}
                          container
                          justify="space-between"
                          className="mt30"
                        >
                          <Grid xs={9}>Fuel Card</Grid>
                          <Grid xs={3}>
                            <Autocomplete
                              id="controllable-states-demo"
                              onChange={(e, value) => {
                                setfuelCard(value);
                              }}
                              options={YesNo}
                              getOptionLabel = {(option)=> option.title}
                              className="w100p"
                              renderInput={(params) => (
                                <TextField
                                  required={true}
                                  {...params}
                                  variant="outlined"
                                  placeholder="Select"
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* ---------- */}
                      <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                          <Grid xs={12}>
                            <Grid xs={12} className="mbold">
                              Comments to IT
                            </Grid>
                            <Grid xs={12} className="mt14">
                              <TextareaAutosize
                                id="comment2"
                                className="w100p"
                                rowsMin={6}
                                placeholder="Comment here"
                              />
                            </Grid>
                            <Typography
                              variant="h6"
                              className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary"
                              component="h6"
                            >
                              Please leave this field empty if you have no
                              comments
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Grid>
                <Grid xs={12} className="mt50">
                  <Grid xs={12} md={8} lg={6} container justify="space-between">
                    <Link to="/new-hire-queue" className="LinkButtonBack">
                      Back
                    </Link>
                    <Button type="submit">
                      {/* <Link to="/new-hire-queue/details/approval" className="LinkButton"> */}
                      Save & Continue
                      {/* </Link> */}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <Snackbar></Snackbar>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewHireStep1;
