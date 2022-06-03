import React, { useState, useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button
} from "@material-ui/core";
import DatePicker from 'react-date-picker';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SaveIcon from '@material-ui/icons/Save';

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

const CloseTab = () => {
  window.close();
}
const PrintOut = () => {
  window.print();
}

const TWICCardPaymentAgreement = () => {

  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);


  const [error, setError] = useState('')

  const [hireDate, setHireDate] = useState(new Date())

  const [signDate, setSignDate] = useState(new Date())

  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    ssn: '',
  })

  useEffect(async () => {
    let userProfile = await JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id: userProfile.id })
    let data = {
      firstName: res?.employee?.firstName || '',
      middleName: res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
      ssn: res?.employee?.ssn || '',
    }
    setUserData(data)

    const { payDetails } = localStorage;

    if (payDetails) {
      const {
        pay: {
          PayType: { name: salaryType }
        },
        position: {
          EffectiveDate
        }
      } = JSON.parse(payDetails);

      setHireDate(
        new Date(EffectiveDate)
      );
    }
  }, [])

  async function submit() {
    try {
      setPosting(true);

      let data = {
        hireDate: hireDate,
        // name: document.getElementById('name').value,
        // securityNumber: document.getElementById('securityNumber').value,
        signature: document.getElementById('signature').value,
        // representative: document.getElementById('representative').value,
        // signDate: signDate,
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
      let canvas = await (html2canvas(document.querySelector('#mainTable')));

      let image = (canvas.toDataURL('image/png'));


      const resposne = await users.submitForm({
        image: [image],
        form: 9,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-twic')) || true;

      storage.set('step-3-form-twic', JSON.stringify(step3FormsSubmitted));

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
      {/* <FormHeader/> */}
      <Grid className={isPosting ? classes.DisplayNone : 'FormsHeader'}>
        <List>
          <ListItem>
            <Grid className="FormMenuLogo"></Grid>
          </ListItem>
          <ListItem>
            <Button onClick={submit} >
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
                  <TableCell className="w100 textCenter font20 bold">
                    TWIC Card Payment Agreement
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="mt10">
                {/* --**-- */}
                <TableRow className="w100 mt10">
                  <TableCell className="w100 row">
                    Hire Date:
                    <DatePicker
                      onChange={(value) => { setHireDate(value) }}
                      value={hireDate}
                      id="offerDate"
                      className="datePickerReact pr0 pl0"
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Employee Name:
                    <input type="text" name="textfield" id="name" className="w h18 pl8 bn bb input-capitalization"
                      value={`${userData.firstName} ${userData.lastName}`}
                      disabled
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Social Security #:
                    <input type="text" name="textfield" id="securityNumber" className="w h18 pl8 bn bb"
                      value={`${userData.ssn}`}
                      disabled
                    />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell>
                    If for any reason I am terminated or resign from Trans-Global Solutions, Inc. within six (6) months of employment I agree to have the full cost of my Transportation Workers Identification Card (TWIC) deducted from my final paycheck.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w30">
                    <input type="text" name="textfield" id="signature" className="w100 pl8 bn bb mb10 signatureClass font-20"
                      autofocus />
                    Employee Signature
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w30">
                    <input type="text" name="textfield" id="representative" className="w100 h18 pl8 bn bb mb10 signatureClass font-20"
                      value={
                        (() => {
                          const {
                            AEmployee = {
                              firstName: '',
                              lastName: '',
                            }
                          } = JSON.parse(
                            localStorage.user_profile || {}
                          );

                          const { firstName, lastName } = AEmployee;

                          return `${firstName} ${lastName}`;
                        })() || ''
                      }
                      disabled />
                    Company Representative
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w30">
                    <input type="text" name="textfield"
                      id="offerDate" className="w100 h18 pl8 bn bb mb10 signatureClass font-20"
                      value={signDate}
                      onChange={($e) => { setSignDate($e?.target?.value) }}
                      disabled />
                    {/* <DatePicker
                      onChange={(value) => { setSignDate(value) }}
                      value={signDate}
                      id="offerDate"
                      className="datePickerReact mb10"
                    /> */}
                    Date Signed
                  </TableCell>
                </TableRow>
                {/* -*- */}
              </Table>
              {/* --**-- */}


            </TableCell>
          </TableRow>
          <TableRow className="w100 mt20 FooterRow">
            <TableCell className="w100 textCenter">
              Trans-Global Solutions, Inc.<br />
              1735 W. Cardinal Dr., Beaumont, Texas 77705<br />
              Phone (409) 720-5413 – Fax (409) 729-7041
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Snackbar></Snackbar>
    </Grid>
  );
}
export default TWICCardPaymentAgreement;