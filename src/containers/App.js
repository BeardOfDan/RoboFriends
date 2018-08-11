import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import axios from 'axios';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    'searchField': state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    'onSearchChange': (event) => {
      dispatch(setSearchField(event.target.value));
    }
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'robots': []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        this.setState({ 'robots': data });
      })
      .catch((e) => {
        console.log('Error in getting user data!\n' + e);
      });
  }

  render() {
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (this.state.robots.length) ?
      (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <Searchbox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
      : (<h1 className="tc f1">Loading robots...</h1>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
