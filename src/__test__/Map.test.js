import React from "react";
import ViewMap from "../components/map/ViewMapHook";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";


test("should render map", () => {
  render(<ViewMap />);
});
