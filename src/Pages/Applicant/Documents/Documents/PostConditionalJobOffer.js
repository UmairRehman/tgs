import React from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,List,ListItem
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

const PostConditionalJobOffer = () => {
  return (
    <Grid container xs={12} className="LiqForms-Container font11">
        <FormHeader/>
        <Grid className="FormPagi">
          <List>
            <ListItem className="Active">
              <Link to="/documents/post-conditional-job-offer">1</Link>
            </ListItem>
            <ListItem>
              <Link to="/documents/post-conditional-job-offer/2">2</Link>
            </ListItem>
            <ListItem>
              <Link to="/documents/post-conditional-job-offer/3">3</Link>
            </ListItem>
            <ListItem>
              <Link to="/documents/post-conditional-job-offer/4">4</Link>
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
                    <TableCell className="w100 textCenter">
                    POST CONDITIONAL JOB OFFER QUESTIONNAIRE<br/>
                    (To Be Completed By Applicant)
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="mt4">
                  <TableRow className="border">
                    <TableCell className="p4 font11">
                    Notice: Due to the requirements of federal law, this questionnaire is to be completed after a conditional job offer has been made. It is very important to answer all questions asked.<br/> 
NOTICE FOR EMPLOYEES WORKING IN LOUISIANA: Pursuant to Louisiana Law, failure to answer the following questions truthfully may result in your forfeiture of worker’s compensation benefits under R.S.23-1201-1.
                    </TableCell>
                  </TableRow>
                </Table>
                <Table>
                  <TableRow>
                    <TableCell className="row align-start pt6">
                      FOR:
                    </TableCell>
                    <TableCell>
                      <Table>
                        <TableRow>
                          <TableCell className="pb4">
                          <input type="text" name="textfield" id="textfield" className="w100 bn bb" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="w100 textCenter">(Name)</TableCell>
                        </TableRow>
                      </Table>
                    </TableCell>
                    <TableCell className="pl20 pr20">
                    <Table>
                        <TableRow>
                          <TableCell className="pb4">
                          <input type="text" name="textfield" id="textfield" className="w100 bn bb" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="w100 textCenter">(Social Security Number)</TableCell>
                        </TableRow>
                      </Table>
                    </TableCell>
                    <TableCell>
                    <Table>
                        <TableRow>
                          <TableCell className="pb4">
                          <input type="text" name="textfield" id="textfield" className="w100 bn bb" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="w100 textCenter">(Date of Birth)</TableCell>
                        </TableRow>
                      </Table>
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="w100 mt10 boldBBorder pb8">
                  <TableRow className="w100 row">
                    <TableCell className="w60">
                      <span className="font14 mr16">1.</span>Are you in perfect health?
                    </TableCell>
                    <TableCell className="w20"><input type="radio" name="Health" className="mr5"/> Yes</TableCell>
                    <TableCell className="w20"><input type="radio" name="Health" className="mr5"/> No</TableCell>
                  </TableRow>
                  <TableRow className="w100">
                    <TableCell className="w100 row nowarp justify-between">
                    <span className="font14 mr10"></span>If not, please explain:<input type="text" name="textfield" id="textfield" className="w78 bn bb" />
                    </TableCell>
                  </TableRow>
                </Table>
                {/* --**-- */}
                <Table className="w100 mt8 pb8">
                  <TableRow className="w100 row">
                    <TableCell className="w100">
                      <span className="font14 mr16">2.</span>2.	To the best of your knowledge, do you have any other problems with the following:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100">
                    <TableCell className="w100 row justify-center">
                      <Table className="w60">
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Eyes or Ears</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health1" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health1" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Breathing</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health2" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health2" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Allergies</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health3" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health3" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Back or Neck</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health4" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health4" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Feet, Legs, Arms, or Hands</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health5" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health5" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Knees</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health6" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health6" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Nervous/Mental Disorder</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health7" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health7" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Other</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health8" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health8" className="mr5"/> No</TableCell>
                        </TableRow>
                        <TableRow className="w100 row mt4">
                          <TableCell className="w60">Have you any disability, physical or mental, which would prevent you from performing specific kinds of work in the job(s) applied for?</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health10" className="mr5"/> Yes</TableCell>
                          <TableCell className="w20"><input type="radio" name="Health10" className="mr5"/> No</TableCell>
                        </TableRow>
                      </Table>
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt8">
                    <TableCell>
                    If yes, describe the handicap(s) and explain the work limitation(s) as it pertains to the job(s) applied for:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100">
                    <TableCell className="w100">
                    <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb" />
                    <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb mt4" />
                    </TableCell>
                  </TableRow>
                </Table>
                {/* --**-- */}
                <Table className="w100 mt4 pb8">
                  <TableRow className="w100 row">
                    <TableCell className="w60">
                      <span className="font14 mr16">3.</span>
                      3.	Have you ever been injured on the job?<br/>
                      <span className="font14 mr28"></span>If yes, please give details by completing a supplemental form.
                    </TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif1" className="mr5"/> Yes</TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif1" className="mr5"/> No</TableCell>
                  </TableRow>
                  <TableRow className="w100 row mt4">
                    <TableCell className="w60">
                      <span className="font14 mr16">4.</span>
                      Have you ever received worker’s compensation payments?<br/>
                      <span className="font14 mr28"></span>If yes, please give details by completing a supplemental form.
                    </TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif2" className="mr5"/> Yes</TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif2" className="mr5"/> No</TableCell>
                  </TableRow>
                  <TableRow className="w100 row mt4">
                    <TableCell className="w100">
                      <span className="font14 mr16">5.</span>
                      Does any previous injury or natural physical impairment cause you to have limitation on types of physical activities
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row">
                    <TableCell className="w100">
                      <span className="font14 mr28"></span>that you may perform in your employment?
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row">
                    <TableCell className="w60">
                      <span className="font14 mr28"></span>(Example: Back problems – No heavy lifting.)
                    </TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif3" className="mr5"/> Yes</TableCell>
                    <TableCell className="w20"><input type="radio" name="Healthif3" className="mr5"/> No</TableCell>
                  </TableRow>
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb" />
                    <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb mt6" />
                    </TableCell>
                  </TableRow>
                </Table>
                {/* --**-- */}
                <Table className="w100 mt4 pb8">
                  <TableRow className="w100 row">
                    <TableCell className="w100">
                    ACKNOWLEDGEMENT
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt4 row">
                    <TableCell className="w100">
                    I acknowledge that I have been conditionally offered a job and that the job offer is subject to satisfactory results of a drug screen and reference checks of my background and driving record. I understand that the results must be received prior to commencement of work and that the job offer will be withdrawn if the results are not satisfactory.  I further understand and agree that any misrepresentation by me in this questionnaire will be sufficient cause for cancellation of the entire application and/or separation from TGS’s service if I have been employed.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt4 row">
                    <TableCell className="w50 pr30">
                      <TableRow className="w100">
                        <TableCell className="w100">
                        <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb" />
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100">
                        <TableCell className="w100 textCenter">(Signed)</TableCell>
                      </TableRow>
                    </TableCell>
                    <TableCell className="w50 pl30">
                    <TableRow className="w100">
                        <TableCell className="w100">
                        <input type="text" name="textfield" id="textfield" maxLength="90" className="w100 bn bb" />
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
              Trans-Global Solutions, Inc.<br/>
  1735 W. Cardinal Dr., Beaumont, Texas 77705<br/>
  Phone (409) 720-5413 – Fax (409) 729-7041
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
    </Grid>
  );
  
}
export default PostConditionalJobOffer;