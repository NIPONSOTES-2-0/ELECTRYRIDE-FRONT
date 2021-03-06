import React, {useContext} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ViewMap from "./components/map/ViewMap";
import CustomMarker from "./components/map/CustomMarker";
import CustomPopup from "./components/map/CustomPopup";
import UserProfile from './components/profile/UserProfile';
import UserContextProvider, { UserContext } from "./contexts/UserContext";
import venues from "./components/map/places.json";
import Markers from "./components/map/Markers";
import { Login } from "./components/login/Login";
import AddCreditCard from "./components/pagos/AddCreditCard";
import CreditCardForm from "./components/pagos/CreditCardForm";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { mount } from "enzyme";
import { UserService } from "./services/UserService";
import { Register } from "./components/login/Register";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
test("Should Put the Marks", () => {    
    const places = venues.venues;    
    render(<ViewMap />);
    const handleChange = jest.fn();
    const x = (popup) => {console.log(popup)};
    const markerrs = render(<Markers  places={places} openPopup={x}/>);             //places={places}
    console.log("markerrs: ",markerrs);
  });


  */

test("Should return map", () => {
  render(<ViewMap />);
});

test("Should render profile", () => {
  render(
    <UserContextProvider>
      <UserProfile />
    </UserContextProvider>  
  );
});

test("Should render userContext", () => {
  render(<UserContextProvider />);
});

test("Should render userService", () => {
  const service = new UserService();
  render(<service />);
});

test("Should render registerView", () => {  
  render(<Register />);  
});

//const buttons = screen.getAllByRole("button");
/*
it("Should Have a Mark", () => {
  const  marker =  {
    description: 'Centro comercial Santa fe',
    name: 'C.C Santa Fe',
    latitude: 4.752188061011153,
    longitude: -74.04425755035315,
    bikes_aviables: 0
  };

  const onClick = jest.fn();      
  const customMarker = render(<CustomMarker marker={marker} openPopup={onClick}/>)
  console.log("customMarker: ",customMarker);  
  const mark = screen.getAllByRole("div");  
  fireEvent.click(mark);

});
*/
/*
test('Should show a Popup', () => {
    const  marker =  {
        description: 'Centro comercial Santa fe',
        name: 'C.C Santa Fe',
        latitude: 4.752188061011153,
        longitude: -74.04425755035315,
        bikes_aviables: 0
      };
    render(<CustomPopup index={1} marker={marker} />);
});
*/
/*
const searchProccess = (searchValue) => {
    const buttons = screen.getAllByRole("button");
    console.log("Buttons: ",buttons);
    console.log("ESTE ES EL BOTON: ",buttons[0]);
    const searchButton = buttons[1];
    console.log("Boton de busqueda: ",searchButton);
    fireEvent.click(searchButton);
    //const secondSearchButton = screen.getByRole("button");
    //const searchInput = screen.getByRole("textbox");
    //fireEvent.change(searchInput, { target: { value: searchValue } })
    //fireEvent.click(secondSearchButton);
  };
  */
test("Should Search A Place", () => {
  render(<ViewMap />);
  //searchProccess("Escuela Colombiana");
  //expect(screen.getByText(/Escuela Colombiana de Ingeniería Julio Garavito/i)).toBeInTheDocument();
});

test("Sould return view login", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Should render CreditCardForm", () => {
  const state = {
    form: {
      name: "",
      cardNumber: "",
      cvc: "",
      date: "",
    },
    error: null,
    loading: false,
  };
  const div = document.createElement("div");
  ReactDOM.render(<CreditCardForm form={state.form} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Should render AddCreditCard", () => {
  const div = document.createElement("div");
  <Router>
    <Switch>
      <Route path="/perfil"/>
      <Route>
      <AddCreditCard />
      {ReactDOM.render(<AddCreditCard />, div)}
      </Route>
    </Switch>
  </Router>;  
  ReactDOM.unmountComponentAtNode(div);
});


