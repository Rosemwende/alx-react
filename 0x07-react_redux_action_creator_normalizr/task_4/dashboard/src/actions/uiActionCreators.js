import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Action to log in a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Object} Action object
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action to log out a user
 * @returns {Object} Action object
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action to display the notification drawer
 * @returns {Object} Action object
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action to hide the notification drawer
 * @returns {Object} Action object
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
