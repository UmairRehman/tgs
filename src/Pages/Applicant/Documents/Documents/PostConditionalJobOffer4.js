import React, { useState } from "react";
import {
  Grid, TableContainer, Table, TableCell, TableRow, List, ListItem, Button
} from "@material-ui/core";
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import Avatar from '@material-ui/core/Avatar';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import html2canvas from 'html2canvas';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';


/** Local dependencies & Libraries */
import Services from '../../../../Services';

import { Imports } from '../../../../Imports';


const {
  users,
  Storage,
} = Services;

const {
  styles: {
    displayNoneStyles: useStyles
  }
} = Imports;



const PostConditionalJobOffer4 = () => {

  const storage = new Storage();

  const classes = useStyles();

  let history = useHistory();

  const [date, setDate] = useState(new Date())

  const CloseTab = () => {
    window.close();
  }
  const PrintOut = () => {
    window.print();
  }

  const [isPosting, setPosting] = useState(false);


  const [error, setError] = useState('')
  async function submit() {

    setPosting(true);

    let canvas = await (html2canvas(document.querySelector('#capture')));
    let image = (canvas.toDataURL('image/png'))

    let data = {
      disabledVeteran : document.querySelector('input[name="disabledVeteran"]:checked')?.value,
      eraVeteran : document.querySelector('input[name="eraVeteran"]:checked')?.value,
      protectedVeteran : document.querySelector('input[name="protectedVeteran"]:checked')?.value,
      disability : (document.querySelector('input[name="disability"]:checked')?.value!='Yes')?
                      document.querySelector('input[name="disability"]:checked')?.value 
                      : 
                      document.getElementById("comment")?.value,
      signature: document.getElementById("signature").value,
      data: date,
      image: image
    }
    console.log(data)
    const nullCheck = Object.values(data)
      .reduce((total, accumulator) => total || !accumulator, false);

    setPosting(false);

    if (nullCheck == false) {
      //  save in local storage for submit 
      const firstPage = storage.get('firstFormDataImage');
      const secondPage = storage.get('secondFormDataImage');
      const thirdPage = storage.get('thirdFormDataImage');

      // localStorage.setItem('fourthFormDataImage', image);
      // localStorage.setItem('fourthFormData', JSON.stringify(data))

      const response = await users.submitForm({
        image: [
          firstPage,
          secondPage,
          thirdPage,
          image
        ],
        form: 6,
      });

      const step3FormsSubmitted = JSON.parse(storage.get('step-3-form-postConditionalOffer')) || true;

      storage.set('step-3-form-postConditionalOffer', JSON.stringify(step3FormsSubmitted));

      const step3FormPosted = new BroadcastChannel('step3form_posted');

      step3FormPosted.postMessage({ topic: 'form-updated', message: {} })

      window.self.close();
    }
    else {
      setError("field must be filed")
      alert("Kindly fill in all the fields")
    }

  }

  async function eventHandle(value) {
    if (value == "fourth")
      return submit()
    alert('Please go step by step')
  }


  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
      {/* <FormHeader/> */}
      <Grid className={isPosting ? classes.displayNone : 'FormsHeader'}>
        <List>
          <ListItem>
            <Grid className="FormMenuLogo"></Grid>
          </ListItem>
          <ListItem>
            <Button onClick={() => eventHandle('fourth')}>
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
          <ListItem>
            <a onClick={() => eventHandle('first')}
            // to="/documents/post-conditional-job-offer"
            >
              1
            </a>
          </ListItem>
          <ListItem>
            <a
              onClick={() => eventHandle('second')}
            // to="/documents/post-conditional-job-offer/2"
            >
              2
            </a>
          </ListItem>

          <ListItem>
            <a
              onClick={() => eventHandle('none')}
            // to="/documents/post-conditional-job-offer/3"
            >
              3
            </a>
          </ListItem>

          <ListItem className="Active">
            <a

            >
              4
            </a>
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
              </Table>
              <Table className="mt10">
                <TableRow className="border">
                  <TableCell className="w100 p10">
                    <Grid className="w100 textCenter">
                      Definition of Handicap/Disabled-Vietnam Era Veteran-Disabled Veteran
                    </Grid>
                    <b>A Handicapped/Disabled Individual:</b> is one who (1) has a physical or mental impairment which substantially limits one or more of such person’s major life activities; (2) has a record of such impairment or (3) is regarded as having such impairment.<br />
                    <b>Substantially Limits:</b> means the degree that the impairment affects employability. A handicapped/disabled individual who is likely to experience difficulty in securing, retaining or advancing in employment would be considered substantially limited.<br />
                    Life Activities may be considered to include communication, ambulation, self-care, socialization, education, vocational training, employment, transportation, adapting to housing, etc. For the purposes of Section 503 of the Act, primarily attention given to those life functions that affect employability.<br />
                    “Qualified Handicapped Individual” means a handicapped/disabled individual as defined in 60-7451.2 who is capable of performing a particular job with reasonable accommodation to his/her handicap.
                    <br /><br />
                    <b>Veterans of the Vietnam Era:</b> means a person (1) who (a) served on active military duty for a period of more than 180 days, any part of which occurred between August 5, 1964 and May 7, 1975 and was discharged or released there from with other than a dishonorable discharge or (b) was discharged or released from active duty because of a service connected disability if any part of such active service was performed between August 5, 1964 and May 7, 1975.
                    <br /><br />
                    <b>Special Disabled Veteran:</b> means (a) a veteran who is entitled to compensation under laws administered by the Veteran’s Administration for a disability rated at 30 percent or more or (b) a person who was discharged or released from active duty because of a service connected disability.
                    <br /><br />
                    <b>Other Protected Veteran:</b> a veteran who served on active duty in the U.S. military, ground, naval, or air service during a war or in a campaign or expedition for which a campaign badge has been authorized, under the laws administered by the Department of Defense.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt8">
                  <TableCell>
                    In accordance with Federal Regulations, an applicant for employment may identify himself/herself as being physically/mentally disabled, disabled veteran or a veteran of the Vietnam Era. This information is voluntary and will be kept confidential. If information is provided, it will only be used in accordance with applicable Federal regulations.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20">
                  <TableCell className="w100 bold">
                    Military Service:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt10">
                  <TableCell className="w40">
                    U.S. Armed Forces Disabled Veteran
                  </TableCell>
                  <TableCell className="w10 row">
<<<<<<< HEAD
                    <input type="radio" name="DisabledVeteran" id="disabledYes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="DisabledVeteran" id="disabledNo" className="w50 h16 bn bb" />
=======
                    <input type="radio" name="disabledVeteran" id="Yes" value="Yes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="disabledVeteran" id="No" value="No" className="w50 h16 bn bb" />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt10">
                  <TableCell className="w40">
                    U.S. Armed Forces Vietnam Era Veteran
                  </TableCell>
                  <TableCell className="w10 row">
<<<<<<< HEAD
                    <input type="radio" name="VietnamEraVeteran" id="vietnamYes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="VietnamEraVeteran" id="vietnamNo" className="w50 h16 bn bb" />
=======
                    <input type="radio" name="eraVeteran" id="Yes" value="Yes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="eraVeteran" id="No" value="No" className="w50 h16 bn bb" />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt10">
                  <TableCell className="w40">
                    U.S. Armed Other Protected Veteran
                  </TableCell>
                  <TableCell className="w10 row">
<<<<<<< HEAD
                    <input type="radio" name="ProtectedVeteran" id="protectedYes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="ProtectedVeteran" id="protectedNo" className="w50 h16 bn bb" />
=======
                    <input type="radio" name="protectedVeteran" id="Yes" value="Yes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="protectedVeteran" id="No" value="No" className="w50 h16 bn bb" />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                    No
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt20">
                  <TableCell className="w100 bold">
                    Physical:
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt10">
                  <TableCell className="w50">
                    (A) Do you have a physical/mental handicap/disability?
                  </TableCell>
                  <TableCell className="w10 row">
<<<<<<< HEAD
                    <input type="radio" name="handicap" id="handicapYes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="handicap" id="handicapNo" className="w50 h16 bn bb" />
=======
                    <input type="radio" name="disability" id="Yes" value="Yes" className="w50 h16 bn bb" />
                    Yes
                  </TableCell>
                  <TableCell className="w10 row">
                    <input type="radio" name="disability" id="No" value="No" className="w50 h16 bn bb" />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt10">
                  <TableCell className="w40">
                    (B) If yes, describe:
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <input type="text" name="textfield" id="comment" className="w100 h22 bn bb" />

                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt30">
                  <TableCell className="w50 pr10 row">
                    Signature:
                    <input type="text" name="textfield" id="signature" className="w h18 bn bb" />
                  </TableCell>
                  <TableCell className="w50 pl10 row">
                    Date:
                    <DatePicker
                      onChange={(value) => { setDate(value) }}
                      value={date}
                      id="offerDate"
                      className="datePickerReact"
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
export default PostConditionalJobOffer4;