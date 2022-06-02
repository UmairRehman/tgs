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
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router'

/** Local deoendencies & Libraries */
import Services from '../../../Services';
import Snackbar from '../../../Components/Snackbar';
import { helpers } from "../../../helpers";

const {
    hr
} = Services;

const {
    showSnackBar,
} = helpers;

var moment = require('moment-timezone');

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';
const TicketUpdate = () => {

    let history = useHistory();
    const location  = useLocation();


    const [date, setDate] = useState(new Date())
    const [tickets, setTickets] = useState({})
    const [ticketID, setticketID] = useState('')
    const [Comment, setComment] = useState('');

    useEffect(async() => {
        window.scrollTo(0, 0);
        let ticketData = location?.state
        console.log(ticketData)
        setticketID(ticketData)
        try{
            
            let data = await hr.get_tickets_by_id(ticketData) ;
            console.log(data)
            setTickets(data)
            setComment((data?.data?.close_comment)?data?.data?.close_comment:null)

        }
        catch(exc){
            console.log(exc);
        }
        

    
    }, []);


function handleComment(value) {
    setComment(value);
}

 async function onSubmitTicket(event){
    event.preventDefault()
    console.log("data",Comment);
    let data = {
        comment:Comment, 
        id :ticketID.id
    } 
    console.log(data)
    
    try{
        let data1 = await hr.update_tickets(data) ;
        setTimeout(() => {
            history.push('/tickets-alerts')
          }, 1500);
        return showSnackBar('Form Successfully Submitted');
    }
    catch(exc){
        console.log(exc);
        return showSnackBar(`Error Occured while submitting form: ${exc}`);
    }



}

//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12} className="Liq-Container HRPortal AlertUpdate">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
            <PageHeader />
            <Grid id="PageTitle">Tickets and Alerts</Grid>
            {/* Page Start */}
            <Grid xs={12} md={6} className="TicketAlertTab">
                <Grid xs={12} container>
                    <Link to="/tickets-alerts/alert/details">Close Alert</Link>
                    <Link to="/tickets-alerts/ticket/details" className="ActiveTab">Ticket Update</Link>
                </Grid>
            </Grid>
            <Grid xs={12} className="TicketAlertTabH1">
                <Typography variant="h1" component="h2">Update Ticket</Typography>
            </Grid>
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Requested For
                            </Grid>
                            <Grid>
                                {tickets?.data?.BEmployee?.firstName + ' ' + tickets?.data?.BEmployee?.lastName}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Requested By
                            </Grid>
                            <Grid>
                            {tickets?.data?.FEmployee?.firstName + ' ' + tickets?.data?.FEmployee?.lastName}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket of Employee ID
                            </Grid>
                            <Grid>
                            {tickets?.data?.id }
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Date Ticket Entered
                            </Grid>
                            <Grid>
                            { moment(tickets?.data?.createdAt).format('MM-DD-YYYY') }
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Department
                            </Grid>
                            <Grid>
                            {tickets?.data?.TicketType?.name }
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Type
                            </Grid>
                            <Grid>
                            {tickets?.data?.TicketType?.name }
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Category
                            </Grid>
                            <Grid>
                            {tickets?.data?.TicketCategory?.name}
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Ticket Comments
                            </Grid>
                            <Grid>
                            {tickets?.data?.creation_comment}
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
                <form className="w-100" onSubmit={onSubmitTicket}>
                <Grid xs={12} md={6}>
                    {/* <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Date
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextField
                                        id="date"
                                        type="date"
                                        className="DateTimePicker"
                                        onChange={(e,value)=>setDate(e.target.value)}
                                        defaultValue="yyyy-MM-dd"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> */}
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Comment
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextareaAutosize id="comment" className="w100p" rowsMin={6} placeholder="Comment here"  required={true} onChange={(event,value)=>{handleComment(event.target.value)}}
                                    disabled={(tickets?.data?.close_comment)?true:false}
                                    value={Comment}/>
                                </Grid>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please leave this field empty if you have no comments
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid xs={12} container justify="space-between" className="mt50 pr40">
                        <Link to="/tickets-alerts" className="LinkButtonBack">Back</Link>
                        <Button type="submit" 
                        disabled={(tickets?.data?.close_comment)?true:false}
                        className="LinkButton">Save & Continue</Button>
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

export default TicketUpdate;
