import React from 'react';
import Card from './Card';
import { robots } from './../robots'; // Sample users list

export default () => {
  return (
    <div className='tc'>
      {robots.map((robot, i, arr) => {
        return (
          <Card key={robot.username} robot={robot} />
        );
      })}
    </div>
  );
};
