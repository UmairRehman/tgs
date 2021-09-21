import React from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,List,ListItem
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

const TWICCardPaymentAgreement = () => {
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
                    TWIC Card Payment Agreement
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="mt10">
                  {/* --**-- */}
                  <TableRow className="w100 mt10">
                    <TableCell className="w100 row">
                    Hire Date:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w100 row">
                    Employee Name:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w100 row">
                    Social Security #:
                    <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
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
                    <input type="text" name="textfield" id="textfield" className="w100 h18 pl8 bn bb mb10" />
                    Employee Signature
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w30">
                    <input type="text" name="textfield" id="textfield" className="w100 h18 pl8 bn bb mb10" />
                    Company Representative
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 mb20">
                    <TableCell className="w30">
                    <input type="text" name="textfield" id="textfield" className="w100 h18 pl8 bn bb mb10" />
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
export default TWICCardPaymentAgreement;