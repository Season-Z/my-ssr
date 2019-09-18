import { CHANGE_LIST } from './constance';

const defaultState = {
  newList: '',
  name: 'heihei'
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newList: action.newList.msg
      };
    default:
      return state;
  }
};
