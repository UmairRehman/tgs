import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, Button, Icon, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  DisplayNone: {
    display: 'none'
  }
}));

const LeftControl = () => {
  const classes = useStyles();

  const [activeClass, setClass] = useState('');

  const [authenticatedHeader, setAuthHeader] = useState(
    localStorage.getItem('access_jwt') || ''
  )

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
    let storageRole = localStorage.getItem('role') || 'applicant';
    setRole(storageRole);
    console.log(role)
    setTimeout(() => {
      setMenuloader(false);

    }, 500);
  }, []);

  /** Retreiving User Profile Information, cached in localstorage.
 * TO APPLY - state service later.
 */
  const userProfile = JSON.parse(
    localStorage.getItem('user_profile')
  )

  if (userProfile) {
    var {
      EmployeeStatusId,
      role_id,
    } = userProfile;
  }
  

  /********************************************************** */

  /** Setting sidebar styles if the user is authenticated */

  const sidebarClassName = classes.DisplayNone;

  /********************************************************** */

  const capabilities = {
    dashboard:[1,3,6],
    safety:[1,3,6],
    create_ticket:[1,2,3,4,6],
    deparment:[1,3,6],
    new_hire_queue:[2,4],
    tickets_alerts:[2,4],
    employees:[2,4,5],
    broadcast_message:[2],
    employees_profile:[2,4]
  }

//   const sideBarRoleBasedButtons = {
//     1: {
//         role: 'general_role',
//         role_id: 1,
//         buttons_enabled: ['dashboard','safety', 'create-ticket', 'deparment'],
//     },
//     2: {
//         role: 'systemadmin_role',
//         role_id: 2,
//         buttons_enabled: ['new-hire-queue','tickets-alerts', 'create-ticket', 'employees', 'broadcast-message'],
//     },
//     3: {
//         role: 'itmanager_role',
//         role_id: 3,
//         buttons_enabled: ['dashboard','safety', 'create-ticket', 'deparment'],
//     },
//     4: {
//         role: 'hr',
//         role_id: 4,
//         buttons_enabled: ['new-hire-queue','tickets-alerts', 'create-ticket', 'employees'],
//     },
//     5: {
//         role: 'hrAdmin',
//         role_id: 5,
//         buttons_enabled: ['employees'],
//     },
//     6: {
//         role: 'safetytesting_role',
//         role_id: 6,
//         buttons_enabled: ['dashboard','safety', 'create-ticket', 'deparment'],
//     },
// }

  return (
    <Grid xs={12} className="LeftMenuCol">

      <Grid lg={12} className="MenuPosition">
        <Grid className="BrandLogo"></Grid>
        <Grid className="TGSNav">
          <List component="nav" aria-label="main mailbox folders">
              <div>
                {
                  (capabilities.dashboard.includes(role_id)) && 
                    <ListItem button className="DashIcon">
                      <Link to="/dashboard" className="Liq-NavLinks" className={pathname === '/dashboard' ? 'NavSelected' : ''}>
                        <Icon />
                        Dashboard
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.safety.includes(role_id)) &&
                    <ListItem button className="SafetyIcon">
                      <Link to="/safety-testing" className="Liq-NavLinks" className={pathname === '/safety-testing' ? 'NavSelected' : ''}>
                        <Icon />
                        Safety  Testing
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.new_hire_queue.includes(role_id)) &&
                    <ListItem button className="NewHireIcon">
                      <Link to="/new-hire-queue" className="Liq-NavLinks" className={pathname === '/new-hire-queue' ? 'NavSelected' : ''}>
                        <Icon />
                        New Hire Queue
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.tickets_alerts.includes(role_id)) &&
                    <ListItem button className="AlertIcon">
                      <Link to="/tickets-alerts" className="Liq-NavLinks" className={pathname === '/tickets-alerts' ? 'NavSelected' : ''}>
                        <Icon />
                        Tickets and Alerts
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.create_ticket.includes(role_id)) &&
                    <ListItem button className="CreatLinkIcon">
                      <Link to="/create-ticket" className="Liq-NavLinks" className={pathname === '/create-ticket' ? 'NavSelected' : ''}>
                        <Icon />
                        Create a ticket
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.deparment.includes(role_id)) &&
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
                }
                {
                  (capabilities.employees.includes(role_id)) &&
                    <ListItem button className="EmployeeIcon">
                      <Link to="/employees" className="Liq-NavLinks" className={pathname === '/employees' ? 'NavSelected' : ''}>
                        <Icon />
                        Employees
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.employees_profile.includes(role_id)) &&
                    <ListItem button className="EmployeeIcon">
                      <Link to="/employees-profile" className="Liq-NavLinks" className={pathname === '/employees-profile' ? 'NavSelected' : ''}>
                        <Icon />
                        Employees Profile
                      </Link>
                    </ListItem>
                }
                {
                  (capabilities.broadcast_message.includes(role_id)) &&
                    <ListItem button className="MessageIcon">
                      <Link to="/broadcast-messages" className="Liq-NavLinks" className={pathname === '/broadcast-messages' ? 'NavSelected' : ''}>
                        <Icon />
                        Broadcast Message
                      </Link>
                    </ListItem>
                }
              </div>
          </List>
        </Grid>
      </Grid>
      {/* <Button className="LogoutBtn">Logout</Button> */}
      <Button className="MenuCloseBtn" onClick={MenuClose} />
    </Grid>
  );
}
export default LeftControl;