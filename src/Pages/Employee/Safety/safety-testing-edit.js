import React, { useState , useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize
} from "@material-ui/core";
import { Link , useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useLocation } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/safety-testing-edit';
import {isMobile} from 'react-device-detect';
import Services from '../../../Services';

import Snackbar from '../../../Components/Snackbar';
import { helpers } from "../../../helpers";

const {
  employee,
  Storage
} = Services;

const {
  showSnackBar,
} = helpers;

var moment = require('moment-timezone');


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const dummyData = {
  staticData: {
    eventID : "12345",
    date : moment(new Date()).format("dd-mm-yyyy"),
    time : moment(new Date()).format("hh:mm:ss a"),
    jobID : 1
  },
  crew_member: [
    { id: 1, name:'James Mary'},
    { id: 2, name:'Robert Patricia'},
    { id: 3, name:'John Jennifer'},
  ],
  
  testingRules : [
    {id:1 , title:'6.1) Rule Description' },
    {id:2 , title:'6.2) Rule Description' },
    {id:3 , title:'6.3) Rule Description' },
    {id:4 , title:'6.4) Rule Description'},
    {id:5 , title:'6.5) Rule Description' },
    {id:6 , title:'6.6) Rule Description'},
  ],
  
  Results : [
    { id: 1 , title :  'Pass' },
    { id: 2 , title :  'Fail' } ,
    { id: 3 , title :  'Not Available' }
  ]
};




const SafetyTestingEdit = () => {
  let history = useHistory();

  //loader states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  let params = useLocation();
  const eventId = params.state.eventID;
  
  const [ruleList, setRuleList] = useState([])
  const [eventDetail, setEventDetail] = useState({
    eventID : "",
    date : moment(new Date()).format("dd-mm-yyyy"),
    time : moment(new Date()).format("hh:mm:ss a"),
    jobID : ""
  })

  const [safetyTesting, setSafetyTesting] = useState({
    testingRules:[],
    crewList:[]
  });
  

  // crewMember = [
  //   { id:' ', resultId: '' ,comment:''},
  // ]

  const getEventDetails = async (id) =>{
    try {
      let response = await employee.get_test_event_by_id({id})
      if(response.httpStatus ==200)
        return response.data   
    } catch (error) {
        console.log("ERROR",error);
    }  
  }

  const getRulesList = async () =>{
    try {
      let res = await employee.rules_listing()
      if(res.httpStatus ==200)
        return res.data   
    } catch (error) {
        console.log("ERROR",error);
    }  
  }
  
  useEffect(async () => {

    let eventDetails  = await getEventDetails(eventId)
    let crewList =  eventDetails?.crew?.rows?.map((row)=>{
      return ({ id: row.Employee.id, name:`${row.Employee.firstName} ${row.Employee.middleName} ${row.Employee.lastName}`, result:'' , comment:'' })
    })
    setSafetyTesting({ ...safetyTesting, crewList:crewList })  
    let details = { 
      eventID : eventDetails.event.id,
      date : moment(new Date(eventDetails.event.date)).format("DD-MM-YYYY"),
      time : eventDetails.event.time.slice(0,-3),
      jobID : eventDetails.event.jobID,
     }
     setEventDetail(details)
    let rulesList = await getRulesList()
    setRuleList(rulesList)
    console.log(('data',rulesList));

  }, [])
 
  const handleCrewData = (module , value , index) =>{
    console.log(module , value , index);
    const { crewList } = safetyTesting ; 

    crewList[index][module] = value ;
    setSafetyTesting({ ...safetyTesting , crewList:crewList })
  }
  
  const handleSubmitData = (event ,value, key) => {
    console.log(value);
    switch (key) {
      case 1:
        setSafetyTesting({...safetyTesting,testingRules:value});
        break;

      default:
        break;
    }
  };

  const finalData = () => {
    let { crewList } = safetyTesting
    let rule_result = crewList.map((row, index)=>{
      let comment = document.getElementById(`comment${index}`).value
      let result = row.result.title
      return ({crew_id:row.id , result,comment})
    })

    let data = {
        rule_id : safetyTesting.testingRules.id,
        event_id : eventId,
        rule_result : rule_result
    }
    return data
  }

  const resetData = () => {
    
    let crewList = safetyTesting.crewList.map((row,index)=>{
      document.getElementById(`comment${index}`).value = ''
      return ({ id: row.id, name:`${row.name}`, result:'', comment:'' })
    })
    console.log(crewList);
    setSafetyTesting({testingRules:[],crewList:crewList})
}

  const submitBtn = async (event) =>{ 
    
    event.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      let body = await finalData();
      if(body){
        try {
          let res = await employee.add_rule_event({...body})
          if(res?.httpStatus == 200)
          {
            console.log('result',res);
            setSuccess(true);
            resetData()
            setLoading(false);
            setTimeout(() => {
              history.push('/safety-testing')
            }, 1500);
            return showSnackBar('Form Successfully Submitted');
          }  
        } catch (error) {
          setSuccess(false);
          setLoading(false);
          console.log("error",error);
          return showSnackBar(`Error Occured while submitting form: ${error}`);
        }
      }
    }
    return false
  }

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
          <Grid id="PageTitle">Add Testing Rule</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
          <form style={{width:'100%'}} onSubmit={submitBtn}>
            <Grid xs={12} container>
              <Grid xs={4}>
                {/* List Static Data Start */}
                <List>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Event ID
                    </Grid>
                    <Grid>
                      {eventDetail.eventID}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Date
                    </Grid>
                    <Grid>
                      {eventDetail.date}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Time
                    </Grid>
                    <Grid>
                      {eventDetail.time}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Job ID
                    </Grid>
                    <Grid>
                      {eventDetail.jobID}
                    </Grid>
                  </ListItem>
                </List>
                {/* Static Data End */}
              </Grid>
              <Grid xs={8}>
                <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                      Testing Rules
                      </Grid>
                      <Grid xs={12} className="mt14 MultiCheckBox">
                        <Autocomplete
                          className="w100p"
                          id="checkboxes-tags-demo"
                          options={ruleList}
                          disableCloseOnSelect
                          getOptionLabel={option => option.FullName}
                          value = { safetyTesting.testingRules }
                          onChange={ (event,value) =>handleSubmitData(event,value,1) }
                          renderOption={(option, { selected }) => (
                            <React.Fragment>
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                              />
                              {option.FullName}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField required={true} {...params} variant="outlined" placeholder="Rules" />
                          )}
                        />
                      </Grid>
                    </Grid>
              </Grid>
            </Grid>
            
            <Grid xs={12} container className="FormTableArea mt20">
              {
                safetyTesting?.crewList.map((row,index)=>{
                  return(
                    <Grid className="Cols4 mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12}  container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} >
                       <TextField required={true} id={`name${index}`} label="Comment here" value={`${row.name}`} disabled variant="outlined" className="w100p"/>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id={`result${index}`} 
                          options={dummyData.Results}
                          value = { row.result.title }
                          onChange={ (event,value) =>handleCrewData('result',value,index) }
                          getOptionLabel={option => option.title}
                          renderInput={(params) => <TextField required={true} {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize 
                          required={true}
                          className="w100p"
                          id={`comment${index}`} 
                          rowsMin={6} 
                          placeholder="Share Your Thoughts...."
                      />
                    </Grid>
                  </Grid>
                </Grid>
                  )
                })     
              }
                <Grid xs={12} className="mt30">
                  <Link to="/safety-testing" className="LinkButtonBack mr10">Close</Link>
                  <Button className="LinkButton" onClick={submitBtn}>Save</Button>
                </Grid>
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

export default SafetyTestingEdit;
