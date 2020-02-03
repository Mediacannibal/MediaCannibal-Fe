 

import React from 'react';

import './form-control.css';

const formControl = (props) => {
  return (
    <div className="form-control flex-column">
      {props.children}
    </div>
  );
};

export default formControl;