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
    // console.log("ACTIVE", active)
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
          
          <Grid lg={12} className="MenuPosition">
            <Grid className="BrandLogo"></Grid>
            <Grid className="TGSNav">
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button className="DashIcon">
                  <Link to="/dashboard" className="Liq-NavLinks" className={pathname === '/dashboard' ? 'NavSelected' : ''}>
                    <Icon/>
                    Dashboard
                  </Link>
                </ListItem>
                <ListItem button className="SafetyIcon">
                  <Link to="/safety-testing" className="Liq-NavLinks" className={pathname === '/safety-testing' ? 'NavSelected' : ''}>
                      <Icon/>
                      Safety  Testing
                    </Link>
                </ListItem>
                <ListItem button className="CreatLinkIcon">
                  <Link to="/create-link" className="Liq-NavLinks" className={pathname === '/create-link' ? 'NavSelected' : ''}>
                      <Icon/>
                      Create a ticket
                  </Link>
                </ListItem>
                <ListItem className="ContactsIcon">
                  {/* <Link className="Liq-NavLinks" className={pathname === '/contacts' ? 'NavSelected' : ''}  onClick={SubMenuOpen}>
                      <Icon/>
                      Contacts
                  </Link> */}
                  <Link to="/contacts" className="Liq-NavLinks" className={pathname === '/contacts' ? 'NavSelected' : ''}>
                      <Icon/>
                      Contacts
                  </Link>
                  {/* <List component="nav" className="LeftSubMenu" id="SubMenu-Links">
                    <ListItem>
                      <Link to="/tgscrop" className="Liq-NavLinks" className={pathname === '/tgscrop' ? 'NavSelected' : ''}>
                        TGS Corp
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/human-resources" className="Liq-NavLinks" className={pathname === '/human-resources' ? 'NavSelected' : ''}>
                        Human Resources
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/operating" className="Liq-NavLinks" className={pathname === '/operating' ? 'NavSelected' : ''}>
                        Operating
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/safety" className="Liq-NavLinks" className={pathname === '/safety' ? 'NavSelected' : ''}>
                        Safety
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/track" className="Liq-NavLinks" className={pathname === '/track' ? 'NavSelected' : ''}>
                        Track
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/information-technology" className="Liq-NavLinks" className={pathname === '/information-technology' ? 'NavSelected' : ''}>
                        Information Technology
                      </Link>
                    </ListItem>
                  </List> */}
                </ListItem>
                <ListItem button className="MessageIcon">
                  <Link to="/broadcast-messages" className="Liq-NavLinks" className={pathname === '/broadcast-messages' ? 'NavSelected' : ''}>
                      <Icon/>
                      Broadcast Message
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          {/* <Button className="LogoutBtn">Logout</Button> */}
          <Button className="MenuCloseBtn" onClick={MenuClose}/>
    </Grid>
  );
}
export default LeftControl;