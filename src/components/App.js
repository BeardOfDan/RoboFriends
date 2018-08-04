import React, { Component } from 'react';
import CardList from './CardList';
import robots from './../robots.js';
import Searchbox from './Searchbox';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots,
      'searchField': ''
    };
  }

  render() {
    return (
      <div className='tc'>
        <h1>Robo Friends</h1>
        <Searchbox />
        <CardList robots={robots} />
      </div>
    );
  }
}
