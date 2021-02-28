
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserProfile from "./components/profile/UserProfile";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">    
      <Router>
        <Navbar />
        <Switch>          
        <Route exact path="/" >
            <h1>Index</h1>
          </Route>      
          <Route exact path="/perfil" >
            <UserProfile />
          </Route>          
          <Route exact path="/map" >
            <h1>Mapa</h1>
          </Route> 
          <Route exact path="/viaje" >
            <h1>Inicia tu viaje</h1>
          </Route>   
          <Route exact path="/pagos" >
            <h1>Agregar medio de pago</h1>
          </Route>   
          <Route exact path="/ayuda" >
            <h1>Contacta con nosotros</h1>
          </Route>   
        </Switch>
      </Router>
    </div>
  );
}

export default App;
