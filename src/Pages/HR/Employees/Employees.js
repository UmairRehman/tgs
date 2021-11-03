import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Button,
  TextareaAutosize,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";

/** Local deoendencies & Libraries */
import Services from '../../../Services';


const {
  hr
} = Services;

// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';


const columns = [
    { id: "ap", label: "Applicant", minWidth: 170, type: "value" },
    { id: "emID", label: "Employee ID", minWidth: 120, type: "value" },
    { id: "dop", label: "Date of Application", minWidth: 100, type: "value" },
    { id: "hc", label: "Home City, St", minWidth: 100, type: "value" },
    { id: "pn", label: "Phone Number", minWidth: 170, type: "value" },
    { id: "ed", label: "Email Address", minWidth: 170, type: "value" }
  ];
  
  function createData(
    ap,
    emID,
    dop,
    hc,
    pn,
    ed
  ) 
  
  {
    return {
        ap,
        emID,
        dop,
        hc,
        pn,
        ed
    };
  }

  const rows = [
    createData("Joe Dae", "44433", "01/20/2021", "Houston, Texas", "402-233-5555", "Joe.Dae@gmail.com"),
  ];





const Approval = [
    { title: 'Approve'},
    { title: 'Not Approve' },
    { title: 'Pending' }
];
const PositionLevel = [
    { title: 'Accounting and finance'},
    { title: 'Communications' },
    { title: 'Manager' }
];
const FullTitle = [
    { title: 'Accounting and finance Manager'},
    { title: 'Accounting and finance Assistant' },
    { title: 'Accounting and finance Junior' }
];
const FailPass = [
    { title: 'Pass'},
    { title: 'Fail' },
    { title: 'Pending' }
];




const EmployeeLookup = () => {
  
  let history = useHistory();
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [error, setError] = useState(false)

    const [page, setPage] = React.useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }


  async function onSubmit(event){
    event.preventDefault()
    if(id.length > 0){


      let data={
        id : id ,
      } 

      console.log(data)
      try{
        let data1 = await hr.getEmployee(data) ;
        console.log(data1)    

        history.push({
          pathname : "/employees/result",
          state: data1?.employee[0]?.id
        });
      
      }

      
      catch(exc){
        console.log(exc);
      }
    }
    else{
      console.log("error")
      setError(!error)
    }

    
  }
  
  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Employee Lookup</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage BlueHeadTable FormTableArea">
            <Grid xs={12}>
                <Grid xs={12} md={8} lg={6} container className="HREmSearch">
                  <form style={{width:'100%'}} onClick={onSubmit}>
                      {/* <Grid xs={5}>
                          <Typography>Name</Typography>
                          <TextField id="outlined-basic" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" className="w100p"/>
                      </Grid> */}
                      <Grid style={{marginTop:'10px'}} xs={5}>
                          <Typography>Employee ID</Typography>
                          <TextField id="outlined-basic" value={id} onChange={(e)=>{setId(e.target.value)}}variant="outlined" className="w100p"/>
                          <p style={{display:error == true   ? "block": "none" }}>Id is required</p>
                      </Grid>
                      <Grid xs={2}>
                          <Typography className="SearchBtnDot">.</Typography>
                          <Button type='submit' >Search</Button>
                          <Link  to="/employees/result"></Link>
                      </Grid>
                  </form>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeLookup;