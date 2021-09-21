import React, { useEffect } from 'react';
import {Grid,TextField,Checkbox,Button,Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
const Login = () => {
  const gotoDashBoard = () => {
    window.location = '/dashboard';
  };
  useEffect(() => {
    setTimeout(function(){
        document.getElementById("splashscreen").classList.remove('splash');
        document.getElementById("splashscreen").classList.add('splashHide'); 
    }, 1000);
  }, []);
  return (
    <Grid container xs={12} className="Device LoginScreen">
        <Grid id="splashscreen" className="splash">
            <Grid className="LoginLogo"></Grid>
        </Grid>
        <Grid xs={12} className="pt40 ml40">
            <Typography variant="h4" className="bold" component="h4">Welcome to</Typography>
            Trans-Global Solutions, Inc
        </Grid>
      <Grid className="LoginFormPlace">
          <Grid className="LoginForm">
              <Grid className="FormFields">
                  <Grid xs={12} className="FormField em">
                    <Grid xs={12} className="bold">Email</Grid>
                    <TextField placeholder="User Id"/>
                  </Grid>

                  <Grid xs={12} className="FormField pw">
                    <Grid xs={12} className="bold mt20">Password</Grid>
                    <TextField placeholder="Password"/>
                    <Button></Button>
                  </Grid>
                  <Grid xs={12} container className="mt16">
                      <Grid className="LoginCheckPlace">
                        <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />Remember me
                      </Grid>
                      <Grid className="LoginForget">
                          <Link to="/dashboard">Forget Password</Link>
                      </Grid>
                  </Grid>
                  <Grid xs={12} container justify="center" className="LoginBtnGrid">
                      <Button className="LoginBtn"onClick={gotoDashBoard}>Login</Button>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;