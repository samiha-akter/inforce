import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './components/homepageComp/Homepage';

import Login from './components/logins/Login';
import SignUp from '../src/components/signups/SignUp'
import Drivers from './components/signups/Drivers';
import TrafficController from './components/signups/TrafficController';

import PrivateComponent from './components/pages/PrivateComponent';
import Terms from './components/Terms';

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage/>} />

        {/* Private Components */}
        <Route element={<PrivateComponent/>}>
        
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/trafficcontroller'  element={<TrafficController/>}/>
        <Route path='/drivers' element={<Drivers/>}/>

        <Route path='/terms' element={<Terms/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;





