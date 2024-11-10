# Tally App - Redux-Inspired State Management

This project implements a basic Redux-inspired store to manage the state of a simple Tally App counter. The store supports core state management operations such as incrementing, decrementing, and resetting a counter. All state changes are logged to the console to illustrate state updates, making this an effective demonstration of state management without a UI.

## Features

- **State Management Functions**: 
  - `getState()`: Retrieve the current state of the counter.
  - `dispatch(action)`: Dispatch an action (e.g., `ADD`, `SUBTRACT`, `RESET`) to update the state.
  - `subscribe(listener)`: Register a function to be called whenever the state changes.
- **Actions Supported**: 
  - `ADD`: Increments the counter by 1.
  - `SUBTRACT`: Decrements the counter by 1.
  - `RESET`: Resets the counter to 0.

## How to Run

1. **Clone the Repository**: Clone this project to your local machine.

2. **Open the Project in VSCode**: 
   - Open this project directory in Visual Studio Code.

3. **Open the Integrated Terminal**:
   - In VSCode, open the terminal by navigating to `View` > `Terminal`, or use the shortcut:
     - **Windows/Linux**: <kbd>Ctrl</kbd> + <kbd>`</kbd>
     - **Mac**: <kbd>Cmd</kbd> + <kbd>`</kbd>

4. **Run the Code**:
   - Ensure you have Node.js installed. In the terminal, run:
     ```bash
     node store.js
     ```
   - You should see output in the terminal showing the state updates according to each scenario.

## Scenarios Demonstrated

The `store.js` file contains test scenarios, following Gherkin syntax, to validate the functionality:

1. **Initial State Verification**:
   - Logs the initial state, which should display `{ count: 0 }`.

2. **Incrementing the Counter**:
   - Dispatches the `ADD` action twice to increase `count` to 2, and logs each update.

3. **Decrementing the Counter**:
   - Dispatches the `SUBTRACT` action to decrease `count` by 1, updating `count` to 1.

4. **Resetting the Counter**:
   - Dispatches the `RESET` action to reset `count` back to 0.

## Approach

This project uses a minimalistic approach inspired by Redux, following the Observer pattern for state management. The store encapsulates core functions (`getState`, `dispatch`, `subscribe`), a reducer function for handling actions, and an initial state. Subscribers (listeners) are notified of every state change, which is logged to the console.

### Key Components
- **Store Creation**: A `createStore` function defines state, reducers, and listener subscriptions.
- **Reducer Function**: The reducer function processes actions and returns the updated state.

## Challenges and Solutions

### Challenge
- **Ensuring State Immutability**: One challenge was to make sure that each state update returned a new state object rather than modifying the existing state directly. This is crucial for predictable state management, especially in larger applications.

### Solution
- **Using Immutable State Updates in the Reducer**: To handle this, each action in the `tallyReducer` function returns a new state object instead of directly mutating the current state. This approach ensures that state changes are predictable and easier to debug, following functional programming principles and enabling proper listener notifications for each state update.

