
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllData from './components/alldata';
import Dashboard from './components/dashboard';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import NavBar from './components/NavBar';
import Login from './components/login';
import Withdraw from './components/withdraw';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './contexts/authContext';
import { UserProvider } from './contexts/userContext';
import Contact from './components/contact';

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <Router>
          <NavBar />
          <div className='container' style={{ padding: '20px' }}>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/CreateAccount/' element={<CreateAccount />} />
              <Route path='/login/' element={<Login />} />
              <Route path='*' exact element={<h4>Page Not Found</h4>} />
              <Route path='/contact/' element={<Contact />} />
              <Route element={<RequireAuth />}>
                <Route path='/dashboard/' element={<Dashboard />} />
                <Route path='/deposit/' element={<Deposit />} />
                <Route path='/withdraw/' element={<Withdraw />} />
                <Route path='/alldata/' element={<AllData />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
