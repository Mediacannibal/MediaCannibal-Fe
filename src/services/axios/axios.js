 

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api2.etherealmachines.com/v1'
});

export default instance;
