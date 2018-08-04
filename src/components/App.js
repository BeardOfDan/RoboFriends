import React, { Component } from 'react';
import CardList from './CardList';
import robots from './../robots.js';
import Searchbox from './Searchbox';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'filteredRobots': robots
    };
  }

  onSearchChange = (event) => {
    const target = event.target.value;

    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(target.toLowerCase());
    });

    this.setState({ filteredRobots });
  };

  render() {
    return (
      <div className='tc'>
        <h1>Robo Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
      </div>
    );
  }
}
