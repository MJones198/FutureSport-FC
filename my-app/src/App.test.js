import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import Header from './componets/Header/Header';
import Videos from './componets/Main/Videos';
import Store from './componets/Main/Store';
import Form from './componets/Main/Form';


  test('renders App component', () => {
    render(<App />);
    screen.debug();
    // expect(screen.getByText)
  });


test('renders Header Component',() =>{
  //render Header Component
  render(<Header/>);
  //Find String in header component to insure it is present
  const seasonTickets = screen.getByText("SEASON TICKETS AVAILBLE NOW ~ WATCH PRESEASON TRAINING WITH INTERVIEWS FROM CLUB COACH");
  expect(seasonTickets).toBeInTheDocument();

});

test('renders Video Component',() =>{
  //Renders Video Component
  render(<Videos/>);
  //Find Text string in component to insure present
  const VidTitle = screen.getByText("Local Fun at Training Camp");
  expect(VidTitle).toBeInTheDocument();

});

test('renders store Component',() =>{
  //Renders Store Component
  render(<Store/>);
  //Find Text string in component Store to insure present
  const StoreItem = screen.getByText("Away Kit");
  expect(StoreItem).toBeInTheDocument();

});

test('Correct text in email field', () =>{
//Render Form comp
render(<Form/>);
//Find Email in Form
const emailComp = screen.getByLabelText(/Email/);
expect(emailComp).toBeInTheDocument();
//Ensure value of Email is empty
expect(emailComp.value).toBe("");
//Simulate User entering email into Email
userEvent.type(emailComp, "mason.ajones2000@gmail.com");
//Ensure value is exactly the same as what user inputted
expect(emailComp.value).toBe("mason.ajones2000@gmail.com");
});