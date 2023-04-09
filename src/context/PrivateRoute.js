import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component}) => {
  const { user } = useContext(AuthContext);
  return (
    <>
    {
        user ? <>{component}</> : <Navigate to="/" />
    }
    </>
);
};

export default PrivateRoute;