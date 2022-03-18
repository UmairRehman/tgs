import React, { useState , useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, Button, ListItem, List
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import DatePicker from 'react-date-picker';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  getGenerator,
} = helpers;

const {
  styles: {
    displayNoneStyles: useStyles
  }
} = Imports;


const DirectDeposit = () => {

  const storage = new Storage();

  const classes = useStyles();

  const [isPosting, setPosting] = useState(false);

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

  const [date, setDate] = useState(new Date())

  const [error, setError] = useState('')

  async function submit() {
    try {
      setPosting(true);

      let data = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        securityNumber: document.getElementById("securityNumber").value,
        accountType: [
          document.getElementById("accountType[0]").value,
          document.getElementById("accountType[1]").value,
          document.getElementById("accountType[2]").value
        ],

        routingNumber: [
          document.getElementById("routingNumber[0]").value,
          document.getElementById("routingNumber[1]").value,
          document.getElementById("routingNumber[2]").value
        ],

        accountNumber: [
          document.getElementById("accountNumber[0]").value,
          document.getElementById("accountNumber[1]").value,
          document.getElementById("accountNumber[2]").value
        ],


        signature: document.getElementById("signature").value,
        date: date,
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
      const captureElements = Array.from(
        document.getElementsByClassName('capture')
      );

      const images = [];

      for await (let i of getGenerator(captureElements.length)) {
        const captureElement = captureElements[i];

        let canvas = await (html2canvas(captureElement));

        let image = (canvas.toDataURL('image/png'));

        images.push(image);
      }

      const resposne = await users.submitForm({
        image: images,
        form: 10,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-directDeposit')) || true;

      storage.set('step-3-form-directDeposit', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} });

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
    <Grid container xs={12} className="LiqForms-Container">
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
      <TableContainer className="MainTable capture">
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
                    DIRECT DEPOSIT AUTHORIZATION
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20">
                  <TableCell className="w100 row justify-center">
                    <TableRow className="w60 row border p20">
                      <TableCell className="w40 row align-center">
                        FOR OFFICE USE ONLY:
                      </TableCell>
                      <TableCell className="w">
                        <TableRow className="w100">
                          <TableCell className="w100 row">
                            DOH: <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                          <TableCell className="w100 row">
                            DEPT: <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                          <TableCell className="w100 row">
                            PRE-NOTE: <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 row mt20">
                  <TableCell className="w60">
                    <TableRow className="w100">
                      <TableCell className="w100 row">
                        Employee Name: <input type="text" name="textfield" id="name" className="w h18 pl8 bn bb input-capitalization" 
                         value={`${userData.firstName} ${userData.lastName}`}
                         disabled />
                      </TableCell>
                      <TableCell className="w100 mt16 row">
                        Address:
                        <input type="text" name="textfield" id="address" className="w h18 pl8 bn bb input-capitalization" 
                         value={`${userData.address}`}
                         disabled
                        />
                      </TableCell>
                      <TableCell className="w100 mt16 row">
                        Social Security#: <input type="text" name="textfield" id="securityNumber" className="w h18 pl8 bn bb" 
                         value={`${userData.ssn}`}
                         disabled
                        />
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  <TableCell className="w20 pl30 row align-center">
                    <TableRow>
                      <TableCell>
                        {/* <TableRow className="w20">
                              <TableCell className="w100 row">
                              <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" /> New
                              </TableCell>
                            </TableRow>
                            <TableRow className="w20 mt16">
                              <TableCell className="w100 row">
                              <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" /> Chnage
                              </TableCell>
                            </TableRow> */}
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  <TableCell className="w20 personalFile">
                    <span>
                      PERSONAL FILE
                    </span>
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell>
                    I would like my payroll check to be deposited into the following accounts as directed below.
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20 mb20">
                  <TableCell className="w textCenter pr10">
                    ACCT. TYPE<br />(C or S)
                    <input type="text" name="textfield" id="accountType[0]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="accountType[1]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="accountType[2]" className="w100 h18 bn bb mt6" />
                  </TableCell>
                  <TableCell className="w textCenter pl10 pr10">
                    ROUTING NUMBER<br />( Should be 9 Digits)
                    <input type="text" name="textfield" id="routingNumber[0]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="routingNumber[1]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="routingNumber[2]" className="w100 h18 bn bb mt6" />
                  </TableCell>
                  <TableCell className="w textCenter pl10 pr10">
                    ACCOUNT NUMBER<br /><br />
                    <input type="text" name="textfield" id="accountNumber[0]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="accountNumber[1]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="accountNumber[2]" className="w100 h18 bn bb mt6" />
                  </TableCell>
                  <TableCell className="w textCenter pl10 pr10">
                    FINANCIAL INSTITUTION
                    <input type="text" name="textfield" id="institute[0]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="institute[1]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="institute[2]" className="w100 h18 bn bb mt6" />
                  </TableCell>
                  <TableCell className="w textCenter pl10">
                    AMOUNT<br />(or Balance)
                    <input type="text" name="textfield" id="amount[0]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="amount[2]" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="amount[3]" className="w100 h18 bn bb mt6" />
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt20">
                  <TableCell className="w100">
                    <TableRow className="w100 row">
                      <TableCell className="w20 bold">
                        *Account Type:
                      </TableCell>
                      <TableCell className="w80">
                        <b>C=</b> Checking or <b>S=</b> Savings
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 row mt6">
                      <TableCell className="w20 bold">
                        *Amount: =
                      </TableCell>
                      <TableCell className="w80">
                        <b>Amount=</b> Specified Amount<br />
                        <b>Balance=</b> Net amount of check (One bank account must be Balance)
                      </TableCell>
                    </TableRow>
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt30 mb30">
                  <TableCell className="w40 pr30">
                    <TableRow className="w100">
                      <TableCell className="w100">
                        <input type="text" name="textfield" id="signature" className="w100 bn bb mt6 mb6 signatureClass font-20" />
                        Employee Signature
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100 mt30">
                      <TableCell className="w100">
                        <DatePicker
                          onChange={(value) => { setDate(value) }}
                          value={date}
                          id="offerDate"
                          className="datePickerReact mb6"
                          disabled
                        />
                        Date
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  <TableCell className="w60 psvch">
                    PLEASE STAPLE VOIDED CHECK HERE
                  </TableCell>
                </TableRow>
              </Table>

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
      <Snackbar></Snackbar>
    </Grid>
  );
}
export default DirectDeposit;