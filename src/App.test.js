import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ViewMap from "./components/map/ViewMap";
import CustomMarker from "./components/map/CustomMarker";
import CustomPopup from "./components/map/CustomPopup";
import UserProfile from "./components/profile/UserProfile";
import UserContextProvider, { UserContext } from "./contexts/UserContext";
import ParkingContextProvider, { ParkingContext } from "./contexts/ParkingContext";
import CustomMarkers from "./components/map/Markers";
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


test("Should return CustomMarkers", () => {
  render(<ParkingContextProvider>
    <CustomMarkers />
  </ParkingContextProvider>);
  
});

test("Should return map", () => {
  render(<ViewMap />);
});


test("Should render userService", () => {
  const service = new UserService();
  render(<service />);
});


test("Should Search A Place", () => {
  render(<ViewMap />);  
});

