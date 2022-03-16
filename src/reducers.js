import {
  SEARCH_BOX_CHANGE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  SearchBoxChange: "",
};

export const searchTheRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SEARCH_BOX_CHANGE:
      return Object.assign({}, state, { SearchBoxChange: action.payload });

    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });

    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });

    default:
      return state;
  }
};
