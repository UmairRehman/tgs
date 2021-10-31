import React, { useState } from "react";
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


  async function submit() {
    try {
      setPosting(true);

      let data = {
        hireDate: hireDate,
        name: document.getElementById('name').value,
        securityNumber: document.getElementById('securityNumber').value,
        signature: document.getElementById('signature').value,
        representative: document.getElementById('representative').value,
        signDate: signDate,
      }


      const nullCheck = Object.values(data)
        .reduce((total, accumulator) => total || !accumulator, false);

      if (nullCheck == false) {
        console.log(data)
      }
      else {
        setError("field must be filed")
        alert("Error! Field must be Filled")
      }

      // console.log("clickerd")
      let canvas = await (html2canvas(document.querySelector('#capture')));
      let image = (canvas.toDataURL('image/png'));


      const resposne = await users.submitForm({
        image: [image],
        form: 9,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-twic')) || true;

      storage.set('step-3-form-twic', JSON.stringify(step3FormsSubmitted));

      showSnackBar('Form has been submitted!');

      setPosting(false);

      window.self.close();

    } catch (exc) {
      console.log(exc);

      setPosting(false);
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
                      className="datePickerReact"
                    />
                    s                    </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Employee Name:
                    <input type="text" name="textfield" id="name" className="w h18 pl8 bn bb" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Social Security #:
                    <input type="text" name="textfield" id="securityNumber" className="w h18 pl8 bn bb" />
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
                    <input type="text" name="textfield" id="signature" className="w100 h18 pl8 bn bb mb10" />
                    Employee Signature
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w30">
                    <input type="text" name="textfield" id="representative" className="w100 h18 pl8 bn bb mb10" />
                    Company Representative
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w30">
                    <DatePicker
                      onChange={(value) => { setSignDate(value) }}
                      value={signDate}
                      id="offerDate"
                      className="datePickerReact"
                    />
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
    </Grid>
  );
}
export default TWICCardPaymentAgreement;