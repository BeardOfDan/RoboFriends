import React from 'react';

export default ({ searchChange }) => {
  return (
    <div>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        aria-label="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
}
