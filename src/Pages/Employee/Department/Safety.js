import React, { useState, useEffect } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
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
import PageHeader from '../../../Components/PageHeader';
import LeftControl from '../../../Components/LeftControl';
import MobileScreen from './Mobile/Safety';
import { isMobile } from 'react-device-detect';
import Services from '../../../Services'
import EDRulebook from '../../../assets/pdf/EDRulebook.pdf';
import TransportationRuleBook from '../../../assets/pdf/TransportationRuleBook.pdf';

const {
  employee,
  Storage
} = Services;

const Safety = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [rows, setRows] = useState([])
  const getContacts = async () => {
    //hr id = 5 but no data right now
    let data = await employee.department_contact_list({ id: 1 })

    return (data?.httpStatus == 200) ? data.data : new Error('api failed to fetch contacts')

  }
  useEffect(() => {
    console.log(rows)
  }, [rows])
  useEffect(async () => {
    try {
      let result = await getContacts()
      if (result)
        setRows(result)
    } catch (error) {
      console.log(error);
    }
  }, [])

  if (isMobile) {
    return (
      <MobileScreen />
    )
  }
  return (
    <Grid container xs={12} md={24} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>


      <Grid xs={10} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Department</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} sm={12} md={6} lg={6}>

              <Grid xs={12} container>
                <Grid xs={6} className="mbold">
                  Safety
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
                        {
                          (rows) &&
                          rows.map(row => {
                            return (
                              <TableRow>
                                <TableCell>
                                  {`${row.name}`}
                                </TableCell>
                                <TableCell>
                                  {`${row.title}`}
                                </TableCell>
                                <TableCell>
                                  {`${row.phone}`}
                                </TableCell>
                              </TableRow>
                            )
                          })
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>


            <Grid xs={12} sm={12} md={5} lg={5}>

              <Grid xs={12} container>
                <Grid xs={6} className="mbold">
                  Download Rule Book 
                </Grid>

              </Grid>
              <Grid xs={12} className="mt14 ContactTable">
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Button >
                          <a href={EDRulebook} className='ButtonLink' target="_blank" download >Engineering Rule Book  <DownloadOutlined/> </a>
                        </Button>

                        <Button >
                          <a href={TransportationRuleBook} className='ButtonLink' target="_blank" download >Transportation Rule Book   <DownloadOutlined/> </a>
                        </Button>
                        {/* 
                      <Button>
                      <Link to=".././../../../public/assets/pdf/public/assets/pdf/TransportationRuleBook.pdf" className='ButtonLink'   target="_blank" download >Transportation Rule Book <DownloadOutlined/></Link>
                      </Button> */}

                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}



          {/* Page Start */}

          {/* Page Start End */}
        </Grid>
      </Grid>








    </Grid>


  );
}

export default Safety;
