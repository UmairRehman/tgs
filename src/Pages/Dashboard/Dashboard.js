import React from 'react';
import {Grid,Typography,Box} from '@material-ui/core';
import PageHeader from '../../Components/PageHeader';
import LeftControl from '../../Components/LeftControl';
const Dashboard = () => {
 
  // //useEffect(() => {
  //   console.clear();
  // });
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
              <Grid className="DashCertificatsBox">
              <Typography variant="h6" component="h6">Certificates & Licenses</Typography>
                <Grid className="DashCertificats DashArchive">
                  <Grid className="DashCeriLogo"></Grid>
                  <Grid className="DashCeriText">
                    Achieve your<br/>
                    career and<br/>
                    learning goals
                  </Grid>
                  <Grid className="DashCertiComingSoon">Coming Soon..</Grid>
                </Grid>
              </Grid>
              <Grid className="DashCertificatsBox">
                <Typography variant="h6" component="h6">Certificates & Licenses</Typography>
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
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Dashboard;