import React, {useState,useEffect} from "react";
import {
  Grid,
  Checkbox,
  TextareaAutosize,
  Typography,
  Button,
  List,
  ListItem
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


// const GFG_Fun = () => {
//     var file = document.getElementById("l9");
//     if(file.files.length === 0 ){
//         var element = document.getElementById("l9");
//         element.classList.add("NotSelected");
//     } else {
//         var element = document.getElementById("l9");
//         element.classList.add("FileSelected");
//     }
// }
const DocumentsStep3 = () => {
    // const [file, setFile] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // var l9 = document.getElementById("l9");
        // if(document.getElementById("l9").files.length !== 0 ){
        //     alert('Yes');
        //     setFile(true);
        //     var x = file?'red':'green'
        // } else {
        //     alert('No');
        //     // var elementx = document.getElementById("l9");
        //     // elementx.classList.add("FileSelected");
        // }


        console.clear(); 
    });

//   if(isMobile) { 
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle" className="f16">Complete Onboarding Document</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage ApplicantForms">
            <Grid xs={12} className="StepsLine Step2Line Step3Line">
                <List>
                    <ListItem className="StepComplete">Step 1</ListItem>
                    <ListItem className="StepComplete">Step 2</ListItem>
                    <ListItem className="StepComplete">Step 3</ListItem>
                    <ListItem>Step 4</ListItem>
                </List>
            </Grid>
            <Grid xs={12}>
                <Grid xs={12} md={8} lg={6}>
                    <Typography variant="h1" component="h2" className="bold f16">
                    You're required to fill out the following documents to complete your application
                    </Typography>
                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                    Section 3
                    </Typography>
                    
                    <Link to="/documents/conditional-offer" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Conditional Offer
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/post-conditional-job-offer" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Post Conditional Job offer Question
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/fuel-card-agreement" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Fuel Card Agreement
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/boot-card-agreement" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Boot Cost Agreement
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/twic-card-payment-agreement" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        TWIC Card Payment Agreement
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/direct-deposit" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Direct Deposit
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/fcra" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        FCRA
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>
                    <Link to="/documents/arbitration-agreement" target="_blank" className="DocDownload">
                        <Grid className="FileName">
                        Arbitration Agreement
                        </Grid>
                        <Button className="graytick"></Button>
                    </Link>


                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                    Download I-9, W-4 and DISA Forms here
                    </Typography>
                    
                    <a href="/l-9.pdf" target="blank" className="PDFDownload">
                        <Grid className="FileName">
                        I-9 Forms
                        </Grid>
                        <Button></Button>
                    </a>
                    <a href="/W-4.pdf" target="blank" className="PDFDownload">
                        <Grid className="FileName">
                        W-4 Forms
                        </Grid>
                        <Button></Button>
                    </a>
                    <a href="/DISA_Final.pdf" target="blank" className="PDFDownload">
                        <Grid className="FileName">
                        DISA Forms
                        </Grid>
                        <Button></Button>
                    </a>


                    <Typography variant="h1" component="h2" className="bold f16 mt40">
                    Please upload the I-9, W-4 and DISA forms and ensure that the forms are filled out clearly in block letters using a black or blue pen.
                    </Typography>
                    
                    <label for="l9" className="l9 UploadFile">
                        <Grid className="FileName">
                        Upload I-9 Form Here
                        </Grid>
                        <Button></Button>
                    </label>
                    <input type="file" id="l9" className="hide"/>
                    <label for="w4f" className="w4f UploadFile">
                        <Grid className="FileName">
                        Upload W-4 Form Here
                        </Grid>
                        <Button></Button>
                    </label>
                    <input type="file" id="w4f" className="hide"/>
                    <label for="disa" className="disa UploadFile">
                        <Grid className="FileName">
                        Upload DISA Form Here
                        </Grid>
                        <Button></Button>
                    </label>
                    <input type="file" id="disa" className="hide"/>
                    <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                    Please ensure you have signed the documents before uploading them
                    </Typography>
                    <Link to="" className="ZipFile">
                        <Grid className="FileName">
                        All PDF ZIP Files
                        </Grid>
                        <Button></Button>
                    </Link>
                    <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                    Only for HR
                    </Typography>

                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/documents" className="LinkButtonBack">Back</Link>
                        <Link to="/documents/step/4" className="LinkButton">Save & Continue</Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DocumentsStep3;
