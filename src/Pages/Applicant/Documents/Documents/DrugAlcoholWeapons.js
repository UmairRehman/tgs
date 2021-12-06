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
import DatePicker from 'react-date-picker';
import Acknowledge from "../../../../Components/Acknowledge";

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

const { showSnackBar , getGenerator } = helpers;

const {
  styles: { displayNoneStyles: useStyles },
} = Imports;

const DrugAlcoholWeapons = () => {
  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);

  const [error, setError] = useState("");

  const acknowledgedState = useState(false);

  const [isAcknowledged, setAcknowledged] = acknowledgedState;

  const [DateSignature, setDateSignature] = useState(new Date());
  const [DateWitness, setDateWitness] = useState(new Date());
  const [DateSOLUTIONS, setDateSOLUTIONS] = useState(new Date());

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

  useEffect(() => {
    submit();
  }, [isAcknowledged]);

  const submit = async () => {
    try {
      setPosting(true);

      let data = {
        tgsSign: document.getElementById('textfield').value,
        date: DateSOLUTIONS.toISOString(),
        name: document.getElementById("name").value,
        signature: document.getElementById("signature").value,
        dateSignature: DateSignature.toISOString(),
        signatureWitness: document.getElementById("witnessSignature").value,
        witnessDate: DateWitness.toISOString()
      };
      console.log("data", data);

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
      const captureElements = Array.from(
        document.getElementsByClassName('capture')
      );
      
      const images = [];

      showSnackBar('Generating pdf...');

      for await (let i of getGenerator(captureElements.length)) {
      const captureElement = captureElements[i];
        
        let canvas = await (html2canvas(captureElement));

        let image = (canvas.toDataURL('image/png'));

        images.push(image);
        console.log(image)
      }

      const resposne = await users.submitForm({
        image: images,
        form: 17,
      });

      const step4FormsSubmitted =
        JSON.parse(storage.get("step-4-form-drugAlcoholWeapon")) || true;

      storage.set(
        "step-4-form-drugAlcoholWeapon",
        JSON.stringify(step4FormsSubmitted)
      );

      const step4FormPosted = new BroadcastChannel("step4form_posted");

      step4FormPosted.postMessage({ topic: "form-updated", message: {} });

      showSnackBar("Form has been submitted!");

      setPosting(false);
      setAcknowledged(false);
      window.self.close();
    } catch (exc) {
      console.log(exc);
      setPosting(false);
      setAcknowledged(false);
      return showSnackBar(exc.message);
    }
  };

  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
      <TableContainer className="MainTable capture">
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
                    Drug, Alcohol and Weapon Policy
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100" style={{ marginTop: "75px" }}>
                  <TableCell className="w100 header textCenter UnderLine font20">
                    EQUAL OPPORTUNITY EMPLOYER
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100" style={{ marginTop: "75px" }}>
                  <TableCell className="w100 textCenter">
                    11811 I-10 East, Suite 630 * PO Box 24009 * Houston, Texas
                    77229
                    <br />
                    (713) 453-0341 * www.tgsgroup.com
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      {/* ----------- Page 2 ----------- */}
      <Grid xs={12} className="pageBreak capture">
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
                      Applicant/Employee Notification and Acknowledgment
                      <span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#1">1</a>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt22 font14">
                    <TableCell className="w94 row PageLIstLine">
                      Application of Policy<span></span>
                    </TableCell>
                    <TableCell className="w4">
                      <a href="#2">2</a>
                    </TableCell>
                  </TableRow>
                </Table>

              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>

        {/* ----------- Page 2 ----------- */}
        <Grid xs={12} className="pageBreak capture">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 mt30 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Policy Statement<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#3">3</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Definitions<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#4">4</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Types of Drug Testing<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#8">8</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Enforcement Activity<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#10">10</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Medication Policy<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#11">11</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Disciplinary Action for Policy Violations<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#13">13</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Retention of Samples<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#14">14</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Retesting of Samples<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#14">14</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Testing Facility Requirement<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#15">15</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Amnesty Provision<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#16">16</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Employee Assistance Program (EAP)<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#17">17</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Affirmation<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#18">18</a>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row mt22 font14">
                      <TableCell className="w94 row PageLIstLine">
                        Acknowledgment<span></span>
                      </TableCell>
                      <TableCell className="w4">
                        <a href="#19">19</a>
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>

        {/* ----------- Page 3 1 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="1">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Applicant/Employee Notification And Acknowledgment
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        It is recognized that the employees of the <b>COMPANY</b>{" "}
                        are the company’s most valuable resource in the conducting
                        of the business of the <b>COMPANY</b>, and for that reason
                        their health and safety are of paramount concern. In order
                        to comply with the requirements of the Drug Free Workplace
                        Act of 1988; Department of Transportation 49 CFR 40 and
                        219 (FRA), and 49 CFR 391 & 394 (FHWA); any and all
                        applicable federal or state mandated testing programs, and
                        to provide a safe and healthful work environment for all
                        employees, the <b>COMPANY</b> has determined that a
                        uniform and effective drug policy be established to
                        accomplish these objectives.
                        <br />
                        <br />
                        It is further the objective of this policy to assist in
                        protecting the well-being and property not only of company
                        employees, but also all other persons on company premises,
                        including visitors and guests. By the establishment of
                        this policy, the <b>COMPANY</b> is seeking to protect its
                        property and its employees from damage, loss or theft. The
                        policy is also being established to comply with applicable
                        laws, statutes, and regulations that have been enacted
                        relating to drugs and safety in the workplace. Please read
                        the entire policy and initial each page.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 1 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 4 2 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="2">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Application of Policy
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        This policy pertains to illegal, controlled and
                        unauthorized drugs, alcohol, chemical substances, weapons
                        and stolen property. For the purposes of the policy, the
                        term “Company Premises” includes the premises of its
                        affiliates or subsidiaries. It also includes offices,
                        facilities, land, buildings, structure, fixtures,
                        installations, automobiles, trucks, trains, heavy
                        equipment, cranes, vessels, barges, floating equipment and
                        all other vehicles and equipment, whether owned, leased,
                        rented or used by the <b>COMPANY</b>. This policy applies
                        to property of all customers of the <b>COMPANY</b> while
                        on <b>COMPANY</b> premises. This policy applies to any
                        other work locations of the <b>COMPANY</b> and the mode of
                        transportation to and from those locations while in the
                        course and scope of the <b>COMPANY’S</b> employment.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 2 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 5 3 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="3">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Policy Statement
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>

        {/* ----------- Page 3 1 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="1">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        The use, abuse, reporting to work with detectable amounts
                        in the system, bringing onto the <b>COMPANY’S</b> property
                        (as defined previously), possession, transfer, storage,
                        concealment, transportation, promotion or sale of the
                        following substances and other items as listed below by
                        employees of the <b>COMPANY</b> are strictly prohibited.
                        <br />
                        <br />
                        The possession of illegal drugs, unauthorized controlled
                        substances, look-alikes, inhalants of abuse, designer and
                        synthetic drugs, alcohol or intoxicating beverages
                        (including the presence of any detectable amount in the
                        employee’s body while working), and any other drugs or
                        substances which may affect a person’s perception,
                        performance, judgment, reactions or senses while working
                        or while on the <b>COMPANY’S</b> business, including any
                        and all drugs declared to be illegal under any Federal or
                        State law, is prohibited.
                        <br />
                        <br />
                        The possession or the reporting to work or working with
                        detectable amounts in the system of alcoholic or
                        intoxicating beverages, which may affect an employee’s
                        mood, senses, responses, motor functions or alter or
                        affect a person’s perception, performance, judgment,
                        reactions or senses, or the possession, transfer, storage,
                        concealment, transportation, promotion or sale of
                        alcoholic or intoxicating beverages is prohibited.
                        <br />
                        <br />
                        The Chief Executive Officer (CEO) may from time to time,
                        allow at his discretion, the consumption of alcoholic
                        beverages for certain designated company events and such
                        shall not in any manner affect the <b>COMPANY</b> policy
                        as herein stated.
                        <br />
                        <br />
                        The possession or the reporting to work or working with
                        drug-related paraphernalia, including any material or
                        equipment used or designed for use in testing, packaging,
                        storing, injecting, ingesting, inhaling or otherwise
                        introducing into the human body an illegal, unauthorized
                        controlled or dangerous substances as defined by this
                        policy is prohibited.
                        <br />
                        <br />
                        Except as specifically authorized by the (CEO) of the{" "}
                        <b>COMPANY</b> or his designated representative, the
                        possession of firearms, weapons, explosives and ammunition
                        is prohibited.
                        <br />
                        <br />
                        The theft, conversion, misappropriation or unauthorized
                        removal, possession or use of the <b>COMPANY’S</b>{" "}
                        property, including but not limited to supplies,
                        materials, facilities, tools, equipment, documents and
                        proprietary information, or of any items of property of
                        other employees or customers, is prohibited.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 3 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 6 4 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="4">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Definitions
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 1 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 4 2 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="2">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        The following definitions are intended to clarify the
                        prohibited substances and items covered in this policy.
                        Use of the definition in the singular includes the plural.
                        The term “drug” is used interchangeably with the terms
                        chemical, chemical substance, or alcohol for the purpose
                        of this policy.
                        <br />
                        <br />
                        ACCIDENT-INCIDENT/DOT - FRA Accidents or incidents
                        resulting in any of the following are required to be
                        reported to the FRA and call for drug and alcohol testing:
                        <br />
                        <br />
                        {/* -*- */}
                        <TableRow className="w100 mt30 mb30 row">
                          <TableCell className="w30 font14 bold">
                            Major Train Incident
                          </TableCell>
                          <TableCell className="w70">
                            <TableRow className="w100">
                              <TableCell className="w100 font14">
                                1. Fatality
                              </TableCell>
                              <TableCell className="w100 mt10 font14">
                                2. $1,500,000.00 damage or more (to railroad
                                property)
                              </TableCell>
                              <TableCell className="w100 mt10 font14">
                                3. Release of hazardous Material (and evacuation)
                                from railroad equipment.
                              </TableCell>
                              <TableCell className="w100 mt10 font14">
                                4. Release of hazardous material (and reportable
                                injury from product)
                              </TableCell>
                            </TableRow>
                          </TableCell>
                        </TableRow>
                        {/* -*- */}
                        <TableRow className="w100 mt30 mb30 row">
                          <TableCell className="w30 font14 bold">
                            Impact Accident
                          </TableCell>
                          <TableCell className="w70">
                            <TableRow className="w100">
                              <TableCell className="w100 font14">
                                1. Reportable injury
                              </TableCell>
                              <TableCell className="w100 mt10 font14">
                                2. Damage of $150,000.00 or more (to railroad
                                property)
                              </TableCell>
                            </TableRow>
                          </TableCell>
                        </TableRow>
                        {/* -*- */}
                        <TableRow className="w100 mt30 mb30 row">
                          <TableCell className="w30 font14 bold">
                            Passenger Train Accident
                          </TableCell>
                          <TableCell className="w70">
                            1. Reportable injury to any person in the accident
                          </TableCell>
                        </TableRow>
                        {/* -*- */}
                        <TableRow className="w100 mt30 mb40 row">
                          <TableCell className="w30 font14 bold">
                            Train Incident
                          </TableCell>
                          <TableCell className="w70">
                            1. Fatality to on-duty railroad employee
                          </TableCell>
                        </TableRow>
                        <b className="bold header">ACT-LIKE DRUGS</b> - Those
                        chemicals not manufactured to closely resemble controlled
                        substances, but which are promoted in the same way and
                        which contain the same ingredients as look-alike drugs.
                        <br />
                        <br />
                        <b className="bold header">
                          ALCOHOL OR INTOXICATING BEVERAGE
                        </b>{" "}
                        - Any liquid that may be legally sold and consumed, and
                        that has an alcohol content in excess of one-half of 1% by
                        volume.
                        <br />
                        <br />
                        <b className="bold header">ALCOHOL BREATH TEST</b> - A
                        scientifically recognized test of an individual’s breath
                        sample for evidence of alcohol use.{" "}
                        <span className="header">
                          [.04% DOT/FRA, .02% COMPANY]{" "}
                          <b>(See Chart 7A on Page 8)</b>
                        </span>
                        <br />
                        <br />
                        <b className="bold header">CHEMICAL TEST</b> - A
                        scientifically recognized test of an individual’s breath,
                        blood, urine, saliva, bodily fluids or tissues for
                        evidence of dangerous drug or alcohol use.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 4 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 7 5 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="5">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 mt30 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <b>CONTROLLED DRUGS</b> - Those drugs or chemical
                        substances placed on a schedule or in special categories
                        to prevent, curtail or limit their distribution and
                        manufacture as defined by the{" "}
                        <b className="header">
                          Controlled Substance Act of 1970,
                        </b>{" "}
                        as amended.{" "}
                        <b className="header">(See Chart 7A on Page 8)</b>
                        <br />
                        <br />
                        <b>COVERED SERVICE EMPLOYEE</b> - All persons who serve in
                        covered service and/or a person performing a safety
                        sensitive function as prescribed by the DOT FRA and FHWA
                        administrations.
                        <br />
                        <br />
                        <b>DESIGNER (SYNTHETIC) DRUGS</b> - Those chemical
                        substances that are made in clandestine laboratories where
                        the molecular structure of both legal and illegal drugs is
                        altered to create a drug that is not explicitly banned by
                        federal law.
                        <br />
                        <br />
                        <b>DRUG</b> - Any chemical substance, including alcohol,
                        that either produces physical, mental or emotional change
                        in the user, or that is capable of altering the mood,
                        perception or judgment of the individual consuming it.
                        <br />
                        <br />
                        <b>DRUG ABUSE</b> - Drug abuse is the use of a drug or
                        chemical substance for other than prescribed medical
                        purposes, resulting in the impaired physical or mental
                        well being of the user.
                        <br />
                        <br />
                        <b>DRUG MISUSE</b> - The unintentional or inappropriate
                        use of prescription or over-the-counter drugs or chemical
                        substances, resulting in the impaired physical, mental or
                        emotional well-being of the user.
                        <br />
                        <br />
                        <b>DRUG-RELATED PARAPHERNALIA</b> - Any material,
                        equipment or items used or designed for use in testing,
                        packaging, storing, injecting, ingesting, inhaling or
                        otherwise introducing into the human body an illegal,
                        unauthorized, controlled or dangerous substance.
                        <br />
                        <br />
                        <b>EMPLOYER</b> - Any one or more of the following may
                        from time-to-time be considered an employer:
                        <br />
                        <br />
                        1. The owner of the Company and all its machinery,
                        equipment, property and assets.
                        <br />
                        <br />
                        2. The managing operator.
                        <br />
                        <br />
                        3. The customer/client.
                        <br />
                        <br />
                        4. The employment department
                        <br />
                        <br />
                        5. The manager, supervisor or other person in charge.
                        <br />
                        <br />
                        6. An authorized agent of the Company.
                        <br />
                        <br />
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 5 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 8 6 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="6">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 mt30 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <b>ILLEGAL DRUG</b> - Any drug which is not legally
                        obtainable or which is legally obtainable, but has not
                        been legally obtained. This includes prescribed drugs not
                        legally obtained and not being used for their prescribed
                        purpose.
                        <br />
                        <br />
                        <b>
                          INDIVIDUAL DIRECTLY INVOLVED IN AN ACCIDENT/INCIDENT
                        </b>{" "}
                        - An individual whose order, action or failure to act is
                        determined to be, or cannot be ruled out as, a causative
                        factor in the events leading up to the incident.
                        <br />
                        <br />
                        <b>LEGAL DRUG</b> - Any prescribed drug or
                        over-the-counter drug or medication, which has been
                        legally obtained and is being used for the purpose for
                        which it was prescribed or manufactured.
                        <br />
                        <br />
                        <b>LOOK-ALIKE DRUG</b> - A tablet, capsule, powder or
                        liquid containing controlled over-the-counter ingredients,
                        whose physical appearance resembles various prescription
                        drug products and which can contain popular substances of
                        abuse and are regulated under the provisions of the
                        Controlled Substance Act of 1970, as amended.
                        <br />
                        <br />
                        <b>MEDICAL AUTHORIZATION/DETERMINATION FORM</b> - Form
                        utilized by the company to determine employee medication
                        usage and possible effects on the employee’s performance.
                        <br />
                        <br />
                        <b>MEDICAL REVIEW OFFICER (MRO)</b> - A licensed
                        physician, either a doctor of medicine or a doctor of
                        osteopathy, knowledgeable in drug abuse disorders,
                        including the medical effects of prescription drugs and
                        the pharmacology and toxicology of illicit drugs.
                        <br />
                        <br />
                        <b>NON-COVERED EMPLOYEE</b> - Means any office employee
                        not regulated by the definitions in “Covered Service
                        Employee.”
                        <br />
                        <br />
                        <b>OVER-THE-COUNTER MEDICATION</b> - Medication obtainable
                        without a physician’s order, being utilized by the
                        employee for the purpose for which it was manufactured.
                        <br />
                        <br />
                        <b>PRESCRIBED DRUG</b> - Any substance for which a
                        prescription has been written by a licensed medical
                        practitioner <u>for consumption by the individual</u> for
                        whom it was written or ordered.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 6 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 9 7 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="7">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 mt30 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <b>PROHIBITED DRUG</b> - Any of the following substances
                        specified in Schedule I or Schedule II of the Controlled
                        Substances Act, 21 U.S.C., 801, 802 (1931 & 1987 Cum P.P):{" "}
                        <b>
                          marijuana (THC), cocaine, opiates, amphetamines and
                          phencyclidine (PCP)
                        </b>
                        . For non-covered employees the following additional drugs
                        will be prohibited:{" "}
                        <b>
                          Methadone, Barbiturates, Benzodiazepines, and
                          Propoxyphene. (See Chart 7A on Page 8)
                        </b>
                        <br />
                        <br />
                        <b>REASONABLE SUSPICION</b> - The <b>COMPANY’S</b>{" "}
                        suspicions or management level employee’s belief, based
                        upon objective and articulable facts, including specific,
                        contemporaneous physical, behavioral, or performance
                        indicators, sufficient to lead a prudent person to suspect
                        that an employee is using drugs or alcohol, or otherwise
                        is in violation of this policy.
                        <br />
                        <br />
                        <b>THEFT/STOLENPROPERTY</b> - The taking, aspiration,
                        conversion, misappropriation or unauthorized removal,
                        concealment or possession or use of property owned by the{" "}
                        <b>COMPANY</b>, other employees, persons or companies and
                        including, but not limited to, materials, facilities,
                        tools, equipment, documents and proprietary information.
                        <br />
                        <br />
                        <b>UNDER THE INFLUENCE</b> - For the purpose of this
                        policy, an employee is <b>Under the Influence</b> if an
                        employee is affected by a drug, chemical substance or
                        alcohol, or the combination of a drug, chemical substance
                        or alcohol in any detectable manner. The symptoms or
                        influence are not confined to those consistent with
                        misbehavior, or to obvious impairment of physical or
                        mental ability, such as slurred speech or difficulty
                        maintaining balance. A determination of influence can be
                        established by a professional opinion, a scientifically
                        valid test and as in the case of alcohol, by a laypersons’
                        opinion.
                        <br />
                        <br />
                        <b>WEAPONS</b> - For the purpose of this policy, the term
                        “weapons: includes firearms, guns, sheath knives,
                        explosives, ammunition or other similar offensive weapons.
                        The use, possession, transfer, storage, concealment,
                        transportation or sale of such weapons which is not
                        specifically authorized or allowed on the <b>COMPANY’S</b>{" "}
                        property by the President of the <b>COMPANY</b> or his/her
                        designated representative, is strictly forbidden.
                        <br />
                        <br />
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 7 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 10 8 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="8">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        EXHIBIT: Chart 7A
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <TableRow className="w100">
                          <TableCell className="w100 header font26 textCenter border p10">
                            URINE DETECTION LEVELS
                          </TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row bold">
                          <TableCell className="w40 p5">
                            SUBSTANCE (NG/ML)
                          </TableCell>
                          <TableCell className="w30 bl br p5">
                            SCREEN (NG/ML)
                          </TableCell>
                          <TableCell className="w30 p5">CONFIRMATION</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">Cocaine</TableCell>
                          <TableCell className="w30 bl br p5">300</TableCell>
                          <TableCell className="w30 p5">150</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">
                            Phencyclidine (PCP)
                          </TableCell>
                          <TableCell className="w30 bl br p5">25</TableCell>
                          <TableCell className="w30 p5">25</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">
                            Marijuana (THC)
                          </TableCell>
                          <TableCell className="w30 bl br p5">20</TableCell>
                          <TableCell className="w30 p5">15</TableCell>
                        </TableRow>

                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40">
                            <TableRow className="w100 row">
                              <TableCell className="w40 p5 row align-center br">
                                Opiates
                              </TableCell>
                              <TableCell className="w60">
                                <TableRow className="w100">
                                  <TableCell className="w100 bb p5">
                                    Morphine
                                  </TableCell>
                                  <TableCell className="w100 p5">
                                    Codeine
                                  </TableCell>
                                </TableRow>
                              </TableCell>
                            </TableRow>
                          </TableCell>
                          <TableCell className="w30 bl">
                            <TableRow className="w100">
                              <TableCell className="w100 bb p5">300</TableCell>
                              <TableCell className="w100 p5">300</TableCell>
                            </TableRow>
                          </TableCell>
                          <TableCell className="w30 bl">
                            <TableRow className="w100">
                              <TableCell className="w100 bb p5">300</TableCell>
                              <TableCell className="w100 p5">300</TableCell>
                            </TableRow>
                          </TableCell>
                        </TableRow>

                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">
                            Amphetamines: Metamphetamines
                          </TableCell>
                          <TableCell className="w30 bl br p5">1000</TableCell>
                          <TableCell className="w30 p5">500</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">Barbiturates</TableCell>
                          <TableCell className="w30 bl br p5">300</TableCell>
                          <TableCell className="w30 p5">200</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">Propoxyphene</TableCell>
                          <TableCell className="w30 bl br p5">300</TableCell>
                          <TableCell className="w30 p5">200</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">
                            Benzodiazepines
                          </TableCell>
                          <TableCell className="w30 bl br p5">100</TableCell>
                          <TableCell className="w30 p5">100</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5">Methadone</TableCell>
                          <TableCell className="w30 bl br p5">300</TableCell>
                          <TableCell className="w30 p5">200</TableCell>
                        </TableRow>
                        <TableRow className="w100 bb bl br row">
                          <TableCell className="w40 p5 row align-center">
                            Alcohol (Breath Sample)
                          </TableCell>
                          <TableCell className="w30 bl br p5">
                            <TableRow className="w100">
                              <TableCell className="w100 p5">.04% DOT </TableCell>
                              <TableCell className="w100 p5">
                                .02% COMPANY
                              </TableCell>
                            </TableRow>
                          </TableCell>
                          <TableCell className="w30 p5">
                            <TableRow className="w100">
                              <TableCell className="w100 p5">.04% DOT </TableCell>
                              <TableCell className="w100 p5">
                                .02% COMPANY
                              </TableCell>
                            </TableRow>
                          </TableCell>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 8 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 11 9 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="9">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Types of Drug and Alcohol Testing
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <b>PRE-EMPLOYMENT/PRE-ACCESS TESTING:</b> A
                        pre-employment/pre-access drug and alcohol test must be
                        conducted when an individual is either hired for a covered
                        or non-covered service position or, for DOT purposes, when
                        a current employee first transferred from a non-covered to
                        a covered service position, unless the individual is
                        already subject to an anti-drug/alcohol program. Also, an
                        employee who is separated from an anti-drug/alcohol
                        program must be pre-employment tested prior to performing
                        a covered service function.
                        <br />
                        <br />
                        <b>RANDOM TESTING:</b> Random drug and alcohol testing
                        applies to all persons. For DOT purposes, this includes
                        all personnel who actually perform covered service or are
                        subject to covered service. An “employee” also includes
                        part-time, temporary and contract employees who perform a
                        function covered by the “covered service employee”
                        definition. All employees (full-time, part-time and
                        temporary) subject to testing will be placed in a common
                        selection pool.
                        <br />
                        <br />
                        During a calendar year, TGS will ensure random testing is
                        completed which meets or exceeds any federal or customer
                        requirements. <br />
                        <br />
                        <b>POST-ACCIDENT/INCIDENT TESTING:</b> Any employee whose
                        performance either contributed to an accident/incident or
                        cannot be completely discounted as a contributing factor
                        to the accident/incident will be tested for drugs and
                        alcohol. The employee should be tested for drugs as soon
                        as possible, and within 32 hours after the
                        accident/incident. For alcohol testing, the employee
                        should be tested as soon as possible, but no later than 8
                        hours after the accident/incident.
                        <br />
                        <br />
                        <b>REASONABLE CAUSE TESTING:</b> An employee will be
                        tested when there is reasonable cause to believe the
                        employee is using a prohibited drug and/or alcohol. A
                        decision to test will be based on specific,
                        contemporaneous physical, behavioral or performance
                        indicators of probable drug use.
                        <br />
                        <br />
                        <b>RETURN TO WORK TESTING:</b> Employees returning to work
                        after completion of rehabilitation must be given
                        unannounced drug and/or alcohol tests, as scheduled by the
                        MRO, in addition to being subjected to other types of
                        testing herein. The period of such testing may not be more
                        than sixty (60) months after the employee has returned to
                        duty.
                        <br />
                        <br />
                        <b>CONTRACTUAL COMPLIANCE:</b> The COMPANY will test
                        employees in order to comply with contractual agreements,
                        client/customer job site requirements, or
                        government/regulatory regulations and requirements.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 9 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 12 10 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="10">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Enforcement Activity
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        The <b>COMPANY</b> will enforce these policies by job site
                        searches, urine/substance screening and blood, plasma
                        and/or saliva/breath testing.
                        <br />
                        <br />
                        The <b>COMPANY</b> reserves the right to have managerial,
                        supervisory, and security personnel conduct security
                        searches and inspection of employees, persons and their
                        effects (such as, but not limited to, lockers, purses,
                        baggage, briefcases, lunch boxes, food/beverage
                        containers, desks, tool boxes, clothing and vehicles) for
                        the purpose of determining if such employees are in
                        possession, use, transportation or concealment of any of
                        the prohibited items and substances covered by this
                        policy. All searches that are conducted by authorized
                        outside search and inspection specialists will be in the
                        presence of designated company managers.
                        <br />
                        <br />
                        The <b>COMPANY</b> reserves the right to require employees
                        to submit to medical, physical, or psychological
                        evaluations or examinations at any time as a condition of
                        initial or continued employment. Such examinations or
                        evaluations may include, but are not limited to, urine
                        drug and/or alcohol screens, blood or plasma tests, and
                        saliva/breath test.
                        <br />
                        <br />
                        Any Company contractor may, to the extent permitted by
                        law, conduct a search and inspection of its own employees
                        and the employees of any of its subcontractors performing
                        work for the <b>COMPANY</b> on the <b>COMPANY’S</b>{" "}
                        property, provided that such contractor first notifies the{" "}
                        <b>COMPANY</b> of such a proposed search and inspection,
                        and further provided, that contractor does not search
                        employees of the <b>COMPANY</b> or of other contractors
                        without the express written authority of the{" "}
                        <b>COMPANY</b> or other companies that may be involved.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 10 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 13 11 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="11">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Medication Policy
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        While the use of medically prescribed medications and
                        drugs is not, by itself, a violation of this policy,{" "}
                        <b>
                          failure by the employee to notify his/her supervisor
                          prior to beginning work and/or arrival at work, while
                          taking over-the-counter, prescription medications or
                          drugs that impair alertness (cause drowsiness), and have
                          the potential to interfere with the safe and effective
                          performance of duties and operations of equipment, can
                          result in disciplinary action up to and including
                          discharge.
                        </b>{" "}
                        If there is a question regarding the employee’s ability to
                        safely and effectively perform assigned duties while using
                        such medication or drugs, clearance from a qualified
                        physician is required.
                        <br />
                        <br />
                        Legal drugs or medication means those prescribed drugs or
                        medication, or “over-the-counter” drugs, which are legally
                        obtainable and have been legally obtained, and are being
                        used for the purposes for which they were prescribed or
                        manufactured, and are in the employee’s possession in
                        quantities not exceeding amounts needed for personal use
                        in accordance with instructions of the prescribing
                        physician or manufacturer, and have been approved for that
                        employee’s use by the company.
                        <br />
                        <br />
                        <b>
                          All employees are required to notify their
                          supervisor/manager, operations staff member, or relevant
                          supervisor of all over-the-counter, prescribed
                          medication or drugs they are using or in possession of
                          while on or in company property.
                        </b>
                        <br />
                        <br />
                        The{" "}
                        <b className="header italic">
                          “Medication Permission Form”
                        </b>{" "}
                        form is to be completed and forwarded to the company
                        representative as stated above.
                        <br />
                        <br />
                        Violation of this policy by an employee while on or in
                        company property, or while conducting business for the
                        company, directly or indirectly, is strictly prohibited
                        and will result in disciplinary action up to and including
                        discharge.
                        <br />
                        <br />
                        The legal use of prescription drugs (Legally Controlled
                        Substances) prescribed by a licensed physician is
                        permitted, provided they do not impair alertness (cause
                        drowsiness), however:
                        <br />
                        <br />
                        <Grid className="pl20">
                          1. The employee taking or in the possession of an
                          over-the-counter, prescription medication is responsible
                          to report the medication prior to his/her arrival
                          reporting to work.
                          <br />
                          <br />
                          2. The employee needs to report medication with a{" "}
                          <b className="header italic">
                            Medication Authorization/ Determination Form
                          </b>{" "}
                          that has been reviewed and signed by the <b>COMPANY</b>{" "}
                          Medical Review Officer (MRO). This form or a facsimile
                          copy has to be on file at the <b>COMPANY’S</b>{" "}
                          Nederland, Texas office.
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 11 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 14 12 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="12">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 mt30 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        <Grid className="pl20">
                          <b>
                            3. Copies of the Medication
                            Authorization/Determination Form shall remain in the
                            employee medical file in the Human Resources
                            Department in the Trans-Global Solutions, Inc.
                            Nederland, Texas office.
                          </b>
                          <br />
                          <br />
                          4. Medication will be in its original container or be in
                          a vial provided by the pharmacist commonly referred to
                          as a “day carrier,” and will be in the employee’s name
                          and will have the doctor’s name and the prescription
                          number on the label, as well as the date of issuance.
                          <br />
                          <br />
                          5. Each prescription will not be older than one (1) year
                          from the date issued. Over-the-counter medication will
                          not be older than the expiration date marked on the
                          container. <br />
                          <br />
                          6. Employees will only possess a reasonable amount of
                          over-the-counter or prescription medication for a normal
                          work rotation.
                          <br />
                          <br />
                          7. The employee whose name appears on the label of the
                          prescription container will not allow any other company
                          employee, visitor, guest, subcontractor or any other
                          person to consume the prescribed drug or medication. The
                          employee who brings and uses approved over-the-counter
                          medications will not allow any other company employee,
                          visitor, guest, subcontractor or any other person to
                          consume the over-the-counter drug or medication.
                          <br />
                          <br />
                          8. The employee will not consume the over-the-counter or
                          the prescribed drug or medication more often than the
                          over-the counter instructions permit or as prescribed by
                          the employee’s physician and as specified on the
                          container label.
                          <br />
                          <br />
                        </Grid>
                        The <b>COMPANY</b> reserves the right to have its Medical
                        Review Officer determine if use of an over-the-counter,
                        prescription or prescription drug or medication by an
                        employee produces effects, which may increase the risk of
                        injury to the employee or other employees. If such a
                        finding is made, the <b>COMPANY</b> reserves the right to
                        restrict the work activity of the employee until such time
                        as the Medical Review Officer advises the <b>COMPANY</b>{" "}
                        that the employee’s ability to perform his/her job is no
                        longer adversely affected.
                        <br />
                        <br />
                        Any employee who is convicted of violating any criminal
                        drug statute must notify the Manager, Human Resources
                        Trans-Global Solutions, Inc. Houston, Texas, or his/her
                        designated representative, of the conviction within five
                        (5) days. The Manager, or his/her designated
                        representative, is to notify Federal agencies under
                        contract with the <b>COMPANY</b> within ten (10) days
                        after receiving notice of a conviction.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 12 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 15 13 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="13">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Disciplinary Action for Policy Violations
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16">
                      <TableCell className="w100 textJustify">
                        Entry onto the <b>COMPANY’S</b> property, job sites or
                        work locations as described above constitutes the
                        recognition of the right of the <b>COMPANY</b> or its
                        authorized representative to search, inspect or test its
                        employees for drugs or alcohol, as well as search their
                        personal effects, vehicles, tool boxes, desks, food or
                        beverage containers, clothing and any other property of
                        its employees while entering on or departing from the
                        premises of the <b>COMPANY</b> as described in this
                        policy.
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font14 mt20">
                      <TableCell className="w100 textCenter">
                        All employees of the <b>COMPANY</b> and its subsidiaries
                        are subject to the following action:
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 font16 mt20">
                      <TableCell className="w100 border">
                        <TableRow className="w100 row font16 bb">
                          <TableCell className="w50 textCenter bold p10">
                            VIOLATION
                          </TableCell>
                          <TableCell className="w50 textCenter bold p10 bl">
                            ACTION TAKEN
                          </TableCell>
                        </TableRow>
                        <TableRow className="w100 row font16 bb">
                          <TableCell className="w50 textCenter font14 p5 row align-center justify-center">
                            Refusal to participate in search, provide a urine,
                            blood, saliva or breath sample
                          </TableCell>
                          <TableCell className="w50 textCenter font14 p5 bl">
                            Disciplinary action up to and including termination
                          </TableCell>
                        </TableRow>
                        <TableRow className="w100 row font16 bb">
                          <TableCell className="w50 textCenter font14 p5 row align-center justify-center">
                            Positive Drug Result
                          </TableCell>
                          <TableCell className="w50 textCenter font14 p5 bl">
                            Disciplinary action up to and including termination
                          </TableCell>
                        </TableRow>
                        <TableRow className="w100 row font16 bb">
                          <TableCell className="w50 textCenter font14 p5 row align-center justify-center">
                            Positive Alcohol Result
                          </TableCell>
                          <TableCell className="w50 textCenter font14 p5 bl">
                            Disciplinary action up to and including termination
                          </TableCell>
                        </TableRow>
                        <TableRow className="w100 row font16">
                          <TableCell className="w50 textCenter font14 p5 row align-center justify-center">
                            Failure of employee to notify supervisor of medication
                          </TableCell>
                          <TableCell className="w50 textCenter font14 p5 bl">
                            Disciplinary action up to and including termination
                          </TableCell>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        Disciplinary action will be any action levied against an
                        employee or applicant, as determined by the <b>COMPANY</b>{" "}
                        management.
                        <br />
                        <br />
                        Any <b>COMPANY</b> employee who is found in possession,
                        use or transportation of any illegal substance,
                        contraband, unauthorized possession of the COMPANY’S
                        property or other employee’s property, or any of the
                        herein mentioned drugs, chemical substances or property,
                        or unauthorized items, or who has been convicted of a
                        drug-related offense, will be subject to disciplinary
                        action, up to and including termination of employment.
                        Preliminary findings of a policy violation may require
                        that the employee be suspended pending the results of an
                        investigation.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 13 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 16 14 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="14">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Retention of Samples
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        Samples that yield positive results and upon confirmation
                        will be retained by the laboratory in properly secured,
                        long-term, frozen storage for at least 365 days. Within
                        this 365-day period, the employee or designated
                        representative, other state agencies with jurisdiction, or
                        the COMPANY may request in writing that the sample be
                        retained for an additional period. If the laboratory does
                        not receive the request to retain the sample within the
                        365-day period, the sample may be discarded.
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 mt50 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Retesting of Samples
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        An employee/applicant may request in writing to the MRO a
                        retest of the sample within 60 days of notification of a
                        positive test result from the MRO. The employee may
                        specify that the specimen be retested by the original
                        laboratory or sent to another certified laboratory. The
                        employee may be required to pay in advance for the cost
                        incurred in the reanalysis of the sample. If the employee
                        requests a retest at a second laboratory, then the
                        original laboratory must follow the approved custody and
                        control procedures in transferring a portion of the
                        specimen because some analyses deteriorate or are lost
                        during freezing and/or storage. Quantitation for a retest
                        is not subject to cutoff requirements but must provide
                        data sufficient to confirm the presence of the drug or
                        metabolite.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 14 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 17 15 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="15">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Testing Facility Requirement
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        All searches, collections and testing will be performed
                        with concern for each employee’s privacy. The result of
                        any drug screening will be considered a confidential
                        medical record to be discussed strictly on a
                        “need-to-know” basis or as may be legally required.
                        <br />
                        <br />
                        All collections will be performed by approved personnel
                        who are familiar with the proper collection procedures of
                        this policy.
                        <br />
                        <br />
                        For drug urinalysis of{" "}
                        <b className="italic underLine">non-covered employees</b>,
                        each specimen may be tested to determine the presence of{" "}
                        <b>
                          amphetamines, cannabinoids, cocaine, opiates,
                          phencyclidine, barbiturates, methadone, methaqualone,
                          benzodiazepines and propoxyphene.
                        </b>
                        <br />
                        <br />
                        All sample collection, storage and transportation will be
                        performed in accordance with the Department of Health &
                        Human Services and <b>COMPANY</b> guidelines.
                        <br />
                        <br />
                        All drug screen positives reported by the laboratory must
                        be confirmed by Gas Chromatography/Mass Spectrometry.
                        <br />
                        <br />
                        Testing will be performed by a NIDA (National Institute
                        for Drug Abuse) approved laboratory, chosen by the
                        COMPANY, or its testing contractor, which is accredited by
                        the college of American Pathologists or certified by the
                        Department of Health & Human Services, or SAMHSA
                        (Substance Abuse & Mental Health Services Administration).
                        <br />
                        <br />
                        All DOT (Department of Transportation) alcohol tests will
                        be administered by properly trained personnel utilizing
                        only DOT-approved evidential breath/saliva testing
                        devices. All testing methods and procedures will follow in
                        strict accordance with 49 CFR 40.
                        <br />
                        <br />A breath/saliva screening test will be administered,
                        and if the result is greater than .04, a second test, a
                        confirmation test, will be performed 15 minutes later (no
                        later than 30 minutes) with an evidential breath device to
                        verify the original screen. If the confirmation test
                        verifies the original positive result, disciplinary action
                        will be levied as defined above.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 15 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 18 16 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="16">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Amnesty Provision
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        The <b>COMPANY</b> has included in the Anti-Drug Plan an
                        amnesty provision. An employee can advise management
                        (without being subject to disciplinary action), prior to
                        being selected for random testing or identified by any of
                        the methodologies for drug detection herein, that he or
                        she is experiencing a substance abuse problem. The{" "}
                        <b>COMPANY</b> shall allow the individual to seek medical
                        treatment at his or her expense and without pay from the{" "}
                        <b>COMPANY</b>.<br />
                        <br />
                        At the completion of the successful rehabilitation
                        program, the individual will have the right to petition
                        the <b>COMPANY</b> and provide proof of the successful
                        completion of the rehabilitation program for substance
                        abuse whereby such individual will be allowed to meet with
                        the rehabilitation committee to determine whether or not
                        such individual may return to work on a return-to-work
                        basis.
                        <br />
                        <br />
                        Upon acceptance by the <b>COMPANY</b>, such individual
                        will be subject to the terms and conditions of the
                        contents of the <b>COMPANY’S</b> Drug Testing Policy
                        pertaining to pre-employment and Post Rehabilitation
                        Testing being performed for a period of up to sixty (60)
                        months thereafter.
                        <br />
                        <br />
                        Throughout the interview process, all aspects of the
                        medical rehabilitation will be evaluated to determine
                        whether or not the individual will be allowed to return to
                        work status. The Amnesty Provision will be offered to such
                        employee on a one (1) time only basis.
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 16 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 19 17 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="17">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Employee Assistance Program (EAP)
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        The EAP will provide education and training on drug use to
                        all employees. Education shall include: information
                        material displayed on bulletin boards and/or employee
                        break rooms, and/or locker rooms, etc. and distributed to
                        all employees. As a community service, the hot-line
                        telephone number for employee assistance is also displayed
                        on bulletin boards, etc. and distributed to all employees.
                        Distribution of the company’s policy regarding use of
                        prohibited drugs to all new employees is provided. This
                        policy shall be displayed in prominent places throughout
                        the company (i.e., employee bulletin boards, break rooms,
                        locker rooms).
                        <br />
                        <br />
                        Supervisory personnel responsible for those employees
                        covered under 46 CFR 4, 5 and 16 will receive supervisory
                        training. The training shall include at least one (1)
                        60-minute period of training for drugs and one (1)
                        60-minute period of training for alcohol on the specific,
                        contemporaneous physical, behavioral and performance
                        indicators of probable use. The training shall be for
                        supervisors who may determine whether an employee must be
                        drug tested for reasonable suspicion.
                        <br />
                        <br />
                        The EAP Coordinator is Solomon Freimuth, Manager, Human
                        Resources, Trans-Global Solutions, Inc.. The coordinator’s
                        office hours are Monday - Friday, 8:00 am - 5:00 pm CST,
                        and the phone number is (
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 17 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 20 18 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="18">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Affirmation
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        Compliance with this drug-free workplace statement and
                        this policy is a condition of employment with the{" "}
                        <b>COMPANY</b>. Nothing in this policy will be construed
                        as any guarantee or promise to any applicant or any
                        employee of any employment or continued employment
                        whatsoever, nor will any provisions of this policy
                        constitute or be interpreted by any party or tribunal to
                        constitute any contractual rights of employment, expressed
                        or implied, with the <b>COMPANY</b> or any obligation of
                        employment rights created by covenants of good faith and
                        fair dealing, either expressed or implied.
                        <br />
                        <br />
                        Nothing in this policy will be interpreted as constituting
                        any waiver of or limitation on the <b>COMPANY’S</b> right
                        to invoke disciplinary measures as may be appropriate nor
                        will it constitute any waiver of or limitation on
                        employees’ responsibility to protect, guard and take
                        adequate precautions for their own safety and health in
                        the work place.
                        <br />
                        <br />
                        This policy may be amended as necessary to meet the
                        requirements of applicable laws, statutes, or regulations.
                        It may be amended as deemed necessary by the{" "}
                        <b>COMPANY</b>, or to meet the interests of the objectives
                        of this policy as may be determined, from time to time, by
                        the <b>COMPANY</b>. All rights to further amend, refine
                        and redefine are specifically reserved to the
                        <b>COMPANY</b>.
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row wrap justify-center mt90">
                      <TableCell className="w100 ">
                        <input
                          type="text"
                          name="textfield"
                          id="textfield"
                          className="w100 bn bb mt6 mb5 signatureClass font-20"
                        />
                        (TRANS-GLOBAL SOLUTIONS, INC.)
                      </TableCell>
                      <TableCell className="w100  mt30">
                        <DatePicker
                          onChange={(value) => {
                            setDateSOLUTIONS(value);
                          }}
                          value={DateSOLUTIONS}
                          id="offerDate"
                          className="datePickerReact data20h"
                        />
                        Date
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 18 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>

        {/* ----------- Page 21 19 ----------- */}
        <Grid xs={12} className="pageBreak capture" id="19">
          <TableContainer className="MainTable">
            <Table className="SecondMainTable">
              <TableRow className="w100 pl60 pr60">
                <TableCell className="w100">
                  <Table className="w100">
                    {/* -*- */}
                    <TableRow className="w100 mt30 mb20">
                      <TableCell className="w100 font22 bold textCenter header">
                        Acknowledgment
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row font16 mt20">
                      <TableCell className="w100 textJustify">
                        By my signature below, I (print your name){" "}
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w h18 bn bb mt6 mb5 input-capitalization"
                          value={`${userData.firstName} ${userData.middleName} ${userData.lastName}`}
                        />{" "}
                        hereby <b>acknowledge</b> that I have <b>read</b> (or it
                        has been read to me) and <b>understand</b> the Drug,
                        Alcohol and Weapon Policy of the <b>COMPANY</b>, which
                        outlines the company’s policy regarding the use or
                        possession of drugs, alcohol, firearms, weapons and
                        related items. I <b>understand</b> that the company
                        requires employees to submit to urine, blood, plasma,
                        saliva, and/or breath specimens to be analyzed for the
                        presence of drugs and/or alcohol. A violation of this
                        policy constitutes misconduct, and disciplinary actions
                        will be taken there upon.
                        <br />
                        <br />I <b>authorize</b> and give full written permission
                        to the doctor, clinic, hospital or its agents and
                        associates to send this specimen to the laboratory for
                        screening tests. These tests will determine or rule out
                        the presence of{" "}
                        <b>
                          alcohol and/or Amphetamines, Opiates, Cocaine,
                          Cannabinoids, Phencyclidine, Barbiturates,
                          Benzodiazepines, Methaqualone, Methadone and
                          Propoxyphene
                        </b>{" "}
                        for non-covered (NON-DOT) employees, while screening tests
                        will determine or rule out the presence of{" "}
                        <b>
                          Amphetamines, Opiates, Cocaine, Cannabinoids,
                          Phencyclidine
                        </b>{" "}
                        for covered service employees (DOT). I hereby authorize
                        these results to be given to the <b>COMPANY</b>, its
                        authorized agents and/or employees, partners or
                        associates.
                        <br />
                        <br />
                        <b className="header italic">
                          I have been informed and understand that I retain the
                          express right to terminate the taking of the urine,
                          blood, plasma, breath and/or saliva samples at any time
                          I so desire and to leave the room without further delay.
                        </b>
                        <br />
                        <br />I <b>realize</b> that the presence of a detectable
                        trace of any unauthorized substance is misconduct and
                        grounds for disciplinary action and that this may include
                        termination of my employment. I further realize that my
                        cooperation is voluntary and that refusal to submit a
                        specimen for testing is grounds for my termination.
                        <br />
                        <br />
                        <b>I understand</b> the Medication Statement of the Policy
                        and agree to complete a{" "}
                        <b>Medication Authorization/Determination</b> form{" "}
                        <b>
                          <u>prior to starting work</u>
                        </b>{" "}
                        and to list all over-the-counter or prescription
                        medication and drugs I am using.
                        <br />
                        <br />I <b>agree</b> to cooperate and abide by this policy
                        and understand that any failure to do so on my part is
                        grounds for termination.
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row wrap justify-between mt20">
                      <TableCell className="w60 textCenter">
                        <input
                          type="text"
                          name="signature"
                          id="signature"
                          className="w100 textCenter bn bb mt4  signatureClass font-20"
                        />
                        EMPLOYEE SIGNATURE
                      </TableCell>
                      <TableCell className="w36 textCenter pl40">
                        <DatePicker
                          onChange={(value) => {
                            setDateSignature(value);
                          }}
                          value={DateSignature}
                          id="offerDate"
                          className="datePickerReact data20h"
                        />
                        DATE
                      </TableCell>
                    </TableRow>
                    {/* -*- */}
                    <TableRow className="w100 row wrap justify-between mt20">
                      <TableCell className="w60 textCenter">
                        <input
                          type="text"
                          name="witnessSignature"
                          id="witnessSignature"
                          className="w100 textCenter bn bb mt4  signatureClass font-20"
                        />
                        SIGNATURE OF SUPERVISOR OR WITNESS
                      </TableCell>
                      <TableCell className="w36 textCenter pl40">
                        <DatePicker
                          onChange={(value) => {
                            setDateWitness(value);
                          }}
                          value={DateWitness}
                          id="offerDate"
                          className="datePickerReact data20h"
                        />
                        DATE
                      </TableCell>
                    </TableRow>
                  </Table>
                </TableCell>
              </TableRow>
            </Table>
            <Grid className="PageNum">Page 19 of DAWP 05/01</Grid>
          </TableContainer>
        </Grid>
        <Snackbar></Snackbar>
        <Acknowledge acknowledgedState={acknowledgedState} />
      </Grid>
    </Grid>
  );
};
export default DrugAlcoholWeapons;
