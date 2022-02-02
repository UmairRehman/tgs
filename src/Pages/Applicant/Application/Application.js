import React, { useState, useEffect } from "react";
import {
    Grid,
    Checkbox,
    TextareaAutosize,
    Typography,
    Button,
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
import { useHistory } from "react-router-dom";

import DatePicker from 'react-date-picker';

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

/** Services & Local dependencies */
import { Imports } from '../../../Imports';

import Services from '../../../Services';

import Snackbar from '../../../Components/Snackbar';

console.log(Imports);

const {
    users,
    hr
} = Services;


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
    {
        title: "Alabama",
        abbreviation: "AL"
    },
    {
        title: "Alaska",
        abbreviation: "AK"
    },
    {
        title: "American Samoa",
        abbreviation: "AS"
    },
    {
        title: "Arizona",
        abbreviation: "AZ"
    },
    {
        title: "Arkansas",
        abbreviation: "AR"
    },
    {
        title: "California",
        abbreviation: "CA"
    },
    {
        title: "Colorado",
        abbreviation: "CO"
    },
    {
        title: "Connecticut",
        abbreviation: "CT"
    },
    {
        title: "Delaware",
        abbreviation: "DE"
    },
    {
        title: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        title: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        title: "Florida",
        abbreviation: "FL"
    },
    {
        title: "Georgia",
        abbreviation: "GA"
    },
    {
        title: "Guam",
        abbreviation: "GU"
    },
    {
        title: "Hawaii",
        abbreviation: "HI"
    },
    {
        title: "Idaho",
        abbreviation: "ID"
    },
    {
        title: "Illinois",
        abbreviation: "IL"
    },
    {
        title: "Indiana",
        abbreviation: "IN"
    },
    {
        title: "Iowa",
        abbreviation: "IA"
    },
    {
        title: "Kansas",
        abbreviation: "KS"
    },
    {
        title: "Kentucky",
        abbreviation: "KY"
    },
    {
        title: "Louisiana",
        abbreviation: "LA"
    },
    {
        title: "Maine",
        abbreviation: "ME"
    },
    {
        title: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        title: "Maryland",
        abbreviation: "MD"
    },
    {
        title: "Massachusetts",
        abbreviation: "MA"
    },
    {
        title: "Michigan",
        abbreviation: "MI"
    },
    {
        title: "Minnesota",
        abbreviation: "MN"
    },
    {
        title: "Mississippi",
        abbreviation: "MS"
    },
    {
        title: "Missouri",
        abbreviation: "MO"
    },
    {
        title: "Montana",
        abbreviation: "MT"
    },
    {
        title: "Nebraska",
        abbreviation: "NE"
    },
    {
        title: "Nevada",
        abbreviation: "NV"
    },
    {
        title: "New Hampshire",
        abbreviation: "NH"
    },
    {
        title: "New Jersey",
        abbreviation: "NJ"
    },
    {
        title: "New Mexico",
        abbreviation: "NM"
    },
    {
        title: "New York",
        abbreviation: "NY"
    },
    {
        title: "North Carolina",
        abbreviation: "NC"
    },
    {
        title: "North Dakota",
        abbreviation: "ND"
    },
    {
        title: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        title: "Ohio",
        abbreviation: "OH"
    },
    {
        title: "Oklahoma",
        abbreviation: "OK"
    },
    {
        title: "Oregon",
        abbreviation: "OR"
    },
    {
        title: "Palau",
        abbreviation: "PW"
    },
    {
        title: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        title: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        title: "Rhode Island",
        abbreviation: "RI"
    },
    {
        title: "South Carolina",
        abbreviation: "SC"
    },
    {
        title: "South Dakota",
        abbreviation: "SD"
    },
    {
        title: "Tennessee",
        abbreviation: "TN"
    },
    {
        title: "Texas",
        abbreviation: "TX"
    },
    {
        title: "Utah",
        abbreviation: "UT"
    },
    {
        title: "Vermont",
        abbreviation: "VT"
    },
    {
        title: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        title: "Virginia",
        abbreviation: "VA"
    },
    {
        title: "Washington",
        abbreviation: "WA"
    },
    {
        title: "West Virginia",
        abbreviation: "WV"
    },
    {
        title: "Wisconsin",
        abbreviation: "WI"
    },
    {
        title: "Wyoming",
        abbreviation: "WY"
    }
];

