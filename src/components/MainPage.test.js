import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('MainPage', () => {
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    // an empty robots array should have no results
    expect(wrapper.instance().filterRobots()).toEqual([]);

    // an array with a matched element should return a result
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 7,
          name: 'John Snow',
          email: 'kingOfTheNorth@gmail.com'
        },
        {
          id: 9,
          name: 'Ender Wiggin',
          email: 'theXenocide@gmail.com'
        }
      ],
      searchField: 'o',
      isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps} />);

    expect(wrapper.instance().filterRobots().length).toBe(1);

    // a search that doesn't match any results should return no robots
    mockProps.searchField = 'a';
    wrapper = shallow(<MainPage {...mockProps} />);

    expect(wrapper.instance().filterRobots().length).toBe(0);
  });
});
