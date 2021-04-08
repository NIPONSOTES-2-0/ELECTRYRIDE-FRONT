import React from 'react';
import Login from './components/login/Login';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
test("Should return login on general", () => {
  render(<Login />);
});
