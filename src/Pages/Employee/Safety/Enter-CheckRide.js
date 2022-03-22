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

    const [railRoad, setRailRoad] = useState({
        primary: '', //1
        engineerId : '',
        oje: false, //2
        ojeComment: '', //3
        assisting: [], //4
        joinTest: false, //5
        assisting_comment: '', //6
        department: '', //7
        site: '', //8
        GPS: '', //9
        date: moment(new Date()).format('YY-MM-DD'), //10
        // date : new Date(), //10
        time: moment(new Date()).format('HH:mm:ss a'), //11
        jobId: '', //12
        crewMembers: [
            { name: '', position: '', image: '' }
        ] //13
    })


    const handleSubmitData = (event, value, key) => {
        console.log(value);

        switch (key) {
            case 2:
                setRailRoad({ ...railRoad, oje: value })
                break;

            case 3:
                setRailRoad({ ...railRoad, ojeComment: event.target.value })
                break;

            case 4:
                setRailRoad({ ...railRoad, assisting: value })
                break;

            case 5:
                setRailRoad({ ...railRoad, joinTest: value })
                break;

            case 6:
                setRailRoad({ ...railRoad, assisting_comment: event.target.value })
                break;

            case 7:
                setRailRoad({ ...railRoad, department: value })
                break;

            case 8:
                setRailRoad({ ...railRoad, site: value })
                break;

            case 9:
                setRailRoad({ ...railRoad, GPS: event.target.value })
                break;

            case 10:
                setRailRoad({ ...railRoad, date: value })
                break;

            case 11:
                setRailRoad({ ...railRoad, time: value })
                break;

            case 12: 
                setRailRoad({ ...railRoad , engineerId : value.id})

            default:
                break;
        }

    };

    const resetData = () => {
        document.getElementById('ojeComment').value = ''
        document.getElementById('assisting_comment').value = ''
        document.getElementById('GPS').value = ''
        document.getElementById('jobId').value = ''

        setRailRoad({
            oje: false, //2
            ojeComment: '', //3
            assisting: [], //4
            joinTest: false, //5
            assisting_comment: '', //6
            department: '', //7
            site: '', //8
            GPS: '', //9
            date: moment(new Date()).format('YY-MM-DD'), //10
            // date : new Date(), //10
            time: moment(new Date()).format('HH:mm:ss a'), //11
            jobId: '', //12
            crewMembers: [
                { name: '', position: '', image: '' }
            ] //13
        })

    }
    const apiBody = async () => {
        let EngineerId = railRoad.engineerId
        let locomotiveConsist = document.getElementById('locomotiveConsist').value
        console.log(EngineerId , locomotiveConsist)
        let TCLoads= document.getElementById('TCLoads').value
        // let [latitude, longitude] = GPS.split(',')
        // let jobId = document.getElementById('jobId').value
        // let { crewMembers } = railRoad
        // let crewMembersData = []
        // crewMembers.forEach((row) => {
        //     if (row.name && row.position)
        //         crewMembersData.push({ id: row.name.id, position: row.position.id, image: row.image })
        //     else
        //         throw Error("Images missing")
        // })
        // let data = {
        //     primaryId: lists.currentUser.id,
        //     assistingId: railRoad.assisting.id,
        //     DepartmentId: railRoad.department.id,
        //     site_id: railRoad.site.id,
        //     latitude: latitude,
        //     longitude: longitude,
        //     date: railRoad.date,
        //     time: railRoad.time,
        //     oje: railRoad.oje,
        //     ojeComment: ojeComment,
        //     joinTest: railRoad.joinTest,
        //     jobId: jobId,
        //     crewMember: crewMembersData,
        //     joinTestComment: assisting_comment
        // }
        // return data
    }

    const submitBtn = async (event) => {

        event.preventDefault();
        if (!loading) {
            setSuccess(false);
            setLoading(true);


            try {
                let data = await apiBody()
                let result = await employee.create_test_event({ ...data })
                if (result?.httpStatus == 200) {
                    console.log('result', result);

                    setSuccess(true);
                    setLoading(false);
                    resetData()
                    /*
                    setTimout used to show , snackbar first and then route back to listing page
                    */
                    setTimeout(() => {
                        history.push('/safety-testing')
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
    const addCrew = () => {
        let { crewMembers } = railRoad
        crewMembers.push({ name: '', position: '', image: '' })
        setRailRoad({ ...railRoad, crewMembers });
    };

    //remove crew
    const removeCrew = index => {
        const { crewMembers } = railRoad;
        crewMembers.splice(index, 1);
        setRailRoad({ ...railRoad, crewMembers });
    };

    // handle input change
    const handleInputChange = async (name, value, index) => {

        console.log(name, value, index);
        const { crewMembers } = railRoad;
        if (name == 'image') {
            value = await getBase64(value)
            console.log("converted base 64", value);
        }
        crewMembers[index][name] = value;
        setRailRoad({ ...railRoad, crewMembers });
    };

    //convert image into base64

    const getBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const getLocation = async () => {

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('latitude', latitude);
            console.log('longitude', longitude);
            let gps = `${longitude},${latitude}`
            // document.getElementById('GPS').value=gps
            setRailRoad({ ...railRoad, GPS: gps })

        }

        function error(error) {

            console.log('Unable to retrieve your location', error);
            setFlag(false)
            return showSnackBar(`Unable to retrieve your location: Kindly Enter Lat Long `);
        }

        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            console.log('Locating…');
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

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
        let userList = await employee.get_employee_listing();
        if (userList.httpStatus == 200) {
            userList = userList.data;
            userList.map(row => {
                row.name = `${row.firstName} ${row.lastName}`
            })
            console.log(userList);
        }

        let assistingCrewList = await employee.get_crew_user_listing();
        if (assistingCrewList.httpStatus == 200) {
            assistingCrewList = assistingCrewList.data.rows;
            assistingCrewList.map(row => {
                row.name = `${row.firstName} ${row.lastName}`
            })
            console.log(assistingCrewList);
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
            console.log(siteList);
        }
        let jobCategoryList = [
            { id: "ENG", title: "Engineering" },
            { id: "COND", title: "Conductor" },
            { id: "BR1", title: "BR1" },
            { id: "OTHER", title: "OTHER" },
        ]

        let departmentList = [
            { id: 'All', title: 'All' },
            { id: 'Transportation', title: 'Transportation' },
            { id: 'Engineering', title: 'Engineering' },
            { id: 'Mechanical', title: 'Mechanical' }
        ]

        let currentUser = JSON.parse(storage.get('user_profile'))
        setLists({ ...lists, users: userList, crews: assistingCrewList, assistants: assistingCrewList, positions: jobCategoryList, departments: departmentList, sites: siteList, currentUser: currentUser })
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
                            <Grid xs={12} container>
                                <Typography variant="h5" className="mbold f16" component="h6">
                                    Evaluators
                                </Typography>
                            </Grid>
                            <Grid xs={12} container>
                                <Grid xs={12} md={12} className="EvaluatorsTables pr40">
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Evaluator ID
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <TextField  required={false} id="outlined-basic comment" label="Comment here" value={`${lists?.currentUser?.firstName} ${lists?.currentUser?.lastName}`} disabled variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Engineer ID
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <Autocomplete
                                                    className="w100p"
                                                    id="checkboxes-tags-demo"
                                                    value={railRoad.assisting}
                                                    onChange={(event, value) => { handleSubmitData(event, value, 12) }}
                                                    options={lists.assistants}
                                                    getOptionLabel={option => (option.name)}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            // required={false}  
                                                            {...params} id="engineerId" variant="outlined" placeholder="Assisting" />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Locomotive Consist
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="locomotiveConsist" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist-Load
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="TCLoads" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist -Empties
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="outlined-basic" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Train Consist -Total Tonnage
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="outlined-basic" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Total Miles Traveled
                                            </Grid>
                                            <Grid xs={12} className="mt14">

                                                <TextField required={false} id="outlined-basic" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Total Miles Traveled  – A) Brake Tests

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Light Locomotive Operation – B) Coupling Speed

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Light Locomotive Operation – C) Changing Ends

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-A) Brake Test

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-B) Total Reduction

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-C) Release Procedure

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-C) Release Procedure

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Automatic Brake Ops-D) Independent Release

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-A) Time Delay

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-B) Application Rate (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Dynamic Brake Operation-C) Release Rate (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Independent Brake-A) Application (1 pt)
                                                Independent Brake-B) Release (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Independent Brake-B) Release (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Independent Brake-B) Release (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Monitors – A) Train Profile (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Monitors – B) Air Gauges (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – A) Locomotive Wheel Slip/Slide (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – B) Dynamic Brake Overload (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Reaction To – C) Alarm Lights/Bells (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – A) Set Up (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A


                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – B) Operation (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Distributed Power – C) Knockdown (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Daily Inspection Card Signed (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – A) Locomotive Inspection (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – B) Engine Start-up (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – C) Sand (1 pt)
                                                Locomotive Management – D) Short Time Rating (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – D) Short Time Rating (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – E) Protective Devices(1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Locomotive Management – F) Securing Unattended Locomotives(1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - A) Use of Bell (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - B) Use of Horn (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - C) Use of Headlight (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - D) Use of Radio (1 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Operating Rules - E) Signal Compliance (5 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - F) Signal Communication (2 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - H) Knowledge of Operating Rules (5 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules - I) Knowledge of Safety Rules (4 pt)

                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Operating Rules – J) Possession of Required Publications (5 pt)

                                                . Train Handling – A) Starting (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – A) Starting (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – B) Accelerating (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – C) Deceleration (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – D) Cresting Grade (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – E) Power Braking (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – F) Familiarity with Terrain (5 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – G) Judgment Location of Train (6 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – H) Plans Movements ahead (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – I) Properly controls slack (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">


                                                Train Handling – K) Speed Control (3 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                . Train Handling – L) Judgement in Stopping (2 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – M) Yarded Train-control in-train forces (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – N) Detaching from train (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling – O) Undesired Emergency (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">

                                                Train Handling –P) Proper Coupling Speed (1 pt)
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <input value='YES' type="radio" name='' /> Yes
                                                <input value='NO' type="radio" name='' /> No
                                                <input value='N/A' type="radio" name='' /> N/A

                                            </Grid>
                                        </Grid>
                                    </Grid>




                                    <Grid xs={12}>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12} className="mbold">
                                                Comments
                                            </Grid>
                                            <Grid xs={12} className="mt14" >

                                                <TextField required={false} id="outlined-basic" type='number' label="" variant="outlined" className="w100p" />
                                            </Grid>
                                        </Grid>
                                    </Grid>








































                                    <Grid xs={12} className="mt30">
                                        Location & Date/Time
                                    </Grid>
                                    <Grid xs={12}>
                                        {/* <Grid xs={12} className="mt10">
                      <Grid xs={12} className="mbold relative LocIcon">
                        Site
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={lists.sites}
                          getOptionLabel={option => option.title}
                          value={railRoad.site}
                          onChange={(event, value) => { handleSubmitData(event, value, 8) }}
                          renderInput={(params) => <TextField required={false} {...params} label="Site" variant="outlined" />}
                        />
                      </Grid>
                    </Grid> */}
                                        {/* <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        GPS (Lat, Long )
                      </Grid>
                      <Grid xs={12} className="w100p row justifyBetween m0 mt14">
                        <TextField
                          disabled={flag}
                          required={false}
                          id="GPS"
                          label="Latitudes & Longitudes"
                          variant="outlined"
                          className="w"
                          value={railRoad.GPS}
                          onChange={(event, value) => { handleSubmitData(event, value, 9) }}
                        />
                        <Button className="GetBtn" onClick={getLocation}>GET</Button>
                      </Grid>
                    </Grid> */}
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
                                                        defaultValue={railRoad.date}
                                                        value={railRoad.date}
                                                        onChange={(e, value) => { handleSubmitData('x', e.target.value, 10) }}
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
                                                        value={railRoad.time}
                                                        onChange={(e, value) => { handleSubmitData('x', e.target.value, 11) }}
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
