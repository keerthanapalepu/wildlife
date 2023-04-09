import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {TextField, Container, Button, Typography} from '@material-ui/core';
import LoginStyles from './loginStyles';

const LoginPage = () => {
  const classes = LoginStyles();
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username, password });
    navigate('/home');
  };

  
  return (
    <div className={classes.root}>
      <Container maxWidth="xs" className={classes.formContainer}>
        <Typography variant="h3" align="center" style={{color : "white", paddingBottom: "3rem", fontWeight: "bolder"}}>
          Log in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            className={classes.textField}
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            className={classes.textField}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
