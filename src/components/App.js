import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Chart from './Chart';
import Landing from './Landing';
import SenatorList from './SenatorList';
import Navbar from './Navbar';

class App extends Component {
  componentDidMount() {
    this.props.fetchSenators();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/senatorList' component={SenatorList} />
            <Route exact path='/chart' component={Chart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// function mapStateToProps({ senators }) {
//   return { senators };
// }

export default connect(null, actions)(App);
