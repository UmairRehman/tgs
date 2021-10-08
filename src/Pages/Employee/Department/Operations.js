import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from '../../../Components/PageHeader';
import LeftControl from '../../../Components/LeftControl';
import MobileScreen from './Mobile/Operations';
import {isMobile} from 'react-device-detect';
const Operating = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if(isMobile) {
    return (
        <MobileScreen />
    )
  }
  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Department</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} sm={12} md={6} lg={6}>
              
              <Grid xs={12} container>
                <Grid xs={6} className="mbold">
                  Operations
                </Grid>
                {/* <Grid xs={6} container justify="flex-end">
                  <Button aria-controls="ContactSubMenu" className="MoreLinkIcon" aria-haspopup="true" onClick={handleClick}>
                  </Button>
                  <Menu
                    id="ContactSubMenu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem>
                      <Link to="/human-resources">Human Resources</Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="/operations">Operations</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/safety">Safety</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/information-technology">Information Technology</Link>
                    </MenuItem>
                  </Menu>
                </Grid> */}
              </Grid>
              <Grid xs={12} className="mt14 ContactTable">
              <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Number</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                              <TableRow>
                                  <TableCell>
                                    Ryan Reynolds
                                  </TableCell>
                                  <TableCell>
                                    Head of HR
                                  </TableCell>
                                  <TableCell>
                                    +1 (031) 5555558
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                    Ryan Reynolds
                                  </TableCell>
                                  <TableCell>
                                    Head of HR
                                  </TableCell>
                                  <TableCell>
                                    +1 (031) 5555558
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                    Ryan Reynolds
                                  </TableCell>
                                  <TableCell>
                                    Head of HR
                                  </TableCell>
                                  <TableCell>
                                    +1 (031) 5555558
                                  </TableCell>
                              </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Operating;
