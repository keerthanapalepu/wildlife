import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from "../../images/login.png";

const LoginStyles = makeStyles(theme => ({
    root: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(3),
      backgroundColor: 'transparent',
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[3],
      backdropFilter: 'blur(10px)',
      position: 'absolute',
    top: '50%', 
    left: '50px', 
    transform: 'translateY(-50%)',
    minHeight: '500px',
    minWidth: '350px'
    },
    textField: {
      margin: theme.spacing(1),
      width: '100%',
      '& .MuiOutlinedInput-root': {
       borderWidth: '5px',
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#543933', 
      },
    },
    },
    loginButton: {
      margin: theme.spacing(1),
      width: '100%',
      backgroundColor: '#543933',
      '&:hover': {
      backgroundColor: '#83533E',
    },
    },
  }));
  

export default LoginStyles;