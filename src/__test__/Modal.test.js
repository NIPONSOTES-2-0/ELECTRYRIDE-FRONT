import React from "react";
import CustomModal from "../components/map/Modal";
import CustomPoupup from '../components/map/CustomPopup';
import CustomMarker from '../components/map/CustomMarker';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

test("should render modal", () => {
  render(<CustomModal />);
});

test("should render customPopup", () => {
  render(<CustomPoupup />);
});


/*
test("should render customMarker", () => {
    //({ index, marker, openPopup, closePopup, rentBike }
    const marker = {longitude:11.21, latitude:22.1};
    //render(<CustomMarker index={1} marker={marker}/>);
});
*/