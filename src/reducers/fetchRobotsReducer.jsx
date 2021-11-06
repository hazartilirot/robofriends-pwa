import { 
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from '../constants';

const initialState = {
  isPending: false,
  robots: [],
  error: ''
};

export const fetchRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case FETCH_ROBOTS_SUCCESS:
      return  { ...state, isPending: false, robots: action.payload }
    case FETCH_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload }
    default:
      return state;
  }
}
