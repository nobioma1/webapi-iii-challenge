import {
  SUCCESS_GETTING_USERS,
  USERS_ACTION_START,
  USERS_ACTION_ERROR,
  SUCCESS_DELETING_USER,
  SUCCESS_GETTING_USER_POSTS,
  SUCCESS_ADDING_USER,
} from '../actions/users';

const initialState = {
  users: [],
  userPosts: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_ACTION_START:
      return { ...state, error:null, isLoading: true };
    case SUCCESS_GETTING_USERS:
      return { ...state, isLoading: false, users: action.payload };
    case SUCCESS_GETTING_USER_POSTS:
      return { ...state, isLoading: false, userPosts: [...action.payload] };
    case SUCCESS_ADDING_USER:
      return { ...state, isLoading: false };
    case SUCCESS_DELETING_USER:
      return { ...state, isLoading: false };
    case USERS_ACTION_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
