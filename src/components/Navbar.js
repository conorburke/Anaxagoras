import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper blue-grey">
          <Link
            to='/'
            className="left brand-logo"
            style={{margin: '0px 15px'}}
          >
            Science My Senator
          </Link>
          <ul className="right">
            <li><Link to='/senatorList'>All Senators</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
