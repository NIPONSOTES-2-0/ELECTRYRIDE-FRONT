import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FormularioApoyo }  from "./components/apoyo/FormularioApoyo";
import UserProfile from "./components/profile/UserProfile";
import Navbar from "./components/navbar/Navbar";
import ViewMapHook from "./components/map/ViewMapHook";
import AddCreditCard from "./components/pagos/AddCreditCard";
import  Login  from "./components/login/Login";
import  Register  from "./components/login/Register";
import UserContextProvider from "./contexts/UserContext";
import ParkingContextProvider from "./contexts/ParkingContext";

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
              <h1>Inicia tu viaje</h1>
            </Route>
            <Route exact path="/pagos">
              <AddCreditCard />
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
