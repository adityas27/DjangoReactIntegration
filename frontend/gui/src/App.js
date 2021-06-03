
import React, { Component } from 'react'
import CustomLayout from './containers/Layout'

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component {
  render()
  {
    return (
    <>
      <Router>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout>
      </Router>
    </>
  )}
}

export default App;
