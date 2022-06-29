import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  Paper,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import PageHeader from '../../../Components/PageHeader';
import LeftControl from '../../../Components/LeftControl';
import MobileScreen from './Mobile/Dashboard';
import { isMobile } from 'react-device-detect';
import { useHistory } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

/** Local deoendencies & Libraries */
import Services from '../../../Services';

var moment = require('moment-timezone')
const {
  employee,
  broadcast,
  Storage
} = Services;

// Tables Columns
const columns = [
  { id: "EmployeeId", label: "Employee ID", minWidth: 50, type: "value" },
  { id: "name", label: "License Certificate", minWidth: 100, type: "value" },
  { id: "issue_date", label: "Issue Date", minWidth: 50, type: "value" },
  { id: "expiry_date", label: "Expire Date", minWidth: 50, type: "value" },
];

// table dummy data
// const rows = [
//   { id:1101,
//     licenseCertificate:"Block Chain",
//     issueDate :"3/10/2021",
//     expiryDate: "6/10/2021"}
// ];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Dashboard = () => {

  const storage = new Storage();

  const history = useHistory();

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [rows, setRows] = useState([])

  const [showModal, setShowModal] = useState(false)

  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [broadCastApi, setBroadCastApi] = useState({})

  const handleClose = () => setShowModal(false);


  useEffect(async () => {
    let user = JSON.parse(await storage.get('user_profile'))

    if (user) {
      try {
        let data = await employee.get_employee_certificates({ id: user.id })
        if (data) {
          //data = data.data.rows
          data.data.rows.forEach(row => {
            row.issue_date = moment(new Date(row.issue_date)).utc().format('MM-DD-YYYY')
            row.expiry_date = moment(new Date(row.expiry_date)).utc().format('MM-DD-YYYY')
          });
          setRows(data.data.rows)
        }
      } catch (error) {
        console.log("Error in Dashboard fetch", error);
      }
    }

  }, [])



  useEffect(async () => {
    try {
      if (!storage.get('access_jwt'))
        return;

      const response = await broadcast.getAll();

      const { data } = response;

      if (!data[0].BroadcastMessage) {
        console.log("not broadcast")
      }
      else {
        setBroadCastApi(data[0].BroadcastMessage)
        setShowModal(history?.location?.state?.broaCast)
      }

      console.log(data[0].BroadcastMessage)

    } catch (exc) {
      console.log(exc);
    }

  }, [])


  // if (isMobile) {
  //   return (
  //     <MobileScreen />
  //   )
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
        {/* <Grid className="CloseOverlay"></Grid> */}
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />

          <Grid id="PageTitle">Dashboad</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Typography variant="h6" component="h6">TGS Software</Typography>
              <Grid xs={12} container justify="space-between">
                <Grid className="DashSoftware DashBI">
                  <a target="_blank" href="https://bi.tgsgroup.com/TGSBI_Prod/LogOn/"></a>
                </Grid>
                <Grid className="DashSoftware DashSaleforce">
                  <a target="_blank" href="https://login.salesforce.com/"></a>
                </Grid>
                <Grid className="DashSoftware DashAssetPro">
                  <a target="_blank" href="https://xtgs1.maxaccel.com/AssetPro/index.php"></a>
                </Grid>
                <Grid className="DashSoftware DashSafeTrack">
                  <a target="_blank" href="https://xtgs1.maxaccel.com/SafeTrack/"></a>
                </Grid>
                <Grid className="DashSoftware Cedar">
                  <a target="_blank" href="https://arms.cedarai.com"></a>
                </Grid>
                <Grid className="DashSoftware DashLocstatt">
                  <a target="_blank" href="https://locstatt.net/login.html"></a>
                </Grid>
              </Grid>
            </Grid>

            {/* Certificates & Licenses */}
            <Grid xs={12} container justify="space-between" className="mt50">






              <Grid className="DashCertificatsBox mt30">
                <Typography variant="h6" component="h6">Certificates & Licenses</Typography>
                <Grid
                  xs={12}
                  container
                  justify="space-between"
                  className="LiqTables Dash-Table DashTable-Desk"
                >
                  <Paper>
                    {/* <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  /> */}
                    <TableContainer>
                      <Table aria-label="table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                className="bold f16"
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .map((row) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={row.code}
                                >
                                  {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                      <TableCell
                                        key={column.id}
                                        align={column.align}
                                      >
                                        {column.format &&
                                          typeof value === "number"
                                          ? column.format(value)
                                          : value}
                                      </TableCell>
                                    );
                                  })}
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <div style={{ height: 400, width: '100%' }}>

                    </div>
                  </Paper>
                </Grid>
              </Grid>











              <Grid className="DashCertificatsBox mt30">
                {/* <Typography variant="h6" component="h6">Reporting Analytics</Typography> */}
                <Typography variant="h6" component="h6"></Typography>
                <Grid className="DashCertificats DashAnalytics mt20">
                  <Grid className="DashCeriLogo"></Grid>
                  <Grid className="DashCeriText">
                    View the latest <br />
                    analytics and reports<br />
                    on for Power BI
                  </Grid>
                  <Grid className="DashCertiComingSoon">Coming Soon..</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
