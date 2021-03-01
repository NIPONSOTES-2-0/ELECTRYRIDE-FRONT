import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ViewMap from './components/map/ViewMap';
import Login from './components/login/Login';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('Should return map', () => {
    render(<ViewMap />)
  });
test('Sould return view login', () => {
    render(<Login/>)
});
