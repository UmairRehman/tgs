import React, {useState} from 'react';
import {
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemLink,
  Checkbox,
  Button,
  makeStyles,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { Link } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import MobileScreen from '../Start/Mobile/Login';
// import {isMobile} from 'react-device-detect';
import Services from '../../../Services';
import { useHistory } from "react-router-dom";


const {
  users
} = Services;

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
}))

const CreatePassword = () => {
  let history = useHistory();
  const [error, setError] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('access_jwt'))

  async function submit(){
    let data = {
      password: password,
      confirm_password : confirmPassword
    }
    if(password === confirmPassword){
      setError(false)
      try{
        const createPassword = await users.createPassword(data)
        if(createPassword.message == 'success'){
          history.push("/submission");
        }
      }
      catch(exc){
        console.log(exc);
      }
    }
    else{
      setError(true);
    }
  }
  
  const gotoDashBoard = () => {
    window.location = '/dashboard';
  };


  const classes = useStyles();

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
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
  const handleChangeV = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowPasswordV = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      <Grid className="LoginFormPlace CreatePwdForm">
          <Grid className="LoginForm">
              <Grid className="LoginTitle">Create Password</Grid>
              <Grid className="FormFields">
                  <Typography xs={12} className="CreateFieldTItle">Create Password</Typography>
                  <FormControl className="LoginPwd">
                    {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                    <Input
                    placeholder="Password"
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={ e =>setPassword(e.target.value)}
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
                  <Typography xs={12} className="CreateFieldTItle">Verify Password</Typography>
                  <FormControl className="LoginPwd">
                    {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                    <Input
                    placeholder="Verify Password"
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={ e => setConfirmPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordV}
                            onMouseDown={handleMouseDownPasswordV}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {error == true?
                    <h5>Paswword does not match</h5>
                  :"" }
                  <Typography xs={12} className="CreateFieldTItle">Verify Password</Typography>
                  {/* <TextField placeholder="Password" type="password"/> */}
                  <Grid xs={12} container className="mt16 pwdcriteria">
                    <Typography variant="h5" component="h6">
                      Password Criteria
                    </Typography>
                    <List component="nav" aria-label="secondary mailbox folders">
                      <ListItem>
                        <ListItemText primary="Must be eight or more characters long" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Password must contain two of the following four categories" />
                      </ListItem>
                      <ListItem>
                        <List component="nav" aria-label="secondary mailbox folders">
                          <ListItem>
                            <ListItemText primary="Upper Case Characters A-Z" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Lower Case Characters a-z" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Digits 0-9" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Special Characters (!,$,#,%,etc)" />
                          </ListItem>
                        </List>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} container justify="center" className="mt40 mb40">
                      <Button onClick={submit} className="ApplicantBtn">Login</Button>
                      {/* to="/questionnaire" */}
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
export default CreatePassword;