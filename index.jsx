import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, hashHistory } from 'react-router-dom';
import store from './store';
//import showResults from './showResults';
import SyncValidationForm from './SyncValidationForm.jsx';

const rootEl = document.getElementById('app');
const showResults = (values) => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <div style={{ padding: 15 }}>
        <h2>Synchronous Validation</h2>
        <SyncValidationForm onSubmit={showResults} />
      </div>
    </Router>
  </Provider>,
  rootEl,
);
