import React, { useState, useEffect } from "react";
import {
    Grid,
    Checkbox,
    TextareaAutosize,
    Typography,
    Button,
    List,
    ListItem
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


/** Local party dependencies & Libraries */
import Services from '../../../Services';

import Snackbar from '../../../Components/Snackbar';

import { helpers } from "../../../helpers";


const {
    users,
    Storage,
} = Services;

const {
    showSnackBar,
} = helpers;


// const GFG_Fun = () => {
//     var file = document.getElementById("i9");
//     if(file.files.length === 0 ){
//         var element = document.getElementById("i9");
//         element.classList.add("NotSelected");
//     } else {
//         var element = document.getElementById("i9");
//         element.classList.add("FileSelected");
//     }
// }
const DocumentsStep3 = () => {

    const history = useHistory();

    const [formsPosted, setFormsPosted] = useState(false);

    var step3FormPosted = new BroadcastChannel('step3form_posted');

    step3FormPosted.onmessage = ($e) => {
        const { data = {} } = $e;

        const { topic, message } = data;

        switch (topic) {
            case 'form-updated':
                toggleFormsPosted();
                break;
            default:
                break;
        }
    }

    const toggleFormsPosted = () => {
        setFormsPosted(true);
        setTimeout(setFormsPosted.bind(null, false), 0);
    }

    const saveAndContinue = async () => {
        try {
            const checks = [
                'step-3-form-arbitration',
                'step-3-form-conditionalOffer',
                'step-3-form-postConditionalOffer',
                'step-3-form-fuelCardAgreement',
                'step-3-form-bootCard',
                'step-3-form-twic',
                'step-3-form-directDeposit',
                'step-3-form-fcra',
                'step-3-form-conditionalOffer',
            ]

            let allFormsSubmitted = checks
                .map(key => storage.get(key))
                .reduce((accumulator, current) => current && !!accumulator, true);

            allFormsSubmitted = allFormsSubmitted && Object.values(files)
                .reduce((accumulator, current) => accumulator && !!current, true);

            if (!allFormsSubmitted)
                return showSnackBar('Please complete & Submit all forms');

            const multiPartFormDataHeaders = {
                'Content-Type': 'multipart/form-data'
            };

            const formData = new FormData();

            formData.append('W4', files.w4[0]);
            formData.append('I9', files.i9[0]);
            formData.append('DISA', files.disa[0]);

            const { data } = await users.postStep3(
                formData,
                multiPartFormDataHeaders
            )

            // storage.set(
            //     'user_profile',
            //     JSON.stringify(data)
            // );
            const user_profile = JSON.parse(storage.get('user_profile'));


            history.push({
                pathname: '/submission',
                state: {
                    approved: false,
                    step: 1,
                    applyToStorage: {
                        user_profile: {
                            ...user_profile,
                            EmployeeStatusId: 6,
                        }
                    }
                }
            });
        } catch (exc) {
            console.log(exc);
        }
    }

    const storage = new Storage();

    const [files, filesSetter] = useState({
        i9: null,
        disa: null,
        w4: null,
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        showSnackBar('Form posted');
    }, [formsPosted]);

    useEffect(() => {
        // var i9 = document.getElementById("i9");
        // if(document.getElementById("i9").files.length !== 0 ){
        //     alert('Yes');
        //     setFile(true);
        //     var x = file?'red':'green'
        // } else {
        //     alert('No');
        //     // var elementx = document.getElementById("i9");
        //     // elementx.classList.add("FileSelected");
        // }
    });

    //   if(isMobile) { 
    //     return (
    //         <MobileScreen />
    //     )
    //   }

    const storeFile = (prop, $e) => {
        const {
            target: { files: uploadedFiles }
        } = $e;

        filesSetter({ ...files, [prop]: uploadedFiles });
    }


    const triggerInput = (id, $e) => {
        const ev = $e || window.event;

        const element = document.getElementById(id);

        // element.click();

        ev.stopPropagation();

        return false;
    }

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
                    <Grid xs={12} className="StepsLine Step2Line Step4Line">
                            <List>
                                <ListItem className="StepComplete">Step 1</ListItem>
                                <ListItem className="StepComplete">Step 2</ListItem>
                                <ListItem className="StepComplete">Step 3</ListItem>
                                <ListItem className="StepComplete">Step 4</ListItem>
                            </List>
                        </Grid>
                        <Grid xs={12}>
                            <Grid xs={12} md={8} lg={6}>
                                <Typography variant="h1" component="h2" className="bold f16">
                                    You're required to fill out the following documents to complete your application
                                </Typography>
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Section 4
                                </Typography>

                                <Link to="/documents/conditional-offer" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Conditional Offer
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-conditionalOffer')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/post-conditional-job-offer" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Post Conditional Job offer Question
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-postConditionalOffer')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/fuel-card-agreement" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Fuel Card Agreement
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-fuelCardAgreement')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/boot-card-agreement" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Boot Cost Agreement
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-bootCard')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/twic-card-payment-agreement" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        TWIC Card Payment Agreement
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-twic')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/direct-deposit" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Direct Deposit
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-directDeposit')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/fcra" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        FCRA
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-fcra')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/arbitration-agreement" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Arbitration Agreement
                                    </Grid>
                                    <Button className={
                                        storage.get('step-3-form-arbitration')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>


                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Download I-9, W-4 and DISA Forms here
                                </Typography>

                                <a href="/assets/forms/I-9.pdf" target="blank" className="PDFDownload">
                                    <Grid className="FileName">
                                        I-9 Forms
                                    </Grid>
                                    <Button></Button>
                                </a>
                                <a href="/assets/forms/W-4.pdf" target="blank" className="PDFDownload">
                                    <Grid className="FileName">
                                        W-4 Forms
                                    </Grid>
                                    <Button></Button>
                                </a>
                                <a href="/assets/forms/DISA_Final" target="blank" className="PDFDownload">
                                    <Grid className="FileName">
                                        DISA Forms
                                    </Grid>
                                    <Button></Button>
                                </a>


                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Please upload the I-9, W-4 and DISA forms and ensure that the forms are filled out clearly in block letters using a black or blue pen.
                                </Typography>

                                <label for="i9" className={
                                    'i9 UploadFile' + (
                                        files.i9
                                            ? ' active'
                                            : ''
                                    )
                                }
                                    onClick={triggerInput.bind(null, 'i9')}>
                                    <Grid className="FileName">
                                        Upload I-9 Form Here
                                    </Grid>
                                    <Button></Button>
                                </label>
                                <input type="file" id="i9" className="hide"
                                    onChange={storeFile.bind(null, 'i9')} />
                                <label for="w4" className={
                                    'w4f UploadFile' + (
                                        files.w4
                                            ? ' active'
                                            : ''
                                    )
                                }
                                    onClick={triggerInput.bind(null, 'w4')}>
                                    <Grid className="FileName">
                                        Upload W-4 Form Here
                                    </Grid>
                                    <Button></Button>
                                </label>
                                <input type="file" id="w4" className="hide"
                                    onChange={storeFile.bind(null, 'w4')} />
                                <label for="disa" className={
                                    'disa UploadFile' + (
                                        files.disa
                                            ? ' active'
                                            : ''
                                    )
                                }
                                    onClick={triggerInput.bind(null, 'disa')}>
                                    <Grid className="FileName">
                                        Upload DISA Form Here
                                    </Grid>
                                    <Button></Button>
                                </label>
                                <input type="file" id="disa" className="hide"
                                    onChange={storeFile.bind(null, 'disa')} />
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please ensure you have signed the documents before uploading them
                                </Typography>
                                <a href="/assets/forms/Zipped.zip" target="_blank" className="ZipFile">
                                    <Grid className="FileName">
                                        All PDF ZIP Files
                                    </Grid>
                                    <Button></Button>
                                </a>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Only for HR
                                </Typography>

                            </Grid>
                            <Grid xs={12} className="mt50">
                                <Grid xs={12} md={8} lg={6} container justify="space-between">
                                    <Link to="/documents" className="LinkButtonBack">Back</Link>
                                    <Button className="LinkButton"
                                        onClick={saveAndContinue}>Save & Continue</Button>
                                    <Snackbar
                                    ></Snackbar>
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
