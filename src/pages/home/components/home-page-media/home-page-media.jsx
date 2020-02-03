 

import React from 'react';

import './home-page-media.css';
import HomePageMediaItem from  './components/home-page-media-item/home-page-media-item';
import NavBtn from '../../../../components/ui/nav-btn/nav-btn';

import mediaLinks from './media-links';

const homePageMedia = (props) => {
  const homePageMediaItems = mediaLinks.map((item) => {
    return (
      <HomePageMediaItem key={item.id} url={item.url} imgUrl={item.imgUrl}/>
    );
  });

  return (
    <div className="home-page-media-container three-col-layout">
      {homePageMediaItems}
      <NavBtn url={'media'} classValue={'btn--blue'}>See More</NavBtn>
    </div>
  );
};

export default homePageMedia;