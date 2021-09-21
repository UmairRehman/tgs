import React from 'react';
import {
  Grid,
  TextField,
  Checkbox,
  Button,
  makeStyles,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  InputAdornment
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
import {isMobile} from 'react-device-detect';




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
  
  const gotoDashBoard = () => {
    window.location = '/dashboard';
  };


  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  if(isMobile) {
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
                  <TextField placeholder="Email / User ID" type="text"/>
                  
                  <FormControl className="LoginPwd">
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
                      <Button className="LoginBtn" onClick={gotoDashBoard}>Login</Button>
                  </Grid>
                  <Grid xs={12} container justify="center" className="mt20">
                      {/* <Link to="/application" className="ApplicantBtn">Submit Application & Create Account</Link> */}
                      <a href="http://tgsapplicant.liquidtechnologies.pk/application" className="ApplicantBtn">Submit Application & Create Account</a>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;