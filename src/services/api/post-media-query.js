 

import axios from '../axios/axios';

const postMediaQuery = (callback, data) => {
  axios.post('queries/media/', data)
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postMediaQuery;