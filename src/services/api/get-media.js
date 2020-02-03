 

import axios from '../axios/axios';
import headers from '../axios/headers';

const getMedia = (callback) => {
  axios.get('/medias/',{headers})
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

export default getMedia;