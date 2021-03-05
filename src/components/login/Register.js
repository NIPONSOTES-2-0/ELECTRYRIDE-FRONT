import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import Loading from '../loading/Loading';

export const Register = () => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const [name, setName] = useState(0);
  const [cpassword, setCpassword] = useState(0);
  const [lastname, setLastname] = useState(0);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    setLoading(false);
    e.preventDefault();    
    if (password !== cpassword) {
      alert("Verifique la contraseña");
      return;
    }
    if (
      !email.length ||
      !password.length ||
      !name.length ||
      !cpassword.length ||
      !lastname.length
    ) {
      alert("Llene todos los campos");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("name", name);

    try {      
      sendUser();
      setLoading(false);
      document.location.href = "/perfil";
    } catch (error) {
      console.log("Capturando error de post");
      setLoading(false);
      //setError(false);
    }
    
    
  };

  const sendUser = () => {
    const URL = "http://localhost:8080/api/usuarios/";
    const usuario = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    };

    let header = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    };
    axios
      .post(URL + "register", usuario, header)
      .then((res) => res.data)
      .catch((err) => {
        console.log("Error on axios: ", err);
      });
    console.log("Paso el send user");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {loading ? <Loading /> : ""}
      <main className="layout">
        <Paper className="paper">
          <Avatar className="avatar">
            <AccountCircleIcon />
          </Avatar>
          <Typography variant="h2">Update</Typography>
          <form className="form" onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Nombre</InputLabel>
              <Input
                id="nombre"
                name="name"
                autoComplete="nombre"
                onChange={(event) => setName(event.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastname">Apellido</InputLabel>
              <Input
                id="lastname"
                name="lastname"
                autoComplete="lastname"
                onChange={(event) => setLastname(event.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Correo</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Confirmar Password</InputLabel>
              <Input
                name="cpassword"
                type="password"
                id="onfirmarpassword"
                autoComplete="current-password"
                onChange={(event) => setCpassword(event.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className="submit"
            >
              Ingresar
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
};
