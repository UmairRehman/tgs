import React, {useState} from 'react';
import {Grid,TextField,Checkbox,Button} from '@material-ui/core';
import { Link } from "react-router-dom";
const Login = () => {
  
  const gotoDashBoard = () => {
    window.location = '/dashboard';
  };

  return (
    <Grid container xs={12}>
      <Grid className="LoginImageBG">
          <Grid className="LoginImage">
              <Grid className="LoginLogo"></Grid>
              <Grid className="LoginText">
                TGS Employee Portal
              </Grid>
          </Grid>
      </Grid>
      <Grid className="LoginFormPlace">
          <Grid className="LoginForm">
              <Grid className="LoginTitle">Login</Grid>
              <Grid className="FormFields">
                  <TextField id="Header-Search" label="User ID"/>
                  <TextField id="Header-Search" label="Password"/>
                  <Grid xs={12} container className="mt16">
                      <Grid className="LoginCheckPlace">
                        <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />Submit Application
                      </Grid>
                      <Grid className="LoginForget">
                          <Link to="/dashboard">Forget Password</Link>
                      </Grid>
                  </Grid>
                  <Grid xs={12} container justify="center" className="mt26">
                      <Button className="LoginBtn"onClick={gotoDashBoard}>Login</Button>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;