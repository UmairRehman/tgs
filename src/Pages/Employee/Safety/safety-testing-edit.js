import React, { useState , useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useLocation } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/safety-testing-edit';
import {isMobile} from 'react-device-detect';
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
    '6.1) Rule Description' ,
    '6.2) Rule Description' ,
    '6.3) Rule Description' ,
    '6.4) Rule Description',
    '6.5) Rule Description' ,
    '6.6) Rule Description',
  ],
  
  Results : [
    { id: 1 , title :  'Result Description 1' },
    { id: 2 , title :  'Result Description 2' } ,
    { id: 3 , title :  'Result Description 3' } ,
    { id: 4 , title :  'Result Description 4' },
    { id: 5 , title :  'Result Description 5' } ,
    { id: 6 , title :  'Result Description 6' }
  ]
};




const SafetyTestingEdit = () => {
  let params = useLocation();
  const eventId = params.state.eventID;
  const [safetyTesting, setSafetyTesting] = useState({
    testingRules:[],
    crewList:[]
  });
  

  // crewMember = [
  //   { id:' ', resultId: '' ,comment:''},
  // ]

  useEffect(() => {

    let crewList =  dummyData.crew_member.map((row)=>{
      return ({ id: row.id, name:row.name, result:'' , comment:'' })
    })
    console.log("eventId",eventId);
    console.log("crewList",crewList);
    setSafetyTesting({ ...safetyTesting , crewList:crewList })    
  }, [])
  
  //cases
      //  testingRule = 1
      //  crew member 1 :  name = 2 , result = 3, comment = 4 
      //  crew member 2 :  name = 5 , result = 6, comment = 7 
      //  crew member 3 :  name = 8 , result = 9, comment = 10 
      //  crew member 4 :  name = 11 , result = 12, comment = 13

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

      // case 2:
      //   crew_member1.name=value 
      //   setSafetyTesting({...safetyTesting, crew_member1});
      //   break;

      // case 3:
      //   crew_member1.result=value 
      // setSafetyTesting({...safetyTesting , crew_member1  });
      // break;

      // case 4:
      //   crew_member1.comment=event.target.value 
      // setSafetyTesting({...safetyTesting , crew_member1  });
      // break;

      // case 5:
      //   crew_member2.name=value 
      //   setSafetyTesting({...safetyTesting, crew_member2});
      //   break;

      // case 6:
      //   crew_member2.result=value 
      // setSafetyTesting({...safetyTesting , crew_member2  });
      // break;

      // case 7:
      //   crew_member2.comment=event.target.value 
      // setSafetyTesting({...safetyTesting , crew_member2  });
      // break;

      // case 8:
      //   crew_member3.name=value 
      //   setSafetyTesting({...safetyTesting, crew_member3});
      //   break;

      // case 9:
      //   crew_member3.result=value 
      // setSafetyTesting({...safetyTesting , crew_member3  });
      // break;

      // case 10:
      //   crew_member3.comment=event.target.value 
      // setSafetyTesting({...safetyTesting , crew_member3  });
      // break;

      // case 11:
      //   crew_member4.name=value 
      //   setSafetyTesting({...safetyTesting, crew_member4});
      //   break;

      // case 12:
      //   crew_member4.result=value 
      // setSafetyTesting({...safetyTesting , crew_member4  });
      // break;

      // case 13:
      //   crew_member4.comment=event.target.value 
      // setSafetyTesting({...safetyTesting , crew_member4  });
      // break;
        
      default:
        break;
    }
  };

  const submitBtn = () =>{
    let { crewList } = safetyTesting

    let x = crewList.map((row, index)=>{
      let comment = document.getElementById(`comment${index}`).value
      let resultId = row.result.id
      return ({id:row.id , resultId,comment})
    })
    let data = {
      rules : safetyTesting.testingRules ,
      crew_member : x
    }
    // setSafetyTesting({...safetyTesting, })
    console.log("data",data);
    
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
            
            <Grid xs={12} container>
              <Grid xs={4}>
                {/* List Static Data Start */}
                <List>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Event ID
                    </Grid>
                    <Grid>
                      {dummyData.staticData.eventID}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Date
                    </Grid>
                    <Grid>
                      {dummyData.staticData.date}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Time
                    </Grid>
                    <Grid>
                      {dummyData.staticData.time}
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Job ID
                    </Grid>
                    <Grid>
                      {dummyData.staticData.jobID}
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
                          multiple
                          className="w100p"
                          id="checkboxes-tags-demo"
                          options={dummyData.testingRules}
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
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
                              {option}
                            </React.Fragment>
                          )}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" placeholder="Rules" />
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
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      {/* <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={dummyData.crew_member}
                        value = { safetyTesting.crew_member1.name }
                        onChange={ (event,value) =>handleSubmitData(event,value,2) }
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      /> */}
                       <TextField required={true} id="outlined-basic" label="Comment here" value={`${row.name}`} disabled variant="outlined" className="w100p"/>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={dummyData.Results}
                          value = { row.result.title }
                          onChange={ (event,value) =>handleCrewData('result',value,index) }
                          getOptionLabel={option => option.title}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize 
                          className="w100p"
                          id={`comment${index}`} 
                          rowsMin={6} 
                          placeholder="Share Your Thoughts...."
                          // value = { row?.comment }
                          // onChange={ (event,value) =>{
                          //   value = event.target.value  
                          //   handleSubmitData('comment',value,index)
                          //   }}  
                      />
                    </Grid>
                  </Grid>
                </Grid>
                  )
                })
                  
              }
                
                {/* <Grid className="Cols4 mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={dummyData.crew_member}
                        value = { safetyTesting.crew_member2.name }
                        onChange={ (event,value) =>handleSubmitData(event,value,5) }
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={dummyData.Results}
                          value = { safetyTesting.crew_member2.result }
                          onChange={ (event,value) =>handleSubmitData(event,value,6) }
                          getOptionLabel={(option) => option}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" 
                          rowsMin={6} 
                          placeholder="Share Your Thoughts...."
                          value = { safetyTesting.crew_member2.comments }
                          onChange={ (event,value) =>handleSubmitData(event,value,7) }  
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="Cols4 mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={dummyData.crew_member}
                        value = { safetyTesting.crew_member3.name }
                        onChange={ (event,value) =>handleSubmitData(event,value,8) }
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={dummyData.Results}
                          getOptionLabel={(option) => option}
                          value = { safetyTesting.crew_member3.result }
                          onChange={ (event,value) =>handleSubmitData(event,value,9) }
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" 
                          rowsMin={6} 
                          placeholder="Share Your Thoughts...."
                          value = { safetyTesting.crew_member3.comments }
                          onChange={ (event,value) =>handleSubmitData(event,value,10) }  
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="Cols4 mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={dummyData.crew_member}
                        getOptionLabel={(option) => option}
                        value = { safetyTesting.crew_member4.name }
                        onChange={ (event,value) =>handleSubmitData(event,value,11) }
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={dummyData.Results}
                          getOptionLabel={(option) => option}
                          value = { safetyTesting.crew_member4.result }
                          onChange={ (event,value) =>handleSubmitData(event,value,12) }
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" 
                          rowsMin={6} 
                          placeholder="Share Your Thoughts...."
                          value = { safetyTesting.crew_member4.comments }
                          onChange={ (event,value) =>handleSubmitData(event,value,13) }  
                      />
                    </Grid>
                  </Grid>
                </Grid> */}
                <Grid xs={12} className="mt30">
                  <Button className="LinkButton" onClick={submitBtn}>Save</Button>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SafetyTestingEdit;
