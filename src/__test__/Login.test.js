import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/login/Login';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

let wrapper;

test("Should return login", () => {
  render(<Login />);
});

/*test('check if login button is not disabled', () => {
  let loginButton = wrapper.find('#login-button');
  wrapper.find('input[name="workplace"]').simulate('change', { target: { name:'workplace', value: 'test' } });
  wrapper.find('input[name="password"]').simulate('change', { target: { name:'password', value: 'test' } });
  wrapper.find('input[name="personal_number"]').simulate('change', { target: {name: 'personal_number', value: 'test' } });
  loginButton = wrapper.find('#login-button');

  loginButton.props().onClick(); // for handleSubmit

  expect(loginButton.prop('disabled')).toEqual(false);
});*/
