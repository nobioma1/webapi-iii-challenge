import {
  POSTS_ACTION_START,
  POSTS_ACTION_ERROR,
  SUCCESS_GETTING_POSTS,
  SUCCESS_DELETING_POST,
  SUCCESS_ADDING_POST,
} from '../actions/posts';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_ACTION_START:
      return { ...state, error:null, isLoading: true };
    case SUCCESS_GETTING_POSTS:
      return { ...state, isLoading: false, posts: action.payload };
    case SUCCESS_ADDING_POST:
      return { ...state, isLoading: false };
    case SUCCESS_DELETING_POST:
      return { ...state, isLoading: false };
    case POSTS_ACTION_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
