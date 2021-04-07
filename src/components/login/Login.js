import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Swal from 'sweetalert2';
import logom from './styles/img/logom.jpg';
import "./styles/Login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Niponsotes Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.noozhawk.com/images/made/images/uploads/020221_Downtown_SB_Ebikes_State_Street_gm_1_2400_1600_80_s_c1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Login (){
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();     
    console.log("entra");
    axios.post('https://electryride-back.herokuapp.com/users/login', {
      email: e.target.email.value,
      password: e.target.password.value
    })
      .then(function (response) {
        Swal.fire(
          'Bienvenido ',
          'Sera redireccionado al dashboard de ',
          'success'
        )
        // guardar token e username logueado en localestorage
        localStorage.setItem('token', JSON.stringify(response.data.accessToken));
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('mailLogged', JSON.stringify(response.data.user.email));
        localStorage.setItem('nameLogged', JSON.stringify(response.data.user.name));
        localStorage.setItem('lastnameLogged', JSON.stringify(response.data.user.lastname));
        console.log(response.data);
        // redireccionar
        document.location.href = "/map";
      }).catch(function (error) {
        console.log(error);
        Swal.fire(
          'Campos Erroneos',
          'Verifique los campos',
          'error'
        )
      });
  };
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logom} alt="logo" className={classes.logo} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Registrarse"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
  );
}
