import React from 'react';
import Card from './Card';

export default ({ robots }) => {
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
