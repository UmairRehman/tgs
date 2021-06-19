import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Pages/Start/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Location from '../Pages/Locations/Location';
import Newsletter from '../Pages/Newsletter/Newsletter';
import Rules from '../Pages/Rules/Rules';
import SafetyTesting from '../Pages/Safety/SafetyTesting';
import SafetyTestingEdit from '../Pages/Safety/safety-testing-edit';
import Reilroad from '../Pages/Safety/Enter-RailRoad-Add';
import Department from '../Pages/Department/Department';
import CreateTicket from '../Pages/Ticket/CreateTicket';
const Routing = () => (
  <Router>
    <Route exact path="/" component={()=><Login/>}/>
    <Route exact path="/dashboard" component={()=><Dashboard/>}/>
    <Route exact path="/rules" component={()=><Rules/>}/>
    <Route exact path="/location" component={()=><Location/>}/>

    <Route exact path="/safety-testing" component={()=><SafetyTesting/>}/>
    <Route exact path="/safety-testing/:id" component={()=><SafetyTestingEdit/>}/>
    <Route exact path="/enter-railroad-event" component={()=><Reilroad/>}/>
    
    
    <Route exact path="/newsletter" component={()=><Newsletter/>}/>
    <Route exact path="/department" component={()=><Department/>}/>
    <Route exact path="/create-link" component={()=><CreateTicket/>}/>
  </Router>
  )
  export default Routing;