import React, { useState, useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import DatePicker from 'react-date-picker';
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';


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



const BootCardAgreement = () => {

  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);

  const [dateofInjury, setDateofInjury] = useState(new Date () )

  const [dateOfRelease, setDateOfRelease] = useState(new Date () )

  const [formDate, setFormDate] = useState(new Date ())

  const [error, setError] = useState('')

  const [PDFimage, setPDFImage] = useState('')

  const [userData, setUserData] = useState({
    firstName : '',
      middleName : '',
      lastName: '',
      ssn : '',
      address : '',
  })
 useEffect( async () => {
    let userProfile = await  JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id : userProfile.id})
    let data = {
      firstName : res?.employee?.firstName || '',
      middleName : res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
      ssn : res?.employee?.ssn || '',
      address : res?.employee?.address || '',
      // address1 : res?.employee?.address1 || '',
    }
    setUserData(data)
    console.log(data)
  
  }, [])

  const CloseTab = () => {
    window.close();
  }
  const PrintOut = () => {
    window.print();
  }

  const count = 0;

  // convert into SVG using DOM
  async function submit() {
    try {
      setPosting(true);

      // console.log("clickerd")
      let canvas = await (html2canvas(document.querySelector('#capture')));
      let image = (canvas.toDataURL('image/png'))
      setPDFImage(image)
      // console.log(image)

      let data = {
        id: "id",
        name: document.getElementById('name').value,
        securityNumber: document.getElementById('securityNumber').value,
        Address: document.getElementById('adddress').value,
        dateofInjury: dateofInjury,
        typeOfInjury: document.getElementById('typeOfInjury').value,
        doctorName: document.getElementById('doctorName').value,
        doctorAddress: document.getElementById('doctorAddress').value,
        DoctorPhone: document.getElementById('DoctorPhone').value,
        locationName: document.getElementById('locationName').value,
        locationAddress: document.getElementById('locationAddress').value,
        locationPhone: document.getElementById('locationPhone').value,
        injuryDetail: document.getElementById('injuryDetail').value,
        bills: document.getElementById('bills').value == "Yes" ? 'Yes' : 'No',
        howMuch: document.getElementById('howMuch').value,
        howLong: document.getElementById('howLong').value,
        howMuch: document.getElementById('howMuch').value,
        attorny: document.getElementById('attorny').value,
        settelment: document.getElementById('settelment').value,
        dateOfRelease: dateOfRelease,
        limitaion: document.getElementById('limitaion').value,
        limitaionDoctorName: document.getElementById('limitaionDoctorName').value,
        limitaionAddress: document.getElementById('limitaionAddress').value,
        limitaionPhone: document.getElementById('limitaionPhone').value,
        confedential: document.getElementById('confedential').value,
        signature: document.getElementById('signature').value,
        formDate: formDate,
        PDFimage: image
      }

      const nullCheck = Object.values(data)
        .reduce((total, accumulator) => total || !accumulator, false);

      if (nullCheck == false) {
        console.log(data)
      } else {
        setPosting(false);
        setError("field must be filed")
        return showSnackBar('Kindly fill in all the fields');
      }

      const resposne = await users.submitForm({
        image: [image],
        form: 8,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-bootCard')) || true;

      storage.set('step-3-form-bootCard', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} })

      showSnackBar('Form has been submitted!');

      setPosting(false);

      window.self.close();

    } catch (exc) {
        console.log(exc);
        setPosting(false);
        setError("field must be filed")
        return showSnackBar(exc.message);
    }
  }






  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
      {/* <form 
        method="get"
        action={submit} 
        onSubmit={submit} 
        > */}
      <Grid className={isPosting ? classes.DisplayNone : 'FormsHeader'}>
        <List>
          <ListItem>
            <Grid className="FormMenuLogo"></Grid>
          </ListItem>
          <ListItem>
            <button
              onClick={submit}
            // type="submit"
            >
              <SaveIcon />
            </button>
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
                  <TableCell className="w100 textCenter font20 bold">
                    Boot Cost Payment Agreement
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="mt10">
                {/* --**-- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w50 row pr10">
                    NAME:
                    <input required type="text" id="name" className="w h18 pl8 bn bb input-capitalization" 
                      value={`${userData.firstName} ${userData.middleName} ${userData.lastName}`}
                        required
                        disabled />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    SOCIAL SECURITY NO.:
                    <input required type="text" name="textfield" id="securityNumber" className="w h18 pl8 bn bb" 
                      value={`${userData.ssn}`}
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Address:
                    <input required type="text" name="textfield" id="adddress" className="w h18 pl8 bn bb input-capitalization" 
                      value={`${userData.address}`}
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">6.</TableCell>
                  <TableCell className="w50 row pr10">
                    Date of Injury:
                    <DatePicker
                      onChange={(value) => { setDateofInjury(value) }}
                      value={dateofInjury}
                      id="offerDate"
                      className="datePickerReact"
                    />
                    {/* <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" /> */}
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    Type of Injury:
                    <input required type="text" name="textfield" id="typeOfInjury" className="w h18 pl8 bn bb" />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">7.</TableCell>
                  <TableCell className="w100 row pr10">
                    Doctors Who Treated the Injury:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input required type="text" name="textfield" id="doctorName" className="w100 bn bb textCenter mb5" />
                    (Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input required type="text" name="textfield" id="doctorAddress" className="w100 bn bb textCenter mb5" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input required type="text" name="textfield" id="DoctorPhone" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w30 pr20 textCenter">
                      <input required type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                      (Name)
                    </TableCell>
                    <TableCell className="w40 pr10 textCenter">
                      <input required type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                      (Address)
                    </TableCell>
                    <TableCell className="w30 pl20 textCenter">
                      <input required type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                      (Phone)
                    </TableCell>
                  </TableRow> */}
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">8.</TableCell>
                  <TableCell className="w100 row pr10">
                    Where Did the Injury Occur?
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input required type="text" name="textfield" id="locationName" className="w100 bn bb textCenter mb5" />
                    (Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input required required type="text" name="textfield" id="locationAddress" className="w100 bn bb textCenter mb5" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input required type="text" name="textfield" id="locationPhone" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">9.</TableCell>
                  <TableCell className="w100 row pr10">
                    How Did the Injury Happen?
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w100">
                    <textarea required id='injuryDetail' className="w100 bn bb bt bl br mt8" />


                    {/* <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" /> */}
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">10.</TableCell>
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
                    <input required value="yes" id="bills" type="radio" name="mb" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required value="No" id="bills" type="radio" name="mb" className="mr6 mt2" />
                    No
                  </TableCell>
                  <TableCell className="w row">
                    How Much?
                    <input required type="text" name="textfield" id="howMuch" className="w bn bb" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">b.</TableCell>
                  <TableCell className="w26">
                    Time off/Pay
                  </TableCell>
                  <TableCell className="w row pr20">
                    How Long?
                    <input required type="text" name="textfield" id="howLong" className="w bn bb" />
                  </TableCell>
                  <TableCell className="w row">
                    How Much?
                    <input required type="text" name="textfield" id="howMuch" className="w bn bb" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">c.</TableCell>
                  <TableCell className="w26">
                    Attorney’s Fees
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="attorny" name="at" value="yes" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="attorny" name="at" value="no" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 pl30 row">
                  <TableCell className="w4">d.</TableCell>
                  <TableCell className="w26">
                    Settlement
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="settelment" value="yes" name="st" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="settelment" value="No" name="st" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">11.</TableCell>
                  <TableCell className="w100 row">
                    Date Released By Doctor To Go Back To Work:
                    <DatePicker
                      onChange={(value) => { setDateOfRelease(value) }}
                      value={dateOfRelease}
                      id="offerDate"
                      className="datePickerReact"
                    />
                    {/* <input required type="text" name="textfield" id="textfield" className="w bn bb" /> */}
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">12.</TableCell>
                  <TableCell className="w40 row pr10">
                    Any Limitations of Work To Be Done?
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="limitaion" value="yes" name="mb" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="limitaion" value="no" name="mb" className="mr6 mt2" />
                    No
                  </TableCell>
                  <TableCell className="w row">
                    If yes, describe on the back of this form.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4"></TableCell>
                  <TableCell className="w30 pr20 textCenter">
                    <input required type="text" name="textfield" id="limitaionDoctorName" className="w100 bn bb textCenter mb5" />
                    (Doctor’s Name)
                  </TableCell>
                  <TableCell className="w40 pr10 textCenter">
                    <input required type="text" name="textfield" id="limitaionAddress" className="w100 bn bb textCenter mb5" />
                    (Address)
                  </TableCell>
                  <TableCell className="w30 pl20 textCenter">
                    <input required type="text" name="textfield" id="limitaionPhone" className="w100 bn bb textCenter mb5" />
                    (Phone)
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w4">13.</TableCell>
                  <TableCell className="w60">
                    Do You Allow Us Access To Your Confidential Medical Information?
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="confedential" value="yes" name="dyau" className="mr6 mt2" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input required type="radio" id="confedential" value="no" name="dyau" className="mr6 mt2" />
                    No
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt50 row">
                  <TableCell className="w50 row pr10">
                    YOUR SIGNATURE:
                    <input required type="text" name="textfield" id="signature" className="w bn bb textCenter signatureClass font-20" />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    DATE:
                    <DatePicker
                      onChange={(value) => { setFormDate(value) }}
                      value={formDate}
                      id="offerDate"
                      className="datePickerReact"
                      disabled
                    />
                    {/* <input required type="text" name="textfield" id="textfield" className="w bn bb textCenter mb5" /> */}
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
      {/* </form> */}
      <Snackbar></Snackbar>
    </Grid>
  );
}
export default BootCardAgreement;