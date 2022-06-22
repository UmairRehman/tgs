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

const Harassment = () => {
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
    console.log(data)
  
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
        form: 14,
      });

      const step4FormsSubmitted =
        JSON.parse(storage.get("step-4-form-tgsHarrasment")) || true;

      storage.set(
        "step-4-form-tgsHarrasment",
        JSON.stringify(step4FormsSubmitted)
      );

      const step4FormPosted = new BroadcastChannel("step4form_posted");

      step4FormPosted.postMessage({ topic: "form-updated", message: {} });

      showSnackBar("Form has been submitted!");

      setPosting(false);

      window.self.close();
    } catch (exc) {
      console.log(exc);
      setAcknowledged(false)
      setPosting(false);
      return showSnackBar(exc.message)
    }
  };

  return (
    <Grid  container xs={12} className="LiqForms-Container">
      <TableContainer id="capture" className="MainTable">
        <Table className="SecondMainTable">
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
                    HARASSMENT PREVENTION POLICY
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 textCenter">
                    Revised 2/1/2015
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 bold font14">
                  <TableCell>
                    This document updates Trans-Global Solutions, lnc.'s (TGS)
                    long-standing anti-harassment policy. It establishes
                    policies and procedures to help TGS maintain a workplace
                    free from unlawful harassment. It defines harassing conduct
                    that violates these, outlines the rights and
                    responsibilities of employees, requires periodic training on
                    harassment and this policy, and establishes a system
                    ofaccountability for ensuring a workplace free from unlawful
                    harassment. Unlike other forms of discrimination, harassment
                    is typically cumulative in nature: one offensive remark will
                    seldom be illegal, but can become illegal if similar
                    incidents are allowed to recur. These procedures ensure that
                    appropriate officials are notified of, and have the
                    opportunity to promptly correct hostile or abusive conduct
                    that is, or has the potential to become, so severe or
                    pervasive as to constitute a legal claim of harassment. This
                    Policy is a part of TGS' ongoing efforts to provide a model
                    workplace for its employees.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20">
                  <TableCell>
                    <b>
                      PREVENTION AND ELIMINATION OF HARASSING CONDUCT IN THE
                      WORKPLACE PURPOSE:
                    </b>{" "}
                    This document updates Trans-Global Solutions, Inc.'s (TGS)
                    long-standing anti-harassment policy. It establishes
                    policies and procedures to help TGS maintain a workplace
                    free from unlawful harassment. It defines harassing conduct
                    that violates these, outlines the rights and
                    responsibilities of employees, requires periodic training on
                    harassment and this policy, and establishes a system of
                    accountability for ensuring a workplace free from unlawful
                    harassment. Unlike other forms of discrimination, harassment
                    is typically cumulative in nature: one offensive remark will
                    seldom be illegal, but can become illegal if similar
                    incidents are allowed to recur. These procedures ensure that
                    appropriate officials are notified of, and have the
                    opportunity to promptly correct hostile or abusive conduct
                    that is, or has the potential to become, so severe or
                    pervasive as to constitute a legal claim of harassment. This
                    Policy is a part of TGS' ongoing efforts to provide a model
                    workplace for its employees.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20">
                  <TableCell>
                    <b>EFFECTIVE DATE:</b> February 1, 2015.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    <b>DISTRIBUTION:</b> This Policy will also be made available
                    to employees.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    <b>OBSOLETE DATA AND FILING INSTRUCTIONS:</b> This Policy
                    supersedes any harassment or discrimination policy, or other
                    policy related to harassment or discrimination, published
                    prior to February 1, 2015.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    <b>
                      Zero Tolerance for Harassment, Discrimination, and
                      Retaliation.
                    </b>
                    <br />
                    It is the policy of TGS to maintain a model workplace free
                    from harassment and other forms of discrimination based on
                    race, color, religion, sex, national origin, age,
                    disability, and sexual orientation. Accordingly, TGS has
                    zero tolerance for harassment or any other form of unlawful
                    discrimination.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    In addition, TGS will not tolerate retaliation against any
                    employee for reporting matters under this policy or
                    procedure, or for assisting in any inquiry about such a
                    report.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    <b>Definition of Unlawful Harassment.</b>
                    <br />
                    Unlawful harassment includes unwelcome intimidation,
                    ridicule, insult, comments, or physical conduct based on
                    race, color, religion, sex (whether or not of a sexual
                    nature), national origin, age, disability, sexual
                    orientation, or retaliation where:
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt6">
                  <TableCell>
                    (1) An employee's acceptance or rejection of such conduct
                    explicitly or implicitly forms the basis for an employment
                    decision affecting the employee; or
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    (2) The conduct is sufficiently severe or pervasive as to
                    alter the terms, conditions, or privileges of the employee's
                    employment, or otherwise create an abusive work environment.
                    This type of harassment typically does not involve discrete
                    personnel actions such as denial of promotion.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    <b>Conduct Covered By this Policy.</b> The conduct covered
                    by this Policy is broader than the legal definition of
                    unlawful harassment listed above. It includes hostile or
                    abusive conduct based on race, color, religion, sex (whether
                    or not of a sexual nature), national origin, age,
                    disability, sexual orientation, or retaliation, even if the
                    conduct has not risen to the level of illegality. This is
                    because the goal of this policy is to avoid - or, at least,
                    limit - harm to any employee subjected to unwelcome hostile
                    or abusive conduct based on a protected characteristic by
                    ensuring that appropriate officials are notified of - and
                    have the opportunity to promptly correct - such conduct
                    before it becomes so severe or pervasive as to violate the
                    law, or as soon as possible thereafter.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                  <TableCell>
                    <b>RESPONSIBILITIES.</b>
                    <br />
                    The Director of Human Resources is responsible for:
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

{/* --------------------------------------------- Page 2 --------------------------------------------- */}
        <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 mt20">
              <TableCell>
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                      ( 1) Disseminating this Policy to all employees on an
                      annual basis and periodically reminding employees of their
                      responsibilities under this Policy.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (2) Developing and providing periodic training for all
                      employees on this Policy and its requirements.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (3) Developing a performance measure in compliance with
                      this Policy; ensuring that performance plans of all
                      supervisors and managers include a performance measure
                      addressing compliance with this Policy; and ensuring that
                      supervisors and managers are appropriately rated on the
                      measure.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (4) Receiving reports alleging violations of this Policy
                      and making or directing further inquiries into such
                      reports, as appropriate and necessary.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (5) Providing oversight, technical assistance, and support
                      to TGS staff to assure compliance with this Policy.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (6) Maintaining a written record of reports made and
                      actions taken pursuant to this Policy. These records will
                      be maintained in a secure location.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (7) Responding to inquiries from TGS staff or their
                      representatives about workplace harassment, including
                      explaining information about the requirements of this
                      Policy, as well as the existence of, and filing
                      requirements for, other processes that may be available
                      for employees to seek resolution of their disputes.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16 bold">
                    <TableCell>All TGS Staff are expected to:</TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                      (1) Understand their rights and responsibilities under
                      this Policy;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (2) Participate in the periodic training required under
                      this Policy;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                    (3) Refrain from engaging in hostile or abusive conduct;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (4) Report hostile or abusive conduct by employees or
                      others in the workplace.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (5) Inform the supervisor of the offending employee, a
                      management official, or the Director of Human Resources if
                      subjected to unwelcome hostile or abusive conduct; and
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                    (6) Fully cooperate in any inquiry or investigation.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16 bold">
                    <TableCell>
                    Supervisors and other management also must:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                    (1) Ensure a workplace free of illegal harassment;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (2) Ensure that their subordinates are aware of this
                      Policy and its requirements;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (3) Act promptly and effectively to stop hostile or
                      abusive conduct of which they are aware;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (4) Notify appropriate officials of reported or observed
                      harassing conduct and of their efforts to correct the
                      conduct;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                      (5) Appropriately evaluate subordinate supervisors and
                      managers of their performance under this Policy.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      Mechanisms to assist in carrying out these
                      responsibilities are described below.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16 bold">
                    <TableCell>PROCEDURES.</TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6 bold">
                    <TableCell>Reporting Hostile or Abusive Conduct.</TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                      (1) Any employee who has been subjected to unwelcome
                      hostile or abusive conduct is encouraged to inform the
                      person(s) responsible for the conduct that it is unwelcome
                      and offensive, and request that it cease. If the conduct
                      continues, or if the employee is uncomfortable confronting
                      the responsible person(s) about the conduct, s/he should
                      report the matter to:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6 pl20">
                    <TableCell>
                      (a) The supervisor of the employee engaging in the hostile
                      or abusive conduct;
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                    (b) Another supervisor or other management official; or
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>(c) The Director of Human Resources.</TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      (2) Employees who know of hostile or abusive conduct
                      directed at others are encouraged to report the matter to
                      the supervisor of the offending employee, another
                      supervisor or other management official, or to the
                      Director of Human Resources.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                <TableRow className="w100 mt16">
                    <TableCell>
                      (3) Initial contacts to the telephone line or e-mail
                      address will be confidential. Employees may obtain
                      information about this policy, or report hostile or
                      abusive conduct to the Director of Human Resources.
                    </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt16">
                    <TableCell>
                      <b>
                        NOTE: Reports made pursuant to this Policy do NOT
                        replace, substitute, or otherwise satisfy the separate
                        obligations of an EEO complaint, negotiated grievance or
                        other statutory process.
                      </b>{" "}
                      Unlike this Policy, those procedures typically provide for
                      remedial relief to the victims of a violation.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      <b>NOTE: Reports made pursuant to this Policy do NOT replace, substitute, or otherwise satisfy the separate
                        obligations of an EEO complaint, negotiated grievance or other statutory process.</b> Unlike this Policy, those
                      procedures typically provide for remedial relief to the victims of a violation.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
        </TableContainer>
        </Grid>

{/* --------------------------------------------- Page 3 --------------------------------------------- */}
        <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable mt20">
            {/* -*- */}
            <TableRow className="w100 mt16 bold">
              <TableCell>Management Response to Harassment Reports.</TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                <b>(1) Conducting Preliminary Inquiries.</b> A supervisor or
                manager who receives a report of, or otherwise becomes aware of,
                hostile or abusive conduct involving subordinates within her/his
                chain-of-command must determine:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
              <TableCell>
                (a) WHAT conduct is at issue and whether it arguably could be
                considered hostile or abusive;
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>(b) WHO may be involved;</TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (c) WHETHER any immediate corrective action is required to
                insulate the alleged victim from further hostile or abusive
                conduct; and
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (d) WHAT action is necessary and appropriate to otherwise
                address the report.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16 bold">
                <TableCell>
                (2) Notifying Appropriate Officials of Report.
                </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (a) A supervisor or manager who becomes aware of allegedly
                hostile or abusive conduct involving employees outside of
                his/her chain-of-command must, within one business day, notify
                the following appropriate officials:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
              <TableCell>
                I. The harassing employee's supervisor or, if the conduct
                implicates the supervisor, the Director of Human Resources; and
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                2. The victim's supervisor or, if the conduct implicates the
                supervisor, the Director of Human Resources.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10">
              <TableCell>
                (b) Supervisors and managers who become aware of hostile or
                abusive conduct within their chain-of-command must, no later
                than one business day following receipt of the report, notify
                the Director of Human Resources. This notification must include
                a description of any initial steps taken in response to the
                conduct and a plan of necessary and appropriate action to
                address the report.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10">
              <TableCell>
                (c) When a report is made directly to the Director of Human
                Resources, s/he shall:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
                <TableCell>
                1. Immediately acknowledge receipt of the report;
                </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
                <TableCell>
                2. Notify the Office/Department(s) implicated in the report; and
                </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                3. Require the Offices/Departments implicated in the report to
                immediately conduct a preliminary inquiry and take any other
                necessary and appropriate action.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16 bold">
              <TableCell>Performing Further Investigation.</TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (1) Deciding whether further investigation is necessary. The
                Director of Human Resources shall have sole discretion to decide
                whether further investigation is required, or if the preliminary
                inquiry is sufficient to determine whether corrective action is
                necessary. These decisions are fact specific, and must be made
                on a case-by-case basis.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (2) Deciding how investigations will be carried-out. When the
                Director of Human Resources determines that further
                investigation is necessary:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
              <TableCell>
                (a) The Director of Human Resources and the affected
                Office/Department shall, by agreement, determine who will direct
                further investigations. The Director of Human Resources may
                engage management officials from outside the involved
                office/department, or an outside investigative service if s/he
                deems it necessary and appropriate.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (b) The investigation must be conducted swiftly, impartially,
                and in a manner appropriate to the allegation.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16 bold">
                <TableCell>
                Resolving Conflicts of Interest in Inquiries or Investigations.
                </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6">
              <TableCell>
                (1) If a manager, supervisor or director is implicated in the
                potentially harassing conduct, the Director of Human Resources
                shall be responsible for conducting the preliminary inquiry and
                directing any further investigation that is warranted.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (2) Any dispute between the affected Office/Department and the
                Director of Human Resources regarding further investigation will
                be resolved by the Chief Financial Officer.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                <b>Taking Corrective Action.</b> If it is determined that
                unwelcome hostile or abusive conduct occurred, corrective action
                will be necessary.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (1) To determine the appropriate corrective action, the
                Office/Departments(s) implicated in the report will consult with
                the Director of Human Resources. The action necessary will
                depend on the severity and/or pervasiveness of the offense, the
                response required in policy to end such conduct, the offender's
                disciplinary/conduct history, and other surrounding
                circumstances. A non-exclusive list of possible corrective
                actions follows:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16 pl20">
              <TableCell>
                (a) If the conduct consisted of only occasional remarks that are
                arguably offensive but not severe, corrective action may consist
                of no more than discussing the matter with the responsible
                individual(s), explaining why it was inappropriate, and
                instructing them that it should not continue.
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        </Grid>

{/* --------------------------------------------- Page 4 --------------------------------------------- */}
        <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable mt20">
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (b) If more than one person has engaged in inappropriate but not
                severe conduct, if there is other evidence that employees are
                not sure about what conduct is appropriate and permissible, or
                if employees appear unaware of how to properly respond to such
                conduct, appropriate training should be provided.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (c) If the conduct is more severe or pervasive, including
                frequent offensive remarks, touching, or other egregious
                harassing behavior, the employee responsible for the hostile or
                abusive conduct should be separated from the victim, at least
                until the matter otherwise can be resolved. This should not be
                accomplished by transferring the employee who reported or
                otherwise was the victim of hostile or abusive conduct. If the
                victim, without having been asked or prompted, specifically
                requests such a transfer, management should inform the employee
                that s/he need not leave, and that instead the employee
                responsible for the hostile or abusive conduct may be
                transferred. Nonetheless, to the extent possible, the victim's
                request should be honored.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (d) For the most serious incidents, corrective action may
                include any disciplinary action otherwise available for
                violations of conduct standards, such as suspension, demotion,
                or termination.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (2) Appropriate corrective action, disciplinary or otherwise, up
                to and including removal will be taken against any supervisor or
                other management official who fails to perform her/his
                obligations as set forth in this Policy, including any
                unreasonable failure to report known violations of this policy.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16 bold">
              <TableCell>
                Maintaining Confidentiality, Keeping Records, and Monitoring
                Compliance.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100">
              <TableCell>
                <b>(1) Maintaining Confidentiality.</b> All reports ofhostile or
                abusive conduct and related infonnation will be maintained on a
                confidential basis to the greatest extent possible. The identity
                of the employee alleging violations of this Policy will be kept
                confidential, except as necessary to conduct an appropriate
                investigation into the alleged violations or when otherwise
                required by law.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (2) Writing Reports and Maintaining Records. A brief written
                report must be made to the Director of Human Resources regarding
                the final resolution of each allegation of hostile or abusive
                conduct under this Policy.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
              <TableCell>
                (a) These reports must identify the individuals implicated, the
                conduct involved, and the corrective action taken, if any. These
                records must be sufficient to aid the Director of Human
                Resources in detennining how to address any future incidents.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (b) If requested by the Director of Human Resources, written
                reports also may include a detailed description of the inquiry
                or investigation, an explanation of any conclusions, the
                reasoning for any corrective action issued, and/or any documents
                or other tangible evidence obtained during or created as a
                result of the inquiry or investigation.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (c) The Director of Human Resources shall maintain the written
                reports in a secure location. These written reports are
                protected by the Privacy Act, and will be maintained in
                accordance with its requirements and exemptions.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                (3) Monitoring the Procedures. The Director of Human Resources
                must ensure that these procedures are properly executed by:
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt6 pl20">
              <TableCell>
                (a) Monitoring inquiries and investigations under this Policy of
                reported or otherwise discovered hostile or abusive conduct;
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (b) Providing guidance concerning the infonnation to be gathered
                and methods to be used during inquiries and investigations; and
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 pl20">
              <TableCell>
                (c) Otherwise assuring that the investigations are swift,
                thorough, impartial, and appropriate to the allegation.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                <b>(4) Monitoring the Work Environment.</b> Managers/Directors
                will be responsible for ensuring that their offices/departments
                are in full compliance with requirements of this Policy. In
                addition, these officials are responsible for monitoring the
                work environment following a report alleging a violation of this
                Policy to ensure that there are no further violations or
                incidents of retaliation against any individual who has reported
                harassment or participated in the inquiry or investigation.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell>
                <b>FURTHER INFORMATION.</b> Any TGS employee or employee
                representative seeking further information concerning this
                Policy may contact the Director of Human Resources.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt10 font10">
              <TableCell>
                I, the undersigned Trans-Global Solutions, Inc. employee, have
                received and read the TransGlobal Solutions, Inc. Harassment
                Prevention Policy. I understand the guidelines and procedures
                outlined in said policy and will follow said guidelines and
                procedures while in the employ of Trans-Global Solutions, Inc.
              </TableCell>
            </TableRow>
            {/* -*- */}
            <TableRow className="w100 mt16">
              <TableCell className="w36 textCenter pl40">
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
            <TableRow className="w40 mt16">
              <TableCell className="w100">
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
            <TableRow className="w40 mt16">
              <TableCell className="w100">
                Employee Signature:
                <input
                  type="text"
                  name="textfield"
                  id="signaturetextfield"
                  className="w100 bn bb mt6 signatureClass font-20"
                />
              </TableCell>
            </TableRow>
            <TableRow className="w100 mt30">
              <TableCell className="w100 textCenter">
                Trans-Global Solutions, Inc.
                <br />
                1735 W. Cardinal Dr., Beaumont, Texas 77705
                <br />
                Phone (409) 720-5413 – Fax (409) 729-7041
                </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        </Grid>
      <Snackbar snackBarDefaultDuration={60000}></Snackbar>
      <Acknowledge  acknowledgedState={acknowledgedState} />
    </Grid>
  );
};
export default Harassment;
