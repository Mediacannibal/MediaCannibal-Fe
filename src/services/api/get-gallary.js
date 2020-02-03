import axios from '../axios/axios';
import headers from '../axios/headers';

const getGallary = (callback) => {
  axios.get('/gallary/',{headers})
    .then(res => {
      //console.log(res);
      callback(res);
    })
    .catch(err => {
      callback({
        status: 'error',
        data: err
      });
    });
};

export default getGallary;