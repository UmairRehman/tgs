import React, {useState, useEffect} from 'react';
import {Grid,List,ListItem,Button,Icon} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LeftControl = () => {
  const [activeClass, setClass] = useState('');
    let { pathname } = useLocation();
    const [showMenuDropdown, setShowMenuDropdown] = useState(false)
    const [active, setActive] = useState([
        true, false, false, false, false, false, false, false, false, false, false, false, false
    ]);
    console.log("ACTIVE", active)
    const [OpenMore, setMoreMenu]=useState(null)
    const [anchorEl, setAnchorEl] = useState(null | HTMLElement);

    const MenuClose = (event) => {
      var element = document.getElementById("LeftContol");
      element.classList.remove("OpenMenu");
      var element = document.getElementById("LeftContol");
      element.classList.add("CloseMenu");
    };
  useEffect(()=>{
    
  })
  return (
    <Grid xs={12} className="LeftMenuCol">
          <Button className="MenuCloseBtn" onClick={MenuClose}/>
          <Grid lg={12}>
            <Grid className="BrandLogo"></Grid>
            <Grid className="TGSNav">
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button className="DashIcon">
                  <Link to="/dashboard" className="Liq-NavLinks" className={pathname === '/' ? 'NavSelected' : ''}>
                    <Icon/>
                    Dashboard
                  </Link>
                </ListItem>
                {/* <ListItem button className="RulesIcon">
                  <Link to="/rules" className="Liq-NavLinks" className={pathname === '/rules' ? 'NavSelected' : ''}>
                      <Icon/>
                      Rules
                  </Link>
                </ListItem> */}
                <ListItem button className="SafetyIcon">
                  <Link to="/safety-testing" className="Liq-NavLinks" className={pathname === '/safety-testing' ? 'NavSelected' : ''}>
                      <Icon/>
                      Safety  Testing
                    </Link>
                </ListItem>
                <ListItem button className="NewsletterIcon">
                  <Link to="/newsletter" className="Liq-NavLinks" className={pathname === '/newsletter' ? 'NavSelected' : ''}>
                      <Icon/>
                      Newsletter
                  </Link>
                </ListItem>
                <ListItem button className="DepartmentIcon">
                  <Link to="/department" className="Liq-NavLinks" className={pathname === '/department' ? 'NavSelected' : ''}>
                      <Icon/>
                      Department
                  </Link>
                </ListItem>
                <ListItem button className="CreatLinkIcon">
                  <Link to="/create-link" className="Liq-NavLinks" className={pathname === '/create-link' ? 'NavSelected' : ''}>
                      <Icon/>
                      Create a ticket
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          {/* <Button className="LogoutBtn">Logout</Button> */}
    </Grid>
  );
}
export default LeftControl;