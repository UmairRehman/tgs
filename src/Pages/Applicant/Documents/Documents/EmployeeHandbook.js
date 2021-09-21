import React,{useEffect} from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,Button
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import Acknowledge from "../../../../Components/Acknowledge";
// import { Alert } from "@material-ui/lab";
// import { TabletView } from "react-device-detect";


const EmployeeHandbook = () => {
  return (
    <Grid container xs={12} className="LiqForms-Container">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow>
              <TableCell>
                <Table className="w100">
                  <TableRow className="w100 mt10 row justify-center">
                    <TableCell>
                    <Avatar alt="TGS" className="TGSLogoSVGBook" src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100">
                    <TableCell className="w100 textCenter">
                      And Subsidiary Companies
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100" style={{marginTop:'200px'}}>
                    <TableCell className="w100 mt30 pt30 header textCenter UnderLine bold font20">
                    FIELD PAYROLL EMPLOYEES
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100">
                    <TableCell className="w100 header textCenter UnderLine bold font26">
                    EMPLOYEE HANDBOOK
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 textCenter">
                        Revised 2/1/2015
                    </TableCell>
                  </TableRow>
                </Table>

              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>

{/* ----------- Page 2 ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
          <TableRow className="w100 pl30 pr30">
            <TableCell className="w100">
              <Table className="w100">
                {/* -*- */}
                <TableRow className="w100 mt6">
                  <TableCell>
                  <h1>Trans-Global Solutions, Inc.<br/>
                  Field Payroll Personnel</h1>
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 mt6 bold font16">
                  <TableCell>
                  Table of Contents
                  </TableCell>
                </TableRow>
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  WELCOME'NEW'EMPLOYEE<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  v
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  INTRODUCTORY STATEMENT<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  vi
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  CUSTOMER RELATIONS<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  vii
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  ENVIRONMENT, HEALTH AND SAFETY POLICY STATEMENT<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  viii
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  EMPLOYEE ACKNOWLEDGEMENT FORM<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  ix
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  CONFIDENTIALITY AGREEMENT<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  x
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  101 Nature of Employment<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  1
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  102 Employee Relations<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  1
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  103 Equal Employment Opportunity<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  2
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  104 Business Ethics and Conduct<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  2
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  105 Personal Relationships in the Workplace<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  3
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  106 Employee Medical Examinations<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  3
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  107 Immigration Law Compliance<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  4
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  108 Conflicts of Interest and Outside Employment<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  4
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  110 Outside Employment<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  6
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  112 NonZDisclosure<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  6
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  114 Disability Accommodation<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  7
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  201 Employment Categories<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  7
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  202 Access to Personnel Files'<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  8
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  203 Employment Reference Checks<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  9
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  204 Personnel Data Changes<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  9
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  205 Introductory Period<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  9
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  208 Employment Applications'<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  10
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  209 Performance Evaluation<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  10
                  </TableCell>
                </TableRow> 
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  212 Salary Administration<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  10
                  </TableCell>
                </TableRow>  
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  301 Employee Benefits<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  11
                  </TableCell>
                </TableRow>  
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  303 Vacation Benefits<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  12
                  </TableCell>
                </TableRow>  
                {/* -*- */}
                <TableRow className="w100 row mt14 font14">
                  <TableCell className="w94 row PageLIstLine">
                  305 Holidays<span></span>
                  </TableCell>
                  <TableCell className="w4">
                  13
                  </TableCell>
                </TableRow>      
              </Table>
            </TableCell>
          </TableRow>
          </Table>
          <Grid className="PageNum">i</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 3 ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w94 row PageLIstLine">
                    306 Workers' Compensation Insurance<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    13
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    307 Sick Leave Benefits<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    14
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    308 Time Off to Vote<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    15
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    309 Bereavement Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    15
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    311 Jury Duty<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    16
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    312 Witness Duty<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    17
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    313 Health Insurance<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    17
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    316 Benefits Continuation (COBRA)<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    18
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    317 Life Insurance<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    18
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    320 401(k) Savings Plan<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    19
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    401 Timekeeping<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    19
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    403 Paydays<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    20
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    405 Employment Termination<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    20
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    409 Administrative Pay Corrections<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    21
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    410 Pay Deductions<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    21
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    501 Safety<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    21
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    502 Work Schedules<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    22
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    504 Use of Phone and Mail Systems<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    22
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    505 Smoking<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    23
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    506 Rest and Meal Periods<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    23
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    507 Overtime<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    23
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    508 Use of Equipment and Computer Systems<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    24
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Use of the Company Computer System<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    24
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Use of Company Vehicles and Equipment<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    24
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Telephone Use<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    25
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Consent to Search<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    25
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    510 Emergency Closings<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    25
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    512 Business Travel Expenses<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    25
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    514 Visitors in the Workplace<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    26
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    516 Computer and EZmail Usage<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    26
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    517 Internet Usage<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    27
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    518 Workplace Monitoring<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    29
                    </TableCell>
                  </TableRow>     
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">ii</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 4 ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w94 row PageLIstLine">
                    522 Workplace Violence Prevention<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    29
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    526 Cellular Phone and Handheld Radio Usage<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    30
                    </TableCell>
                  </TableRow> 
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    602 Family and Medical Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    31
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Employee Eligibility Criteria<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    31
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Events, Which May Entitle An Employee to FMLA Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    31
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    The 12ZMonth Period<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    31
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Limitations on FMLA Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    32
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Intermittent Or Reduced Work Schedule Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    32
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Requests for FMLA Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    32
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Required Documentation<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    33
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Use of Paid and Unpaid Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    33
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Designation of Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    34
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Maintenance of Health Benefits<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    34
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Return from FMLA Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    34
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Limitations on Reinstatement<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    34
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Failure To Return To Work Following FMLA Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Additional Information<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    603 Personal Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Continuing Benefit Plan Coverage<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Salary Action<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Vacation and Personal Time<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    35
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Performance Appraisal<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    36
                    </TableCell>
                  </TableRow>
                  {/* ++++ */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Returning/Not Returning From a Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    36
                    </TableCell>
                  </TableRow> 
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    605 Military Leave<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    36
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    680 Return To Work Program<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    37
                    </TableCell>
                  </TableRow> 
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    701 Employee Conduct and Work Rules<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    39
                    </TableCell>
                  </TableRow> 
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    702 Drug, Alcohol And Weapons Policy<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    41
                    </TableCell>
                  </TableRow> 
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    OBJECTIVE<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    41
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    DEFINITIONS<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    42
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Procedures<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    43
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Drug Abuse Program<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    43
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    PreZemployment Testing<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    44
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    For Cause Testing, Random and Annual Testing<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    44
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Rehabilitation Amnesty<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    45
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Refusal to Test<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    45
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Rehire<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    46
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Employee Assistance Program (EAP)<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    46
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Contract/Temporary and Subcontract Personnel<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    46
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Searches<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    46
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Acknowledgment<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    47
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Compliance with Local Law<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    47
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Right to Amend<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    47
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">iii</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 5 ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell>
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row font14">
                    <TableCell className="w94 row PageLIstLine">
                    703 Sexual and Other Unlawful Harassment<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    47
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Zero Tolerance for Harassment, Discrimination, and Retaliation.<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    47
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Definition of Unlawful Harassment<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    48
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Conduct Covered By this Policy<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    48
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Responsibilities<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    48
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Procedures<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    49
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30 ml24">
                    <TableCell className="w94 row PageLIstLine">
                    Reporting Hostile or Abusive Conduct.<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    49
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Management Response to Harassment Reports<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    49
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Performing Further Investigation.<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    50
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Resolving Conflicts of Interest in Inquiries or Investigations<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    50
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 row font12 pl30 pr30">
                    <TableCell className="w94 row PageLIstLine">
                    Maintaining Confidentiality, Keeping Records, and Monitoring Compliance<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    51
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    704 Attendance and Punctuality<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    52
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    705 Personal Appearance<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    52
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    706 Return of Property<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    53
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    710 Security Inspections<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    53
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    712 Solicitation<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    53
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    716 Progressive Discipline<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    54
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    718 Problem Resolution<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    55
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    719 Employment Dispute Arbitration<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    56
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    722 Workplace Etiquette<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    56
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    780 OpenZdoor Policy<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    57
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    800 LifeZThreatening Illnesses in the Workplace<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    57
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 row mt14 font14">
                    <TableCell className="w94 row PageLIstLine">
                    880 Asset Protection Help Line<span></span>
                    </TableCell>
                    <TableCell className="w4">
                    58
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">iv</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 6 WELCOME NEW EMPLOYEE (v) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100 row justify-center textCenter">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 textCenter header font16 bold">
                      WELCOME NEW EMPLOYEE
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    On behalf of your colleagues, I welcome you to Trans-Global Solutions, Inc. and wish you every
success here.<br/><br/>
We believe that each employee contributes directly to Trans-Global Solutions, Inc.'s growth and
success, and we hope you will take pride in being a member of our team.<br/><br/>

This handbook was developed to describe some of the expectations of our employees and to
outline the policies, programs, and benefits available to eligible employees. Employees should
familiarize themselves with the contents of the employee handbook as soon as possible, for it
will answer many questions about employment with Trans-Global Solutions, Inc.<br/><br/>

We hope that your experience here will be challenging, enjoyable, and rewarding. Again,
welcome!
Sincerely,
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 pl30 pr30 mt30 pt30">
                    <TableCell className="w40 SignatureImage"></TableCell>
                  </TableRow>
                  <TableRow className="w100 pl30 pr30">
                    <TableCell className="w40 bt font16 pt10">
                    William F. Scott<br/>
Chairman & Chief Executive Officer
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">v</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 7 INTRODUCTORY STATEMENT (vi) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100 row">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    INTRODUCTORY STATEMENT
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    Whether you have just joined our staff or have been at Trans-Global Solutions, Inc. for a while,
we are confident that you will find our company a dynamic and rewarding place in which to
work and we look forward to a productive and successful association. We consider the
employees of Trans-Global Solutions, Inc. to be one of its most valuable resources. This manual
has been written to serve as the guide for the employer/employee relationship.<br/><br/>

There are several things that are important to keep in mind about this handbook. First, it
contains only general information and guidelines. It is not intended to be comprehensive or to
address all the possible applications of, or exceptions to, the general policies and procedures
described. For that reason, if you have any questions concerning eligibility for a particular
benefit, or the applicability of a policy or practice to you, you should address your specific
questions to the Manager, Human Resources. Neither this handbook nor any other Company
document, confers any contractual right, either express or implied, to remain in the Company's
employ. Nor does it guarantee any fixed terms and conditions of your employment. Your
employment is not for any specific time and may be terminated at will, with or without cause and
without prior notice, by the Company or you may resign for any reason at any time. No
supervisor or other representative of the company (except the CEO) has the authority to enter
into any agreement for employment for any specified period of time, or to make any agreement
contrary to the above.<br/><br/>

Second, the procedures, practices, policies and benefits described here supersede any previous
handbook issuance and may be modified or discontinued from time to time. We will try to
inform you of any changes as they occur.<br/><br/>

Third, this handbook and the information in it should be treated as secret and confidential. No
portion of this handbook should be disclosed to others, except Trans-Global Solutions, Inc.
employees and others affiliated with Trans-Global Solutions, Inc. whose knowledge of the
information is required in the normal course of business.<br/><br/>

Finally, some of the subjects described here are covered in detail in official policy documents.
You should refer to these documents for specific information, since this handbook only briefly
summarizes those benefits. Please note that the terms of the written insurance policies are
controlling.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">vi</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 8 CUSTOMER RELATIONS (vii) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100 row">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    CUSTOMER RELATIONS
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    Customers are among our organization's most valuable assets. Every employee represents Trans-
Global Solutions, Inc. to our customers and the public. The way we do our jobs presents an
image of our entire organization. Customers judge all of us by how they are treated with each
employee contact. Therefore, one of our first business priorities is to assist any customer or
potential customer. Nothing is more important than being courteous, friendly, helpful, and
prompt in the attention you give to customers.<br/><br/>

Trans-Global Solutions, Inc. will provide customer relations and services training to all
employees with extensive customer contact. Customers who wish to lodge specific comments or
complaints should be directed to the Vice President of Marketing for appropriate action. Our
personal contact with the public, our manners on the telephone, and the communications we send
to customers are a reflection not only of ourselves, but also of the professionalism of Trans-
Global Solutions, Inc. Positive customer relations not only enhance the public's perception or
image of Trans-Global Solutions, Inc., but also pay off in greater customer loyalty and increased
sales and profit.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">vii</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 9 ENVIRONMENT, HEALTH AND SAFETY POLICY STATEMENT (viii) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    ENVIRONMENT, HEALTH AND SAFETY POLICY STATEMENT
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    The management of Trans-Global Solutions, Inc. (TGS) is committed to conducting all business
operations worldwide with respect and care for the environment, the community, and workers. With this
commitment to our stakeholders (employees, customers, and the public), TGS management and personnel
have and will continue to review all operations in order to minimize the potential for environmental and
safety problems.<br/><br/>

Compliance with this commitment and applicable laws is the responsibility of every employee and
contractor acting on our behalf and a condition of the employment or contract.<br/><br/>

With prevention as the highest priority, it is the policy of TGS to give immediate notice to federal, state,
and local entities when unauthorized releases to air, water, or soil are known to have occurred, as the law
requires. The intent of this policy is to ensure that a release to the environment is reported by designated
personnel without delay to the appropriate agencies and is followed up with all pe1tinent additional
information as necessary. Further, it is our policy to abate any releases to minimize or eliminate
environmental impact.<br/><br/>

It is the responsibility of local management at each facility to ensure that this policy is implemented and
that all operations are in compliance with permits and applicable regulations on an on-going basis. All
employees at our operating facilities are directed to be active paiticipants in this awareness, prevention,
and compliance program and have the responsibility to immediately alert management upon recognition
of a suspected safety or environmental hazard.<br/><br/>

In summary, we at TGS will endeavor to:<br/><br/>
I. Conduct all business activities ( construction, service operations, and maintenance) in a safe manner;<br/><br/>
2. Protect the health of our employees, contractors, customers, visitors, and neighbors insofar as our
operations are concerned;<br/><br/>
3. Meet or exceed all contemporary requirements of environmental performance; and<br/><br/>
4. Operate all our facilities and customer service operations in a manner that fosters local community
value in commerce and aesthetics.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 pl30 pr30 mt30 ">
                    <TableCell className="w40 SignatureImage"></TableCell>
                  </TableRow>
                  <TableRow className="w100 pl30 pr30">
                    <TableCell className="w40 bt font16 pt10">
                    William F. Scott<br/>
Chairman & Chief Executive Officer
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">viii</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 10 101 Nature of Employment (1) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                      101 Nature of Employment
                    </TableCell>
                    <TableCell className="w100">
                      Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                      Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    This handbook is intended to provide employees with a general understanding of our personnel policies.
Employees are encouraged to familiarize themselves with the contents of this handbook, for it will answer
many common questions concerning employment with Trans-Global Solutions, Inc.<br/><br/>

However, this handbook cannot anticipate every situation or answer every question about employment. It
is not an employment contract and is not intended to create contractual obligations of any kind. Neither
the employee nor Trans-Global Solutions, Inc. is bound to continue the employment relationship if either
chooses, at its will, to end the relationship at any time.<br/><br/>

In order to retain necessary flexibility in the administration of policies and procedures, Trans-Global
Solutions, Inc. reserves the right to change, revise, or eliminate any of the policies and/or benefits
described in this handbook, except for its policy of employment-at-will. The only recognized deviations
from the stated policies are those authorized and signed by the Chief Executive Officer of Trans-Global
Solutions, Inc.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    102 Employee Relations
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font16">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. believes that the work conditions, wages, and benefits it offers to its
employees are competitive with those offered by other employers in this area and in this industry. If
employees have concerns about work conditions or compensation, they are strongly encouraged to voice
these concerns openly and directly to their supervisors.<br/><br/>

Our experience has shown that when employees deal openly and directly with supervisors, the work
environment can be excellent, communications can be clear, and attitudes can be positive. We believe that
Trans-Global Solutions, Inc. amply demonstrates its commitment to employees by responding effectively
to employee concerns.<br/><br/>

In an effort to protect and maintain direct employer/employee communications, we will resist
organization, within applicable legal limits, and protect the right of employees to speak for themselves.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">1</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 11 103 Equal Employment Opportunity (2) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    103 Equal Employment Opportunity
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    In order to provide equal employment and advancement opportunities to all individuals, employment
decisions at Trans-Global Solutions, Inc. will be based on merit, qualifications, and abilities. Trans-
Global Solutions, Inc. does not discriminate in employment opportunities or practices on the basis of race,
color, religion, sex, national origin, age, disability, or any other characteristic protected by law.<br/><br/>

Trans-Global Solutions, Inc. will make reasonable accommodations for qualified individuals with known
disabilities unless doing so would result in an undue hardship. This policy governs all aspects of
employment, including selection, job assignment, compensation, discipline, termination, and access to
benefits and training.<br/><br/>

In addition to a commitment to provide equal employment opportunities to all qualified individuals,
Trans-Global Solutions, Inc. has established programs to promote opportunities for individuals in certain
protected classes throughout the organization.<br/><br/>

Any employees with questions or concerns about any type of discrimination in the workplace are
encouraged to bring these issues to the attention of their immediate supervisor or the Human Resources
Manager. Employees can raise concerns and make reports without fear of reprisal. Anyone found to be
engaging in any type of unlawful discrimination will be subject to disciplinary action, up to and including
termination of employment.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    104 Business Ethics and Conduct
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The successful business operation and reputation of Trans-Global Solutions, Inc. is built upon the
principles of fair dealing and ethical conduct of our employees. Our reputation for integrity and
excellence requires careful observance of the spirit and letter of all applicable laws and regulations, as
well as a scrupulous regard for the highest standards of conduct and personal integrity.<br/><br/>

The continued success of Trans-Global Solutions, Inc. is dependent upon our customers' trust and we are
dedicated to preserving that trust. Employees owe a duty to Trans-Global Solutions, Inc., its customers,
and shareholders to act in a way that will merit the continued trust and confidence of the public.<br/><br/>

Trans-Global Solutions, Inc. will comply with all applicable laws and regulations and expects its
directors, officers, and employees to conduct business in accordance with the letter, spirit, and intent of all
relevant laws and to refrain from any illegal, dishonest, or unethical conduct.<br/><br/>

In general, the use of good judgment, based on high ethical principles, will guide you with respect to lines
of acceptable conduct. If a situation arises where it is difficult to determine the proper course of action,
the matter should be discussed openly with your immediate supervisor and, if necessary, with the
Department Manager and/or Human Resources Manager for advice and consultation.<br/><br/>

Compliance with this policy of business ethics and conduct is the responsibility of every Trans-Global
Solutions, Inc. employee. Disregarding or failing to comply with this standard of business ethics and
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">2</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 12 105 Personal Relationships in the Workplace (3) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6 ">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10">
                    <TableCell>
                    conduct could lead to disciplinary action, up to and including possible termination of employment.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10">
                    <TableCell className="w100 header font16 bold">
                    105 Personal Relationships in the Workplace
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The employment of relatives or individuals involved in a dating relationship in the same area of an
organization may cause serious conflicts and problems with favoritism and employee morale. In addition
to claims of partiality in treatment at work, personal conflicts from outside the work environment can be
carried over into day-to-day working relationships.<br/><br/>

For purposes of this policy, a relative is any person who is related by blood or marriage, or whose
relationship with the employee is similar to that of persons who are related by blood or marriage. A dating
relationship is defined as a relationship that may be reasonably expected to lead to the formation of a
consensual "romantic" or sexual relationship. This policy applies to all employees without regard to the
gender or sexual orientation of the individuals involved.<br/><br/>

Relatives of current employees may not occupy a position that will be working directly for or supervising
their relative. Individuals involved in a dating relationship with a current employee may also not occupy a
position that will be working directly for or supervising the employee with whom they are involved in a
dating relationship. Trans-Global Solutions, Inc. also reserves the right to take prompt action if an actual
or potential conflict of interest arises involving relatives or individuals involved in a dating relationship
who occupy positions at any level (higher or lower) in the same line of authority that may affect the
review of employment decisions.<br/><br/>

If a relative relationship or dating relationship is established after employment between employees who
are in a reporting situation described above, it is the responsibility and obligation of the supervisor
involved in the relationship to disclose the existence of the relationship to management. The individuals
concerned will be given the opportunity to decide, except that management reserves the right to make a
transfer decision compliant with its operations, who is to be transferred to another available position. If
that decision is not made within 30 calendar days, management will decide who is to be transferred or, if
necessary, terminated from employment.<br/><br/>

In other cases where a conflict or the potential for conflict arises because of the relationship between
employees, even if there is no line of authority or reporting involved, the employees may be separated by
reassignment or terminated from employment. Employees in a close personal relationship should refrain
from public workplace displays of affection or excessive personal conversation.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    106 Employee Medical Examinations
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    To help ensure that employees are able to perform their duties safely, medical examinations may be
required.<br/><br/>

After an offer has been made to an applicant entering a designated job category, a medical examination
may be performed (compliant with Department of Transportation regulations) at Trans-Global Solutions,
Inc.'s expense by a health professional of Trans-Global Solutions, Inc.'s choice. The offer of employment
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">3</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 13 107 Immigration Law Compliance (4) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    and assignment to duties is contingent upon satisfactory completion of the exam.<br/><br/>

                    Current employees may be required to take medical examinations to determine fitness for performing
safety sensitive positions. Such examinations will be scheduled at reasonable times and intervals and
performed at Trans-Global Solutions, Inc.'s expense.<br/><br/>

Information on an employee's medical condition or history will be kept separate from other employee
information and maintained confidentially. Access to this information will be limited to those who have a
legitimate need to know.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    107 Immigration Law Compliance
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. is committed to employing only United States citizens and aliens who are
authorized to work in the United States and does not unlawfully discriminate on the basis of citizenship or
national origin.<br/><br/>

In compliance with the Immigration Reform and Control Act of 1986, each new employee, as a condition
of employment, must complete the Employment Eligibility Verification Form I-9 and present
documentation establishing identity and employment eligibility. Former employees who are rehired must
also complete the form if they have not completed an I-9 with Trans-Global Solutions, Inc. within the past
three years, or if their previous I-9 is no longer retained or valid.<br/><br/>

Employees with questions or seeking more information on immigration law issues are encouraged to
contact the Human Resources Manager. Employees may raise questions or complaints about immigration
law compliance without fear of reprisal.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    108 Conflicts of Interest and Outside Employment
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. expects its employees to conduct business according to the highest ethical
standards of conduct. Employees are expected to devote their best efforts to the interests of the Company.
Business dealings that appear to create a conflict between the interests of the Company and an employee
are unacceptable. The Company recognizes the right of employees to engage in activities outside of their
employment which are of a private nature and unrelated to our business. However, the employee must
disclose any possible conflicts so that the Company may assess and prevent potential conflicts of interest
from arising. A potential or actual conflict of interest occurs whenever an employee is in a position to
influence a decision that may result in a personal gain for the employee or an immediate family member
(i.e., spouse or significant other, children, parents, siblings) as a result of the Company’s business
dealings.<br/><br/>

Although it is not possible to specify every action that might create a conflict of interest, this policy sets
forth the ones, which most frequently present problems. If an employee has any question whether an
action or proposed course of conduct would create a conflict of interest, he or she should immediately
contact the Human Resources to obtain advice on the issue. The purpose of this policy is to protect
employees from any conflict of interest that might arise.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">4</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 14  (5) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt20 font14">
                    <TableCell className="w100 textJustify">
                    A violation of this policy will result in immediate and appropriate discipline, up to and including
immediate termination.<br/><br/>
Outside Employment<br/>
Employees are required to obtain written approval from their supervisor before participating in outside
work activities. Approval will be granted unless the activity conflicts with the Company’s interest. In
general, outside work activities are not allowed when they:<br/><br/>

prevent the employee from fully performing work for which he or she is employed at the Company,
including overtime assignments;<br/><br/>

involve organizations that are doing or seek to do business with the Company, including actual or
potential vendors or customers; or violate provisions of law or the Company’s policies or rules.<br/><br/>

From time to time, Company employees may be required to work beyond their normally scheduled hours.
Employees must perform this work when requested. In cases of conflict with any outside activity, the
employee’s obligations to the Company must be given priority. Employees are hired and continue in
Trans-Global Solutions, Inc. employ with the understanding that Trans-Global Solutions, Inc. is their
primary employer and that other employment or commercial involvement, which is in conflict with the
business interests of Trans-Global Solutions, Inc., is strictly prohibited.<br/><br/>

Financial Interest in Other Business<br/>
An employee and his or her immediate family may not own or hold any significant interest in a supplier,
customer or competitor of the Company, except where such ownership or interest consists of securities in
a publicly owned company and that securities are regularly traded on the open market.<br/><br/>

Acceptance of Gifts<br/>
No employee may solicit or accept gifts of significant value (i.e., in excess of $50.00), lavish
entertainment or other benefits from potential and actual customers, suppliers or competitors. Special care
must be taken to avoid even the impression of a conflict of interest.<br/><br/>

An employee may entertain potential or actual customers if such entertainment is consistent with accepted
business practices, does not violate any law or generally accepted ethical standards and the public
disclosure of facts will not embarrass the Company. Any questions regarding this policy should be
addressed to the Human Resources Manager.<br/><br/>

Reporting Potential Conflicts<br/>
An employee must promptly disclose actual or potential conflicts of interest, in writing, to his or her
supervisor. Approval will not be given unless the relationship will not interfere with the employee’s
duties or will not damage the Company’s relationship.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">5</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 15 110 Outside Employment (6) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    110 Outside Employment
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Employees may hold outside jobs as long as they meet the performance standards of their job with Trans-
Global Solutions, Inc. All employees will be judged by the same performance standards and will be
subject to Trans-Global Solutions, Inc.'s scheduling demands, regardless of any existing outside work
requirements.<br/><br/>

If Trans-Global Solutions, Inc. determines that an employee's outside work interferes with performance or
the ability to meet the requirements of Trans-Global Solutions, Inc. as they are modified from time to
time, the employee may be asked to terminate the outside employment if he or she wishes to remain with
Trans-Global Solutions, Inc.<br/><br/>

Outside employment that constitutes a conflict of interest is prohibited. Employees may not receive any
income or material gain from individuals outside Trans-Global Solutions, Inc. for materials produced or
services rendered while performing their jobs.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    112 Non-Disclosure
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 4/6/15
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The protection of confidential business information and trade secrets is vital to the interests and the
                    success of Trans-Global Solutions, Inc. Such confidential information includes, but is not limited to, the
                    following examples:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell>
                    * computer processes<br/>
                    * computer programs and codes<br/>
                    * customer lists<br/>
                    * customer preferences<br/>
                    * financial information<br/><br/>
                    * marketing strategies<br/>
                    * new materials research<br/>
                    * pending projects and proposals<br/>
                    * proprietary production processes<br/>
                    * research and development strategies<br/>
                    * technological data<br/>
                    * technological prototypes
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    All employees may be required to sign a non-disclosure agreement as a condition of employment.
Employees who improperly use or disclose trade secrets or confidential business information will be
subject to disciplinary action, up to and including termination of employment and legal action, even if
they do not actually benefit from the disclosed information.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">6</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 16 114 Disability Accommodation (7) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    114 Disability Accommodation
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. is committed to complying fully with the Americans with Disabilities Act
(ADA) and ensuring equal opportunity in employment for qualified persons with disabilities. All
employment practices and activities are conducted on a non-discriminatory basis.<br/><br/>

Hiring procedures have been reviewed and provide persons with disabilities meaningful employment
opportunities. Upon request, job applications are available in alternative, accessible formats, as is
assistance in completing the application. Pre-employment inquiries are made only regarding an applicant's
ability to perform the duties of the position.<br/><br/>

Post-offer medical examinations are required only for those positions in which there is a bona fide jobrelated
physical requirement. They are given to all persons entering the position only after conditional job
offers. Medical records will be kept separate and confidential.<br/><br/>

Reasonable accommodation, to enable the employee to perform the essential duties of his/her job, is
available to all disabled employees, where their disability affects the performance of job functions. All
employment decisions are based on the merits of the situation in accordance with defined criteria, not the
disability of the individual.<br/><br/>

Qualified individuals with disabilities are entitled to equal treatment in pay and other forms of
compensation (or changes in compensation) as well as in job assignments, classifications, organizational
structures, position descriptions, lines of progression, and seniority lists. Leave of all types will be
available to all employees on an equal basis.<br/><br/>

Trans-Global Solutions, Inc. is also committed to not discriminating against any qualified employees or
applicants because they are related to or associated with a person with a disability. Trans-Global
Solutions, Inc. will follow any applicable state or local law that provides individuals with disabilities
greater protection than the ADA.<br/><br/>

This policy is neither exhaustive nor exclusive. Trans-Global Solutions, Inc. is committed to taking all
other actions necessary to ensure equal employment opportunity for persons with disabilities in
accordance with the ADA and all other applicable federal, state, and local laws.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    201 Employment Categories
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    It is the intent of Trans-Global Solutions, Inc. to clarify the definitions of employment classifications so
that employees understand their employment status and benefit eligibility. These classifications do not
guarantee employment for any specified period of time. Accordingly, the right to terminate the
employment relationship at will at any time is retained by both the employee and Trans-Global Solutions,
Inc.<br/><br/>
Each employee is designated as either NONEXEMPT or EXEMPT from federal and state wage and hour
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">7</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 17 202 Access to Personnel Files (8) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    laws. NONEXEMPT employees are entitled to overtime pay under the specific provisions of federal and
state laws.<br/><br/>

EXEMPT employees are excluded from specific provisions of federal and state wage and hour laws. An
employee's EXEMPT or NONEXEMPT classification may be changed only upon written notification by
Trans-Global Solutions, Inc. management.<br/><br/>

In addition to the above categories, each employee will belong to one other employment category:<br/><br/>

REGULAR FULL-TIME employees are those who are not in a temporary or introductory status and who
are regularly scheduled to work Trans-Global Solutions, Inc.'s full-time schedule. Generally, they are
eligible for Trans-Global Solutions, Inc.'s benefit package, subject to the terms, conditions, and
limitations of each benefit program.<br/><br/>

PART-TIME employees are those who are not assigned to a temporary or introductory status and who are
regularly scheduled to work less than 32 hours per week. While they do receive all legally mandated
benefits (such as Social Security and workers' compensation insurance), they are ineligible for all of
Trans-Global Solutions, Inc.'s other benefit programs.<br/><br/>

INTRODUCTORY employees are those whose performance is being evaluated to determine whether
further employment in a specific position or with Trans-Global Solutions, Inc. is appropriate. Employees
who satisfactorily complete the ninety (90) introductory period will be notified of their new employment
classification.<br/><br/>

TEMPORARY employees are those who are hired as interim replacements, to temporarily supplement the
work force, or to assist in the completion of a specific project. Employment assignments in this category
are of a limited duration. Employment beyond any initially stated period does not in any way imply a
change in employment status. Temporary employees retain that status unless and until notified of a
change. While temporary employees receive all legally mandated benefits (such as workers' compensation
insurance and Social Security), they are ineligible for all of Trans-Global Solutions, Inc.'s other benefit
programs.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    202 Access to Personnel Files
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. maintains a personnel file on each employee. The personnel file includes
such information as the employee's job application, resume, records of training, documentation of
performance appraisals and salary increases, and other employment records.<br/><br/>

Personnel files are the property of Trans-Global Solutions, Inc., and access to the information they
contain is restricted. Generally, only supervisors and management personnel of Trans-Global Solutions,
Inc. who have a legitimate reason to review information in a file are allowed to do so.<br/><br/>

Employees who wish to review their own file should contact the Human Resources Department. With
reasonable advance notice, employees may review their own personnel files in Trans-Global Solutions,
Inc.'s offices and in the presence of an individual appointed by Trans-Global Solutions, Inc. to maintain
the files.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">8</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 18 203 Employment Reference Checks (9) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    203 Employment Reference Checks
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    To ensure that individuals who join Trans-Global Solutions, Inc. are well qualified and have a strong
potential to be productive and successful, it is the policy of Trans-Global Solutions, Inc. to check the
employment references of all applicants.<br/><br/>

All inquiries regarding a current or former Trans-Global Solutions employee must be referred to the
Human Resources Department.<br/><br/>

Should an employee receive a written request for a reference, he/she should refer the request to the
Human Resources Department for handling. No Trans-Global Solutions employee may issue a reference
letter to any current or former employee without the permission of the Human Resources Department.<br/><br/>

Under no circumstances should any Trans-Global Solutions employee release any information about any
current or former Trans-Global Solutions employee over the telephone. All telephone inquiries regarding
any current or former employee of Trans-Global Solutions must be referred to the Human Resources
Department.<br/><br/>

In response to an outside request for information regarding a current or former Trans-Global Solutions
employee, the Human Resources Department will furnish or verify only an employee's name, dates of
employment, job title and department. No other data or information regarding any current or former
Trans-Global Solutions employee, or his/her employment with Trans-Global Solutions, will be furnished
unless the employee authorizes Trans-Global Solutions to furnish this information in a writing that also
releases Trans-Global Solutions from liability in connection with the furnishing of this information or
Trans-Global Solutions is required by law to furnish any information.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    204 Personnel Data Changes
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    It is the responsibility of each employee to promptly notify Trans-Global Solutions, Inc. of any changes in
personnel data. Personal mailing addresses, telephone numbers, number and names of dependents,
individuals to be contacted in the event of an emergency, educational accomplishments, and other such
status reports should be accurate and current at all times. If any personnel data has changed, notify the
Human Resources Department.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    205 Introductory Period
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Every new employee goes through an initial introductory period of adjustment in order to learn about the
Company and about his/her job. During this time the employee will have an opportunity to find out if
he/she is suited to, and likes, his/her new position.<br/><br/>

Additionally, the introductory employment period gives the employee's supervisor a reasonable period of
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">9</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 19 208 Employment Applications (10) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    time to evaluate his/her performance. The introductory employment period is 90 days.<br/><br/>

During this time, the new employee will be provided with training and guidance from his/her Supervisor.
He/she may be discharged at any time during this period if his/her Supervisor concludes that he/she is not
progressing or performing satisfactorily. Under appropriate circumstances, the introductory employment
may be extended. Additionally, as is true at all times during an employee's employment with the
Company, employment is not for any specific time and may be terminated at will, with or without cause
and without prior notice.<br/><br/>

At the end of the introductory employment period, the employee and his/her supervisor may discuss
his/her performance. Provided his/her job performance is "satisfactory" at the end of the initial
employment period, he/she will continue in our employment as an at-will full-time employee.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    208 Employment Applications
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. relies upon the accuracy of information contained in the employment
application, as well as the accuracy of other data presented throughout the hiring process and
employment. Any misrepresentations, falsifications, or material omissions in any of this information or
data may result in the exclusion of the individual from further consideration for employment or, if the
person has been hired, termination of employment.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    209 Performance Evaluation
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Supervisors and employees are strongly encouraged to discuss job performance and goals on an informal,
day-to-day basis. Formal performance evaluations are conducted at the end of an employee's initial period
in any new position. This period, known as the introductory period, allows the supervisor and the
employee to discuss the job responsibilities, standards, and performance requirements of the new
position. Additional formal performance evaluations are conducted to provide both supervisors and
employees the opportunity to discuss job tasks, identify and correct weaknesses, encourage and recognize
strengths, and discuss positive, purposeful approaches for meeting goals.<br/><br/>

The performance of all employees is generally evaluated according to an ongoing 12-month cycle,
beginning at the fiscal-year end.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    212 Salary Administration
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The salary administration program at Trans-Global Solutions, Inc. was created to achieve consistent pay
practices, comply with federal and state laws, mirror our commitment to Equal Employment Opportunity,
and offer competitive salaries within our labor market. Because recruiting and retaining talented
employees is critical to our success, Trans-Global Solutions, Inc. is committed to paying its employees
equitable wages that reflect the requirements and responsibilities of their positions and are comparable to
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">10</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 20 301 Employee Benefits (11) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    the pay received by similarly situated employees in other organizations in the area.<br/><br/>

                    Compensation for every position is determined by several factors, including job analysis and evaluation,
the essential duties and responsibilities of the job, and salary survey data on pay practices of other
employers. Trans-Global Solutions, Inc. periodically reviews its salary administration program and
restructures it as necessary. Pay adjustments may be awarded in conjunction with superior employee
performance documented by the performance evaluation process, based on Company performance and/or
based on economic conditions.<br/><br/>

Employees should bring their pay-related questions or concerns to the attention of their immediate
supervisors, who are responsible for the fair administration of departmental pay practices. The Human
Resources Manager is also available to answer specific questions about the salary administration program.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    301 Employee Benefits
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Eligible employees at Trans-Global Solutions, Inc. are provided a wide range of benefits. A number of the
programs (such as Social Security, workers' compensation, and unemployment insurance) cover all
employees in the manner prescribed by law.<br/><br/>

Benefits eligibility is dependent upon a variety of factors, including employee classification. Your
supervisor can identify the programs for which you are eligible. Details of many of these programs can be
found elsewhere in the employee handbook.<br/><br/>

The following benefit programs are available to eligible employees:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * 401(k) Savings Plan<br/>
                    * Benefit Conversion at Termination<br/>
                    * Bereavement Leave<br/>
                    * Dental Insurance<br/>
                    * Family Leave<br/>
                    * Health Insurance<br/>
                    * Holidays<br/>
                    * Jury Duty Leave<br/>
                    * Life Insurance<br/>
                    * Military Leave<br/>
                    * Personal Leave<br/>
                    * Profit Sharing<br/>
                    * Sick Leave Benefits<br/>
                    * Vacation Benefits<br/>
                    * Voting Time Off<br/>
                    * Witness Duty Leave
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Some benefit programs require contributions from the employee, but most are fully paid by Trans-Global
Solutions, Inc.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">11</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 21 303 Vacation Benefits (12) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    303 Vacation Benefits
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Vacation time off with pay is available to eligible employees to provide opportunities for rest, relaxation,
and personal pursuits. Employees in the following employment classification(s) are eligible to earn and
use vacation time as described in this policy:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The amount of paid vacation time employees receive each year increases with the length of their
employment as shown in the following schedule:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Upon initial eligibility, one year of service, the employee is entitled to 5 vacation days
(maximum of 40 hours).<br/>
* After 2 years of eligible service the employee is entitled to 10 vacation days (maximum 80
hours) each calendar year, beginning on January 1 of each year.
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The length of eligible service is calculated on the basis of a "benefit year." This is the 12-month period
that begins when the employee starts to earn vacation time. An employee's benefit year may be extended
for any significant leave of absence except military leave of absence. Military leave has no effect on this
calculation. (See individual leave of absence policies for more information.)<br/><br/>

Once employees enter an eligible employment classification, they begin to earn paid vacation time
according to the schedule. They can request use of vacation time after it is earned. After completion of
one year of employment the employee can take their earned vacation anytime during the period from their
first anniversary date and second anniversary date. This same time sequence applies to the employee's
second year of employment when they would have two weeks of paid vacation. Beginning of the year in
which the employee completes three years of service, vacation is advanced to January 1 and must be
taken before March 31 of the following year.<br/><br/>

Paid vacation time can be used in minimum increments of one-half day. To take vacation, employees
should request advance approval from their supervisors. Requests will be reviewed based on a number of
factors, including business needs and staffing requirements.<br/><br/>

Vacation time off is paid at the employee's base pay rate at the time of vacation. It does not include
overtime or any special forms of compensation such as incentives, commissions, bonuses, or shift
differentials.<br/><br/>

As stated above, employees are encouraged to use available paid vacation time for rest, relaxation, and
personal pursuits. In the event that available vacation is not used by the end of the benefit year, the
employee may take that unused vacation time by March 31 of the following year. At March 31 of each
calendar year all eligible employees will be paid for their unused vacation time from the previous year
bringing the benefit balance to zero. Vacation for the new benefit year is advanced at January 1 of each
calendar year according the schedule above. Otherwise, there is no carryover of vacation benefits from
one year to another.<br/><br/>

Any employee seeking to have time away from work for any reason must complete a TGS Absence
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">12</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 22 305 Holidays (13) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Request form and have their manager/supervisor approve before incurring time off from work. Exception:
Any circumstance beyond the control of the employee where an Absence Request could not have been
foreseen such as sick or injured. In this case an Absence Request form must be completed by the
employee and approved by the responsible manager/supervisor the first day upon returning to work. Also,
for hourly paid employees, all time card records must reflect the time away (hours) and reason for
absence.<br/><br/>
Upon termination of employment, employees will be paid for unused vacation time that has been earned
through the last day of work. However, if Trans-Global Solutions, Inc., in its sole discretion, terminates
employment for cause, forfeiture of unused vacation time can result.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    305 Holidays
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. will grant holiday time off to all employees on the holidays listed below:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * New Year's Day (January 1)<br/>
                    * Memorial Day (last Monday in May)<br/>
                    * Independence Day (July 4)<br/>
                    * Labor Day (first Monday in September)<br/>
                    * Thanksgiving (fourth Thursday in November)<br/>
                    * Christmas (December 25)
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. will grant paid holiday time off to all eligible employees immediately upon
assignment to an eligible employment classification. Holiday pay will be calculated based on the
employee's straight-time pay rate (as of the date of the holiday) times the number of hours the employee
would otherwise have worked on that day. Eligible employee classification(s):
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees<br/>
                    * Introductory employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    To be eligible for holiday pay, employees must work the last scheduled day immediately proceeding and
the first day immediately following the holiday unless vacation leave has been previously approved.<br/><br/>

If a recognized holiday falls during an eligible employee's paid absence (vacation only), holiday pay will
be provided instead of the paid time off benefit that would otherwise have applied.<br/><br/>

If a recognized holiday falls on Saturday or Sunday, eligible employees will receive holiday pay with
their next regular paycheck. However, no time off will be granted.<br/><br/>

If eligible nonexempt employees work on a recognized holiday, they will receive holiday pay plus wages
at their straight-time rate for the hours worked on the holiday.<br/><br/>

Paid time off for holidays will not be counted as hours worked for the purposes of determining overtime.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    306 Workers' Compensation Insurance
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">13</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 23 307 Sick Leave Benefits (14) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. provides a comprehensive workers' compensation insurance program at no
cost to employees. This program covers any injury or illness sustained in the course of employment that
requires medical, surgical, or hospital treatment. Subject to applicable legal requirements, workers'
compensation insurance provides benefits after a short waiting period or, if the employee is hospitalized,
immediately.<br/><br/>

Employees who sustain work-related injuries or illnesses should inform their supervisor immediately. No
matter how minor an on-the-job injury may appear, it is important that it be reported immediately. This
will enable an eligible employee to qualify for coverage as quickly as possible.<br/><br/>

Neither Trans-Global Solutions, Inc. nor the insurance carrier will be liable for the payment of workers'
compensation benefits for injuries that occur during an employee's voluntary participation in any off-duty
recreational, social, or athletic activity sponsored by Trans-Global Solutions, Inc.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    307 Sick Leave Benefits
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 2/19/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. provides paid sick leave benefits to all eligible employees for periods of
temporary absence due to illnesses or injuries. Eligible employee classification(s):
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    To keep the business and each department running smoothly and efficiently, it is important that every
employee be on the job on time regularly. For this reason, careful attention is given to promptness,
absence record and overall dependability.<br/><br/>

Trans-Global Solutions, Inc. recognizes, however, that an employee may occasionally be disabled by
injury or illness. As a result, the Sick Leave policy is designed to provide protection to employees against
loss of income during unavoidable illness or injury.<br/><br/>

All regular full-time employees who are unable to perform their jobs due to illness or injury off the job
are eligible for sick days at the rate of one day (a day equals 8 hours) per year of company service to a
maximum accrual of five days (or 40 hours). Unused sick leave benefits will be allowed to accumulate
until the employee has accrued a total of five calendar days of sick leave benefits. If the employee's sick
leave benefit reaches the maximum of five days, further accrual of sick leave benefits will be suspended
until the employee has reduced the balance below the five day limit. Once sick days are used, the
employee can reestablish their sick leave balance by accruing one day per year of company service to a
maximum of five days. Employees will not be paid for unused sick days either at the end of the calendar
year or upon termination.<br/><br/>

To be eligible for sick pay, employees unable to report to work due to illness must telephone their
supervisor directly, each day of their absence, as far in advance as possible, but no later than one hour
before their scheduled arrival time. If their supervisor is not available, the Human Resources Department
should be contacted. If an employee is unable to make the call personally, a family member or a friend
should contact the supervisor or Human Resources. The supervisor or Human Resources must be
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">14</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 24 307 Sick Leave Benefits (15) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    contacted each day of absence. An employee who fails, within three days of his/her initial absence, to
contact his/her immediate supervisor or Human Resources will be considered as having voluntarily
resigned. This policy must be followed unless an exception has been made for a particular absence, and a
written memo signed by the Division Manager to this effect has been sent to the Human Resources
Department.<br/><br/>

If an employee is absent for three or more consecutive days due to illness or injury, a physician's
statement must be provided verifying the disability and its beginning and expected ending dates. Such
verification may be requested for other sick leave absences as well and may be required as a condition to
receiving sick leave benefits. Before returning to work from a sick leave absence of 5 calendar days or
more, an employee must provide a physician's verification that he/she is released to full duty and can
perform all of the essential elements of the employee’s job/position.<br/><br/>

An “Absence Request” form must be completed for any absence whether paid or unpaid. The Absence
Request form must approved by the employees immediate manager/ supervisor and is for the purpose
recording of absence time (time off from work). The Absence Request form should in normal
circumstances be approved before an absence occurs or latest, the first day upon returning to work. In
addition, for hourly paid employees, all time card records must reflect the time away and reason for
absence.<br/><br/>

Sick leave benefits are intended solely to provide income protection in the event of illness or injury, and
may not be used for any other absence. Unused sick leave benefits will not be paid to employees who
terminate for any reason, their employment.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    308 Time Off to Vote
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. encourages employees to fulfill their civic responsibilities by participating in
elections. Generally, employees are able to find time to vote either before or after their regular work
schedule. If an employees work schedule does not afford the employee an opportunity to vote in an
election during their non-working hours, Trans-Global Solutions, Inc. will grant up to 1 hour of paid time
off to vote.<br/><br/>

Employees should request time off to vote from their supervisor at least two working days prior to the
election day. Advance notice is required so that the necessary time off can be scheduled at the beginning
or end of the work shift, whichever provides the least disruption to the normal work schedule.<br/><br/>

An “Absence Request” form must be completed for any absence whether paid or unpaid. The Absence
Request form must approved by the employees immediate manager/supervisor and is for the purpose
recording of absence time (time off from work). The Absence Request form should in normal
circumstances be approved before an absence occurs or latest, the first day upon returning to work. In
addition, for hourly paid employees, all time card records must reflect the time away and reason for
absence.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    309 Bereavement Leave
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04 
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">15</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 25 311 Jury Duty (16) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    In the unfortunate event of a death in the immediate family, a leave of absence of up to 3 days with pay
will be granted in the following classification(s):
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    These three days are to be taken consecutively within a reasonable time of the day of the death or day of
the funeral, and may not be split or postponed.<br/><br/>

For this purpose, immediate family is defined as: Spouse, child, stepchild, child's spouse, parents
(including in-laws), stepparents, siblings, step-siblings, grandparents or grandchildren.<br/><br/>

Employees should make their supervisor aware of their situation. In turn, the supervisor should notify
Payroll and Human Resources of the reason and length of the employee's absence.<br/><br/>

Any employee seeking to have time away from work for any reason must complete a TGS Absence
Request form and have their manager/supervisor approve before incurring time off from work. Exception:
Any circumstance beyond the control of the employee where an Absence Request could not have been
foreseen such as sick or injured. In this case an Absence Request form must be completed by the
employee and approved by the responsible manager/supervisor the first day upon returning to work. Also,
for hourly paid employees, all time card records must reflect the time away (hours) and reason for
absence.<br/><br/>

Upon returning to work, the employee must record his/her absence as a Bereavement Leave on his/her
attendance record. Proof of death and relationship to the deceased is required and may be substantiated by
the submission of a newspaper obituary or funeral notice showing dates and relationship.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    311 Jury Duty
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. encourages employees to fulfill their civic responsibilities by serving jury
duty when required. Employees in an eligible classification may request up to two weeks of paid jury
duty leave over any two-year period.<br/><br/>

Jury duty pay will be calculated on the employee's base pay rate times the number of hours the employee
would otherwise have worked on the day of absence. Employee classifications that qualify for paid jury
duty leave are:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    If employees are required to serve jury duty beyond the period of paid jury duty leave, they may use any
available paid time off (for example, vacation benefits) or may request an unpaid jury duty leave of
absence.<br/><br/>

Any employee seeking to have time away from work for any reason must complete a TGS Absence
Request form and have their manager/supervisor approve before incurring time off from work. Exception:
Any circumstance beyond the control of the employee where an Absence Request could not have been
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">16</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 26 312 Witness Duty (17) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    foreseen such as sick or injured. In this case an Absence Request form must be completed by the
employee and approved by the responsible manager/supervisor the first day upon returning to work. Also,
for hourly paid employees, all time card records must reflect the time away (hours) and reason for
absence.<br/><br/>

Employees must show the jury duty summons to their supervisor as soon as possible so that the
supervisor may make arrangements to accommodate their absence. Of course, employees are expected to
report for work whenever the court schedule permits.<br/><br/>

Trans-Global Solutions, Inc. will continue to provide health insurance benefits for the full term of the jury
duty absence. The employee will be returned to his or her regular job at the conclusion of their term of
jury duty.<br/><br/>

Vacation, sick leave, and holiday benefits will continue to accrue during unpaid jury duty leave.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    312 Witness Duty
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 1/1/04
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. encourages employees to appear in court for witness duty when subpoenaed
to do so.<br/><br/>

If employees have been subpoenaed or otherwise requested to testify as witnesses by Trans-Global
Solutions, Inc., they will receive paid time off for the entire period of witness duty.<br/><br/>

Employees will be granted unpaid time off to appear in court as a witness when requested by a party other
than Trans-Global Solutions, Inc. Employees are free to use any available paid leave benefit (such as
vacation leave) to receive compensation for the period of this absence.<br/><br/>

The subpoena should be shown to the employee's supervisor immediately after it is received so that
operating requirements can be adjusted, where necessary, to accommodate the employee's absence. The
employee is expected to report for work whenever the court schedule permits.<br/><br/>

Any employee seeking to have time away from work for any reason must complete a TGS Absence
Request form and have their manager/supervisor approve before incurring time off from work. Exception:
Any circumstance beyond the control of the employee where an Absence Request could not have been
foreseen such as sick or injured. In this case an Absence Request form must be completed by the
employee and approved by the responsible manager/supervisor the first day upon returning to work. Also,
for hourly paid employees, all time card records must reflect the time away (hours) and reason for
absence.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    313 Health Insurance
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc.'s health insurance plan provides eligible employees and their dependents
access to medical insurance benefits. Employees in the following employment classifications are eligible
to participate in the health insurance plan:
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">17</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 27 316 Benefits Continuation (COBRA) (18) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Eligible employees may participate in the health insurance plan subject to all terms and conditions of the
agreement between Trans-Global Solutions, Inc. and the insurance carrier.<br/><br/>

A change in employment classification that would result in loss of eligibility to participate in the health
insurance plan may qualify an employee for benefits continuation under the Consolidated Omnibus
Budget Reconciliation Act (COBRA). Refer to the Benefits Continuation (COBRA) policy for more
information.<br/><br/>

Details of the health insurance plan are described in the Summary Plan Description (SPD). An SPD and
information on cost of coverage will be provided in advance of enrollment to eligible employees. Contact
the Health Insurance Specialist for more information about health insurance benefits.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    316 Benefits Continuation (COBRA)
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    The federal Consolidated Omnibus Budget Reconciliation Act (COBRA) gives employees and their
qualified beneficiaries the opportunity to continue health insurance coverage under Trans-Global
Solutions, Inc.'s health plan when a "qualifying event" would normally result in the loss of eligibility.
Some common qualifying events are resignation, termination of employment, or death of an employee; a
reduction in an employee's hours or a leave of absence; an employee's divorce or legal separation; and a
dependent child no longer meeting eligibility requirements.<br/><br/>

Under COBRA, the employee or beneficiary pays the full cost of coverage at Trans-Global Solutions,
Inc.'s group rates plus an administration fee. Trans-Global Solutions, Inc. provides each eligible employee
with a written notice describing rights granted under COBRA when the employee becomes eligible for
coverage under Trans-Global Solutions, Inc.'s health insurance plan. The notice contains important
information about the employee's rights and obligations.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    317 Life Insurance
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Life insurance offers you and your family important financial protection. Trans-Global Solutions, Inc.
provides a basic life insurance plan for eligible employees.<br/><br/>

Accidental Death and Dismemberment (AD&D) insurance provides protection in cases of serious injury
or death resulting from an accident. AD&D insurance coverage is provided as part of the basic life
insurance plan.<br/><br/>

Employees in the following employment classifications are eligible to participate in the life insurance
plan:
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14 pl20">
                    <TableCell className="w100">
                    * Regular full-time employees
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">18</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 28 320 401(k) Savings Plan (19) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Eligible employees may participate in the life insurance plan subject to all terms and conditions of the
agreement between Trans-Global Solutions, Inc. and the insurance carrier.<br/><br/>

Details of the basic life insurance plan including benefit amounts are described in the Summary Plan
Description provided to eligible employees. Contact the Health Insurance Specialist for more information
about life insurance benefits.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    320 401(k) Savings Plan
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Trans-Global Solutions, Inc. has established a 401(k) savings plan to provide employees the potential for
future financial security for retirement.<br/><br/>

To be eligible to join the 401(k) savings plan, you must complete 12 months of service and be 21 years of
age or older. You may join the plan only during open enrollment periods. Eligible employees may
participate in the 401(k) plan subject to all terms and conditions of the plan.<br/><br/>

The 401(k) savings plan allows you to elect how much salary you want to contribute and direct the
investment of your plan account, so you can tailor your own retirement package to meet your individual
needs. Trans-Global Solutions, Inc. also contributes an additional matching amount ($.50 on every $1.00
up to 4% of the employee's annual salary) to each employee's 401(k) contribution.<br/><br/>

Because your contribution to a 401(k) plan is automatically deducted from your pay before federal and
state tax withholdings are calculated, you save tax dollars now by having your current taxable amount
reduced. While the amounts deducted generally will be taxed when they are finally distributed, favorable
tax rules typically apply to 401(k) distributions.<br/><br/>

Complete details of the 401(k) savings plan are described in the Summary Plan Description provided to
eligible employees. Contact the Payroll Specialist for more information about the 401(k) plan.
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt30">
                    <TableCell className="w100 header font16 bold">
                    401 Timekeeping
                    </TableCell>
                    <TableCell className="w100">
                    Effective Date: 6/2/98
                    </TableCell>
                    <TableCell className="w100">
                    Revision Date: 1/1/04 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt16 font14">
                    <TableCell className="w100 textJustify">
                    Accurately recording time worked is the responsibility of every hourly nonexempt employee. Federal and
state laws require Trans-Global Solutions, Inc. to keep an accurate record of time worked in order to
calculate employee pay and benefits. Time worked is all the time actually spent on the job performing
assigned duties.<br/><br/>

Hourly nonexempt employees should accurately record the time they begin and end their work, as well as
the beginning and ending time of each meal period. They should also record the beginning and ending
time of any split shift or departure from work for personal reasons. Overtime work must always be
approved before it is performed.<br/><br/>

Altering, falsifying, tampering with time records, or recording time on another employee's time record
may result in disciplinary action, up to and including termination of employment.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">19</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 29 403 Paydays (20) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Hourly nonexempt employees should report to work no more than 15 minutes prior to their scheduled
                    starting time nor stay more than 15 minutes after their scheduled stop time without expressed, prior
                    authorization from their supervisor.<br/><br/>
                    It is the employees' responsibility to sign their time records to certify the accuracy of all time recorded.
                    The supervisor will review and then initial the time record before submitting it for payroll processing. In
                    addition, if corrections or modifications are made to the time record, both the employee and the
                    supervisor must verify the accuracy of the changes by initialing the time record.<br/><br/>
                    <b className="font16 header bold">403 Paydays</b><br/>
                    <Grid className="font12">
                      Effective Date: 5/19/97<br/>
                      Revision Date: 1/1/04<br/><br/>
                    </Grid>

                    All employees are paid biweekly on every other Friday. Each hourly paid employee paycheck will include
                    earnings for all work performed through the end of the previous payroll period. All salaried exempt
                    employees are paid current or through the end date of the current pay period.<br/><br/>

                    All employees may be paid by check or through direct deposit of funds to either a savings or checking
                    account at their bank of choice (providing the bank has direct deposit capability). Only eligible Regular
                    Full-time Employees are entitled to participate in direct deposit after completion of 90 days
                    Introductory/Probationary Employment. To activate direct deposit, a Direct Deposit Authorization form
                    from Payroll may be obtained and the employee should have his/her bank complete the form. The
                    completed from must then be returned with a voided personal check to the Payroll Department. Due to
                    banking requirements it may take several weeks for activation of the Direct Deposit.<br/><br/>

                    In the event that a regularly scheduled payday falls on a day off such as a weekend or holiday, employees
                    will receive pay on the last day of work before the regularly scheduled payday.<br/><br/>

                    If a regular payday falls during an employee's vacation, the employee's paycheck will be available upon
                    his or her return from vacation.<br/><br/>

                    <b className="font16 header bold">405 Employment Termination</b>
                    <Grid className="font12">Effective Date: 6/2/98<br/>
                    Revision Date: 1/1/04<br/><br/></Grid>

                    Termination of employment is an inevitable part of personnel activity within any organization, and many
                    of the reasons for termination are routine. Below are examples of some of the most common
                    circumstances under which employment is terminated:<br/><br/>
<Grid className="w100 pl20">
                    * Resignation - voluntary employment termination initiated by an employee.<br/>
                    * Discharge - involuntary employment termination initiated by the organization.<br/>
                    * Layoff - involuntary employment termination initiated by the organization for
                    nondisciplinary reasons.<br/>
                    * Retirement - voluntary employment termination initiated by the employee meeting
                    age, length of service, and any other criteria for retirement from the organization.<br/><br/>
</Grid>
                    Trans-Global Solutions, Inc. may schedule exit interviews at the time of employment termination. The
                    exit interview will afford an opportunity to discuss such issues as employee benefits, conversion
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">20</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 30 409 Administrative Pay Corrections (21) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    privileges, repayment of outstanding debts to Trans-Global Solutions, Inc., or return of Trans-Global
Solutions, Inc.-owned property. Suggestions, complaints, and questions can also be voiced.<br/><br/>

Since employment with Trans-Global Solutions, Inc. is based on mutual consent, both the employee and
Trans-Global Solutions, Inc. have the right to terminate employment at will, with or without cause, at any
time. Employees will receive their final pay in accordance with applicable state law.<br/><br/>

Employee benefits will be affected by employment termination in the following manner. All accrued,
vested benefits that are due and payable at termination will be paid. Some benefits may be continued at
the employee's expense if the employee so chooses. The employee will be notified in writing of the
benefits that may be continued and of the terms, conditions, and limitations of such continuance.<br/><br/>

<b className="font16 header bold">409 Administrative Pay Corrections</b><br/>
<Grid className="font12">
  Effective Date: 1/1/04<br/>
  Revision Date:<br/><br/>
</Grid>
Trans-Global Solutions, Inc. takes all reasonable steps to ensure that employees receive the correct
amount of pay in each paycheck and that employees are paid promptly on the scheduled payday.<br/><br/>

In the unlikely event that there is an error in the amount of pay, the employee should promptly bring the
discrepancy to the attention of their supervisor so the supervisor can notify the Payroll Department that
corrections are required and made as quickly as possible.<br/><br/>

<b className="font16 header bold">410 Pay Deductions</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>
The law requires that Trans-Global Solutions, Inc. make certain deductions from every employee's
compensation. Among these are applicable federal, state, and local income taxes. Trans-Global Solutions,
Inc. also must deduct Social Security taxes on each employee's earnings up to a specified limit that is
called the Social Security "wage base." Trans-Global Solutions, Inc. matches the amount of Social
Security taxes paid by each employee.<br/><br/>

Trans-Global Solutions, Inc. offers programs and benefits beyond those required by law. Eligible
employees may voluntarily authorize deductions from their pay checks to cover the costs of participation
in these programs.<br/><br/>

If you have questions concerning why deductions were made from your pay check or how they were
calculated, your supervisor can assist in having your questions answered.<br/><br/>

<b className="font16 header bold">501 Safety</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>
To assist in providing a safe and healthful work environment for employees, customers, and visitors,
Trans-Global Solutions, Inc. has established a workplace safety program. This program is a top priority
for Trans-Global Solutions, Inc. The Safety Manager has responsibility for implementing, administering,
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">21</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 31 502 Work Schedules (22) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    monitoring, and evaluating the safety program. Its success depends on the alertness and personal
commitment of all.<br/><br/>

Trans-Global Solutions, Inc. provides information to employees about workplace safety and health issues
through regular internal communication channels such as supervisor-employee meetings, bulletin board
postings, memos, or other written communications.<br/><br/>

Employees and supervisors receive periodic workplace safety training. The training covers potential
safety and health hazards and safe work practices and procedures to eliminate or minimize hazards.<br/><br/>

Some of the best safety improvement ideas come from employees. Those with ideas, concerns, or
suggestions for improved safety in the workplace are encouraged to raise them with their supervisor, or
with another supervisor or manager, or bring them to the attention of the Safety Manager. Reports and
concerns about workplace safety issues may be made anonymously if the employee wishes. All reports
can be made without fear of reprisal.<br/><br/>

Each employee is expected to obey safety rules and to exercise caution in all work activities. Employees
must immediately report any unsafe condition to the appropriate supervisor. Employees who violate
safety standards, who cause hazardous or dangerous situations, or who fail to report or, where
appropriate, remedy such situations, may be subject to disciplinary action, up to and including termination
of employment.<br/><br/>

In the case of accidents that result in injury, regardless of how insignificant the injury may appear,
employees should immediately notify the Safety Manager or the appropriate supervisor. Such reports are
necessary to comply with laws and initiate insurance and workers' compensation benefits procedures.<br/><br/>

<b className="font16 header bold">502 Work Schedules</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>
Work schedules for employees vary throughout our organization. Supervisors will advise employees of
their individual work schedules. Staffing needs and operational demands may necessitate variations in
starting and ending times, as well as variations in the total hours that may be scheduled each day and
week.<br/><br/>

<b className="font16 header bold">504 Use of Phone and Mail Systems</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>

Personal use of the telephone and/or cellular telephones for long-distance and toll calls is not permitted.
Employees should practice discretion when making local personal calls and may be required to reimburse
Trans-Global Solutions, Inc. for any charges resulting from their personal use of the telephone. Public pay
phones are available for personal outgoing calls during breaks, meal periods, or at other times, with the
supervisor's permission.<br/><br/>

The use of Trans-Global Solutions, Inc.-paid postage for personal correspondence is not permitted.<br/><br/>

To ensure effective telephone communications, employees should always use the approved greeting and
speak in a courteous and professional manner. Please confirm information received from the caller and
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">22</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 32 505 Smoking (23) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                   hang up only after the caller has done so.<br/><br/>

                   <b className="font16 header bold">505 Smoking</b><br/>
                   <Grid className="font12">
                      Effective Date: 6/2/98<br/>
                      Revision Date: 1/1/04<br/><br/>
                    </Grid>
In keeping with Trans-Global Solutions Inc.'s intent to provide a safe and healthful work environment,
smoking in the workplace is prohibited except in those locations outside of offices that have been
specifically designated as smoking areas. In situations where the preferences of smokers and nonsmokers
are in direct conflict, the preferences of nonsmokers will prevail.<br/><br/>

This policy applies equally to all employees, customers, and visitors.<br/><br/>

<b className="font16 header bold">506 Rest and Meal Periods</b><br/>
<Grid className="font12">
  Effective Date: 5/19/97<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>
Each workday, full-time nonexempt employees are provided with 2 rest periods. Supervisors will advise
employees of the regular rest period length and schedule. To the extent possible, rest periods will be
provided in the middle of work periods. Since this time is counted and paid as time worked, employees
must not be absent from their work beyond the allotted rest period time.<br/><br/>

All full-time employees are provided with one meal period each workday of 30 minutes or more.
Supervisors will schedule meal periods to accommodate operating requirements. Employees will be
relieved of all active responsibilities and restrictions during meal periods and will not be compensated for
that time.<br/><br/>

<b className="font16 header bold">507 Overtime</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>
When operating requirements or other needs cannot be met during regular working hours, employees may
be required to work overtime hours. When possible, advance notification of these mandatory assignments
will be provided. All overtime work must receive the supervisor's prior authorization. Overtime
assignments will be distributed as equitably as practical to all employees qualified to perform the required
work.<br/><br/>

Overtime compensation is paid to all nonexempt employees in accordance with federal and state wage
and hour restrictions. Overtime pay is based on actual hours worked. Time off on sick leave, vacation
leave, or any leave of absence will not be considered hours worked for purposes of performing overtime
calculations.<br/><br/>

Failure to work overtime as required or overtime worked without prior authorization from the supervisor
may result in disciplinary action, up to and including possible termination of employment.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">23</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 33 508 Use of Equipment and Computer Systems (24) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                   <b className="font16 header bold">508 Use of Equipment and Computer Systems</b><br/>
                   <Grid className="font12">
                    Effective Date: 5/19/97<br/>
                    Revision Date: 1/1/04<br/><br/>
                  </Grid>
The Company provides any supplies, uniforms, equipment, vehicles and materials necessary for you to
perform your job. These items are to be used solely for the Company's purposes. Employees are expected
to exercise care in the use of Company equipment and property and use such property only for authorized
purposes. Loss, damages or theft of Company property should be reported at once. Negligence in the care
and use of Company property may be considered grounds for discipline, up to and including termination.<br/><br/>

The Company's equipment, such as telephone, cellular phone, pager, handheld radio, postage, facsimile
and copier machine, is intended to be used for business purposes. An employee may only use this
equipment for non-business purposes in an emergency and only with the permission of his or her
supervisor. Personal usage, in an emergency, of these or other equipment that results in a charge to the
Company should be reported immediately to your supervisor or accounting so that reimbursement can be
made.<br/><br/>

Upon termination of employment, the employee must return all Company property, uniforms, equipment,
work product and documents in his or her possession or control.<br/><br/>

<b className="font14 header italic">Use of the Company Computer System</b><br/><br/>

It is the policy of Trans-Global Solutions, Inc. that the use of its computers and software is limited solely
to appropriate business use. Employees are not allowed to use the computer system for their personal
benefit except where approval is obtained from the employee’s supervisor. Employees are strictly
forbidden from installing software not approved by the Company on the system. Further, this policy
reaffirms that the Company's employees have no reasonable expectation of privacy with respect to any
computer hardware, software, electronic mail or other computer or electronic means of communication or
storage, whether or not employees have private access or an entry code into the computer system. The
Company reserves the right to monitor the use of its computer system.<br/><br/>

<b className="font14 header italic">Use of Company Vehicles and Equipment</b><br/><br/>

Equipment and vehicles essential in accomplishing job duties are expensive and may be difficult to
replace. When using Company property, employees are expected to exercise care, perform required
maintenance, and follow all operating instructions, safety standards, and guidelines. Vehicles owned,
leased, or rented by Trans-Global Solutions, Inc. may not be used for personal use without prior approval.<br/><br/>

Please notify the supervisor if any equipment, machines, tools, or vehicles appear to be damaged,
defective, or in need of repair. Prompt reporting of damages, defects, and the need for repairs could
prevent deterioration of equipment and possible injury to employees or others. The supervisor can answer
any questions about an employee's responsibility for maintenance and care of equipment or vehicles used
on the job.<br/><br/>

The improper, careless, negligent, destructive, or unsafe use or operation of equipment or vehicles, as
well as excessive or avoidable traffic and parking violations, can result in disciplinary action, up to and
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">24</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 34 510 Emergency Closings (25) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                   including termination of employment.<br/><br/>
                   <b className="font12 header italic">Telephone Use</b><br/><br/>
Because a large percentage of our business is conducted over the phone, it is essential to project a
professional telephone manner at all times.<br/><br/>

Although Trans-Global Solutions, Inc. realizes that there are times when an employee may need to use the
telephone for personal reasons, it is expected that good judgment will be used in limiting the length and
frequency of such calls. Additionally, no long distance personal calls may be made on Company phones
without prior approval from the employee's supervisor.<br/><br/>

<b className="font12 header italic">Consent to Search</b><br/><br/>
Trans-Global Solutions, Inc. reserves the right to, at any time, for any reason, search, modify, revise or
seize any vehicles, telephones or computer equipment provided to employees for their use. By receiving
and using any vehicles, telephones or computer equipment, it is understood that the employee expressly
consents to any such search, modification, revision or seizure of said equipment.<br/><br/>

<b className="font16 header bold">510 Emergency Closings</b><br/>
<Grid className="font12">
Effective Date: 6/2/98<br/>
Revision Date: 1/1/04<br/><br/>
</Grid>

At times, emergencies such as severe weather, fires, power failures, or earthquakes, can disrupt company
operations. In extreme cases, these circumstances may require the closing of a work facility.<br/><br/>

When operations are officially closed due to emergency conditions, the time off from scheduled work will
be paid up to a maximum of 2 days or 16 hours of straight time pay.<br/><br/>

In cases where an emergency closing is not authorized, employees who fail to report for work will not be
paid for the time off. Employees may request available paid leave time such as unused vacation benefits.<br/><br/>

Employees in essential operations may be asked to work on a day when operations are officially closed.
In these circumstances, employees who work will receive regular pay in addition to the maximum 2 days
or 16 hours straight time pay due the Emergency Closing.<br/><br/>

<b className="font16 header bold">512 Business Travel Expenses</b><br/>
<Grid className="font12">
Effective Date: 6/2/98<br/>
Revision Date: 1/1/04<br/><br/>
</Grid>

Trans-Global Solutions, Inc. will reimburse employees for reasonable business travel expenses incurred
while on assignments away from the normal work location. All business travel must be approved in
advance by the Department Manager.
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">25</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 35 514 Visitors in the Workplace (26) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                   Employees whose travel plans have been approved should make all travel arrangements through Trans-
Global Solutions, Inc.'s designated travel agency.<br/><br/>

When approved, the actual costs of travel, meals, lodging, and other expenses directly related to
accomplishing business travel objectives will be reimbursed by Trans-Global Solutions, Inc. Employees
are expected to limit expenses to reasonable amounts.<br/><br/>

Employees who are involved in an accident while traveling on business must promptly report the incident
to their immediate supervisor. Vehicles owned, leased, or rented by Trans-Global Solutions, Inc. may not
be used for personal use without prior approval.<br/><br/>

With prior approval, a family member or friend may accompany employees on business travel, when the
presence of a companion will not interfere with successful completion of business objectives. The
traveling companion may not under any circumstances operate a company owned, leased or rented
equipment. Generally, employees are also permitted to combine personal travel with business travel, as
long as time away from work is approved. Additional expenses arising from such non-business travel are
the responsibility of the employee.<br/><br/>

When travel is completed, employees should submit completed travel expense reports within 30 days.
Receipts for all individual expenses should accompany reports.<br/><br/>

Employees should contact their supervisor for guidance and assistance on procedures related to travel
arrangements, expense reports, reimbursement for specific expenses, or any other business travel issues.<br/><br/>

Abuse of this business travel expenses policy, including falsifying expense reports to reflect costs not
incurred by the employee, can be grounds for disciplinary action, up to and including termination of
employment.<br/><br/>

<b className="font16 header bold">514 Visitors in the Workplace</b><br/>
<Grid className="font12">
Effective Date: 6/2/98<br/>
Revision Date: 1/1/04<br/><br/>
</Grid>
To provide for the safety and security of employees and the facilities at Trans-Global Solutions, Inc., only
authorized visitors are allowed in the workplace. Restricting unauthorized visitors helps maintain safety
standards, protects against theft, ensures security of equipment, protects confidential information,
safeguards employee welfare, and avoids potential distractions and disturbances.<br/><br/>

All visitors should enter Trans-Global Solutions, Inc. at the reception area or at authorized plant entrance.
All visitors entering customer facilities where Trans-Global Solutions, Inc. has operations are subject to
the customer’s entry and visitation policies. Authorized visitors will receive directions or be escorted to
their destination. Employees are responsible for the conduct and safety of their visitors.<br/><br/>

If an unauthorized individual is observed on Trans-Global Solutions, Inc.'s premises, employees should
immediately notify their supervisor or, if necessary, direct the individual to the reception area.<br/><br/>

<b className="font16 header bold">516 Computer and E-mail Usage</b><br/>
<Grid className="font12">
Effective Date: 6/2/98<br/>
Revision Date: 1/1/04<br/><br/>
</Grid>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">26</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 36 517 Internet Usage (27) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    Computers, computer files, the e-mail system, and software furnished to employees are Trans-Global
Solutions, Inc. property intended for business use. Employees should not use a password, access a file, or
retrieve any stored communication without authorization. To ensure compliance with this policy,
computer and e-mail usage may be monitored.<br/><br/>

Trans-Global Solutions, Inc. strives to maintain a workplace free of harassment and sensitive to the
diversity of its employees. Therefore, Trans-Global Solutions, Inc. prohibits the use of computers and the
e-mail system in ways that are disruptive, offensive to others, or harmful to morale.<br/><br/>

For example, the display or transmission of sexually explicit images, messages, and cartoons is not
allowed. Other such misuse includes, but is not limited to, ethnic slurs, racial comments, off-color jokes,
or anything that may be construed as harassment or showing disrespect for others.<br/><br/>

E-mail may not be used to solicit others for commercial ventures, religious or political causes, outside
organizations, or other non-business matters.<br/><br/>

Trans-Global Solutions, Inc. purchases and licenses the use of various computer software for business
purposes and does not own the copyright to this software or its related documentation. Unless authorized
by the software developer, Trans-Global Solutions, Inc. does not have the right to reproduce such
software for use on more than one computer.<br/><br/>

Employees may only use software on local area networks or on multiple machines according to the
software license agreement. Trans-Global Solutions, Inc. prohibits the illegal duplication of software and
its related documentation.<br/><br/>

Employees should notify their immediate supervisor, the Network Administrator or any member of
management upon learning of violations of this policy. Employees who violate this policy will be subject
to disciplinary action, up to and including termination of employment.<br/><br/>

<b className="font16 header bold">517 Internet Usage</b><br/>
<Grid className="font12">
Effective Date: 1/1/04<br/>
Revision Date:<br/><br/>
</Grid>
Internet access to global electronic information resources on the World Wide Web is provided by Trans-
Global Solutions, Inc. to assist employees in obtaining work-related data and technology. The following
guidelines have been established to help ensure responsible and productive Internet usage. While Internet
usage is intended for job-related activities, incidental and occasional brief personal use is permitted within
reasonable limits.<br/><br/>

All Internet data that is composed, transmitted, or received via our computer communications systems is
considered to be part of the official records of Trans-Global Solutions, Inc. and, as such, is subject to
disclosure to law enforcement or other third parties. Consequently, employees should always ensure that
the business information contained in Internet e-mail messages and other transmissions is accurate,
appropriate, ethical, and lawful.<br/><br/>

The equipment, services, and technology provided to access the Internet remain at all times the property
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">27</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 37 Trans-Global Solutions, (28) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    of Trans-Global Solutions, Inc. As such, Trans-Global Solutions, Inc. reserves the right to monitor
Internet traffic, and retrieve and read any data composed, sent, or received through our online connections
and stored in our computer systems.<br/><br/>
Data that is composed, transmitted, accessed, or received via the Internet must not contain content that
could be considered discriminatory, offensive, obscene, threatening, harassing, intimidating, or disruptive
to any employee or other person. Examples of unacceptable content may include, but are not limited to,
sexual comments or images, racial slurs, gender-specific comments, or any other comments or images
that could reasonably offend someone on the basis of race, age, sex, religious or political beliefs, national
origin, disability, sexual orientation, or any other characteristic protected by law.<br/><br/>

The unauthorized use, installation, copying, or distribution of copyrighted, trademarked, or patented
material on the Internet is expressly prohibited. As a general rule, if an employee did not create material,
does not own the rights to it, or has not gotten authorization for its use, it should not be put on the
Internet. Employees are also responsible for ensuring that the person sending any material over the
Internet has the appropriate distribution rights.<br/><br/>

Internet users should take the necessary anti-virus precautions before downloading or copying any file
from the Internet. All downloaded files are to be checked for viruses; all compressed files are to be
checked before and after decompression.<br/><br/>

Abuse of the Internet access provided by Trans-Global Solutions, Inc. in violation of law or Trans-Global
Solutions, Inc. policies will result in disciplinary action, up to and including termination of employment.
Employees may also be held personally liable for any violations of this policy. The following behaviors
are examples of previously stated or additional actions and activities that are prohibited and can result in
disciplinary action:<br/><br/>

<Grid className="pl20">
* Sending or posting discriminatory, harassing, or threatening messages or images<br/>
* Using the organization's time and resources for personal gain<br/>
* Stealing, using, or disclosing someone else's code or password without authorization<br/>
* Copying, pirating, or downloading software and electronic files without permission<br/>
* Sending or posting confidential material, trade secrets, or proprietary information outside
of the organization<br/>
* Violating copyright law<br/>
* Failing to observe licensing agreements<br/>
* Engaging in unauthorized transactions that may incur a cost to the organization or initiate
unwanted Internet services and transmissions<br/>
* Sending or posting messages or material that could damage the organization's image or
reputation<br/>
* Participating in the viewing or exchange of pornography or obscene materials<br/>
* Sending or posting messages that defame or slander other individuals<br/>
* Attempting to break into the computer system of another organization or person<br/>
* Refusing to cooperate with a security investigation<br/>
* Sending or posting chain letters, solicitations, or advertisements not related to business
purposes or activities<br/>
* Using the Internet for political causes or activities, religious activities, or any sort of
gambling<br/>
* Jeopardizing the security of the organization's electronic communications systems<br/>
* Sending or posting messages that disparage another organization's products or services
</Grid>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">28</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 38 518 Workplace Monitoring (29) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    <Grid className="pl20 mb20">
                      * Passing off personal views as representing those of the organization<br/>
                      * Sending anonymous e-mail messages<br/>
                      * Engaging in any other illegal activities
                    </Grid>
                    <b className="font16 header bold">518 Workplace Monitoring</b><br/>
                    <Grid className="font12">
                      Effective Date: 6/2/98<br/>
                      Revision Date: 1/1/04<br/><br/>
                    </Grid>

Workplace monitoring may be conducted by Trans-Global Solutions, Inc. to ensure quality control,
employee safety, security, and customer satisfaction.<br/><br/>

Computers furnished to employees are the property of Trans-Global Solutions, Inc. As such, computer
usage and files may be monitored or accessed.<br/><br/>

Trans-Global Solutions, Inc. may conduct video surveillance of non-private workplace areas. Video
monitoring is used to identify safety concerns, maintain quality control, detect theft and misconduct, and
discourage or prevent acts of harassment and workplace violence.<br/><br/>

<b className="font16 header bold">522 Workplace Violence Prevention</b><br/>
<Grid className="font12">
  Effective Date: 6/2/98<br/>
  Revision Date: 1/1/04<br/><br/>
</Grid>

Trans-Global Solutions, Inc. is committed to preventing workplace violence and to maintaining a safe
work environment. Given the increasing violence in society in general, Trans-Global Solutions, Inc. has
adopted the following guidelines to deal with intimidation, harassment, or other threats of (or actual)
violence that may occur during business hours or on its premises.<br/><br/>

All employees, including supervisors and temporary employees, should be treated with courtesy and
respect at all times. Employees are expected to refrain from fighting, "horseplay," or other conduct that
may be dangerous to others. Firearms, weapons, and other dangerous or hazardous devices or substances
are prohibited from the premises of Trans-Global Solutions, Inc. without prior management approval.<br/><br/>

Conduct that threatens, intimidates, or coerces another employee, a customer, or a member of the public
at any time, including off-duty periods, will not be tolerated. This prohibition includes all acts of
harassment, including harassment that is based on an individual's sex, race, age, or any characteristic
protected by federal, state, or local law.<br/><br/>

All threats of (or actual) violence, both direct and indirect, should be reported as soon as possible to your
immediate supervisor or any other member of management. This includes threats by employees, as well
as threats by customers, vendors, solicitors, or other members of the public. When reporting a threat of
violence, you should be as specific and detailed as possible.<br/><br/>

All suspicious individuals or activities should also be reported as soon as possible to a supervisor. Do not
place yourself in peril. If you see or hear a commotion or disturbance near your workstation do not try to
intercede. Immediately call a Manager, Supervisor or Security.<br/><br/>

Trans-Global Solutions, Inc. will promptly and thoroughly investigate all reports of threats of (or actual)
violence and of suspicious individuals or activities. The identity of the individual making a report will be
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">29</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 39 526 Cellular Phone and Handheld Radio Usage (30) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                    protected as much as is practical. In order to maintain workplace safety and the integrity of its
investigation, Trans-Global Solutions, Inc. may suspend employees, either with or without pay, pending
investigation.<br/><br/>

Anyone determined to be responsible for threats of (or actual) violence or other conduct that is in
violation of these guidelines will be subject to prompt disciplinary action up to and including termination
of employment.<br/><br/>

Trans-Global Solutions, Inc. encourages employees to bring their disputes or differences with other
employees to the attention of their supervisors, the Department Manager or the Human Resources
Manager before the situation escalates into potential violence. Trans-Global Solutions, Inc. is eager to
assist in the resolution of employee disputes, and will not discipline employees for raising such concerns.<br/><br/>

<b className="font16 header bold">526 Cellular Phone and Handheld Radio Usage</b><br/>
<Grid className="font12">
Effective Date: 1/14/04<br/>
Revision Date: 1/30/04<br/><br/>
</Grid>
Trans-Global Solutions, Inc. provides cellular telephones and handheld radios to some employees as a
business tool. They are provided to assist employees in communicating with management and other
employees, their clients, associates, and others with whom they may conduct business. Cell phone and
handheld radio use is primarily intended for business-related calls. However, occasional, brief personal
use is permitted within a reasonable limit. Cell phone invoices may be regularly monitored.<br/><br/>

Employees whose job responsibilities include regular or occasional driving and who are issued a cell
phone and/or handheld radios for business use are expected to refrain from using their phone while
driving. Safety must come before all other concerns. Regardless of the circumstances, including slow or
stopped traffic, employees are strongly encouraged to pull off to the side of the road and safely stop the
vehicle before placing or accepting a call. If acceptance of a call is unavoidable and pulling over is not an
option, employees are expected to keep the call short, use hands-free options, refrain from discussion of
complicated or emotional discussions and keep their eyes on the road. Special care should be taken in
situations where there is traffic; inclement weather or the employee is driving in an unfamiliar area.<br/><br/>

Personal cellular telephones may not be brought into a TGS work facility/area (or office) and/or into any
company vehicle unless previously approved by their supervisor. Use of personal cellular telephones
during working hours is counterproductive, disruptive to the work environment and is deemed to be a
Safety hazard/issue in operational areas. Personal cellular telephones may be brought to work but must
remain in the employee’s personal vehicle (not on their person) and should only be used at the
employee’s personal vehicle during an authorized break and/or lunch period. Employees are prohibited
from using personal cell phones or handheld radios while driving a company vehicle in the conduct of
company business. If an employee must use their personal cell phone while driving their personal vehicle
in performance of company business they should safely pull off the road and come to a complete stop
before dialing or talking on the phone. Violation of this work rule can be cause for disciplinary action up
to and including termination of employment.<br/><br/>

<Grid className="header">
As a representative of Trans-Global Solutions, Inc., cell phone and handheld radio users are
reminded that the regular business etiquette employed when speaking from office phones or in
meetings applies to conversations conducted over a cell phone or handheld radio.
</Grid>
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">30</Grid>
        </TableContainer>
      </Grid>

{/* ----------- Page 40 602 Family and Medical Leave (31) ----------- */}
      <Grid xs={12} className="pageBreak">
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow className="w100 pl30 pr30">
              <TableCell className="w100">
                <Table className="w100">
                  {/* -*- */}
                  <TableRow className="w100 mt6">
                    <TableCell className="w100">
                    <h1 style={{marginBottom:"0px"}}>Trans-Global Solutions, Inc.<br/>
                    Field Payroll Personnel</h1>
                    </TableCell>
                  </TableRow>
                  {/* -*- */}
                  <TableRow className="w100 mt10 font14">
                    <TableCell className="w100 textJustify">
                      <b className="font16 header bold">602 Family and Medical Leave</b><br/>
                      <Grid className="font12">
                      Effective Date: 1/1/04<br/>
                      Revision Date: 4/1/15<br/><br/>
                      </Grid>

The Family and Medical Leave Act (FMLA) provide eligible employees with up to 12 workweeks of
unpaid leave for certain family and medical reasons during a 12-month period. During this leave, an
eligible employee is entitled to continued group health plan coverage as if the employee had continued to
work. At the conclusion of the leave, subject to some exceptions, an employee generally has a right to
return to the same or to an equivalent position.<br/><br/>

Employee Eligibility Criteria<br/><br/>

To be eligible for FMLA leave, an employee must have been employed by Trans-Global Solutions, Inc.:<br/><br/>

<Grid className="pl20">
* for at least 12 months (which need not be consecutive);<br/>
* for at least 1250 hours during the 12 month period immediately preceding the
commencement of the leave; and<br/>
* at a worksite (a) with 50 or more employees; or (b) where 50 or more employees are
located within 75 miles of the worksite.
</Grid>

Events, Which May Entitle An Employee to FMLA Leave<br/><br/>

FMLA leave may be taken for any one, or for a combination of, the following reasons:<br/><br/>
<Grid className="pl20">
* the birth of the employee's child or to care for the newborn child;<br/>
* the placement of a child with the employee for adoption or foster care or to care for the
newly placed child;<br/>
* to care for the employee's spouse, child or parent (but not in-law) with a serious health
condition; and/or<br/>
* the employee's own serious health condition that makes the employee unable to perform
one or more of the essential functions of his or her job.<br/><br/>
</Grid>
A "serious health condition" is an injury, illness, impairment, or physical or mental condition that
involves inpatient care or continuing treatment by a health care provider.<br/><br/>

How Much FMLA Leave May Be Taken<br/><br/>

The 12EMonth Period
                    </TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
            </Table>
          <Grid className="PageNum">31</Grid>
        </TableContainer>
      </Grid>
      <Acknowledge/>
    </Grid>
  );
}
export default EmployeeHandbook;