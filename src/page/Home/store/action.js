import axios from 'axios';
import { CHANGE_LIST } from './constance';

export const getValue = () => {
  return dispatch =>
    axios.get('http://119.29.232.127:8077/api/message').then(res => {
      dispatch({
        type: CHANGE_LIST,
        newList: res.data
      });
    });
};
