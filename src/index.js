import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App>
        <Switch>
            <Route path='/' component={LandingPage}/>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
