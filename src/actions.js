import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import axios from 'axios';

export const setSearchField = (text) => {
  return {
    'type': CHANGE_SEARCH_FIELD,
    'payload': text
  };
};

export const requestRobots = () => {
  return (dispatch) => {
    dispatch({ 'type': REQUEST_ROBOTS_PENDING });

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch({
          'type': REQUEST_ROBOTS_SUCCESS,
          'payload': data
        });
      })
      .catch((e) => {
        dispatch({
          'type': REQUEST_ROBOTS_FAILED,
          'payload': e
        });
      });
  };
};
