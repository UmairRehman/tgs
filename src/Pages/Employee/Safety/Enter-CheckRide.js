import React, { useState, useEffect, useRef } from "react";


import {
    Grid,
    Button,
   
    TextareaAutosize,
    Typography
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Switch from '@mui/material/Switch';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

import Snackbar from '../../../Components/Snackbar';
import { helpers } from "../../../helpers";
import MobileScreen from './Mobile/Enter-RailRoad-Add';
import { isMobile } from 'react-device-detect';


/** Local deoendencies & Libraries */
import Services from '../../../Services';
const {
    employee,
    Storage
} = Services;

const {
    showSnackBar,
} = helpers;

var moment = require('moment-timezone')

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const EnterCheckRide = () => {
    let history = useHistory();
    const storage = new Storage();

    //loader states
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [flag, setFlag] = useState(true)


    const [cride, setCride] = useState({
        assisting: [],
        EngineerId: '',
        locomotiveConsist: '',
        TCLoads: '',
        TCEmpties: '',
        TCTotalTonage: '',
        TMTraveled: '',
        LLOA: '',
        LLOC: '',
        ABOA: '',
        ABOB: '',
        ABOC: '',
        ABOD: '',
        DBOA: '',
        DBOB: '',
        DBOC: '',
        IBA: '',
        IBB: '',
        MA: '',
        MB: '',
        RTA: '',
        RTB: '',
        RTC: '',
        DPA: '',
        DPB: '',
        DPC: '',
        DICS: '',
        LMA: '',
        LMB: '',
        LMC: '',
        LMD: '',
        LME: '',
        LMF: '',
        ORA: '',
        ORB: '',
        ORC: '',
        ORD: '',
        ORE: '',
        ORG: '',
        ORF: '',
        ORG: '',
        ORH: '',
        ORI: '',
        ORJ: '',
        THA: '',
        THB: '',
        THC: '',
        THD: '',
        THE: '',
        THF: '',
        THG: '',
        THH: '',
        THI: '',
        THJ: '',
        THK: '',
        THL: '',
        THM: '',
        THN: '',
        THO: '',
        THE: '',
        THF: '',
        THG: '',
        THH: '',
        THI: '',
   
        THK: '',
        THL: '',
        THM: '',
        THN: '',
        THP: '',
        Comments: '',
        date: '',
        time: '',
        IBB: '',
        THP: '',

    })

    const [railRoad, setRailRoad] = useState({
        //     primary: '', //1
        //     engineerId: '',
        //     oje: false, //2
        //     ojeComment: '', //3
        // assisting: [], //4
        //     joinTest: false, //5
        //     assisting_comment: '', //6
        //     department: '', //7
        //     site: '', //8
        //     GPS: '', //9
        //     date: moment(new Date()).format('YY-MM-DD'), //10
        //     // date : new Date(), //10
        //     time: moment(new Date()).format('HH:mm:ss a'), //11
        //     jobId: '', //12
        //     crewMembers: [
        //         { name: '', position: '', image: '' }
        //     ] //13
    })


    const handleSubmitDataRide = (event, value, key) => {

        switch (key) {
            case 2:
                setCride({ ...cride, EngineerId: value.id })
            
                break;

            case 3:
                setCride({ ...cride, locomotiveConsist: event.target.value })
                break;

            case 4:
                setCride({ ...cride, TCLoads: value })
                break;

            case 5:
                setCride({ ...cride, TCEmpties: value })
                break;

            case 6:
                setCride({ ...cride, TCTotalTonage: event.target.value })
                break;

            case 7:
                setCride({ ...cride, TMTraveled: value })
                break;

            case 8:
                setCride({ ...cride, LLOA: value })
                break;

            case 9:
                setCride({ ...cride, LLOB: event.target.value })
                break;

            case 10:
                setCride({ ...cride, LLOC: event.target.value })
                break;
            case 11:
                setCride({ ...cride, ABOA: event.target.value })
                break;
            case 12:
                setCride({ ...cride, ABOB: event.target.value })
                break;
            case 13:
                setCride({ ...cride, ABOC: event.target.value })
                break;
            case 14:
                setCride({ ...cride, ABOD: event.target.value })
                break;
            case 15:
                setCride({ ...cride, DBOA: event.target.value })
                break;
            case 16:
                setCride({ ...cride, DBOB: event.target.value })
                break;
            case 17:
                setCride({ ...cride, DBOC: event.target.value })
                break;
            case 18:
                setCride({ ...cride, IBA: event.target.value })
                break;
            case 19:
                setCride({ ...cride, IBB: event.target.value })
                break;
            case 20:
                setCride({ ...cride, MA: event.target.value })
                break;

            case 21:
                setCride({ ...cride, MB: event.target.value })
                break;


            case 22:
                setCride({ ...cride, RTA: event.target.value })
                break;
            case 23:
                setCride({ ...cride, RTB: event.target.value })
                break;
            case 24:
                setCride({ ...cride, RTC: event.target.value })
                break;
            case 25:
                setCride({ ...cride, DPA: event.target.value })
                break;
            case 26:
                setCride({ ...cride, DPB: event.target.value })
                break;
            case 27:
                setCride({ ...cride, DPC: event.target.value })
                break;
            case 28:
                setCride({ ...cride, DICS: event.target.value })
                break;
            case 29:
                setCride({ ...cride, LMA: event.target.value })
                break;
            case 30:
                setCride({ ...cride, LMB: event.target.value })
                break;
            case 31:
                setCride({ ...cride, LMC: event.target.value })
                break;
            case 32:
                setCride({ ...cride, LMD: event.target.value })
                break;
            case 33:
                setCride({ ...cride, LME: event.target.value })
                break;

            case 34:
                setCride({ ...cride, LMF: event.target.value })
                break;

            case 35:
                setCride({ ...cride, ORA: event.target.value })
                break;

            case 36:
                setCride({ ...cride, ORB: event.target.value })
                break;

            case 37:
                setCride({ ...cride, ORC: event.target.value })
                break;
            case 38:
                setCride({ ...cride, ORD: event.target.value })
                break;
            case 39:
                setCride({ ...cride, ORE: event.target.value })
                break;
            case 40:
                setCride({ ...cride, ORF: event.target.value })
                break;
            case 41:
                setCride({ ...cride, ORH: event.target.value })
                break;
            case 42:
                setCride({ ...cride, ORI: event.target.value })
                break;
            case 43:
                setCride({ ...cride, ORJ: event.target.value })
                break;
            case 44:
                setCride({ ...cride, THA: event.target.value })
                break;
            case 45:
                setCride({ ...cride, THB: event.target.value })
                break;


            case 46:
                setCride({ ...cride, THC: event.target.value })
                break;

            case 47:
                setCride({ ...cride, THD: event.target.value })
                break;

            case 48:
                setCride({ ...cride, THE: event.target.value })
                break;

            case 49:
                setCride({ ...cride, THF: event.target.value })
                break;

            case 50:
                setCride({ ...cride, THG: event.target.value })
                break;

            case 51:
                setCride({ ...cride, THH: event.target.value })
                break;

            case 52:
                setCride({ ...cride, THI: event.target.value })
                break;

            case 53:
                setCride({ ...cride, THK: event.target.value })
                break;

            case 54:
                setCride({ ...cride, THL: event.target.value })
                break;

            case 55:
                setCride({ ...cride, THM: event.target.value })
                break;

            case 56:
                setCride({ ...cride, THN: event.target.value })
                break;
            case 57:
                setCride({ ...cride, THO: event.target.value })
                break;
            case 58:
                setCride({ ...cride, THP: event.target.value })
                break;

            case 59:
                setCride({ ...cride, Comments: event.target.value })
                break;





            case 60:
                setCride({ ...cride, date: value })
                break;

            case 61:
                setCride({ ...cride, time: value })
                break;



            default:
                break;
        }

    };

    const resetData = () => {
        // document.getElementById('ojeComment').value = ''
        // document.getElementById('assisting_comment').value = ''
        // document.getElementById('GPS').value = ''
        // document.getElementById('jobId').value = ''

        // setCride({
          
        //     oje: false, //2
        //     ojeComment: '', //3
        //     assisting: [], //4
        //     joinTest: false, //5
        //     assisting_comment: '', //6
        //     department: '', //7
        //     site: '', //8
        //     GPS: '', //9
        //     date: moment(new Date()).format('YY-MM-DD'), //10
        //     // date : new Date(), //10
        //     time: moment(new Date()).format('HH:mm:ss a'), //11
        //     jobId: '', //12
        //     crewMembers: [
        //         { name: '', position: '', image: '' }
        //     ] //13
        // })

    }
    const apiBody = async () => {
        let EngineerId = cride.EngineerId
        let locomotiveConsist = +(document.getElementById('locomotiveConsist').value)
        let TCLoads = +(document.getElementById('TCLoads').value)
        let TCEmpties = +(document.getElementById('TCEmpties').value)
        let TCTotalTonage = +(document.getElementById('TCTotalTonage').value)
        let TMTraveled = +(document.getElementById('TMTraveled').value)
        let LLOA = document.getElementById('LLOA').value
        let LLOB = document.getElementById('LLOB').value
        let LLOC = document.getElementById('LLOC').value
        let ABOA = document.getElementById('ABOA').value
        let ABOB = document.getElementById('ABOB').value
        let ABOC = document.getElementById('ABOC').value
        let ABOD = document.getElementById('ABOD').value
        let DBOA = document.getElementById('DBOA').value
        let DBOB = document.getElementById('DBOB').value
        let DBOC = document.getElementById('DBOC').value
        let IBA = document.getElementById('IBA').value
        let IBB = document.getElementById('IBB').value
        let MA = document.getElementById('MA').value
        let MB = document.getElementById('MB').value
        let RTA = document.getElementById('RTA').value
        let RTB = document.getElementById('RTB').value
        let RTC = document.getElementById('RTC').value
        let DPA = document.getElementById('DPA').value
        let DPB = document.getElementById('DPB').value
        let DPC = document.getElementById('DPC').value
        let DICS = document.getElementById('DICS').value
        let LMA = document.getElementById('LMA').value
        let LMB = document.getElementById('LMB').value
        let LMC = document.getElementById('LMC').value
        let LMD = document.getElementById('LMD').value
        let LME = document.getElementById('LME').value
        let LMF = document.getElementById('LMF').value
        let ORA = document.getElementById('ORA').value
        let ORB = document.getElementById('ORB').value
        let ORC = document.getElementById('ORC').value
        let ORD = document.getElementById('ORD').value
        let ORE = document.getElementById('ORE').value
        let ORF = document.getElementById('ORF').value
        let ORG = document.getElementById('ORG').value
        let ORH = document.getElementById('ORH').value
        let ORI = document.getElementById('ORI').value
        let ORJ = document.getElementById('ORJ').value
        let THA = document.getElementById('THA').value
        let THB = document.getElementById('THB').value
        let THC = document.getElementById('THC').value
        let THD = document.getElementById('THD').value
        let THE = document.getElementById('THE').value
        let THF = document.getElementById('THF').value
        let THG = document.getElementById('THG').value
        let THH = document.getElementById('THH').value
        let THI = document.getElementById('THI').value
        let THJ = document.getElementById('THJ').value
        let THK = document.getElementById('THK').value
        let THL = document.getElementById('THL').value
        let THM = document.getElementById('THM').value
        let THN = document.getElementById('THN').value
        let THO = document.getElementById('THO').value
        let THP = document.getElementById('THP').value
        let Comments = document.getElementById('Comments').value
        let date = document.getElementById('date').value
        let time = document.getElementById('time').value


        return (
            {
                EngineerId, locomotiveConsist, TCLoads, TCEmpties, TCTotalTonage, TMTraveled,
                LLOA, LLOB, LLOC, ABOA, ABOB, ABOC, ABOD, DBOA, DBOB, DBOC, IBA, IBB, MA, MB, RTA, RTB,
                RTC, DPA, DPB, DPC, DICS, LMA,LMB, LMC, LMD, LME, LMF, ORA, ORB, ORC,
                ORD, ORE, ORF, ORH, ORI,ORG, ORJ, THA, THB, THC, THD, THE, THF, THG, THH, THI,THJ,
                THK, THL, THM, THN, THO, THP, Comments, date, time
            }
        );

    }

    const submitBtn = async (event) => {

        event.preventDefault();
        if (!loading) {
            setSuccess(false);
            setLoading(true);


            try {
                let data = await apiBody()
                console.log(data)
                let result = await employee.checkride_table_submit(data)
                if (result?.httpStatus == 200) {
                   console.log('result', result);

                    setSuccess(true);
                    setLoading(false);
                    resetData()

                    // setTimout used to show , snackbar first and then route back to listing page

                    setTimeout(() => {
                        history.push('/safety-testing')
                        console.log('push to safety');
                    }, 1500);
                    return showSnackBar('Form Successfully Submitted');
                }

            } catch (error) {
                setSuccess(false);
                setLoading(false);
                console.log(error);
                return showSnackBar(`Error Occured while submitting form: ${error}`);
            }
        }
        return false;
    };

    //add crew
    // const addCrew = () => {
    //     let { crewMembers } = railRoad
    //     crewMembers.push({ name: '', position: '', image: '' })
    //     setRailRoad({ ...railRoad, crewMembers });
    // };

    // //remove crew
    // const removeCrew = index => {
    //     const { crewMembers } = railRoad;
    //     crewMembers.splice(index, 1);
    //     setRailRoad({ ...railRoad, crewMembers });
    // };

    // handle input change
    // const handleInputChange = async (name, value, index) => {

    //     console.log(name, value, index);
    //     const { crewMembers } = CRIDE;
    //     if (name == 'image') {
    //         value = await getBase64(value)
    //         console.log("converted base 64", value);
    //     }
    //     crewMembers[index][name] = value;
    //     setRailRoad({ ...railRoad, crewMembers });
    // };

    //convert image into base64

    const getBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    // const getLocation = async () => {

    //     function success(position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;

    //         console.log('latitude', latitude);
    //         console.log('longitude', longitude);
    //         let gps = `${longitude},${latitude}`
    //         // document.getElementById('GPS').value=gps
    //         setRailRoad({ ...railRoad, GPS: gps })

    //     }

    //     function error(error) {

    //         console.log('Unable to retrieve your location', error);
    //         setFlag(false)
    //         return showSnackBar(`Unable to retrieve your location: Kindly Enter Lat Long `);
    //     }

    //     if (!navigator.geolocation) {
    //         console.log('Geolocation is not supported by your browser');
    //     } else {
    //         console.log('Locating…');
    //         navigator.geolocation.getCurrentPosition(success, error);
    //     }
    // }

    const [lists, setLists] = useState({
        currentUser: '',
        users: [],
        positions: [],
        departments: [],
        sites: [],
        crews: [],
        assistants: []

    })

    const setListData = async () => {
        let userList = await employee.checkride_table();
        if (userList?.httpStatus == 200) {
            userList = userList.data;
            userList.map(row => {
                row.name = `${row.firstName} ${row.lastName}`
            })
            // console.log(userList);
        }

        let assistingCrewList = await employee.get_crew_user_listing();
        if (assistingCrewList?.httpStatus == 200) {
            assistingCrewList = assistingCrewList.data.rows;
            assistingCrewList.map(row => {
                row.name = `${row.firstName} ${row.lastName}`
            })
            // console.log(assistingCrewList);
        }
        // let departmentList = await employee.get_department_listing()
        // if(departmentList.httpStatus==200){
        //   departmentList=departmentList.data;
        //   console.log(departmentList);
        // }

        // let jobCategoryList = await employee.get_job_category_listing()
        // if(jobCategoryList.httpStatus==200){
        //   jobCategoryList=jobCategoryList.data;
        //   console.log(jobCategoryList);
        // }

        let siteList = await employee.get_site_listing()
        if (siteList.httpStatus == 200) {
            siteList = siteList.data;
            // console.log(siteList);
        }
        // let jobCategoryList = [
        //     { id: "ENG", title: "Engineering" },
        //     { id: "COND", title: "Conductor" },
        //     { id: "BR1", title: "BR1" },
        //     { id: "OTHER", title: "OTHER" },
        // ]

        // let departmentList = [
        //     { id: 'All', title: 'All' },
        //     { id: 'Transportation', title: 'Transportation' },
        //     { id: 'Engineering', title: 'Engineering' },
        //     { id: 'Mechanical', title: 'Mechanical' }
        // ]

        let currentUser = JSON.parse(storage.get('user_profile'))
        
        setLists({ ...lists, users: userList, currentUser: currentUser, assistants: assistingCrewList, assistants: assistingCrewList })
        return true
    }
    useEffect(async () => {
        //listing function
        await setListData()

    }, []);
    // const [value, setValue] = useState(dummyData.OJE[0]);


    if (isMobile) {
        return (
            <MobileScreen />
        )
    }
    return (
        <Grid container xs={12} className="Liq-Container">
            <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
                <LeftControl />
            </Grid>
            <Grid xs={12} md={10} container justify="center" className="PageContent">
                <Grid className="PagesFrame">
                    <PageHeader />
                    <Grid id="PageTitle">Enter Check Ride</Grid>
                    {/* Page Start */}
                    <Grid xs={12} className="ContentPage FormTableArea">
                        <form style={{ width: '100%' }} onSubmit={submitBtn}>
                            {/* <Grid xs={12} container>
                                <Typography variant="h5" className="mbold f16" component="h6">
                                    Evaluators
                                </Typography>
                            </Grid> */}
                            <Grid xs={12} container>
                                <Grid xs={12} md={12} className="EvaluatorsTables pr40">
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Evaluators ID
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <TextField
                                                    required={true}
                                                    id="outlined-basic"
                                                    label="Comment here"
                                                    value={`${lists?.currentUser?.firstName} ${lists?.currentUser?.lastName}`}
                                                    disabled
                                                    variant="outlined"
                                                    className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>


                                        {<Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Engineer Id
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                {/* <Autocomplete
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
                                            /> */}
                                                <Autocomplete
                                                    className="w100p"
                                                    id="EngineerId"
                                                    // value={cride.assisting}
                                                    options={lists.assistants}
                                                    getOptionLabel={option => (option.name)}
                                                    onChange={(event, value) => { handleSubmitDataRide(event, value, 2) }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            // required={true} 
                                                            {...params} variant="outlined" placeholder="Assisting" />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>}
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Locomotive Consist
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="locomotiveConsist" type='number'
                                                InputProps={{
                                                    inputProps: { 
                                                        max: 100, min: 1 
                                                    }
                                                }}
                                                 label="" onChange={(event, value) => { handleSubmitDataRide(event, value, 3) }} variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist-Load
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="TCLoads"
                                                 type='number'
                                                 InputProps={{
                                                    inputProps: { 
                                                        max: 100, min: 1 
                                                    }
                                                }}
                                                 label="" variant="outlined" onChange={(event, value) => { handleSubmitDataRide(event, value, 4) }} className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist -Empties
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="TCEmpties" type='number' 
                                                InputProps={{
                                                    inputProps: { 
                                                        max: 100, min: 1 
                                                    }
                                                }}
                                                label="" variant="outlined" onChange={(event, value) => { handleSubmitDataRide(event, value, 5) }} className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist -Total Tonnage
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="TCTotalTonage" type='number'
                                                InputProps={{
                                                    inputProps: { 
                                                        max: 100, min: 1 
                                                    }
                                                }}
                                                label="" variant="outlined" onChange={(event, value) => { handleSubmitDataRide(event, value, 6) }} className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Total Miles Traveled
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="TMTraveled" type='number' 
                                                InputProps={{
                                                    inputProps: { 
                                                        max: 100, min: 1 
                                                    }
                                                }}
                                                label="" variant="outlined" onChange={(event, value) => { handleSubmitDataRide(event, value, 7) }} className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Light Locomotive Operation  – A) Brake Tests

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LLOA" value='YES' type="radio" name='LLOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 8) }} /> Yes
                                                <input id="LLOA" value='NO' type="radio" name='LLOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 8) }} /> No
                                                <input id="LLOA" value='N/A' type="radio" name='LLOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 8) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Light Locomotive Operation – B) Coupling Speed

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LLOB" value='YES' type="radio" name='LLOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 9) }} /> Yes
                                                <input id="LLOB" value='NO' type="radio" name='LLOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 9) }} /> No
                                                <input id="LLOB" value='N/A' type="radio" name='LLOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 9) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Light Locomotive Operation – C) Changing Ends

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LLOC" value='YES' type="radio" name='LLOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 10) }} /> Yes
                                                <input id="LLOC" value='NO' type="radio" name='LLOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 10) }} /> No
                                                <input id="LLOC" value='N/A' type="radio" name='LLOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 10) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-A) Brake Test

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ABOA" value='YES' type="radio" name='ABOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 11) }} /> Yes
                                                <input id="ABOA" value='NO' type="radio" name='ABOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 11) }} /> No
                                                <input id="ABOA" value='N/A' type="radio" name='ABOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 11) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-B) Total Reduction

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ABOB" value='YES' type="radio" name='ABOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 12) }} /> Yes
                                                <input id="ABOB" value='NO' type="radio" name='ABOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 12) }} /> No
                                                <input id="ABOB" value='N/A' type="radio" name='ABOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 12) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>





                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-C) Release Procedure

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ABOC" value='YES' type="radio" name='ABOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 13) }} /> Yes
                                                <input id="ABOC" value='NO' type="radio" name='ABOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 13) }} /> No
                                                <input id="ABOC" value='N/A' type="radio" name='ABOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 13) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-D) Independent Release

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ABOD" value='YES' type="radio" name='ABOD' onChange={(event, value) => { handleSubmitDataRide(event, value, 14) }} /> Yes
                                                <input id="ABOD" value='NO' type="radio" name='ABOD' onChange={(event, value) => { handleSubmitDataRide(event, value, 14) }} /> No
                                                <input id="ABOD" value='N/A' type="radio" name='ABOD' onChange={(event, value) => { handleSubmitDataRide(event, value, 14) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-A) Time Delay

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DBOA" value='YES' type="radio" name='DBOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 15) }} /> Yes
                                                <input id="DBOA" value='NO' type="radio" name='DBOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 15) }} /> No
                                                <input id="DBOA" value='N/A' type="radio" name='DBOA' onChange={(event, value) => { handleSubmitDataRide(event, value, 15) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-B) Application Rate (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DBOB" value='YES' type="radio" name='DBOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 16) }} /> Yes
                                                <input id="DBOB" value='NO' type="radio" name='DBOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 16) }} /> No
                                                <input id="DBOB" value='N/A' type="radio" name='DBOB' onChange={(event, value) => { handleSubmitDataRide(event, value, 16) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-C) Release Rate (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DBOC" value='YES' type="radio" name='DBOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 17) }} /> Yes
                                                <input id="DBOC" value='NO' type="radio" name='DBOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 17) }} /> No
                                                <input id="DBOC" value='N/A' type="radio" name='DBOC' onChange={(event, value) => { handleSubmitDataRide(event, value, 17) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Independent Brake-A) Application (1 pt)


                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="IBA" value='YES' type="radio" name='IBA' onChange={(event, value) => { handleSubmitDataRide(event, value, 18) }} /> Yes
                                                <input id="IBA" value='NO' type="radio" name='IBA' onChange={(event, value) => { handleSubmitDataRide(event, value, 18) }} /> No
                                                <input id="IBA" value='N/A' type="radio" name='IBA' onChange={(event, value) => { handleSubmitDataRide(event, value, 18) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Independent Brake-B) Release (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="IBB" value='YES' type="radio" name='IBB' onChange={(event, value) => { handleSubmitDataRide(event, value, 19) }} /> Yes
                                                <input id="IBB" value='NO' type="radio" name='IBB' onChange={(event, value) => { handleSubmitDataRide(event, value, 19) }} /> No
                                                <input id="IBB" value='N/A' type="radio" name='IBB' onChange={(event, value) => { handleSubmitDataRide(event, value, 19) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>





                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Monitors – A) Train Profile (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="MA" value='YES' type="radio" name='MA' onChange={(event, value) => { handleSubmitDataRide(event, value, 20) }} /> Yes
                                                <input id="MA" value='NO' type="radio" name='MA' onChange={(event, value) => { handleSubmitDataRide(event, value, 20) }} /> No
                                                <input id="MA" value='N/A' type="radio" name='MA' onChange={(event, value) => { handleSubmitDataRide(event, value, 20) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Monitors – B) Air Gauges (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="MB" value='YES' type="radio" name='MB' onChange={(event, value) => { handleSubmitDataRide(event, value, 21) }} /> Yes
                                                <input id="MB" value='NO' type="radio" name='MB' onChange={(event, value) => { handleSubmitDataRide(event, value, 21) }} /> No
                                                <input id="MB" value='N/A' type="radio" name='MB' onChange={(event, value) => { handleSubmitDataRide(event, value, 21) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – A) Locomotive Wheel Slip/Slide (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="RTA" value='YES' type="radio" name='RTA' onChange={(event, value) => { handleSubmitDataRide(event, value, 22) }} /> Yes
                                                <input id="RTA" value='NO' type="radio" name='RTA' onChange={(event, value) => { handleSubmitDataRide(event, value, 22) }} /> No
                                                <input id="RTA" value='N/A' type="radio" name='RTA' onChange={(event, value) => { handleSubmitDataRide(event, value, 22) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – B) Dynamic Brake Overload (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="RTB" value='YES' type="radio" name='RTB' onChange={(event, value) => { handleSubmitDataRide(event, value, 23) }} /> Yes
                                                <input id="RTB" value='NO' type="radio" name='RTB' onChange={(event, value) => { handleSubmitDataRide(event, value, 23) }} /> No
                                                <input id="RTB" value='N/A' type="radio" name='RTB' onChange={(event, value) => { handleSubmitDataRide(event, value, 23) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – C) Alarm Lights/Bells (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="RTC" value='YES' type="radio" name='RTC' onChange={(event, value) => { handleSubmitDataRide(event, value, 24) }} /> Yes
                                                <input id="RTC" value='NO' type="radio" name='RTC' onChange={(event, value) => { handleSubmitDataRide(event, value, 24) }} /> No
                                                <input id="RTC" value='N/A' type="radio" name='RTC' onChange={(event, value) => { handleSubmitDataRide(event, value, 24) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – A) Set Up (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DPA" value='YES' type="radio" name='DPA' onChange={(event, value) => { handleSubmitDataRide(event, value, 25) }} /> Yes
                                                <input id="DPA" value='NO' type="radio" name='DPA' onChange={(event, value) => { handleSubmitDataRide(event, value, 25) }} /> No
                                                <input id="DPA" value='N/A' type="radio" name='DPA' onChange={(event, value) => { handleSubmitDataRide(event, value, 25) }} /> N/A



                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – B) Operation (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DPB" value='YES' type="radio" name='DPB' onChange={(event, value) => { handleSubmitDataRide(event, value, 26) }} /> Yes
                                                <input id="DPB" value='NO' type="radio" name='DPB' onChange={(event, value) => { handleSubmitDataRide(event, value, 26) }} /> No
                                                <input id="DPB " value='N/A' type="radio" name='DPB' onChange={(event, value) => { handleSubmitDataRide(event, value, 26) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – C) Knockdown (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DPC" value='YES' type="radio" name='DPC' onChange={(event, value) => { handleSubmitDataRide(event, value, 27) }} /> Yes
                                                <input id="DPC" value='NO' type="radio" name='DPC' onChange={(event, value) => { handleSubmitDataRide(event, value, 27) }} /> No
                                                <input id="DPC" value='N/A' type="radio" name='DPC' onChange={(event, value) => { handleSubmitDataRide(event, value, 27) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Daily Inspection Card Signed (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="DICS" value='YES' type="radio" name='DICS' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> Yes
                                                <input id="DICS" value='NO' type="radio" name='DICS' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> No
                                                <input id="DICS" value='N/A' type="radio" name='DICS' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – A) Locomotive Inspection (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LMA" value='YES' type="radio" name='LMA' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> Yes
                                                <input id="LMA" value='NO' type="radio" name='LMA' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> No
                                                <input id="LMA" value='N/A' type="radio" name='LMA' onChange={(event, value) => { handleSubmitDataRide(event, value, 28) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – B) Engine Start-up (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LMB" value='YES' type="radio" name='LMB' onChange={(event, value) => { handleSubmitDataRide(event, value, 30) }} /> Yes
                                                <input id="LMB" value='NO' type="radio" name='LMB' onChange={(event, value) => { handleSubmitDataRide(event, value, 30) }} /> No
                                                <input id="LMB" value='N/A' type="radio" name='LMB' onChange={(event, value) => { handleSubmitDataRide(event, value, 30) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – C) Sand (1 pt)


                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LMC" value='YES' type="radio" name='LMC' onChange={(event, value) => { handleSubmitDataRide(event, value, 31) }} /> Yes
                                                <input id="LMC" value='NO' type="radio" name='LMC' onChange={(event, value) => { handleSubmitDataRide(event, value, 31) }} /> No
                                                <input id="LMC" value='N/A' type="radio" name='LMC' onChange={(event, value) => { handleSubmitDataRide(event, value, 31) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – D) Short Time Rating (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LMD" value='YES' type="radio" name='LMD' onChange={(event, value) => { handleSubmitDataRide(event, value, 32) }} /> Yes
                                                <input id="LMD" value='NO' type="radio" name='LMD' onChange={(event, value) => { handleSubmitDataRide(event, value, 32) }} /> No
                                                <input id="LMD" value='N/A' type="radio" name='LMD' onChange={(event, value) => { handleSubmitDataRide(event, value, 32) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – E) Protective Devices(1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LME" value='YES' type="radio" name='LME' onChange={(event, value) => { handleSubmitDataRide(event, value, 33) }} /> Yes
                                                <input id="LME" value='NO' type="radio" name='LME' onChange={(event, value) => { handleSubmitDataRide(event, value, 33) }} /> No
                                                <input id="LME" value='N/A' type="radio" name='LME' onChange={(event, value) => { handleSubmitDataRide(event, value, 33) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – F) Securing Unattended Locomotives(1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="LMF" value='YES' type="radio" name='LMF' onChange={(event, value) => { handleSubmitDataRide(event, value, 34) }} /> Yes
                                                <input id="LMF" value='NO' type="radio" name='LMF' onChange={(event, value) => { handleSubmitDataRide(event, value, 34) }} /> No
                                                <input id="LMF" value='N/A' type="radio" name='LMF' onChange={(event, value) => { handleSubmitDataRide(event, value, 34) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - A) Use of Bell (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORA" value='YES' type="radio" name='ORA' onChange={(event, value) => { handleSubmitDataRide(event, value, 35) }} /> Yes
                                                <input id="ORA" value='NO' type="radio" name='ORA' onChange={(event, value) => { handleSubmitDataRide(event, value, 35) }} /> No
                                                <input id="ORA" value='N/A' type="radio" name='ORA' onChange={(event, value) => { handleSubmitDataRide(event, value, 35) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - B) Use of Horn (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORB" value='YES' type="radio" name='ORB' onChange={(event, value) => { handleSubmitDataRide(event, value, 36) }} /> Yes
                                                <input id="ORB" value='NO' type="radio" name='ORB' onChange={(event, value) => { handleSubmitDataRide(event, value, 36) }} /> No
                                                <input id="ORB" value='N/A' type="radio" name='ORB' onChange={(event, value) => { handleSubmitDataRide(event, value, 36) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - C) Use of Headlight (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORC" value='YES' type="radio" name='ORC' onChange={(event, value) => { handleSubmitDataRide(event, value, 37) }} /> Yes
                                                <input id="ORC" value='NO' type="radio" name='ORC' onChange={(event, value) => { handleSubmitDataRide(event, value, 37) }} /> No
                                                <input id="ORC" value='N/A' type="radio" name='ORC' onChange={(event, value) => { handleSubmitDataRide(event, value, 37) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - D) Use of Radio (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORD" value='YES' type="radio" name='ORD' onChange={(event, value) => { handleSubmitDataRide(event, value, 38) }} /> Yes
                                                <input id="ORD" value='NO' type="radio" name='ORD' onChange={(event, value) => { handleSubmitDataRide(event, value, 38) }} /> No
                                                <input id="ORD" value='N/A' type="radio" name='ORD' onChange={(event, value) => { handleSubmitDataRide(event, value, 38) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Operating Rules - E) Signal Compliance (5 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORE" value='YES' type="radio" name='ORE' onChange={(event, value) => { handleSubmitDataRide(event, value, 39) }} /> Yes
                                                <input id="ORE" value='NO' type="radio" name='ORE' onChange={(event, value) => { handleSubmitDataRide(event, value, 39) }} /> No
                                                <input id="ORE" value='N/A' type="radio" name='ORE' onChange={(event, value) => { handleSubmitDataRide(event, value, 39) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - F) Signal Communication (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORF" value='YES' type="radio" name='ORF' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> Yes
                                                <input id="ORF" value='NO' type="radio" name='ORF' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> No
                                                <input id="ORF" value='N/A' type="radio" name='ORF' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - G) Knowledge of Special InstructionS (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORG" value='YES' type="radio" name='ORG' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> Yes
                                                <input id="ORG" value='NO' type="radio" name='ORG' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> No
                                                <input id="ORG" value='N/A' type="radio" name='ORG' onChange={(event, value) => { handleSubmitDataRide(event, value, 40) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - H) Knowledge of Operating Rules (5 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORH" value='YES' type="radio" name='ORH' onChange={(event, value) => { handleSubmitDataRide(event, value, 41) }} /> Yes
                                                <input id="ORH" value='NO' type="radio" name='ORH' onChange={(event, value) => { handleSubmitDataRide(event, value, 41) }} /> No
                                                <input id="ORH" value='N/A' type="radio" name='ORH' onChange={(event, value) => { handleSubmitDataRide(event, value, 41) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - I) Knowledge of Safety Rules (4 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORI" value='YES' type="radio" name='ORI' onChange={(event, value) => { handleSubmitDataRide(event, value, 42) }} /> Yes
                                                <input id="ORI" value='NO' type="radio" name='ORI' onChange={(event, value) => { handleSubmitDataRide(event, value, 42) }} /> No
                                                <input id="ORI" value='N/A' type="radio" name='ORI' onChange={(event, value) => { handleSubmitDataRide(event, value, 42) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules – J) Possession of Required Publications (5 pt)

                                                .
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="ORJ" value='YES' type="radio" name="ORJ" onChange={(event, value) => { handleSubmitDataRide(event, value, 43) }} /> Yes
                                                <input id="ORJ" value='NO' type="radio" name="ORJ" onChange={(event, value) => { handleSubmitDataRide(event, value, 43) }} /> No
                                                <input id="ORJ" value='N/A' type="radio" name="ORJ" onChange={(event, value) => { handleSubmitDataRide(event, value, 43) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – A) Starting (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THA" value='YES' type="radio" name="THA" onChange={(event, value) => { handleSubmitDataRide(event, value, 44) }} /> Yes
                                                <input id="THA" value='NO' type="radio" name="THA" onChange={(event, value) => { handleSubmitDataRide(event, value, 44) }} /> No
                                                <input id="THA" value='N/A' type="radio" name="THA" onChange={(event, value) => { handleSubmitDataRide(event, value, 44) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – B) Accelerating (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THB" value='YES' type="radio" name='THB' onChange={(event, value) => { handleSubmitDataRide(event, value, 45) }} /> Yes
                                                <input id="THB" value='NO' type="radio" name='THB' onChange={(event, value) => { handleSubmitDataRide(event, value, 45) }} /> No
                                                <input id="THB" value='N/A' type="radio" name='THB' onChange={(event, value) => { handleSubmitDataRide(event, value, 45) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – C) Deceleration (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THC" value='YES' type="radio" name='THC' onChange={(event, value) => { handleSubmitDataRide(event, value, 46) }} /> Yes
                                                <input id="THC" value='NO' type="radio" name='THC' onChange={(event, value) => { handleSubmitDataRide(event, value, 46) }} /> No
                                                <input id="THC" value='N/A' type="radio" name='THC' onChange={(event, value) => { handleSubmitDataRide(event, value, 46) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – D) Cresting Grade (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THD" value='YES' type="radio" name='THD' onChange={(event, value) => { handleSubmitDataRide(event, value, 47) }} /> Yes
                                                <input id="THD" value='NO' type="radio" name='THD' onChange={(event, value) => { handleSubmitDataRide(event, value, 47) }} /> No
                                                <input id="THD" value='N/A' type="radio" name='THD' onChange={(event, value) => { handleSubmitDataRide(event, value, 47) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – E) Power Braking (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THE" value='YES' type="radio" name='THE' onChange={(event, value) => { handleSubmitDataRide(event, value, 48) }} /> Yes
                                                <input id="THE" value='NO' type="radio" name='THE' onChange={(event, value) => { handleSubmitDataRide(event, value, 48) }} /> No
                                                <input id="THE" value='N/A' type="radio" name='THE' onChange={(event, value) => { handleSubmitDataRide(event, value, 48) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – F) Familiarity with Terrain (5 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THF" value='YES' type="radio" name='THF' onChange={(event, value) => { handleSubmitDataRide(event, value, 49) }} /> Yes
                                                <input id="THF" value='NO' type="radio" name='THF' onChange={(event, value) => { handleSubmitDataRide(event, value, 49) }} /> No
                                                <input id="THF" value='N/A' type="radio" name='THF' onChange={(event, value) => { handleSubmitDataRide(event, value, 49) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – G) Judgment Location of Train (6 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THG" value='YES' type="radio" name='THG' onChange={(event, value) => { handleSubmitDataRide(event, value, 50) }} /> Yes
                                                <input id="THG" value='NO' type="radio" name='THG' onChange={(event, value) => { handleSubmitDataRide(event, value, 50) }} /> No
                                                <input id="THG" value='N/A' type="radio" name='THG' onChange={(event, value) => { handleSubmitDataRide(event, value, 50) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – H) Plans Movements ahead (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THH" value='YES' type="radio" name='THH' onChange={(event, value) => { handleSubmitDataRide(event, value, 51) }} /> Yes
                                                <input id="THH" value='NO' type="radio" name='THH' onChange={(event, value) => { handleSubmitDataRide(event, value, 51) }} /> No
                                                <input id="THH" value='N/A' type="radio" name='THH' onChange={(event, value) => { handleSubmitDataRide(event, value, 51) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – I) Properly controls slack (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THI" value='YES' type="radio" name='THI' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> Yes
                                                <input id="THI" value='NO' type="radio" name='THI' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> No
                                                <input id="THI" value='N/A' type="radio" name='THI' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – J) Procedures for Set-Off and Pick-Ups (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THJ" value='YES' type="radio" name='THJ' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> Yes
                                                <input id="THJ" value='NO' type="radio" name='THJ' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> No
                                                <input id="THJ" value='N/A' type="radio" name='THJ' onChange={(event, value) => { handleSubmitDataRide(event, value, 52) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">


                                                Train Handling – K) Speed Control (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THK" value='YES' type="radio" name='THK' onChange={(event, value) => { handleSubmitDataRide(event, value, 53) }} /> Yes
                                                <input id="THK" value='NO' type="radio" name='THK' onChange={(event, value) => { handleSubmitDataRide(event, value, 53) }} /> No
                                                <input id="THK" value='N/A' type="radio" name='THK' onChange={(event, value) => { handleSubmitDataRide(event, value, 53) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                . Train Handling – L) Judgement in Stopping (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THL" value='YES' type="radio" name='THL' onChange={(event, value) => { handleSubmitDataRide(event, value, 54) }} /> Yes
                                                <input id="THL" value='NO' type="radio" name='THL' onChange={(event, value) => { handleSubmitDataRide(event, value, 54) }} /> No
                                                <input id="THL" value='N/A' type="radio" name='THL' onChange={(event, value) => { handleSubmitDataRide(event, value, 54) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – M) Yarded Train-control in-train forces (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THM" value='YES' type="radio" name='THM' onChange={(event, value) => { handleSubmitDataRide(event, value, 55) }} /> Yes
                                                <input id="THM" value='NO' type="radio" name='THM' onChange={(event, value) => { handleSubmitDataRide(event, value, 55) }} /> No
                                                <input id="THM" value='N/A' type="radio" name='THM' onChange={(event, value) => { handleSubmitDataRide(event, value, 55) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – N) Detaching from train (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THN" value='YES' type="radio" name='THN' onChange={(event, value) => { handleSubmitDataRide(event, value, 56) }} /> Yes
                                                <input id="THN" value='NO' type="radio" name='THN' onChange={(event, value) => { handleSubmitDataRide(event, value, 56) }} /> No
                                                <input id="THN" value='N/A' type="radio" name='THN' onChange={(event, value) => { handleSubmitDataRide(event, value, 56) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – O) Undesired Emergency (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THO" value='YES' type="radio" name='THO' onChange={(event, value) => { handleSubmitDataRide(event, value, 57) }} /> Yes
                                                <input id="THO" value='NO' type="radio" name='THO' onChange={(event, value) => { handleSubmitDataRide(event, value, 57) }} /> No
                                                <input id="THO" value='N/A' type="radio" name='THO' onChange={(event, value) => { handleSubmitDataRide(event, value, 57) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling –P) Proper Coupling Speed (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input id="THP" value='YES' type="radio" name='THP' onChange={(event, value) => { handleSubmitDataRide(event, value, 58) }} /> Yes
                                                <input id="THP" value='NO' type="radio" name='THP' onChange={(event, value) => { handleSubmitDataRide(event, value, 58) }} /> No
                                                <input id="THP" value='N/A' type="radio" name='THP' onChange={(event, value) => { handleSubmitDataRide(event, value, 58) }} /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Comments
                                            </Grid>
                                            <Grid xs={12} className="mt14" >

                                                <TextField
                                                // type="text"
                                                    id="Comments"
                                                    label={'Comment here'}
                                                    variant="outlined"
                                                    className="w100p"
                                                    // onChange={(event, value) => { handleSubmitDataRide(event, value, 59) }} 
                                                    />
                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12} className="mt30">
                                        Location & Date/Time
                                    </Grid>
                                    <Grid xs={12}>

                                        <Grid xs={12} className="dateTimePickerFrame">
                                            <Grid className="DateTimeTables mt30">
                                                <Grid xs={12} className="mbold relative DateIcon">
                                                    Date
                                                </Grid>
                                                <Grid xs={12} className="mt14">

                                                    <TextField
                                                        required={false}
                                                        id="date"
                                                        type="date"
                                                        className="DateTimePicker"
                                                        defaultValue={cride.date}
                                                        value={cride.date}
                                                        onChange={(e, value) => { handleSubmitDataRide('x', e.target.value, 60) }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid className="DateTimeTables mt30">
                                                <Grid xs={12} className="mbold relative TimeIcon">
                                                    Time
                                                </Grid>
                                                <Grid xs={12} className="mt14">

                                                    <TextField
                                                        required={false}
                                                        id="time"
                                                        type="time"
                                                        value={cride.time}
                                                        onChange={(e, value) => { handleSubmitDataRide('x', e.target.value, 61) }}
                                                        className="DateTimePicker"
                                                        defaultValue="HH:mm:ss"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={7}>

                                </Grid>
                            </Grid>
                            <Grid xs={12} container justify="flex-end" className="mt50">
                                <Link to="/safety-testing" className="LinkButtonBack mr10">Close</Link>
                                <Button
                                    type="submit"
                                    className="LinkButton"
                                // onClick={submitBtn}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                        <Snackbar></Snackbar>
                    </Grid>
                    {/* Page Start End */}
                </Grid>
            </Grid >
        </Grid >
    );
}

export default EnterCheckRide;
