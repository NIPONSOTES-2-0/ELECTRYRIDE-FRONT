import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/profile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import MapView from "./components/map/ViewMap";
import {Login} from "./components/login/Login";
import {Register} from "./components/login/Register";
//hola
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
  }
  handleIsLoggedIn = () =>  {
    this.setState({
      isLoggedIn: true
    });
  }
  render() {
    const UserProfileView = () => <UserProfile />;
    const LoginView = () => <Login />;
    const RegisterView = () => <Register/>;
    return (
      <div className="App">
        <Router>          
        <Navbar />
          <Switch>
            <Route exact path="/" component={LoginView}>
            </Route>
            <Route path="/perfil" component={UserProfileView} />
            <Route path="/register" component={RegisterView} />
            <Route exact path="/map">
              <MapView />
            </Route>
            <Route exact path="/viaje">
              <h1>Inicia tu viaje</h1>
            </Route>
            <Route exact path="/pagos">
              <h1>Escoge tu metodo de pago</h1>
            </Route>
            <Route exact path="/ayuda">
              <h1>Contacta con nosotros</h1>
            </Route>
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
