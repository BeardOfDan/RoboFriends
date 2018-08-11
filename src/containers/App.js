import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
      .then(({ data }) => {
        this.setState({ 'filteredRobots': data, 'robots': data });
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
    return (this.state.robots.length) ?
      (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.state.filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
      : (<h1 className="tc f1">Loading robots...</h1>);
  }
}
