import React, {useState,useEffect,useRef} from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DatePicker from 'react-date-picker';
import TimePicker from "react-time-picker"; 
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

import MobileScreen from './Mobile/Enter-RailRoad-Add';
import {isMobile} from 'react-device-detect';

var moment = require ('moment-timezone')

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const dummyData = {
  User :{
    name:'Angelina Joulie'
  },

  Crew_member : [
    'James Mary',
    'Robert Patricia' ,
    'John Jennifer'
  ],
  
  OJE : ['Yes', 'No'],
  
  CrewMember  : [
    'Liam Noah',
    'Oliver Elijah' ,
    'William James' ,
    'Benjamin Lucas'
  ],
  CrewPosition  : [
    'Engineer',
    'Conductor' ,
    'BR1' ,
    'BR2' ,
    'Other' 
  ],

  Department : [
    'IT',
    'Accounts' ,
    'Management' ,
    'Engineering'
  ],

  Site : [
    'Cedar Port',
    'Karachi Port' ,
    'Defence' ,
    'Malir'
  ]
};




const Railroad = () => {
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  const [railRoad, setRailRoad] = useState({
    primary: '', //1
    oje: dummyData.OJE[0], //2
    primary_comment: '', //3
    assisting: [], //4
    joinTest: dummyData.OJE[1], //5
    assisting_comment: '', //6
    department: '', //7
    site: '', //8
    GPS: '', //9
    date : moment(new Date()).format('YY-MM-DD'), //10
    // date : new Date(), //10
    time: moment(new Date()).format('HH:mm:ss a'), //11
    jobID: '', //12
    crewMembers: [
      {name: '' ,position: '' ,image:''}
    ] //13
  })


  const handleSubmitData = (event,value,key) =>{
    console.log(value);

    switch (key) {
      case 2:
        setRailRoad({...railRoad,oje:value})
        break;

      case 3:
      setRailRoad({...railRoad,primary_comment:event.target.value})
      break;

      case 4:
      setRailRoad({...railRoad,assisting:value})
      break;

      case 5:
      setRailRoad({...railRoad,joinTest:value})
      break;

      case 6:
      setRailRoad({...railRoad,assisting_comment:event.target.value})
      break;

      case 7:
      setRailRoad({...railRoad,department:value})
      break;
      
      case 8:
      setRailRoad({...railRoad,site:value})
      break;
      
      case 9:
      setRailRoad({...railRoad,GPS:event.target.value})
      break;

      case 10:
      setRailRoad({...railRoad,date:value})
      break;
    
      case 11:
      setRailRoad({...railRoad,time:value})
      break;

      

      default:
        break;
    }

  };

  const submitBtn = async () =>{
    let primary_comment = document.getElementById('primary_comment').value
    let assisting_comment = document.getElementById('assisting_comment').value
    let GPS = document.getElementById('GPS').value
    let jobID = document.getElementById('jobID').value
    let data = {...railRoad,primary_comment,assisting_comment,GPS,jobID}
    

    console.log(railRoad);
    console.log("data",data);
  };

  //add crew
  const addCrew = () => {
    let { crewMembers }= railRoad
    crewMembers.push( {name: '' ,position: '' ,image:''})
    setRailRoad({...railRoad , crewMembers });
  };

  //remove crew
  const removeCrew = index => {
    const { crewMembers } = railRoad;
    crewMembers.splice(index, 1);
    setRailRoad({...railRoad , crewMembers });
  };

   // handle input change
  const handleInputChange = async (name, value,index) => {
    
    console.log(name , value , index);
    const { crewMembers } = railRoad;
    if(name == 'image') {
      value = await getBase64(value)
      console.log("converted base 64" ,value);
    }
    crewMembers[index][name] = value;
    setRailRoad({...railRoad , crewMembers });
  };

  //convert image into base64

  const getBase64 = async (file) =>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
 
  useEffect(() => {
    setRailRoad({...railRoad,primary:dummyData.User.name})
  }, []);
  const [value, setValue] = useState(dummyData.OJE[0]);
  

  if(isMobile) {
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
                        <TextField id="outlined-basic" label="Comment here" value={`${dummyData.User.name}`} disabled variant="outlined" className="w100p"/>
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
                            multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={dummyData.CrewMember}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            value={railRoad.assisting}
                            onChange={ (event,value) => {handleSubmitData(event, value,4)}}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                <Checkbox
                                  icon={icon}
                                  checkedIcon={checkedIcon}
                                  style={{ marginRight: 8 }}
                                  checked={selected}
                                />
                                {option}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" placeholder="Assisting" />
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
                            options={dummyData.Department}
                            getOptionLabel={(option) => option}
                            value={railRoad.department}
                            onChange={ (event,value) => {handleSubmitData(event, value,7)}}
                            renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
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
                            options={dummyData.Site}
                            getOptionLabel={(option) => option}
                            value={railRoad.site}
                            onChange={ (event,value) => {handleSubmitData(event, value,8)}}
                            renderInput={(params) => <TextField {...params} label="Site" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        GPS (Lat, Long )
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <TextField 
                            id="GPS" 
                            label="Latitudes & Longitudes" 
                            variant="outlined" 
                            className="w100p"
                            // value={railRoad.GPS}
                            // onChange={ (event,value) => {handleSubmitData(event, value,9)}}
                            />
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="dateTimePickerFrame">
                      <Grid className="DateTimeTables mt30">
                        <Grid xs={12} className="mbold relative DateIcon">
                          Date
                        </Grid>
                        <Grid xs={12} className="mt14">
                        {/* <DatePicker
                          format={'dd-MM-yyyy'}
                          value={railRoad.date}
                          onChange={(value) => { handleSubmitData('x',value, 10) }}
                          id="date"
                          className="datePickerReact"
                        /> */}
                        <TextField
                          id="date"
                          type="date"
                          className="DateTimePicker"
                          defaultValue={railRoad.date}
                          value={railRoad.date}
                          onChange={(e,value) => { handleSubmitData('x',e.target.value, 10) }}
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
                        {/* <TimePicker
                          format={'hh:mm:ss a'}
                          value={railRoad.time}
                          onChange={(value) => { handleSubmitData('x',value, 11) }}
                          id="time"
                          className="datePickerReact"
                        /> */}
                        <TextField
                          id="time"
                          type="time"
                          value={railRoad.time}
                          onChange={(e,value) => { handleSubmitData('x',e.target.value, 11) }}
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
                  {/* OJE */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        OJE
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={3} className="mt14 pr40">
                        <Autocomplete
                          value={railRoad.oje}
                          onChange={(event, value) => {
                            handleSubmitData(event, value,2)
                          }}
                          id="controllable-states-demo"
                          options={dummyData.OJE}
                          className="w100p"
                          renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                      </Grid>
                      <Grid xs={9} className="mt14 fieldSubText">
                        <TextField 
                          id="primary_comment" 
                          label={'Comment here'}
                          variant="outlined" 
                          className="w100p"
                          // value = { railRoad.primary_comment }
                          // onChange={ (event,value) =>handleSubmitData(event,value,3) } 
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
                        <Autocomplete
                          value={railRoad.joinTest}
                          onChange={(event, value) => {
                            handleSubmitData(event,value, 5)
                          }}  
                          id="controllable-states-demo"
                          options={dummyData.OJE}
                          className="w100p"
                          renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                      </Grid>
                      <Grid xs={9} className="mt14 fieldSubText">
                        <TextField id="assisting_comment" label="Comment here" variant="outlined" className="w100p"/>
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
                        <TextField id="jobID" label="Job ID" variant="outlined" className="w100p"/>
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
                      {/* <Grid xs={12} container className="mt30">
                        <Grid xs={6} className="pr40">
                          <Grid xs={12} className="mbold">
                            Crew member 1
                          </Grid>
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={dummyData.CrewMember}
                            getOptionLabel={(option) => option}
                            renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                          />
                        </Grid>
                        <Grid xs={6} container>
                          <Grid xs={12} className="mbold">
                            Crew Position
                          </Grid>
                          <Grid xs={9}>
                            <Autocomplete
                              className="w100p"
                              id="combo-box-demo"
                              options={dummyData.CrewPosition}
                              getOptionLabel={(option) => option}
                              renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                            />
                          </Grid>
                          <Grid xs={3} container justify="flex-end">
                            <label className="PickBtn" for="crew1"></label>
                            <input type="file" id="crew1" className="hide"/>
                          </Grid>
                        </Grid>
                      </Grid> */}
                      {
                        (railRoad.crewMembers).map((x,i)=>{
                          return(
                            <Grid xs={12} container className="mt30">
                              <Grid xs={4} className="pr20">
                                <Grid xs={12} className="mbold">
                                  {`Crew member ${i+1}`}
                                </Grid>
                                <Autocomplete
                                  className="w100p"
                                  id="combo-box-name"
                                  ref={ref0}
                                  name = "name"
                                  options={dummyData.CrewMember}
                                  getOptionLabel={(option) => option}
                                  value={x.name}
                                  onChange={(e,value) => { 
                                                let name = ref0.current.getAttribute("name");
                                                handleInputChange(name, value,i)}
                                              }
                                  renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
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
                                    ref={ref1}
                                    options={dummyData.CrewPosition}
                                    getOptionLabel={(option) => option}
                                    value={x.position}
                                    onChange={(e,value) => { 
                                      let name = ref1.current.getAttribute("name");
                                      handleInputChange(name, value,i)}
                                    }
                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                  />
                                </Grid>
                                <Grid xs={5} container justify="space-between" className="pl20">
                                  <label className={(x.image=='')?"PickBtn":"PickBtnFileUploaded"} for={`crew${i}`} ></label>
                                  <input 
                                      type="file" 
                                      id={`crew${i}`} 
                                      name="image" 
                                      ref = {ref2}
                                      className="hide"
                                      onChange={(e,value) => { 
                                        // let name = ref2.current.getAttribute("name");
                                        let value1 = e.target.files[0];

                                        handleInputChange('image', value1,i)}
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
                  className="LinkButton"
                  onClick={submitBtn}
                  >
                Save
              </Button>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Railroad;
