/** Core Dependencies */
import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import { isMobile } from 'react-device-detect';

import { useHistory } from "react-router-dom";


/** Third party dependencies */
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


/** Local Dependencies */
import MobileScreen from '../Start/Mobile/Login';


/** Local Static Imports & Objects */
import Services from '../../Services';

import { Imports } from '../../Imports';

import Snackbar from '../../Components/Snackbar';

import { helpers } from '../../helpers';


const {
  users,
  Storage,
} = Services;

const {
  showSnackBar,
} = helpers;

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

  const history = useHistory();

  const storage = new Storage();

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const classes = useStyles();

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });



  /**
   * @param {string} password - Password to validate 
   * @returns {string|Error}
   */
  const validatePassword = async (password) => {
    try {
      return await Imports
        .validators
        .password
        .validate(password);
    } catch (exc) {
      showSnackBar(exc.message);
      throw exc;
    }
  }

  const loginUser = async () => {
    try {
      setIsLoggingIn(true);

      const { password, email } = values;

      const payload = { password, email };

      if (!email) {
        setIsLoggingIn(false);

        return showSnackBar('Please enter email address');
      }

      if (!password) {
        setIsLoggingIn(false);

        return showSnackBar('Please enter password');
      }

      const isValid = await validatePassword(password);

      const {
        data,
        token,
      } = await users.login(payload);

      storage.set('access_jwt', token);
      storage.set('user_profile', JSON.stringify(data))

      setIsLoggingIn(false);

      const {
        path: pathname,
        params: state,
      } = Imports
        .employeeStatuses
        .find(
          status => status.id === data.EmployeeStatusId
        )

      const stateToPush = state
        ? {
          pathname,
          state,
        }
        : pathname;

      const applicantLoggedInEvent = new CustomEvent('applicant-logged-in', {});

      window.dispatchEvent(applicantLoggedInEvent);

      history.push(stateToPush);

      // return true;

    } catch (exc) {
      setIsLoggingIn(false);

      console.log(exc);

      return false;
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
          <Grid className="LoginTitle">Applicant Login</Grid>
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
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    loginUser()
                  }
                }}
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
              <Button className="LoginBtn"
                onClick={loginUser}
                disabled={isLoggingIn}>Login</Button>
              <Snackbar
              ></Snackbar>
            </Grid>
            <Grid xs={12} container justify="center" className="mt20">
              {/* <Link to="/application" className="ApplicantBtn">Submit Application & Create Account</Link> */}
              <a href="application" className="ApplicantBtn">Submit Application & Create Account</a>
              <a href="login" className="ApplicantBtn">Already an Employee?</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;