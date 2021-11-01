import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import ViewUsers from './components/ViewUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/view-all-users' component={ViewUsers} />
          <Route path='/add-new-user' component={CreateUser} />
    
        </div>
      </Router>
    );
  }
}

export default App;