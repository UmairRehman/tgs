import React from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";

const DirectDeposit = () => {
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
                    {/* <Avatar alt="TGS" className="TGSLogoSVG" src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg" /> */}
                    <Avatar alt="TGS" className="TGSLogoSVG" src="http://localhost/TGS_Logo2.svg" />
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
                          Employee Name: <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                          <TableCell className="w100 mt16 row">
                          Address:
                          <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                          <TableCell className="w100 mt16 row">
                          <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                          <TableCell className="w100 mt16 row">
                          Social Security#: <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" />
                          </TableCell>
                        </TableRow>
                      </TableCell>
                      <TableCell className="w20 pl30 row align-center">
                        <TableRow>
                          <TableCell>
                            <TableRow className="w20">
                              <TableCell className="w100 row">
                              <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" /> New
                              </TableCell>
                            </TableRow>
                            <TableRow className="w20 mt16">
                              <TableCell className="w100 row">
                              <input type="text" name="textfield" id="textfield" className="w h18 pl8 bn bb" /> Chnage
                              </TableCell>
                            </TableRow>
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
                    ACCT. TYPE<br/>(C or S)
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    </TableCell>
                    <TableCell className="w textCenter pl10 pr10">
                    ROUTING NUMBER<br/>( Should be 9 Digits)
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    </TableCell>
                    <TableCell className="w textCenter pl10 pr10">
                    ACCOUNT NUMBER<br/><br/>
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    </TableCell>
                    <TableCell className="w textCenter pl10 pr10">
                    FINANCIAL INSTITUTION
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    </TableCell>
                    <TableCell className="w textCenter pl10">
                    AMOUNT<br/>(or Balance)
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
                    <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6" />
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
                        <b>Amount=</b> Specified Amount<br/>
                        <b>Balance=</b> Net amount of check (One bank account must be Balance)
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row mt30 mb30">
                    <TableCell className="w40 pr30">
                      <TableRow className="w100">
                        <TableCell className="w100">
                        <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6 mb6" />
                        Employee Signature
                        </TableCell>
                      </TableRow>
                      <TableRow className="w100 mt30">
                        <TableCell className="w100">
                        <input type="text" name="textfield" id="textfield" className="w100 h18 bn bb mt6 mb6" />
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
export default DirectDeposit;