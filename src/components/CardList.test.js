import { shallow } from 'enzyme';

import React from 'react';
import CardList from './CardList';

describe('CardList component', () => {
  it('should render', () => {
    const testRobots = [
      { name: 'firstName', email: 'firstEmail', id: 0 },
      { name: 'secondName', email: 'secondEmail', id: 1 },
      { name: 'thirdName', email: 'thirdEmail', id: 2 }
    ];
    expect(shallow(<CardList robots={testRobots} />).length).toEqual(1);
    expect(shallow(<CardList robots={testRobots} />)).toMatchSnapshot();
  });
});
