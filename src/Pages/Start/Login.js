import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Checkbox,
  Button,
  makeStyles,
  FormControl,
  FormGroup,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  Snackbar,
} from '@material-ui/core';

// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import { Link } from "react-router-dom";
import MobileScreen from '../Start/Mobile/Login';
import { isMobile } from 'react-device-detect';


import Services from '../../Services';


const { api: { Interceptor: api, routes } } = Services;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const Login = () => {

  const snackBarDefaultDuration = 2000;

  const [isSnackBarOpen, triggerSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const classes = useStyles();

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  /** Event listeners */
  window.addEventListener('http-error-event', ($e) => {

    const {
      detail: { messageToShow }
    } = $e;

    setSnackBarMessage(messageToShow);

    return triggerSnackBar(true);
  });

  const handleClose = (...args) => {
    return triggerSnackBar(false);
  }
  /********************************************************************* */

  const loginUser = async () => {
    try {
      const { password, email } = values;

      const payload = { password, email };

      const res = await api.post(
        routes.employee.applicant_login,
        payload
      );

      /** REPLACE - by router */
      window.location = '/dashboard';

    } catch (exc) {
      console.log(exc);
    }
    // window.location = '/dashboard';
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  if (isMobile) {
    return (
      <MobileScreen />
    )
  }

  return (
    <Grid container xs={12}>
      <Grid className="LoginImageBG">
        <Grid className="LoginImage">
          <Grid className="LoginLogo"></Grid>
          <Grid className="LoginText">
            TGS Portal
          </Grid>
        </Grid>
      </Grid>
      <Grid className="LoginFormPlace">
        <Grid className="LoginForm">
          <Grid className="LoginTitle">Login</Grid>
          <Grid className="FormFields">

            <TextField placeholder="Email / User ID" type="text" onChange={handleChange('email')} />

            <FormControl
              className="LoginPwd">
              {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
              <Input
                placeholder="Password"
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

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
            <Grid xs={12} container justify="center" className="mt26">
              <Button className="LoginBtn" onClick={loginUser}>Login</Button>
              <Snackbar
                open={isSnackBarOpen}
                autoHideDuration={snackBarDefaultDuration}
                onClose={handleClose}
                message={snackBarMessage}
                action={'close'}
              />
            </Grid>
            <Grid xs={12} container justify="center" className="mt20">
              {/* <Link to="/application" className="ApplicantBtn">Submit Application & Create Account</Link> */}
              <a href="application" className="ApplicantBtn">Submit Application & Create Account</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;