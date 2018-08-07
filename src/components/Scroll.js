import React from 'react';

export default (props) => {
  return (
    <div style={{ 'overflowY': 'scroll', 'border': '3px solid black', 'height': '500px', 'margin': '15px' }}>
      {props.children}
    </div>
  );
}
