 

import React from 'react';

import './form.css';

const form = (props) => {
  return (
    <form className={props.classValue} onSubmit={props.onSubmitHandler}>
      {props.children}
    </form>
  );
};

export default form;