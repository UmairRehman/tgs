import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, Button, Icon } from '@material-ui/core';
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
  const [OpenMore, setMoreMenu] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null | HTMLElement);

  const MenuClose = (event) => {
    var element = document.getElementById("LeftContol");
    element.classList.remove("OpenMenu");
    var element = document.getElementById("LeftContol");
    element.classList.add("CloseMenu");
  };

  const [role, setRole] = useState("")
  const [menuLoader, setMenuloader] = useState(false)

  useEffect(() => {
    setMenuloader(true)
    let storageRole = localStorage.getItem('role');
    setRole(storageRole);
    console.log(role)
    setTimeout(() => {
      setMenuloader(false);

    }, 500);
  }, [])
  return (
    <Grid xs={12} className="LeftMenuCol">

      <Grid lg={12} className="MenuPosition">
        <Grid className="BrandLogo"></Grid>
        <Grid className="TGSNav">
          <List component="nav" aria-label="main mailbox folders">

            {/* Employee Nav */}
            {menuLoader ?null: role !== "applicant" ?
            <div>
            <ListItem button className="DashIcon">
              <Link to="/dashboard" className="Liq-NavLinks" className={pathname === '/dashboard' ? 'NavSelected' : ''}>
                <Icon />
                Dashboard
              </Link>
            </ListItem>
            <ListItem button className="SafetyIcon">
              <Link to="/safety-testing" className="Liq-NavLinks" className={pathname === '/safety-testing' ? 'NavSelected' : ''}>
                <Icon />
                Safety  Testing
              </Link>
            </ListItem>
            <ListItem button className="CreatLinkIcon">
              <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                <Icon />
                Create a ticket
              </Link>
            </ListItem>
            <ListItem className={
              pathname === '/department' |
                pathname === '/human-resources' |
                pathname === '/operations' |
                pathname === '/safety' |
                pathname === '/information-technology' ?
                'DeptSelected DepartmentIcon' : 'DepartmentIcon'}>
              <Link to="/human-resources"
               className="Liq-NavLinks" className={
                pathname === '/department' |
                  pathname === '/human-resources' |
                  pathname === '/operations' |
                  pathname === '/safety' |
                  pathname === '/information-technology' ? 'NavSelected' : ''}>
                <Icon />
                Department
              </Link>
              <List component="nav" className="DeptFolder">
                <ListItem button>
                  <Link to="/human-resources" className={pathname === '/human-resources' ? 'NavSubSelected' : ''}>
                    Human Resources
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to="/operations" className={pathname === '/operations' ? 'NavSubSelected' : ''}>
                    Operations
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to="/safety" className={pathname === '/safety' ? 'NavSubSelected' : ''}>
                    Safety
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to="/information-technology" className={pathname === '/information-technology' ? 'NavSubSelected' : ''}>
                    Information Technology
                  </Link>
                </ListItem>
              </List>
            </ListItem>
            </div>
            :null}
            {/* Employee Nav End */}


            {/* HR Nav */}
            {menuLoader ? null : role == "hr" ?

              <div>
                <ListItem button className="NewHireIcon">

                  <Link to="/new-hire-queue" className="Liq-NavLinks" className={pathname === '/new-hire-queue' ? 'NavSelected' : ''}>
                    <Icon />
                    New Hire Queue
                  </Link>
                </ListItem>
                <ListItem button className="AlertIcon">
                  <Link to="/tickets-alerts" className="Liq-NavLinks" className={pathname === '/tickets-alerts' ? 'NavSelected' : ''}>
                    <Icon />
                    Tickets and Alerts
                  </Link>
                </ListItem>
                <ListItem button className="EmployeeIcon">
                  <Link to="/employees" className="Liq-NavLinks" className={pathname === '/employees' ? 'NavSelected' : ''}>
                    <Icon />
                    Employees
                  </Link>
                </ListItem>
                <ListItem button className="CreatLinkIcon">
                  <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                    <Icon />
                    Create a ticket
                  </Link>
                </ListItem>
              </div>
              : role == "applicant" ?
                <div>
                  {/* HR Nav End */}
                  {/* Applicant Nav */}
                  <ListItem button className="eApplicationIcon">
                    <Link to="/application" className="Liq-NavLinks" className={pathname === '/application' ? 'NavSelected' : ''}>
                      <Icon />
                      Employee Application umair
                    </Link>
                  </ListItem>
                  <ListItem button className="eDocumentsIcon">
                    <Link to="/documents" className="Liq-NavLinks" className={pathname === '/documents' ? 'NavSelected' : ''}>
                      <Icon />
                      Employee Documents
                    </Link>
                  </ListItem>
                </div>
                :

                role == 'admin' ?
                  <div>
                    {/* Applicant Nav End */}

                    {/* Admin Nav */}
                    <ListItem button className="EmployeeIcon">
                      <Link to="/employees-profile" className="Liq-NavLinks" className={pathname === '/employees-profile' ? 'NavSelected' : ''}>
                        <Icon />
                        Employees Profile
                      </Link>
                    </ListItem>
                  </div>
                  : role == "superAdmin" ?
            <div>
              {/* Admin Nav End */}

            {/* Supper Admin */}
            
            <ListItem button className="NewHireIcon">
              <Link to="/new-hire-queue" className="Liq-NavLinks" className={pathname === '/new-hire-queue' ? 'NavSelected' : ''}>
                <Icon />
                New Hire Queue
              </Link>
            </ListItem>
            <ListItem button className="AlertIcon">
              <Link to="/tickets-alerts" className="Liq-NavLinks" className={pathname === '/tickets-alerts' ? 'NavSelected' : ''}>
                <Icon />
                Tickets and Alerts
              </Link>
            </ListItem>
            <ListItem button className="CreatLinkIcon">
              <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                <Icon />
                Create a ticket
              </Link>
            </ListItem>
            <ListItem button className="EmployeeIcon">
              <Link to="/employees-profile" className="Liq-NavLinks" className={pathname === '/employees-profile' ? 'NavSelected' : ''}>
                <Icon />
                Employees Profile
              </Link>
            </ListItem>
            <ListItem button className="MessageIcon">
              <Link to="/broadcast-messages" className="Liq-NavLinks" className={pathname === '/broadcast-messages' ? 'NavSelected' : ''}>
                <Icon />
                Broadcast Message
              </Link>
            </ListItem>
             </div>
             : null}
            {/* Supper Admin End */}
          </List>
        </Grid>
      </Grid>
      {/* <Button className="LogoutBtn">Logout</Button> */}
      <Button className="MenuCloseBtn" onClick={MenuClose} />
    </Grid>
  );
}
export default LeftControl;