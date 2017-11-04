import { FETCH_SENATORS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SENATORS:
      return action.payload;
    default:
      return state;
  }
}