import { 
  SEARCH_ROBOT
} from '../constants';

const initialState = {
  search: '',
};

export const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_ROBOT:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};