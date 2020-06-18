import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchMatches = () => (dispatch) => {

    dispatch(matchesLoading(true));

    return fetch(baseUrl + 'matchInfo')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(matches => dispatch(addMatches(matches)))
    .catch(error => dispatch(matchesFailed(error.message)));
}

export const matchesLoading = () => ({
    type: ActionTypes.MATCHES_LOADING
});

export const matchesFailed = (errmess) => ({
    type: ActionTypes.MATCHES_FAILED,
    payload: errmess
});

export const addMatches = (matches) => ({
    type: ActionTypes.ADD_MATCHES,
    payload: matches
});