 

import axios from '../axios/axios';

const getTeam = (callback) => {
  axios.get('/team/')
    .then(res => {
      // console.log(res.data);
      callback(res.data);
    })
    .catch(err => {
      callback({
        status: 'error',
        data: err
      });
    });
};

export default getTeam;