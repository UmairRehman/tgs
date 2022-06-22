import React, { useState, useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button, TextField,
} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";
import html2canvas from 'html2canvas';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';


/** Local dependencies & Libraries */
import Services from '../../../../Services';

import { Imports } from '../../../../Imports';
import { Text } from "@react-pdf/renderer";


const {
  users,
  hr
} = Services;

const {
  styles: {
    displayNoneStyles: useStyles
  }
} = Imports;


const PostConditionalJobOffer2 = () => {

  var moment = require('moment-timezone');


  const classes = useStyles();

  let history = useHistory();

  const CloseTab = () => {
    window.close();
  }

  const PrintOut = () => {
    window.print();
  }

  const [isPosting, setPosting] = useState(false);

  const [stage, setStage] = useState('Second')

  const [error, setError] = useState('')

  const [date, setDate] = useState(null)

  const [pDate, setPDate] = useState(new Date())

  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    ssn: '',
    address: '',
  })

  async function submit() {

    setPosting(true);

    // let canvas = await (html2canvas(document.querySelector('#capture')));
    let canvas = await html2canvas(document.querySelector("#mainTable"));

    let image = (canvas.toDataURL('image/png'))
    let nullCheck = false
    /** Disabling checks for pre-filled fields */
    let data = {
      // name: document.getElementById('name').value,
      // seecurityNumber: document.getElementById('seecurityNumber').value,
      date: date,
      dateOnInjury: document.getElementById('dateOnInjury').value,
      typeOfInjury: document.getElementById('typeOfInjury').value,
      injuryDetails1: [
        document.getElementById("doctorName[0]").value,
        document.getElementById("address[0]").value,
        document.getElementById("phone[0]").value
      ],
      injuryDetails2: [
        document.getElementById("doctorName[1]").value,
        document.getElementById("address[1]").value,
        document.getElementById("phone[1]").value
      ],
      injuryOccure: document.getElementById('injuryOccure').value,
      injuryAddress: document.getElementById('injuryAddress').value,
      injuryPhone: document.getElementById('injuryPhone').value,
      comment: document.getElementById('comment').value,
      bills: (document.querySelector('input[name="bills"]:checked')?.value == "no")
        ? document.querySelector('input[name="bills"]:checked')?.value
        : document.getElementById('howMuch').value,
      howLong: document.getElementById('howLong').value,
      howMuch2: document.getElementById('howMuch2').value,
      attorney: document.querySelector('input[name="attorney"]:checked')?.value,
      settlement: document.querySelector('input[name="settlement"]:checked')?.value,
      dateRelease: document.getElementById('dateRelease').value,
      limitations: document.querySelector('input[name="limitations"]:checked')?.value,
      drName: document.getElementById('drName').value,
      drAddress: document.getElementById('drAddress').value,
      drPhone: document.getElementById('drPhone').value,
      confidential: document.querySelector('input[name="confidential"]:checked')?.value,
      signature: document.getElementById('signature').value.length > 0 ? document.getElementById('signature').value : nullCheck = true,
      pDate: pDate,
      image: image
    }
    // console.log(data)

    // const nullCheck = Object.values(data)
    //   .reduce((total, accumulator) => total || !accumulator, false);

    setPosting(false);

    if (nullCheck == false) {
      console.log(data)
      //  save in local storage for submit 
      localStorage.setItem('secondFormDataImage', image);
      localStorage.setItem('secondFormData', JSON.stringify(data))
      history.push({
        pathname: "/documents/post-conditional-job-offer/3",
      });
    } else {
      setError("field must be filed")
      alert("Kindly fill in all the fields")
    }

  }

  useEffect(async () => {
    let userProfile = await JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id: userProfile.id })
    let data = {
      firstName: res?.employee?.firstName || '',
      middleName: res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
      ssn: res?.employee?.ssn || '',
      address: res?.employee?.address || '',
      // address1 : res?.employee?.address1 || '',
    }
    setUserData(data)
    // console.log(data)

  }, [])

  async function eventHandle(value) {
    if (value == "second") {
      submit()
    }
    else {
      alert('Please go step by step')
    }
  }


  return (
    <Grid style={{minWidth: "100% !important"}} id="capture" container xs={12} className="LiqForms-Container">
      <Grid className={isPosting ? classes.displayNone : 'FormsHeader'}>
        <List>
          <ListItem>
            <Grid className="FormMenuLogo"></Grid>
          </ListItem>
          <ListItem>
            <Button onClick={() => submit()}>
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

      <Grid className="FormPagi">
        <List>
          <ListItem >
            <a onClick={() => eventHandle('first')}
            // to="/documents/post-conditional-job-offer"
            >
              1
            </a>
          </ListItem>
          <ListItem className="Active">
            <a
              onClick={() => eventHandle('first')}
            // to="/documents/post-conditional-job-offer/2"
            >
              2
            </a>
          </ListItem>

          <ListItem>
            <a
              onClick={() => eventHandle('second')}
            >
              3
            </a>
          </ListItem>

          <ListItem>
            <a
              onClick={() => eventHandle('forth')}
            >
              4
            </a>
          </ListItem>
        </List>
      </Grid>
      <TableContainer id="mainTable" className="MainTable">
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
                  <TableCell className="w100 textCenter">
                    SUPPLEMENTAL INFORMATION TO:<br />
                    POST CONDITIONAL JOB OFFER QUESTIONNAIRE<br />
                    (To Be Completed By Applicant)
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="mt10">
                {/* --**-- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">1.</TableCell>
                  <TableCell className="w50 row pr10">
                    NAME:
                    <input type="text" name="textfield" id="name" className="w h18 pl8 bn bb input-capitalization"
                      value={
                        `${userData.firstName} ${userData.lastName}`
                      }
                      disabled
                    />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    <TableCell className="w4">2.</TableCell>
                    SOCIAL SECURITY NO.:
                    <input type="text" name="textfield" id="seecurityNumber" className="w h18 pl8 bn bb"
                      value={
                        `${userData.ssn}`
                      }
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">3.</TableCell>
                  <TableCell className="w100 row">
                    Address:
                    <input type="text" name="textfield" id="dateOnInjury" className="w h18 pl8 bn bb"
                      value={
                        `${userData.address}`
                      }
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">4.</TableCell>
                  <TableCell className="w50 row pr10">
                    Date of Injury:
                    <DatePicker
                      onChange={(value) => { setDate(value) }}
                      value={date}
                      id="offerDate"
                      className="datePickerReact"
                      format="MM-dd-yyyy"
                    />
                  </TableCell>
                  <TableCell className="w50 row pl10 d-flex">
                    <TableCell className="w4">5.</TableCell>
                    Type of Injury:
                    <input type="text" name="textfield" id="typeOfInjury" className="w h18 pl8 bn bb align-self-end" />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">6.</TableCell>
                  <TableCell className="w100 row pr10">
                    Doctors Who Treated the Injury:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="doctorName[0]" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="address[0]" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="phone[0]" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="doctorName[1]" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="address[1]" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="phone[1]" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">7.</TableCell>
                  <TableCell className="w100 row pr10">
                    Where Did the Injury Occur?
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="injuryOccure" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="injuryAddress" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="injuryPhone" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">8.</TableCell>
                  <TableCell className="w100 row pr10">
                    How Did the Injury Happen?
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w100">
                    <input type="text" name="textfield" id="comment" className="w100 bn bb mt8" />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">9.</TableCell>
                  <TableCell className="w100 row pr10">
                    Was Worker’s Compensation Payment Made For:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">a.</TableCell>
                  <TableCell className="w26">
                    Medical Bills
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="bills" id="yes" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="bills" id="no" value="no" className="mr6 mt2" />
                    No
                  </TableCell>
                  <TableCell className="w row">
                    How Much?
                    <input type="text" name="textfield" id="howMuch" className="w bn bb" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">b.</TableCell>
                  <TableCell className="w26">
                    Time off/Pay
                  </TableCell>
                  <TableCell className="w row pr20">
                    How Long?
                    <input type="text" name="textfield" id="howLong" className="w bn bb" />
                  </TableCell>
                  <TableCell className="w row">
                    How Much?
                    <input type="text" name="textfield" id="howMuch2" className="w bn bb" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">c.</TableCell>
                  <TableCell className="w26">
                    Attorney’s Fees
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="attorney" id="yes" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="attorney" id="no" value="no" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">d.</TableCell>
                  <TableCell className="w26">
                    Settlement
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="settlement" id="yes" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="settlement" id="yes" value="yes" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">10.</TableCell>
                  <TableCell className="w100 row">
                    Date Released By Doctor To Go Back To Work:
                    <input type="text" name="textfield" id="dateRelease" className="w bn bb" />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">11.</TableCell>
                  <TableCell className="w40 row pr10">
                    Any Limitations of Work To Be Done?
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="limitations" id="yes" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="limitations" id="no" value="no" className="mr6 mt2" />
                    No
                  </TableCell>
                  <TableCell className="w row">
                    If yes, describe on the back of this form.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="drName" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Doctor’s Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="drAddress" className="w100 bn bb textCenter mb5 input-capitalization" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="drPhone" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">12.</TableCell>
                  <TableCell className="w60">
                    Do You Allow Us Access To Your Confidential Medical Information?
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="confidential" id="yes" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="confidential" id="no" value="no" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt50 row">
                  <TableCell className="w50 row pr10">
                    YOUR SIGNATURE:
                    <input type="text" name="textfield" id="signature" className="w bn bb textCenter mb5 signatureClass font-20" />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    DATE:
                    <DatePicker
                      onChange={(value) => { setPDate(value) }}
                      value={pDate}
                      id="offerDate"
                      className="datePickerReact"
                      disabled
                      format="MM-dd-yyyy"
                    />
                  </TableCell>
                </TableRow>
              </Table>
              {/* --**-- */}


            </TableCell>
          </TableRow>
          <TableRow className="w100 mt20">
            <TableCell className="w100 textCenter">
              Trans-Global Solutions, Inc.<br />
              1735 W. Cardinal Dr., Beaumont, Texas 77705<br />
              Phone (409) 720-5413 – Fax (409) 729-7041
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Grid>
  );
}
export default PostConditionalJobOffer2;