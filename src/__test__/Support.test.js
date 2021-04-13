import React from 'react';
import {FormularioApoyo} from '../components/apoyo/FormularioApoyo';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";



test("Should render support", () => {
  render(<FormularioApoyo />);
});