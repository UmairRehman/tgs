import React, {useState, useEffect} from 'react';
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
import { useLocation } from "react-router-dom";
import PageHeader from '../../../Components/PageHeader';
import LeftControl from '../../../Components/LeftControl';
import MobileScreen from './Mobile/HumanResources';
import {isMobile} from 'react-device-detect';
const HumanResources = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  // Select Nav
  const [activeClass, setClass] = useState('');
    let { pathname } = useLocation();
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)
    const [active, setActive] = useState([
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    // 
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
                  HR Department
                </Grid>
                <Grid xs={6} container justify="flex-end">
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
                      <Link to="/human-resources" className={pathname === '/human-resources' ? 'NavSelected' : ''}>Human Resources</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/operations" className={pathname === '/operations' ? 'NavSelected' : ''}>Operations</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/safety" className={pathname === '/safety' ? 'NavSelected' : ''}>Safety</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/information-technology" className={pathname === '/information-technology' ? 'NavSelected' : ''}>Information Technology</Link>
                    </MenuItem>
                  </Menu>
                </Grid>
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

export default HumanResources;
