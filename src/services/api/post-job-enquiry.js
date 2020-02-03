 

import axios from '../axios/axios';

const postJobEnquiry = (callback, data) => {
  axios.post('careers/enquiries/', data)
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postJobEnquiry;