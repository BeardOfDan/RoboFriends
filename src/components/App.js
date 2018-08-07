import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'robots': [],
      'filteredRobots': []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({ 'filteredRobots': res.data, 'robots': res.data });
      })
      .catch((e) => {
        console.log('Error in getting user data!\n' + e);
      });
  }

  onSearchChange = (event) => {
    const target = event.target.value;

    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(target.toLowerCase());
    });

    this.setState({ filteredRobots });
  };

  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
      </div>
    );
  }
}
