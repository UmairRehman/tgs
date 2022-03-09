import React, { useState , useEffect } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button
} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
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
  getGenerator
} = helpers;

const {
  styles: {
    displayNoneStyles: useStyles
  }
} = Imports;

const FuelCardAgreement = () => {

  const storage = new Storage();

  const classes = useStyles();


  const [error, setError] = useState('');

  const [isPosting, setPosting] = useState(false);

  const [printedName, setPrintedName] = useState('')

  const [signature, setSignature] = useState('')

  const [date, setDate] = useState(new Date ())
  const [userData, setUserData] = useState({
    firstName :  '',
    middleName :  '',
    lastName:  '',
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
    setPrintedName(`${userData.firstName} ${userData.lastName}`)
    console.log(data)
  
  }, [])

  async function submit() {
    try {
      setPosting(true);

      let data = {
        printedName,
        signature,
        date
      }

      const {
        signature: signatureDefined,
        ...requiredFields
      } = data;

      const nullCheck = Object.values(requiredFields)
        .reduce((total, accumulator) => total || !accumulator, false);

      // if (nullCheck) {
      //   setPosting(true);
      //   setError("field must be filed")
      //   return showSnackBar("Kindly fill in all fields!");
      // }

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
        form: 7,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-fuelCardAgreement')) || true;

      storage.set('step-3-form-fuelCardAgreement', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} })

      showSnackBar('Form has been submitted!');

      window.self.close();

      setPosting(false);

    } catch (exc) {
      console.log(exc);
      setPosting(false);
      return showSnackBar(exc.message);
    }

  }

  return (
    <Grid container xs={12} className="LiqForms-Container">
      {/* <FormHeader/> */}
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
                  <TableCell className="w100 font20 mt20 textCenter bold">
                    Fuel Card User Agreement
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10">
                  <TableCell>
                    A Wright Express PIN number has been assigned to you in connection with your work for Trans-Global Solutions, Inc.  Each company vehicle has been assigned a card which must remain with the vehicle at all times.  Do not carry cards in your pocket or wallet.  Lost, stolen or missing cards should be reported to management immediately.<br /><br />
                    The Wright Express card is to be used exclusively for fueling company vehicles.  Using the Wright Express card for personal use or to fuel non-assigned vehicles is PROHIBITED, and will result in disciplinary action up to and including termination of employment.  In addition, the following terms of use must be followed at all times:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 pl10 ListBullet">
                  <TableCell>
                    <List>
                      <ListItem>
                        PIN numbers should NOT be shared.  PIN owners are responsible for all fuel purchases made with their PIN numbers.
                      </ListItem>
                      <ListItem>
                        PIN numbers must not be kept with the fuel cards.
                      </ListItem>
                      <ListItem>
                        Fueling vehicles while the engine is running is prohibited.
                      </ListItem>
                      <ListItem>
                        Leaving vehicles unattended while fueling is prohibited.
                      </ListItem>
                      <ListItem>
                        Drivers are responsible for entering all information correctly each time the card is used.
                      </ListItem>
                      <ListItem>
                        Drivers should fuel vehicles with regular unleaded gas or diesel.  Premium grade gasoline is restricted.
                      </ListItem>
                    </List>
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt4">
                  <TableCell>
                    Fuel cards should be used to fuel the assigned vehicles only, and should not be used to fuel heavy equipment.  Any exception must be preapproved by management.  Approved exceptions will be for fueling containers or equipment other than the assigned vehicle.  When fueling a container or other equipment with gasoline, drivers should enter “1” as his/her mileage.  When filling containers or other equipment with diesel, drivers should enter “2” as their mileage.  All receipts for exception purchases must have the equipment number or job number written on them and be submitted to purchasing at the end of each calendar month.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20">
                  <TableCell className="font16 row w100">
                    Printed Name:
                    <input value={`${userData.firstName} ${userData.lastName}`} type="text" name="textfield" id="textfield"
                      className="w h22 pl8 bn bb input-capitalization"
                      disabled />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20">
                  <TableCell className="font16 row w100">
                    Signature:
                    <input onClick={(e) => setSignature(e.target.value)} type="text" name="textfield" id="textfield" className="w h22 pl8 bn bb signatureClass font-20" />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20">
                  <TableCell className="font16 row w100">
                    Date:
                    <DatePicker
                      onChange={(value) => { setDate(value) }}
                      value={date}
                      id="offerDate"
                      className="datePickerReact"
                      disabled
                    />
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
    </Grid>
  );
}
export default FuelCardAgreement;