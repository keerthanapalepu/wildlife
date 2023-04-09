import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:  {
    marginTop: theme.spacing(18),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#75AFBD',
    color: '#fff',
    '&:hover': { 
      backgroundColor: '#84c0ce',
    },
  },
}));

const AddUserForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
    <Typography variant="h3" align="center" style={{color : "#75AFBD", paddingBottom: "3rem", fontWeight: "bolder"}}>
          Add User
        </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.button}
            >
              Add User
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddUserForm;
