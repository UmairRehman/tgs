import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
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
import LeftControl from './LeftControl';

const useStyles = makeStyles((theme) => ({
  Avatarlarge: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));
const PageHeader = () => {
  // Page Title
  useEffect(() => {
    let clone = document.querySelector('#PageTitle').cloneNode( true );
    document.querySelector('.PageTitle h1').appendChild( clone );
  },[]);
  
  


  const MenuOpenRes = (event) => {
    var LeftCR = document.getElementById("LeftContolRes");
    LeftCR.classList.remove("CloseMenuRes");
    var LCR = document.getElementById("LeftContolRes");
    LCR.classList.add("OpenMenuRes");
    var BTage = document.getElementById("bodyTag");
    BTage.classList.add("DeviceBody");
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
  return (
    <Grid>
      <Grid id="LeftContolRes" className="LeftContolRes">
        <LeftControl/>
      </Grid>
      <Grid xs={12}> 
        <Grid xs={12} className="PageHeader">
          <Grid xs={2}>
            <Button id="DeviceNavIcon" onClick={MenuOpenRes}></Button>
          </Grid>
          <Grid xs={10} container justify="flex-end">
            <Grid lg={12} container justify="flex-end">
              <Grid xs className="HeaderSearchBox">
                <Button></Button>
                <TextField id="Header-Search" label="Search"/>
              </Grid>
              {/* <Button className="HeadEmail">
                <Grid className="HeaderNotification">
                  <List component="nav" aria-label="main mailbox folders" className="HeaderNoti Scrolling">
                    <ListItem className="UnreadAlert">
                      <Link to="/messages">
                        <Grid xs={12}>
                          <FormLabel>10:45 PM</FormLabel>
                          <Typography variant="h6" component="h6">
                            Jessie John Mobile
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
            </Grid>
          </Grid>
          <Grid xs={12} className="PageTitle">
            <h1></h1>
          </Grid>
        </Grid>
      </Grid>

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
          Dear recipient,<br/>
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