 

import React from 'react';

const sectionHeading = (props) => {
  return (
    <div className={props.classValue}>
      <h3 className="section-heading">{props.name}</h3>
      {
        props.hasSubHeading ?
        <span className="section-sub-heading">{props.subHeading}</span> :
        null
      }
    </div>
  );
};

export default sectionHeading;