const CitizenStatus = [
    { title: 'Citizen' },
    { title: 'Non-Citizen' },
    { title: 'Permanent Residence' },
    { title: 'Alien Authorized to Work' },
];
const MaritalStatus = [
    { title: 'Single' },
    { title: 'Married' },
    { title: 'Separated' },
    { title: 'Divorced' },
    { title: 'Widowed' }
];

// const JobCategories = [
//     { title: 1, label: 'Business development manager' },
//     { title: 2, label: 'Civil service administrative officer' },
//     { title: 3, label: 'Compliance officer' },
//     { title: 4, label: 'European Union official' },
//     { title: 5, label: 'Health service manager' },
//     { title: 6, label: 'Local government administrative assistant' },
//     { title: 7, label: 'Management consultant' },
//     { title: 8, label: 'Operational researcher' },
//     { title: 9, label: 'Purchasing manager' },
//     { title: 10, label: 'Business analyst' },
//     { title: 11, label: 'Civil service executive officer' },
// ];

const Application = () => {

    const [dateOfBirth, dateOfBirthSetter] = useState(new Date());

    let history = useHistory();

    const snackBarDefaultDuration = 4000;

    /** State for files */
    const filesToUpload = useState({
        resume: null,
        state_driver_license: null,
    });

    /** State for EmergencyContact */
    const emergency_contact = useState({
        name: '',
        relationship: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone_number: '',
    });

    /** State for Job Details */
    const position = useState({
        id: '',
        description: '',
        category: '',
        notes_for_hr: '',
    })

    /** State required for marital status */
    const maritalInformation = useState({
        marital_status: '',
    });

    /** State required for homeAddress */
    const homeAddress = useState({
        street_address1: '',
        street_address2: '',
        city: '',
        state: '',
        zip: '',
        us_citizen: '',
    });

    /** State for Contact Information */
    const contactInformation = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        ssn: '',
        home_phone: '',
        cell_phone: '',
        agree_to_notifications: true,
        spouse_name: '',
        spouse_date_of_birth: new Date(),
        spouse_address: '',
        spouse_phone_number: '',
        dob: new Date(),
    });

    /** State for Job Category List*/
    const [JobCategories, setJobCategories] = useState([])

    const [snackBarMessage, setSnackBarMessage] = useState('');

    let applicationForm = {};

    const updateApplicationForm = (addedUpdates = {}) => {
        const [maritalInfo] = maritalInformation;
        const [emergency_contactInfo] = emergency_contact;
        const [positionObject] = position


        applicationForm = {
            ...contactInformation[0],
            ...homeAddress[0],
            ...maritalInfo,
            emergency_contact: emergency_contactInfo,
            position: positionObject,
            ...filesToUpload[0],
            ...addedUpdates[0],
        };

        console.log(applicationForm);
    }

    /**
   * Shows a snackbar / toast
   * @param {string} messageToShow - String message to toast
   * @returns {void}
   */
    const showSnackBar = (messageToShow) => {
        const snackbarTriggerEvent = new CustomEvent(
            'trigger-snackbar',
            {
                detail: {
                    messageToShow
                }
            }
        );

        window.dispatchEvent(snackbarTriggerEvent)
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

    /**
     * @param {string|number|Date} value - State Value 
     * @param {*} validator - Yup Validator
     * @returns {void} 
     */
    const verifyValidations = async (value, validator, args) => {
        try {
            return await validator.validate(value);
        } catch (exc) {
            let { message } = exc;

            const messageSnippet = message
                .split('_')
                .join(' ');

            message = `Enter ${messageSnippet} field(s) properly`

            showSnackBar(message);

            throw exc;
        }
    }

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
        buffers.timeouts.typing = setTimeout(propagateStateFormControlUpdate.bind(null, ...args), 0);
    }

    const propagateStateFormControlUpdate = (
        state,
        prop,
        $e,
        values,
    ) => {

        const [previousState, stateSetter] = state;

        values = values || {};

        let { title = 0 } = values;

        if (typeof title === 'string')
            title = title
                .split()
                .join('_')
                .toLowerCase();

        /** Date picker's event is the value that is set */
        if (!$e.target) {
            var value = $e;
        } else {
            var {
                target: { files, value, checked }
            } = $e;
        }

        const newValueToUse = files || title || value || checked;

        const stateToApply = {
            ...previousState,
            [prop]: newValueToUse
        };

        stateSetter(stateToApply);

        updateApplicationForm(stateToApply);

    }

    useEffect(async () => {
        let result = await hr.get_job_categories();
        if (result && result.httpStatus == 200) {
            result.data.map(row => {
                row.label = row.title;
                row.title = row.id
            })
            setJobCategories(result.data)
        }
        // window.scrollTo(0, 0);
    }, []);

    //   if(isMobile) {
    //     return (
    //         <MobileScreen />
    //     )
    //   }

    const removeHttpErrorListener = () => {
        window.removeEventListener('trigger-snackbar', ($e) => { });
    }

    /**
  * @param {*} applicantObject - Applicant data object for registration 
  * @returns {string|Error}
  */
    const validateApplicant = async (applicantObject) => {
        try {

            return await Imports
                .validators
                .registerApplicant
                .validate(applicantObject);

        } catch (exc) {
            let { message } = exc;

            const messageSnippet = message
                .split('_')
                .join(' ');

            message = `Enter ${messageSnippet} field(s) properly`

            showSnackBar(message);

            throw exc;
        }
    }

    const registerApplicant = async () => {
        try {

            const isValidApplicant = await validateApplicant(applicationForm);

            applicationForm.dob = applicationForm.dob.toString();
            /** Transformations */
            if (applicationForm.spouse_date_of_birth)
                applicationForm.spouse_date_of_birth = applicationForm.spouse_date_of_birth.toString();
            if (applicationForm.spouse_telephoneNumber)
                applicationForm.spouse_telephoneNumber = applicationForm.spouse_telephoneNumber.replace(/[^\d]/g, '');  
            if (applicationForm.cell_phone)
                applicationForm.cell_phone = applicationForm.cell_phone.replace(/[^\d]/g, '');  

                applicationForm.home_phone = applicationForm.home_phone.replace(/[^\d]/g, '');  
                applicationForm.emergency_contact.phone_number = applicationForm.emergency_contact.phone_number.replace(/[^\d]/g, '');  
            console.log(applicationForm);  
            const formDataToPush = new FormData();

            Object.keys(applicationForm)
                .forEach(key => {

                    const currentField = applicationForm[key];

                    const pushField = typeof currentField !== 'string'
                        ? (currentField instanceof FileList)
                            ? currentField[0]
                            : JSON.stringify(currentField)
                        : currentField;

                    formDataToPush.append(
                        key,
                        pushField
                    );
                });

            console.log(formDataToPush);

            showSnackBar('Submission in Progress')


            let response = await users.register(
                formDataToPush,
                {
                    'Content-Type': 'multipart/form-data'
                },
            );


            localStorage.setItem('access_jwt', response?.token);

            showSnackBar('Form Submitted')
            setTimeout(()=> {history.push("/create-password");},3000);

            removeHttpErrorListener();
        } catch (exc) {
            // UX Indicator insertion
            const element = document.getElementById(exc?.path);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });

                const {
                    children: [child1, child2, ...rest]
                } = element;

                const elementToHighlight = child2 || child1;

                elementToHighlight.classList.add('incorrect-field');

                // 3000ms duration for animation
                setTimeout(() => {
                    elementToHighlight.classList.remove('incorrect-field');
                }, 3000);
            }

            console.log(exc);
            console.log(applicationForm)
        }
    }

    function formatPhoneNumber(value) {
        // if input value is falsy eg if the user deletes the input, then just return
        if (!value) return value;
      
        // clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, "");
      
        // phoneNumberLength is used to know when to apply our formatting for the phone number
        const phoneNumberLength = phoneNumber.length;
      
        // we need to return the value with no formatting if its less then four digits
        // this is to avoid weird behavior that occurs if you  format the area code to early
        if (phoneNumberLength < 4) return phoneNumber;
      
        // if phoneNumberLength is greater than 4 and less the 7 we start to return
        // the formatted number
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
      
        // finally, if the phoneNumberLength is greater then seven, we add the last
        // bit of formatting and return it.
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`;
      }

      const handlePhoneNumber = (state,prop,event) =>{
        let formattedNumber = formatPhoneNumber(event.target.value)
        event.target.value=formattedNumber
        setStateForFormControl(
            state,
            prop,
            event
        )
      }
    //   contactInformation,
    //   'home_phone',
    //   event,
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
                                        <TextField id="first_name" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'first_name',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={4} className="mt30 pl20 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Middle Name
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Optional" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'middle_name',
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
                                                    'last_name',
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
                                                    'email',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6} className="pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            SSN
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="(Enter 9 digit ssn)" variant="outlined" className="w100p"
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
                                <Grid xs={12} container
                                    className="LRM40 mt30"
                                    id="home_phone">
                                    <Grid xs={6} className="pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Phone Number
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="(123) 123-1231" variant="outlined" className="w100p"
                                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                            onChange={
                                                (e)=>handlePhoneNumber(contactInformation,'home_phone',e)
                                            }
                                            onBlur={
                                                verifyValidations
                                                    .bind(
                                                        null,
                                                        contactInformation[0].home_phone,
                                                        Imports.home_phone
                                                    )
                                            }
                                        />
                                    </Grid>
                                    <Grid xs={6}
                                        className="pl20"
                                        id="cell_phone">
                                        <Grid xs={12} className="mbold mb14">
                                            Cell Phone (Optional) 
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="(123) 123-1231" variant="outlined" className="w100p"
                                            onChange={
                                                (e)=>handlePhoneNumber(contactInformation,'cell_phone',e)
                                            } />
                                    </Grid>
                                    <Grid xs={6} className='mt30 pr20'>
                                        <Grid xs={12} className="mbold mb14">
                                            Date of Birth
                                        </Grid>
                                        <DatePicker
                                            onChange={($e) => setStateForFormControl(
                                                contactInformation,
                                                'dob',
                                                $e,
                                            )}
                                            value={
                                                contactInformation[0].dob
                                            }
                                            id="dob"
                                            className="datePickerReact w100p bg-white react-date-picker"
                                        />
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
                                                'agree_to_notifications',
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
                                    <Grid xs={6}
                                        className="mt30 pr20"
                                        id="street_address1">
                                        <Grid xs={12} className="mbold mb14">
                                            Street Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'street_address1',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={6}
                                        className="mt30 pl20"
                                        id="street_address2">
                                        <Grid xs={12} className="mbold mb14">
                                            Street Address 2 (Optional) 
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'street_address2',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ----------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={4}
                                        className="mt30 pr20"
                                        id="city">
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
                                    <Grid xs={4}
                                        className="mt30 pl20 pr20"
                                        id="state">
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
                                    <Grid xs={4}
                                        id="zip"
                                        className="mt30 pl20">
                                        <Grid xs={12} className="mbold mb14">
                                            Zip
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onBlur={
                                                verifyValidations
                                                    .bind(
                                                        null,
                                                        homeAddress[0].zip,
                                                        Imports.zip
                                                    )
                                            }
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    homeAddress,
                                                    'zip',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                    <Grid xs={12}
                                        id="us_citizen"
                                        className="mt30">
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
                                                    'us_citizen',
                                                    $e,
                                                    values
                                                )
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6}
                                        id="marital_status"
                                        className="mt30 pr20">
                                        <Grid xs={12} className="mbold mb14">
                                            Marital Status
                                        </Grid>
                                        <Autocomplete
                                            className="w100p"
                                            options={MaritalStatus}
                                            getOptionLabel={(option) => option.title}
                                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                            onChange={
                                                ($e, values) => setStateForFormControl(
                                                    maritalInformation,
                                                    'marital_status',
                                                    $e,
                                                    values
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid xs={6} className={
                                        maritalInformation[0].marital_status === 'married'
                                            ? 'mt30 pl20'
                                            : 'd-none'
                                    }>
                                        <Grid xs={12} className="mbold mb14">
                                            Name of Spouse
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'spouse_name',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={6} className={
                                        maritalInformation[0].marital_status === 'married'
                                            ? 'mt30 pr20 d-flex flex-column'
                                            : 'd-none'
                                    }>
                                        <Grid xs={12} className="mbold m-0">
                                            Spouse's Date of Birth
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            className="d-flex">
                                            <DatePicker
                                                onChange={($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'spouse_date_of_birth',
                                                    $e,
                                                )}
                                                value={
                                                    contactInformation[0].spouse_date_of_birth
                                                }
                                                id="spouse-dob"
                                                className="datePickerReact w100p bg-white react-date-picker align-self-stretch"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={6} className={
                                        maritalInformation[0].marital_status === 'married'
                                            ? 'mt30 pl20'
                                            : 'd-none'
                                    }>
                                        <Grid xs={12} className="mbold mb14">
                                            Spouse's Address
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="Type Here" variant="outlined" className="w100p"
                                            onChange={
                                                ($e) => setStateForFormControl(
                                                    contactInformation,
                                                    'spouse_address',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={12} className={
                                        maritalInformation[0].marital_status === 'married'
                                            ? 'mt30'
                                            : 'd-none'
                                    }>
                                        <Grid xs={12} className="mbold mb14">
                                            Spouse's Telephone Number
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="(123) 123-1231" variant="outlined" className="w100p"
                                            onBlur={
                                                verifyValidations
                                                    .bind(
                                                        null,
                                                        contactInformation[0].spouse_telephoneNumber,
                                                        Imports.spouse_phone_number
                                                    )
                                            }
                                            onChange={
                                                (e)=>handlePhoneNumber(contactInformation,'spouse_telephoneNumber',e)
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
                                                    emergency_contact,
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
                                                    emergency_contact,
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
                                                    emergency_contact,
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
                                                    emergency_contact,
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
                                                    emergency_contact,
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
                                                    emergency_contact,
                                                    'zip',
                                                    $e,
                                                )
                                            } />
                                    </Grid>
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40">
                                    <Grid xs={12}
                                        className="mt30"
                                        id="phone_number">
                                        <Grid xs={12} className="mbold mb14">
                                            Telephone Number
                                        </Grid>
                                        <TextField id="outlined-basic" placeholder="(123) 123-1231" variant="outlined" className="w100p"
                                            onChange={
                                                (e)=>{ handlePhoneNumber(emergency_contact,'phone_number',e) }
                                            }
                                            onBlur={
                                                verifyValidations
                                                    .bind(
                                                        null,
                                                        emergency_contact[0].phone_number,
                                                        Imports.emergency_phone_number
                                                    )
                                            }
                                        />
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
                                                    position,
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
                                                    position,
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
                                                    getOptionLabel={(option) => option.label}
                                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                                    onChange={
                                                        ($e, values) =>
                                                            setStateForFormControl(
                                                                position,
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
                                                Notes for HR (Optional) 
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <TextareaAutosize className="w100p" rowsMin={6} placeholder="Comment here"
                                                    onChange={
                                                        ($e) => setStateForFormControl(
                                                            position,
                                                            'notes_for_hr',
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
                                                <Grid className={
                                                    filesToUpload[0].resume
                                                        ? 'd-flex p-3 m-0 justify-content-center flex-column align-items-center'
                                                        : 'd-none'
                                                }>
                                                    <Grid style = {{display:'flex'}}>
                                                    <Grid className="task-done"></Grid>
                                                    <button
                                                        className="dustbinBtn"
                                                        onClick={
                                                            (e) =>{ 
                                                            e.target.value=''
                                                            setStateForFormControl(
                                                                filesToUpload,
                                                                'resume',
                                                                e,
                                                            )}
                                                        }></button>
                                                    </Grid>
                                                    <Typography>
                                                        Resume has been uploaded
                                                    </Typography>
                                                </Grid>
                                                <Grid xs={12} className={
                                                    filesToUpload[0].resume
                                                        ? 'd-none'
                                                        : 'text-center'
                                                }>
                                                    <label for="ResumeSelect" className="labelButton">Select Files</label>
                                                    <input
                                                        type="file"
                                                        id="ResumeSelect"
                                                        className="hide"
                                                        accept=".pdf"
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
                                </Grid>

                                {/* ---------- */}
                                <Grid xs={12} container>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Social Security Card
                                            </Grid>
                                            <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">
                                                <Grid className={
                                                    filesToUpload[0].state_driver_license
                                                        ? 'd-flex p-3 m-0 justify-content-center flex-column align-items-center'
                                                        : 'd-none'
                                                }>
                                                    <Grid style = {{display:'flex'}}>
                                                    <Grid className="task-done"></Grid>
                                                    <button
                                                        className="dustbinBtn"
                                                        onClick={
                                                            (e) =>{ 
                                                            e.target.value=''
                                                            setStateForFormControl(
                                                                filesToUpload,
                                                                'state_driver_license',
                                                                e,
                                                            )}
                                                        }></button>
                                                    </Grid>
                                                    <Typography>
                                                        State Driver's License has been uploaded
                                                    </Typography>
                                                </Grid>
                                                <Grid xs={12} className={
                                                    filesToUpload[0].state_driver_license
                                                        ? 'd-none'
                                                        : 'text-center'
                                                }>
                                                    <label for="licenseSelect" className="labelButton">Select Files</label>
                                                    <input
                                                        type="file"
                                                        id="licenseSelect"
                                                        className="hide"
                                                        accept=".pdf,.jpeg,"
                                                        onChange={
                                                            $e => setStateForFormControl(
                                                                filesToUpload,
                                                                'state_driver_license',
                                                                $e
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} className="mt50">
                                <Grid xs={12} md={8} lg={6}>
                                    <button onClick={registerApplicant} className="LinkButton" >Create Password & Account</button>
                                    <Snackbar
                                    ></Snackbar>
                                    {/* <Link to="/create-password" className="LinkButton">Create Password & Account</Link> */}
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
