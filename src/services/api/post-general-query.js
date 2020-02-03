 

import axios from '../axios/axios';

const postGeneralQuery = (callback, data) => {
  axios.post('queries/general/', data)
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postGeneralQuery;