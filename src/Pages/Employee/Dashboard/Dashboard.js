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

/** Local deoendencies & Libraries */
import Services from '../../../Services';

var moment = require('moment-timezone')
const {
  employee,
  Storage
} = Services;
// Tables Columns
const columns = [
  { id: "EmployeeId", label: "Employee ID", minWidth: 50, type: "value" },
  { id: "name", label: "License Certificate", minWidth: 100, type: "value" },
  { id: "issue_date", label: "Issue Date", minWidth: 50, type: "value" },
  { id: "expiry_date", label: "Expiry Date", minWidth: 50, type: "value" },
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

  const [rows, setRows] = useState([])

  useEffect(async () => {
    let user = JSON.parse(await storage.get('user_profile'))
    console.log("user",user);
    if(user){
      try {
        let data = await  employee.get_employee_certificates({id:user.id})
        console.log(data.data.rows);
        if(data){
          //data = data.data.rows
          data.data.rows.forEach(row=>{
            row.issue_date = moment( new Date(row.issue_date) ).format('YYYY-MM-DD')
            row.expiry_date = moment( new Date(row.expiry_date) ).format('YYYY-MM-DD')
          });
          setRows(data.data.rows)
        }
      } catch (error) {
        console.log("Error in Dashboard fetch", error);
      }
    }
    
  }, [])

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
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
