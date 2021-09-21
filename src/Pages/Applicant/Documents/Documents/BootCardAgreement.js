import React from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,List,ListItem
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

const BootCardAgreement = () => {
  return (
    <Grid container xs={12} className="LiqForms-Container">
        <FormHeader/>
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
                    Boot Cost Payment Agreement
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="mt10">
                  {/* --**-- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w50 row pr10">
                    NAME:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    SOCIAL SECURITY NO.:
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
                    <TableCell className="w4">6.</TableCell>
                    <TableCell className="w50 row pr10">
                      Date of Injury:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    Type of Injury:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">7.</TableCell>
                    <TableCell className="w100 row pr10">
                    Doctors Who Treated the Injury:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Name)
                    </TableCell>
                    <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Address)
                    </TableCell>
                    <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Phone)
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Name)
                    </TableCell>
                    <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Address)
                    </TableCell>
                    <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Phone)
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">8.</TableCell>
                    <TableCell className="w100 row pr10">
                    Where Did the Injury Occur?
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Name)
                    </TableCell>
                    <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Address)
                    </TableCell>
                    <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Phone)
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">9.</TableCell>
                    <TableCell className="w100 row pr10">
                    How Did the Injury Happen?
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w100">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb mt8" />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">10.</TableCell>
                    <TableCell className="w100 row pr10">
                    Was Worker’s Compensation Payment Made For:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 pl30 row">
                    <TableCell className="w4">a.</TableCell>
                    <TableCell className="w26">
                      Medical Bills
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="mb" className="mr6 mt2"/>
                      Yes
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="mb" className="mr6 mt2"/>
                      No
                    </TableCell>
                    <TableCell className="w row">
                      How Much?
                      <input type="text" name="textfield" id="textfield" className="w bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 pl30 row">
                    <TableCell className="w4">b.</TableCell>
                    <TableCell className="w26">
                      Time off/Pay
                    </TableCell>
                    <TableCell className="w row pr20">
                      How Long?
                      <input type="text" name="textfield" id="textfield" className="w bn bb" />
                    </TableCell>
                    <TableCell className="w row">
                      How Much?
                      <input type="text" name="textfield" id="textfield" className="w bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 pl30 row">
                    <TableCell className="w4">c.</TableCell>
                    <TableCell className="w26">
                      Attorney’s Fees
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="at" className="mr6 mt2"/>
                      Yes
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="at" className="mr6 mt2"/>
                      No
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 pl30 row">
                    <TableCell className="w4">d.</TableCell>
                    <TableCell className="w26">
                      Settlement
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="st" className="mr6 mt2"/>
                      Yes
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="st" className="mr6 mt2"/>
                      No
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">11.</TableCell>
                    <TableCell className="w100 row">
                     Date Released By Doctor To Go Back To Work:
                     <input type="text" name="textfield" id="textfield" className="w bn bb" />
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">12.</TableCell>
                    <TableCell className="w40 row pr10">
                    Any Limitations of Work To Be Done?
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="mb" className="mr6 mt2"/>
                      Yes
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="mb" className="mr6 mt2"/>
                      No
                    </TableCell>
                    <TableCell className="w row">
                    If yes, describe on the back of this form.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4"></TableCell>
                    <TableCell className="w30 pr20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Doctor’s Name)
                    </TableCell>
                    <TableCell className="w40 pr10 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Address)
                    </TableCell>
                    <TableCell className="w30 pl20 textCenter">
                    <input type="text" name="textfield" id="textfield" className="w100 bn bb textCenter mb5" />
                    (Phone)
                    </TableCell>
                  </TableRow>
                  {/* --**-- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w4">13.</TableCell>
                    <TableCell className="w60">
                    Do You Allow Us Access To Your Confidential Medical Information?
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="dyau" className="mr6 mt2"/>
                      Yes
                    </TableCell>
                    <TableCell className="w10 row">
                      <input type="radio" name="dyau" className="mr6 mt2"/>
                      No
                    </TableCell>
                  </TableRow>
                  {/* --**-- */}
                  <TableRow className="w100 mt50 row">
                    <TableCell className="w50 row pr10">
                      YOUR SIGNATURE:
                      <input type="text" name="textfield" id="textfield" className="w bn bb textCenter mb5" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                      DATE:
                      <input type="text" name="textfield" id="textfield" className="w bn bb textCenter mb5" />
                    </TableCell>
                  </TableRow>
                </Table>
                {/* --**-- */}
                
                
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
export default BootCardAgreement;