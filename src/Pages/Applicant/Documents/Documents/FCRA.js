import React, { useState , useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, Button, List, ListItem
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
  hr,
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


const FCRA = () => {
  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);


  const CloseTab = () => {
    window.close();
  }
  const PrintOut = () => {
    window.print();
  }
  const [error, setError] = useState('')

  const [date, setDate] = useState(new Date())
  const [companyDate, setCompanyDate] = useState(new Date())

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

  async function submit() {
    try {
      setPosting(true);

      let data = {
        signature: document.getElementById('signature').value,
        // name: document.getElementById('name').value,
        // witnessSignature: document.getElementById('witnessSignature').value,
        // date: date
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
        form: 11,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-fcra')) || true;

      storage.set('step-3-form-fcra', JSON.stringify(step3FormsSubmitted));

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
                    FAIR CREDIT REPORTING ACT DISCLOSURE & AUTHORIZATION
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    Chambers County Improvement District No. 1, when considering your application for employment; making a decision whether or not to offer you employment; deciding to whether to continue your employment (if you are hired); and making other employment related decisions directly affecting you, may wish to obtain and use a “consumer report” from a “consumer reporting agency.”  These terms are defined in the Fair Credit Reporting Act (“FCRA”), which applies to you.  As an applicant for employment, an employee, or an independent contractor of Chambers County Improvement District No. 1, you are a consumer with rights under the FCRA.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    A “consumer reporting agency” is a person or business that, for monetary fees, dues or on a cooperative nonprofit basis, regularly assembles or evaluates consumer credit information or other information on consumers for the purpose of furnishing “consumer reports” to others, such as Chambers County Improvement District No. 1
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    A “consumer report” is any written, oral or other communication of any information by a “consumer reporting agency” bearing on a consumer’s credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics or mode of living which is used or collected for the purpose of serving as a factor in establishing the consumer’s eligibility for employment purposes.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    An “investigative consumer report” is a consumer report in which the information about your character, general reputation, personal characteristics and mode of living is obtained in whole or in part through personal interviews with persons who may have knowledge concerning such information.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 boldBBorder pb16">
                  <TableCell>
                    If Chambers County Improvement District No. 1 obtains a “consumer report” about you, and if Chambers County Improvement District No. 1 considers any information in the “consumer report” when making an employment related decision that directly and adversely affects you, you will be provided with a copy of the “consumer report” before the decision is finalized.  You also may contact the Federal Trade Commission about your rights under the FCRA as a “consumer” with regard to “consumer reports” and “consumer reporting agencies.”
                  </TableCell>
                </TableRow>

                {/* -*- */}
                <TableRow className="w100 mt30 pb16">
                  <TableCell className="w100 textCenter">
                    AUTHORIZATION & RELEASE
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100">
                  <TableCell>
                    I hereby certify that the information provided by me for the purpose of employment is true and complete to the best of my knowledge.  As part of my request for employment, I voluntarily authorize all persons, businesses, current and former employers and supervisors, credit reporting agencies, educational institutions, law enforcement agencies, motor vehicle departments and city, state, county and federal courts to release information they may have about me to Chambers County Improvement District No. 1 and/or any third-party entity chosen by Chambers County Improvement District No. 1 for the purpose of obtaining said information.  If I become employed by Chambers County Improvement District No. 1, this permission shall remain in effect as long as I am an employee.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    Also, I request that a facsimile of this Authorization be treated as though it were the original.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    In accordance with the Fair Credit Reporting Act, if my employment is denied, based either wholly or partly on information contained in a consumer report or investigative consumer report from a consumer reporting agency, Chambers County Improvement District No. 1 shall so advise me, and supply the name and address of the consumer reporting agency making the report.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10">
                  <TableCell>
                    I hereby authorize Chambers County Improvement District No. 1 and/or any third-party background checking company chosen by Chambers County Improvement District No. 1 to obtain a consumer report and/or investigative consumer report regarding me in connection with: (1) my application for employment; and/or (2) if I am hired, my continued employment.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt30">
                  <TableCell className="w100 font11">
                    I ACKNOWLEDGE THAT I HAVE RECEIVED AND READ THIS “FAIR CREDIT REPORTING ACT DISCLOSURE, AUTHORIZATION AND RELEASE FORM.”
                    <br /><br />
                    I HAVE ALSO RECEIVED A COPY OF THE ATTACHED “A SUMMARY OF YOUR RIGHTS UNDER THE FAIR CREDIT REPORTING ACT.”

                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 row mt30">
                  <TableCell className="w100">
                    <TableRow className="w100 row">
                      <TableCell className="w100 row pr16">
                        Signature <input type="text" name="textfield" id="signature" className="w pl8 bn bb signatureClass font-20" />
                      </TableCell>
                      <TableCell className="w100 row pl16">
                        Printed Name <input type="text" name="textfield" id="name" className="w pl8 bn bb input-capitalization" 
                        value={`${userData.firstName} ${userData.middleName} ${userData.lastName}`}
                        disabled />
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row mt20">
                      <TableCell className="w100 row pr16">
                        Witness Signature
                        <input type="text" name="textfield" id="witnessSignature" className="w pl8 bn bb signatureClass font-20"
                          disabled />
                      </TableCell>
                      <TableCell className="w100 row pl16">
                        Date
                        <DatePicker
                          onChange={(value) => { setDate(value) }}
                          value={date}
                          id="offerDate"
                          className="datePickerReact"
                          disabled
                        />
                      </TableCell>
                    </TableRow>
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt30 font11">
                  <TableCell>
                    Para información en español, visite www.ftc.gov/credit o escribe a la FTC Consumer Response Center, Room 130-A 600 Pennsylvania Ave. N.W., Washington, D.C. 20580.
                  </TableCell>
                </TableRow>
              </Table>

            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      {/* ------------------------------------------------------------------------------------------ */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 mt20">
              <TableCell>
                <Table className="w100">
                  <TableRow className="w100">
                    <TableCell className="w100 UnderLine">
                      A SUMMARY OF YOUR RIGHTS UNDER THE FAIR CREDIT REPORTING ACT
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      The federal Fair Credit Reporting Act (FCRA) promotes the accuracy, fairness, and privacy of information in the files of consumer reporting agencies. There are many types of consumer reporting agencies, including credit bureaus and specialty agencies (such as agencies that sell information about check writing histories, medical records, and rental history records). Here is a summary of your major rights under the FCRA. For more information, including information about additional rights, go to www.ftc.gov/credit or write to: Consumer Response Center, Room 130-A, Federal Trade Commission, 600 Pennsylvania Ave. N.W., Washington, D.C. 20580.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You must be told if information in your file has been used against you. Anyone who uses a credit report or another type of consumer report to deny your application for credit, insurance, or employment – or to take another adverse action against you – must tell you, and must give you the name, address, and phone number of the agency that provided the information.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You have the right to know what is in your file. You may request and obtain all the information about you in the files of a consumer reporting agency (your “file disclosure”). You will be required to provide proper identification, which may include your Social Security number. In many cases, the disclosure will be free. You are entitled to a free file disclosure if:
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell className="pl20">
                      -	a person has taken adverse action against you because of information in your credit report;<br />
                      -	you are the victim of identify theft and place a fraud alert in your file;<br />
                      -	your file contains inaccurate information as a result of fraud;<br />
                      -	you are on public assistance;<br />
                      -	you are unemployed but expect to apply for employment within 60 days.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      In addition, by September 2005 all consumers will be entitled to one free disclosure every 12 months upon request from each nationwide credit bureau and from nationwide specialty consumer reporting agencies. See www.ftc.gov/credit for additional information.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You have the right to ask for a credit score. Credit scores are numerical summaries of your credit-worthiness based on information from credit bureaus. You may request a credit score from consumer reporting agencies that create scores or distribute scores used in residential real property loans, but you will have to pay for it. In some mortgage transactions, you will receive credit score information for free from the mortgage lender.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You have the right to dispute incomplete or inaccurate information. If you identify information in your file that is incomplete or inaccurate, and report it to the consumer reporting agency, the agency must investigate unless your dispute is frivolous. See www.ftc.gov/credit for an explanation of dispute procedures
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      Consumer reporting agencies must correct or delete inaccurate, incomplete, or unverifiable information. Inaccurate, incomplete or unverifiable information must be removed or corrected, usually within 30 days. However, a consumer reporting agency may continue to report information it has verified as accurate
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      Consumer reporting agencies may not report outdated negative information. In most cases, a consumer reporting agency may not report negative information that is more than seven years old, or bankruptcies that are more than 10 years old.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      Access to your file is limited. A consumer reporting agency may provide information about you only to people with a valid need -- usually to consider an application with a creditor, insurer, employer, landlord, or other business. The FCRA specifies those with a valid need for access.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You must give your consent for reports to be provided to employers. A consumer reporting agency may not give out information about you to your employer, or a potential employer, without your written consent given to the employer. Written consent generally is not required in the trucking industry. For more information, go to <a href="www.ftc.gov/credit">www.ftc.gov/credit</a>.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You may limit “prescreened” offers of credit and insurance you get based on information in your credit report. Unsolicited “prescreened” offers for credit and insurance must include a toll-free phone number you can call if you choose to remove your name and address from the lists these offers are based on. You may opt-out with the nationwide credit bureaus at 1-888-5-OPTOUT (1-888-567-8688).
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      You may seek damages from violators. If a consumer reporting agency, or, in some cases, a user of consumer reports or a furnisher of information to a consumer reporting agency violates the FCRA, you may be able to sue in state or federal court.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16">
                    <TableCell>
                      Identity theft victims and active duty military personnel have additional rights. For more information, visit <a href="www.ftc.gov/credit">www.ftc.gov/credit</a>.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>

      {/* ------------------------------------------------------------------------------------------ */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 mt20">
              <TableCell>
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt12">
                    <TableCell>
                      States may enforce the FCRA, and many states have their own consumer reporting laws. In some cases, you may have more rights under state law. For more information, contact your state or local consumer protection agency or your state Attorney General. Federal enforcers are:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt30 border">
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">TYPE OF BUSINESS: </TableCell>
                      <TableCell className="w50 p6">CONTACT: </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">Consumer reporting agencies, creditors and others not listed below </TableCell>
                      <TableCell className="w50 p6">Federal Trade Commission: Consumer Response Center - FCRA Washington, DC 20580 1-877-382-4357 </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">National banks, federal branches/agencies of foreign banks (word "National" or initials "N.A." appear in or after bank's name) </TableCell>
                      <TableCell className="w50 p6">
                        Office of the Comptroller of the Currency
                        Compliance Management, Mail Stop 6-6
                        Washington, DC 20219 800-613-6743
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">Federal Reserve System member banks (except national banks, and federal branches/agencies of foreign banks) </TableCell>
                      <TableCell className="w50 p6">
                        Federal Reserve Consumer Help (FRCH) P O Box 1200<br />
                        Minneapolis, MN 55480<br />
                        Telephone: 888-851-1920 <br />
                        Website Address: www.federalreserveconsumerhelp.gov<br />
                        Email Address: ConsumerHelp@FederalReserve.gov
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">
                        Savings associations and federally chartered savings banks (word "Federal" or initials "F.S.B." appear in federal institution's name)
                      </TableCell>
                      <TableCell className="w50 p6">
                        Office of Thrift Supervision
                        Consumer Complaints
                        Washington, DC 20552 800-842-6929
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">
                        Federal credit unions (words "Federal Credit Union" appear in institution's name)
                      </TableCell>
                      <TableCell className="w50 p6">
                        National Credit Union Administration
                        1775 Duke Street
                        Alexandria, VA 22314 703-519-4600
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">
                        State-chartered banks that are not members of the Federal Reserve System
                      </TableCell>
                      <TableCell className="w50 p6">
                        Federal Deposit Insurance Corporation<br />
                        Consumer Response Center, 2345 Grand Avenue, Suite 100 Kansas City, Missouri 64108-2638 1-877-275-3342
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">
                        Air, surface, or rail common carriers regulated by former Civil Aeronautics Board or Interstate Commerce Commission
                      </TableCell>
                      <TableCell className="w50 p6">
                        Department of Transportation , Office of Financial Management Washington, DC 20590 202-366-1306
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row bb">
                      <TableCell className="w50 br p6">
                        Activities subject to the Packers and Stockyards Act, 1921
                      </TableCell>
                      <TableCell className="w50 p6">
                        Department of Agriculture
                      </TableCell>
                    </TableRow>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            <TableRow className="w100 mt30">
              <TableCell className="w100 textCenter">
                Trans-Global Solutions, Inc.<br />
                1735 W. Cardinal Dr., Beaumont, Texas 77705<br />
                Phone (409) 720-5413 – Fax (409) 729-7041
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
      <Snackbar></Snackbar>
    </Grid>
  );
}
export default FCRA;