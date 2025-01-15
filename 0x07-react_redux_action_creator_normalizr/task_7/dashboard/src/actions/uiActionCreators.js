import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch'; // Used to make HTTP requests

/**
 * Action to handle successful login
 * @param {Object} user - The user object returned from API
 * @returns {Object} Action object
 */
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

/**
 * Action to handle failed login
 * @param {string} error - Error message
 * @returns {Object} Action object
 */
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

/**
 * Async action creator to log in the user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Function} A thunk action that dispatches actions
 */
export const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN, user: { email, password } });

  try {
    const response = await fetch('/login-success.json', {
      method: 'GET',
    });
    
    if (response.ok) {
      const user = await response.json();
      dispatch(loginSuccess(user));
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
