import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import TodoList from './TodoList';

console.tron.log('HW');
console.tron.warn('HW');

const App = () => (
  <Provider store={store} className="App">
    <h1>Hello World!</h1>
    <TodoList />
  </Provider>
);

export default App;
