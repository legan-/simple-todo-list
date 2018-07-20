import React, { Component } from 'react';
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css';

import TodosContainer from './todos/TodosContainer';
import store from './configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <TodosContainer />
      </Provider>
    )
  }
}

export default App;