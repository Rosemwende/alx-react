import * as notificationsData from '../../notifications.json';

/**
 * Retrieves all notification contexts for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Array} - A list of context objects matching the user ID.
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}
