import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js';

import * as actions from './actions';

describe('', () => {
  it('should create an action to search robots', () => {
    const text = 'waldo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});
