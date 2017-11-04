import { FETCH_SENATORS } from './types';

export const fetchSenators = () => async dispatch => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', {
        method: 'GET',
        headers: {
          'X-API-Key': process.env.REACT_APP_PROPUBLICA_API_KEY,
          'Access-Control-Request-Headers': '*'
        }
      }).then(response => response.json())
      .then(data => dispatch({ type: FETCH_SENATORS, payload: data.results[0].members }));    
}