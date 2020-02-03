 

import React from 'react';

import './team-loader.css';

const teamLoader = (props) => {
  return (
    <div className="team-loader">
      <div className="member-img-container flex-row" type="background-white" >
        <div className="loader-img"></div>
      </div>
      <div className="member-details">
        <div className="detail-loader"></div>
        <div className="detail-loader"></div>
        <div className="detail-loader"></div>
      </div>
    </div>
  );
};

export default teamLoader;