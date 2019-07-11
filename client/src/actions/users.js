import axios from 'axios';
export const USERS_URL = 'http://localhost:5000/api/users';

export const USERS_ACTION_ERROR = 'USERS_ACTION_ERROR';
export const USERS_ACTION_START = 'USERS_ACTION_START';

export const SUCCESS_GETTING_USERS = 'SUCCESS_GETTING_USERS';

export const getUsers = () => async dispatch => {
  dispatch({ type: USERS_ACTION_START });
  try {
    const users = await axios.get(USERS_URL);
    dispatch({ type: SUCCESS_GETTING_USERS, payload: users.data });
  } catch (error) {
    dispatch({ type: USERS_ACTION_ERROR, payload: error.response.data.message });
  }
};

export const SUCCESS_DELETING_USER = 'SUCCESS_DELETING_USER';

export const deleteUser = id => async dispatch => {
  dispatch({ type: USERS_ACTION_START });
  try {
    await axios.delete(`${USERS_URL}/${id}`);
    dispatch({ type: SUCCESS_DELETING_USER });
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: USERS_ACTION_ERROR, payload: error.response.data.message });
  }
};

export const SUCCESS_GETTING_USER_POSTS = 'SUCCESS_GETTING_USER_POSTS';

export const getUserPosts = id => async dispatch => {
  dispatch({ type: USERS_ACTION_START });
  try {
    const post = await axios.get(`${USERS_URL}/${id}/posts`);
    dispatch({ type: SUCCESS_GETTING_USER_POSTS, payload: post.data });
  } catch (error) {
    dispatch({ type: USERS_ACTION_ERROR, payload: error.response.data.message });
  }
};

export const SUCCESS_ADDING_USER = 'SUCCESS_ADDING_USER';

export const addUser = user => async dispatch => {
  dispatch({ type: USERS_ACTION_START });
  try {
    await axios.post(USERS_URL, user);
    dispatch({ type: SUCCESS_ADDING_USER });
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: USERS_ACTION_ERROR, payload: error.response.data.error });
  }
};

