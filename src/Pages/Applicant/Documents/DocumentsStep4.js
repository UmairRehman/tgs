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



const PositionLevel = [
    { title: 'Accounting and finance' },
    { title: 'Communications' },
    { title: 'Manager' }
];
const FullTitle = [
    { title: 'Accounting and finance Manager' },
    { title: 'Accounting and finance Assistant' },
    { title: 'Accounting and finance Junior' }
];

const addressstate = [
    { title: 'Alaska' },
    { title: 'Arizona' },
    { title: 'Arkansas' },
    { title: 'California' },
    { title: 'Colorado' },
    { title: 'Connecticut' },
    { title: 'Delaware' },
    { title: 'Florida' },
    { title: 'Georgia' },
    { title: 'Hawaii' },
    { title: 'Idaho' },
    { title: 'Illinois' },
    { title: 'Indiana' },
    { title: 'Iowa' },
    { title: 'Kansas' },
    { title: 'Kentucky' },
    { title: 'Louisiana' },
    { title: 'Maine' },
    { title: 'Maryland' },
    { title: 'Massachusetts' },
    { title: 'Michigan' }
];
const MaritalStatus = [
    { title: 'Married' },
    { title: 'Single' }
];
const JobCategories = [
    { title: 'Administrative assistant' },
    { title: 'Business development manager' },
    { title: 'Civil service administrative officer' },
    { title: 'Compliance officer' },
    { title: 'European Union official' },
    { title: 'Health service manager' },
    { title: 'Local government administrative assistant' },
    { title: 'Management consultant' },
    { title: 'Operational researcher' },
    { title: 'Purchasing manager' },
    { title: 'Business analyst' },
    { title: 'Civil service executive officer' }
];

const Follicle = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const DocumentsStep4 = () => {
    const history = useHistory();

    const storage = new Storage();

    const [formsPosted, setFormsPosted] = useState(false);

    var step4FormPosted = new BroadcastChannel('step4form_posted');

    step4FormPosted.onmessage = ($e) => {
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
        showSnackBar('Form posted');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // showSnackBar('Form posted');
    }, [formsPosted]);

    const saveAndContinue = async () => {
        console.log("asnasn")
        try {
            const repsonse = await users.submitStep4();
            const user_profile = JSON.parse(storage.get('user_profile'));
            history.push({
                pathname: '/submission',
                state: {
                    approved: false,
                    step: 1,
                    applyToStorage: {
                        user_profile: {
                            ...user_profile,
                            EmployeeStatusId: 9,
                        }
                    }
                }
            });

        } catch (exc) {
            console.log(exc);
        }
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

                                <Link to="/documents/employee-agreement" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Employment Agreement
                                    </Grid>
                                    <Button className={
                                        storage.get('step-4-form-employeeAgreement')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/harassment" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        TGS Harassment
                                    </Grid>
                                    <Button className={
                                        storage.get('step-4-form-tgsHarrasment')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/employee-handbook" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Employee Handbook
                                    </Grid>
                                    <Button className={
                                        storage.get('step-4-form-employeeHandbook')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/safety-handbook" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Safety Handbook
                                    </Grid>
                                    <Button className={
                                        storage.get('step-4-form-safetyHandbook')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>
                                <Link to="/documents/drug-alcohol-weapons" target="_blank" className="DocDownload">
                                    <Grid className="FileName">
                                        Drug, Alcohol & Weapon
                                    </Grid>
                                    <Button className={
                                        storage.get('step-4-form-drugAlcoholWeapon')
                                            ? ''
                                            : 'graytick'
                                    }></Button>
                                </Link>

                            </Grid>
                            <Snackbar></Snackbar>
                            <Grid xs={12} className="mt50">
                                <Grid xs={12} md={8} lg={6} container justify="space-between">
                                    <Link to="/documents/step/3" className="LinkButtonBack">Back</Link>
                                    <Button className="LinkButton" onClick={saveAndContinue}>Save & Continue</Button>
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

export default DocumentsStep4;
