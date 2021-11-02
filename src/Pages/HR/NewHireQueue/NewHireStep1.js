import React, {useState,useEffect} from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import DatePicker from 'react-date-picker';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";


/** Local deoendencies & Libraries */
import Services from '../../../Services';


const {
  hr
} = Services;
var moment = require('moment-timezone');

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;





const Approval = [
    { id : '1', title: 'Approve'},
    { title: 'Not Approve' },
    { title: 'Pending' }
];
const PositionLevel = [
    { title: 'Managment' , id : 1},
    { title: 'Executive' , id:2},
    { title: 'Labour' , id:3 }
];
const PositionLoc = [
    { title: 'Head office Canda'},
    { title: 'Australia Branch' },
    { title: 'Newzealand Branch' }
];
const FullTitle = [
    { title: 'Accounting and finance Manager'},
    { title: 'Accounting and finance Assistant' },
    { title: 'Accounting and finance Junior' }
];
const JobCode = [
    { title: '0117' },
    { title: '1280' },
    { title: '5678' }
];
const Paytype = [
    { title: 'hourly' },
    { title: 'monthly' },
    { title: 'weekly' }
];
const queueRate = [
    {title: '10'},
    {title: '20'},
    {title: '30'},
];
const Supervisor = [
    {title: 'John Alex'},
    {title: 'Greek Alan'},
    {title: 'Susan John'}
];
const ITR1 = ['Yes', 'No'];
const ITR2 = ['Yes', 'No'];
const ITR3 = ['Yes', 'No'];
const ITR4 = ['Yes', 'No'];
const ITR5 = ['Yes', 'No'];



const OJE = ['Yes', 'No'];

