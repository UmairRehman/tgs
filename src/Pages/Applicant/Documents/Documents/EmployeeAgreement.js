import React, { useState, useEffect } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  Button,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import Acknowledge from "../../../../Components/Acknowledge";
import DatePicker from "react-date-picker";

// import { Alert } from "@material-ui/lab";
// import { TabletView } from "react-device-detect";

/** Third party dependencies */
import html2canvas from "html2canvas";

/** Local dependencies & Libraries */
import Services from "../../../../Services";

import { helpers } from "../../../../helpers";

import { Imports } from "../../../../Imports";

import Snackbar from "../../../../Components/Snackbar";

const { users, hr, Storage } = Services;

const { showSnackBar } = helpers;

const {
  styles: { displayNoneStyles: useStyles },
} = Imports;

const EmployeeAgreement = () => {
  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);

  const [error, setError] = useState("");

  const acknowledgedState = useState(false);

  const [isAcknowledged, setAcknowledged] = acknowledgedState;
  const [DateSignature, setDateSignature] = useState(new Date());

  const [userData, setUserData] = useState({
    firstName : '',
      middleName : '',
      lastName: '',
  })
  useEffect( async () => {
    let userProfile = await  JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id : userProfile.id})
    let data = {
      firstName : res?.employee?.firstName || '',
      middleName : res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
     }
    setUserData(data)
  }, [])

  const [initialForm, setInitialForm] = useState(false)
  useEffect(() => {
      if(initialForm == true)
        submit();
      
      setInitialForm(true)
  }, [isAcknowledged]);

  const submit = async () => {
    try {
      setPosting(true);

      let data = {
        /** Disabling checks for date and name */
        // date: DateSignature.toISOString(),
        // name: document.getElementById("nametextfield").value,
        signature: document.getElementById("signaturetextfield").value,
      };

      const nullCheck = Object.values(data).reduce(
        (total, accumulator) => total || !accumulator,
        false
      );

      if (nullCheck == false) {
        console.log(data);
      } else {
        setError("field must be filed");
        setAcknowledged(false);
        return showSnackBar("Kindly fill in all the fields");
      }
      // console.log("clickerd")
      let canvas = await html2canvas(document.querySelector("#capture"));
      let image = canvas.toDataURL("image/png");

      const resposne = await users.submitForm({
        image: [image],
        form: 13,
      });

      const step4FormsSubmitted =
        JSON.parse(storage.get("step-4-form-employeeAgreement")) || true;

      storage.set(
        "step-4-form-employeeAgreement",
        JSON.stringify(step4FormsSubmitted)
      );

      const step4FormPosted = new BroadcastChannel("step4form_posted");

      step4FormPosted.postMessage({ topic: "form-updated", message: {} });

      showSnackBar("Form has been submitted!");

      setPosting(false);

      window.self.close();
    } catch (exc) {
      setAcknowledged(false);
      console.log(exc);
      setPosting(false);
      return showSnackBar(exc.message)
    }
  };

  return (
    <Grid  container xs={12} className="LiqForms-Container">
      <TableContainer id="capture" className="MainTable">
        <Table className="SecondMainTable pos-rela">
          <Grid className="PreEmploymentFile">PERSONNEL FILE</Grid>
          <TableRow>
            <TableCell>
              <Table className="w100">
                <TableRow className="w100 mb10 mt10 row justify-center">
                  <TableCell>
                    <Avatar
                      alt="TGS"
                      className="TGSLogoSVG"
                      src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 textCenter UnderLine bold font16">
                    EMPLOYMENT AGREEMENT
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 font12">
                  <TableCell>
                    WITNESSETH:
                    <br />
                    <br />
                    Employee shall be compensated by the Company at an agreed
                    upon rate. Payment will be made to Employee for all time
                    worked but not previously paid.
                    <br />
                    <br />
                    2- Employee is employed and hired initially for work to be
                    performed under a written contract with a Client of the
                    Company. Employee is informed and aware that should the
                    Client no longer require services of Employee under its
                    written contract with the Company, that Employee may not be
                    further retained as an employee of the Company.
                    <br />
                    <br />
                    3- The Company may, with or without cause, and without
                    advance notice, terminate Employee's employment hereunder at
                    any time. The Company shall pay to Employee all compensation
                    earned but not previously paid prior to termination.
                    <br />
                    <br />
                    4- It is agreed that the company shall provide the following
                    listed benefits.:
                    <br />
                    <Grid className="pl20">
                      a. Statutory Workers Compensation Insurance
                      <br />
                      b. Payment of payroll related taxes for FICA, FUTA, and
                      State unemployment taxes.
                      <br />
                      c. Overtime pay of 1 1/2 (one and one-half) times normal
                      pay rate for work over 40 hours per week. Time off without
                      pay for jury duty.
                      <br />
                      <br />
                    </Grid>
                    5- The Company and Employee agree that the Company may at
                    anytime require the Employee to submit to a drug test.
                    Employee consents to search for illegal drugs in any company
                    storage facility or employee vehicle used on company job
                    sites.
                    <br />
                    <br />
                    6- In the event of any injury or if the Company deems it
                    necessary at any time, I give my consent for a blood, urine
                    or hair test for detection of illegal drugs or alcohol.
                    <br />
                    <br />
                    7- TRANS-GLOBAL SOLUTIONS, INC. has workers' compensation
                    insurance coverage to protect you. You may elect to retain
                    your common law right of action if, no later than five days
                    after beginning employment, you notify TRANS-GLOBAL
                    SOLUTIONS, INC. in writing that you wish to retain your
                    common law right to recover damages for personal injury. If
                    you elect your common law right to action, you cannot obtain
                    workers' compensatioin income or medical benefits if you are
                    injured.
                    <br />
                    <br />
                    8- After acceptance for employment, Employee agrees to
                    cooperate and provide additional information reasonable and
                    necessary to allow the Company to comply with Government
                    regulations and requests for statistical information, and
                    necessary in the Company's opinion, to properly operate as
                    an employer and meet its business and ethical obligations.
                    Such information will be promptly and completely furnished
                    on forms provided by the Company for such purposes. Failure
                    to comply with company policy may result in termination.
                    <br />
                    <br />
                    9- The Employee agrees to notify the Company of any change
                    in mailing address and any change in dependent status which
                    may effect coverage under employee benefits or eligibility
                    under the Consolidated Omnibus Budget Reconciliation Act
                    (COBRA).
                    <br />
                    <br />
                    10- All new employees will work on an introductory basis for
                    the first 90 days to give them the opportunity to
                    demonstrate and achieve a satisfactory level of performance.
                    Upon satisfactory completion of the introductory period,
                    employee's enter the "regular'' employment classification.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell className="w36 pl40">
                    <DatePicker
                      onChange={(value) => {
                        setDateSignature(value);
                      }}
                      value={DateSignature}
                      id="offerDate"
                      className="datePickerReact data20h"
                      disabled
                    />
                    DATE
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt12">
                  <TableCell>
                    Employee Name:
                    <input
                      type="text"
                      name="textfield"
                      id="nametextfield"
                      className="w100 h18 bn bb mt6 input-capitalization"
                      value={`${userData.firstName} ${userData.lastName}`}
                      disabled
                    />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt12">
                  <TableCell>
                    Employee Signature:
                    <input
                      type="text"
                      name="textfield"
                      id="signaturetextfield"
                      className="w100 bn bb mt6 signatureClass font-20"
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      <Snackbar></Snackbar>
      <Acknowledge acknowledgedState={acknowledgedState} />
    </Grid>
  );
};
export default EmployeeAgreement;
