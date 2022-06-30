import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  List,
  Button,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import DatePicker from 'react-date-picker';
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


/** Third party dependencies */
import html2canvas from 'html2canvas';


/** Local dependencies & Libraries */
import Services from '../../../../Services';

import { helpers } from '../../../../helpers';

import { Imports } from '../../../../Imports';

import Snackbar from '../../../../Components/Snackbar';
var moment = require('moment-timezone');


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


const ConditionalOffer = () => {

  const storage = new Storage();

  const classes = useStyles();

  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    hireDate: moment(new Date()).utc().format("MM-DD-YYYY"),
    position: '',
    location: '',
    pay: '',
    deptID: '',
    // jobID:'',
  })

  const [startDate, setStartDate] = useState(moment(new Date()).utc().format("MM-DD-YYYY"));

  const [offerDate, setOfferDate] = useState(moment(new Date()).utc().format("MM-DD-YYYY"));

  const [PDFimage, setPDFImage] = useState('');

  useEffect(async () => {
    let userProfile = await JSON.parse(localStorage.user_profile);
    let res = await hr.getAllApplicantsByID({ id: userProfile.id })


    let data = {
      firstName: res?.employee?.firstName || '',
      middleName: res?.employee?.middleName || '',
      lastName: res?.employee?.lastName || '',
      hireDate: res?.employee?.hireDate || new Date(),
      position: res?.position?.FullTitle || '',
      location: res?.position?.TGSLocation?.name || '',
      pay: res?.pay?.Rate || '',
      deptID: res?.employee?.jobId || ''
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

      const [
        hourlyRadioElement,
        salaryRadioElement,
      ] = Array.from(
        document.querySelectorAll('input[name="payType"]')
      );

      if (salaryType.toLowerCase() === 'salary') {
        salaryRadioElement.checked = true;
      } else {
        hourlyRadioElement.checked = true;
      }

      setStartDate(
        moment(new Date(EffectiveDate)).utc()
      );
    }
  }, [])

  const [error, setError] = useState('');

  const [isPosting, setPosting] = useState(false);

  async function submit() {

    try {

      setPosting(true);

      let officersName = document.getElementById("officersName").value;
      let position = document.getElementById("position").value;
      let payRate = document.getElementById("payRate").value;
      let payType = document.querySelector('input[name="payType"]:checked')?.value;
      let location = document.getElementById("location").value;
      let departmentCode = document.getElementById("departmentCode").value;

      // let phone = document.getElementById("phone").value;
      // let laptop = document.getElementById("laptop").value;
      // let terms = document.getElementById("terms").value;
      let offeree = document.getElementById("offeree").value;

      /** Disabling checks for pre-filled fields */
      let data = {
        // officersName,
        // position,
        // offerDate,
        payRate,
        payType,
        startDate,
        // location,
        // departmentCode,
        // phone,
        // laptop,
        // terms,
        offeree,

      }

      const nullCheck = Object.values(data)
        .reduce((total, accumulator) => total || !accumulator, false);

      if (nullCheck) {
        setPosting(false);
        console.log("data on fail", data);
        setError("field must be filed")
        return showSnackBar("Kindly fill in all fields!");
      }
      console.log(data)

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

      setPDFImage(images);

      setPosting(false);

      const resposne = await users.submitForm({
        image: images,
        form: 5,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-conditionalOffer')) || true;

      storage.set('step-3-form-conditionalOffer', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} })


      showSnackBar('Form has been submitted!');

      window.self.close();
    } catch (exc) {
      console.log(exc);
      setPosting(false);
      return showSnackBar(exc.message);
    }

  }

  const userProfileProp = (prop) => {
    const userProfile = JSON.parse(localStorage.user_profile);

    const {
      [prop]: propToSend = ''
    } = userProfile;

    return propToSend;
  }

  return (
    <Grid container xs={12} className="LiqForms-Container">
      <Snackbar></Snackbar>
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
      <table id="tablePrint" className="MainTable capture">
        <tr className="w100">
          <td className="w100">
            <table className="SecondMainTable">
              <tr className="w100">
                <td className="w100">
                  <table className="w100">
                    <tbody className="w100">
                      <tr className="w100 row justify-between">
                        <td>
                          <div className="PreEmploymentFile">
                            PRE-EMPLOYMENT FILE
                          </div>
                        </td>
                        <td className="row justify-end">
                          {/* <div className="TGSLogo"></div> */}
                          <div className="logoImageTGS"></div>
                        </td>
                      </tr>
                      <tr className="w100">
                        <td colspan="2" className="w100 header font16 bold textCenter">Conditional Offer of Employment</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
            <table className="w100 mt10">
              <tbody className="w100">
                <tr className="w100 row">
                  <td className="w50 header font14 italic bold row">
                    Offeree’s Name:
                    <input type="text" name="officersName" id="officersName" className="w64 h22 bn bb input-capitalization"
                      value={
                        `${userData?.firstName} ${userData?.lastName}`
                      }
                      disabled
                    />
                  </td>
                  <td className="w50 header font14 italic bold row">Offer Date:
                    <DatePicker
                      onChange={(value) => { setOfferDate(value) }}
                      value={offerDate}
                      id="offerDate"
                      className="datePickerReact"
                      disabled
                      format="MM-dd-yyyy"
                    />
                    {/* <input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" />
                        <span className="font24">/</span>
                        <input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" />
                        <span className="font24">/</span>
                        <input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" /> */}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w100">
              <tbody>
                <tr>
                  <td className="mt10 pt10 mb10 pb10">Trans-Global Solutions, Inc. (TGS) hereby extends a conditional offer of employment to the aforementioned Offeree, in accordance with the
                    following terms and condition and pending negative drug screen and acceptable background check results. This conditional offer of employment
                    is not an employment contract and does not, in any way, change, alter or affect the at-will nature of the employment relationship between TGS and
                    the Offeree.</td>
                </tr>
              </tbody>
            </table>
            <table className="w100">
              <tbody className="w100">
                <tr className="w100 row">
                  <td className="w50 row">Position:
                    <input type="text" name="textfield" id="position" className="w80 bn bb input-capitalization"
                      value={`${userData?.position}`}
                      disabled
                    />

                  </td>
                  <td className="w50 row">Pay Rate:
                    <input type="text" name="textfield" id="payRate" className="w38 bn bb"
                      value={`${userData?.pay}`}
                      disabled
                    />
                    <input type="radio" id="hourly" value="hourly" name="payType" className="custom-radio-disabled ml6 mt4" disabled /> Hourly
                    <input type="radio" id="weekly" value="weekly" name="payType" className="custom-radio-disabled ml10 mt4" disabled /> Bi-Weekly
                  </td>
                </tr>
                <tr className="w100 row">
                  <td className="w50 mt10 pt10 row">Location:
                    <input type="text" name="textfield" id="location" className="w80 bn bb input-capitalization"
                      value={`${userData?.location}`}
                      disabled
                    />
                  </td>
                  <td className="w50 mt10 pt10 row">Job Code:
                    <input type="text" name="textfield" id="departmentCode" className="w60 bn bb input-capitalization"
                      value={`${userData?.deptID}`}
                      disabled />
                  </td>

                  {/* <td className="w50 mt10 pt10 row">Job code:
                    <input type="text" name="textfield" id="departmentCode" className="w60 bn bb input-capitalization"
                      value={`${userData.jobID}`}
                      disabled />
                  </td> */}
                </tr>
              </tbody>
            </table>
            <table className="w100 boldBorder mt16 mb16 pt18">
              <tbody className="w100">
                <tr className="w100">
                  <td className="w50 row">Start Date:
                    <DatePicker
                      onChange={(value) => { setStartDate(value) }}
                      value={startDate}
                      id="startDate"
                      className="datePickerReact"
                      disabled
                      format="MM-dd-yyyy"
                    />
                    {/* <input type="text" name="textfield" id="textfield" className="w22 h22 bn bb textCenter" />
                      <span className="font12">/</span>
                      <input type="text" name="textfield" id="textfield" className="w24 h22 bn bb textCenter" />
                      <span className="font12">/</span>
                      <input type="text" name="textfield" id="textfield" className="w24 h22 bn bb textCenter" /> */}
                  </td>
                  <td className="w50">&nbsp;</td>
                </tr>
              </tbody>
            </table>
            {/* <table className="w100 boldBBorder pb12 mb20">
              <tbody className="w100">
                <tr className="w100 row">
                  <td className="w50"><input type="checkbox" id="phone" name="phone" value="cellphone" className="mr5" /> Company cell phone</td>
                  <td className="w50"><input type="checkbox" id="laptop" value="laptop" className="mr5" /> Company Laptop</td>
                </tr>
              </tbody>
            </table> */}
            <table className="w100">
              <tbody>
                <tr>
                  <td>
                    The Offeree understands that by accepting this conditional offer of employment he/she will be required to submit to, and successfully pass, a pre-employment drug screen and background check.<br /><br />
                    Any company property, including but not limited to cellular phone, laptop, or vehicle, received by the employee as a result of this
                    conditional offer of employment remains property of TGS and, therefore, may at any time, for any reason, be searched, modified,
                    replaced, revised or confiscated by TGS or its representatives.<br /><br />
                    Any fuel card, vehicle, cellular phone, laptop or other company property received by the employee as a result of this conditional
                    offer of employment is to be used only for work related purposes and shall not be involved in or used to commit any lewd, vulgar,
                    indecent, inappropriate, criminal or morally questionable acts.<br /><br />
                    By accepting this conditional offer of employment the Offeree affirms that he/she possesses sufficient physical and mental condition
                    to perform the duties of the offered job, as per the job description. As well, the Offeree states that he/she is willing and able to
                    comply with any regulations, industry standards, laws, rules and customs that apply to the performance of the offered job and will
                    submit to any necessary training or certification processes needed to successfully perform his/her necessary job duties.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w100 mt20">
              <tbody className="w100">
                <tr className="w100 row justify-between">
                  <td className="w50">By signing below the TGS extends the Offer of Employment to the Offeree, according to the aforementioned terms and conditions.</td>
                  <td className="w50">By signing below the Offeree accepts the Offer of Employment made by the TGS, according to the aforementioned terms and conditions.</td>
                </tr>
                <tr className="w100 row">
                  <td className="w50">
                    <input type="text" id="terms" name="textfield"
                      value={
                        (() => {
                          const { AEmployee: {
                            firstName = '',
                            lastName = '',
                          } } = JSON.parse(
                            localStorage.user_profile || {}
                          );

                          return `${firstName} ${lastName}`;
                        })() || ''
                      }
                      className="w96 bn bb pt10 pb10 signatureClass font-20"
                      disabled />
                  </td>
                  <td className="w50">
                    <input type="text" id="offeree" name="textfield" className="w100 bn bb pt10 pb10 signatureClass font-20" />
                  </td>
                </tr>
                <tr className="w100 row">
                  <td className="w50 bold">Trans-Global Solutions, Inc. Representative</td>
                  <td className="w20 bold">Offeree</td>
                </tr>
              </tbody>
            </table>
            <table className="w100 bold textCenter mt30">
              <tbody className="w100">
                <tr className="w100">
                  <td className="w100">Trans-Global Solutions, Inc.,</td>
                </tr>
              </tbody>
            </table>
            <table className="w100 mt20">
              <tbody>
                <tr> </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </Grid>
  );

}
export default ConditionalOffer;