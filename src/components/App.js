import React from 'react';
import CardList from './CardList';
import robots from './../robots.js';
import Searchbox from './Searchbox';

export default (props) => {
  return (
    <div>
      <h1>Robo Friends</h1>
      <Searchbox />
      <CardList robots={robots} />
    </div>
  );
};
