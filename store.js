// Initial state of the Tally 
const initialState = {
    count: 0
  };
  
  // A Redux-inspired store
  function createStore(reducer) {
    let state = initialState; 
    let listeners = []; // List of subscribers
  
    // Get current state
    const getState = () => state;
  
    // Dispatch an action to update the state
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener()); // Notify all subscribers of state change
    };
  
    // Subscribe to state changes
    const subscribe = (listener) => {
      listeners.push(listener); // Add a listener to the subscribers list
      return () => {
        listeners = listeners.filter(l => l !== listener); // Unsubscribe when needed
      };
    };
  
    return { getState, dispatch, subscribe };
  }
  
  // Reducer function to handle actions
  function tallyReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return { count: state.count + 1 };
      case 'SUBTRACT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state; // Return current state for unknown actions
    }
  }
  
  const store = createStore(tallyReducer);
  
  // Subscribe to state changes and log the updated state
  store.subscribe(() => {
    console.log('Updated State:', store.getState());
  });
  
  // SCENARIO 1: Initial State Verification
  console.log('Initial State:', store.getState());
  
  // SCENARIO 2: Incrementing the Counter
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });
  
  // SCENARIO 3: Decrementing the Counter
  store.dispatch({ type: 'SUBTRACT' });
  
  // SCENARIO 4: Resetting the Counter
  store.dispatch({ type: 'RESET' });