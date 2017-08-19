import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2>HomePage</h2>
        <Link to='/second'>Second</Link>
      </div>
    );
  }
}