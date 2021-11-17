import React, { useState } from "react";
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
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import DatePicker from "react-date-picker";
import SaveIcon from "@material-ui/icons/Save";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import CancelIcon from "@material-ui/icons/Cancel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas";
import { showSnackBar } from "../../../../helpers/showSnackBar";

/** Local dependencies and Libraries */

import Services from "../../../../Services";

import { Imports } from "../../../../Imports";

const { users } = Services;

const {
  styles: { displayNoneStyles: useStyles },
} = Imports;

const PostConditionalJobOffer = () => {
  let history = useHistory();

  const classes = useStyles();

  const CloseTab = () => {
    window.close();
  };
  const PrintOut = () => {
    window.print();
  };

  const [isPosting, setPosting] = useState(false);

  const [date, setDate] = useState(new Date());

  const [error, setError] = useState("");

  const [stage, setStage] = useState("first");

  const [submitDate, setSubmitDate] = useState(new Date());

  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  const [PDFImage, setPDFImage] = useState("");

  async function submit() {
    try {
      setPosting(true);

      let canvas = await html2canvas(document.querySelector("#capture"));
      let image = canvas.toDataURL("image/png");
      // setPDFImage(image)

      let data = {
        name: document.getElementById("name").value,
        securityNumber: document.getElementById("securityNumber").value,
        dateOfBirth: dateOfBirth,
        health:
          (document.querySelector('input[name="Health"]:checked')?.value == "yes")
            ? document.querySelector('input[name="Health"]:checked')?.value
            : document.getElementById("comment").value,
        eye: document.querySelector('input[name="eye"]:checked')?.value,
        breathing: document.querySelector('input[name="breathing"]:checked')?.value,
        allergies: document.querySelector('input[name="allergies"]:checked')?.value,
        backNeck : document.querySelector('input[name="backNeck"]:checked')?.value,
        feet: document.querySelector('input[name="feet"]:checked')?.value,
        knees: document.querySelector('input[name="knees"]:checked')?.value,
        mental: document.querySelector('input[name="mental"]:checked')?.value,
        other: document.querySelector('input[name="other"]:checked')?.value,
        disability:
          document.querySelector('input[name="disability"]:checked')?.value =="no"
            ? document.querySelector('input[name="disability"]:checked')?.value
            : document.getElementById("healthComment").value,
        injured: document.querySelector('input[name="injured"]:checked')?.value,
        compensation: document.querySelector('input[name="compensation"]:checked')?.value,
        natural: (document.querySelector('input[name="natural"]:checked')?.value=="no")
            ? document.querySelector('input[name="natural"]:checked')?.value
            : document.getElementById("comment3").value,
        signature: document.getElementById("signature").value,
        submitDate: submitDate,
        image,
      };
      console.log("dara", data);

      const nullCheck = Object.values(data).reduce(
        (total, accumulator) => total || !accumulator,
        false
      );

      if (!nullCheck) {
        console.log(data);
        //  save in local storage for submit

        localStorage.setItem('firstFormDataImage', image);
        localStorage.setItem('firstFormData', JSON.stringify(data));

        setPosting(false);

        return history.push({
          pathname: "/documents/post-conditional-job-offer/2",
        });
      }

      setPosting(false);
      setError("field must be filed");
      alert("Kindly fill in all the fields");
    } catch (exc) {
      setPosting(false);

      console.log(exc);
    }
  }

  async function eventHandle(value) {
    if (value == "second") return submit();

    alert("Please go step by step");
  }

  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container font11">
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
          <ListItem className="Active">
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

          <ListItem>
            <a
              onClick={() => eventHandle("third")}
              // to="/documents/post-conditional-job-offer/3"
            >
              3
            </a>
          </ListItem>

          <ListItem>
            <a onClick={() => eventHandle("fourth")}>4</a>
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
                    POST CONDITIONAL JOB OFFER QUESTIONNAIRE
                    <br />
                    (To Be Completed By Applicant)
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="mt4">
                <TableRow className="border">
                  <TableCell className="p4 font11">
                    Notice: Due to the requirements of federal law, this
                    questionnaire is to be completed after a conditional job
                    offer has been made. It is very important to answer all
                    questions asked.
                    <br />
                    NOTICE FOR EMPLOYEES WORKING IN LOUISIANA: Pursuant to
                    Louisiana Law, failure to answer the following questions
                    truthfully may result in your forfeiture of worker’s
                    compensation benefits under R.S.23-1201-1.
                  </TableCell>
                </TableRow>
              </Table>
              <Table>
                <TableRow>
                  <TableCell className="row align-start pt6">FOR:</TableCell>
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className="pb4">
                          <input
                            type="text"
                            name="textfield"
                            id="name"
                            className="w100 bn bb"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w100 textCenter">
                          (Name)
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell className="pl20 pr20">
                    <Table>
                      <TableRow>
                        <TableCell className="pb4">
                          <input
                            type="text"
                            name="textfield"
                            id="securityNumber"
                            className="w100 bn bb"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w100 textCenter">
                          (Social Security Number)
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className="pb4">
                          <DatePicker
                            onChange={(value) => {
                              setDateOfBirth(value);
                            }}
                            value={dateOfBirth}
                            id="offerDate"
                            className="datePickerReact PosRIght"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w100 textCenter">
                          (Date of Birth)
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                </TableRow>
              </Table>
              <Table className="w100 mt10 boldBBorder pb8">
                <TableRow className="w100 row">
                  <TableCell className="w60">
                    <span className="font14 mr16">1.</span>Are you in perfect
                    health?
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="yes"
                      value="yes"
                      name="Health"
                      className="mr5"
                    />{" "}
                    Yes
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="no"
                      value="no"
                      name="Health"
                      className="mr5"
                    />{" "}
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 row nowarp justify-between">
                    <span className="font14 mr10"></span>If not, please explain:
                    <input
                      name="comment"
                      type="text"
                      name="textfield"
                      id="comment"
                      className="w78 bn bb"
                    />
                  </TableCell>
                </TableRow>
              </Table>
              {/* --**-- */}
              <Table className="w100 mt8 pb8">
                <TableRow className="w100 row">
                  <TableCell className="w100">
                    <span className="font14 mr16">2.</span>2. To the best of
                    your knowledge, do you have any other problems with the
                    following:
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100 row justify-center">
                    <Table className="w60">
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Eyes or Ears</TableCell>
                        <TableCell className="w20">
                          <input
                            id="eye"
                            value="yes"
                            type="radio"
                            name="eye"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            id="eye"
                            value="no"
                            type="radio"
                            name="eye"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Breathing</TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="breathing"
                            value="yes"
                            name="breathing"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="breathing"
                            name="breathing"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Allergies</TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="allergies"
                            value="yes"
                            name="allergies"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="allergies"
                            value="no"
                            name="allergies"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Back or Neck</TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="back"
                            value="yes"
                            name="backNeck"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="back"
                            value="no"
                            name="backNeck"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">
                          Feet, Legs, Arms, or Hands
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="feet"
                            value="yes"
                            name="feet"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="feet"
                            value="no"
                            name="feet"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Knees</TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="knees"
                            value="yes"
                            name="knees"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="knees"
                            value="no"
                            name="knees"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">
                          Nervous/Mental Disorder
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="mental"
                            value="yes"
                            name="mental"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="mental"
                            value="no"
                            name="mental"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">Other</TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="other"
                            value="yes"
                            name="other"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="other"
                            value="no"
                            name="other"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 row mt4">
                        <TableCell className="w60">
                          Have you any disability, physical or mental, which
                          would prevent you from performing specific kinds of
                          work in the job(s) applied for?
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="disability"
                            value="yes"
                            name="disability"
                            className="mr5"
                          />{" "}
                          Yes
                        </TableCell>
                        <TableCell className="w20">
                          <input
                            type="radio"
                            id="disability"
                            value="no"
                            name="disability"
                            className="mr5"
                          />{" "}
                          No
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt8">
                  <TableCell>
                    If yes, describe the handicap(s) and explain the work
                    limitation(s) as it pertains to the job(s) applied for:
                  </TableCell>
                </TableRow>
                <TableRow className="w100">
                  <TableCell className="w100">
                    <input
                      type="text"
                      name="textfield"
                      id="healthComment"
                      maxLength="90"
                      className="w100 bn bb"
                    />
                  </TableCell>
                </TableRow>
              </Table>
              {/* --**-- */}
              <Table className="w100 mt4 pb8">
                <TableRow className="w100 row">
                  <TableCell className="w60">
                    <span className="font14 mr16">3.</span>
                    3. Have you ever been injured on the job?
                    <br />
                    <span className="font14 mr28"></span>If yes, please give
                    details by completing a supplemental form.
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="injured"
                      value="yes"
                      name="injured"
                      className="mr5"
                    />{" "}
                    Yes
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="injured"
                      value="no"
                      name="injured"
                      className="mr5"
                    />{" "}
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt4">
                  <TableCell className="w60">
                    <span className="font14 mr16">4.</span>
                    Have you ever received worker’s compensation payments?
                    <br />
                    <span className="font14 mr28"></span>If yes, please give
                    details by completing a supplemental form.
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="compensation "
                      value="yes"
                      name="compensation"
                      className="mr5"
                    />{" "}
                    Yes
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="compensation "
                      value="no"
                      name="compensation"
                      className="mr5"
                    />{" "}
                    No
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row mt4">
                  <TableCell className="w100">
                    <span className="font14 mr16">5.</span>
                    Does any previous injury or natural physical impairment
                    cause you to have limitation on types of physical activities
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row">
                  <TableCell className="w100">
                    <span className="font14 mr28"></span>that you may perform in
                    your employment?
                  </TableCell>
                </TableRow>
                <TableRow className="w100 row">
                  <TableCell className="w60">
                    <span className="font14 mr28"></span>(Example: Back problems
                    – No heavy lifting.)
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="natural "
                      value="yes"
                      name="natural"
                      className="mr5"
                    />{" "}
                    Yes
                  </TableCell>
                  <TableCell className="w20">
                    <input
                      type="radio"
                      id="natural "
                      value="no"
                      name="natural"
                      className="mr5"
                    />{" "}
                    No
                  </TableCell>
                </TableRow>
                <TableCell>If yes, describe and explain:</TableCell>
                <TableRow className="w100 mt6">
                  <TableCell className="w100">
                    <input
                      type="text"
                      name="textfield"
                      id="comment3"
                      maxLength="90"
                      className="w100 bn bb"
                    />
                  </TableCell>
                </TableRow>
              </Table>
              {/* --**-- */}
              <Table className="w100 mt4 pb8">
                <TableRow className="w100 row">
                  <TableCell className="w100">ACKNOWLEDGEMENT</TableCell>
                </TableRow>
                <TableRow className="w100 mt4 row">
                  <TableCell className="w100">
                    I acknowledge that I have been conditionally offered a job
                    and that the job offer is subject to satisfactory results of
                    a drug screen and reference checks of my background and
                    driving record. I understand that the results must be
                    received prior to commencement of work and that the job
                    offer will be withdrawn if the results are not satisfactory.
                    I further understand and agree that any misrepresentation by
                    me in this questionnaire will be sufficient cause for
                    cancellation of the entire application and/or separation
                    from TGS’s service if I have been employed.
                  </TableCell>
                </TableRow>
                <TableRow className="w100 mt4 row">
                  <TableCell className="w50 pr30">
                    <TableRow className="w100">
                      <TableCell className="w100">
                        <input
                          type="text"
                          name="textfield"
                          id="signature"
                          maxLength="90"
                          className="w100 bn bb"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100">
                      <TableCell className="w100 textCenter">
                        (Signed)
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  <TableCell className="w50 pl30">
                    <TableRow className="w100">
                      <TableCell className="w100">
                        <DatePicker
                          onChange={(value) => {
                            setSubmitDate(value);
                          }}
                          value={submitDate}
                          id="offerDate"
                          className="datePickerReact"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow className="w100">
                      <TableCell className="w100 textCenter">(Date)</TableCell>
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
export default PostConditionalJobOffer;
