import React from 'react';
import {
  Grid,
  TextField,
  Checkbox,
  Button,
  Typography,
  makeStyles,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";
// import MobileScreen from '../Start/Mobile/Login';
// import {isMobile} from 'react-device-detect';

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

const ForgotPassword = () => {
  
  const gotoDashBoard = () => {
    window.location = '/dashboard';
  };


  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    passwordv: '',
    showPassword: false,
    showPasswordV: false,
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

//   __________________\
const handleChangeV = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
const handleClickShowPasswordV = () => {
    setValues({ ...values, showPasswordV: !values.showPasswordV });
  };

  const handleMouseDownPasswordV = (event) => {
    event.preventDefault();
  };


//   if(isMobile) {
//     return (
//         <MobileScreen />
//     )
//   }
  return (
    <Grid container xs={12}>
      <Grid className="LoginImageBG">
          <Grid className="LoginImage">
              <Grid className="LoginLogo"></Grid>
              <Grid className="LoginText">
              Applicant Portal
              </Grid>
          </Grid>
      </Grid>
      <Grid className="LoginFormPlace">
          <Grid className="LoginForm">
              <Grid className="LoginTitle">Forgot Password</Grid>
              <Grid className="FormFields">
                  <FormControl className="LoginPwd">
                    <Input
                    placeholder="Create Password"
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
                    <Input
                    placeholder="Verify Password"
                    className="mt20"
                      id="standard-adornment-password"
                      type={values.showPasswordV ? 'text' : 'password'}
                      value={values.passwordv}
                      onChange={handleChangeV('passwordv')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordV}
                            onMouseDown={handleMouseDownPasswordV}
                          >
                            {values.showPasswordV ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Grid xs={12} container className="mt16">
                    <Grid xs={12} container className="mt16 pwdcriteria ForGotPassWord">
                        <Typography variant="h5" component="h6">
                        Password Criteria
                        </Typography>
                        <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem>
                                <ListItemText primary="Must be at least 8 charactor" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Must have at least one special charactor (!,$,#,%,etc)" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Must have at least one numerical digit"/>
                            </ListItem>
                        </List>
                    </Grid>
                  </Grid>
                  <Grid xs={12} container justify="center" className="mt26">
                      <Link to="" className="ApplicantBtn p14">Login</Link>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
export default ForgotPassword;