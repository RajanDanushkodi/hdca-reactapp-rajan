import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import logo from '../images/logo.svg';
import * as converter from '../actions/converter.js';
import ConverterContainer from './ConverterContainer.js';
import HeaderContainer from './HeaderContainer.js';

import reducers from '../reducers';

const store = createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//window.store = store; /**enable this for browser console debug */

class AppContainer extends Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
        <Provider store={store}>
          <ConverterContainer />
        </Provider>
      </div>
    );
  }

  
}

export default AppContainer;