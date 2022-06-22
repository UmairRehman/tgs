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

const { showSnackBar, getGenerator } = helpers;

const {
  styles: { displayNoneStyles: useStyles },
} = Imports;

const SafetyHandbook = () => {
  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);

  const [error, setError] = useState("");

  const acknowledgedState = useState(false);

  const [isAcknowledged, setAcknowledged] = acknowledgedState;
  const [SignatureDate, setSignatureDate] = useState(new Date());
  const [VerificationDate, setVerificationDate] = useState(new Date());

  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dept: '',
  })
  useEffect(async () => {
    let userProfile = await JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id: userProfile.id })
    let data = {
      firstName: res?.employee?.firstName || '',
      middleName: res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
      dept: res?.employee?.SubDepartment?.name || '',
    }
    setUserData(data)
  }, [])

  const [initialForm, setInitialForm] = useState(false)
  useEffect(() => {
    if (initialForm == true)
      submit();

    setInitialForm(true)
  }, [isAcknowledged]);

  const submit = async () => {
    try {
      setPosting(true);

      let data = {
        /** Disabling checks for pre-filled fields */
        // name: document.getElementById("nameText").value,
        // department: document.getElementById("deptText").value,
        signature: document.getElementById("nameSignature").value,
        // date: SignatureDate.toISOString(),
        // verifcationName: document.getElementById("verificationSignature").value,
        // verificationDate: VerificationDate.toISOString(),
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
      // console.log("clickerd");
      const captureElements = Array.from(
        document.getElementsByClassName("capture")
      );

      const images = [];

      showSnackBar("Generating pdf...");

      for await (let i of getGenerator(captureElements.length)) {
        const captureElement = captureElements[i];

        let canvas = await html2canvas(captureElement);

        let image = canvas.toDataURL("image/png");

        images.push(image);
      }


      const resposne = await users.submitForm({
        image: images,
        form: 16,
      });

      const step4FormsSubmitted =
        JSON.parse(storage.get("step-4-form-safetyHandbook")) || true;

      storage.set(
        "step-4-form-safetyHandbook",
        JSON.stringify(step4FormsSubmitted)
      );

      const step4FormPosted = new BroadcastChannel("step4form_posted");

      step4FormPosted.postMessage({ topic: "form-updated", message: {} });

      showSnackBar("Form has been submitted!");


      window.self.close();
    } catch (exc) {
      console.log(exc);
      setPosting(false);
      setAcknowledged(false);
      return showSnackBar(exc.message);
    }
  };

  return (
    <Grid container xs={12} className="LiqForms-Container">
      <TableContainer className="MainTable">
        <Table className="SecondMainTable">
          <TableRow>
            <TableCell>
              <Table className="w100">
                <TableRow className="w100 mt10 row justify-center">
                  <TableCell>
                    <Avatar
                      alt="TGS"
                      className="TGSLogoSVGBook"
                      src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg"
                    />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100" style={{ marginTop: "250px" }}>
                  <TableCell className="w100 header textCenter UnderLine bold font26">
                    EMPLOYEE SAFETY HANDBOOK
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt30">
                  <TableCell className="w100 textCenter">
                    ©Copyright 2019, Trans-Global Solutions, Inc.
                    <br />
                    All rights reserved.
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
        </Table>
        <Grid className="PageNum">1</Grid>
      </TableContainer>

      {/* ----------- Page 2 2 ----------- */}
      <Grid xs={12} className="pageBreak" id="2">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 font14">
                    <TableCell>
                      Dear New Employee:
                      <br />
                      <br />
                      I welcome you to Trans-Global Solutions, Inc. (TGS). At
                      TGS we are committed to safety and providing you with a
                      safe and healthy work environment. As part of our
                      commitment, our management staff will ensure that you
                      receive the guidance and direction you need to help you
                      become a productive and safety conscious member of our
                      workforce.
                      <br />
                      <br />
                      Because of our Teamwork approach, we believe that all of
                      our employees must participate in maintaining a safe work
                      place. This Employee Safety Handbook has been developed to
                      demonstrate our commitment to your safety and to inform
                      you of general safety rules and policies TGS has
                      established as part of your safety orientation.
                      <br />
                      <br />
                      As a condition of your employment with Trans-Global
                      Solutions, Inc., all employees are required to follow all
                      company safety policies, procedures, practices, rules,
                      orders, regulations and standards established by our
                      Safety Department, not only for your protection, but in
                      order to comply with regulatory safety requirements.
                      Should you discover an unsafe condition that would affect
                      you or your fellow employee, immediately contact your
                      supervisor or Site Safety Coordinator.
                      <br />
                      <br />
                      As a TGS employee, you are required to immediately report
                      to your supervisor and/or designated Site Safety
                      Coordinator, any injury or illness that occurs while
                      performing your assigned duties. Should you experience an
                      occupational injury or illness, our supervisors will make
                      sure that you receive immediate and appropriate medical
                      care necessary to treat you and help you on your way to
                      recovery.
                      <br />
                      <br />
                      At TGS, we believe our employees are valuable and
                      essential for our growth and prosperity. Therefore, our
                      commitment to your safety, and investment in your
                      individual growth, is paramount.
                      <br />
                      <br />
                      This handbook provides a fundamental overview of safety
                      rules and practices that make up a brief, but essential,
                      part of our total health and safety program. Use this
                      handbook as your reference guide concerning your health
                      and safety. Should you have any questions concerning your
                      safety and security, contact your designated Site Safety
                      Coordinator or the TGS Safety Department.
                      <br />
                      <br />
                      Safety should not be considered a switch that we turn on
                      when we come to work and turn off when we go home, but
                      rather a personal commitment for a better way of life for
                      you and those close to you. Apply safe work habits at the
                      beginning of your every thought and action, whether at
                      work or play. You will be glad you did. Good luck and be
                      safe.
                      <br />
                      <br />
                      <br />
                      Sincerely,
                      <br />
                      <br />
                      <br />
                      Richard R. Scott, President
                      <br />
                      Trans-Global Solutions, Inc.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">2</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 3 ----------- */}
      <Grid xs={12} className="pageBreak" id="3">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 mt30 pr60">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100" style={{ margin: "60px 0" }}>
                    <TableCell className="w100 header font26 bold textCenter">
                      Table of Contents
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w94 row PageLIstLine">
                      Company Safety Policy<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#3">3</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Safety – It’s Part of Every Job<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#4">4</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      General Safety Rules<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#7">7</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Dress for the Job<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#8">8</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Warning Signs & Barricades<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#10">10</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Fall Protection<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#3">3</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Rules for Using Manual & Powered Hand Tools<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#11">11</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Electrical Safety<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#11">11</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Personal Protective Equipment<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#7">7</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Back Injuries Don’t Have to Happen<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#8">8</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      You Have the Right to Know<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#10">10</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      First Aid Kits<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#10">10</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Protection From Blood Borne Pathogens<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#11">11</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      In Case of an Injury<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#11">11</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Hazardous Energy Control<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#12">12</a>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">3</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 4 ----------- */}
      <Grid xs={12} className="pageBreak" id="4">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60">
              <TableCell className="w100">
                <Table className="w100" style={{ marginTop: 50 }}>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Fire Safety Begins With You<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#13">13</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      How to Use a Fire Extinguisher<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#13">13</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Use the P.A.S.S. Method<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#14">14</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Emergency Evacuation Procedures<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#14">14</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Working With Powered Machines<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#15">15</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Welding & Cutting<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#16">16</a>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">3</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 4 ----------- */}
      <Grid xs={12} className="pageBreak" id="4">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60">
              <TableCell className="w100">
                <Table className="w100" style={{ marginTop: 50 }}>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w94 row PageLIstLine">
                      Scaffold Safety<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#17">17</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Ladders<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#18">18</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Trenches & Excavations<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#18">18</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Confined Space Entry<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#20">20</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Safety Is an Everyday Priority<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#20">20</a>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">6</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 7 ----------- */}
      <Grid xs={12} className="pageBreak" id="7">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Employee Acknowledgement & Acceptance of Safety Policy,
                      Rules & Procedures<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#21">21</a>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">4</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 5 ----------- */}
      <Grid xs={12} className="pageBreak" id="5">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt30 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Company Safety Policy
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w100 textJustify">
                      We at Trans-Global Solutions, Inc. believe you are an
                      important part of our company. And, our success as a
                      company depends upon your individual skills, energies and
                      contributions. With this in mind, our Company believes
                      that:
                      <br />
                      <br />
                      <dot /> All injuries can be prevented
                      <br />
                      <br />
                      <dot /> Working safely is a priority in every job.
                      <br />
                      <br />
                      <dot /> Accident prevention is good business – as it
                      increases productivity and minimizes humansuffering.
                      <br />
                      <br />
                      <dot /> Our Management is responsible for providing a
                      reasonable and safe workplace.
                      <br />
                      <br />
                      <dot /> Employees are ultimately responsible for their own
                      personal safety and that they must follow allestablished
                      sage work practices as a condition of employment.
                      <br />
                      <br />
                      <dot /> Our Management must audit and monitor safety
                      performances and working environmentconditions.
                      <br />
                      <br />
                      <dot /> Safety compliance and controlling future loss
                      requires the participation of all Employees toimprove
                      safety awareness and prevent accidents and injuries.
                      <br />
                      <br />
                      Your involvement, cooperation and personal commitment to
                      safety is essential. Keep in mind that maintaining a safe
                      workplace is a team effort. We need you on this team. We
                      appreciate all the efforts you can make toward safety. We
                      welcome any and all helpful comments. Together, we can
                      make the difference. Together, we CAN prevent accidents
                      and injuries.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt30 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Safety – Its Part of Every Job
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w100 textJustify">
                      There is NO JOB recognized by this Company that cannot be
                      performed safely. Don’t take shortcuts. Don’t take risks.
                      There is only one way to perform your job. If it can’t be
                      done safely, we don’t want you to do it. ALWAYS talk with
                      your Supervisor if something appears to be unsafe or if
                      you see a hazard that could injure you or others.
                      <br />
                      <br />
                      Statistics reveal that a majority of workplace injuries
                      are caused by unsafe acts like taking shortcuts or
                      violating safe working procedures. Safety is PART OF
                      EVERYONE’S JOB and a CONDITION OF YOUR EMPLOYMENT under
                      the safety policies set fourth by Trans-Global Solutions,
                      Inc.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">5</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 6 ----------- */}
      <Grid xs={12} className="pageBreak" id="6">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  <TableRow className="font14">
                    <TableCell className="w100 textJustify">
                      The first time you are observed violating a safety rule or
                      procedure, you will be counseled on how to correct the
                      unsafe behavior and why this is important. Any employee
                      who continues to violate TGS safety rules, policies,
                      procedures and orders and/or continues to demonstrate
                      unsafe behavior, SHALL BE subject to disciplinary action
                      up to and including termination of employment.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      General Safety Rules
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 textJustify">
                      <dot /> ALWAYS report to your job rested, alert and ready
                      to work
                      <br />
                      <br />
                      <dot /> All injuries are to be reported immediately to the
                      Supervisor, no matter how slight.
                      <br />
                      <br />
                      <dot /> Conduct that threatens, intimidates, or coerces
                      another employee at any time, includingoff-duty periods,
                      will not be tolerated and will be subject to disciplinary
                      action and/or upto termination. This includes abusive
                      language and all acts of harassment, violence orthreats of
                      violence. Any such acts or threats should be reported
                      immediately to theSupervisor or to Management.
                      <br />
                      <br />
                      <dot /> Horseplay and/or reckless behavior that may be
                      dangerous to others as well as gamblingand any other
                      illegal conduct shall be STRICKTLY PROHIBITED and may
                      result inimmediate termination.
                      <br />
                      <br />
                      <dot /> Firearms, weapons of any kind and other dangerous
                      or hazardous devises or substancesare prohibited from the
                      premises of any TGS work facility and customers
                      premises,which include parking lots.
                      <br />
                      <br />
                      <dot /> Alcohol and illegal or un-prescribed drugs are
                      PROHIBITED at work. Those violatingthis rule will be
                      subject to disciplinary action and/or immediate discharge.
                      <br />
                      <br />
                      <dot /> ALWAYS tell your Supervisor prior to starting the
                      work period if you are takingmedication that could cause
                      dizziness, drowsiness or other side affects that might
                      impairyour ability to safely perform your work assignments
                      or be dangerous at work.
                      <br />
                      <br />
                      <dot /> NEVER operate any type of equipment or machinery
                      in the workplace or as part of yourwork until you have
                      been properly trained and authorized by Corporate
                      Management.
                      <br />
                      <br />
                      <dot /> All safety equipment and guarding must be in place
                      on equipment or machinery duringoperation.
                      <br />
                      <br />
                      <dot /> Only authorized personnel are allowed to remove
                      guarding for repair or cleaning.
                      <br />
                      <br />
                      <dot /> Know the location of all emergency stop buttons.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">6</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 7 ----------- */}
      <Grid xs={12} className="pageBreak" id="7">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 textJustify">
                      <dot /> If a machine, equipment or electrical circuit is
                      “Tagged Out”, “Locked Out” or thehazardous energy is
                      otherwise isolated, DO NOT remove the lock or tag, touch
                      or attemptto start or operate it.
                      <br />
                      <br />
                      <dot /> Never place your hand or any other part of your
                      body into operating equipment for anyreason.
                      <br />
                      <br />
                      <dot /> Make sure the area is clear before you turn on a
                      machine.
                      <br />
                      <br />
                      <dot /> Do not leave powered machines or vehicles running
                      when it requires an operator’sattention.
                      <br />
                      <br />
                      <dot /> Do not do cleaning, adjusting or maintenance on
                      any machine or vehicle while it’s inoperation or motion.
                      <br />
                      <br />
                      <dot /> Keep the work area clean. Do not let debris
                      clutter your work area. Clean up as spillsimmediately.
                      <br />
                      <br />
                      <dot /> IMMEDIATELY report any injury including any fall
                      to your Supervisor & designatedSite Safety Coordinator,
                      even if you don’t think you are hurt.
                      <br />
                      <br />
                      <dot /> Report any mechanical problem with equipment,
                      machines, tools or vehicles to yourSupervisor & designated
                      Safety Representative. DO NOT try to use a machine, too
                      orvehicle that is not working properly. Also, DO NOT
                      attempt to fix the problem yourself.
                      <br />
                      <br />
                      <dot /> Personal Electronic Devices are not allowed at
                      work.
                      <br />
                      <br />
                      <dot /> DO NOT do unassigned work that could get you hurt.
                      ALWAYS inform your Supervisor& designated Site Safety
                      Coordinator if you have never performed a specific type
                      ofwork before. Together, you, your Supervisor and your
                      designated Site SafetyCoordinator should determine the
                      safest way to do it.
                      <br />
                      <br />
                      <dot /> If you are UNSURE about how to do a job safely,
                      ALWAYS ask your Supervisor or SiteSafety Coordinator
                      before you begin the work.
                      <br />
                      <br />
                      <dot /> A “Release to Return to Work” is required from the
                      physician if you are under aphysician’s care, taking
                      medication or have been absent from work due to illness
                      orinjury.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">7</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 8 ----------- */}
      <Grid xs={12} className="pageBreak" id="8">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Dress Safe for the Job
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w100 textJustify">
                      Dress for work. Don’t wear torn or loose clothing that can
                      get snagged on handles or caught in moving machinery.
                      Clothes should fit right. Avoid wearing jewelry in the
                      workplace. Rings, watches, bracelets and chains can get
                      caught on handles and in moving parts.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Warning Signs and Barricades
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">9</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 10 ----------- */}
      <Grid xs={12} className="pageBreak" id="10">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w100 textJustify">
                      Warning signs are provided on work sites to caution you of
                      conditions within work areas. All warning signs and
                      barricades must be obeyed to ensure your safety.
                      Barricades are always required around most excavations,
                      holes, floor or roof openings, roof edges, elevated
                      platforms, certain types of overhead work or whenever
                      people should be warned against falling in, through or off
                      of certain landings. Should you not understand the meaning
                      of any warning signs or should you have any questions
                      about your safety within a work area, always notify your
                      Supervisor or designated Site Safety Coordinator. Always
                      notify your Supervisor if you notice any work areas which
                      require specific warning signs or barricades.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Fall Protection
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w100 textJustify">
                      Any employee working at elevated heights of six (6) feet,
                      or greater, above floor, landing or round level shall be
                      required to use fall protection and follow the company’s
                      fall protection program. When a fall exposure can not be
                      prevented by guardrails, covers, safety nets or warning
                      lines; controlled access zones, personal fall arrest
                      systems, a safety monitoring system and/or a fall
                      protection plan shall be used.
                      <br />
                      <br />
                      Each employee is responsible for inspecting their personal
                      fall protection equipment prior to its use, including
                      anchor points, snap-hooks, lanyards, rope-grabs,
                      deceleration devices and any other body restraining
                      holding device. Any deterioration noted shall be
                      immediately reported to the designated Site Safety
                      Coordinator or a person designated by the Director of
                      Safety who is trained in Fall Protection and is authorized
                      as a Competent Person to repair or replace any such items
                      prior to use.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">8</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 9 ----------- */}
      <Grid xs={12} className="pageBreak" id="9">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Rules for Using Manual & Powered Hand Tools
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 textJustify">
                      NEVER use a tool, machine or piece of equipment unless you
                      have been trained on how to use it safely. Your Supervisor
                      must ensure that each Employee under his/her authority
                      demonstrate safe work practices. There are safety
                      considerations for using manual and powered hand tools as
                      well:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow>
                    <TableCell className="w100 pt30 pb30 font14 textJustify">
                      <arrrow /> Inspect your hand tools before using them.
                      Inform your Supervisor or designated SiteSafety
                      Coordinator if they’re broken, dull, mushroomed or
                      otherwise defective in anyway.
                      <br />
                      <br />
                      <arrrow /> Use the right tool for the job. If you’re
                      unclear as to what the “right” tool is for aparticular
                      job, ask your Supervisor or designated Site Safety
                      Coordinator.
                      <br />
                      <br />
                      <arrrow /> Always keep all of your tools in good
                      condition.
                      <br />
                      <br />
                      <arrrow /> Store your tools properly when you’re not using
                      them.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 textJustify">
                      Hammers: Use a hammer only if it is in good condition with
                      the head firmly attached to the handle. Defective hammers
                      should be repaired or replaced prior to use. Grip the
                      handle close to the end to ensure an effective blow.
                      Hammer handles are intended for gripping; do not use them
                      as pry bar or for light tapping. Do not use a wrench, rod,
                      bolt or other tool as a hammer. Never strike hardened
                      objects, such as a wrench, file or another hammer, with
                      anything except a rawhide or soft-metal hammer.
                      <br />
                      <br />
                      Pliers: Pliers are to be used according to their design;
                      gripping an cutting. Never use pliers for loosening or
                      tightening nuts or bolts. Always use a wrench for nuts and
                      bolts. For firm grip with minimum effort pliers should be
                      as nearly parallel as possible. Pliers that cut wire with
                      one hand should always be chosen.
                      <br />
                      <br />
                      Wrenches: The proper wrench, or adequate size, should be
                      chosen for the job, i.e. pipe, crescent, open end, box
                      end, socket, etc. Wrenches should be inspected frequently
                      for deterioration. Repair or replace damaged wrenches
                      prior to use. Wrenches should not be used as hammers.
                      Always replace worn jaws with new ones. Jaw teeth should
                      be kept sharp and clean.
                      <br />
                      <br />
                      If leverage with a small wrench is insufficient, a larger,
                      stronger wrench should be obtained. Snipes or cheaters
                      should not be used with small wrenches, but with larger
                      wrenches designed to accommodate their use. Always makes
                      sure the wrench has a firm hold prior to applying weight
                      against it. Feet should be positioned so that balance is
                      maintained when the joint or fitting loosens or the wrench
                      slips. A wrench should always be pulled toward the open
                      jaws rather than away as this helps tighten the grip and
                      prevents the jaws from spreading. A fixed jaw or an
                      adjustable wrench is stronger than a movable jaw wrench.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">9</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 10 ----------- */}
      <Grid xs={12} className="pageBreak" id="10">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 textJustify">
                      Screwdrivers: A Screwdriver handle should be smooth and
                      undamaged but not slippery. The side of the shank should
                      be straight and exactly parallel to fit the slot in the
                      screw head. The end of the screwdriver bit should be at an
                      exact right angle. The accuracy of fit between the bit and
                      the screw head should be a close fit, whether it is the
                      standard Slotted or Phillips Head type. Never use a
                      screwdriver as a chisel or pry bar. Do not use a
                      screwdriver with a worn, chipped or broken tip. Keep the
                      bit filed square, following the original taper line. Use a
                      screwdriver with an insulated handle for electrical work.
                      <br />
                      <br />
                      Files: Always equip files with tight fitting handles prior
                      to use, as the end of the tang is very sharp. Whenever
                      possible, clamp the part to be filed in a vise. File teeth
                      are made to cut in one direction in a forward motion.
                      Never use a file for prying as the body of the file is
                      brittle and a slight bending force will snap it. Never use
                      a file as a chisel.
                      <br />
                      <br />
                      Chisels: Choose the appropriate sized chisel for the job
                      and choose a hammer large enough for the chisel. Select a
                      chisel with a cutting edge the same width or wider than
                      the cut required. Keep the cutting edge of the chisel
                      sharp and shaped according to the cut to be made. Never
                      use mushroomed-shaped heads as flying chips may occur.
                      Heads should be dressed as soon as they begin to crack.
                      Never use a wood chisel without a handle. Hold a chisel
                      between thumb and forefinger, palm up, keeping the
                      knuckles out of the way. Do not attempt to hold a chisel
                      if the hands are numb with cold. Always chisel away from
                      the body. Always wear eye protection while using a chisel.
                      <br />
                      <br />
                      Power Tool: Typical injuries from power tools include, but
                      are not limited to, burns, cuts, strains, electrical
                      shock, and eye particles, fires, falls and gas explosions.
                      A tool should never be left overhead as the cords may be
                      pulled causing the tool to fall. Cords and lines should be
                      kept out of the trafficked area and away from oil, hot
                      surfaces and chemicals. A trip on a cord or line could tug
                      on the cord, causing a tool to jam, and exposing the
                      operator and others to injury.
                      <br />
                      <br />
                      Ground portable electric tools are the best way to
                      eliminate electric shock. Do not stand in water when using
                      a power tool, even if it is grounded. The thee-way plug
                      and receptacle is the best method of grounding. Use ground
                      fault interrupter receptacles, or ground fault interrupter
                      circuit breakers, whenever a power source is tapped.
                      <br />
                      <br />
                      Electrical cords should be inspected prior to use and kept
                      in good condition. Always use heavy-duty plugs that clap
                      to the cord to prevent a strain on the conductors. Always
                      pull the plug, not the cord. Protect all powered tools
                      against sharp objects, heat and oil.
                      <br />
                      <br />
                      If an electrical drill is dropped, eyes may be struck by
                      flying debris. Although drill bits do not have guards,
                      some protection can be obtained from carefully chosen
                      bits. Electric saws are well guarded and should never be
                      jammed or crowded into the material being cut. Always
                      choose saws equipped with a trigger switch, which shuts
                      off the power once pressure is released.
                      <br />
                      <br />
                      Use dust goggles or plastic face shields whenever grinding
                      wheels, buffers and brushes are used.
                      <br />
                      <br />
                      Never use electric motor driven tools in any gaseous
                      atmosphere as an explosion may occur.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">10</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 11 ----------- */}
      <Grid xs={12} className="pageBreak" id="11">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Electrical Safety
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w100 row textJustify">
                      Most jobs will have some exposure to electricity. You may
                      be working with an electrical tool or machine, or simply
                      plugging a light or extension cord into an outlet. These
                      are everyday activities you do at home as well as work.
                      Remember, though, that electricity ALWAYS deserves special
                      attention and caution. An accident with electricity can be
                      one of the most serious. A single mistake with an
                      electrical tool, plug, cord or circuit can kill you. This
                      is why the Company has adopted special safe working
                      procedures regarding electricity. Here are some of the
                      basic rules:
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w60  textJustify">
                      <arrrow /> No Employee shall be allowed to performany
                      electrical maintenance or repair of anykind on any
                      electrical equipment,machinery, tool, component or circuit
                      unlesshe/she demonstrates competency inelectrical service
                      and hazardous energy isolation; or he or she has been
                      trained in electrical safety and/or authorized
                      bymanagement.
                    </TableCell>
                    <TableCell className="w40 justify-end row">
                      <span className="ElectricalSafetyImage"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14">
                    <TableCell className="w100 textJustify">
                      <arrrow /> Be alert concerning electrical hazards. Report
                      any smoking or sparking in a switch oroutlet. Report warm,
                      hot, damaged or defective wiring, electrical cords and
                      plugs.
                      <br />
                      <br />
                      <arrrow /> NEVER use a tool or equipment that causes an
                      electrical “tingle” to the touch. Unplug ordisconnect it
                      and take it OUT OF SERVICE so that no one else will use
                      it. Immediatelyreport the incident to your Supervisor &
                      designated Site Safety Coordinator.
                      <br />
                      <br />
                      <arrrow /> Report potential electrical hazards to your
                      Supervisor & designated Site SafetyCoordinator, like
                      damaged or defective electrical switches, plugs, cords,
                      receptacles,electrical tools, or electrical boxes with
                      open or missing covers.
                      <br />
                      <br />
                      <arrrow /> NEVER use an electrical tool or equipment while
                      exposed to direct wet moist conditionsand rain or while
                      stand in water. ALWAYS dry your hands if wet with
                      perspiration.
                      <br />
                      <br />
                      <arrrow /> Many electrical tools have a third prong on the
                      plug. This is a grounding device toprotect you from
                      electrical shock. DO NOT use the tool or machine if the
                      groundingprong is broken off. If a tool does NOT have a
                      three-prong plug, look carefully at thecase. Unless it is
                      marked or labeled as being “Double Insulated”, DO NOT use
                      it!
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w30">
                      <span className="MachineImage"></span>
                    </TableCell>
                    <TableCell className="w70  textJustify">
                      <arrrow /> ALWAYS use ground-fault interrupters (GFCI)
                      wheneverpossible. Especially when using extension cords,
                      portable powered hand tools, machinery, equipment and when
                      exposed to wet conditions.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">11</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 12 ----------- */}
      <Grid xs={12} className="pageBreak" id="12">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font16">
                    <TableCell className="w100 textJustify">
                      <arrrow />
                      Ensure that all electrical cords and extension cords are
                      continuous without splices, cuts,tape, or exposed
                      insulation.
                      <br />
                      <br />
                      <arrrow />
                      Keep clear access of at least three feet around electrical
                      circuit boxes, main switches andshutoffs.
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Personal Protective Equipment
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14">
                    <TableCell className="w100 textJustify">
                      Certain work with equipment or chemicals may require use
                      of Personal Protective Equipment for your eyes, face,
                      hands, ears or other parts of your body. ALWAYS read the
                      product label, MSDS or manufacturer’s instructions BEFORE
                      you start work. If instructions specify use of Personal
                      Protective Equipment, DO NOT begin without it! Contact
                      your Supervisor and/or designated Site Safety Coordinator
                      should you have any questions concerning PPE. Here are
                      types of Personal Protective Equipment that may be
                      required:
                      <br />
                      <br />
                      <arrrow /> <b>Eye Protection –</b> such as safety glasses,
                      goggles, face shields, welding goggles. Youmust wear
                      approved safety glasses with side shields while performing
                      work that couldcause something to strike your eyes. For
                      some tasks, you may need to wear a full-facedshield. Ask
                      your Supervisor & designated Site Safety Coordinator.
                      Regular eyeglassesor sunglasses are NOT adequate for eye
                      protection in the workplace. When you aremixing or using a
                      chemical, you must wear safety splash goggles.
                      <br />
                      <br />
                      <arrrow /> <b>Hearing Protection –</b> Such as earplugs,
                      earmuffs or ear cups. These types of protectivedevices
                      provide important insulation from loud noises in the
                      workplace. If an area isdesignates as a high-noise area,
                      or the task is a high-noise task, you must wear
                      properhearing protection. Check with your Supervisor &
                      designated Site Safety Coordinator.
                      <br />
                      <br />
                      <arrrow /> <b>Hand Protection –</b> such as gloves. Use
                      these to protect your hands from cuts, nicks,splinters and
                      burns. Gloves may be required for jobs where your hands
                      come in contactwith broken glass, sharp metal or edges, or
                      the blades of knives, saws or cutting blades.Special
                      chemical-resistant gloves should be worn when working with
                      chemical products.Check the product label of MSDS.
                      <br />
                      <br />
                      <arrrow /> <b>Foot Protection –</b> ALWAYS wear shoes
                      designed for the environment in which you willbe working.
                      You must wear sturdy footwear that is in good condition
                      and has non-slipsoles. Soles must be intact with nothing
                      in the footwear hanging loose. Always wearsocks with
                      shoes. Shoes should be properly tied. Sandals, moccasins,
                      open-toedfootwear and high-heeled or leather-soled boots
                      are specifically prohibited in theworkplace. For certain
                      jobs, you may need to wear additional protection against
                      crushinginjuries to your feet and toes. Ask your
                      Supervisor.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">12</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 13 ----------- */}
      <Grid xs={12} className="pageBreak" id="13">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font16">
                    <TableCell className="w100 textJustify">
                      <arrrow />
                      <b>Respiratory Protection –</b> such as dust masks and
                      cartridge-type respirators. Alwaysread the MSDS for
                      chemicals to see if special respiratory protection is
                      required. FollowMSDS instructions carefully. If
                      respiratory protection such as Air-Purifying
                      Respirators(APR), Supplied-Air Respirators (SAR) or a
                      Self-Contained Breathing Apparatus(SCBA) is specified, you
                      must be trained in the proper use, maintenance and storage
                      ofthis equipment. DO NOT wear a respirator unless you have
                      been properly trained, fittested and the company’s medical
                      provider has conducted a pulmonary function testmedically
                      approved by the Director of Safety. If you need a
                      replacement dust mask,respirator cartridge or air
                      cylinder, tell your Supervisor & designated Site
                      SafetyCoordinator.
                      <br />
                      <br />
                      <arrrow />
                      <b>Head Protection –</b> If you are exposed to flying
                      particles, falling objects, electrical shockor burn
                      potentials; you will need to wear head protection. Head
                      protection must be of atype authorized by the Company.
                      Head protection is commonly recognized as safetyhelmets,
                      safety hats or hard hats. A “Bump Hat” is NOT considered
                      proper headprotection. Bump hats should never be worn in
                      areas that require an ANSI-approvedhead protection.
                      <br />
                      <br />
                      Part of your job is to keep PPE clean and properly stored.
                      If your equipment needs repair or replacement, tell your
                      Supervisor & designated Site Safety Coordinator
                      immediately.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb40">
                    <TableCell className="w100 font22 bold textCenter header">
                      Back Injuries Don’t Have to Happen
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16">
                    <TableCell className="w40">
                      <span className="BackInjuries"></span>
                    </TableCell>
                    <TableCell className="w60  textJustify">
                      Lifting and carrying are parts of the job. Back injuries
                      don’t have to be. Before you lift something, be sure that
                      you can safely handle it by yourself.
                      <br />
                      <br />
                      If you can’t, GET HELP. You may need to use a mechanical
                      lifting device such as a hand truck or cart. Lifting
                      safely is part of your job. Following safe lifting
                      procedures is a condition of employment under the policies
                      of Trans-Global Solutions, Inc.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font16 mt16 textJustify">
                    <TableCell>
                      Before you lift anything, “TEST” the load to see if it is
                      too heavy or awkward for you to lift alone. Remember –
                      ALWAYS get help when you need it.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">13</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 14 ----------- */}
      <Grid xs={12} className="pageBreak" id="14">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font16">
                    <TableCell className="w100 textJustify">
                      <b className="bold header font16">
                        If the Load is manageable, follow these rules for safe
                        lifting:
                      </b>
                      <br />
                      <br />
                      1. Make sure your footing is firm and check the pathway to
                      be sure it’s clear of trip and sliphazards or
                      obstructions.
                      <br />
                      <br />
                      2. Lift with the strong muscles in your leg muscles, NOT
                      with your weaker back muscles.Keep your back as straight
                      as possible. DO NOT lean over to lift. Turn by moving
                      yourfeet, NOT by twisting your body.
                      <br />
                      <br />
                      3. “Tuck” your pelvis by tightening your stomach muscles.
                      This helps maintain the normalcurvature of your spine.
                      <br />
                      <br />
                      4. Bend at your knees – NOT at your waist. This helps you
                      keep your center of balance. Itlets the strong muscles in
                      your legs do the lifting.
                      <br />
                      <br />
                      5. “Hug” the load. Try to hold the object you are lifting
                      as close to your body as possible asyou gradually
                      straighten your legs to a standing position. Try to keep
                      your back asstraight “up and down” as possible.
                      <br />
                      <br />
                      6. Avoid twisting. Twisting can overload your spine and
                      lead to serious injury. Make sureyour feet , knees and
                      torso are pointed in the same direction at all times when
                      lifting andcarrying .<br />
                      <br />
                      7. Use these same techniques when setting down your load.
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row wrap font16">
                    <TableCell className="w100  textJustify">
                      8. You may choose to use a protective back belt when
                      lifting but remember – the back beltis a protection only.
                      Using a back belt does NOT mean you can lift more than
                      yourphysical limits without the belt. Tighten your belt to
                      perform the lifting task and loosen when completed.
                    </TableCell>
                    <TableCell className="w70">
                      Follow manufacturer’s written instructions thatcome with
                      the belt. If you have any questions, ask yourSupervisor or
                      designated Site Safety Coordinator BEFORE youperform a
                      lifting task wearing the belt. If your belt is too loose
                      fora snug fit, or too small to allow full contact of the
                      Velcro materialon the surfaces that secure the belt in
                      place, tell your Supervisor ordesignated Site Safety
                      Coordinator immediately.
                      <br />
                      <br />
                    </TableCell>
                    <TableCell className="w30">
                      <span className="ParcelImage"></span>
                    </TableCell>
                    <TableCell className="w100  textJustify">
                      DO NOT use a back belt to perform lifting or carrying
                      tasks atwork unless if fits properly, is in good
                      condition, and you use itproperly.
                      <br />
                      <br />
                      9. NEVER try to lift anything that you think is too heavy.
                      ALWAYS GET HELP!
                      <br />
                      <br />
                      10. Avoid lifting higher than your shoulder height.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">14</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 15 ----------- */}
      <Grid xs={12} className="pageBreak" id="15">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font16">
                    <TableCell className="w100 textJustify">
                      NEVER lean over at the waist and lift while your back is
                      in line with the floor.
                      <br />
                      <br />
                      This is an improper lifting position. It puts unnecessary
                      and avoidable strain on the back, even when the load you
                      are lifting is comparatively light. Leaning over to lift
                      is an improper method and is “Expressly Prohibited!”
                      <br />
                      <br />
                      Also, notify your Supervisor & designated Site Safety
                      Coordinator at the beginning of the shift if you have back
                      pain, or have suffered back strain or injury while off
                      duty. This is important because, if you have suffered back
                      strain or injury off the job (a fall, sports injury or
                      some other injury) you MUST NOT begin work without
                      discussing this with your Supervisor or designated Site
                      Safety Coordinator.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt60">
                    <TableCell className="w100 row justify-center">
                      <span className="ExpresslyProhibited"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">15</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 16 ----------- */}
      <Grid xs={12} className="pageBreak" id="16">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb40">
                    <TableCell className="w100 font22 bold textCenter header">
                      You have the Right to Know About Chemicals in the
                      Workplace
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w80 textJustify">
                      You have the right to know about any hazardous chemicals
                      that you work with in your job. Trans-Global Solutions,
                      Inc. has developed a written Hazard Communications Program
                      that makes this information available and helps you to
                      understand it.
                      <br />
                      <br />
                      Under this program, all Employees must be trained on their
                      “Right-to-Know” about hazardous chemicals used at work.
                      The Company maintains a manual containing the written
                      hazard Communications Program, a chemical inventory list
                      and Material Safety Data Sheets (MSDS) for each hazardous
                      chemical authorized for use in the workplace. They are
                      kept in the Right-to-Know Station. Material Safety Data
                      Sheets are available for you to read and use at any time
                      while you are at work.
                      <br />
                      <br />
                      Each Material Safety Data Sheet supplies important
                      information about a chemical or product. You should read
                      the MSDS for each chemical or product you work with. It
                      specifies the kind of safety equipment you must use when
                      working with the chemical. It also gives first aid
                      instructions in case the chemical injures you. The MSDS
                      will tell you:
                    </TableCell>
                    <TableCell className="w20 row justify-end">
                      <span className="CorrosiveDangerous"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30 font14">
                    <TableCell className="w100 justify-center">
                      <arrrow />A Substances chemical and trade name
                      <br />
                      <arrrow />
                      Physical hazard data
                      <br />
                      <arrrow />
                      Health hazard data
                      <br />
                      <arrrow />
                      Reactivity data
                      <br />
                      <arrrow />
                      Personal Protective Equipment required
                      <br />
                      <arrrow />
                      Manufacturer’s name, address and phonenumber
                      <br />
                      <arrrow />
                      Any hazardous ingredients
                      <br />
                      <arrrow />
                      Fire and explosion data
                      <br />
                      <arrrow />
                      First Aid procedures
                      <br />
                      <arrrow />
                      Spill and leak procedures
                      <br />
                      <arrrow />
                      Labeling information
                      <br />
                      <arrrow />
                      Other special precautions
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">16</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 17 ----------- */}
      <Grid xs={12} className="pageBreak" id="17">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt30 font14 textJustify">
                    <TableCell className="w100">
                      <b>ALWAYS</b> read the label or MSDS before using a
                      chemical product. Follow instructions. <b>DO NOT</b> mix
                      cleaners or other chemicals together unless label
                      instructions tell you to do so. Do not bring any chemicals
                      or cleaning products from home. As a rule, if you get a
                      chemical on your body, wash it off immediately. Seek first
                      Aid if necessary. If you have any questions about a
                      chemical, ask your Supervisor.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb40">
                    <TableCell className="w100 font22 bold textCenter header">
                      First Aid Kits
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      A designated Employee or designated Site Safety
                      Coordinator will be responsible for checking and
                      maintaining the First Aid Kits. A regular inventory of
                      supplies will be taken to ensure that the station or kit
                      remains adequately stocked. Get to know the location of
                      the first aid kit closest to your workstation. If you use
                      the last of any item or notice something missing within
                      the kit, notify your Supervisor and your designated Site
                      Safety Coordinator so that it can be replaced.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 row justify-center">
                      <span className="FirstaID"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb40">
                    <TableCell className="w100 font22 bold textCenter header">
                      Protection from Bloodborne Pathogens
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w70 textJustify">
                      If an Employee decides to provide first aid on an injury
                      involving blood fluids, protective gloves must be worn. We
                      must ALWAYS treat the exposure to any human body fluid as
                      potentially infectious and be cautious of transmission of
                      the Hepatitis B (HBV) or the Human Immunodeficiency Virus
                      (HIV). Proper follow-up procedures include:
                      <br />
                      <br />
                      <Grid className="font14">
                        <arrrow />
                        Disinfecting the contaminated area, clothing and
                        equipment.
                        <br />
                        <br />
                        <arrrow />
                        Putting body fluid contaminated waste/clothing in a
                        labeled biohazard bags orcontainer with the bio hazard
                        symbol and treating it as “Regulated Waste.”
                        <br />
                        <br />
                        <arrrow />
                        ALWAYS notify your Supervisor and designated Site Safety
                        Coordinator if you believe you have been in contact with
                        any human body fluid. You will be offered the
                        opportunity toundergo post exposure testing and medical
                        surveillance.
                      </Grid>
                    </TableCell>
                    <TableCell className="w30 row justify-end">
                      <span className="Biohazard"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">17</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 18 ----------- */}
      <Grid xs={12} className="pageBreak" id="18">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb40">
                    <TableCell className="w100 font22 bold textCenter header">
                      In Case of an Injury
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font16 row">
                    <TableCell className="w80 textJustify">
                      Know where the First Aid Kit is located. If you get hurt
                      on the job, notify your Supervisor IMMEDIATELY. No matter
                      how insignificant the injury may seem, report it. We MUST
                      always render aid by making sure injured/ill employees
                      receive prompt First Aid and, if necessary, professional
                      medical attention. If you fall, hurt your back or suffer
                      any other injury/illness while at work, report it to your
                      Supervisor and designated Site Safety Coordinator
                      IMMEDIATELY – even if you think your not seriously hurt.
                      <br />
                      <br />
                    </TableCell>
                    <TableCell className="w20 row justify-center">
                      <span className="Injury"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font16 row">
                    <TableCell className="w100 textJustify">
                      In these days and times, we must exercise caution and use
                      proper protection when dealing with another person’s
                      blood, body fluids or tissue. Regardless of who the person
                      may be – old, young, male, female, friend, stranger – we
                      cannot KNOW who may or may not carry the HIV Virus (that
                      is associated with AIDS), the deadly Hepatitis B Virus
                      (HBV), or any other dangerous Bloodborne pathogen.
                      <br />
                      <br />
                      Exposure can come from direct mouth contact when
                      performing CPR or Rescue Breathing, or with blood contact
                      while applying bandages. For this reason TGS does not
                      require its employees, as a part of their job, to
                      administer First Aid or CPR (Cardio-Pulmonary
                      Resuscitation) to any workers or anyone else. Each
                      employee reserves his or her personal right to exercise
                      personal judgment as a “Good Samaritan” to help someone
                      who is injured or ill.
                      <br />
                      <br />
                      The information furnished here is intended as an
                      assistance to employees who may choose to act as “Good
                      Samaritans”, with the understanding that no Employee
                      should act beyond his or her capacity or training level
                      when treating an injured or ill person.
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font16 row">
                    <TableCell className="w20 row justify-center">
                      <span className="InjuryTretment"></span>
                    </TableCell>
                    <TableCell className="w80 textJustify">
                      The company will support those employees who choose to act
                      as “Good Samaritans” and will provide opportunities for
                      first aid and emergency response training. If you make the
                      decision to administer First Aid or CPR to someone at
                      work, you MUST protect yourself and the victim first by
                      taking universal precautions like wearing latex gloves,
                      protecting your eyes from blood, and using a one-way CPR
                      mask. If you believe that you have been exposed to an
                      employee’s blood or human body fluids while at work,
                      immediately report this to your Supervisor or designated
                      Site Safety Coordinator.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">18</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 19 ----------- */}
      <Grid xs={12} className="pageBreak" id="19">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb10">
                    <TableCell className="w100 font22 bold textCenter header">
                      Hazardous Energy Control
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 mb40">
                    <TableCell className="w100 font20 textCenter header">
                      (Lockout/Tagout)
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      The isolation of hazardous energy shall be practiced to
                      prevent serious injury or potential death. Only authorized
                      personnel knowledgeable in hazardous energy isolation
                      shall be allowed to perform lockout/Tagout procedures.
                      Failure to follow these procedures could result in
                      disciplinary action, up to and including termination of
                      employment. Recognized hazardous energy shall consist of
                      electrical, mechanical, chemical, pneumatic, kinetic,
                      hydraulic, steam pressure, etc.
                      <br />
                      <br />
                      Authorized personnel shall be in complete control of the
                      hazardous energy at all times and shall be the only
                      individuals authorized to re-energize equipment and/or any
                      other energy systems. All potential energy sources shall
                      be isolated before performing any repairs, maintenance or
                      construction operations by using either of the following
                      methods: Lockout/Tagout, Blanking/Blinding, Double Block
                      and Bleed and Line Breaking or any other approved method
                      of isolating, containing and/or controlling hazardous
                      energy sources.
                      <br />
                      <br />
                      AUTHORIZED personnel shall signify designated Company
                      Employees who are issued locks, keys, tags, and other
                      information, equipment and training in order to safely
                      isolate energy sources and strictly follow the Company’s
                      written Lockout/Tagout procedures. These Employees are
                      directly exposed and actually perform the maintenance or
                      repair work and hazardous energy isolation operations.
                      They may or may not be personnel who operate the
                      equipment, machines or circuits.
                      <br />
                      <br />
                      AFFECTED personnel shall signify those who normally
                      operate or are indirectly exposed to the isolated
                      equipment, machinery or circuits and are not performing
                      the repairs or maintenance operations.
                      <br />
                      <br />
                      OTHER personnel are those who may possibly enter, pass
                      through, or be indirectly exposed to the isolated energy
                      source which has been locked-out and/or tagged-out and has
                      no responsibility directly or indirectly to hazardous
                      energy isolation (lockout/Tagout) operations being
                      performed.
                      <br />
                      <br />
                      When more than one person is involved in maintenance,
                      repair or modification work, EACH employee must apply
                      their own lockout by use of a hasp or multiple lockout
                      devices. Generally, the Supervisor of the work shall be
                      the first to place and last to remove his or her personal
                      lock. Lockouts shall be marked with the name, date and
                      time. ALWAYS use your own lock. NEVER use another person’s
                      lock.
                      <br />
                      <br />
                      Only certain Authorized individuals in the Company are
                      permitted to remove and reenergize a machine or power
                      source that has been locked-out, tagged-out or otherwise
                      isolated.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w70 textJustify">
                      <arrrow />
                      NEVER try to turn on or use a machine or electrical
                      circuit that has alock and/or tag like the one shown to
                      the right.
                      <br />
                      <br />
                      <arrrow />
                      NEVER remove a warning tag.
                      <br />
                      <br />
                      <arrrow />
                      REPORT any powered machine or electrical circuit that is
                      not workingproperly. The machine or circuit must be
                      immediately placed OUT OFSERVICE and tagged “DO NOT
                      OPERATE.
                    </TableCell>
                    <TableCell className="w30 row justify-center">
                      <span className="TrunOnMachine"></span>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">19</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 20 ----------- */}
      <Grid xs={12} className="pageBreak" id="20">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb10">
                    <TableCell className="w100 font22 bold textCenter header">
                      Fire Safety Begins with YOU!
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w70 textJustify">
                      Fire safety begins with fire PREVENTION. Here are things
                      you can do to prevent a fire in the workplace:
                      <br />
                      <br />
                      <arrrow />
                      Observe all “No Smoking” signs.
                      <br />
                      <arrrow />
                      Smoke only in designated smoking areas. Extinguish
                      cigarettes in approved receptacles.
                      <br />
                      <arrrow />
                      Keep a clean work area. Don’t allow trash to pile up.
                      <br />
                      <arrrow />
                      Know the location of fire exits in your area. They must
                      NEVER be blocked or locked to the inside while there are
                      persons in the building. Keep traffic paths to the
                      fireexits and fire extinguishers clear of obstacles.
                      <br />
                      <arrrow />
                      Know where fire extinguishers are located. Don’t hang
                      anything on a fire extinguisher. Don’t blockaccess to a
                      fire extinguisher. Let your Supervisor or designated Site
                      Safety Coordinator know that youhave used a fire
                      extinguisher or if you find one that needs service. Also,
                      report if any fire extinguisher ismissing the extinguisher
                      bracket or pin.
                    </TableCell>
                    <TableCell className="w30 row justify-center">
                      <span className="FireSafety"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb10">
                    <TableCell className="w100 font22 bold textCenter header">
                      How to Use a Fire Extinguisher
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      Fire extinguishers are installed throughout the worksite.
                      They are clearly marked with signs or labels. Fire
                      extinguishers have been specifically placed in designated
                      locations to be near you in the event of an emergency.
                      Know where the fire extinguishers are in your workplace.
                      <br />
                      <br />
                      The Company has provided fire extinguishers that can be
                      used to extinguish the three most common classes of fires
                      you could likely encounter (Class A, B and C).
                      <br />
                      <br />
                      <Grid className="w100 font12">
                        <b className="pr16">Class A</b> Ordinary combustible or
                        fibrous material such as paper, wood, cloth, rubber and
                        some plastics.
                        <br />
                        <br />
                        <b className="pr16">Class B</b> Flammable or combustible
                        liquids such as gasoline, kerosene, paint, paint
                        thinners, propane and chemicals.
                        <br />
                        <br />
                        <b className="pr16">Class C</b> Energized electrical
                        equipment such as tools, appliances or machines; or
                        circuits including wiring, plugs, fixtures, junctions
                        and panel or distribution boxes.
                        <br />
                        <br />
                      </Grid>
                      Always report any fire extinguisher that needs to be
                      recharged or when the gauge is not showing in the “green
                      zone”. An indicator needle pointing out of the green area
                      (into the red) means that there may be too little or too
                      much pressure. All extinguishers require maintenance and
                      servicing. The pin should also be in place and secured
                      with a plastic seal.
                      <br />
                      <br />
                      Notify your Supervisor and designated Site Safety
                      Coordinator about any fire extinguisher that has been
                      used. Arrangements will be made to have it serviced. If an
                      extinguisher is used even a little, it may continue to
                      leak pressure. Over a few days, the pressure can discharge
                      and the extinguisher will be unusable. Let’s keep out fire
                      extinguishers ready for when we might need them the most.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">20</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 21 ----------- */}
      <Grid xs={12} className="pageBreak" id="21">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40">
                    <TableCell className="w100 font22 bold textCenter header">
                      Use the P.A.S.S. Method
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mb10">
                    <TableCell className="w100 font20 textCenter header">
                      When Using A Fire Extinguisher
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w70 textJustify">
                      P -- Break the Seal and PULL the pin.
                      <br />
                      <br />
                      A -- Stand about 3-5 feet or more from the fire and AIM
                      the nozzle at the base of the fire. If you stand too
                      close, pressure from the spray can spread the fire.
                      <br />
                      <br />
                      S -- SQUEEZE the trigger while holding the extinguisher
                      upright. Stand away and move in on the fire.
                      <br />
                      <br />
                      S -- SWEEP the extinguisher from side to side, covering
                      the area of the fire with the extinguisher agent.
                      <br />
                      <br />
                      The overriding rule is to use the extinguisher only if it
                      is safe. Don’t take chances. Don’t attempt to extinguish
                      the fire of you don’t have an adequate number of
                      extinguishers, if the fire spreads beyond where it
                      originated or if the fire is blocking the emergency exit
                      or any means of exit.
                    </TableCell>
                    <TableCell className="w30 row justify-center">
                      <span className="passMethod"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb10">
                    <TableCell className="w100 font22 bold textCenter header">
                      Emergency Evacuation Procedures
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      Despite all precautions, there always is the possibility
                      of fire, chemical spills, serious weather conditions or
                      other forms of emergencies that can occur within the
                      workplace that may necessitate an emergency evacuation.
                      Consequently, it is necessary to have an evacuation plan
                      that everyone understands. The Emergency Evacuation Plan
                      designates escape routes from each work area. These are
                      routes for getting outside and into a safe area the
                      quickest and most direct manner. Evacuation routes are
                      posted on maps throughout the workplace.
                      <br />
                      <br />
                      In an evacuation, all Employees should report to their
                      designated “Gather Area” specific to the location where
                      work is being performed. Upon exiting the building/work
                      area, make sure that you are a safe distance away. Remain
                      in the gathering area so that a head count can be taken.
                      The head count will ensure that al on-duty personnel have
                      been accounted for.
                      <br />
                      <br />
                      Employees who work at a customer plant or facility will be
                      orientated on that particular facility’s emergency
                      evacuation procedures. All Employees will be required to
                      follow all applicable customer safety rules when working
                      at a customer work site.
                      <br />
                      <br />
                      NEVER re-enter the evacuated building for any reason until
                      your Supervisor or designated Site Safety Coordinator has
                      announced the ALL CLEAR!
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">21</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 22 ----------- */}
      <Grid xs={12} className="pageBreak" id="22">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb30">
                    <TableCell className="w100 font22 bold textCenter header">
                      Working with Powered Machines
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      Before you work with a powered machine for the first time,
                      you MUST:
                      <br />
                      <br />
                      1.Read the operations manual. Make sure that you know the
                      contents, such as:
                      <br />
                      <arrow />
                      Personal Protective Equipment required when working with
                      the machine.
                      <br />
                      <arrow />
                      Location of all Emergency Stop Buttons.
                      <br />
                      <arrow />
                      The meaning of all labels for emergencies and warnings.
                      <br />
                      <arrow />
                      Operation of switches and electrical control devices.
                      <br />
                      <arrow />
                      Operation of Pneumatic, hydraulics and other controls.
                      <br />
                      <arrow />
                      The proper procedure for changing dies, bits, blades
                      and/or other components.
                      <br />
                      <arrow />
                      Instructions for speed control and adjustments.
                      <br />
                      <arrow />
                      Procedures for trouble-free travel of material through the
                      machine.
                      <br />
                      <arrow />
                      About safe cleaning of the machine and removal of both
                      finished product and waste.
                      <br />
                      <arrow />
                      Location and function of all automatic feeders, sensors or
                      similar devices.
                      <br />
                      <arrow />
                      How to perform a proper shutdown of the machine.
                      <br />
                      <arrow />
                      Location and function of all safety switches.
                      <br />
                      <br />
                      2.Before each new power-up and start of a shift:
                      <br />
                      <arrow />
                      Check with the operator of the last shift to learn of
                      about the machines condition.
                      <br />
                      <arrow />
                      If more that one person is working with you on the
                      machine, make sure that the others have hadproper
                      orientation and training on the machine.
                      <br />
                      <arrow />
                      Check the surrounding floor for scattered items that could
                      cause slips, trips or falls.
                      <br />
                      <arrow />
                      Don’t continue work if you realize that the machines
                      safety measures are not being obeyed.
                      <br />
                      <arrow />
                      Make sure all protective guarding and covers are in place
                      secured.
                      <br />
                      <arrow />
                      Check to be sure that all emergency stop buttons are
                      operational.
                      <br />
                      <arrow />
                      Make sure that tensions, adjustments and clearances are
                      correct.
                      <br />
                      <arrow />
                      Make sure the machine is free of scrap material or debris.
                      <br />
                      <arrow />
                      Make sure that neither your clothing nor hair can be
                      caught in the machine.
                      <br />
                      <arrow />
                      Remove all jewelry such as rings, necklaces, watches, etc.
                      Keep loose items in your pockets
                      <br />
                      <arrow />
                      Make sure that the machine is free of loose machine parts,
                      tools, cleaning towels, etc.
                      <br />
                      <br />
                      3.To prevent injuries while operating the machine:
                      <br />
                      <arrow />
                      Never reach into a running machine.
                      <br />
                      <arrow />
                      Make sure the machine comes to a complete stop.
                      <br />
                      <arrow />
                      Never open a protecting cover if you are not sure that the
                      machine has come to a complete stop.
                      <br />
                      <arrow />
                      Never put your finger in a running machine or in the area
                      where machine parts come into contactwith material.
                      <br />
                      <arrow />
                      Never leave a stopped machine in a condition where another
                      operator could start the machinewhile you or someone else
                      may be working on it, making adjustments, repairs, etc.
                      <br />
                      <arrow />
                      Never open control panels, wiring, electrical or service
                      covers when the machine is under power.
                      <br />
                      <arrow />
                      No Employee shall be exposed to or allowed to operate any
                      machine unless properly providedwith adequate machine
                      guards.
                      <br />
                      <arrow />
                      No Employee shall be allowed to remove machine guards to
                      perform machine operations.
                      <br />
                      <arrow />
                      No Employee shall operate any powered machinery, equipment
                      or hand tools unless they havebeen properly trained in
                      safety hazards and operations, and authorized by the
                      company.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">22</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 23 ----------- */}
      <Grid xs={12} className="pageBreak" id="23">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      WARNING! It is Company policy that trained and qualified
                      personnel knowledgeable in service repair only perform any
                      repair work of powered machines. DO NOT attempt to make
                      repairs yourself with specific permission of your
                      Supervisor! Before ANYONE works on powered equipment, the
                      main power interrupt must be turned off and secured (i.e.
                      isolated hazardous energy) according to the Company’s
                      Lockout/Tagout procedures.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Welding & Cutting
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w70 textJustify">
                      Hot work operations in any work area can potentially
                      create a fire hazard, especially in enclosed areas. Good
                      ventilation must be provided to reduce the level of toxic
                      fumes that are released during welding and cutting
                      operations. Only trained and authorized personnel shall
                      perform welding and cutting operations. Employees who
                      perform any type of hot work (welding and cutting)
                      operations should follow these safety rules:
                    </TableCell>
                    <TableCell className="w30 row justify-center">
                      <span className="weldingCutting"></span>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify">
                      <arrrow />
                      Respirators of the proper type must be used in locations
                      where ventilation is inadequate and when welding or
                      cutting galvanized metals. Procedures established by
                      thecompanies Respiratory Protection Program must be
                      followed. DO NOT wear a respirator unless youhave been
                      trained and authorized. Ask your Supervisor for
                      instructions.
                      <br />
                      <arrrow />
                      Gas Cylinders MUST be capped when transported and when in
                      use. Cylinders shall never be used asrollers or supports.
                      <br />
                      <arrrow />
                      Cylinders shall be moved by tilting and rolling them on
                      their bottom edges. Regulations shall beremoved had valve
                      caps put in place before cylinders are moved.
                      <br />
                      <arrrow />
                      Before connecting a regulator to a cylinder, crack the
                      valve momentarily (away from you, other workers,and
                      sources of ignition) to clear the valve of dust or dirt.
                      <br />
                      <arrrow />
                      Welding hoses, regulators and cables must be inspected
                      before use and damaged equipment must bereported to a
                      Supervisor and not used.
                      <br />
                      <arrrow />
                      Hoses and cables must be arranged so that they do not
                      create a tripping hazard and are not damaged byother
                      equipment.
                      <br />
                      <arrrow />
                      Never light torches with matches or cigarette lighters.
                      Use only approved friction lighters or otherapproved
                      devices.
                      <br />
                      <arrrow />
                      Only electric welding cables free from repair or splices
                      for a minimum of 10 feet from the electrodeholder shall be
                      used.
                      <br />
                      <arrrow />
                      The frame arc welding equipment must be grounded.
                      <br />
                      <arrrow />
                      When electrode holders are left unattended, the electrodes
                      shall be removed and the holders protectedfrom contact
                      with other employees.
                      <br />
                      <arrrow />
                      Hot electrodes shall not be dipped in water.
                      <br />
                      <arrrow />
                      Whenever welding or cutting, a fire extinguisher of the
                      proper type must be immediately available in thework area.
                      <br />
                      <arrrow />
                      When sparks from welding and cutting could cause a fire in
                      the work area or in other areas exposed tosparks (i.e.
                      opposite side of a wall), a fall watch must be posted.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">23</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 24 ----------- */}
      <Grid xs={12} className="pageBreak" id="24">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      <arrrow />
                      Drums, containers or hollow structures that have contained
                      toxic or flammable substances must becleaned out and
                      purged before welding or cutting may proceed.
                      <br />
                      <arrrow />
                      Compressed gas or oxygen is not to be used for dusting off
                      clothing or cleaning equipment.
                      <br />
                      <arrrow />
                      Make sure that each fuel gas cylinder lead is equipped
                      with a flash arrestor to prevent flashback.
                      <br />
                      <arrrow />
                      Never bring oxygen or fuel gas cylinders into an enclosed
                      area or confined space when not in use.
                      <br />
                      <arrrow />
                      Toxic preservative coatings must be removed at least 4
                      inches on either side of the area that will beheated.
                      (i.e. Gold or Silver cadmium coated metals)
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Scaffold Safety
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      All scaffolds are to be inspected, tagged and approved for
                      use by a “competent person”. If a “competent person” has
                      not checked a scaffold, do not use it. For the purpose of
                      scaffold safety, a “competent person” is a person who has
                      demonstrated his/her capability of identifying existing
                      and predictable hazards and has been authorized by the
                      Director of Safety to take prompt corrective measures to
                      eliminate them, and has been trained in and/or is
                      knowledgeable about scaffold safety as per OSHA
                      regulations.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify">
                      <b class="pr16">A.</b>All scaffolds and platforms over
                      twenty-five (25) feet in height must be designated by a
                      registeredengineer.
                      <br />
                      <br />
                      <b class="pr16">B.</b>Top-rails shall be approximately
                      forty-two (42) inches above the working surface and
                      mid-rails shouldbe approximately twenty-one (21) inches
                      above the working surface.
                      <br />
                      <br />
                      <b class="pr16">C.</b>All wire rope top-rails and
                      mid-rails shall be stretched tight with no more than an
                      approximate two (2)inches deflection.
                      <br />
                      <br />
                      <b class="pr16">D.</b>Toeboards shall extend a minimum of
                      four (4) inches above the working surface.
                      <br />
                      <br />
                      <b class="pr16">E.</b>Guardrails and Toeboards shall be
                      installed in all open side and ends that are more than ten
                      (10) feetabove the ground floor. Scaffolds and work
                      platforms four (4) feet to ten (10) feet high, with a
                      workingsurface less than twenty-four (24) inches in either
                      direction, must have guardrails; Toeboards are
                      notrequired.
                      <br />
                      <br />
                      <b class="pr16">F.</b>Working surfaces shall be
                      constructed of scaffold planks, aluminum picks or
                      three-quarter (3/4) inchplywood. Scaffold planks and
                      plywood shall be free of splits, burns and knots. Nails,
                      No. 9 wire, cleats or bolts shall secure working surfaces.
                      Scaffold planks shall extend a minimum of six (6) inches
                      and a maximum of twelve (12) inches over the end supports.
                      <br />
                      <br />
                      <b class="pr16">G.</b>If required, an access ladder will
                      be provided.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">24</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 25 ----------- */}
      <Grid xs={12} className="pageBreak" id="25">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Ladders
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      Inspect ladders before using them. Use only approved
                      ladders. Never use a ladder that is broken or damaged,
                      i.e. missing rungs or broken or split rails. Use the right
                      ladder for the right job. Never use a ladder that is too
                      short to reach the work and never over-extend the side
                      reach as it may cause the ladder to move. All ladders
                      should have non-skid feet and rungs. Follow the
                      manufacturer’s recommendations for usage and care.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify">
                      <b class="pr16">A.</b>Never use a metal ladder around live
                      or energized electrical equipment. Use a non-conductive
                      typeladder.
                      <br />
                      <br />
                      <b class="pr16">B.</b>Never stand on the top rung of a
                      ladder or above the rung recommended by the manufacturer.
                      <br />
                      <br />
                      <b class="pr16">C.</b>Only one person is allowed on a
                      ladder at any given time.
                      <br />
                      <br />
                      <b class="pr16">D.</b>Always use personal fall protective
                      devices when working on a ladder above six (6) feet.
                      <br />
                      <br />
                      <b class="pr16">E.</b>Never ascend or descend ladders with
                      wet, dirty, greasy hands or feet, or with tools,
                      equipments ormaterials in hands. Use a hoisting rope or
                      other means to get tools, equipment or materials to and
                      fromthe elevated work area. Always face the ladder when
                      ascending or descending.
                      <br />
                      <br />
                      <b class="pr16">F.</b>Never set up ladders in doorways. If
                      necessary, lock door and barricade entrance. All ladders
                      should beset on firm, level ground or floor. The ladder
                      slope from the base of the support shall be one (1) foot
                      forevery four (4) foot of ladder length.
                      <br />
                      <br />
                      <b class="pr16">G.</b>Straight ladders should be extended
                      to the full height and thirty-six (36) inches above the
                      landing.Extensions and job-built ladders shall be secured
                      at the base of the ladder and tied off at the top of
                      theladder to prevent falling.
                      <br />
                      <br />
                      <b class="pr16">H.</b>Step ladders are to be fully opened,
                      the braces locked and are not to be used as a leaning
                      ladder.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt40 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Trenches and Excavations
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      Prior to performing any trench and excavation operations,
                      each employee will be required to complete a minimum of
                      eight hours of Excavation Safety Training approved by the
                      Company’s Director of Safety. All trenching and excavation
                      work shall be supervised by a Competent Person
                      knowledgeable about OSHA’s excavation standard, soil
                      mechanics, soil classification and testing as well as
                      protective systems. Keep in mind that all
                      trenches/excavations greater than four (4) feet in depth
                      must be tested for safe atmospheric conditions and must
                      have been provided with some form of protective systems
                      (i.e. sloping, shoring and shielding). Some
                      trenches/excavations may meet the requirements of a
                      confined space and may therefore require a permit and must
                      be barricaded with proper access provided.
                      <br />
                      <br />
                      Spoil dirt may be used to barricade trench/excavation
                      providing the spoil pile is placed no more than two feet
                      high and a minimum of four (4) feet away from the lip of
                      excavation. ALWAYS barricade excavated areas prior to and
                      after performing work.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">25</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 26 ----------- */}
      <Grid xs={12} className="pageBreak" id="26">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      No employee shall enter any trench or excavation without
                      understanding and following these procedures:
                      <br />
                      <br />
                      <arrow />A soils analysis shall be conducted to classify
                      soils as a Type A, B, C-60 or C-80 type soil in order
                      toselect the appropriate type of protective system to use.
                      <br />
                      <br />
                      <arrow />
                      No employee shall enter any excavation or trench unless it
                      has been sloped, shored or shielded and anynecessary
                      permits are acquired.
                      <br />
                      <br />
                      <arrow />A Competent Person or designated Site Safety
                      Coordinator shall monitor and conduct atmospherictesting
                      on any excavation or trench where the possibility of gas
                      accumulation may exist.
                      <br />
                      <br />
                      <arrow />
                      All sloping operations shall meet the maximum allowable
                      slope for the type of soil classificationindicated.
                      Aluminum hydraulic shoring should be used whenever
                      possible. All types of shoringapplications shall be
                      performed according to OSHA requirements. All shoring
                      members shall becapable of supporting the soil pressure
                      exerted on them.
                      <br />
                      <br />
                      <arrow />
                      All materials used for and removed from the
                      trench/excavation shall be stored far enough away from
                      theedge of the excavation/trench (minimum of two [2] feet)
                      to prevent sloughing, raveling and/or cave-ins.
                      <br />
                      <br />
                      <arrow />
                      Heavy equipment shall be located far enough away from the
                      edges to prevent cave-ins. Whenequipment must be placed
                      near the edge of the excavation/trench, additional shoring
                      and/or bracing shallbe used. All calculations, safety
                      plans and manufacturers tabulated data shall be approved
                      by aRegistered Professional Engineer (RPE)
                      <br />
                      <br />
                      <arrow />
                      All excavations and trenches deeper than four (4) feet
                      shall be equipped with egress exit ladders. Traveldistance
                      to any one ladder shall not exceed twenty-five (25) feet.
                      Long trenches and large excavationswill require more than
                      one (1) ladder
                      <br />
                      <br />
                      <arrow />A Registered Professional Engineer shall
                      designate shoring for trenches deeper than twenty (20)
                      feet.
                      <br />
                      <br />
                      <arrow />
                      Excavations and trenches shall be kept free of water
                      accumulation at all times. In areas of high watertables, a
                      well point system or other type of de-water equipment
                      shall be utilized.
                      <br />
                      <br />
                      <arrow />
                      Trench boxes/shield shall be used according to its
                      manufacturers tabulated data and for the depth forwhich
                      they are designated. They shall not be used at depths when
                      the trenches, overburden or spoil pilesmay collapse in the
                      box.
                      <br />
                      <br />
                      <arrow />A competent person shall make daily inspections
                      of the excavations, trenches, adjacent areas andprotective
                      systems (shoring or sloping). Inspections shall be
                      documented in writing through the use ofdaily inspection
                      forms; completed prior to the start of work and as needed
                      throughout the shift.Inspections shall also be made after
                      every rainstorm or other hazards that increase the risk of
                      cave-ins.
                      <br />
                      <br />
                      <arrow />
                      Bracing or shoring of trenches or excavations shall be
                      carried along the full width of the excavation.
                      <br />
                      <br />
                      <arrow />
                      Cross Braces or trench jacks shall be placed perpendicular
                      in the true horizontal position and shall besecured to
                      prevent being kicked out, sliding or falling.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">26</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 27 ----------- */}
      <Grid xs={12} className="pageBreak" id="27">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      <arrow />A determination shall be made prior to digging
                      whether or not underground utilities and/or
                      buriedpipelines exist. If needed, excavation permits shall
                      be obtained from the customer prior to the stat ofjob.
                      <br />
                      <br />
                      <arrow />
                      When the competent person finds evidence of a situation
                      that could result in a possible cave-in,indications or
                      failure or protective systems, hazardous atmospheres or
                      other hazardous conditions, theexposed employees shall be
                      removed from the hazardous area until the necessary
                      precautions have beentake to ensure their safety.
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Confined Space Entry
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textJustify">
                      A Confined Space a space that:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify">
                      <b class="pr16">1.</b>is large enough and so configured
                      that an employee can bodily enter and perform assigned
                      work;
                      <br />
                      <br />
                      <b class="pr16">2.</b>has limited or restricted means for
                      entry or exit (i.e. vessels, solos, storage bins, hoppers,
                      vaults,pits, trenches); and
                      <br />
                      <br />
                      <b class="pr16">3.</b>is not designated for continuous
                      employee occupancy.
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      In confined space situations, your Supervisor and/or your
                      designated Site Safety Coordinator will evaluate the work
                      area to determine if any of the spaces fall under OSHA’s
                      “Permit-Required Confined Space” regulation and require a
                      permit. If the work area contains permit spaces, the
                      supervisor will inform all exposed employees by posting
                      “DANGER CONFINED SPACE” warning signs, or by any other
                      equally effective means, concerning the existence, the
                      location and the danger posed by the permit spaces.
                      <br />
                      <br />
                      Should it be determined that employees are not to enter
                      permit spaces, the supervisor or your designated Site
                      Safety Coordinator will take measure to prevent employees
                      from entering the permit spaces. If it is decided that
                      employees are to enter the permit spaces, your supervisor
                      and your designated Site Safety Coordinator will be
                      implementing the company’s written Confined Space Entry
                      Program.
                      <br />
                      <br />
                      Only designated employees will be trained in Confined
                      Space Entry Operations. Therefore, no employee shall enter
                      or perform any form of confined space entry operations
                      unless you have been trained in and are knowledgeable
                      about performing confined space entry operations and have
                      been authorized as an Entrant, Attendant or Permit
                      Supervisor by the Director of Safety.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb4">
                    <TableCell className="w100 font22 bold textCenter header">
                      Safety is an Every Day Priority
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font12 row">
                    <TableCell className="w100 textJustify">
                      As mentioned before, safety is a condition of employment
                      under the policies of Tran-Global Solutions, Inc. It is an
                      ongoing process and a major part of your daily job as well
                      as a commitment to our customers.
                      <br />
                      <br />
                      In the months to come, you will receive additional safety
                      training during Safety Meetings. Your Supervisor and your
                      designated Site Safety Coordinator are always available to
                      answer questions and personally work with your concerning
                      safety in the workplace.
                      <br />
                      <br />
                      If you ever have a safety questions or problem that your
                      Supervisor cannot solve, contact your designated Site
                      Safety Coordinator or contact TGS Safety Department at
                      713/453-0341. Appropriate action WILL be taken.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">27</Grid>
        </TableContainer>
      </Grid>

      {/* ----------- Page 28 ----------- */}
      <Grid xs={12} className="pageBreak " id="28">
        <TableContainer className="MainTable capture">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl60 pr60 mt22">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mb20">
                    <TableCell className="w100 font22 bold textCenter header">
                      Employee Acknowledgement & Acceptance of Safety Policy,
                      Rules and Procedures
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row">
                    <TableCell className="w100 textCenter mb16">
                      Please read, sign and return to your Supervisor. If you
                      have any questions, tell your Supervisor at this time.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify bold">
                      EMPLOYEE ACKNOWLEDGEMENT
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 font14 row mt20">
                    <TableCell className="w100 textJustify">
                      II have read and do understand the Employee Safety
                      Handbook, safety responsibilities and safety rules
                      presented herein. The Company has given me a copy of these
                      rules.
                      <br />
                      <br />
                      I also understand that it is my responsibility to follow
                      all established safety rules and safe working procedures,
                      and that my safety and health on the job heavily depends
                      upon my following these rules.
                      <br />
                      <br />I further understand that compliance with safety
                      rules and policies are a condition of employment under the
                      rules set forth by Trans-Global Solutions, Inc.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt60 mb4 row justify-center">
                    <TableCell className="w60">
                      <TableRow className="w100">
                        <TableCell className="w100">
                          <input
                            type="text"
                            name="textfield"
                            id="nameText"
                            className="w100 h18 bn bb mt6 input-capitalization"
                            value={`${userData.firstName} ${userData.lastName}`}
                            disabled
                          />
                          Employee Name (PLEASE PRINT)
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 mt30">
                        <TableCell className="w100">
                          <input
                            type="text"
                            name="textfield"
                            id="deptText"
                            className="w100 h18 bn bb mt6 input-capitalization"
                            value={`${userData.dept}`}
                            disabled
                          />
                          Department
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 mt30 row">
                        <TableCell className="w60">
                          <input
                            type="text"
                            name="textfield"
                            id="nameSignature"
                            className="w100  bn bb mt6 signatureClass font-20"
                          />
                          Employee Signature
                        </TableCell>
                        <TableCell className="w40 pl20 mt-0">
                          <DatePicker
                            onChange={(value) => {
                              setSignatureDate(value);
                            }}
                            value={SignatureDate}
                            id="offerDate"
                            className="datePickerReact data20h"
                            disabled
                          />
                          Date
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 mt30 row">
                        <TableCell className="w60">
                          <input
                            type="text"
                            name="textfield"
                            id="verificationSignature"
                            className="w100 bn bb mt6 signatureClass font-20"
                            disabled
                          />
                          Supervisor’s Verification
                        </TableCell>
                        <TableCell className="w40 pl20 mt-0">
                          <input
                            type="text"
                            name="textfield"
                            id="offerDate"
                            className="w100 bn bb mt6 signatureClass font-20"
                            onChange={($e) => {
                              setVerificationDate($e?.target?.value);
                            }}
                            disabled
                          />
                          {/* <DatePicker
                            onChange={(value) => {
                              setVerificationDate(value);
                            }}
                            value={VerificationDate}
                            id="offerDate"
                            className="datePickerReact data20h"
                            disabled
                          /> */}
                          Date
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
          <Grid className="PageNum">28</Grid>
        </TableContainer>
      </Grid>
      <Snackbar snackBarDefaultDuration={60000}></Snackbar>
      <Acknowledge acknowledgedState={acknowledgedState} />
    </Grid>
  );
};
export default SafetyHandbook;
