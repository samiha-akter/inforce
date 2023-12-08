import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BoothSetup from './components/BoothSetup';
import BoothList from './components/BoothList';
import Fees from './components/Fees';
import Dashboard from './components/Dashboard';
import QuickStatus from './components/QuickStatus';
import AgentProfile from './components/AgentProfile';
import Vehicles from './components/Vehicles';
import CaseAssign from './components/CaseAssign';
import Rules from './components/Rules';

function App() {
  const addBoothHandler = (booths) => {
    console.log(booths);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />{/* Done */}
        <Route path="/login" element={<Login/>} />{/*  */}
        <Route path="/signup" element={<SignUp/>} />{/*  */}
        <Route path="/setup" element={<BoothSetup addBoothHandler={addBoothHandler} />} />{/*  */}
        <Route path="/list" element={<BoothList />} />{/*  */}
        <Route path="/fees" element={<Fees/>} />{/*  */}
        <Route path="/dashboard" element={<Dashboard/>} />{/*  */}
        <Route path="/agentprofile" element={<AgentProfile/>}/>{/*  */}
        <Route path="/caseassign" element={<CaseAssign/>}/>{/*  */}
        <Route path="/quickstatus" element={<QuickStatus/>}/>{/*  */}
        <Route path="/rules" element={<Rules/>}/>{/*  */}
        <Route path="/vehicles" element={<Vehicles/>}/>{/*  */}
        <Route path="/*" element={<Navigate to="/"/>}/>{/*  Done */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
