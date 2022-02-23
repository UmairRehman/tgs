import React, { useState , useEffect } from "react";
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

import {  Fab ,
          Box ,
          CircularProgress
        } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

import Switch from '@mui/material/Switch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/CreateTicket';
import {isMobile} from 'react-device-detect';



/** Local deoendencies & Libraries */
import Snackbar from '../../../Components/Snackbar';
import { helpers } from "../../../helpers";

import Services from '../../../Services';
const {
  employee,
  Storage
} = Services;

const {
  showSnackBar,
} = helpers;


const CreateTicket = () => {
  const storage = new Storage ()
  
  //loader states
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [subDepartmentText, setSubDepartmentText] = useState(false);

  //list state
  const [lists, setLists] = useState({
    employees:[],
    types:[],
    categories:[]
  })
  
  //data states
  const [ticketData, setTicketData] = useState({
     requestedBy:'',
     requestedFor:'',
     requestedType:'',
     category:'',
     comments:'',
     alert: false
  })

  const setEmployeeAndTypeList = async () =>{
      let employeeList = await employee.get_employee_listing()
      if(employeeList.httpStatus==200){
        employeeList=employeeList.data;
        employeeList.map(row=>{
          row.name = `${row.firstName} ${row.lastName}`
        })
        console.log(employeeList);
      }
      let typeList = await employee.get_ticket_type_listing()
      if(typeList.httpStatus==200){
        typeList = typeList.data
      }

      setLists({ ...lists , employees:employeeList , types:typeList  }) 
      return true
  }

  const setCategoryList = async (id) =>{
      let categoryList = await employee.get_ticket_category_by_type({id})
      if(categoryList.httpStatus==200){
        categoryList = categoryList.data
          setLists({ ...lists ,  categories:categoryList  })
          // setTicketData({...ticketData,categories:categoryList[0]})
      }
      return true
  }

  useEffect(async () => {
    let user = JSON.parse(storage.get('user_profile'))
    console.log("user",user.id);
    setTicketData({ ...ticketData, requestedBy:user})
    if(user){
      // list
        await setEmployeeAndTypeList()
        // await setTypeList()
    }
    console.log('done');
  }, [])

  const handleSubmitRequested = (event, value, caseType) =>{
    console.log("data",value);
    //cases
    // 1 requestBy
    // 2 requestFor
    // 3 requestedType 
    // 4 category
    // 5 comment
    // 6 alert
    switch (caseType) {

      case 1:
        setTicketData({...ticketData,requestedBy:value})
        break;

      case 2:
        setTicketData({...ticketData,requestedFor:value})
        break;

      case 3:
          try {
            setTicketData({...ticketData,requestedType:value})
            setCategoryList(value.id)
            setSubDepartmentText(!subDepartmentText)
          } catch (error) {
            console.log(error);
          }
        break;

      case 4:
        setTicketData({...ticketData,category:value})
        break;

      case 5:
        setTicketData({...ticketData,comments:event.target.value})
        break;

      case 6:
        setTicketData({...ticketData,alert:value})
        break;  
    
      default:
        break;
    }
  }

  const setData = async () =>{
    let comment = document.getElementById('comment').value
    let data = {
      for : ticketData.requestedFor.id,
      by: ticketData.requestedBy.id,
      type: ticketData.requestedType.id,
      category : ticketData.category.id,
      comment : comment,
      alert : ticketData.alert
    }

    return data;
  }

  const submitData = async (event)=>{

    event.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      
      event.preventDefault();
      let data = await setData()
      if(data){
          try {
            let result = await employee.create_ticket({...data})
            if(result?.httpStatus== 200){
              console.log('result',result);
              resetData()
              setSuccess(true);
              setLoading(false);
              return showSnackBar('Form Successfully Submitted');
            }
          } catch (error) {
            // setSuccess(true);
            setLoading(false);
            console.log(error);
            return showSnackBar(`Error Occured while submitting form: ${error}`);
          }
      }
      console.log('data',data);   
    }
    return false
  }

  const resetData =  () =>{
    setTicketData({
      ...ticketData,
      requestedFor:'',
      requestedType:'',
      category:'',
      comments:'',
      alert: false
    })
    document.getElementById('comment').value=''
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


              <form style={{width:'100%'}} onSubmit={submitData}>
                <Grid xs={12} md={5} className="EvaluatorsTables pr40">
                  <Grid xs={12}>
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Request by
                      </Grid>
                      <Grid xs={12} className="mt14">
                        {/* <Autocomplete
                            // multiple
                            className="w100p"
                            // onChange={(e, value)=>{setRequestBy(value.title)}}
                            id="checkboxes-tags-demo"
                            options={dummyData.RequestBy}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            value={ ticketData.requestedBy }
                            onChange={ (event, value)=>handleSubmitRequested(event,value,1) }
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                 {option}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField  required={true} {...params} variant="outlined" placeholder="Please Select" />
                            )}
                            required
                          /> */}
                          <TextField id="outlined-basic" label="Comment here" value={`${ticketData?.requestedBy?.firstName} ${ticketData?.requestedBy?.lastName}`} disabled variant="outlined" className="w100p"/>
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
                            // multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={lists.employees}
                            value = { ticketData.requestedFor }
                            onChange={ (event,value) =>{
                              handleSubmitRequested(event,value,2)
                            }}
                            getOptionLabel={ option => (option.name) }
                            renderInput={(params) => <TextField  required={true} {...params} label="Please Select" variant="outlined" />}
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
                            options={lists.types}
                            value = { ticketData.requestedType }
                            onChange={ (event,value) =>{
                              handleSubmitRequested(event,value,3)
                            } }
                            getOptionLabel={ option => option.name}
                            renderInput={(params) => <TextField  required={true} {...params} label="Please Select" variant="outlined" />}
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
                            key={subDepartmentText}
                            className="w100p"
                            id="combo-box-demo"
                            disabled={(! ticketData.requestedType)?true:false}
                            options={lists.categories || {} }
                            // value = { ticketData.category }
                            onChange={ (event,value) =>handleSubmitRequested(event,value,4) }
                            getOptionLabel={ option => option.name}
                            renderInput={(params) => <TextField   required={true} {...params} label="Please Select" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize   className="w100p" 
                        id="comment"
                        rowsMin={6} 
                        placeholder="Share Your Thoughts...."
                        // value = { ticketData.comments }
                        // onChange={ (event,value) =>handleSubmitRequested(event,value,5) } 
                        required
                        />
                    </Grid>
                  </Grid>

                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      Alert
                    <Switch checked={ticketData.alert} onChange={ (event,value) =>handleSubmitRequested(event,value,6) } />
                    </Grid>
                    {/* <Grid xs={12} className="mt14">
                    </Grid> */}
                  </Grid>
                  <Grid xs={12} container className="mt50">
                    <Button type="submit" className="LinkButton" >Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Snackbar></Snackbar>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CreateTicket;
