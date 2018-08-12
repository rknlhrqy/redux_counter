import React from 'react';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//expect(counter(0, { type: 'INCREMENT'})).toEqual(1);
//console.log('Test passed');

const store = createStore(counter);
store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

const App = () => {
  return(
    <div>Hi There!</div>
  );
};

export default App;