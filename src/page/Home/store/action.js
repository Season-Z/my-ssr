import { CHANGE_LIST } from './constance';

export const getValue = () => {
  //返回函数中的默认第三个参数是 withExtraArgument 传进来的axios实例
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/message').then(res => {
      dispatch({
        type: CHANGE_LIST,
        newList: res.data
      });
    });
  };
};
