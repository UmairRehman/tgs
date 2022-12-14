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

const {
    hr
} = Services;
var moment = require('moment-timezone');

// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';
const AlartUpdate = () => {

    
    let history = useHistory();
    const location  = useLocation();

    const [date, setDate] = useState(new Date())
    const [tickets, setTickets] = useState({})
    const [alertID, setAlertID] = useState('')
    const [Btickets, setBtickets] = useState({})
    const [Ftickets, setFtickets] = useState({})
    const [ticketsCategory, setTicketsCategory] = useState({})
    const [ticketstype, setTicketstype] = useState({})
    
    useEffect(async() => {
        window.scrollTo(0, 0);
        let alertData = location?.state
        console.log(alertData)
        setAlertID(alertData)
        try{
            
            let data = await hr.get_tickets_by_id(alertData) ;
            console.log(data)
            setTickets(data)


        }
        catch(exc){
            console.log(exc);
        }
        

    
    }, []);




 async function onSubmitAlert(event){
    event.preventDefault()
    console.log("data");
    let data = {
        comment: document.getElementById('comment').value, 
        id :alertID.id
    } 
    console.log(data)
    
    try{
        let data1 = await hr.update_tickets(data) ;
        history.push('/tickets-alerts')
    }
    catch(exc){
        console.log(exc);
    }



}

    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

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
            <Grid xs={6} className="TicketAlertTab">
                <Grid xs={12} container>
                <Link to="/tickets-alerts/alert/details" className="ActiveTab">Close Alert</Link>
                <Link to="/tickets-alerts/ticket/details">Ticket Update</Link>
                </Grid>
            </Grid>
            <Grid xs={12} className="TicketAlertTabH1">
                <Typography variant="h1" component="h2">Close Alert</Typography>
            </Grid>
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12}>
                    <List>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Alert Department
                            </Grid>
                            <Grid>
                            {tickets?.data?.TicketType?.name }
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Alert Category
                            </Grid>
                            <Grid>
                            {tickets?.data?.TicketCategory?.name }
                            
                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Alert Description
                            </Grid>
                            <Grid>
                            {tickets?.data?.creation_comment }

                            </Grid>
                        </ListItem>
                        <ListItem container className="p0 pt6 pb20">
                            <Grid className="w250 bold">
                            Alert Date
                            </Grid>
                            <Grid>
                            { moment(tickets?.data?.createdAt).utc().format('MM-DD-YYYY') }
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>

                <form  onSubmit={onSubmitAlert}>
                <Grid xs={12} md={6}>
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Date
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextField
                                        id="date"
                                        type="date"
                                        onChange={(e,value)=>setDate(e.target.value)}
                                        className="DateTimePicker"
                                        defaultValue="YY-MM-DD"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* ---------- */}
                    <Grid xs={12} container>
                        <Grid xs={12} className="mt30 pr40">
                            <Grid xs={12}>
                                <Grid xs={12} className="mbold">
                                    Closeout Comment
                                </Grid>
                                <Grid xs={12} className="mt14">
                                    <TextareaAutosize id="comment" className="w100p" rowsMin={6} placeholder="Comment here"  required/>
                                </Grid>
                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                    Please leave this field empty if you have no comments
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid xs={12} container justify="space-between" className="mt50 pr40">
                        <Link to="/tickets-alerts" className="LinkButtonBack">Back</Link>
                        <Button  className="LinkButton" type="submit">Save & Continue</Button>
                        {/* <Link to="/tickets-alerts/alert/1" className="LinkButton">Save & Continue</Link> */}
                    </Grid>
                </Grid>
                </form>


            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AlartUpdate;
