 

import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-btn.css';

const navBtn = (props) => {
  const basicClass = ['nav-btn', 'btn'];
  const newClass = props.classValue.split(' ');
  const classes = basicClass.concat(newClass);

  return (
    <div className={classes.join(' ')}>
      <NavLink to={'/' + props.url}>{props.children}</NavLink>
    </div>
  );
};

export default navBtn;