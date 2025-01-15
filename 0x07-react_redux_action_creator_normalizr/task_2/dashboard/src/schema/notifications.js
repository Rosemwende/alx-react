import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
  'notifications',
  { author: user, context: message },
  { idAttribute: 'id' }
);

const normalizedData = normalize(notificationsData.default, [notification]);

/**
 * Get all notifications by user
 * @param {string} userId - ID of the user
 * @returns {Array} List of context objects for the user
 */
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  const result = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      result.push(messages[notifications[id].context]);
    }
  }

  return result;
};

export { normalizedData, user, message, notification };
