import React, {useState, useEffect} from 'react';
import {
  Grid,
  List,
  ListItem,
  Button,
  Icon,
  Typography,
  Dialog,
  DialogContent,
  Avatar,
  useMediaQuery,
  useTheme,
  makeStyles
} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  Avatarlarge: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));
const LeftControl = () => {
  const classes = useStyles();
  const [activeClass, setClass] = useState('');
    let { pathname } = useLocation();
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)
    const [active, setActive] = useState([
        true, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    // console.log("ACTIVE", active)
    const [OpenMore, setMoreMenu]=useState(null)
    const [anchorEl, setAnchorEl] = useState(null | HTMLElement);

    const MenuCloseDev = (event) => {
      var element = document.getElementById("LeftContolRes");
      element.classList.remove("OpenMenuRes");
      var element = document.getElementById("LeftContolRes");
      element.classList.add("CloseMenuRes");
      var element = document.getElementById("bodyTag");
      element.classList.remove("DeviceBody");
    };
    const gotoLogin = () => {
      window.location = '/';
    };
    
    
    // Modal Profile Picture Changer
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const PicturehandleClickOpen = () => {
      setOpen(true);
    };

    const PicturehandleClose = () => {
      setOpen(false);
    };
    // Modal Profile Picture Changer Close
  return (
    <Grid xs={12}>
      <Grid className="LeftMenuCol">
            <Grid lg={12} className="MenuPosition">
              <Grid className="DevUserDetails">
                <Grid className="DevUserImg" onClick={PicturehandleClickOpen}>
                  <img src="https://i.dailymail.co.uk/1s/2019/09/24/14/18870210-0-image-a-25_1569331604556.jpg" alt="" />
                </Grid>
                <Typography variant="h1" component="h1">
                  Angelina Julie
                </Typography>
                <Typography variant="h6" component="h6">
                  angelinajulie@gmail.com
                </Typography>
              </Grid>
              <Grid className="TGSNav">
                <List component="nav" aria-label="main mailbox folders">
                  {/* Employee Nav */}
                <ListItem button className="DashIcon">
                  <Link to="/dashboard" className="Liq-NavLinks" className={pathname === '/dashboard' ? 'NavSelected' : ''}>
                    <Icon/>
                    Dashboard
                  </Link>
                </ListItem>
                <ListItem button className="SafetyIcon">
                  <Link to="/safety-testing" className="Liq-NavLinks" className={pathname === '/safety-testing' ? 'NavSelected' : ''}>
                      <Icon/>
                      Safety  Testing
                    </Link>
                </ListItem>
                <ListItem button className="CreatLinkIcon">
                  <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                      <Icon/>
                      Create a ticket
                  </Link>
                </ListItem>
                <ListItem className="DepartmentIcon">
                  <Link to="/department" className="Liq-NavLinks" className={pathname === '/department' ? 'NavSelected' : ''}>
                      <Icon/>
                      Department
                  </Link>
                </ListItem>
                {/* Employee Nav End */}

                {/* HR Nav */}
                <ListItem button className="NewHireIcon">
                  <Link to="/new-hire-queue" className="Liq-NavLinks" className={pathname === '/new-hire-queue' ? 'NavSelected' : ''}>
                      <Icon/>
                      New Hire Queue
                  </Link>
                </ListItem>
                <ListItem button className="AlertIcon">
                  <Link to="/tickets-and-alerts" className="Liq-NavLinks" className={pathname === '/tickets-and-alerts' ? 'NavSelected' : ''}>
                      <Icon/>
                      Tickets and Alerts
                  </Link>
                </ListItem>
                <ListItem button className="EmployeeIcon">
                  <Link to="/employees" className="Liq-NavLinks" className={pathname === '/employees' ? 'NavSelected' : ''}>
                      <Icon/>
                      Employees
                  </Link>
                </ListItem>
                <ListItem button className="EmployeeIcon">
                  <Link to="/employees-profile" className="Liq-NavLinks" className={pathname === '/employees-profile' ? 'NavSelected' : ''}>
                      <Icon/>
                      Employees Profile
                  </Link>
                </ListItem>
                <ListItem button className="CreatLinkIcon">
                  <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                      <Icon/>
                      Create a ticket
                  </Link>
                </ListItem>
                {/* HR Nav End */}
                {/* Admin Nav */}
                <ListItem button className="MessageIcon">
                  <Link to="/broadcast-messages" className="Liq-NavLinks" className={pathname === '/broadcast-messages' ? 'NavSelected' : ''}>
                      <Icon/>
                      Broadcast Message
                  </Link>
                </ListItem>
                {/* Admin Nav End */}
                </List>
              </Grid>
            </Grid>
            <Button className="LogoutBtn" onClick={gotoLogin}>Logout</Button>
            <Button className="MenuCloseBtn" onClick={MenuCloseDev}/>
      </Grid>
      <Grid className="DeviceNavClose" onClick={MenuCloseDev}></Grid>



      {/* Picture Change Modal */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={PicturehandleClose}
        className="ProfilePicChange"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={PicturehandleClose} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12} className="mbold f20">
           Change Picture
          </Grid>
          <Grid xs={12} className="tcenter mt30">
            Angelina, Keep your profile fresh!
          </Grid>
          <Grid xs={12} container justify="center" className="mt40">
            <Avatar alt="Angelina Jolie " src="/static/images/avatar/1.jpg" className={classes.Avatarlarge}/>
          </Grid>
          <Grid xs={12} className="tcenter mt20">
            Take or upload a photo
          </Grid>
          <Grid xs={12} className="ProfileUpdateBtn mt30">
              <Button>Use Camera</Button>
              <Button>Upload Photo</Button>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* Picture Change Modal Close */}

    </Grid>
  );
}
export default LeftControl;