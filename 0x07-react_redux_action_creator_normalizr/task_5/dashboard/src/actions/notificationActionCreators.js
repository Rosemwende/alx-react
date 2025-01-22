import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action to mark a notification as read
 * @param {number} index - Index of the notification to mark as read
 * @returns {Object} Action object
 */
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action to set the notification filter
 * @param {string} filter - Filter type (DEFAULT or URGENT)
 * @returns {Object} Action object
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});
