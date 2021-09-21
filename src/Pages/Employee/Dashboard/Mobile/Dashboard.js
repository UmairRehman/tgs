import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import PageHeader from '../../../../Components/Mobile/PageHeader';
import Certificates from './Components/Certificates';

const Dashboard = () => {
  return (
    <Grid container xs={12} className="Liq-Container Device">
      <Grid xs={12} container justify="center" className="PageContent">
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
              <Grid xs={12}>
                <Certificates/>
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