import React from 'react';
import CardList from './CardList';
import robots from './../robots.js';

export default (props) => {
  return (
    <CardList robots={robots} />
  );
};
