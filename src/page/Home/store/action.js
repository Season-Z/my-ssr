import axios from 'axios';
import { CHANGE_LIST } from './constance';

export const getValue = () => {
  return dispatch =>
    axios
      .get(
        'http://cg.test.91gfd.cn/zxmx/cashAndClear/getAmountDetail?dateStart=2019-08-15&dateEnd=2019-09-18'
      )
      .then(res => {
        dispatch({
          type: CHANGE_LIST,
          newList: res.data
        });
      });
};
