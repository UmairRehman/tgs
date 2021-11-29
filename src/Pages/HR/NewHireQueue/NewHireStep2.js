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
  Select,
  Card,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

/** Local deoendencies & Libraries */
import Services from "../../../Services";
const { hr } = Services;
var moment = require("moment-timezone");

const columns = [
  { id: "firstName", label: "Applicant", minWidth: 170, type: "value" },
  { id: "id", label: "Employee ID", minWidth: 120, type: "value" },
  {
    id: "createdAt",
    label: "Date of Application",
    minWidth: 100,
    type: "value",
  },
  { id: "city", label: "Home City, St", minWidth: 100, type: "value" },
  { id: "cellPhone", label: "Phone Number", minWidth: 170, type: "value" },
  { id: "email", label: "Email Address", minWidth: 170, type: "value" },
];

const Approval = [
  { title: "Approve", value: true },
  { title: "Reject", value: false },
];
const FailPass = [{ title: "Pass" }, { title: "Fail" }];

const NewHireStep2 = () => {
  let history = useHistory();
  const location = useLocation();

  const [applicantData, setApplicantData] = useState({});
  const [attachments, setAttachments] = useState([]);
  const [holdData, setHoldData] = useState({});
  
  const [approval, setapproval] = useState(Approval[0]);
  const [drugTestDate, setdrugTestDate] = useState("");
  const [drugTest, setdrugTest] = useState("");
  const [backgroundDate, setbackgroundDate] = useState("");
  const [backgroundCheck, setbackgroundCheck] = useState("");
  const [hireDate, sethireDate] = useState("");
  const [loader, setLoader] = useState("");
  const [statusDateTime, setStatusDateTime] = useState({
    date: moment(new Date()).format("DD-MM-YYYY"),
    time: moment(new Date()).format("hh:mm a"),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function onFormSubmit(event) {
    event.preventDefault();
    let data = {};
    if (approval.value) {
      data = {
        employee_id: applicantData.id,
        comment: document.getElementById("comment").value,
        hire_date: hireDate,
        drug_test_date: drugTestDate,
        background_complete_at: backgroundDate,
        drug_test: drugTest == "Yes" ? true : false,
        background_check: backgroundCheck == "Yes" ? true : false,
      };
    } else if (!approval.value) {
      data = {
        employee_id: applicantData.id,
        step: 1,
        comment: document.getElementById("comment").value,
        data: {
          drug_test_date: drugTestDate,
          background_complete_at: backgroundDate,
          drug_test: drugTest == "Yes" ? true : false,
          background_check: backgroundCheck == "Yes" ? true : false,
        },
      };  
    }

    console.log(data);

    try {
      if(approval.value){
        let res = await hr.step2(data) 
          if(attachments.length>0 && res?.httpStatus==200){
            const formData = new FormData ()
            attachments.forEach((attachment)=>{
              formData.append('file',attachment)
            })
          await hr.additionalFiles({
              id: applicantData.id,
              formData
            })
          }
      } 
      else if (! approval.value){
        await hr.reject(data);
      }
      history.push("/new-hire-queue");
    } catch (exc) {
      console.log(exc);
    }
  }

  const setStatus = async (status) => {
    setapproval(status);
    setStatusDateTime({
      date: moment(new Date()).format("DD-MM-YYYY"),
      time: moment(new Date()).format("hh:mm a"),
    });
  };

  useEffect(async () => {
    setLoader(true);
    window.scrollTo(0, 0);

    let applicantDataHistory = location?.state;
    setHoldData(applicantDataHistory?.data);

    try {
      let data = await hr.getAllApplicantsByID(applicantDataHistory);
      setApplicantData(data.employee);
      console.log(applicantData);
    } catch (exc) {
      console.log(exc);
    }

    setLoader(false);
  }, []);

  const handleAttachements = async (e) => {
    if (e.target.files.length > 0) {
      setAttachments(Array.from(e.target.files));
    }
  };

  //remove attachment
  const removeAttachment = (index) => {
    let files = attachments;
    files.splice(index, 1);
    setAttachments(Array.from(files));
  };

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
                      {[applicantData].map((applicantData) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={applicantData.code}
                          >
                            {columns.map((column) => {
                              const value = applicantData[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
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
              <form onSubmit={onFormSubmit}>
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
                          onChange={(e, value) => {
                            setStatus(value);
                          }}
                          options={Approval}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => (
                            <TextField
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
                            onChange={(e) => {
                              setdrugTestDate(e.target.value);
                            }}
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
                            onChange={(e, value) => {
                              setdrugTest(value.title);
                            }}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                              <TextField
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
                            onChange={(e) => {
                              setbackgroundDate(e.target.value);
                            }}
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
                            onChange={(e, value) => {
                              setbackgroundCheck(value.title);
                            }}
                            className="w100p"
                            id="combo-box-demo"
                            options={FailPass}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                              <TextField
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
                  {/* ---------- */}
                  {approval.value && (
                    <Grid xs={12} container>
                      <Grid xs={12} className="mt30">
                        <Grid xs={12} className="mbold">
                          Hire Date
                        </Grid>
                        <Grid xs={12} className="mt14">
                          <TextField
                            id="date"
                            type="date"
                            onChange={(e) => {
                              sethireDate(e.target.value);
                            }}
                            className="DateTimePicker"
                            defaultValue="YY-MM-DD"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {/* ---------- */}
                  <Grid xs={12} container>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12}>
                        <Grid xs={12} className="mbold">
                          Comments
                        </Grid>
                        <Grid xs={12} className="mt14">
                          <TextareaAutosize
                            id="comment"
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
                          {approval.value
                            ? `Please leave this field empty if you have no comments`
                            : `Please define the reason of rejection`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---------- */}
                  {approval.value && (
                    <Grid xs={12} container>
                      <Grid xs={12} className="mt30">
                        <Grid xs={12}>
                          <Grid xs={12} className="mbold">
                            Attach Additional Files
                          </Grid>

                          <Grid
                            xs={12}
                            id="Step2DragFile"
                            className="Step2DragFile mt14"
                          >
                            {attachments.map((attachment, index) => {
                              return (
                                <Grid xs={12} className="attachmentsHR">
                                  <div>{`${attachment.name}`}</div>
                                  <Button
                                    onClick={() => removeAttachment(index)}
                                  >
                                    x
                                  </Button>
                                </Grid>
                              );
                            })}
                            <label>
                              <input
                                type="file"
                                accept="application/pdf" 
                                multiple
                                onChange={handleAttachements}
                                style={{ display: "none" }}
                              />
                              Drop File Here OR Select Files
                            </label>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  <Grid
                    xs={12}
                    container
                    justify="space-between"
                    className="mt50"
                  >
                    <Link to="/new-hire-queue/234" className="LinkButtonBack">
                      Back
                    </Link>
                    <Button className="LinkButton" type="submit">
                      Save & Continue
                    </Button>
                    {/* <Link to="/new-hire-queue/step/1" className="LinkButton"> */}
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewHireStep2;
