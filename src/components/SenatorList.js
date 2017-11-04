import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SenatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSenators: []
    }
  }

  renderSenators() {
    return (this.setState({currentSenators: 
      this.props.senators.map(senator => 
          <li key={senator.id}>
            <div className="row">
              <div className="col m6 offset-m3">
                <div className={`card darken-1 ${senator.party === 'R' ? 'red' : 'blue'}`}>
                  <div className="card-content white-text">
                    <span className="card-title">{`${senator.first_name} ${senator.last_name}`}</span>
                    <p>Party: {senator.party}</p>
                    <p>State: {senator.state}</p>
                    <p>Twitter: {senator.twitter_account}</p>
                  </div>
                  <div className="card-action">
                    <a href={senator.url} target="_blank">Website</a>
                    <a href={senator.contact_form} target="_blank">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
      )
    );
  }

  componentDidMount() {
    this.renderSenators();
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Current Senators</h2>
        <ul style={{margin: '0 auto'}}>{this.state.currentSenators}</ul>
      </div>
    );
  }
} 

function mapStateToProps({ senators }) {
  return { senators };
}

export default connect(mapStateToProps, actions)(SenatorList);
