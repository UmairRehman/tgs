import React, { useState, useEffect } from "react";
import {
    Grid,
    Checkbox,
    TextareaAutosize,
    Typography,
    Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { capitalize } from "../../../helpers/capitalize";
import { es, fi } from "date-fns/locale";

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

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
const CitizenStatus = [
    { title: 'Citizen' },
    { title: 'Non-Citizen' },
    { title: 'Permanent Residence' },
    { title: 'Alien Authorized to Work' }
];
const MaritalStatus = [
    { title: 'Single' },
    { title: 'Married' },
    { title: 'Separated' },
    { title: 'Divorced' },
    { title: 'Widowed' }
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

const ITR1 = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const Application = () => {

    /** State for files */
    const filesToUpload = useState({
        resume: null,
        socialSecurityCard: null,
    });

    /** State for Job Details */
    const jobDetails = useState({
        id: '',
        description: '',
        category: '',
        notesForHr: '',
    });

    /** State for EmergencyContact */
    const emergencyContact = useState({
        name: '',
        relationship: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        telephoneNumebr: '',
    });

    /** State for spouse information */
    const spouseInformation = useState({
        name: '',
        dateOfBirth: new Date(),
        address: '',
        telephoneNumebr: '',
    });

    /** State required for marital status */
    const maritalInformation = useState({
        martialStatus: '',
    });

    /** State required for homeAddress */
    const homeAddress = useState({
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: '',
        usCitizen: '',
    });

    /** State for Contact Information */
    const contactInformation = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        emailAddress: '',
        ssn: '',
        homePhone: '',
        cellPhone: '',
        agreeToNotifications: true,
    });

    // useEffect(($e) => {
    //     applicationForm = {
    //         ...applicationForm,
    //         ...contactInformation,
    //         ...homeAddress,
    //         ...maritalInformation,
    //         ...emergencyContact,
    //         ...jobDetails,
    //         ...filesToUpload,
    //     };
    // }, [
    //     contactInformation,
    //     homeAddress,
    //     maritalInformation,
    //     emergencyContact,
    //     jobDetails,
    //     filesToUpload,
    // ]);

    let applicationForm = {};

    const updateApplicationForm = (addedUpdates = {}) => {
        applicationForm = {
            ...contactInformation[0],
            ...homeAddress[0],
            ...maritalInformation[0],
            ...emergencyContact[0],
            ...jobDetails[0],
            ...filesToUpload[0],
            ...addedUpdates[0],
        };
    }

    /** State for Applciation Form */
    updateApplicationForm();

    const buffers = {
        timeouts: {
            typing: null
        }
    }

    const flags = {
        typing: false
    };

    if (window)
        Object.assign(window, {
            filesToUpload,
            contactInformation,
            applicationForm,
        });

    /**
     * A function for handling individual states to manage via labels and identififers
     * @param {*} state - State object to use
     * @param {string} prop - Prop label to be updated
     * @param {Event} $e - Keyboard / Mouse event
     * @param {*} values - Object or state usually sent by an Autocomplete
     * @returns {void}
     */
    const setStateForFormControl = (...args) => {
        if (buffers.timeouts.typing) {
            clearTimeout(buffers.timeouts.typing);
            buffers.timeouts.typing = null;
        }

        /** 250ms is the default animation and throttling time used by Material Design */
        buffers.timeouts.typing = setTimeout(propagateStateFormControlUpdate.bind(null, ...args), 250);
    }

    const propagateStateFormControlUpdate = (state, prop, $e, values) => {
        const [previousState, stateSetter] = state;

        const {
            target: { files, value }
        } = $e;

        const newValueToUse = files || values || value;

        const stateToApply = {
            ...previousState,
            [prop]: newValueToUse
        };

        stateSetter(stateToApply);

        updateApplicationForm(stateToApply);
        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <Grid id="PageTitle">Contact Information</Grid>
                    {/* Page Start */}
                    <Grid xs={12} className="ContentPage FormTableArea">
                        <Grid xs={12}>
                            <Grid xs={12} md={8} lg={6}>
                                <Typography variant="h1" component="h2" className="bold f16">
                                    Enter Contact Information
                                </Typography>
                                {/* Full Name */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={4} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            First Name
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'firstName',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Middle Name
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'middleName',
                                                    $e
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Last Name
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'lastName',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>
                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40 mt30">
                                    <Grid xs={6} className="pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Email Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'emailAddress',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            SSN
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'ssn',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>
                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40 mt30">
                                    <Grid xs={6} className="pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Home Phone
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'homePhone',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Cell Phone
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'cellPhone',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>
                                {/* ---------- */}
                                <Grid xs={12} className="AppliCheck mt20 pt10 pb10">
                                    <Checkbox
                                        defaultChecked
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        onChange={
                                            ($e) => setStateForFormControl(
                                                contactInformation,
                                                'agreeToNotifications',
                                                $e,
                                            )
                                        }
                                    />
                                    Yes, I agree to receive text and email notifications from Trans Global Solutions
                                </Grid>

                                {/* Title */}
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Home Address
                                </Typography>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Street Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'streetAddress1',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Street Address 2
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'streetAddress2',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ----------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={4} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            City
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'city',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            State
                                        </Grid>
                                        <Autocomplete
                                            className="w100p"
                                            id="combo-box-demo"
                                            options={addressstate}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                            onChange={
                                                ($e, values) => setStateForFormControl(
                                                    homeAddress,
                                                    'state',
                                                    $e,
                                                    values,
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Zip
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'zip',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12} className="mbold mb14">
                                            US Citizen Status
                                        </Grid>
                                        <Autocomplete
                                            className="w100p"
                                            id="combo-box-demo"
                                            options={CitizenStatus}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                            onChange={
                                                ($e, values) => setStateForFormControl(
                                                    homeAddress,
                                                    'usCitizen',
                                                    $e,
                                                    values
                                                )
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Marital Status
                                        </Grid>
                                        <Autocomplete
                                            className="w100p"
                                            id="combo-box-demo"
                                            options={MaritalStatus}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined"
                                                onChange={
                                                    ($e, values) => setStateForFormControl(
                                                        maritalInformation,
                                                        'maritalStatus',
                                                        $e,
                                                        values
                                                    )
                                                } />}
                                        />
                                    </Grid>
                                    <Grid xs={6} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Name of Spouse
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    spouseInformation,
                                                    'name',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Spouse's Date of Birth
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    spouseInformation,
                                                    'dateOfBirth',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Spouse's Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    spouseInformation,
                                                    'address',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12} className="mbold mb14">
                                            Spouse's Telephone Number
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    spouseInformation,
                                                    'telephoneNumber',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* Title */}
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    In case of emergency, contact
                                </Typography>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Name
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'name',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Relationship
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'relationship',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12} className="mbold mb14">
                                            Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'address',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ----------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={4} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            City
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'city',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            State
                                        </Grid>
                                        <Autocomplete
                                            className="w100p"
                                            id="combo-box-demo"
                                            options={addressstate}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                            onChange={
                                                ($e, values) => setStateForFormControl(
                                                    emergencyContact,
                                                    'state',
                                                    $e,
                                                    values,
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Zip
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'zip',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12} className="mbold mb14">
                                            Telephone Number
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    emergencyContact,
                                                    'telephoneNumber',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* Title */}
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Position Applying For
                                </Typography>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Job ID (Optional)
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    jobDetails,
                                                    'id',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Job Description (Optional)
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    jobDetails,
                                                    'description',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Job Category
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <Autocomplete
                                                    className="w100p"
                                                    id="combo-box-demo"
                                                    options={JobCategories}
                                                    getOptionLabel={(option) => option.title}
                                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                                    onChange={
                                                        ($e, values) => setStateForFormControl(
                                                            jobDetails,
                                                            'category',
                                                            $e,
                                                            values,
                                                        )
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* ---------- */}
                                <Grid xs={12} container>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Notes for HR
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <TextareaAutosize className="w100p" rowsMin={6} placeholder="Comment here"
                                                    onChange={
                                                        ($e) => setStateForFormControl(
                                                            jobDetails,
                                                            'noteForHr',
                                                            $e,
                                                        )
                                                    } />
                                            </Grid>
                                            <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                                Please leave this field empty if you have no comments
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Resume / CV
                                            </Grid>
                                            <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">
                                                Drop File Here OR <label for="ResumeSelect" className="labelButton">Select Files</label>
                                                <input type="file" id="ResumeSelect" className="hide"
                                                    onChange={
                                                        ($e) => setStateForFormControl(
                                                            filesToUpload,
                                                            'resume',
                                                            $e,
                                                        )
                                                    } />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Social Security Card
                                            </Grid>
                                            <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">
                                                Drop File Here OR <label for="licenseSelect" className="labelButton">Select Files</label>
                                                <input type="file" id="licenseSelect" className="hide"
                                                    onChange={
                                                        $e => setStateForFormControl(
                                                            filesToUpload,
                                                            'socialSecurityCard',
                                                            $e
                                                        )
                                                    } />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} className="mt50">
                                <Grid xs={12} md={8} lg={6}>
                                    <Link to="/create-password" className="LinkButton">Create Password & Account</Link>
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

export default Application;
