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

const Railroad = () => {
  let history = useHistory();
  const storage = new Storage();

  //loader states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [flag, setFlag] = useState(true)

  const [railRoad, setRailRoad] = useState({
    primary: '', //1

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
    let ojeComment = document.getElementById('ojeComment').value
    let assisting_comment = document.getElementById('assisting_comment').value
    let GPS = document.getElementById('GPS').value
    let [latitude, longitude] = GPS.split(',')
    let jobId = document.getElementById('jobId').value
    let { crewMembers } = railRoad
    let crewMembersData = []
    crewMembers.forEach((row) => {
      if (row.name && row.position)
        crewMembersData.push({ id: row.name.id, position: row.position.id, image: row.image })
      else
        throw Error("Images missing")
    })
    let data = {
      primaryId: lists.currentUser.id,
      assistingId: railRoad.assisting.id,
      DepartmentId: railRoad.department.id,
      site_id: railRoad.site.id,
      latitude: latitude,
      longitude: longitude,
      date: railRoad.date,
      time: railRoad.time,
      oje: railRoad.oje,
      ojeComment: ojeComment,
      joinTest: railRoad.joinTest,
      jobId: jobId,
      crewMember: crewMembersData,
      joinTestComment: assisting_comment
    }
    return data
  }

  const submitBtn = async (event) => {
    console.log('asasas')
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
      { id: "ENG", title: "Engineer" },
      { id: "COND", title: "Conductor" },
      { id: "BR1", title: "BR1" },
      { id: "OTHER", title: "OTHER" },
    ]

    let departmentList = [
      // { id: 'All', title: 'All' },
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
          <Grid id="PageTitle">Railroad Testing Event</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <form style={{ width: '100%' }} onSubmit={submitBtn}>
              <Grid xs={12} container>
                <Typography variant="h5" className="mbold f16" component="h6">
                  Evaluators
                </Typography>
              </Grid>
              <Grid xs={12} container>
                <Grid xs={12} md={5} className="EvaluatorsTables pr40">
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Primary
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
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Assisting
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                          className="w100p"
                          id="checkboxes-tags-demo"
                          value={railRoad.assisting}
                          onChange={(event, value) => { handleSubmitData(event, value, 4) }}
                          options={lists.assistants}
                          getOptionLabel={option => (option.name)}
                          renderInput={(params) => (
                            <TextField
                              // required={true} 
                              {...params} variant="outlined" placeholder="Assisting" />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        Department
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={lists.departments}
                          getOptionLabel={option => option.title}
                          value={railRoad.department}
                          onChange={(event, value) => { handleSubmitData(event, value, 7) }}
                          renderInput={(params) => <TextField required={true} {...params} label="Department" variant="outlined" />}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt30">
                    Location & Date/Time
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt10">
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
                          renderInput={(params) => <TextField required={true} {...params} label="Site" variant="outlined" />}
                        />
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        GPS (Lat, Long )
                      </Grid>
                      <Grid xs={12} className="w100p row justifyBetween m0 mt14">
                        <TextField
                          disabled={flag}
                          required={true}
                          id="GPS"
                          label="Latitudes & Longitudes"
                          variant="outlined"
                          className="w"
                          value={railRoad.GPS}
                          onChange={(event, value) => { handleSubmitData(event, value, 9) }}
                        />
                        <Button className="GetBtn" onClick={getLocation}>GET</Button>
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="dateTimePickerFrame">
                      <Grid className="DateTimeTables mt30">
                        <Grid xs={12} className="mbold relative DateIcon">
                          Date
                        </Grid>
                        <Grid xs={12} className="mt14">

                          <TextField
                            required={true}
                            id="date"
                            type="date"
                            className="DateTimePicker"
                            defaultValue={railRoad.date}
                            value={railRoad.date}
                           
                            onChange={(e, value) => { handleSubmitData('x', e.target.value, 10) }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onKeyDown={(e) => {
                              e.preventDefault();
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
                            required={true}
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
                  {/* Stop Test */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        Stop Test
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={3} className="mt14 pr40">
                        <Switch checked={railRoad.stopTest} onChange={(event, value) => handleSubmitData(event, value, 12)} />
                      </Grid>
                      <Grid xs={9} className="mt14 fieldSubText">
                        <TextField
                          id="stopTest"
                          label={'Comment here'}
                          variant="outlined"
                          className="w100p"
                        />
                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                          Please leave this field empty if you have no comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* OJE */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        OJE
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={3} className="mt14 pr40">
                        <Switch checked={railRoad.oje} onChange={(event, value) => handleSubmitData(event, value, 2)} />

                      </Grid>
                      <Grid xs={9} className="mt14 fieldSubText">
                        <TextField
                          id="ojeComment"
                          label={'Comment here'}
                          variant="outlined"
                          className="w100p"
                        />
                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                          Please leave this field empty if you have no comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Join Test */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        Join Test
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={3} className="mt14 pr40">
                        <Switch checked={railRoad.joinTest} onChange={(event, value) => handleSubmitData(event, value, 5)} />

                      </Grid>
                      <Grid xs={9} className="mt14 fieldSubText">
                        <TextField id="assisting_comment" label="Comment here" variant="outlined" className="w100p" />
                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                          Please leave this field empty if you have no comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Crew */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        Crew
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={12} className="mbold mt20">
                        Job ID
                      </Grid>
                      <Grid xs={6} className="mt14 pr40">
                        <TextField required={true} id="jobId" label="Job ID" variant="outlined" className="w100p" />
                      </Grid>
                      <Grid xs={6} container justify="flex-end" className="mt14 fieldSubText">
                        <Button
                          className="LinkButton ButtonAddIcon"
                          onClick={addCrew}
                        >
                          Add Crew Member
                        </Button>
                      </Grid>
                    </Grid>
                    {/* Add New Crew Members Loop */}
                    <Grid xs={12} className="Scrolling SafetyCrewHeight mt30">
                      {
                        (railRoad.crewMembers).map((x, i) => {
                          return (
                            <Grid xs={12} container className="mt30">
                              <Grid xs={4} className="pr20">
                                <Grid xs={12} className="mbold">
                                  {`Crew member ${i + 1}`}
                                </Grid>
                                <Autocomplete
                                  className="w100p"
                                  id="combo-box-name"
                                  name="name"
                                  options={lists.crews}
                                  value={x.name}
                                  onChange={(e, value) => {
                                    handleInputChange('name', value, i)
                                  }
                                  }
                                  getOptionLabel={option => (option.name)}
                                  renderInput={(params) => <TextField required={true} {...params} label="Select" variant="outlined" />}
                                />
                              </Grid>
                              <Grid xs={8} container>
                                <Grid xs={12} className="mbold">
                                  Crew Position
                                </Grid>
                                <Grid xs={7}>
                                  <Autocomplete
                                    className="w100p"
                                    id="combo-box-demo"
                                    name="position"
                                    options={lists.positions}
                                    getOptionLabel={option => option.title}
                                    value={x.position}
                                    onChange={(e, value) => {
                                      handleInputChange('position', value, i)
                                    }
                                    }
                                    renderInput={(params) => <TextField required={true} {...params} label="Select" variant="outlined" />}
                                  />
                                </Grid>

                                <Grid xs={5} container justify="space-between" className="pl20">
                                  <label className={(x.image == '') ? "PickBtn" : "PickBtnFileUploaded"} style={{ color: 'red' }} for={`crew${i}`} >*</label>
                                  <input
                                    required
                                    type="file"
                                    id={`crew${i}`}
                                    name="image"
                                    className="hide"
                                    onChange={(e, value) => {
                                      let value1 = e.target.files[0];
                                      handleInputChange('image', value1, i)
                                    }
                                    }
                                  />
                                  {railRoad.crewMembers.length !== 1 && <button
                                    className="removeBtn"
                                    onClick={() => removeCrew(i)}></button>}
                                </Grid>
                              </Grid>
                            </Grid>
                          )
                        })
                      }
                    </Grid>
                    {/* Add New Crew Members End */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} container justify="flex-end" className="mt50">
                <Link to="/safety-testing" className="LinkButtonBack mr10">Close</Link>
                <Button
                  type="submit"
                  className="LinkButton"
                // onClick={submitBtn}
                >
                  Save
                </Button>
              </Grid>
            </form>
            <Snackbar></Snackbar>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Railroad;
