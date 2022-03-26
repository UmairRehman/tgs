import React, { useState, useEffect } from "react";
import {
    Grid,
    Checkbox,
    TextareaAutosize,
    Typography,
    Button,
    List,
    ListItem,
    FormControl
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

import { useHistory } from "react-router-dom";

import DatePicker from 'react-date-picker';

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


/** Local dependencies and services */
import Services from '../../../Services';

import Snackbar from '../../../Components/Snackbar';


const {
    users,
    Storage,
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

const Follicle = ['No', 'Yes'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];

const workShifts = [
    'Night',
    'Day',
    'Both',
    // '9:00 - 18:00',
    // '10:00 - 19:00',
    // '18:00 - 03:00',
    // '19:00 - 04:00',
]


const OJE = ['Yes', 'No'];

const Questionnaire = () => {
    const history = useHistory();

    const storage = new Storage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //   if(isMobile) {
    //     return (
    //         <MobileScreen />
    //     )
    //   }

    const [hairTest, setHairTest] = useState('')
    const [drugTest, setDrugTest] = useState('')

    const [prison, setPrison] = useState('')

    const [accommodation, setAccommodation] = useState('');

    const [comment, setComment] = useState('');

    const [commentDisabled, disableComment] = useState(true);

    const [availability, setAvailability] = useState(new Date())

    const [language, setLanguage] = useState('')

    const [bilingual, setBilingual] = useState('')

    const [bilingualLanguage, setBilingualLanguage] = useState('')

    const [bilingualLanguagesDisabled, disableBilingualLanguages] = useState(true);

    const [overTime, setOverTime] = useState('')

    const [shift, setShitf] = useState('')

    const [holidays, setHolidays] = useState('')

    const [workWeekends, setWorkWeekends] = useState('')

    const [travels, setTravels] = useState('')

    const [relocate, setRelocate] = useState('')

    const [tgsComment, setTgsComment] = useState('')

    const [workBefore, setWorkBefore] = useState('');

    const [saveAndContinueDisabled, disableSaveAndContinue] = useState(true);


    const optionsMap = {
        yes: true,
        no: false,
    }

    const getRelativeBooleanFromOptionsMap = (stringToMap) => {
        return optionsMap[stringToMap.toLowerCase()];
    }

    useEffect(
        () => {
            const data = [
                hairTest,
                drugTest,
                prison,
                accommodation,
                availability,
                language,
                bilingual,
                overTime,
                shift,
                holidays,
                workWeekends,
                travels,
                relocate,
                workBefore,
            ];

            let isCompleteForm = data
                .reduce((accumulated, currentValue) => {
                    return accumulated && !!currentValue;
                }, true);

            if (!isCompleteForm)
                return disableSaveAndContinue(true);

            // Check for Accomadation commemt */
            // if (!accommodation && !comment)
            //     return disableSaveAndContinue(true);

            // Check for bilingual language if any
            // if (bilingual && !bilingualLanguage)
            //     return disableSaveAndContinue(true);

            disableSaveAndContinue(false);
        },
        [
            hairTest,
            drugTest,
            prison,
            accommodation,
            availability,
            language,
            bilingual,
            overTime,
            shift,
            holidays,
            workWeekends,
            travels,
            relocate,
            tgsComment,
            workBefore,
        ]
    );


    async function onSubmit() {
        console.log("error")
        let data = {
            hairTest,
            drugTest,
            prison,
            accommodation,
            availability,
            language,
            bilingual,
            overTime,
            shift,
            holidays,
            workWeekends,
            travels,
            relocate,
            tgsComment,
            workBefore,
        };


        if (accommodation == 'No') {
            if (!data.accommodation && !comment)
                return showSnackBar('PLease fill in comments for accomodation');
        }

        if (bilingual == 'Yes') {
            if (data.bilingual && !bilingualLanguage)
                return showSnackBar('PLease provide languages for in field bilingal check');
        }




        /** RAPID - FIX | Boolean transforamtion */
        for (let key in data) {
            const attribute = data[key];
            let booleanOption;

            if (!attribute) {
                return showSnackBar('Please fill in all fields');
                break;
            }

            if (typeof attribute === 'string') {
                booleanOption = getRelativeBooleanFromOptionsMap(attribute);
            }

            data[key] = booleanOption === undefined
                ? attribute
                : booleanOption;

        }

        // Unrequired and sequentially checked (dependent) fields
        data = {
            ...data,
            comment,
            bilingualLanguage
        }

        try {
            const response = await users.postStep1(data);

            const user_profile = JSON.parse(storage.get('user_profile'));

            history.push({
                pathname: '/documents',
                state: {
                    approved: false,
                    step: 1,
                    applyToStorage: {
                        user_profile: {
                            ...user_profile,
                            EmployeeStatusId: 4,
                        }
                    }
                }
            });
        } catch (exc) {
            console.log(exc);
        }
    }

    useEffect(() => {

    }, [])

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

        window.dispatchEvent(snackbarTriggerEvent);
    }


    return (
        <Grid container xs={12} className="Liq-Container HRPortal">
            <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
                <LeftControl />
            </Grid>
            <Grid xs={12} md={10} container justify="center" className="PageContent">
                <Grid className="PagesFrame">
                    <PageHeader />
                    <Grid id="PageTitle">Employment Questionnaire</Grid>
                    {/* Page Start */}
                    <Grid xs={12} className="ContentPage FormTableArea">
                        <Grid xs={12} className="StepsLine">
                            <List>
                                <ListItem className="StepComplete">Step 1</ListItem>
                                <ListItem>Step 2</ListItem>
                                <ListItem>Step 3</ListItem>
                                <ListItem>Step 4</ListItem>
                            </List>
                        </Grid>
                        <Grid xs={12}>
                            <Grid xs={12} md={8} lg={6}>
                                <Typography variant="h1" component="h2" className="bold f16">
                                    Are you able to
                                </Typography>

                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Pass a hair follicle test?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setHairTest(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Pass an oral alcohol & drug test?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setDrugTest(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Have you ever been convicted of a felony or a misdemeanor which resulted in imprisonment within the last seven years?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setPrison(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Are you able to perform essential functions of the job for which you are applying, with or without a reasonable accommodation?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setAccommodation(newValues)}
                                        />
                                    </Grid>
                                </Grid>

                                {accommodation == 'No' ?
                                    < Grid xs={12} container className="LRM40 mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mb14">
                                                If no, Please Explain:
                                            </Grid>
                                            <FormControl>

                                                <TextField
                                                    required
                                                    id="outlined-basic"
                                                    onChange={(e) => setComment(e.target.value)}
                                                    placeholder="Comment here"
                                                    variant="outlined"
                                                    className="w100p"
                                                    disabled={
                                                        !accommodation || getRelativeBooleanFromOptionsMap(accommodation)
                                                    } />
                                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                                    Please leave this field empty if you have no comments
                                                </Typography>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    : null}

                                {/* ---------- */}




                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        When would you be available to begin work?
                                    </Grid>
                                    <Grid xs={3}>
                                        <DatePicker
                                            onChange={($e) => setAvailability($e)}
                                            value={availability}
                                            id="spouse-dob"
                                            className="datePickerReact w100p bg-white react-date-picker p-2"
                                        />
                                        {/* <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setAvailability(newValues)}

                                        /> */}
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Do you speak English?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setLanguage(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Are you bilingual?
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setBilingual(newValues)}
                                        />
                                    </Grid>
                                </Grid>

                                {bilingual == 'Yes' ?
                                    <Grid xs={12} container className="LRM40 mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mb14">
                                                If yes, What lanuage:
                                            </Grid>
                                            <TextField
                                                id="outlined-basic"
                                                onChange={(e) => setBilingualLanguage(e.target.value)}
                                                placeholder="Comment here"
                                                variant="outlined"
                                                className="w100p"
                                                disabled={
                                                    !bilingual || !getRelativeBooleanFromOptionsMap(bilingual)
                                                } />
                                        </Grid>
                                    </Grid>
                                    : null}


                                {/* ---------- */}


                                {/* --------- */}
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    If required, would you be willing to
                                </Typography>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Work overtime
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setOverTime(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Work Shift
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={workShifts}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setShitf(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Work holidays
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setHolidays(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Work weekends
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setWorkWeekends(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Travel
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setTravels(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Relocate
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setRelocate(newValues)}
                                        />
                                    </Grid>
                                </Grid>

                                {/* --------- */}
                                <Typography variant="h1" component="h2" className="bold f16 mt40">
                                    Generals questions
                                </Typography>

                                {/* ---------- */}
                                <Grid xs={12} container className="LRM40 mt30">
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mb14">
                                            How did you hear about TGS
                                        </Grid>
                                        <TextField
                                            id="outlined-basic"
                                            onChange={(e) => setTgsComment(e.target.value)}
                                            placeholder="Type here"
                                            variant="outlined"
                                            className="w100p"
                                        />
                                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                            Please leave this field empty if you have no comments
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* --------- */}
                                <Grid xs={12} container justify="space-between" className="mt30">
                                    <Grid xs={9} container alignContent="center">
                                        Have you worked for TGS before
                                    </Grid>
                                    <Grid xs={3}>
                                        <Autocomplete
                                            id="controllable-states-demo"
                                            options={Follicle}
                                            className="w100p"
                                            renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Select" />}
                                            onChange={(events, newValues) => setWorkBefore(newValues)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} className="mt50">
                                <Grid xs={12} md={8} lg={6} container justify="space-between">
                                    <Link to="/application" className="LinkButtonBack">Back</Link>
                                    <Snackbar
                                    ></Snackbar>
                                    <Button
                                        // to="/submission" 
                                        className="LinkButton"
                                        onClick={onSubmit}
                                        disabled={saveAndContinueDisabled}
                                    >
                                        Save & Continue
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Page Start End */}
                </Grid>
            </Grid>
        </Grid >
    );
}

export default Questionnaire;
