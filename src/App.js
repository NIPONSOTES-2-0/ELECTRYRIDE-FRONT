import React, { Component } from "react";
import "./App.css";
import FormularioAyuda from "./components/ayuda/FormularioAyuda";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/profile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import MapView from "./components/map/ViewMap";
//hola
class App extends Component {
  render() {
    const UserProfileView = () => <UserProfile />;
    return (
      <div className="App">
        <Router>          
        <Navbar />
          <Switch>
            <Route exact path="/">
              <h1>Inicio</h1>
            </Route>
            <Route path="/perfil" component={UserProfileView} />
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
              <h1> <FormularioAyuda/> </h1>
            </Route>
          </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
