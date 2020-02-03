 

import React from 'react';

import './page-banner.css';

const pageBanner = (props) => {
  return (
    <div className={`page-banner ${props.classValue}`}>
      <div className="container container--page-banner">
        <h1 className="primary-heading u-text-center">
          <span className="primary-heading--main">{props.heading}</span>
          <hr className="hr--primary-heading"/>
          <span className="primary-heading--sub">{props.subHeading}</span>
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default pageBanner;