import { 
  SEARCH_ROBOT,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from './constants'
import { fetchRobotsList } from './utilities'

export const setSearchRobot = text => ({
  type: SEARCH_ROBOT,
  payload: text
})

export const fetchRobots = dispatch => {
  dispatch({ type: FETCH_ROBOTS_PENDING });

  fetchRobotsList()
    .then(({ data }) => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_ROBOTS_FAILED, payload: error }));
}


