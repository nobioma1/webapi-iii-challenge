import axios from 'axios';

import { USERS_URL } from './users';

const POSTS_URL = 'https://webapi-iii-challenge-be.herokuapp.com/api/posts';

export const POSTS_ACTION_ERROR = 'POSTS_ACTION_ERROR';
export const POSTS_ACTION_START = 'POSTS_ACTION_START';

export const SUCCESS_GETTING_POSTS = 'SUCCESS_GETTING_POSTS';

export const getPosts = () => async dispatch => {
  dispatch({ type: POSTS_ACTION_START });
  try {
    const posts = await axios.get(POSTS_URL);
    dispatch({ type: SUCCESS_GETTING_POSTS, payload: posts.data });
  } catch (error) {
    if (error && error.response) {
      dispatch({
        type: POSTS_ACTION_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};

export const SUCCESS_DELETING_POST = 'SUCCESS_DELETING_POST';

export const deletePost = id => async dispatch => {
  dispatch({ type: POSTS_ACTION_START });
  try {
    await axios.delete(`${POSTS_URL}/${id}`);
    dispatch({ type: SUCCESS_DELETING_POST });
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: POSTS_ACTION_ERROR, payload: error.response.data.message });
  }
};

export const SUCCESS_ADDING_POST = 'SUCCESS_ADDING_POST';

export const addPost = (id, post) => async dispatch => {
  dispatch({ type: POSTS_ACTION_START });
  try {
    await axios.post(`${USERS_URL}/${id}/posts`, post);
    dispatch({ type: SUCCESS_ADDING_POST });
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: POSTS_ACTION_ERROR, payload: error.response.data.message });
  }
};
