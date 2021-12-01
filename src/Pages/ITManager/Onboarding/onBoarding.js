import React, { useState, useEffect } from "react";
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
  Paper,
  List,
  ListItem,
  Select,
  Card,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { environment } from "../../../Environments/environment";


// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

/** Local deoendencies & Libraries */
import Services from "../../../Services";
const { hr } = Services;
var moment = require("moment-timezone");

const { apiPath } = environment;


const OnBoarding = () => {
  let history = useHistory();
  const location = useLocation();

  const [activeDirectory, setActiveDirectory] = useState({
    orderDate: '',
    completeDate: ''
  })

  const [email, setEmail] = useState({
    orderDate: '',
    completeDate: ''
  })


  const [computer, setComputer] = useState({
    orderDate: '',
    completeDate: ''
  })

  const [cell, setCell] = useState({
    orderDate: '',
    completeDate: ''
  })

  const [vehicle, setVehicle] = useState({
    orderDate: '',
    completeDate: ''
  })

  const [fuelCard, setFuelCard] = useState({
    orderDate: '',
    completeDate: ''
  })




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function onFormSubmit(event) {
    event.preventDefault();
    let data = {

    };

    console.log("submit")

  }


  return (
    <Grid container xs={12} className="Liq-Container HRPortal">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">IT New Hire Onboarding</Grid>
          {/* Page Start */}
          <Grid class="mt20" xs={12}>
            <List>
              <ListItem container className="p0 pt6 pb20">
                <Grid className="w250 bold">Applicant Name</Grid>
                <Grid>Umair</Grid>
              </ListItem>
            </List>
          </Grid>

          <Grid xs={12}>
            <List>
              <ListItem container className="p0 pt6 pb20">
                <Grid className="w250 bold">Applicant Name</Grid>
                <Grid>Umair</Grid>
              </ListItem>
            </List>
          </Grid>

          <Grid xs={12}>
            <List>
              <ListItem container className="p0 pt6 pb20">
                <Grid className="w250 bold">Applicant Name</Grid>
                <Grid>Umair</Grid>
              </ListItem>
            </List>
          </Grid>

          <Grid xs={12}>
            <List>
              <ListItem container className="p0 pt6 pb20">
                <Grid className="w250 bold">Applicant Name</Grid>
                <Grid>Umair</Grid>
              </ListItem>
            </List>
          </Grid>



          <Grid style={{ margin: '0' }} xs={12} className="ContentPage BlueHeadTable FormTableArea">
            <Grid xs={12} md={8} lg={6}>
              <form onSubmit={onFormSubmit}>
                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} className="mt30 pr20">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="mt30 pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">
                        Order Date
                      </Grid>

                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">
                        Date Completed
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>



                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Active Directory
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setActiveDirectory({
                            ...activeDirectory,
                            orderDate:e.target.value,
                          });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setActiveDirectory({
                            ...activeDirectory,
                            completeDate:e.target.value,
                          });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>



                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Email Address
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setEmail({
                            ...email,
                            orderDate:e.target.value,
                            });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setEmail({
                            ...email,
                            completeDate:e.target.value,
                            });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Computer
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setComputer({
                            ...computer,
                            orderDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setComputer({
                            ...computer,
                            completeDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>



                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Cell Phone
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setCell({
                            ...cell,
                            orderDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setCell({
                            ...cell,
                            completeDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Company Vehicle
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setVehicle({
                            ...vehicle,
                            orderDate:e.target.value
                          });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setVehicle({
                            ...vehicle,
                            completeDate:e.target.value
                          });
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid xs={12} container className="LRM40">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Fuel Card
                      </Grid>
                      <Grid xs={12} className="mt14">

                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={8} container className="pl20">
                    <Grid xs={6} className="pr20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setFuelCard({
                            ...fuelCard,
                            orderDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xs={6} className="pl20">
                      <Grid xs={12} className="mbold mb14">

                      </Grid>
                      <TextField
                        id="date"
                        type="date"
                        onChange={(e) => {
                          setFuelCard({
                            ...fuelCard,
                            completeDate:e.target.value});
                        }}
                        className="DateTimePicker"
                        defaultValue="YY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid xs={12} container className="LRM40 mt20">
                  <Grid xs={4} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Notes
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>



                <Grid xs={12} container className="LRM40">
                  <Grid xs={12} style={{ alignSelf: 'center' }} className="pr20 mt4">
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        <TextareaAutosize
                          style={{ width: '100%' }}
                          required={true}
                          id="comment"
                          className="w100p"
                          rowsMin={6}
                          placeholder="Comment here"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  container
                  justify="space-between"
                  className="mt50"
                >
                  <Link to="/new-hire-queue/234" className="LinkButtonBack">
                    Back
                  </Link>
                  <Button className="LinkButton" type="submit">
                    Save & Continue
                  </Button>
                  {/* <Link to="/new-hire-queue/step/1" className="LinkButton"> */}
                </Grid>


              </form>
            </Grid>


          </Grid>



          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OnBoarding;
