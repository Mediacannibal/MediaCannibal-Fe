 

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api2.MediaCannibal.com/v1'
});

export default instance;
