import React, { useState } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from 'react-date-picker';

/** Third party dependencies */
import html2canvas from 'html2canvas';


/** Local dependencies & Libraries */
import Services from '../../../../Services';

import { helpers } from '../../../../helpers';

import { Imports } from '../../../../Imports';

import Snackbar from '../../../../Components/Snackbar';

const {
  users,
  Storage,
} = Services;

const {
  showSnackBar,
} = helpers;

const {
  styles: {
    displayNoneStyles: useStyles
  }
} = Imports;



const ArbitrationAgreement = () => {
  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);


  const CloseTab = () => {
    window.close();
  }
  const PrintOut = () => {
    window.print();
  }

  const [date, setDate] = useState(new Date())

  const [companyDate, setCompanyDate] = useState(new Date())

  const [error, setError] = useState('')

  async function submit() {
    try {
      setPosting(true);


      let data = {
        employe: document.getElementById('employe').value,
        // date: date,
        // company: document.getElementById('company').value,
        // companyDate: companyDate
      }

      const nullCheck = Object.values(data)
        .reduce((total, accumulator) => total || !accumulator, false);

      if (nullCheck == false) {
        console.log(data)
      }
      else {
        setPosting(false)
        setError("field must be filed")
        return showSnackBar("Kindly fill in all the fields")
      }
      // console.log("clickerd")
      let canvas = await (html2canvas(document.querySelector('#capture')));
      let image = (canvas.toDataURL('image/png'));


      const resposne = await users.submitForm({
        image: [image],
        form: 12,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-arbitration')) || true;

      storage.set('step-3-form-arbitration', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} })


      showSnackBar('Form has been submitted!');

      setPosting(false);

      window.self.close();

    } catch (exc) {
      console.log(exc);
      setPosting(false);
      return showSnackBar(exc.message)
    }
  }

  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
      <Grid className={isPosting ? classes.DisplayNone : 'FormsHeader'}>
        <List>
          <ListItem>
            <Grid className="FormMenuLogo"></Grid>
          </ListItem>
          <ListItem>
            <Button onClick={submit}>
              <SaveIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button onClick={() => window.print()}>
              <LocalPrintshopIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button onClick={() => window.close()}>
              <CancelIcon />
            </Button>
          </ListItem>
        </List>
      </Grid>

      <TableContainer className="MainTable">
        <Table className="SecondMainTable">
          <TableRow>
            <TableCell>
              <Table className="w100">
                <TableRow className="w100 mb10 mt10 row justify-center">
                  <TableCell>
                    <Avatar alt="TGS" className="TGSLogoSVG" src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 textCenter UnderLine">
                    PRE-DISPUTE ARBITRATION AGREEMENT
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    Although Trans-Global Solutions, Inc. hopes that employment disputes with its employees will not occur, TGS believes that when these disputes do arise, it is in the mutual interest of all concerned to handle them promptly and with a minimum of disturbance to the operations of TGS's businesses and the lives of its employees.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    Accordingly, to provide for more expeditious resolution of certain employment-related disputes that may arise between Trans-Global Solutions, Inc. and its employees, TGS has instituted a mandatory mediation and arbitration procedure (the TGS Mediation and Arbitration Procedure or the Procedure) for all employees. Under the Procedure, certain disputes that may arise from your employment with TGS or the termination of your employment must (after appropriate attempts to resolve your dispute internally through TGS management channels) be submitted for resolution by non-binding mediation and, if necessary, mandatory arbitration.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    In agreeing to submit certain employment disputes for resolution by private mediation and (if necessary) arbitration, you acknowledge that this Agreement is given in exchange for rights to which you are not otherwise entitled--namely, your employment as an Trans-Global Solutions, Inc. employee and the more expeditious resolution of employment disputes. In exchange for your agreement to submit these disputes to mediation and (if necessary) binding arbitration, Trans-Global Solutions, Inc. likewise agrees to the use of mediation and arbitration as the exclusive forum for resolving employment disputes covered by this Agreement.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    Hence, the parties shall be precluded from bringing or raising in court or another forum any dispute that was or could have been brought or raised under the procedures set forth in this Agreement.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 pb6">
                  <TableCell>
                    <i>The TGS Mediation and Arbitration Procedure</i>
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100">
                  <TableCell>
                    1. As a condition of your employment at TGS, you agree that any controversy or claim arising out of or relating to your employment relationship with Trans-Global Solutions, Inc. or the termination of that relationship, must be submitted for non-binding mediation before a third-party neutral and (if necessary) for final and binding resolution by a private and impartial arbitrator, to be jointly selected by you and Trans-Global Solutions, Inc.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    a. Claims Covered: This agreement to submit to mediation and (if necessary) arbitration:
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt6 pl20">
                  <TableCell>
                    i. Covers any dispute concerning the arbitrability of any such controversy or claim; and
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 pl20">
                  <TableCell>
                    ii. Includes, but is not limited to, any claim that could be asserted in court or before an administrative agency or claims for which the employee has an alleged cause of action, including without limitation claims for breach of any contract or covenant (express or implied); tort claims; claims for discrimination (including, but not limited to, discrimination based on sex, pregnancy, race, national or ethnic origin, age, religion, creed, marital status, sexual orientation, mental or physical disability or medical condition or other characteristics protected by statute); claims for wrongful discharge; violations of the Family and Medical Leave Act (FMLA); violations of confidentiality or breaches of trade secrets; and/or claims for violation of any federal, state or other governmental law, statute, regulation or ordinance, and whether based on statute or common law; and
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 pl20">
                  <TableCell className="w100 font11">
                    iii. All those claims whether made against Trans-Global Solutions, Inc., any of its subsidiary or affiliated entities or its individual officers or directors (in an official or personal capacity).
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell className="w100 font11">
                    b. Claims Not Covered: Claims covered by this Agreement do not include:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt6 pl20">
                  <TableCell className="w100 font11">
                    i. A claim for workers' compensation benefits;
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl20">
                  <TableCell className="w100 font11">
                    ii. A claim for unemployment compensation benefits;
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl20">
                  <TableCell className="w100 font11">
                    iii. A claim under the National Labor Relations Act (NLRA), as amended;
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl20">
                  <TableCell className="w100 font11">
                    iv. A claim by Trans-Global Solutions, Inc. for injunctive or other equitable relief, including without limitation claims for unfair competition and the use or unauthorized disclosure of trade secrets or confidential information, for which Trans-Global Solutions, Inc. may seek and obtain relief from a court of competent jurisdiction; and
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl20">
                  <TableCell className="w100 font11">
                    v. A claim based upon Trans-Global Solutions, Inc.'s current (successor or future) employee benefits and/or welfare plans that contain an appeal procedure or other procedure for the resolution of disputes under the plan.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10">
                  <TableCell className="w100 font11">
                    c. Internal Efforts: As a prerequisite for submitting an employment dispute to mediation and, if necessary, arbitration, both you and Trans-Global Solutions, Inc. agree to make good faith efforts at resolving any dispute internally on an informal basis through TGS management channels appropriate to that particular dispute.  Only when those internal efforts fail may an employment dispute be submitted to mediation and (if necessary) final and binding arbitration under the terms of the Procedure.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10">
                  <TableCell className="w100 font11">
                    d. Nonbinding Mediation: If efforts at informal resolution fail, disputes arising under this Agreement must first be submitted for non-binding mediation before a neutral third party. Mediation is an informal process where the parties to a dispute meet in an attempt to reach a voluntary resolution, using the third party as a facilitator. Mediation shall be conducted and administered by the American Arbitration Association (AAA) under its <u>Employment Arbitration Rules & Mediation Procedures,</u> which are incorporated into this Procedure by reference; or other applicable rules.
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      {/* -------------------------------------------- Page 2 ---------------------------------------------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100">
              <TableCell>
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt12">
                    <TableCell>
                      e. Binding Arbitration: If a covered dispute remains unresolved at the conclusion of the mediation process, either party may submit the dispute for resolution by final binding confidential arbitration under the Procedure. The arbitration will be conducted under the American Arbitration Association (AAA) under its <u>Employment Arbitration Rules & Mediation Procedures</u> with the additional proviso that the Procedure shall be conducted on a confidential basis. These Rules, incorporated by reference into this Procedure, include (but are not limited to) the procedures for the joint selection of an impartial arbitrator and for the hearing of evidence before the arbitrator. The arbitrator shall have the authority to allow for appropriate discovery and exchange of information before a hearing, including, but not limited to, production of documents, information requests, depositions and subpoenas. A copy of the complete AAA <u>Employment Arbitration Rules & Mediation Procedures</u> may be obtained from Trans-Global Solutions, Inc.’s Human Resources Manager.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6 pl20">
                    <TableCell>
                      i. Any conflict between the rules and procedures set forth in the AAA rules and those set forth in this Agreement shall be resolved in favor of those in this Agreement.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                      ii. The burden of proof at an arbitration shall at all times be on the party seeking relief.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                      iii. In reaching a decision, the arbitrator shall apply the governing substantive law applicable to the claims, causes of action and defenses asserted by the parties as applicable in Texas. The arbitrator shall have the power to award all remedies that could be awarded by a court or administrative agency in accordance with the governing and applicable substantive law, including, without limitation, Title VII, the Age Discrimination in Employment Act, the Family and Medical Leave Act.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt12">
                    <TableCell>
                      f. Time Limits and Procedures: The aggrieved party must give written notice of any claim to the other party as soon as possible after the aggrieved first knew or should have known of the facts giving rise to the claim. The written notice shall describe the nature of all claims asserted and the facts upon which those claims are based and shall be mailed to the other party by certified or registered mail, return receipt requested. Any such notice mailed to Trans-Global Solutions, Inc. shall be addressed to the Human Resources Manager.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6 pl20">
                    <TableCell>
                      i. Any mediation or arbitration conducted under this Agreement shall take place in Houston, Texas, unless an alternative location is chosen by the mutual agreement of the parties. The arbitrator shall render a decision and award within 30 days after the close of the arbitration hearing or at any later time on which the parties may agree. The award shall be in writing and signed and dated by the arbitrator and shall contain express findings of fact and the basis for the award.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                      ii. TGS agrees to the payment of all AAA administrative fees and arbitrator's fees and expenses. All other costs and expenses associated with the arbitration, including, without limitation, each party's respective attorneys' fees, shall be borne by the party incurring the expense.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                      iii. Judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction. The award may be vacated or modified only on the grounds specified in the U.S. Arbitration Act or other applicable law.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt18">
                    <TableCell>
                      g. No Retaliation/Employment At-Will:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt6 pl20">
                    <TableCell>
                      i. Under no circumstances will a Trans-Global Solutions, Inc. employee be retaliated against in any way for invoking the Procedure in good faith to seek the resolution of a dispute. Trans-Global Solutions, Inc. managers who engage in such retaliation will be subject to discipline under the appropriate TGS disciplinary procedures.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 pl20">
                    <TableCell>
                      ii. The Trans-Global Solutions, Inc. Arbitration and Mediation Procedure does not in any way alter the at-will employment status of TGS employees. TGS and its employees are always free to terminate the employment relationship at any time for any lawful reason and employment is not for any specific or definite duration.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt12">
                    <TableCell>
                      2. This Agreement sets forth the complete agreement of the parties on the subject of mediation and arbitration of the covered claims defined above and supersedes any prior or contemporaneous oral or written understanding on these subjects. No party is relying on any representations, oral or written, on the subject or the effect, enforceability or meaning of this Agreement, except as specifically set forth in this Procedure.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt12">
                    <TableCell>
                      By providing your signature below, you indicate your agreement to the terms set forth above. By the provision of the signature of the Trans-Global Solutions, Inc. Official named below, TGS indicates its agreement, as well, to the terms set forth in this Procedure. Both parties understand that by agreeing to the terms in this Procedure, both are giving up any constitutional or statutory right they may possess to have covered claims decided in a court of law before a judge or a jury.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt16">
                    <TableCell className="w100">
                      <TableRow className="w100 bold">
                        <TableCell>
                          Agreed to and acknowledged:
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt10">
                        <TableCell className="w100 pr16">
                          <input type="text" name="textfield" id="employe" className="w100 pl10 bn bb signatureClass font-20" />
                          Employee:
                        </TableCell>
                        <TableCell className="w100 row pl16">
                          Dated:
                          <DatePicker
                            onChange={(value) => { setDate(value) }}
                            value={date}
                            id="offerDate"
                            className="datePickerReact data20h" 
                            disabled
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 bold mt16">
                        <TableCell>
                          Agreed to and acknowledged:
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row">
                        <TableCell className="w100 pr16">
                          <input type="text" name="textfield" id="company" className="w100 pl10 bn bb signatureClass font-20"
                            disabled />
                          Trans-Global Solutions, Inc. Official:
                        </TableCell>
                        <TableCell className="w100 row pl16">
                          Dated:
                          <DatePicker
                            onChange={(value) => { setCompanyDate(value) }}
                            value={companyDate}
                            id="offerDate"
                            className="datePickerReact data20h"
                            disabled
                          />
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 textCenter">
                      Trans-Global Solutions, Inc.<br />
                      1735 W. Cardinal Dr., Beaumont, Texas 77705<br />
                      Phone (409) 720-5413 – Fax (409) 729-7041
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
      <Snackbar></Snackbar>
    </Grid>
  );
}
export default ArbitrationAgreement;