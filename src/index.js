import React from 'react';
import ReactDOM from 'react-dom';
import HeroContainer from './containers/HeroContainer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import './index.css';

const store = createStore(reducer)

const Root = () => (
  <Provider store={store}>
    <HeroContainer />
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
