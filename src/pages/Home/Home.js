import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GiBurningForest } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    brand: {
    marginLeft: '20px'
  },
  login: {
    marginLeft: "auto",
  },
  content: {
    padding: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#75AFBD",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div style={{display: "flex", alignItems: 'center'}}>
          <Typography variant="h4" className={classes.logo}>
            <GiBurningForest />
          </Typography>
          <Typography variant="h5" className={classes.brand}>
            WildLife
          </Typography>
          </div>
          <div className={classes.login}>
            <Button color="inherit" onClick={() => {navigate('/adduser');}}>Add User</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <h1> Home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;
