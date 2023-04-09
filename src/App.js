import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/Home/LandingPage';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import PrivateRoute from './context/PrivateRoute';
import AddUserForm from './pages/AddUser/adduser'
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={<PrivateRoute component=<HomePage /> />}
          />
          <Route
            path="/adduser"
            element={<PrivateRoute component=<AddUserForm /> />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;