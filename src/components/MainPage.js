import React, { Component } from 'react';

import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robots) => {
    return robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;

    return (isPending) ? (<h1 className="tc f1">Loading robots...</h1>)
      : (
        <div className="tc">
          <Header />
          <Searchbox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;
