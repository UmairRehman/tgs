import React, {useEffect} from 'react';
import {Grid,TextField,Button,Menu,MenuItem,Avatar,IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const PageHeader = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    let clone = document.querySelector('#PageTitle').cloneNode( true );
    document.querySelector('h1').appendChild( clone );
  },[]);
  const MenuOpen = (event) => {
    var element = document.getElementById("LeftContol");
    element.classList.remove("CloseMenu");
    var element = document.getElementById("LeftContol");
    element.classList.add("OpenMenu");
  };  
  return (
    <Grid>
      <Grid xs={12}>
        <Grid xs={12} className="PageHeader">
          <Grid xs={3} className="PageTitle">
            <Button onClick={MenuOpen}/>
            <h1></h1>
          </Grid>
          <Grid xs={9} container justify="flex-end" alignItems="center">
            <Grid lg={12} container justify="flex-end">
              <Grid xs className="HeaderSearchBox">
                <Button></Button>
                <TextField id="Header-Search" label="Search"/>
              </Grid>
              <Button className="HeadAlert"></Button>
              <Button className="HeadUserFrame" aria-controls="UserProfileMenu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt="Angelina Jolie " src="/static/images/avatar/1.jpg" />
                Angelina Jolie
                <IconButton edge="end" aria-label="comments">
                  <ExpandMoreIcon />
                </IconButton>
              </Button>
              <Menu xs={12} className="UserDropDown" id="UserDropDown" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem xs={12} onClick={handleClose}>Profile</MenuItem>
                <MenuItem xs={12} onClick={handleClose}>My account</MenuItem>
                <MenuItem xs={12} onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default PageHeader;