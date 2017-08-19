import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senators: []
    }
  }

  // renderContent() {
  //   const list =[];
  //   fetch('https://api.propublica.org/congress/v1/115/senate/members.json', {
  //     method: 'GET',
  //     headers: {
  //       'X-API-Key': 'dYWbdesS99cIjyp1jAJ9vWcSXILAI1hEG5S38sE2'
  //     }
  //   }).then(response => response.json())
  //     .then(data => {
  //       data.results[0].members.map(senator => list.push(<li>{senator.last_name}</li>));
  //       console.log(list);
  //       return list;
  //     });
  // }

  componentDidMount() {
    const list =[];
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', {
      method: 'GET',
      headers: {
        'X-API-Key': process.env.REACT_APP_PROPUBLICA_API_KEY
      }
    }).then(response => response.json())
      .then(data => {
        data.results[0].members.map(senator => list.push(<li key={senator.id}>{senator.last_name}</li>));
        console.log(list);
        this.setState({senators: list});
      });
  }

  render() {
    return (
      <div>
        <h2>Second</h2>
        <Link to='/'>HomePage</Link>
        <ul>{this.state.senators}</ul>
      </div>
    );
  }
}