import React from 'react';
import {FormularioReporte} from '../components/reporte/FormularioReporte';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";



test("Should render help", () => {
  render(<FormularioReporte />);
});