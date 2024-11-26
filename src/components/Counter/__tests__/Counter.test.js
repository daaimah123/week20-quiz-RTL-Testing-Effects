import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('count starts with 0', () => {
  // Set a rendered `Counter` component to a deconstructed `getByTestId`.
  // Verify that the node with id "count" has content text of "Clicked 0 time".
});

test('clicking on button increments counter', () => {
  // Set a rendered `Counter` component to a deconstructed `getByText` and `getByTestId.
  // Simulate a click event on the button with text "Increment".
  // Verify that the node with id "count" has content text of "Clicked 1 time".
  // Simulate a click event on the button with text "Increment".
  // After the second button click, verify that the node with id "count" has content text of "Clicked 2 time".
});

test('window title changes after every increment if checkbox is checked', () => {
  // Set the browser window title to "My Awesome App".
  // Set a rendered `Counter` component to a deconstructed `getByText` and `getByLabelText`.
  // Simulate a click event on button text "Increment".
  // Verify that the browser window title is "My Awesome App".
  // Set checkmark label text to the variable checkbox.
  // Simulate a click event on checkmark box with the previous checkbox variable label text.
  // Verify that the browser window title is changed to "Total number of clicks: 1" upon the initial checkbox click event.
  // Simulate a second click event on button text "Increment".
  // Verify that the browser window title is changed to "Total number of clicks: 2" upon the initial checkbox click event.
  //  Simulate a click event (to unclick) on the checkmark box with the previous checkbox variable label text.
  // Verify that the browser window title is changed back to "My Awesome App" following click event (unclicking of the checkbox).
});