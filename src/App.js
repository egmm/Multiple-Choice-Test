import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Test from './TestView/containers/TestView';


function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Test} />
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
