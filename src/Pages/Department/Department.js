import React, {useEffect} from 'react';
import {Grid,Button} from '@material-ui/core';
import PageHeader from '../../Components/PageHeader';
import LeftControl from '../../Components/LeftControl';
const Department = () => {
 
  // //useEffect(() => {
  //   console.clear();
  // });
  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol CloseMenu" id="LeftContol">
        <LeftControl/>
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader/>
          <Grid id="PageTitle">Department</Grid>
          {/* Page Start */}
          Page Area
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Department;