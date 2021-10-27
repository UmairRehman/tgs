import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Pages/Start/Login';
import EmployeeLogin from '../Pages/Start/EmployeeLogin';
import Dashboard from '../Pages/Employee/Dashboard/Dashboard';
import SafetyTesting from '../Pages/Employee/Safety/SafetyTesting';
import SafetyTestingEdit from '../Pages/Employee/Safety/safety-testing-edit';
import Reilroad from '../Pages/Employee/Safety/Enter-RailRoad-Add';
import CreateTicket from '../Pages/Employee/Ticket/CreateTicket';
import BroadcastMessages from '../Pages/Broadcast/BroadcastMessages';

import HumanResources from '../Pages/Employee/Department/HumanResources';
import Operations from '../Pages/Employee/Department/Operations';
import Safety from '../Pages/Employee/Department/Safety';
import InformationTechnology from '../Pages/Employee/Department/InformationTechnology';
// import Messages from '../Pages/Messages/Messages';
import NewHireQueue from '../Pages/HR/NewHireQueue/NewHireQueue';
import TicketsAndAlerts from '../Pages/HR/TicketsAndAlerts/TicketsAndAlerts';
import Employees from '../Pages/HR/Employees/Employees';
import NewHireStep1 from '../Pages/HR/NewHireQueue/NewHireStep1';
import NewHireStep2 from '../Pages/HR/NewHireQueue/NewHireStep2';
import AlartUpdate from '../Pages/HR/TicketsAndAlerts/AlartUpdate';
import TicketUpdate from '../Pages/HR/TicketsAndAlerts/TicketUpdate';
import EmployeeResult from '../Pages/HR/Employees/Result';
import EmployeesProfile from '../Pages/HR/Employees/EmployeesProfile';
import ProfileResult from '../Pages/HR/Employees/ProfileResult';
import Termination from '../Pages/HR/Employees/Termination';
import Application from '../Pages/Applicant/Application/Application';
import Documents from '../Pages/Applicant/Documents/Documents';
import CreatePassword from '../Pages/Applicant/Application/CreatePassword';
import Questionnaire from '../Pages/Applicant/Application/Questionnaire';
import Submission from '../Pages/Applicant/Application/Submission';
import DocumentsStep3 from '../Pages/Applicant/Documents/DocumentsStep3';
import DocumentsStep4 from '../Pages/Applicant/Documents/DocumentsStep4';
import SubmissionComplete from '../Pages/Applicant/Application/SubmissionComplete';
import Terminated from '../Pages/HR/Employees/Terminated';
import ConditionalOffer from '../Pages/Applicant/Documents/Documents/ConditionalOffer';
import PostConditionalJobOffer from '../Pages/Applicant/Documents/Documents/PostConditionalJobOffer';
import PostConditionalJobOffer2 from '../Pages/Applicant/Documents/Documents/PostConditionalJobOffer2';
import PostConditionalJobOffer3 from '../Pages/Applicant/Documents/Documents/PostConditionalJobOffer3';
import PostConditionalJobOffer4 from '../Pages/Applicant/Documents/Documents/PostConditionalJobOffer4';
import FuelCardAgreement from '../Pages/Applicant/Documents/Documents/FuelCardAgreement';
import BootCardAgreement from '../Pages/Applicant/Documents/Documents/BootCardAgreement';
import TWICCardPaymentAgreement from '../Pages/Applicant/Documents/Documents/TWIC-CardPaymentAgreement';
import DirectDeposit from '../Pages/Applicant/Documents/Documents/DirectDeposit';
import FCRA from '../Pages/Applicant/Documents/Documents/FCRA';
import ArbitrationAgreement from '../Pages/Applicant/Documents/Documents/ArbitrationAgreement';
import Harassment from '../Pages/Applicant/Documents/Documents/Harassment';
import EmployeeAgreement from '../Pages/Applicant/Documents/Documents/EmployeeAgreement';
import EmployeeHandbook from '../Pages/Applicant/Documents/Documents/EmployeeHandbook';
import SafetyHandbook from '../Pages/Applicant/Documents/Documents/SafetyHandbook';
import DrugAlcoholWeapons from '../Pages/Applicant/Documents/Documents/DrugAlcoholWeapons';
const Routing = () => (
  <Router>
    <Route exact path="/" component={()=><Login/>}/>
    <Route exact path="/login" component={()=><EmployeeLogin/>}/>
    
    {/* Employee Portanl Nav */}
    <Route exact path="/dashboard" component={()=><Dashboard/>}/>

    <Route exact path="/safety-testing" component={()=><SafetyTesting/>}/>
    <Route exact path="/safety-testing/:id" component={()=><SafetyTestingEdit/>}/>
    <Route exact path="/enter-railroad-event" component={()=><Reilroad/>}/>
    
    <Route exact path="/create-ticket" component={()=><CreateTicket/>}/>
    
    <Route exact path="/department" component={()=><HumanResources/>}/>
    <Route exact path="/human-resources" component={()=><HumanResources/>}/>
    <Route exact path="/operations" component={()=><Operations/>}/>
    <Route exact path="/safety" component={()=><Safety/>}/>
    <Route exact path="/information-technology" component={()=><InformationTechnology/>}/>

    

    {/* HR Portal Nav */}
    <Route exact path="/new-hire-queue" component={()=><NewHireQueue/>}/>
    <Route exact path="/new-hire-queue/:id" component={()=><NewHireStep1/>}/>
    <Route exact path="/new-hire-queue/step/:id" component={()=><NewHireStep2/>}/>

    <Route exact path="/tickets-alerts" component={()=><TicketsAndAlerts/>}/>
    <Route exact path="/tickets-alerts/alert/:id" component={()=><AlartUpdate/>}/>
    <Route exact path="/tickets-alerts/ticket/:id" component={()=><TicketUpdate/>}/>

    <Route exact path="/employees" component={()=><Employees/>}/>
    <Route exact path="/employees/result" component={()=><EmployeeResult/>}/>
    <Route exact path="/employees-profile" component={()=><EmployeesProfile/>}/>
    <Route exact path="/employees-profile/result" component={()=><ProfileResult/>}/>
    <Route exact path="/employees-profile/termination" component={()=><Termination/>}/>
    <Route exact path="/employees-profile/terminated" component={()=><Terminated/>}/>

    {/* Admin Portal Nav */}
    {/* <Route exact path="/messages" component={()=><Messages/>}/> */}
    <Route exact path="/broadcast-messages" component={()=><BroadcastMessages/>}/>
    
    
    {/* Applicant Portal Nav */}
    <Route exact path="/application" component={()=><Application/>}/>
    <Route exact path="/create-password" component={()=><CreatePassword/>}/>
    <Route exact path="/questionnaire" component={()=><Questionnaire/>}/>
    <Route exact path="/submission" component={()=><Submission/>}/>
    <Route exact path="/documents" component={()=><Documents/>}/>
    <Route exact path="/documents/step/3" component={()=><DocumentsStep3/>}/>
    <Route exact path="/documents/step/4" component={()=><DocumentsStep4/>}/>
    <Route exact path="/submission/complete" component={()=><SubmissionComplete/>}/>
    
    {/* Applicant Document */}
    <Route exact path="/documents/conditional-offer" component={()=><ConditionalOffer/>}/>
    <Route exact path="/documents/post-conditional-job-offer" component={()=><PostConditionalJobOffer/>}/>
    <Route exact path="/documents/post-conditional-job-offer/2" component={()=><PostConditionalJobOffer2/>}/>
    <Route exact path="/documents/post-conditional-job-offer/3" component={()=><PostConditionalJobOffer3/>}/>
    <Route exact path="/documents/post-conditional-job-offer/4" component={()=><PostConditionalJobOffer4/>}/>

    <Route exact path="/documents/fuel-card-agreement" component={()=><FuelCardAgreement/>}/>
    <Route exact path="/documents/boot-card-agreement" component={()=><BootCardAgreement/>}/>
    <Route exact path="/documents/twic-card-payment-agreement" component={()=><TWICCardPaymentAgreement/>}/>
    <Route exact path="/documents/direct-deposit" component={()=><DirectDeposit/>}/>
    <Route exact path="/documents/fcra" component={()=><FCRA/>}/>
    <Route exact path="/documents/arbitration-agreement" component={()=><ArbitrationAgreement/>}/>

    <Route exact path="/documents/employee-agreement" component={()=><EmployeeAgreement/>}/>
    <Route exact path="/documents/harassment" component={()=><Harassment/>}/>
    <Route exact path="/documents/employee-handbook" component={()=><EmployeeHandbook/>}/>
    <Route exact path="/documents/safety-handbook" component={()=><SafetyHandbook/>}/>
    <Route exact path="/documents/drug-alcohol-weapons" component={()=><DrugAlcoholWeapons/>}/>

  </Router>
  )
  export default Routing;