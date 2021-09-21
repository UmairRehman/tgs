import React from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,List,ListItem
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

const PostConditionalJobOffer3 = () => {
  return (
    <Grid container xs={12} className="LiqForms-Container">
        <FormHeader/>
        <Grid className="FormPagi">
          <List>
            <ListItem className="ActiveComplete">
              <Link to="/documents/post-conditional-job-offer">1</Link>
            </ListItem>
            <ListItem className="ActiveComplete">
              <Link to="/documents/post-conditional-job-offer/2">2</Link>
            </ListItem>
            <ListItem className="Active">
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
                    <b>Invitation to Self-Identity for Affirmative Action Reporting Requirements</b><br/>
                    CONFIDENTIAL INFORMATION
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="mt10">
                  <TableRow>
                    <TableCell className="font11">
                    TGS is committed to taking affirmative action to employ and advance qualified women and minorities, as well as disabled veterans of the Vietnam Era and qualified handicapped individuals. If you would like to be considered under the affirmative action program, please tell us. You may inform us of your desire to benefit under the program at this time and/or at any time in the future. This information is voluntary and refusal to provide it will not subject you to any disciplinary action. Information obtained concerning individuals shall be kept confidential, except that: supervisors, managers and safety personnel may be informed regarding restriction on work or duties. 
                    </TableCell>
                  </TableRow>
                  <TableRow className="border w100 mt10">
                    <TableCell className="p10">
                    Applicants are considered for all positions available and employees are treated during employment without regard to race, color, gender, national origin, age, marital status, veteran status, medical condition, handicap/disability, or any other legally protected status.<br/> 
This data is for periodic government reporting and will be kept in a <b><i>Confidential File</i></b> separate from the Application for Employment. <b>YOUR COOPERATION IS APPRECIATED</b>.
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
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    Date:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w100 row">
                    Address:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w50 row pr10">
                    Job Title:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    Date of Birth:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt8">
                    <TableCell>
                    Government agencies require periodic reports on the gender, ethnicity, handicapped/disabled, veteran and other protected status applicants and employees. This data is for analysis and possible affirmative action only. Submission of information is voluntary. 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt20 row">
                    <TableCell className="w32">
                      <TableRow className="w100">
                        <TableCell className="w100 bold underLine">GENDER</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                          Male
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                          Female
                        </TableCell>
                      </TableRow>
                    </TableCell>
                    {/* -------- */}
                    <TableCell className="w36">
                    <TableRow className="w100">
                        <TableCell className="w100 bold underLine">RACE</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Caucasian
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        African American
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Native Hawaiian/Pacific Islander
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        American Indian/Alaskan Native
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Hispanic or Latino
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Asian
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Two or More Races
                        </TableCell>
                      </TableRow>
                    </TableCell>
                    {/* --------- */}
                    <TableCell className="w32">
                      <TableRow className="w100">
                        <TableCell className="w100 bold underLine">REFERRAL SOURCE</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Employee Referral
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Advertisement
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Friend
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Relative
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Walk-In
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        Employment Agency
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="textfield" className="w14 h14 mr4 bn bb" />
                        College Recruitment
                        </TableCell>
                        <TableCell className="w100 row mt16">
                        Other:
                        <input type="text" name="textfield" id="textfield" className="w h14 mr4 bn bb" />
                        </TableCell>
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
export default PostConditionalJobOffer3;