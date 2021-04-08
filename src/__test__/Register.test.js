import React from 'react';
import { shallow } from 'enzyme';
import  Register  from "../components/login/Register";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

let wrapper;

test("Should render registerView", () => {
  render(<Register />);
});

/*
test('check if login button is not disabled', () => {
  let loginButton = wrapper.find('#login-button');
  wrapper.find('input[name="workplace"]').simulate('change', { target: { name:'workplace', value: 'test' } });
  wrapper.find('input[name="password"]').simulate('change', { target: { name:'password', value: 'test' } });
  wrapper.find('input[name="personal_number"]').simulate('change', { target: {name: 'personal_number', value: 'test' } });
  loginButton = wrapper.find('#login-button');

  loginButton.props().onClick(); // for handleSubmit

  expect(loginButton.prop('disabled')).toEqual(false);
});*/
