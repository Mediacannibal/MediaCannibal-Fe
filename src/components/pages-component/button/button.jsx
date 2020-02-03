 

import React from 'react';

import './button.css';

const button = (props) => {
  return (
    <button className={props.classValue} type="submit" disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default button;