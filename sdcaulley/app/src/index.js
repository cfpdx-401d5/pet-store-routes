import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navigation from './components/Navigation';

const store = configureStore();

function Root() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
          </div>
        </Router>
      </Provider>
    );
}

render(<Root />, document.querySelector('#root'));
