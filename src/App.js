import React, { Component } from 'react';
import { counter } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Counter from './components/Counter';

import Counter from './containers/CounterContainer';

const store = createStore(counter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
