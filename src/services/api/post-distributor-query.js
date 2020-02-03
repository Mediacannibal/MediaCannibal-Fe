 

import axios from '../axios/axios';

const postDistributorQuery = (callback, data) => {
  axios.post('queries/distributor/', data)
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postDistributorQuery;