/** Core dependencies */
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


/** Local dependencies & Libraries */
import Services from "../../../Services";
import { helpers } from "../../../helpers";
import Snackbar from "../../../Components/Snackbar";


/** Third party packages */
import { jsPDF } from "jspdf";

var moment = require("moment-timezone");


const { showSnackBar } = helpers;

const { hr, employee } = Services;

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const { apiPath } = environment;

const YesNo = [
  { title: 'Yes', value: true },
  { title: 'No', value: false },
]

const statuses = [
  { id: 1, title: "Approve", value: true },
  { id: 2, title: "Reject", value: false },
];

const NewHireStep1 = () => {
  let history = useHistory();

  const [applicantData, setApplicantData] = useState({});
  const [resume, setResume] = useState(null);
  const [drivingLicense, setDrivingLicense] = useState(null);
  const [questionnaire, setQuestionnaire] = useState(null);
  const [isSaveButtonDisabled, toggleSaveButton] = useState(true);

  // states for Form

  const [step1, setStep1] = useState({ value: false });
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
  const [subDeprtmentText, setSubDeprtmentText] = useState(false);
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


  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [applicantData]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [resume]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [drivingLicense]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [isSaveButtonDisabled]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [step1]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [position]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [jobCode]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [rate]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [department]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [fullTitle]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [positionCategory]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [positionLocation]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [partType]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [startDate]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [subDepartment]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [supervisorList]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [supervisor]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [comment]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [computer]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [active]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [companyCellPhone]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [companyVehicle]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [fuelCard]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [ITComment]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [locationID]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [subDeprtmentText]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [statusDateTime]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [jobCategoriesOption]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [locationDropdown]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [paytypeDropdown]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [departmentDropdown]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [SubDepartmentDropdown]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [PositionLevel]);
  useEffect(() => {
    const formValid = document.getElementById('applicationForm').checkValidity();
    if (formValid)
      toggleSaveButton(false);
  }, [holdData]);

  const validFormCheck = () => {
    const state = {
      step1,
      position,
      fullTitle,
      positionCategory,
      positionLocation,
      jobCode: document.getElementById("jobIDText").value,
      partType,
      rate,
      department,
      subDepartment,
      Supervisor_Id: supervisor.id,
      computer: computer.value,
      active: active.value,
      companyCellPhone: companyCellPhone.value,
      companyVehicle: companyVehicle.value,
      fuelCard: fuelCard.value,
    };

    console.log(state);
  }

  async function onformSubmit(event) {
    event.preventDefault();

    let data = {};
    if (!step1.value) {
      data = {
        employee_id: holdData?.id,
        step: 0,
        comment: document.getElementById("comment1").value,
      }
    }
    else if (step1.value) {
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
      if (result) {
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

      const {
        employee: employeeData,
        files: [
          resumeFileName,
          sscFileName,
          drivingLicenseFileName,
        ],
        extra: {
          metadata: questionnaireData
        }
      } = data;

      setResume(resumeFileName);
      setDrivingLicense(drivingLicenseFileName);
      setQuestionnaire(questionnaireData);
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
      if (jobSubCategory.data && (jobSubCategory.data.length > 0)) {
        setSubDepartmentDropdown(jobSubCategory?.data);
        setsubDepartment(jobSubCategory?.data[0].id)
        setSubDeprtmentText(!subDeprtmentText)
      }
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
    if (status.value) {
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

  const downloadQuestionnaire = (event) => {
    // return console.log(questionnaire);

    const {
      hairTest,
      drugTest,
      prison,
      accommodation,
      availability,
      language,
      bilingual,
      overTime,
      shift,
      holidays,
      workWeekends,
      travels,
      relocate,
      tgsComment,
      workBefore,
      comment,
      bilingualLanguage,
    } = questionnaire;

    const doc = new jsPDF();

    doc.setFontSize(10);

    let yOffset = 10;
    let xOffset = 10;
    let offsetExtension = 5;
    let offsetTranslation = 30;

    doc.text("Hair Test:", xOffset, yOffset);
    doc.text(hairTest ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Drug Test:", xOffset, yOffset);
    doc.text(drugTest ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Been to prison:", xOffset, yOffset);
    doc.text(prison ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Require's Accomodation:", xOffset, yOffset);
    doc.text(accommodation ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    if (!accommodation) {
      doc.text("Does not require Accomodation:", xOffset, yOffset);
      doc.text(comment ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
      yOffset += offsetTranslation;
    }

    doc.text("Expected Availability:", xOffset, yOffset);
    doc.text(new Date(availability).toDateString(), xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Speaks English", xOffset, yOffset);
    doc.text(language ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Is Bilingual:", xOffset, yOffset);
    doc.text(bilingual ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Second Language", xOffset, yOffset);
    doc.text(bilingualLanguage, xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Works Overtime:", xOffset, yOffset);
    doc.text(overTime ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Preferred Shift:", xOffset, yOffset);
    doc.text(shift, xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    // doc.addPage();
    yOffset = 10;
    xOffset = 100;
    offsetExtension = 5;
    offsetTranslation = 30;

    doc.text("Works Holidays:", xOffset, yOffset);
    doc.text(holidays ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Works Weekends:", xOffset, yOffset);
    doc.text(workWeekends ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Requires Travel:", xOffset, yOffset);
    doc.text(travels ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Requires relocation:", xOffset, yOffset);
    doc.text(relocate ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Heard about TGS:", xOffset, yOffset);
    doc.text(tgsComment ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);
    yOffset += offsetTranslation;

    doc.text("Worked for TGS Before:", xOffset, yOffset);
    doc.text(workBefore ? 'Yes' : 'No', xOffset, yOffset + offsetExtension);

    doc.save("questionnaire.pdf");
  }

  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Applicant - 1st Approval</Grid>
          {/* Page Start */}
          <form
            id="applicationForm"
            onSubmit={onformSubmit}>
            <Grid xs={12} className="ContentPage FormTableArea">
              <Grid xs={12} container>
                <Grid xs={12}>
                  <List>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Applicant Name</Grid>
                      <Grid>{applicantData?.firstName} {applicantData?.middleName} {applicantData?.lastName}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Employee ID</Grid>
                      <Grid>{applicantData?.id}</Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Date of Application</Grid>
                      <Grid>
                        {moment(new Date(applicantData?.updatedAt)).format(
                          "MM-DD-YYYY"
                        )}
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Home City, St</Grid>
                      <Grid>
                        {applicantData?.city}, {applicantData?.state}
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
                        `${(applicantData?.jobId) || 'Null'} / ${(applicantData?.jobDescription)  || 'Null'}`
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
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Driver's License</Grid>
                      <Grid className="PDFDownload">
                        <Grid className="FileName">Driver's License</Grid>
                        <a
                          className="Button"
                          href={`${apiPath}/employee/applicant/download?id=${applicantData?.id}&name=${drivingLicense}`}
                          target="_blank"
                        ></a>
                      </Grid>
                    </ListItem>
                    <ListItem container className="p0 pt6 pb20">
                      <Grid className="w250 bold">Questionaire</Grid>
                      <Grid className="PDFDownload">
                        <Grid className="FileName">Questionaire</Grid>
                        <Button
                          className="Button"
                          onClick={downloadQuestionnaire}
                        ></Button>
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
                              const formValid = document.getElementById('applicationForm').checkValidity();
                              if (formValid)
                                toggleSaveButton(false);
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
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
                                onChange={(e, v) => {
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setfullTitle(e.target.value)
                                }}
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
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
                                onChange={(e, v) => {
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setjobCode(e.target.value)
                                }}
                              />
                              {/* <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setjobCode(value.title)}}
                                        const formValid = document.getElementById('applicationForm').checkValidity();
                                        if(formValid)
                                        toggleSaveButton(false);
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if(formValid)
                                  toggleSaveButton(false);
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
                              <TextField className="w100p"
                                id="rateID"
                                required={true}
                                label="Rate"
                                variant="outlined"
                                type="number"
                                value={rate}
                                defaultValue={0}
                                InputProps={{ inputProps: { min: 0 } }}
                                onChange={(e, v) => {
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setrate(e.target.value)
                                }}
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setstartDate(value);
                                }}
                                value={startDate}
                                className="DateTimePicker datePickerReact"
                                id="date"
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
                                onChange={(e, value) => {
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  onDepartmentChange(e, value)
                                }
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
                                key={subDeprtmentText}
                                className="w100p"
                                onChange={(e, value) => {
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setsubDepartment(value.id);
                                }}
                                id="combo-box-demo"
                                options={
                                  SubDepartmentDropdown || {}
                                }
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                  <TextField
                                    id='subDeprtmentText'
                                    name='subDeprtmentText'
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
                                  const formValid = document.getElementById('applicationForm').checkValidity();
                                  if (formValid)
                                    toggleSaveButton(false);
                                  setSupervisor(value);
                                }}
                                className="w100p"
                                id="combo-box-demo"
                                options={supervisorList}
                                getOptionLabel={(option) => option.firstName + ' ' + option.lastName}
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
                            required={(!step1.value) ? true : false}
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
                                const formValid = document.getElementById('applicationForm').checkValidity();
                                if (formValid)
                                  toggleSaveButton(false);
                                setcomputer(value);
                              }}
                              options={YesNo}
                              getOptionLabel={(option) => option.title}
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
                              getOptionLabel={(option) => option.title}
                              onChange={(e, value) => {
                                const formValid = document.getElementById('applicationForm').checkValidity();
                                if (formValid)
                                  toggleSaveButton(false);
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
                                const formValid = document.getElementById('applicationForm').checkValidity();
                                if (formValid)
                                  toggleSaveButton(false);
                                setcompanyCellPhone(value);
                              }}
                              id="controllable-states-demo"
                              options={YesNo}
                              getOptionLabel={(option) => option.title}
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
                                const formValid = document.getElementById('applicationForm').checkValidity();
                                if (formValid)
                                  toggleSaveButton(false);
                                setcompanyVehicle(value);
                              }}
                              options={YesNo}
                              getOptionLabel={(option) => option.title}
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
                                const formValid = document.getElementById('applicationForm').checkValidity();
                                if (formValid)
                                  toggleSaveButton(false);
                                setfuelCard(value);
                              }}
                              options={YesNo}
                              getOptionLabel={(option) => option.title}
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
                    <Button
                      type="submit"
                      className="LinkButton"

                      // disabled={isSaveButtonDisabled}
                    >
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
