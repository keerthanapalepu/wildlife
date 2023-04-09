import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from "../../images/animal.png";

const LandingPageStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      textAlign: "center",
      color: "#ffffff",
      paddingBottom: "10rem"
    },
    title: {
      fontSize: "4rem",
      marginBottom: theme.spacing(4),
    },
    subtitle: {
      fontSize: "1.5rem",
      marginBottom: theme.spacing(6),
    },
    button: {
      margin: theme.spacing(2),
      padding: theme.spacing(2, 4),
    },
  }));

export default LandingPageStyles;