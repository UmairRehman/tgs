import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Avatar,
  IconButton,
  List,
  ListItem,
  Typography,
  FormLabel,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
  makeStyles,
  Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


/** Third party packages & Dependencies */
import Webcam from "react-webcam";


/** Local Libraries, functions & dependencies */
import { helpers } from '../helpers';

import Services from '../Services';


/** Local Statics & Imports */
import { environment } from '../Environments/environment';


const {
  capitalize
} = helpers;

const {
  users,
  api: {
    routes
  },
  Storage,
} = Services;

const {
  apiPath
} = environment;


const useStyles = makeStyles((theme) => ({
  Avatarlarge: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  DisplayNone: {
    display: 'none'
  }
}));

const PageHeader = () => {
  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
  };

  const webCamRef = useRef(null);

  const uploadAndHandleUX = async (image) => {
    const updatedPic = await users.setDisplayPicture({
      image
    });

    setSavingImage(false);

    triggerCamera(false);

    setDisplayPicture(image);
  }

  const captureImage = useCallback(
    async () => {
      try {

        setSavingImage(true);

        const image = webCamRef.current.getScreenshot();

        await uploadAndHandleUX(image);
      } catch (exc) {
        console.log(exc);
      }

    },
    [webCamRef]
  );

  const uploadPhoto = () => {
    const el = document.getElementById('imageToUploadInput');

    el.click();
  }

  const handlePhoto = async ($e) => {
    const { files } = $e.target;

    const reader = new FileReader();

    const uri = await new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(files[0]);
    })

    await uploadAndHandleUX(uri);
  }

  const storage = new Storage();

  const history = useHistory();

  const classes = useStyles();

  const [cameraTriggered, triggerCamera] = useState(false);

  const [savingImage, setSavingImage] = useState(false);

  const [displayPicture, setDisplayPicture] = useState('null');

  const [authenticatedHeader, setAuthHeader] = useState(
    localStorage.getItem('access_jwt') || ''
  )

  useEffect(() => {
    let clone = document.querySelector('#PageTitle').cloneNode(true);
    document.querySelector('h1').appendChild(clone);
  }, []);

  const MenuOpen = (event) => {
    var element = document.getElementById("LeftContol");
    element.classList.remove("CloseMenu");

    var element = document.getElementById("LeftContol");
    element.classList.add("OpenMenu");
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

  /** Retreiving display picture */
  const retreiveDP = async () => {
    var reader = new FileReader();


    const img = await fetch(
      apiPath
        .concat(routes.employee.getProfilePic),
      {
        headers: {
          Authorization: storage.get('access_jwt')
        }
      }
    );

    const dataBlob = await img.blob();

    const uri = await new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(dataBlob);
    })

    setDisplayPicture(uri);
  };

  retreiveDP();

  // For Modal
  const [aletopen, setAlertOpen] = React.useState(false);
  //  const //theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const AlertPop = () => {
    setAlertOpen(true);
  };

  const AlertPopOff = () => {
    setAlertOpen(false);
  };

  /** Retreiving user profile information, cached in localstorage.
   * TO APPLY - state service later
   */
  const userProfile = JSON.parse(
    localStorage.getItem('user_profile')
  ) || { userName: 'Not Found' };

  if (userProfile) {
    var {
      dnUsername,
      firstName,
      lastName,
    } = userProfile;

    dnUsername = capitalize(dnUsername || '');
    firstName = capitalize(firstName || '');
    lastName = capitalize(lastName || '');

    /** dnUserName is for employees, firstName & lastName is for applicants */
    dnUsername = dnUsername || `${firstName} ${lastName}` || 'Not Found';
  }

  /********************************************************** */

  /** Setting Header styles if the user is authenticated */

  const headerClassName = authenticatedHeader ? '' : classes.DisplayNone;

  /********************************************************** */

  const logout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Grid>
      <Grid xs={12}>
        <Grid xs={12} className="PageHeader">
          <Grid xs={3} className="PageTitle">
            <Button onClick={MenuOpen} />
            <h1></h1>
          </Grid>
          <Grid xs={9}
            container
            justify="flex-end"
            alignItems="center"
            className={headerClassName}>
            <Grid lg={12} container justify="flex-end">
              <Grid xs className="HeaderSearchBox">
                <Button></Button>
                <TextField id="Header-Search" label="Search" />
              </Grid>
              {/* <Button className="HeadEmail">
                <Grid className="HeaderNotification">
                  <List component="nav" aria-label="main mailbox folders" className="HeaderNoti Scrolling">
                    <ListItem className="UnreadAlert">
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem className="UnreadAlert">
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem className="UnreadAlert">
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John
                          </Typography>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Grid>
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
              </Button> */}
              <Button className="HeadAlert">
                <Grid className="HeaderNotification">
                  <List component="nav" aria-label="main mailbox folders" className="HeaderNoti Scrolling AlertNoti">
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                    <ListItem onClick={AlertPop}>
                      <Grid xs={12}>
                        <FormLabel>10:45 PM</FormLabel>
                        <Typography variant="h6" component="h6">
                          Jessie John
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </Grid>
                    </ListItem>
                  </List>
                </Grid>
              </Button>
              <Button className="HeadUserFrame">
                <Avatar alt={dnUsername} src={displayPicture} className="mx-1" />
                {dnUsername}
                <IconButton edge="end" aria-label="comments">
                  <ExpandMoreIcon />
                </IconButton>
                <Grid className="HeaderNotification">
                  <List component="nav" aria-label="main mailbox folders" className="HeaderNoti">
                    <ListItem className="ChangePictureIcon">
                      <Grid onClick={PicturehandleClickOpen} className="ProfilePicChangeBtn">
                        Change Picture
                      </Grid>
                    </ListItem>
                    <ListItem className="LogOutIcon LogoutButton">
                      <Button onClick={logout}>
                        Logout
                      </Button>
                    </ListItem>
                  </List>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

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
            {dnUsername}, Keep your profile fresh!
          </Grid>
          <Grid xs={12} container justify="center" className="mt40 position-relative">
            <div
              className={
                savingImage
                  ? 'backdrop'
                  : 'd-none'
              }
            >
              <span>Saving...</span>
            </div>
            <Webcam
              videoConstraints={videoConstraints}
              ref={webCamRef}
              className={
                'rounded scale-x-_1 ' + (
                  cameraTriggered
                    ? ''
                    : 'd-none'
                )
              } />
            <Button className={
              cameraTriggered
                ? 'ApplicantBtn my-2'
                : 'd-none'
            }
              onClick={captureImage}>
              Capture
            </Button>
            <Avatar alt={dnUsername} src={displayPicture} className={
              cameraTriggered
                ? 'd-none'
                : classes.Avatarlarge
            } />
          </Grid>
          <Grid xs={12} className="tcenter mt20">
            Take or upload a photo
          </Grid>
          <Grid xs={12} className="ProfileUpdateBtn mt30">
            <Button
              className={
                cameraTriggered
                  ? 'd-none'
                  : ''
              }
              onClick={
                triggerCamera.bind(null, true)
              }>Use Camera</Button>
            <Button onClick={uploadPhoto}>Upload Photo</Button>
            <input
              id="imageToUploadInput"
              type="file"
              accept="img/*"
              onChange={handlePhoto}
              hidden />
          </Grid>
        </DialogContent>
      </Dialog>
      {/* Picture Change Modal Close */}


      {/* Alert Modal */}
      <Dialog
        fullScreen={fullScreen}
        open={aletopen}
        onClose={AlertPopOff}
        className="BroadcastMessageModal LiqTables AlertMessagePop"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={AlertPopOff} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12}>
            <Grid xs={12} className="mbold pl14">To</Grid>
            <Grid xs={12} className="AlertPopTextBox">
              TGS Safety Team
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Grid xs={12} className="mbold mt30 pl14">Subject</Grid>
            <Grid xs={12} className="AlertPopTextBox">
              TGS Safety Team
            </Grid>
          </Grid>
          <Grid xs={12} className="mt16 AlertPopTextBox AlertPopTextarea">
            Dear recipient,<br />
            Please note that progress made on last week's event......
          </Grid>
          <Grid xs={12} container className="mt10">
            <Grid className="AlertCheckBox">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              /> Check here to confirm you have read this message
            </Grid>
          </Grid>
          <Grid xs={12} container justify="center" className="mt30">
            <Button className="LinkButton">Acknowledge & Close</Button>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* Alert Modal Close */}
    </Grid>
  );
}
export default PageHeader;