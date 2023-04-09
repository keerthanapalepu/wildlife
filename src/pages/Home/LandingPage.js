import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageStyles from './landingPageStyles'
import { Container } from "@material-ui/core";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;
const LandingPage = () => {
  const navigate = useNavigate();
  const classes = LandingPageStyles();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Title className={classes.title}>Wildlife</Title>
        <Text className={classes.subtitle}>
          Save the beauty of nature and discover wildlife like never before
        </Text>
        <br />
        <Button className={classes.button} size="large" type="primary" onClick={handleLogin}>
          Log in
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;