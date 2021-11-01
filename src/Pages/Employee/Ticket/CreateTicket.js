import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox, 
  Button,
  TextareaAutosize,
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/CreateTicket';
import {isMobile} from 'react-device-detect';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const dummyData = {
  RequestBy : [
    "James Mary",
    "Robert Patricia",
    "John Jennifer" 
  ],
   RequestFor : [
    'David Afton',
    'Alexandra Daddario' ,
    'Stephen Hartley' 
  ],
   RequestType : [
    'IT department',
    'Accounts  department' ,
    'Management  department'
  ],
   RequestCat : [
    'IT',
    'Accounts' ,
    'Management' 
  ]
}

const CreateTicket = () => {

  const [ticketData, setTicketData] = useState({
     requestedBy:'',
     requestedFor:[],
     requestedType:'',
     category:'',
     comments:''
  })

  const handleSubmitRequested = (event, value, caseType) =>{
    console.log("data",value);
    //cases
    // 1 requestBy
    // 2 requestFor
    // 3 requestedType 
    // 4 category
    // 5 comment
    switch (caseType) {

      case 1:
        setTicketData({...ticketData,requestedBy:value})
        break;

      case 2:
        setTicketData({...ticketData,requestedFor:value})
        break;

      case 3:
        setTicketData({...ticketData,requestedType:value})
        break;

      case 4:
        setTicketData({...ticketData,category:value})
        break;

      case 5:
        setTicketData({...ticketData,comments:event.target.value})
        break;
    
      default:
        break;
    }
  }

  const submitData = ()=>{
    console.log("ticket Data", ticketData);
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
          <Grid id="PageTitle">Create a Ticket</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12} md={5} className="EvaluatorsTables pr40">
                  <Grid xs={12}>
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Request by
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                            // multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={dummyData.RequestBy}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            value={ ticketData.requestedBy }
                            onChange={ (event, value)=>handleSubmitRequested(event,value,1) }
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                 {/* <Checkbox
                                  icon={icon}
                                  checkedIcon={checkedIcon}
                                  style={{ marginRight: 8 }}
                                  checked={selected}
                                />  */}

                                {option}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" placeholder="Please Select" />
                            )}/>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Request For
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                            multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={dummyData.RequestFor}
                            disableCloseOnSelect
                            value = { ticketData.requestedFor }
                            onChange={ (event,value) =>handleSubmitRequested(event,value,2) }
                            getOptionLabel={(option) => option}
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
                              <TextField {...params} variant="outlined" placeholder="Please Select" />
                            )}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Request Type
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={dummyData.RequestType}
                            value = { ticketData.requestType }
                            onChange={ (event,value) =>handleSubmitRequested(event,value,3) }
                            getOptionLabel={(option) => option}
                            renderInput={(params) => <TextField {...params} label="Please Select" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Category
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={dummyData.RequestCat}
                            value = { ticketData.category }
                            onChange={ (event,value) =>handleSubmitRequested(event,value,4) }
                            getOptionLabel={(option) => option}
                            renderInput={(params) => <TextField {...params} label="Please Select" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize 
                        className="w100p" 
                        rowsMin={6} 
                        placeholder="Share Your Thoughts...."
                        value = { ticketData.comments }
                        onChange={ (event,value) =>handleSubmitRequested(event,value,5) } 
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} container className="mt50">
                    <Button className="LinkButton" onClick={submitData} >Submit</Button>
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

export default CreateTicket;
