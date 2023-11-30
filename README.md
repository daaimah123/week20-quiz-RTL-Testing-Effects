# RTL Testing Effects

## Add GIF of expected behavior here!!!

### Helpful Tips to Get You Started

##### Setup Commands
```
git clone <repo>
# install dependencies
npm i
# run and view application ui in browser
npm run start
# run and view test output 
npm run test
```

##### Syntax
- `useState`, `useRef`, and `useEffect` are only implementation details and have no impact in the tests
- `getByTestId` for dynamic text; returns false when no element present
- `fireEvent.click`
- `jest.useFakeTimers` when simulating checkbox action, even though the component has `onChange` callback
- Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render

### Testing Counter
Create three tests for the Counter component.

- The first test should ensure the count starts at zero.
  - Set a rendered `Counter` component to a deconstructed `getByTestId`.
  - Verify that the node with id "count" has content text of "Clicked 0 time".
- The second test should handle a clicking the incrementing button counter.
  - Set a rendered `Counter` component to a deconstructed `getByText` and `getByTestId.
  - Simulate a click event on the button with text "Increment".
  - Verify that the node with id "count" has content text of "Clicked 1 time".
  - Simulate a click event on the button with text "Increment".
  - After the second button click, verify that the node with id "count" has content text of "Clicked 2 time".
- The third test should handles the window title changing after every increment if the checkbox is checked.
  - Set the browser window title to "My Awesome App".
  - Set a rendered `Counter` component to a deconstructed `getByText` and `getByLabelText`.
  - Simulate a click event on button text "Increment".
  - Verify that the browser window title is "My Awesome App".
  - Set checkmark label text to the variable checkbox.
  - Simulate a click event on checkmark box with the previous checkbox variable label text.
  - Verify that the browser window title is changed to "Total number of clicks: 1" upon the initial checkbox click event.
  - Simulate a second click event on button text "Increment".
  - Verify that the browser window title is changed to "Total number of clicks: 2" upon the initial checkbox click event.
  - Simulate a click event (to unclick) on the checkmark box with the previous checkbox variable label text.
  - Verify that the browser window title is changed back to "My Awesome App" following click event (unclicking of the checkbox).
  

