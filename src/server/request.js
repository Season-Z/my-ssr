//新建server/request.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://119.29.232.127:8077'
});

export default instance;
