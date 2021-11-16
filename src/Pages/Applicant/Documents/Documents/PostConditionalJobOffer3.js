import React, { useState , useEffect } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { 
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@mui/material';

import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import { useHistory } from "react-router-dom";
import DatePicker from "react-date-picker";
import SaveIcon from "@material-ui/icons/Save";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import CancelIcon from "@material-ui/icons/Cancel";
import html2canvas from "html2canvas";

/** Local dependencies & Libraries */
import Services from "../../../../Services";

import { Imports } from "../../../../Imports";

const { users } = Services;

const {
  styles: { displayNoneStyles: useStyles },
} = Imports;

const PostConditionalJobOffer3 = () => {
  const classes = useStyles();

  let history = useHistory();

  const [isPosting, setPosting] = useState(false);

  const [error, setError] = useState("");

  const CloseTab = () => {
    window.close();
  };
  const PrintOut = () => {
    window.print();
  };

  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState("male");

  useEffect(() => {
    document.querySelector('input[name="gender"]').value="male"
    // document.race.value="africanAmerican"

  }, [])

  async function submit() {
    setPosting(true);

    let canvas = await html2canvas(document.querySelector("#capture"));
    let image = canvas.toDataURL("image/png");

    let data = {
      name: document.getElementById("name").value,
      date: date,
      address: document.getElementById("address").value,
      jobDetail: document.getElementById("jobDetail").value,
      dateOfBirth: dob,
      gender: document.querySelector('input[name="gender"]:checked')?.value,
      race: document.querySelector('input[name="race"]:checked')?.value,
      referral: (document.querySelector('input[name="referral"]:checked')?.value!='other')?document.querySelector('input[name="referral"]:checked')?.value:document.getElementById('otherText')?.value,
      image: image,
    };
    console.log(data);
    const nullCheck = Object.values(data).reduce(
      (total, accumulator) => total || !accumulator,
      false
    );

    setPosting(false);

    if (nullCheck == false) {
      console.log(data);
      //  save in local storage for submit
      localStorage.setItem("thirdFormDataImage", image);
      localStorage.setItem("thirdFormData", JSON.stringify(data));
      history.push({
        pathname: "/documents/post-conditional-job-offer/4",
      });
    } else {
      setError("field must be filed");
      alert("Kindly fill in all the fields");
    }
  }

  async function eventHandle(value) {
    if (value == "third") {
      submit();
    } else {
      alert("Please go step by step");
    }
  }

  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
      <Grid className={isPosting ? classes.displayNone : "FormsHeader"}>
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
          <ListItem>
            <a
              onClick={() => eventHandle("first")}
              // to="/documents/post-conditional-job-offer"
            >
              1
            </a>
          </ListItem>
          <ListItem>
            <a
              onClick={() => eventHandle("second")}
              // to="/documents/post-conditional-job-offer/2"
            >
              2
            </a>
          </ListItem>

          <ListItem className="Active">
            <a
              onClick={() => eventHandle("none")}
              // to="/documents/post-conditional-job-offer/3"
            >
              3
            </a>
          </ListItem>

          <ListItem>
            <a onClick={() => eventHandle("third")}>4</a>
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
                    <Avatar
                      alt="TGS"
                      className="TGSLogoSVG"
                      src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 textCenter">
                    <b>
                      Invitation to Self-Identity for Affirmative Action
                      Reporting Requirements
                    </b>
                    <br />
                    CONFIDENTIAL INFORMATION
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="mt10">
                <TableRow>
                  <TableCell className="font11">
                    TGS is committed to taking affirmative action to employ and
                    advance qualified women and minorities, as well as disabled
                    veterans of the Vietnam Era and qualified handicapped
                    individuals. If you would like to be considered under the
                    affirmative action program, please tell us. You may inform
                    us of your desire to benefit under the program at this time
                    and/or at any time in the future. This information is
                    voluntary and refusal to provide it will not subject you to
                    any disciplinary action. Information obtained concerning
                    individuals shall be kept confidential, except that:
                    supervisors, managers and safety personnel may be informed
                    regarding restriction on work or duties.
                  </TableCell>
                </TableRow>
                <TableRow className="border w100 mt10">
                  <TableCell className="p10">
                    Applicants are considered for all positions available and
                    employees are treated during employment without regard to
                    race, color, gender, national origin, age, marital status,
                    veteran status, medical condition, handicap/disability, or
                    any other legally protected status.
                    <br />
                    This data is for periodic government reporting and will be
                    kept in a{" "}
                    <b>
                      <i>Confidential File</i>
                    </b>{" "}
                    separate from the Application for Employment.{" "}
                    <b>YOUR COOPERATION IS APPRECIATED</b>.
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt10">
                  <TableCell className="w100 textCenter bold">
                    (Please Print)
                  </TableCell>
                </TableRow>
                {/* --**-- */}
                <TableRow className="w100 mt10 row">
                  <TableCell className="w50 row pr10">
                    Name:
                    <input
                      type="text"
                      name="textfield"
                      id="name"
                      className="w h18 pl8 bn bb"
                    />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    Date:
                    <DatePicker
                      onChange={(value) => {
                        setDate(value);
                      }}
                      value={date}
                      id="offerDate"
                      className="datePickerReact"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w100 row">
                    Address:
                    <input
                      type="text"
                      name="textfield"
                      id="address"
                      className="w h18 pl8 bn bb"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt10 row">
                  <TableCell className="w50 row pr10">
                    Job Title:
                    <input
                      type="text"
                      name="textfield"
                      id="jobDetail"
                      className="w h18 pl8 bn bb"
                    />
                  </TableCell>
                  <TableCell className="w50 row pl10">
                    Date of Birth:
                    <DatePicker
                      onChange={(value) => {
                        setDob(value);
                      }}
                      value={dob}
                      id="offerDate"
                      className="datePickerReact"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt8">
                  <TableCell>
                    Government agencies require periodic reports on the gender,
                    ethnicity, handicapped/disabled, veteran and other protected
                    status applicants and employees. This data is for analysis
                    and possible affirmative action only. Submission of
                    information is voluntary.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt20 row">
                  <TableCell className="w32">
                    <TableRow className="w100">
                      <TableCell className="w100 bold underLine">
                        GENDER
                      </TableCell>
                      <TableCell className="w100 row mt8">
<<<<<<< HEAD
                        <input type="radio" name="gender" id="male" className="w10 h14 mr4 bn bb" />
                        Male
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="gender" id="female" className="w10 h14 mr4 bn bb" />
=======
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          className="w10 h14 mr4 bn bb"
                        />
                        Male
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          id="female"
                          className="w10 h14 mr4 bn bb"
                        />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                        Female
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  {/* -------- */}
                  <TableCell className="w36">
                    <TableRow className="w100">
                      <TableCell className="w100 bold underLine">
                        RACE
                      </TableCell>
                      <TableCell className="w100 row mt8">
<<<<<<< HEAD
                        <input type="radio" name="race" id="caucasian" className="w10 h14 mr4 bn bb" />
                        Caucasian
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="africanAmerican" className="w10 h14 mr4 bn bb" />
                        African American
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="vative " className="w10 h14 mr4 bn bb" />
                        Native Hawaiian/Pacific Islander
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="american" className="w10 h14 mr4 bn bb" />
                        American Indian/Alaskan Native
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="hispanic" className="w10 h14 mr4 bn bb" />
                        Hispanic or Latino
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="asian" className="w10 h14 mr4 bn bb" />
                        Asian
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="race" id="reces" className="w10 h14 mr4 bn bb" />
=======
                        <input
                          type="radio"
                          name="race"
                          value="caucasian"
                          id="caucasian"
                          className="w10 h14 mr4 bn bb"
                        />
                        Caucasian
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="africanAmerican"
                          id="africanAmerican"
                          className="w10 h14 mr4 bn bb"
                        />
                        African American
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="vative"
                          id="vative"
                          className="w10 h14 mr4 bn bb"
                        />
                        Native Hawaiian/Pacific Islander
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="american"
                          id="american"
                          className="w10 h14 mr4 bn bb"
                        />
                        American Indian/Alaskan Native
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="hispanic"
                          id="hispanic"
                          className="w10 h14 mr4 bn bb"
                        />
                        Hispanic or Latino
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="asian"
                          id="asian"
                          className="w10 h14 mr4 bn bb"
                        />
                        Asian
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="race"
                          value="reces"
                          id="reces"
                          className="w10 h14 mr4 bn bb"
                        />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                        Two or More Races
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  {/* --------- */}
                  <TableCell className="w32">
                    <TableRow className="w100">
                      <TableCell className="w100 bold underLine">
                        REFERRAL SOURCE
                      </TableCell>
                      <TableCell className="w100 row mt8">
<<<<<<< HEAD
                        <input type="radio" name="referral" id="referral" className="w10 h14 mr4 bn bb" />
                        Employee Referral
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="advertisement" className="w10 h14 mr4 bn bb" />
                        Advertisement
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="friend" className="w10 h14 mr4 bn bb" />
                        Friend
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="relative" className="w10 h14 mr4 bn bb" />
                        Relative
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="walkin" className="w10 h14 mr4 bn bb" />
                        Walk-In
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="agency" className="w10 h14 mr4 bn bb" />
                        Employment Agency
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="recruitment" className="w10 h14 mr4 bn bb" />
                        College Recruitment
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input type="radio" name="referral" id="recruitment" className="w10 h14 mr4 bn bb" />
                        Other:
                        <input type="text" name="referral" id="other" className="w68 bn bb" />
=======
                        <input
                          type="radio"
                          name="referral"
                          value="referral"
                          id="referral"
                          className="w10 h14 mr4 bn bb"
                        />
                        Employee Referral
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="advertisement"
                          id="advertisement"
                          className="w10 h14 mr4 bn bb"
                        />
                        Advertisement
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="friend"
                          id="friend"
                          className="w10 h14 mr4 bn bb"
                        />
                        Friend
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="relative"
                          id="relative"
                          className="w10 h14 mr4 bn bb"
                        />
                        Relative
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="walkin"
                          id="walkin"
                          className="w10 h14 mr4 bn bb"
                        />
                        Walk-In
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="agency"
                          id="agency"
                          className="w10 h14 mr4 bn bb"
                        />
                        Employment Agency
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="recruitment"
                          id="recruitment"
                          className="w10 h14 mr4 bn bb"
                        />
                        College Recruitment
                      </TableCell>
                      <TableCell className="w100 row mt8">
                        <input
                          type="radio"
                          name="referral"
                          value="other"
                          id="other"
                          className="w10 h14 mr4 bn bb"
                        />
                        Other:
                        <input
                          type="text"
                          name="referral"
                          id="otherText"
                          className="w68 bn bb"
                        />
>>>>>>> 64573da2abfb5c279e3600d03ad8c5be093606c9
                      </TableCell>
                    </TableRow>
                  </TableCell>
                </TableRow>
              </Table>
            </TableCell>
          </TableRow>
          <TableRow className="w100 mt20">
            <TableCell className="w100 textCenter">
              Trans-Global Solutions, Inc.
              <br />
              1735 W. Cardinal Dr., Beaumont, Texas 77705
              <br />
              Phone (409) 720-5413 – Fax (409) 729-7041
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Grid>
  );
};
export default PostConditionalJobOffer3;
