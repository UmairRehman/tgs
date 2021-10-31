import React , { useState , useEffect } from 'react';
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
  Paper,
} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import PageHeader from '../../../Components/PageHeader';
import LeftControl from '../../../Components/LeftControl';
import MobileScreen from './Mobile/Dashboard';
import {isMobile} from 'react-device-detect';

// Tables Columns
const columns = [
  { field: "id", headerName: "Employee ID",  type: "value" },
  { field: "licenseCertificate", headerName: "License Certificate",  type: "value" },
  { field: "issueDate", headerName: "Issue Date",  type: "value" },
  { field: "expiryDate", headerName: "Expiry Date",  type: "value" },
];

// table dummy data
const rows = [
  { id:1101,
    licenseCertificate:"Block Chain",
    issueDate :"3/10/2021",
    expiryDate: "6/10/2021"}
];

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

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false)
    let response = []
    console.log("res",response);
    if(response){
      setData(rows)
      setIsLoading(true)
    }
  
  }, [])
  if(isMobile) {
    return (
        <MobileScreen />
    )
  }
  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl/>
        {/* <Grid className="CloseOverlay"></Grid> */}
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader/>
          
          <Grid id="PageTitle">Dashboad</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */} 
            <Grid xs={12}>
              <Typography variant="h6" component="h6">TGS Software</Typography>
              <Grid xs={12} container justify="space-between">
                <Grid className="DashSoftware DashBI">
                  <a href="#"></a>
                </Grid>
                <Grid className="DashSoftware DashSaleforce">
                  <a href="#"></a>
                </Grid>
                <Grid className="DashSoftware DashAssetPro">
                  <a href="#"></a>
                </Grid>
                <Grid className="DashSoftware DashSafeTrack">
                  <a href="#"></a>
                </Grid>
                <Grid className="DashSoftware Cedar">
                  <a href="#"></a>
                </Grid>
                <Grid className="DashSoftware DashLocstatt">
                  <a href="#"></a>
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
                <div style={{ height: 400, width: '100%' }}>
                
                  {/* <TableContainer> */}
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                {/* </TableContainer> */}
                
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
                    View the latest <br/>
                    analytics and reports<br/>
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