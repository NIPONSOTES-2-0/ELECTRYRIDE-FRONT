import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", name: "", cpassword: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) =>  {
    this.setState({
        [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      alert("Verifique la contraseña");
      return;
    }
    if (
      !this.state.email.length ||
      !this.state.password.length ||
      !this.state.name.length ||
      !this.state.cpassword.length
    ) {
      alert("Llene todos los campos");
      return;
    }
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    localStorage.setItem("name", this.state.name);
    document.location.href = "/perfil";
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className="layout">
          <Paper className="paper">
            <Avatar className="avatar">
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h2">Update</Typography>
            <form className="form" onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Nombre</InputLabel>
                <Input
                  id="nombre"
                  name="nombre"
                  autoComplete="nombre"
                  onChange={this.handleChange}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Confirmar Password</InputLabel>
                <Input
                  name="Confirmarpassword"
                  type="password"
                  id="onfirmarpassword"
                  autoComplete="current-password"
                  onChange={this.handleChange}
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
  }
}