const NewHireStep1 = () => {

      let history = useHistory();

    const [applicantData, setApplicantData] = useState({})
    const [emergencyContact, setEmergencyContact] = useState({})
    const [files, setFiles] = useState({})
    const [spouse, setSpouse] = useState({})



    // states for Form 

    const [step1, setStep1] = useState('')
    const [position, setPosition] = useState('')
    const [jobCode, setjobCode] = useState('')
    const [rate, setrate] = useState('')
    const [department, setdepartment] = useState('')
    const [fullTitle, setfullTitle] = useState('')
    const [positionCategory, setpositionCategory] = useState('')
    const [positionLocation, setpositionLocation] = useState('')
    const [partType, setpartType] = useState('')
    const [startDate, setstartDate] = useState(new Date())
    const [subDepartment, setsubDepartment] = useState('')
    const [supervisor, setSupervisor] = useState('')
    const [comment, setcomment] = useState('')
    const [computer, setcomputer] = useState('')
    const [active, setactive] = useState('')
    const [companyCellPhone, setcompanyCellPhone] = useState('')
    const [companyVehicle, setcompanyVehicle] = useState('')
    const [fuelCard, setfuelCard] = useState('')
    const [ITComment, setITComment] = useState('')
    const [locationID, setLocationID] = useState('')


    // dropdowns

    const [jobCategoriesOption, setJobCategoriesOption] = useState([])
    const [locationDropdown, setLocationDropdown] = useState([])
    const [paytypeDropdown, setPaytypeDropdown] = useState([])
    const [departmentDropdown, setDepartmentDropdown] = useState([])
    const [SubDepartmentDropdown, setSubDepartmentDropdown] = useState([])




    const location  = useLocation();
    const [holdData, setHoldData] = useState({})

    
    async function onformSubmit(event){
        event.preventDefault();
        let data = {
            employee_id : holdData?.id,
            Supervisor_Id : holdData?.SupervisorId == null ? 1 : 1,
            location_id: positionLocation, 
            step1,
            position,
            job_code: jobCode,
            rate,
            department: department,
            full_title : fullTitle,
            position_level: 1,
            position_category: positionCategory,
            pay_type : partType,
            SubDepartment_Id: subDepartment,
            start_date : moment(startDate).format('YYYY-MM-DD'),
            // subDepartment,
            supervisor,
            comment: document.getElementById('comment1').value,
            IT:{
                computer: computer  == "Yes" ? true :false,
                AD : active == "Yes" ? true :false,
                cell_phone: companyCellPhone == "Yes" ? true :false,
                vehicle : companyVehicle== "Yes" ? true :false,
                fuel_card : fuelCard== "Yes" ? true :false,
                comment: document.getElementById('comment1').value ,
            }
            
        }
        console.log(data)

        
        try{
            let data1 = await hr.step1(data) ;
            history.push('./new-hire-queue')
        
        }
        catch(exc){
            console.log(exc);
        }
    }

    useEffect(async() => {
        window.scrollTo(0, 0);

        let applicantDataHistory = location?.state
        setHoldData(applicantDataHistory)
        console.log(applicantDataHistory)

        try{
            let data = await hr.getAllApplicantsByID(applicantDataHistory) ;
            setApplicantData(data.employee)
            setEmergencyContact(data.emergency_contact)
            setFiles(data.files)
            setSpouse(data.spouse)
            console.log(applicantData)
        
        }
        catch(exc){
            console.log(exc);
        }

        // get job catrgories options
        try{
            let jobCategory = await hr.get_job_categories() ;
            setJobCategoriesOption(jobCategory.data)

            let locationData = await hr.location() ;
            setLocationDropdown(locationData.data)

            let payLocationData = await hr.pay_type() ;
            setPaytypeDropdown(payLocationData.data)

            let departmentData = await hr.department() ;
            setDepartmentDropdown(departmentData.data)
        }
        catch(exc){
            console.log(exc);
        }
        


    }, []);


    async function onDepartmentChange(e, value){
        setdepartment(value.id)
        try{
            let data = {
                id: value.id
            }
            let jobSubCategory = await hr.subDepartment(data) ;
            console.log(jobSubCategory?.data?.rows)
            setSubDepartmentDropdown(jobSubCategory?.data?.rows)
            
        }
        catch(exc){
            console.log(exc);
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
          <Grid id="PageTitle">New Applicant - Step 1 Approval</Grid>
          {/* Page Start */}
          <form onSubmit={onformSubmit}>
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Applicant Name
                            </Grid>
                            <Grid>
                            {applicantData?.firstName}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Employee ID
                            </Grid>
                            <Grid>
                            {applicantData?.id}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Date of Application
                            </Grid>
                            <Grid>
                            {moment(new Date(applicantData?.updatedAt)).format("dd-mm-yyyy")}
                            
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Home City, St
                            </Grid>
                            <Grid>
                            {applicantData?.address}
                            , {applicantData?.address1}

                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Phone Number
                            </Grid>
                            <Grid>
                            {applicantData?.cellPhone}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Email Address
                            </Grid>
                            <Grid>
                            {applicantData?.email}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Job ID / Description
                            </Grid>
                            <Grid>
                            {applicantData?.jobDescription}

                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Job Category
                            </Grid>
                            <Grid>
                            {applicantData?.JobCategoryId}

                            </Grid>
                        </ListItem>
                        <ListItem container alignItems="flex-start" className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Notes For HR
                            </Grid>
                            <Grid xs={3}>
                            {applicantData?.notesForHR}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Questionaire
                            </Grid>
                            <Grid className="PDFDownload">
                                <Grid className="FileName">
                                    Questionaire
                                </Grid>
                                <Button></Button>
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                                Resume
                            </Grid>
                            <Grid className="PDFDownload">
                                <Grid className="FileName">
                                    Resume
                                </Grid>
                                <Button></Button>
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={12} md={8} lg={6}>
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Step 1 Approval
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={Approval}
                                        onChange={(e, value)=>{setStep1(value.title)}}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={6} className="pr20">
                                <Grid xs={12} className="mbold mb14">
                                    Date
                                </Grid>
                                <TextField id="outlined-basic" label="3/10/2021" disabled variant="outlined" className="w100p"/>
                            </Grid>
                            <Grid xs={6} className="pl20">
                                <Grid xs={12} className="mbold mb14">
                                    Time
                                </Grid>
                                <TextField id="outlined-basic" label="04:05 PM" disabled variant="outlined" className="w100p"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Level
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setPosition(value.title)}}
                                        options={PositionLevel}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Full Title
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        onChange={(e, value)=>{setfullTitle(value.title)}}
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={FullTitle}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Category
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setpositionCategory(value.id)}}
                                        options={jobCategoriesOption}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Position Location
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        onChange={(e, value)=>{setpositionLocation(value.id)}}
                                        id="combo-box-demo"
                                        options={locationDropdown}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Job Code
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setjobCode(value.title)}}
                                        options={JobCode}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Pay Type
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setpartType(value.id)}}
                                        options={paytypeDropdown}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Rate
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        id="combo-box-demo"
                                        onChange={(e, value)=>{setrate(value.title)}}
                                        options={queueRate}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Start Date
                                </Grid>
                                <Grid xs={12} className="mt14">
                                     <DatePicker
                                        onChange={(value) => { setstartDate(value) }}
                                        value={startDate}
                                        className="DateTimePicker"
                                        defaultValue="YY-MM-DD"
                                        id="date"
                                        className="datePickerReact"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container className="LRM40">
                        <Grid xs={6} className="mt30 pr20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Department
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        onChange={(e, value)=>onDepartmentChange(e,value)}
                                        // onChange={(e, value)=>{setdepartment(value.id)}}
                                        id="combo-box-demo"
                                        options={departmentDropdown}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={6} container className="mt30 pl20">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Sub - Department
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        className="w100p"
                                        // onChange={(e,value)=>onChangeSubDepartment(e,value)}
                                        onChange={(e, value)=>{setsubDepartment(value.id)}}
                                        id="combo-box-demo"
                                        options={SubDepartmentDropdown}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Supervisor
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <Autocomplete
                                        onChange={(e, value)=>{setSupervisor(value.title)}}
                                        className="w100p"
                                        id="combo-box-demo"
                                        options={Supervisor}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required={true}  {...params} label="Select" variant="outlined" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Other
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextareaAutosize id="comment1" className="w100p" rowsMin={6} placeholder="Comment here" />
                                </Grid>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please leave this field empty if you have no comments
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    {/* ---------- */}
                    <Grid xs={12}>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9} className="mbold">
                                IT Request
                            </Grid>
                            <Grid xs={3} className="mbold">
                                Required
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Computer
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    onChange={(e, value)=>{setcomputer(value)}}
                                    options={ITR1}
                                    className="w100p"
                                    renderInput={(params) => <TextField required={true}  {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Active Directory
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    options={ITR2}
                                    onChange={(e, value)=>{setactive(value)}}
                                    className="w100p"
                                    renderInput={(params) => <TextField required={true}  {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between"  className="mt30">
                            <Grid xs={9}>
                                Company Cell Phone
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                onChange={(e, value)=>{setcompanyCellPhone(value)}}
                                    id="controllable-states-demo"
                                    options={ITR3}
                                    className="w100p"
                                    renderInput={(params) => <TextField required={true}  {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Company Vehicle
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    onChange={(e, value)=>{setcompanyVehicle(value)}}
                                    options={ITR4}
                                    className="w100p"
                                    renderInput={(params) => <TextField required={true}  {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={12} container justify="space-between" className="mt30">
                            <Grid xs={9}>
                                Fuel Card
                            </Grid>
                            <Grid xs={3}>
                                <Autocomplete
                                    id="controllable-states-demo"
                                    onChange={(e, value)=>{setfuelCard(value)}}
                                    options={ITR5}
                                    className="w100p"
                                    renderInput={(params) => <TextField required={true}  {...params} variant="outlined" placeholder="Select"/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Comments to IT
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextareaAutosize required id="comment2" className="w100p" rowsMin={6} placeholder="Comment here" />
                                </Grid>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please leave this field empty if you have no comments
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} className="mt50">
                    <Grid xs={12} md={8} lg={6} container justify="space-between">
                        <Link to="/new-hire-queue" className="LinkButtonBack">Back</Link>
                        <Button type="submit" >
                            {/* <Link to="/new-hire-queue/details/approval" className="LinkButton"> */}
                                Save & Continue
                            {/* </Link> */}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          </form>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewHireStep1;
