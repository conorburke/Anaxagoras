import { FETCH_SENATORS } from './types';

export const fetchSenators = () => dispatch => {
    let senators = [];
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', {
        method: 'GET',
        headers: {
          'X-API-Key': process.env.REACT_APP_PROPUBLICA_API_KEY
        }
      }).then(response => response.json())
      .then(data => {
          senators = data.results[0].members;
          console.log(senators);
      });

      dispatch({ type: FETCH_SENATORS, payload: senators });
}