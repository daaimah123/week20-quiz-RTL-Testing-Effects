import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('count starts with 0', () => {
  // Set a rendered `Counter` component to a deconstructed `getByTestId`.
  const { getByTestId } = render(<Counter />)
  // Verify that the node with id "count" has content text of "Clicked 0 time".
  expect(getByTestId("count").textContent).toBe("Clicked 0 times");
});

test('clicking on button increments counter', () => {
  // Set a rendered `Counter` component to a deconstructed `getByText` and `getByTestId.
  const { getByText, getByTestId } = render(<Counter />)
  // Simulate a click event on the button with text "Increment".
  fireEvent.click(getByText("Increment"));
  // Verify that the node with id "count" has content text of "Clicked 1 time".
  expect(getByTestId("count").textContent).toBe("Clicked 1 time");
  // Simulate a click event on the button with text "Increment".
  fireEvent.click(getByText("Increment"));
  // After the second button click, verify that the node with id "count" has content text of "Clicked 2 time".
  expect(getByTestId("count").textContent).toBe("Clicked 2 times");
});

test('window title changes after every increment if checkbox is checked', () => {
  // Set the browser window title to "My Awesome App".
  global.window.document.title = "My Awesome App";
  // Set a rendered `Counter` component to a deconstructed `getByText` and `getByLabelText`.
  const { getByText, getByLabelText } = render(<Counter />);
  // Simulate a click event on button text "Increment".
  fireEvent.click(getByText("Increment"));
  // Verify that the browser window title is "My Awesome App".
  expect(global.window.document.title).toBe("My Awesome App");
  // Set checkmark label text to the variable checkbox.
  const checkbox = getByLabelText("Check to display count in document title");
  // Simulate a click event on checkmark box with the previous checkbox variable label text.
  fireEvent.click(checkbox);
  // Verify that the browser window title is changed to "Total number of clicks: 1" upon the initial checkbox click event.
  expect(global.window.document.title).toBe("Total number of clicks: 1");
  // Simulate a second click event on button text "Increment".
  fireEvent.click(getByText("Increment"));
  // Verify that the browser window title is changed to "Total number of clicks: 2" upon the initial checkbox click event.
  expect(global.window.document.title).toBe("Total number of clicks: 2");
  //  Simulate a click event (to unclick) on the checkmark box with the previous checkbox variable label text.
  fireEvent.click(checkbox);
  // Verify that the browser window title is changed back to "My Awesome App" following click event (unclicking of the checkbox).
  expect(global.window.document.title).toBe("My Awesome App");
});