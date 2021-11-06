import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import App from './containers/App.jsx'
import './index.css';
import 'tachyons';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();