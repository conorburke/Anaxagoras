import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class SenatorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senators: []
    }
  }

  componentDidMount() {
    const list =[];
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', {
      method: 'GET',
      headers: {
        'X-API-Key': process.env.REACT_APP_PROPUBLICA_API_KEY
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        data.results[0].members.map(senator => list.push(
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
          </li>));
        console.log(list);
        this.setState({senators: list});
      });
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Current Senators</h2>
        <ul style={{margin: '0 auto'}}>{this.state.senators}</ul>
      </div>
    );
  }
}


