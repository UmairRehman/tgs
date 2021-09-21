
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { 
    AppBar,
    Grid,
    Tabs,
    Tab,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
const columns = [
    { id: "EmployeeID", label: "Employee ID", minWidth: 100, type: "value" },
    { id: "LicenseCertificate", label: "License Certificate", minWidth: 100, type: "value" },
    { id: "IssueDate", label: "Issue Date", minWidth: 100, type: "value" },
    { id: "ExpiryDate", label: "Expiry Date", minWidth: 100, type: "value" },
  ];
  
  function createData(
    EmployeeID,
    LicenseCertificate,
    IssueDate,
    ExpiryDate
  ) {
    return {
        EmployeeID,
        LicenseCertificate,
        IssueDate,
        ExpiryDate
    };
  }
  const rows = [
    createData("1101", "Backhoe", "3/10/2021", "6/10/2021"),
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
const Certificates = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid xs={12} className="Dash-Tabs">
      <Grid xs={12} className="Dash-TabsRows">
        <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0}>
                <Grid className="DashCertificatsBox">
                    <Typography variant="h6" component="h6">Certificates & Licenses</Typography>
                    <Grid
                        xs={12}
                        container
                        justify="space-between"
                        className="LiqTables Dash-Table"
                    >
                    <Paper>
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
                </Paper>
              </Grid>


                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid className="DashCertificatsBox">
                    <Typography variant="h6" component="h6">Reporting Analytics</Typography>
                    <Grid className="DashCertificats DashAnalytics">
                        <Grid className="DashCeriLogo"></Grid>
                        <Grid className="DashCeriText">
                        View the latest <br/>
                        analytics and reports<br/>
                        on for Power BI
                        </Grid>
                        <Grid className="DashCertiComingSoon">Coming Soon..</Grid>
                    </Grid>
                </Grid>
            </TabPanel>
        </SwipeableViews>
      </Grid>
      <AppBar className="BullTab" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className="TabBull"/>
          <Tab className="TabBull"/>
        </Tabs>
      </AppBar>
    </Grid>
  );
}
export default Certificates;