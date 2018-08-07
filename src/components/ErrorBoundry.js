import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'hasError': false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ 'hasError': true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Whoops! An error has occured.</h1>
      );
    }

    return this.props.children;
  }
}

