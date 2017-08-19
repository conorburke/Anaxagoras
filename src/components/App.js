import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import SenatorList from './SenatorList';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/senatorList" component={SenatorList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
