import React, { Component } from "react";
import "./App.css";
import { FormularioAyuda } from "./components/ayuda/FormularioAyuda";
import { FormularioReporte } from "./components/reporte/FormularioReporte";
import { FormularioApoyo } from "./components/apoyo/FormularioApoyo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/profile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import ViewMapHook from "./components/map/ViewMapHook";
import AddCreditCard from "./components/pagos/AddCreditCard";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import WizardExample from "./components/travel/WizardCustom";
import UserContextProvider from "./contexts/UserContext";
import ParkingContextProvider from "./contexts/ParkingContext";
import BikeContextProvider from "./contexts/BikeContext";

class App extends Component {
  render() {
    const LoginView = () => <Login />;
    const RegisterView = () => <Register />;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route path="/perfil">
              <UserContextProvider>
                <UserProfile />
              </UserContextProvider>
            </Route>
            <Route path="/register" component={RegisterView} />
            <Route exact path="/map">
              <ParkingContextProvider>
                <ViewMapHook />
              </ParkingContextProvider>
            </Route>
            <Route exact path="/viaje">
              <WizardExample />
            </Route>
            <Route exact path="/pagos">
              <AddCreditCard />
            </Route>
            <Route exact path="/ayuda">
              <FormularioAyuda />
            </Route>
            <Route exact path="/reporte">
              <FormularioReporte />
            </Route>
            <Route exact path="/apoyo">
              <FormularioApoyo />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
