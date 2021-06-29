import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Pages/Start/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import SafetyTesting from '../Pages/Safety/SafetyTesting';
import SafetyTestingEdit from '../Pages/Safety/safety-testing-edit';
import Reilroad from '../Pages/Safety/Enter-RailRoad-Add';
import CreateTicket from '../Pages/Ticket/CreateTicket';
import Contacts from '../Pages/Contacts/Contacts';
import BroadcastMessages from '../Pages/Broadcast/BroadcastMessages';

import TgsCrop from '../Pages/Contacts/TgsCrop';
import HumanResources from '../Pages/Contacts/HumanResources';
import Operating from '../Pages/Contacts/Operating';
import Safety from '../Pages/Contacts/Safety';
import Track from '../Pages/Contacts/Track';
import InformationTechnology from '../Pages/Contacts/InformationTechnology';
import Messages from '../Pages/Messages/Messages';
const Routing = () => (
  <Router>
    <Route exact path="/" component={()=><Login/>}/>
    <Route exact path="/dashboard" component={()=><Dashboard/>}/>

    <Route exact path="/safety-testing" component={()=><SafetyTesting/>}/>
    <Route exact path="/safety-testing/:id" component={()=><SafetyTestingEdit/>}/>
    <Route exact path="/enter-railroad-event" component={()=><Reilroad/>}/>
    
    <Route exact path="/create-link" component={()=><CreateTicket/>}/>
    
    <Route exact path="/contacts" component={()=><TgsCrop/>}/>
    <Route exact path="/tgscrop" component={()=><TgsCrop/>}/>
    <Route exact path="/human-resources" component={()=><HumanResources/>}/>
    <Route exact path="/operating" component={()=><Operating/>}/>
    <Route exact path="/safety" component={()=><Safety/>}/>
    <Route exact path="/track" component={()=><Track/>}/>
    <Route exact path="/information-technology" component={()=><InformationTechnology/>}/>

    <Route exact path="/broadcast-messages" component={()=><BroadcastMessages/>}/>

    <Route exact path="/messages" component={()=><Messages/>}/>
  </Router>
  )
  export default Routing;