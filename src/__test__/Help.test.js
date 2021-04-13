import React from 'react';
import {FormularioAyuda} from '../components/ayuda/FormularioAyuda';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";



test("Should render help", () => {
  render(<FormularioAyuda />);
});