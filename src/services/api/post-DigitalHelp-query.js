 

import axios from '../axios/axios';

const DigitalHelp = (callback, data) => {
  axios.post('queries/digitalhelp/', data)
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default DigitalHelp;