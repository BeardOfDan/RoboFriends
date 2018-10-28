import { shallow } from 'enzyme';

import React from 'react';
import Card from './Card';

describe('Card component', () => {
  it('should render', () => {
    const testRobot = { name: 'testName', email: 'testEmail', id: 0 };
    expect(shallow(<Card robot={testRobot} />).length).toEqual(1);
    expect(shallow(<Card robot={testRobot} />)).toMatchSnapshot();
  });
});
