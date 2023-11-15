import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import HomePage from './components/homepage';
import Introduction from './components/Introduction';

function App () {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
  );
}

export default App;
