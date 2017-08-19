import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{margin: '0px 10px'}}>
          <Link
            to='/'
            className="left brand-logo"
          >
            Science My Senator
          </Link>
          <ul className="right">
            <li><Link to='/second'>Second</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
