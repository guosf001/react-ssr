import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div onClick={() => console.log(111)}>
      home works112221
      <Link to="/list">jump to list</Link>
    </div>
  );
};
