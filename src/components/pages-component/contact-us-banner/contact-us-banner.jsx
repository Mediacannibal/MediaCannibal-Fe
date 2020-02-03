 

import React from 'react';

import './contact-us-banner.css';

import NavBtn from '../../../components/ui/nav-btn/nav-btn';

const contactUsBanner = (props) => {
  return (
    <div className="contact-us-banner">
      <div className="content">
        <div className="question">
          <span>{props.firstText}</span>
          <br/>
          <span>{props.secondText}</span>
        </div>
        <NavBtn url={'contact'} classValue={'btn--transparent btn--golden btn--left-aligned'}>Contact Us</NavBtn>
      </div>
    </div>
  );
};

export default contactUsBanner;