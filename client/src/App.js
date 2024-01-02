import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './components/homepageComp/Homepage';

import Login from './components/logins/Login';
import SignUp from './components/signups/SignUp';

import Drivers from './components/signups/Drivers';
import TrafficController from './components/signups/TrafficController';
import PrivateComponent from './components/pages/PrivateComponent';

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />

        <Route element={<PrivateComponent/>}>
        <Route path="/*" element={<Navigate to="/"/>}/>
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/tc'  element={<TrafficController/>}/>
        <Route path='/user' element={<Drivers/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;





{/* 
<Route path="/setup" element={<BoothSetup addBoothHandler={addBoothHandler} />} />
<Route path="/list" element={<BoothList />} />
<Route path="/fees" element={<Fees/>} />        
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/agentprofile" element={<AgentProfile/>}/> 
<Route path="/caseassign" element={<CaseAssign/>}/>
<Route path="/quickstatus" element={<QuickStatus/>}/>
<Route path="/rules" element={<Rules/>}/>
<Route path="/vehicles" element={<Vehicles/>}/> 
*/}